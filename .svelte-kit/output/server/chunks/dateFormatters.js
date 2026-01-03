function createFormatters(options = {}) {
  const { timeFormat = "12h", timezone } = options;
  const use12Hour = timeFormat === "12h";
  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: timezone
    }).format(date);
  };
  const formatTime = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: use12Hour,
      timeZone: timezone
    }).format(date);
  };
  const formatTimeWithZone = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: use12Hour,
      timeZoneName: "short",
      timeZone: timezone
    }).format(date);
  };
  const formatDateTime = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: use12Hour,
      timeZoneName: "short",
      timeZone: timezone
    }).format(date);
  };
  const formatShortDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      timeZone: timezone
    }).format(date);
  };
  const formatShortDateTime = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: use12Hour,
      timeZone: timezone
    }).format(date);
  };
  const formatCompactDateTime = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    }).format(date);
  };
  const formatMonthYear = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric"
    }).format(date);
  };
  return {
    formatDate,
    formatTime,
    formatTimeWithZone,
    formatDateTime,
    formatShortDate,
    formatShortDateTime,
    formatCompactDateTime,
    formatMonthYear
  };
}
function formatDateLocal(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function formatSelectedDate(dateStr) {
  const date = /* @__PURE__ */ new Date(dateStr + "T12:00:00");
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(date);
}
export {
  formatDateLocal as a,
  createFormatters as c,
  formatSelectedDate as f
};
