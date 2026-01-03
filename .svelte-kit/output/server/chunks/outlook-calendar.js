function getOutlookAuthUrl(clientId, redirectUri, state) {
  const params = new URLSearchParams({
    client_id: clientId,
    response_type: "code",
    redirect_uri: redirectUri,
    scope: "offline_access Calendars.ReadWrite User.Read",
    state,
    response_mode: "query"
  });
  return `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?${params.toString()}`;
}
async function exchangeOutlookCode(code, clientId, clientSecret, redirectUri) {
  const response = await fetch("https://login.microsoftonline.com/common/oauth2/v2.0/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: redirectUri,
      grant_type: "authorization_code"
    }).toString()
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to exchange Outlook code: ${error}`);
  }
  return response.json();
}
async function refreshOutlookAccessToken(refreshToken, clientId, clientSecret) {
  const response = await fetch("https://login.microsoftonline.com/common/oauth2/v2.0/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token"
    }).toString()
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to refresh Outlook token: ${error}`);
  }
  return response.json();
}
async function getOutlookBusyTimes(accessToken, startDate, endDate) {
  const startISO = startDate.toISOString();
  const endISO = endDate.toISOString();
  const response = await fetch(
    `https://graph.microsoft.com/v1.0/me/calendarView?startDateTime=${encodeURIComponent(startISO)}&endDateTime=${encodeURIComponent(endISO)}&$select=start,end,showAs`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      }
    }
  );
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to fetch Outlook busy times: ${error}`);
  }
  const data = await response.json();
  return data.value.filter((event) => event.showAs === "busy" || event.showAs === "tentative").map((event) => ({
    // Microsoft returns times without Z suffix, they're in the specified timezone
    // Convert to ISO format
    start: (/* @__PURE__ */ new Date(event.start.dateTime + "Z")).toISOString(),
    end: (/* @__PURE__ */ new Date(event.end.dateTime + "Z")).toISOString()
  }));
}
async function createOutlookCalendarEvent(accessToken, event) {
  const body = {
    subject: event.summary,
    body: {
      contentType: "text",
      content: event.description || ""
    },
    start: {
      dateTime: event.startTime.replace("Z", ""),
      timeZone: "UTC"
    },
    end: {
      dateTime: event.endTime.replace("Z", ""),
      timeZone: "UTC"
    },
    attendees: [
      {
        emailAddress: {
          address: event.attendeeEmail
        },
        type: "required"
      }
    ]
  };
  {
    body.isOnlineMeeting = true;
  }
  let response = await fetch("https://graph.microsoft.com/v1.0/me/events", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to create Outlook calendar event: ${error}`);
  }
  return response.json();
}
async function cancelOutlookCalendarEvent(accessToken, eventId) {
  const response = await fetch(
    `https://graph.microsoft.com/v1.0/me/events/${eventId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
  if (!response.ok && response.status !== 404) {
    const error = await response.text();
    throw new Error(`Failed to cancel Outlook calendar event: ${error}`);
  }
}
async function getValidOutlookAccessToken(db, userId, clientId, clientSecret) {
  const user = await db.prepare("SELECT outlook_refresh_token FROM users WHERE id = ?").bind(userId).first();
  if (!user?.outlook_refresh_token) {
    throw new Error("User not connected to Outlook Calendar");
  }
  const tokens = await refreshOutlookAccessToken(
    user.outlook_refresh_token,
    clientId,
    clientSecret
  );
  if (tokens.refresh_token && tokens.refresh_token !== user.outlook_refresh_token) {
    await db.prepare("UPDATE users SET outlook_refresh_token = ? WHERE id = ?").bind(tokens.refresh_token, userId).run();
  }
  return tokens.access_token;
}
async function getOutlookUserProfile(accessToken) {
  const response = await fetch("https://graph.microsoft.com/v1.0/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to get Outlook user profile: ${error}`);
  }
  const data = await response.json();
  return {
    email: data.mail || data.userPrincipalName,
    name: data.displayName
  };
}
export {
  getOutlookBusyTimes as a,
  cancelOutlookCalendarEvent as b,
  createOutlookCalendarEvent as c,
  getOutlookAuthUrl as d,
  exchangeOutlookCode as e,
  getOutlookUserProfile as f,
  getValidOutlookAccessToken as g
};
