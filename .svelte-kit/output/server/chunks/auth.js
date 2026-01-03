function getAuthUrl(clientId, redirectUri, state) {
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: [
      "https://www.googleapis.com/auth/calendar",
      "https://www.googleapis.com/auth/calendar.events",
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile"
    ].join(" "),
    access_type: "offline",
    prompt: "consent",
    state
  });
  return `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
}
async function exchangeCodeForTokens(code, clientId, clientSecret, redirectUri) {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: "authorization_code"
    })
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to exchange code for tokens: ${error}`);
  }
  return response.json();
}
async function refreshAccessToken(refreshToken, clientId, clientSecret) {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      refresh_token: refreshToken,
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "refresh_token"
    })
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to refresh access token: ${error}`);
  }
  return response.json();
}
async function getGoogleUserInfo(accessToken) {
  const response = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  if (!response.ok) {
    throw new Error("Failed to get user info");
  }
  return response.json();
}
async function createSessionToken(userId, secret) {
  const payload = {
    userId,
    iat: Date.now()
  };
  const data = btoa(JSON.stringify(payload));
  const signature = await hashString(`${data}.${secret}`);
  return `${data}.${signature}`;
}
async function verifySessionToken(token, secret) {
  try {
    const [data, signature] = token.split(".");
    const expectedSignature = await hashString(`${data}.${secret}`);
    if (signature !== expectedSignature) {
      return null;
    }
    const payload = JSON.parse(atob(data));
    const age = Date.now() - payload.iat;
    if (age > 7 * 24 * 60 * 60 * 1e3) {
      return null;
    }
    return { userId: payload.userId };
  } catch {
    return null;
  }
}
async function hashString(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}
async function getCurrentUser(event) {
  const sessionToken = event.cookies.get("session");
  if (!sessionToken) {
    return null;
  }
  const jwtSecret = event.platform?.env?.JWT_SECRET;
  if (!jwtSecret) {
    return null;
  }
  const session = await verifySessionToken(sessionToken, jwtSecret);
  return session?.userId ?? null;
}
export {
  createSessionToken,
  exchangeCodeForTokens,
  getAuthUrl,
  getCurrentUser,
  getGoogleUserInfo,
  refreshAccessToken,
  verifySessionToken
};
