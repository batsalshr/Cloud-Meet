import { Y as ensure_array_like, V as attr, $ as attr_class, W as attr_style, X as stringify } from "./index2.js";
import { a as formatDateLocal } from "./dateFormatters.js";
import { e as escape_html } from "./context.js";
const TIMEZONE_LABELS = {
  "America/Los_Angeles": "Pacific Time",
  "America/Denver": "Mountain Time",
  "America/Chicago": "Central Time",
  "America/New_York": "Eastern Time",
  "America/Anchorage": "Alaska Time",
  "America/Phoenix": "Arizona Time",
  "Pacific/Honolulu": "Hawaii Time",
  "America/St_Johns": "Newfoundland Time",
  "America/Halifax": "Atlantic Time",
  "America/Sao_Paulo": "Brasilia Time",
  "America/Buenos_Aires": "Buenos Aires Time",
  "America/Mexico_City": "Mexico City Time",
  "Europe/London": "UK, Ireland Time",
  "Europe/Paris": "Central European Time",
  "Europe/Amsterdam": "Amsterdam Time",
  "Europe/Berlin": "Berlin Time",
  "Europe/Helsinki": "Eastern European Time",
  "Europe/Moscow": "Moscow Time",
  "Europe/Istanbul": "Turkey Time",
  "Asia/Dubai": "Dubai Time",
  "Asia/Kolkata": "India Time",
  "Asia/Bangkok": "Indochina Time",
  "Asia/Singapore": "Singapore Time",
  "Asia/Shanghai": "China Time",
  "Asia/Hong_Kong": "Hong Kong Time",
  "Asia/Tokyo": "Japan Time",
  "Asia/Seoul": "Seoul Time",
  "Australia/Sydney": "Sydney Time",
  "Australia/Brisbane": "Brisbane Time",
  "Australia/Perth": "Perth Time",
  "Pacific/Auckland": "Auckland Time",
  "UTC": "UTC Time"
};
function getTimezoneLabel(tz) {
  return TIMEZONE_LABELS[tz] || tz.replace(/_/g, " ").split("/").pop() || tz;
}
function detectTimezone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return "Europe/Amsterdam";
  }
}
function getCurrentTime(tz, use12Hour = true) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: use12Hour,
      timeZone: tz
    }).format(/* @__PURE__ */ new Date());
  } catch {
    return "--:--";
  }
}
function getTimezoneWithTime(tz, use12Hour = true) {
  return `${getTimezoneLabel(tz)} (${getCurrentTime(tz, use12Hour)})`;
}
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) } : { r: 59, g: 130, b: 246 };
}
function adjustBrightness(hex, percent) {
  const { r, g, b } = hexToRgb(hex);
  const adjust = (c) => Math.min(255, Math.max(0, Math.round(c + 255 * percent / 100)));
  return `rgb(${adjust(r)}, ${adjust(g)}, ${adjust(b)})`;
}
function adjustBrightnessHex(hex, percent) {
  const { r, g, b } = hexToRgb(hex);
  const adjust = (c) => Math.min(255, Math.max(0, Math.round(c + 255 * percent / 100)));
  const toHex = (c) => c.toString(16).padStart(2, "0");
  return `#${toHex(adjust(r))}${toHex(adjust(g))}${toHex(adjust(b))}`;
}
function createBrandColors(brandColor) {
  return {
    base: brandColor,
    rgb: hexToRgb(brandColor),
    light: adjustBrightness(brandColor, 40),
    lighter: adjustBrightness(brandColor, 60),
    dark: adjustBrightness(brandColor, -15),
    darkHex: adjustBrightnessHex(brandColor, -20)
  };
}
function BookingCalendar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      currentMonth,
      selectedDate,
      availableDates,
      brandColor,
      brandLighter,
      brandDark,
      onDateSelect,
      onPrevMonth,
      onNextMonth
    } = $$props;
    const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const calendarDays = () => {
      const year = currentMonth.getFullYear();
      const month = currentMonth.getMonth();
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const startPadding = (firstDay.getDay() + 6) % 7;
      const days = [];
      for (let i = 0; i < startPadding; i++) {
        const date = new Date(year, month, i - startPadding + 1);
        days.push({
          date,
          isCurrentMonth: false,
          isAvailable: false,
          dateStr: formatDateLocal(date)
        });
      }
      const today = /* @__PURE__ */ new Date();
      today.setHours(0, 0, 0, 0);
      for (let i = 1; i <= lastDay.getDate(); i++) {
        const date = new Date(year, month, i);
        const dateStr = formatDateLocal(date);
        const isAvailable = date >= today && date <= new Date(today.getTime() + 60 * 24 * 60 * 60 * 1e3);
        days.push({ date, isCurrentMonth: true, isAvailable, dateStr });
      }
      const remaining = 42 - days.length;
      for (let i = 1; i <= remaining; i++) {
        const date = new Date(year, month + 1, i);
        days.push({
          date,
          isCurrentMonth: false,
          isAvailable: false,
          dateStr: formatDateLocal(date)
        });
      }
      return days;
    };
    function formatMonthYear(date) {
      return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(date);
    }
    $$renderer2.push(`<div><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-medium text-gray-900">${escape_html(formatMonthYear(currentMonth))}</h3> <div class="flex gap-2"><button class="p-2 hover:bg-gray-100 rounded-full transition" aria-label="Previous month"><svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button> <button class="p-2 hover:bg-gray-100 rounded-full transition" aria-label="Next month"><svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button></div></div> <div class="grid grid-cols-7 gap-1 mb-2"><!--[-->`);
    const each_array = ensure_array_like(weekDays);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let day = each_array[$$index];
      $$renderer2.push(`<div class="text-center text-xs font-medium text-gray-500 py-2">${escape_html(day)}</div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="grid grid-cols-7 gap-1"><!--[-->`);
    const each_array_1 = ensure_array_like(calendarDays());
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let day = each_array_1[$$index_1];
      const hasSlots = availableDates.has(day.dateStr);
      const isClickable = day.isAvailable && hasSlots;
      const isSelected = selectedDate === day.dateStr;
      $$renderer2.push(`<button type="button"${attr("disabled", !isClickable, true)}${attr_class(`aspect-square flex items-center justify-center text-sm rounded-full transition relative ${stringify(!day.isCurrentMonth ? "text-gray-300" : "")} ${stringify(isClickable && !isSelected ? "font-semibold cursor-pointer" : "")} ${stringify(day.isAvailable && !hasSlots && day.isCurrentMonth ? "text-gray-400" : "")} ${stringify(!day.isAvailable && day.isCurrentMonth ? "text-gray-300 cursor-not-allowed" : "")} ${stringify(isSelected ? "text-white" : "")}`)}${attr_style(`${stringify(isClickable && !isSelected ? `background-color: ${brandLighter}; color: ${brandDark}` : "")}${stringify(isSelected ? `background-color: ${brandColor}` : "")}`)}>${escape_html(day.date.getDate())}</button>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
export {
  BookingCalendar as B,
  getCurrentTime as a,
  createBrandColors as c,
  detectTimezone as d,
  getTimezoneWithTime as g
};
