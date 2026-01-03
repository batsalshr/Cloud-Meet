async function listCalendars(accessToken) {
  const calendars = [];
  let pageToken;
  do {
    const url = new URL("https://www.googleapis.com/calendar/v3/users/me/calendarList");
    url.searchParams.set("minAccessRole", "freeBusyReader");
    if (pageToken) {
      url.searchParams.set("pageToken", pageToken);
    }
    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to list calendars: ${error}`);
    }
    const data = await response.json();
    if (data.items) {
      calendars.push(...data.items);
    }
    pageToken = data.nextPageToken;
  } while (pageToken);
  return calendars;
}
async function getBusyTimes(accessToken, startDate, endDate, calendarIds) {
  let idsToQuery = calendarIds;
  if (!idsToQuery || idsToQuery.length === 0) {
    const calendars = await listCalendars(accessToken);
    idsToQuery = calendars.map((c) => c.id);
  }
  const response = await fetch("https://www.googleapis.com/calendar/v3/freeBusy", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      timeMin: startDate.toISOString(),
      timeMax: endDate.toISOString(),
      items: idsToQuery.map((id) => ({ id }))
    })
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to fetch busy times: ${error}`);
  }
  const data = await response.json();
  const allBusy = [];
  for (const calendarId of idsToQuery) {
    const busy = data.calendars[calendarId]?.busy || [];
    allBusy.push(...busy);
  }
  return mergeBusySlots(allBusy);
}
function mergeBusySlots(slots) {
  if (slots.length === 0) return [];
  const sorted = [...slots].sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
  );
  const merged = [sorted[0]];
  for (let i = 1; i < sorted.length; i++) {
    const current = sorted[i];
    const last = merged[merged.length - 1];
    if (new Date(current.start) <= new Date(last.end)) {
      last.end = new Date(current.end) > new Date(last.end) ? current.end : last.end;
    } else {
      merged.push(current);
    }
  }
  return merged;
}
async function createCalendarEvent(accessToken, event, calendarId = "primary") {
  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?conferenceDataVersion=1`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    }
  );
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to create calendar event: ${error}`);
  }
  return response.json();
}
async function cancelCalendarEvent(accessToken, eventId, calendarId = "primary") {
  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events/${eventId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to cancel calendar event: ${error}`);
  }
}
async function getValidAccessToken(db, userId, clientId, clientSecret) {
  const user = await db.prepare("SELECT google_refresh_token FROM users WHERE id = ?").bind(userId).first();
  if (!user?.google_refresh_token) {
    throw new Error("User not connected to Google Calendar");
  }
  const { refreshAccessToken } = await import("./auth.js");
  const tokens = await refreshAccessToken(user.google_refresh_token, clientId, clientSecret);
  return tokens.access_token;
}
export {
  getBusyTimes as a,
  cancelCalendarEvent as b,
  createCalendarEvent as c,
  getValidAccessToken as g,
  listCalendars as l
};
