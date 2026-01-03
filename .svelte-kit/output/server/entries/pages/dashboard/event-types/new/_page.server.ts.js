import { redirect, fail } from "@sveltejs/kit";
import { getCurrentUser } from "../../../../../chunks/auth.js";
import { v as validateFields, a as validateLength, M as MAX_LENGTHS } from "../../../../../chunks/validation.js";
const load = async (event) => {
  const userId = await getCurrentUser(event);
  if (!userId) {
    throw redirect(302, "/auth/login");
  }
  const db = event.platform?.env?.DB;
  if (!db) {
    return {
      googleConnected: false,
      outlookConnected: false,
      outlookConfigured: false,
      defaultAvailabilityCalendars: void 0,
      defaultInviteCalendar: void 0
    };
  }
  const user = await db.prepare("SELECT google_refresh_token, outlook_refresh_token, settings FROM users WHERE id = ?").bind(userId).first();
  const outlookConfigured = !!(event.platform?.env?.MICROSOFT_CLIENT_ID && event.platform?.env?.MICROSOFT_CLIENT_SECRET);
  let userSettings = {};
  try {
    userSettings = user?.settings ? JSON.parse(user.settings) : {};
  } catch {
    userSettings = {};
  }
  return {
    googleConnected: !!user?.google_refresh_token,
    outlookConnected: !!user?.outlook_refresh_token,
    outlookConfigured,
    defaultAvailabilityCalendars: userSettings.defaultAvailabilityCalendars,
    defaultInviteCalendar: userSettings.defaultInviteCalendar
  };
};
const actions = {
  default: async (event) => {
    const userId = await getCurrentUser(event);
    if (!userId) {
      throw redirect(302, "/auth/login");
    }
    const db = event.platform?.env?.DB;
    if (!db) {
      return fail(500, { error: "Database not available" });
    }
    const formData = await event.request.formData();
    const name = formData.get("name");
    const slug = formData.get("slug");
    const duration = formData.get("duration");
    const description = formData.get("description") || "";
    const isActive = formData.get("is_active") === "on";
    const coverImage = formData.get("cover_image") || "";
    const overrideCalendarSettings = formData.get("override_calendar_settings") === "on";
    const availabilityCalendars = overrideCalendarSettings ? formData.get("availability_calendars") || "both" : null;
    const inviteCalendar = overrideCalendarSettings ? formData.get("invite_calendar") || "google" : null;
    if (!name || !slug || !duration) {
      return fail(400, { error: "Missing required fields" });
    }
    const lengthError = validateFields([
      validateLength(name.toString(), "Name", MAX_LENGTHS.name, true),
      validateLength(slug.toString(), "Slug", MAX_LENGTHS.slug, true),
      validateLength(description.toString(), "Description", MAX_LENGTHS.description, false)
    ]);
    if (lengthError) {
      return fail(400, { error: lengthError });
    }
    const slugStr = slug.toString().toLowerCase();
    if (!/^[a-z0-9-]+$/.test(slugStr)) {
      return fail(400, { error: "Slug can only contain lowercase letters, numbers, and hyphens" });
    }
    try {
      const existing = await db.prepare("SELECT id FROM event_types WHERE user_id = ? AND slug = ?").bind(userId, slugStr).first();
      if (existing) {
        return fail(400, { error: "An event type with this slug already exists" });
      }
      await db.prepare(
        `INSERT INTO event_types (user_id, name, slug, duration_minutes, description, is_active, cover_image, availability_calendars, invite_calendar, created_at)
					VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`
      ).bind(userId, name, slugStr, parseInt(duration.toString()), description, isActive ? 1 : 0, coverImage, availabilityCalendars, inviteCalendar).run();
      throw redirect(302, "/dashboard");
    } catch (error) {
      if (error?.status === 302) throw error;
      console.error("Error creating event type:", error);
      return fail(500, { error: "Failed to create event type" });
    }
  }
};
export {
  actions,
  load
};
