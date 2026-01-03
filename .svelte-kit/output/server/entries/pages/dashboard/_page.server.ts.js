import { redirect } from "@sveltejs/kit";
import { getCurrentUser } from "../../../chunks/auth.js";
const load = async (event) => {
  const userId = await getCurrentUser(event);
  if (!userId) {
    throw redirect(302, "/auth/login");
  }
  const db = event.platform?.env?.DB;
  if (!db) {
    throw new Error("Database not available");
  }
  const user = await db.prepare("SELECT id, email, name, slug, profile_image, brand_color, settings, contact_email FROM users WHERE id = ?").bind(userId).first();
  const eventTypes = await db.prepare(
    `SELECT id, name, slug, duration_minutes as duration, description, is_active
			FROM event_types
			WHERE user_id = ?
			ORDER BY name ASC`
  ).bind(userId).all();
  const recentBookings = await db.prepare(
    `SELECT b.id, b.start_time, b.end_time, b.attendee_name, b.attendee_email,
				b.status, b.created_at, b.attendee_notes, b.canceled_by, b.cancellation_reason,
				b.event_type_id, et.name as event_type_name, et.slug as event_type_slug, et.duration_minutes
			FROM bookings b
			JOIN event_types et ON b.event_type_id = et.id
			WHERE b.user_id = ? AND b.start_time >= datetime('now')
			ORDER BY b.created_at DESC
			LIMIT 20`
  ).bind(userId).all();
  const appUrl = event.platform?.env?.APP_URL || "";
  return {
    user,
    eventTypes: eventTypes.results,
    recentBookings: recentBookings.results,
    appUrl
  };
};
export {
  load
};
