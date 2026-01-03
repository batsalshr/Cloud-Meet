import { error, json } from "@sveltejs/kit";
import { getCurrentUser } from "../../../../chunks/auth.js";
import { a as validateLength, M as MAX_LENGTHS, i as isValidEmail } from "../../../../chunks/validation.js";
const PUT = async (event) => {
  const userId = await getCurrentUser(event);
  if (!userId) {
    throw error(401, "Unauthorized");
  }
  const env = event.platform?.env;
  if (!env) {
    throw error(500, "Platform env not available");
  }
  const db = env.DB;
  try {
    const body = await event.request.json();
    const { name, profileImage, brandColor, contactEmail, timeFormat, defaultAvailabilityCalendars, defaultInviteCalendar, selectedGoogleCalendars } = body;
    const existingUser = await db.prepare("SELECT settings FROM users WHERE id = ?").bind(userId).first();
    let existingSettings = {};
    try {
      existingSettings = existingUser?.settings ? JSON.parse(existingUser.settings) : {};
    } catch {
      existingSettings = {};
    }
    if (name === void 0 && (defaultAvailabilityCalendars !== void 0 || defaultInviteCalendar !== void 0 || selectedGoogleCalendars !== void 0)) {
      const newSettings = {
        ...existingSettings,
        defaultAvailabilityCalendars: defaultAvailabilityCalendars ?? existingSettings.defaultAvailabilityCalendars ?? "both",
        defaultInviteCalendar: defaultInviteCalendar ?? existingSettings.defaultInviteCalendar ?? "google",
        ...selectedGoogleCalendars !== void 0 && { selectedGoogleCalendars }
      };
      await db.prepare("UPDATE users SET settings = ? WHERE id = ?").bind(JSON.stringify(newSettings), userId).run();
      return json({ success: true });
    }
    if (!name || name.trim().length === 0) {
      throw error(400, "Name is required");
    }
    const nameLengthError = validateLength(name, "Name", MAX_LENGTHS.name, true);
    if (nameLengthError) {
      throw error(400, nameLengthError);
    }
    const colorRegex = /^#[0-9A-Fa-f]{6}$/;
    const validBrandColor = brandColor && colorRegex.test(brandColor) ? brandColor : "#3b82f6";
    let validContactEmail = null;
    if (contactEmail) {
      if (!isValidEmail(contactEmail)) {
        throw error(400, "Invalid contact email address");
      }
      validContactEmail = contactEmail.trim();
    }
    const settings = JSON.stringify({
      ...existingSettings,
      timeFormat: timeFormat === "24h" ? "24h" : "12h"
    });
    await db.prepare("UPDATE users SET name = ?, profile_image = ?, brand_color = ?, contact_email = ?, settings = ? WHERE id = ?").bind(name.trim(), profileImage || null, validBrandColor, validContactEmail, settings, userId).run();
    return json({ success: true });
  } catch (err) {
    console.error("Profile update error:", err);
    if (err?.status) throw err;
    throw error(500, "Failed to update profile");
  }
};
const POST = async (event) => {
  const userId = await getCurrentUser(event);
  if (!userId) {
    throw error(401, "Unauthorized");
  }
  const env = event.platform?.env;
  if (!env) {
    throw error(500, "Platform env not available");
  }
  try {
    const formData = await event.request.formData();
    const file = formData.get("image");
    if (!file || file.size === 0) {
      throw error(400, "No image provided");
    }
    if (!file.type.startsWith("image/")) {
      throw error(400, "File must be an image");
    }
    if (file.size > 2 * 1024 * 1024) {
      throw error(400, "Image must be less than 2MB");
    }
    const buffer = await file.arrayBuffer();
    const bytes = new Uint8Array(buffer);
    let binary = "";
    const chunkSize = 8192;
    for (let i = 0; i < bytes.length; i += chunkSize) {
      const chunk = bytes.subarray(i, i + chunkSize);
      binary += String.fromCharCode.apply(null, chunk);
    }
    const base64 = btoa(binary);
    const dataUrl = `data:${file.type};base64,${base64}`;
    await env.DB.prepare("UPDATE users SET profile_image = ? WHERE id = ?").bind(dataUrl, userId).run();
    return json({ success: true, imageUrl: dataUrl });
  } catch (err) {
    console.error("Image upload error:", err);
    if (err?.status) throw err;
    throw error(500, "Failed to upload image");
  }
};
export {
  POST,
  PUT
};
