import { error, json } from "@sveltejs/kit";
import { getCurrentUser } from "../../../../../chunks/auth.js";
import { g as getValidAccessToken, l as listCalendars } from "../../../../../chunks/google-calendar.js";
const GET = async (event) => {
  const userId = await getCurrentUser(event);
  if (!userId) {
    throw error(401, "Unauthorized");
  }
  const env = event.platform?.env;
  if (!env) {
    throw error(500, "Platform env not available");
  }
  try {
    const accessToken = await getValidAccessToken(
      env.DB,
      userId,
      env.GOOGLE_CLIENT_ID,
      env.GOOGLE_CLIENT_SECRET
    );
    const calendars = await listCalendars(accessToken);
    const sorted = calendars.sort((a, b) => {
      if (a.primary) return -1;
      if (b.primary) return 1;
      return a.summary.localeCompare(b.summary);
    });
    return json({ calendars: sorted });
  } catch (err) {
    console.error("Failed to list Google calendars:", err);
    throw error(500, "Failed to list calendars");
  }
};
export {
  GET
};
