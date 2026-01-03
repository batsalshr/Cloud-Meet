import { error, json } from "@sveltejs/kit";
import { g as getValidAccessToken, b as cancelCalendarEvent, c as createCalendarEvent } from "../../../../../chunks/google-calendar.js";
import { g as getEmailTemplates, i as isEmailEnabled, c as sendRescheduleEmail, d as sendAdminRescheduleNotification } from "../../../../../chunks/index3.js";
const POST = async ({ request, platform }) => {
  const env = platform?.env;
  if (!env) {
    throw error(500, "Platform env not available");
  }
  try {
    const body = await request.json();
    const { bookingId, newStartTime, newEndTime, timezone } = body;
    if (!bookingId || !newStartTime || !newEndTime) {
      throw error(400, "Missing required fields");
    }
    const db = env.DB;
    const originalBooking = await db.prepare(
      `SELECT b.id, b.user_id, b.event_type_id, b.start_time, b.end_time,
				b.attendee_name, b.attendee_email, b.attendee_notes, b.google_event_id,
				e.name as event_name, e.slug as event_slug, e.description as event_description,
				e.duration_minutes as duration,
				u.id as host_user_id, u.name as host_name, u.email as host_email,
				u.contact_email, u.settings, u.brand_color
				FROM bookings b
				JOIN event_types e ON b.event_type_id = e.id
				JOIN users u ON b.user_id = u.id
				WHERE b.id = ? AND b.status IN ('confirmed', 'rescheduled')`
    ).bind(bookingId).first();
    if (!originalBooking) {
      throw error(404, "Booking not found or already cancelled");
    }
    const newStartDateTime = new Date(newStartTime);
    const newEndDateTime = new Date(newEndTime);
    const oldStartDateTime = new Date(originalBooking.start_time);
    const oldEndDateTime = new Date(originalBooking.end_time);
    const conflict = await db.prepare(
      `SELECT id FROM bookings
				WHERE user_id = ? AND status = 'confirmed' AND id != ?
				AND (
					(start_time <= ? AND end_time > ?)
					OR (start_time < ? AND end_time >= ?)
					OR (start_time >= ? AND end_time <= ?)
				)`
    ).bind(
      originalBooking.user_id,
      bookingId,
      newStartTime,
      newStartTime,
      newEndTime,
      newEndTime,
      newStartTime,
      newEndTime
    ).first();
    if (conflict) {
      throw error(409, "This time slot is no longer available");
    }
    let newCalendarEventId = null;
    let newMeetingUrl = null;
    try {
      const accessToken = await getValidAccessToken(
        db,
        originalBooking.user_id,
        env.GOOGLE_CLIENT_ID,
        env.GOOGLE_CLIENT_SECRET
      );
      if (originalBooking.google_event_id) {
        try {
          await cancelCalendarEvent(accessToken, originalBooking.google_event_id);
        } catch (err) {
          console.error("Error cancelling old Google Calendar event:", err);
        }
      }
      const notes = originalBooking.attendee_notes;
      const calendarEvent = await createCalendarEvent(accessToken, {
        summary: `${originalBooking.event_name} with ${originalBooking.attendee_name}`,
        description: `${originalBooking.event_description || ""}

Attendee: ${originalBooking.attendee_name} (${originalBooking.attendee_email})${notes ? `

Notes from attendee:
${notes}` : ""}`,
        start: {
          dateTime: newStartDateTime.toISOString(),
          timeZone: "UTC"
        },
        end: {
          dateTime: newEndDateTime.toISOString(),
          timeZone: "UTC"
        },
        attendees: [
          { email: originalBooking.attendee_email }
        ],
        conferenceData: {
          createRequest: {
            requestId: crypto.randomUUID(),
            conferenceSolutionKey: { type: "hangoutsMeet" }
          }
        }
      });
      newCalendarEventId = calendarEvent.id;
      newMeetingUrl = calendarEvent.hangoutLink || calendarEvent.htmlLink || null;
    } catch (err) {
      console.error("Error with Google Calendar:", err);
    }
    await db.prepare(
      `UPDATE bookings SET
					start_time = ?,
					end_time = ?,
					google_event_id = ?,
					meeting_url = ?,
					status = 'confirmed'
				WHERE id = ?`
    ).bind(
      newStartTime,
      newEndTime,
      newCalendarEventId,
      newMeetingUrl,
      bookingId
    ).run();
    await db.prepare(`UPDATE reschedule_proposals SET status = 'counter_proposed', responded_at = CURRENT_TIMESTAMP WHERE booking_id = ? AND status = 'pending'`).bind(bookingId).run();
    await db.prepare(`UPDATE scheduled_emails SET status = 'cancelled' WHERE booking_id = ? AND status = 'pending'`).bind(bookingId).run();
    const oldDateStr = oldStartDateTime.toISOString().split("T")[0];
    const newDateStr = newStartDateTime.toISOString().split("T")[0];
    await env.KV.delete(`availability:${originalBooking.event_slug}:${oldDateStr}`);
    await env.KV.delete(`availability:${originalBooking.event_slug}:${newDateStr}`);
    if (env.EMAILIT_API_KEY) {
      try {
        let timeFormat = "12h";
        try {
          const settings = originalBooking.settings ? JSON.parse(originalBooking.settings) : {};
          timeFormat = settings.timeFormat === "24h" ? "24h" : "12h";
        } catch {
        }
        const replyToEmail = originalBooking.contact_email || originalBooking.host_email;
        const templates = await getEmailTemplates(db, originalBooking.user_id);
        if (isEmailEnabled(templates, "reschedule")) {
          const template = templates.get("reschedule");
          await sendRescheduleEmail(
            {
              attendeeName: originalBooking.attendee_name,
              attendeeEmail: originalBooking.attendee_email,
              eventName: originalBooking.event_name,
              eventDescription: originalBooking.event_description || "",
              startTime: newStartDateTime,
              endTime: newEndDateTime,
              oldStartTime: oldStartDateTime,
              oldEndTime: oldEndDateTime,
              meetingUrl: newMeetingUrl,
              bookingId: originalBooking.id,
              hostName: originalBooking.host_name,
              hostEmail: originalBooking.host_email,
              hostContactEmail: originalBooking.contact_email || void 0,
              appUrl: env.APP_URL || "",
              timeFormat,
              timezone: timezone || "UTC",
              brandColor: originalBooking.brand_color || void 0,
              attendeeNotes: originalBooking.attendee_notes
            },
            {
              apiKey: env.EMAILIT_API_KEY,
              from: env.EMAIL_FROM || originalBooking.host_email,
              replyTo: replyToEmail
            },
            template?.subject || void 0
          );
        }
        try {
          await sendAdminRescheduleNotification(
            {
              attendeeName: originalBooking.attendee_name,
              attendeeEmail: originalBooking.attendee_email,
              eventName: originalBooking.event_name,
              eventDescription: originalBooking.event_description || "",
              startTime: newStartDateTime,
              endTime: newEndDateTime,
              oldStartTime: oldStartDateTime,
              oldEndTime: oldEndDateTime,
              meetingUrl: newMeetingUrl,
              bookingId: originalBooking.id,
              hostName: originalBooking.host_name,
              hostEmail: originalBooking.host_email,
              appUrl: env.APP_URL || "",
              timeFormat,
              timezone: timezone || "UTC",
              brandColor: originalBooking.brand_color || void 0,
              attendeeNotes: originalBooking.attendee_notes
            },
            originalBooking.host_email,
            {
              apiKey: env.EMAILIT_API_KEY,
              from: env.EMAIL_FROM || originalBooking.host_email
            }
          );
        } catch (adminEmailErr) {
          console.error("Failed to send admin reschedule notification:", adminEmailErr);
        }
        const reminderTypes = ["reminder_24h", "reminder_1h"];
        const reminderOffsets = {
          "reminder_24h": 24 * 60 * 60 * 1e3,
          "reminder_1h": 60 * 60 * 1e3
        };
        for (const reminderType of reminderTypes) {
          if (isEmailEnabled(templates, reminderType)) {
            const scheduledFor = new Date(newStartDateTime.getTime() - reminderOffsets[reminderType]);
            if (scheduledFor > /* @__PURE__ */ new Date()) {
              await db.prepare(`INSERT INTO scheduled_emails (booking_id, template_type, scheduled_for) VALUES (?, ?, ?)`).bind(bookingId, reminderType, scheduledFor.toISOString()).run();
            }
          }
        }
      } catch (emailError) {
        console.error("Failed to send reschedule email:", emailError);
      }
    }
    return json({
      success: true,
      bookingId,
      meetingUrl: newMeetingUrl
    });
  } catch (err) {
    console.error("Reschedule error:", err);
    if (err?.status) throw err;
    throw error(500, "Failed to reschedule booking");
  }
};
export {
  POST
};
