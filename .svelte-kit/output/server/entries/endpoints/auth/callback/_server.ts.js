import { error, redirect } from "@sveltejs/kit";
import { exchangeCodeForTokens, getGoogleUserInfo, createSessionToken } from "../../../../chunks/auth.js";
const GET = async ({ url, platform, cookies }) => {
  const env = platform?.env;
  if (!env) {
    throw error(500, "Platform env not available");
  }
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const errorParam = url.searchParams.get("error");
  if (errorParam) {
    throw error(400, `OAuth error: ${errorParam}`);
  }
  if (!code || !state) {
    throw error(400, "Missing code or state parameter");
  }
  const storedState = await env.KV.get(`oauth_state:${state}`);
  if (!storedState) {
    throw error(400, "Invalid state parameter");
  }
  await env.KV.delete(`oauth_state:${state}`);
  const clientId = env.GOOGLE_CLIENT_ID;
  const clientSecret = env.GOOGLE_CLIENT_SECRET;
  const appUrl = env.APP_URL;
  const adminEmail = env.ADMIN_EMAIL;
  if (!clientId || !clientSecret || !appUrl) {
    throw error(500, "Missing OAuth configuration");
  }
  try {
    const redirectUri = `${appUrl}/auth/callback`;
    const tokens = await exchangeCodeForTokens(code, clientId, clientSecret, redirectUri);
    const userInfo = await getGoogleUserInfo(tokens.access_token);
    if (adminEmail && userInfo.email !== adminEmail) {
      throw error(403, "Access denied. Only the admin can log in.");
    }
    const db = env.DB;
    let user = await db.prepare("SELECT id FROM users WHERE email = ?").bind(userInfo.email).first();
    if (!user) {
      const userId = crypto.randomUUID();
      const slug = userInfo.email.split("@")[0].toLowerCase().replace(/[^a-z0-9]/g, "");
      await db.prepare(
        `INSERT INTO users (id, email, name, slug, google_refresh_token, created_at)
					VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`
      ).bind(
        userId,
        userInfo.email,
        userInfo.name,
        slug,
        tokens.refresh_token || null
      ).run();
      user = { id: userId };
    } else {
      await db.prepare(
        `UPDATE users
					SET google_refresh_token = COALESCE(?, google_refresh_token),
						email = ?,
						name = ?
					WHERE id = ?`
      ).bind(
        tokens.refresh_token || null,
        userInfo.email,
        userInfo.name,
        user.id
      ).run();
    }
    const sessionToken = await createSessionToken(user.id, env.JWT_SECRET);
    cookies.set("session", sessionToken, {
      path: "/",
      httpOnly: true,
      secure: appUrl.startsWith("https"),
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7
      // 7 days
    });
    throw redirect(302, "/dashboard");
  } catch (err) {
    if (err?.status && err?.location) {
      throw err;
    }
    console.error("OAuth callback error:", err);
    throw error(500, `Authentication failed: ${err instanceof Error ? err.message : "Unknown error"}`);
  }
};
export {
  GET
};
