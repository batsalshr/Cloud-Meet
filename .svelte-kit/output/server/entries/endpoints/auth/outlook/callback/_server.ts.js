import { redirect } from "@sveltejs/kit";
import { e as exchangeOutlookCode, f as getOutlookUserProfile } from "../../../../../chunks/outlook-calendar.js";
const GET = async ({ url, platform }) => {
  const env = platform?.env;
  if (!env) {
    throw redirect(302, "/dashboard?error=server_error");
  }
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const error = url.searchParams.get("error");
  if (error) {
    console.error("Outlook OAuth error:", error, url.searchParams.get("error_description"));
    throw redirect(302, "/dashboard?error=outlook_auth_failed");
  }
  if (!code || !state) {
    throw redirect(302, "/dashboard?error=invalid_request");
  }
  const storedUserId = await env.KV.get(`outlook_oauth_state:${state}`);
  if (!storedUserId) {
    throw redirect(302, "/dashboard?error=invalid_state");
  }
  await env.KV.delete(`outlook_oauth_state:${state}`);
  try {
    const redirectUri = `${env.APP_URL}/auth/outlook/callback`;
    const tokens = await exchangeOutlookCode(
      code,
      env.MICROSOFT_CLIENT_ID,
      env.MICROSOFT_CLIENT_SECRET,
      redirectUri
    );
    await getOutlookUserProfile(tokens.access_token);
    const db = env.DB;
    await db.prepare("UPDATE users SET outlook_refresh_token = ? WHERE id = ?").bind(tokens.refresh_token, storedUserId).run();
    throw redirect(302, "/dashboard?success=outlook_connected");
  } catch (err) {
    if (err && typeof err === "object" && "status" in err && err.status === 302) throw err;
    console.error("Outlook OAuth callback error:", err);
    throw redirect(302, "/dashboard?error=outlook_connection_failed");
  }
};
export {
  GET
};
