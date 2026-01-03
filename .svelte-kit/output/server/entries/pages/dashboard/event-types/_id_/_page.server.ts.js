import { redirect, error, fail } from "@sveltejs/kit";
import { getCurrentUser } from "../../../../../chunks/auth.js";
import { v as validateFields, a as validateLength, M as MAX_LENGTHS } from "../../../../../chunks/validation.js";
const load = async (event) => {
  const userId = await getCurrentUser(event);
  if (!userId) {
    throw redirect(302, "/auth/login");
  }
  const db = event.platform?.env?.DB;
  if (!db) {
    throw error(500, "Database not available");
  }
  const eventTypeId = event.params.id;
  const user = await db.prepare("SELECT google_refresh_token, outlook_refresh_token, settings FROM users WHERE id = ?").bind(userId).first();
  const outlookConfigured = !!(event.platform?.env?.MICROSOFT_CLIENT_ID && event.platform?.env?.MICROSOFT_CLIENT_SECRET);
  let userSettings = {};
  try {
    userSettings = user?.settings ? JSON.parse(user.settings) : {};
  } catch {
    userSettings = {};
  }
  const eventType = await db.prepare(
    `SELECT id, name, slug, duration_minutes as duration, description, is_active, cover_image,
				availability_calendars, invite_calendar
			FROM event_types
			WHERE id = ? AND user_id = ?`
  ).bind(eventTypeId, userId).first();
  if (!eventType) {
    throw error(404, "Event type not found");
  }
  return {
    eventType,
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
    const eventTypeId = event.params.id;
    const existing = await db.prepare("SELECT id FROM event_types WHERE id = ? AND user_id = ?").bind(eventTypeId, userId).first();
    if (!existing) {
      return fail(404, { error: "Event type not found" });
    }
    const formData = await event.request.formData();
    const name = formData.get("name");
    const slug = formData.get("slug");
    const duration = formData.get("duration");
    const description = formData.get("description") || "";
    const isActive = formData.get("is_active") === "on";
    const coverImage = formData.get("cover_image") || null;
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
      return fail(400, {
        error: "Slug can only contain lowercase letters, numbers, and hyphens"
      });
    }
    try {
      const slugExists = await db.prepare("SELECT id FROM event_types WHERE user_id = ? AND slug = ? AND id != ?").bind(userId, slugStr, eventTypeId).first();
      if (slugExists) {
        return fail(400, { error: "An event type with this slug already exists" });
      }
      await db.prepare(
        `UPDATE event_types
					SET name = ?, slug = ?, duration_minutes = ?, description = ?, is_active = ?, cover_image = ?,
						availability_calendars = ?, invite_calendar = ?
					WHERE id = ? AND user_id = ?`
      ).bind(
        name.toString(),
        slugStr,
        parseInt(duration.toString()),
        description.toString(),
        isActive ? 1 : 0,
        coverImage ? coverImage.toString() : null,
        availabilityCalendars.toString(),
        inviteCalendar.toString(),
        eventTypeId,
        userId
      ).run();
      throw redirect(302, "/dashboard");
    } catch (error2) {
      if (error2?.status === 302) throw error2;
      console.error("Error updating event type:", error2);
      return fail(500, { error: "Failed to update event type" });
    }
  }
};
export {
  actions,
  load
};
