import { error, json } from "@sveltejs/kit";
import { g as getValidAccessToken, a as getBusyTimes } from "../../../../chunks/google-calendar.js";
import { g as getValidOutlookAccessToken, a as getOutlookBusyTimes } from "../../../../chunks/outlook-calendar.js";
const GET = async ({ url, platform }) => {
  const env = platform?.env;
  if (!env) {
    throw error(500, "Platform env not available");
  }
  const eventSlug = url.searchParams.get("event");
  const date = url.searchParams.get("date");
  if (!eventSlug || !date) {
    throw error(400, "Missing required parameters");
  }
  try {
    let createDateInTimezone = function(dateStr, timeStr, timezone) {
      const [hour, minute] = timeStr.split(":").map(Number);
      const dateTimeStr = `${dateStr}T${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00`;
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      });
      const targetDate = /* @__PURE__ */ new Date(dateTimeStr + "Z");
      const utcStr = targetDate.toISOString();
      const parts = formatter.formatToParts(targetDate);
      const tzHour = parseInt(parts.find((p) => p.type === "hour")?.value || "0");
      const tzMinute = parseInt(parts.find((p) => p.type === "minute")?.value || "0");
      const targetMinutes = hour * 60 + minute;
      const actualMinutes = tzHour * 60 + tzMinute;
      let offsetMinutes = actualMinutes - targetMinutes;
      if (offsetMinutes > 12 * 60) offsetMinutes -= 24 * 60;
      if (offsetMinutes < -12 * 60) offsetMinutes += 24 * 60;
      return new Date(targetDate.getTime() - offsetMinutes * 60 * 1e3);
    };
    const db = env.DB;
    const cacheKey = `availability:${eventSlug}:${date}`;
    const cached = await env.KV.get(cacheKey);
    if (cached) {
      return json(JSON.parse(cached));
    }
    const user = await db.prepare("SELECT id, slug, timezone, settings FROM users LIMIT 1").first();
    if (!user) {
      throw error(404, "User not found");
    }
    const userTimezone = user.timezone || "UTC";
    let userSettings = {};
    try {
      userSettings = user.settings ? JSON.parse(user.settings) : {};
    } catch {
      userSettings = {};
    }
    const eventType = await db.prepare("SELECT id, duration_minutes as duration, availability_calendars FROM event_types WHERE user_id = ? AND slug = ? AND is_active = 1").bind(user.id, eventSlug).first();
    if (!eventType) {
      throw error(404, "Event type not found or inactive");
    }
    const availabilityCalendars = eventType.availability_calendars || userSettings.defaultAvailabilityCalendars || "both";
    const useGoogleCalendar = availabilityCalendars === "google" || availabilityCalendars === "both";
    const useOutlookCalendar = availabilityCalendars === "outlook" || availabilityCalendars === "both";
    const requestedDate = new Date(date);
    const dayOfWeek = requestedDate.getDay();
    const availabilityRules = await db.prepare(
      `SELECT start_time, end_time
				FROM availability_rules
				WHERE user_id = ? AND day_of_week = ?
				ORDER BY start_time`
    ).bind(user.id, dayOfWeek).all();
    if (!availabilityRules.results || availabilityRules.results.length === 0) {
      return json({ slots: [] });
    }
    const startOfDay = new Date(requestedDate);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(requestedDate);
    endOfDay.setHours(23, 59, 59, 999);
    let busySlots = [];
    if (useGoogleCalendar) {
      try {
        const accessToken = await getValidAccessToken(
          db,
          user.id,
          env.GOOGLE_CLIENT_ID,
          env.GOOGLE_CLIENT_SECRET
        );
        const selectedCalendars = userSettings.selectedGoogleCalendars;
        const googleBusy = await getBusyTimes(accessToken, startOfDay, endOfDay, selectedCalendars);
        busySlots.push(...googleBusy);
      } catch (err) {
        console.error("Error fetching Google Calendar busy times:", err);
      }
    }
    if (useOutlookCalendar && env.MICROSOFT_CLIENT_ID && env.MICROSOFT_CLIENT_SECRET) {
      try {
        const outlookToken = await getValidOutlookAccessToken(
          db,
          user.id,
          env.MICROSOFT_CLIENT_ID,
          env.MICROSOFT_CLIENT_SECRET
        );
        const outlookBusy = await getOutlookBusyTimes(outlookToken, startOfDay, endOfDay);
        busySlots.push(...outlookBusy);
      } catch (err) {
        console.error("Error fetching Outlook Calendar busy times:", err);
      }
    }
    const bookings = await db.prepare(
      `SELECT start_time, end_time
				FROM bookings
				WHERE user_id = ? AND DATE(start_time) = ? AND status = 'confirmed'
				ORDER BY start_time`
    ).bind(user.id, date).all();
    const allBusySlots = [
      ...busySlots.map((slot) => ({
        start: slot.start,
        end: slot.end
      })),
      ...bookings.results.map((booking) => ({
        start: booking.start_time,
        end: booking.end_time
      }))
    ];
    const slots = [];
    for (const rule of availabilityRules.results) {
      let currentTime = createDateInTimezone(date, rule.start_time, userTimezone);
      const endTime = createDateInTimezone(date, rule.end_time, userTimezone);
      const slotIncrement = Math.min(30, eventType.duration);
      while (currentTime < endTime) {
        const slotEnd = new Date(currentTime);
        slotEnd.setMinutes(slotEnd.getMinutes() + eventType.duration);
        if (slotEnd > endTime) {
          break;
        }
        if (currentTime < /* @__PURE__ */ new Date()) {
          currentTime.setMinutes(currentTime.getMinutes() + slotIncrement);
          continue;
        }
        const hasConflict = allBusySlots.some((busy) => {
          const busyStart = new Date(busy.start);
          const busyEnd = new Date(busy.end);
          return currentTime >= busyStart && currentTime < busyEnd || slotEnd > busyStart && slotEnd <= busyEnd || currentTime <= busyStart && slotEnd >= busyEnd;
        });
        if (!hasConflict) {
          slots.push({
            start: currentTime.toISOString(),
            end: slotEnd.toISOString()
          });
        }
        currentTime.setMinutes(currentTime.getMinutes() + slotIncrement);
      }
    }
    await env.KV.put(cacheKey, JSON.stringify({ slots }), { expirationTtl: 300 });
    return json({ slots });
  } catch (err) {
    console.error("Availability API error:", err);
    if (err?.status) throw err;
    throw error(500, "Failed to fetch availability");
  }
};
export {
  GET
};
