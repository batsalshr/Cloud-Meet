import { error, json } from "@sveltejs/kit";
import { g as getValidAccessToken, c as createCalendarEvent } from "../../../../chunks/google-calendar.js";
import { g as getValidOutlookAccessToken, c as createOutlookCalendarEvent } from "../../../../chunks/outlook-calendar.js";
import { g as getEmailTemplates, i as isEmailEnabled, s as sendBookingEmail, a as sendAdminNotificationEmail } from "../../../../chunks/index3.js";
import { v as validateFields, a as validateLength, M as MAX_LENGTHS, i as isValidEmail } from "../../../../chunks/validation.js";
const POST = async ({ request, platform }) => {
  const env = platform?.env;
  if (!env) {
    throw error(500, "Platform env not available");
  }
  try {
    const body = await request.json();
    const { eventSlug, startTime, endTime, attendeeName, attendeeEmail, notes, turnstileToken, timezone } = body;
    if (!eventSlug || !startTime || !endTime || !attendeeName || !attendeeEmail) {
      throw error(400, "Missing required fields");
    }
    const lengthError = validateFields([
      validateLength(attendeeName, "Name", MAX_LENGTHS.name, true),
      validateLength(attendeeEmail, "Email", MAX_LENGTHS.email, true),
      validateLength(notes, "Notes", MAX_LENGTHS.notes, false)
    ]);
    if (lengthError) {
      throw error(400, lengthError);
    }
    if (!isValidEmail(attendeeEmail)) {
      throw error(400, "Invalid email address");
    }
    if (turnstileToken) {
      const turnstileResponse = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            secret: env.TURNSTILE_SECRET_KEY || "",
            response: turnstileToken
          })
        }
      );
      const turnstileResult = await turnstileResponse.json();
      if (!turnstileResult.success) {
        throw error(400, "Turnstile verification failed");
      }
    }
    const db = env.DB;
    const user = await db.prepare("SELECT id, email, name, slug, contact_email, settings, brand_color, outlook_refresh_token FROM users LIMIT 1").first();
    if (!user) {
      throw error(404, "User not found");
    }
    const eventType = await db.prepare("SELECT id, name, duration_minutes as duration, description, invite_calendar FROM event_types WHERE user_id = ? AND slug = ? AND is_active = 1").bind(user.id, eventSlug).first();
    if (!eventType) {
      throw error(404, "Event type not found or inactive");
    }
    let userSettings = {};
    try {
      userSettings = user.settings ? JSON.parse(user.settings) : {};
    } catch {
      userSettings = {};
    }
    const outlookConnected = !!user.outlook_refresh_token;
    const outlookConfigured = !!(env.MICROSOFT_CLIENT_ID && env.MICROSOFT_CLIENT_SECRET);
    let inviteCalendar = eventType.invite_calendar || userSettings.defaultInviteCalendar || "google";
    if (inviteCalendar === "outlook" && (!outlookConnected || !outlookConfigured)) {
      inviteCalendar = "google";
    }
    const startDateTime = new Date(startTime);
    const endDateTime = new Date(endTime);
    const conflict = await db.prepare(
      `SELECT id FROM bookings
				WHERE user_id = ? AND status = 'confirmed'
				AND (
					(start_time <= ? AND end_time > ?)
					OR (start_time < ? AND end_time >= ?)
					OR (start_time >= ? AND end_time <= ?)
				)`
    ).bind(user.id, startTime, startTime, endTime, endTime, startTime, endTime).first();
    if (conflict) {
      throw error(409, "This time slot is no longer available");
    }
    let googleEventId = null;
    let outlookEventId = null;
    let meetingUrl = null;
    if (inviteCalendar === "google") {
      try {
        const accessToken = await getValidAccessToken(
          db,
          user.id,
          env.GOOGLE_CLIENT_ID,
          env.GOOGLE_CLIENT_SECRET
        );
        const calendarEvent = await createCalendarEvent(accessToken, {
          summary: `${eventType.name} with ${attendeeName}`,
          description: `${eventType.description || ""}

Attendee: ${attendeeName} (${attendeeEmail})${notes ? `

Notes from attendee:
${notes}` : ""}`,
          start: {
            dateTime: startDateTime.toISOString(),
            timeZone: "UTC"
          },
          end: {
            dateTime: endDateTime.toISOString(),
            timeZone: "UTC"
          },
          attendees: [
            { email: attendeeEmail }
          ],
          conferenceData: {
            createRequest: {
              requestId: crypto.randomUUID(),
              conferenceSolutionKey: { type: "hangoutsMeet" }
            }
          }
        });
        googleEventId = calendarEvent.id;
        meetingUrl = calendarEvent.hangoutLink || null;
      } catch (err) {
        console.error("Error creating Google Calendar event:", err);
      }
    } else if (inviteCalendar === "outlook" && env.MICROSOFT_CLIENT_ID && env.MICROSOFT_CLIENT_SECRET) {
      try {
        const outlookToken = await getValidOutlookAccessToken(
          db,
          user.id,
          env.MICROSOFT_CLIENT_ID,
          env.MICROSOFT_CLIENT_SECRET
        );
        const outlookEvent = await createOutlookCalendarEvent(outlookToken, {
          summary: `${eventType.name} with ${attendeeName}`,
          description: `${eventType.description || ""}

Attendee: ${attendeeName} (${attendeeEmail})${notes ? `

Notes from attendee:
${notes}` : ""}`,
          startTime: startDateTime.toISOString(),
          endTime: endDateTime.toISOString(),
          attendeeEmail,
          hostEmail: user.email,
          createTeamsMeeting: true
        });
        outlookEventId = outlookEvent.id;
        if (outlookEvent.onlineMeeting?.joinUrl) {
          meetingUrl = outlookEvent.onlineMeeting.joinUrl;
        }
      } catch (err) {
        console.error("Error creating Outlook Calendar event:", err);
      }
    }
    const result = await db.prepare(
      `INSERT INTO bookings (
					user_id, event_type_id, start_time, end_time,
					attendee_name, attendee_email, attendee_notes, status,
					google_event_id, outlook_event_id, meeting_url, created_at
				) VALUES (?, ?, ?, ?, ?, ?, ?, 'confirmed', ?, ?, ?, CURRENT_TIMESTAMP)`
    ).bind(
      user.id,
      eventType.id,
      startTime,
      endTime,
      attendeeName,
      attendeeEmail,
      notes || null,
      googleEventId,
      outlookEventId,
      meetingUrl
    ).run();
    const dateStr = startDateTime.toISOString().split("T")[0];
    const cacheKey = `availability:${eventSlug}:${dateStr}`;
    await env.KV.delete(cacheKey);
    if (env.EMAILIT_API_KEY) {
      try {
        let timeFormat = "12h";
        try {
          const settings = user.settings ? JSON.parse(user.settings) : {};
          timeFormat = settings.timeFormat === "24h" ? "24h" : "12h";
        } catch {
        }
        const replyToEmail = user.contact_email || user.email;
        const bookingResult = await db.prepare("SELECT id FROM bookings WHERE google_event_id = ? OR outlook_event_id = ? OR (user_id = ? AND start_time = ? AND attendee_email = ?)").bind(googleEventId, outlookEventId, user.id, startTime, attendeeEmail).first();
        const bookingId = bookingResult?.id || result.meta.last_row_id?.toString() || "";
        const templates = await getEmailTemplates(db, user.id);
        const confirmationEnabled = isEmailEnabled(templates, "confirmation");
        const emailData = {
          attendeeName,
          attendeeEmail,
          eventName: eventType.name,
          eventDescription: eventType.description || "",
          startTime: startDateTime,
          endTime: endDateTime,
          meetingUrl,
          meetingType: inviteCalendar === "outlook" ? "teams" : "google_meet",
          bookingId,
          hostName: user.name,
          hostEmail: user.email,
          hostContactEmail: user.contact_email || void 0,
          appUrl: env.APP_URL || "",
          timeFormat,
          timezone: timezone || "UTC",
          brandColor: user.brand_color || void 0,
          attendeeNotes: notes || void 0
        };
        if (confirmationEnabled) {
          const template = templates.get("confirmation");
          await sendBookingEmail(
            {
              ...emailData,
              customMessage: template?.custom_message
            },
            {
              apiKey: env.EMAILIT_API_KEY,
              from: env.EMAIL_FROM || user.email,
              replyTo: replyToEmail
            },
            template?.subject || void 0
          );
        }
        await sendAdminNotificationEmail(
          emailData,
          user.contact_email || user.email,
          {
            apiKey: env.EMAILIT_API_KEY,
            from: env.EMAIL_FROM || user.email
          }
        );
        const reminderTypes = ["reminder_24h", "reminder_1h"];
        const reminderOffsets = {
          "reminder_24h": 24 * 60 * 60 * 1e3,
          // 24 hours
          "reminder_1h": 60 * 60 * 1e3
          // 1 hour
        };
        for (const reminderType of reminderTypes) {
          if (isEmailEnabled(templates, reminderType)) {
            const scheduledFor = new Date(startDateTime.getTime() - reminderOffsets[reminderType]);
            if (scheduledFor > /* @__PURE__ */ new Date()) {
              await db.prepare(`INSERT INTO scheduled_emails (booking_id, template_type, scheduled_for) VALUES (?, ?, ?)`).bind(bookingId, reminderType, scheduledFor.toISOString()).run();
            }
          }
        }
      } catch (emailError) {
        console.error("Failed to send confirmation email:", emailError);
      }
    }
    return json({
      success: true,
      bookingId: result.meta.last_row_id,
      meetingUrl,
      meetingType: inviteCalendar === "outlook" ? "teams" : "google_meet"
    });
  } catch (err) {
    console.error("Booking creation error:", err);
    if (err?.status) throw err;
    throw error(500, "Failed to create booking");
  }
};
export {
  POST
};
