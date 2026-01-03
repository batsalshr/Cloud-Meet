import { error, json } from "@sveltejs/kit";
import { g as getEmailTemplates, e as sendReminderEmail } from "../../../../../chunks/index3.js";
const GET = async ({ url, platform }) => {
  const env = platform?.env;
  if (!env) {
    throw error(500, "Platform env not available");
  }
  const cronSecret = url.searchParams.get("secret");
  if (env.CRON_SECRET && cronSecret !== env.CRON_SECRET) {
    throw error(401, "Unauthorized");
  }
  const db = env.DB;
  const now = /* @__PURE__ */ new Date();
  try {
    const pendingEmails = await db.prepare(`
				SELECT se.id, se.booking_id, se.template_type, se.scheduled_for,
					b.attendee_name, b.attendee_email, b.start_time, b.end_time, b.meeting_url, b.status,
					e.name as event_name, e.description as event_description,
					u.id as user_id, u.name as host_name, u.email as host_email, u.contact_email, u.settings, u.brand_color
				FROM scheduled_emails se
				JOIN bookings b ON se.booking_id = b.id
				JOIN event_types e ON b.event_type_id = e.id
				JOIN users u ON b.user_id = u.id
				WHERE se.status = 'pending'
				AND se.scheduled_for <= ?
				AND b.status = 'confirmed'
				ORDER BY se.scheduled_for ASC
				LIMIT 50
			`).bind(now.toISOString()).all();
    const results = {
      processed: 0,
      sent: 0,
      skipped: 0,
      failed: 0,
      errors: []
    };
    for (const email of pendingEmails.results) {
      results.processed++;
      try {
        const meetingStart = new Date(email.start_time);
        if (meetingStart < now) {
          await db.prepare(`UPDATE scheduled_emails SET status = 'cancelled', error_message = 'Meeting already passed' WHERE id = ?`).bind(email.id).run();
          results.skipped++;
          continue;
        }
        const templates = await getEmailTemplates(db, email.user_id);
        const template = templates.get(email.template_type);
        if (template && !template.is_enabled) {
          await db.prepare(`UPDATE scheduled_emails SET status = 'cancelled', error_message = 'Template disabled' WHERE id = ?`).bind(email.id).run();
          results.skipped++;
          continue;
        }
        if (env.EMAILIT_API_KEY) {
          let timeFormat = "12h";
          try {
            const settings = email.settings ? JSON.parse(email.settings) : {};
            timeFormat = settings.timeFormat === "24h" ? "24h" : "12h";
          } catch {
          }
          const replyToEmail = email.contact_email || email.host_email;
          await sendReminderEmail(
            {
              attendeeName: email.attendee_name,
              attendeeEmail: email.attendee_email,
              eventName: email.event_name,
              eventDescription: email.event_description || "",
              startTime: new Date(email.start_time),
              endTime: new Date(email.end_time),
              meetingUrl: email.meeting_url,
              bookingId: email.booking_id,
              hostName: email.host_name,
              hostEmail: email.host_email,
              hostContactEmail: email.contact_email || void 0,
              appUrl: env.APP_URL || "",
              customMessage: template?.custom_message,
              timeFormat,
              brandColor: email.brand_color || void 0
            },
            email.template_type,
            {
              apiKey: env.EMAILIT_API_KEY,
              from: env.EMAIL_FROM || email.host_email,
              replyTo: replyToEmail
            },
            template?.subject || void 0
          );
          await db.prepare(`UPDATE scheduled_emails SET status = 'sent', sent_at = CURRENT_TIMESTAMP WHERE id = ?`).bind(email.id).run();
          results.sent++;
        } else {
          await db.prepare(`UPDATE scheduled_emails SET status = 'failed', error_message = 'Email API not configured' WHERE id = ?`).bind(email.id).run();
          results.failed++;
        }
      } catch (err) {
        console.error(`Failed to send reminder email ${email.id}:`, err);
        await db.prepare(`UPDATE scheduled_emails SET status = 'failed', error_message = ? WHERE id = ?`).bind(err.message || "Unknown error", email.id).run();
        results.failed++;
        results.errors.push(`Email ${email.id}: ${err.message}`);
      }
    }
    return json({
      success: true,
      timestamp: now.toISOString(),
      ...results
    });
  } catch (err) {
    console.error("Cron send-reminders error:", err);
    throw error(500, "Failed to process reminder emails");
  }
};
export {
  GET
};
