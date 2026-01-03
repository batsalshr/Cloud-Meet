import { error } from "@sveltejs/kit";
const load = async ({ params, platform }) => {
  const env = platform?.env;
  if (!env) {
    throw error(500, "Platform env not available");
  }
  const slug = params.slug;
  const db = env.DB;
  try {
    const user = await db.prepare("SELECT id, slug, name, profile_image, brand_color, settings, outlook_refresh_token FROM users LIMIT 1").first();
    if (!user) {
      throw error(404, "User not found");
    }
    const eventType = await db.prepare(
      "SELECT id, name, slug, duration_minutes as duration, description, is_active, cover_image, invite_calendar FROM event_types WHERE user_id = ? AND slug = ? AND is_active = 1"
    ).bind(user.id, slug).first();
    if (!eventType) {
      throw error(404, "Event type not found");
    }
    let userSettings = {};
    try {
      userSettings = user.settings ? JSON.parse(user.settings) : {};
    } catch {
    }
    const outlookConnected = !!user.outlook_refresh_token;
    const outlookConfigured = !!(env.MICROSOFT_CLIENT_ID && env.MICROSOFT_CLIENT_SECRET);
    let effectiveInviteCalendar = eventType.invite_calendar || userSettings.defaultInviteCalendar || "google";
    if (effectiveInviteCalendar === "outlook" && (!outlookConnected || !outlookConfigured)) {
      effectiveInviteCalendar = "google";
    }
    return {
      slug: eventType.slug,
      eventType: {
        ...eventType,
        invite_calendar: effectiveInviteCalendar
      },
      user: {
        name: user.name,
        profileImage: user.profile_image,
        brandColor: user.brand_color || "#3b82f6",
        timeFormat: userSettings.timeFormat || "12h"
      }
    };
  } catch (err) {
    console.error("Booking page load error:", err);
    if (err?.status) throw err;
    throw error(500, "Failed to load booking page");
  }
};
export {
  load
};
