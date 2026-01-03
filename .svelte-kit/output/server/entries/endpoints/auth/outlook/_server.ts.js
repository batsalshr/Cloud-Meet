import { redirect } from "@sveltejs/kit";
import { d as getOutlookAuthUrl } from "../../../../chunks/outlook-calendar.js";
import { getCurrentUser } from "../../../../chunks/auth.js";
const GET = async (event) => {
  const env = event.platform?.env;
  if (!env?.MICROSOFT_CLIENT_ID) {
    throw redirect(302, "/dashboard?error=outlook_not_configured");
  }
  const userId = await getCurrentUser(event);
  if (!userId) {
    throw redirect(302, "/auth/login");
  }
  const state = `${crypto.randomUUID()}_${userId}`;
  await env.KV.put(`outlook_oauth_state:${state}`, userId, { expirationTtl: 600 });
  const redirectUri = `${env.APP_URL}/auth/outlook/callback`;
  const authUrl = getOutlookAuthUrl(env.MICROSOFT_CLIENT_ID, redirectUri, state);
  throw redirect(302, authUrl);
};
export {
  GET
};
