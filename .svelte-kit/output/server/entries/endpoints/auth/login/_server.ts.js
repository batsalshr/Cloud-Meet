import { redirect } from "@sveltejs/kit";
import { getAuthUrl } from "../../../../chunks/auth.js";
const GET = async ({ platform, url }) => {
  const env = platform?.env;
  if (!env) {
    throw new Error("Platform env not available");
  }
  const clientId = env.GOOGLE_CLIENT_ID;
  const appUrl = env.APP_URL;
  if (!clientId || !appUrl) {
    throw new Error("Missing OAuth configuration");
  }
  const state = crypto.randomUUID();
  await env.KV.put(`oauth_state:${state}`, "1", { expirationTtl: 600 });
  const redirectUri = `${appUrl}/auth/callback`;
  const authUrl = getAuthUrl(clientId, redirectUri, state);
  throw redirect(302, authUrl);
};
export {
  GET
};
