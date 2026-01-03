import { redirect } from "@sveltejs/kit";
import { getCurrentUser } from "../../../../chunks/auth.js";
const load = async (event) => {
  const userId = await getCurrentUser(event);
  if (!userId) {
    throw redirect(302, "/auth/login");
  }
  const db = event.platform?.env?.DB;
  if (!db) {
    return {
      user: null,
      outlookConfigured: false
    };
  }
  const user = await db.prepare("SELECT id, google_refresh_token, outlook_refresh_token, settings FROM users WHERE id = ?").bind(userId).first();
  const outlookConfigured = !!(event.platform?.env?.MICROSOFT_CLIENT_ID && event.platform?.env?.MICROSOFT_CLIENT_SECRET);
  let userSettings = {};
  try {
    userSettings = user?.settings ? JSON.parse(user.settings) : {};
  } catch {
    userSettings = {};
  }
  return {
    user: user ? {
      googleConnected: !!user.google_refresh_token,
      outlookConnected: !!user.outlook_refresh_token,
      defaultAvailabilityCalendars: userSettings.defaultAvailabilityCalendars,
      defaultInviteCalendar: userSettings.defaultInviteCalendar,
      selectedGoogleCalendars: userSettings.selectedGoogleCalendars
    } : null,
    outlookConfigured
  };
};
export {
  load
};
