import { _ as head, W as attr_style, V as attr, X as stringify, Y as ensure_array_like } from "../../../../chunks/index2.js";
import { c as createBrandColors, d as detectTimezone, B as BookingCalendar, a as getCurrentTime } from "../../../../chunks/BookingCalendar.js";
import { F as Footer } from "../../../../chunks/Footer.js";
import { f as formatSelectedDate } from "../../../../chunks/dateFormatters.js";
import { e as escape_html } from "../../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    const brandColor = data.booking.brandColor;
    const colors = createBrandColors(brandColor);
    let selectedDate = null;
    let selectedSlot = null;
    let availableSlots = [];
    let loading = false;
    let rescheduleStatus = "idle";
    let availableDates = /* @__PURE__ */ new Set();
    let selectedTimezone = detectTimezone();
    let currentMonth = /* @__PURE__ */ new Date();
    const use12Hour = data.timeFormat !== "24h";
    function formatTime(isoStr) {
      const date = new Date(isoStr);
      return new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: use12Hour,
        timeZone: selectedTimezone
      }).format(date);
    }
    function formatOriginalDateTime(dateStr) {
      const date = new Date(dateStr);
      return new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: use12Hour,
        timeZone: selectedTimezone
      }).format(date);
    }
    function prevMonth() {
      currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
      fetchMonthAvailability();
    }
    function nextMonth() {
      currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
      fetchMonthAvailability();
    }
    async function fetchMonthAvailability() {
      try {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth() + 1;
        const monthStr = `${year}-${String(month).padStart(2, "0")}`;
        const response = await fetch(`/api/availability/month?event=${data.booking.eventSlug}&month=${monthStr}`);
        if (!response.ok) throw new Error("Failed to fetch availability");
        const result = await response.json();
        availableDates = new Set(result.availableDates || []);
      } catch (error) {
        console.error("Error fetching month availability:", error);
        availableDates = /* @__PURE__ */ new Set();
      } finally {
      }
    }
    async function handleDateSelect(dateStr) {
      selectedDate = dateStr;
      selectedSlot = null;
      loading = true;
      try {
        const response = await fetch(`/api/availability?event=${data.booking.eventSlug}&date=${dateStr}`);
        if (!response.ok) throw new Error("Failed to fetch availability");
        const result = await response.json();
        availableSlots = result.slots || [];
      } catch (error) {
        console.error("Error fetching availability:", error);
        availableSlots = [];
      } finally {
        loading = false;
      }
    }
    head("sewpl5", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Reschedule Meeting</title>`);
      });
    });
    $$renderer2.push(`<div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4"${attr_style(`--brand-color: ${stringify(brandColor)}; --brand-light: ${stringify(colors.light)}; --brand-lighter: ${stringify(colors.lighter)}; --brand-dark: ${stringify(colors.dark)}; --brand-rgb: ${stringify(colors.rgb.r)}, ${stringify(colors.rgb.g)}, ${stringify(colors.rgb.b)};`)}>`);
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="bg-white rounded-2xl shadow-lg overflow-hidden flex transition-all duration-300 ease-in-out"${attr_style(`width: ${stringify(selectedDate ? "920px" : "650px")}`)}><div class="w-72 border-r border-gray-200 flex flex-col flex-shrink-0">`);
      if (data.booking.coverImage) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="p-6 pb-4 flex justify-center"><img${attr("src", data.booking.coverImage)} alt="" class="max-h-16 w-auto object-contain"/></div> <div class="border-b border-gray-200 mx-6"></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <div class="flex-1 p-6"><div class="mb-6">`);
      if (data.booking.profileImage) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<img${attr("src", data.booking.profileImage)}${attr("alt", data.booking.hostName)} class="w-12 h-12 rounded-full object-cover mb-3"/>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div class="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg mb-3" style="background-color: var(--brand-color)">${escape_html(data.booking.hostName?.charAt(0) || "H")}</div>`);
      }
      $$renderer2.push(`<!--]--> <p class="text-sm font-medium text-gray-600 mb-1">${escape_html(data.booking.hostName)}</p> <h1 class="text-2xl font-bold text-gray-900">${escape_html(data.booking.eventName)}</h1></div> <div class="space-y-4 text-sm text-gray-600"><div class="flex items-center gap-3"><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>${escape_html(data.booking.duration)} min</span></div> <div class="flex items-center gap-3"><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg> <span>${escape_html(data.booking.inviteCalendar === "outlook" ? "Microsoft Teams" : "Google Meet")}</span></div></div> <div class="mt-6 pt-6 border-t border-gray-200"><p class="text-xs font-semibold text-gray-500 uppercase mb-2">Current booking</p> <div class="bg-red-50 rounded-lg p-3 text-sm"><p class="font-medium text-red-900">${escape_html(formatOriginalDateTime(data.booking.startTime))}</p> <p class="text-red-700">${escape_html(data.booking.attendeeName)}</p> <p class="text-red-600 text-xs">${escape_html(data.booking.attendeeEmail)}</p></div></div> `);
      if (selectedSlot) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="mt-4"><p class="text-xs font-semibold text-gray-500 uppercase mb-2">New time</p> <div class="bg-green-50 rounded-lg p-3 text-sm"><p class="font-medium text-green-900">${escape_html(formatTime(selectedSlot.start))} - ${escape_html(formatTime(selectedSlot.end))}</p> <p class="text-green-700">${escape_html(selectedDate ? formatSelectedDate(selectedDate) : "")}</p></div></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div></div> <div class="flex-1 p-6">`);
      {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <div class="flex items-stretch"><div class="w-80"><h2 class="text-xl font-semibold text-gray-900 mb-6">Select a New Date &amp; Time</h2> `);
      BookingCalendar($$renderer2, {
        currentMonth,
        selectedDate,
        availableDates,
        brandColor,
        brandLighter: colors.lighter,
        brandDark: colors.dark,
        onDateSelect: handleDateSelect,
        onPrevMonth: prevMonth,
        onNextMonth: nextMonth
      });
      $$renderer2.push(`<!----> <div class="mt-6 relative"><p class="text-sm font-semibold text-gray-900 mb-2">Time zone</p> <button type="button" class="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition"><svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>${escape_html(selectedTimezone)} (${escape_html(getCurrentTime(selectedTimezone, use12Hour))})</span> <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> `);
      {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div></div> `);
      if (selectedDate) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="w-52 ml-6 border-l border-gray-200 pl-6 flex flex-col" style="max-height: 400px;"><h3 class="text-sm font-medium text-gray-500 mb-4 flex-shrink-0">${escape_html(formatSelectedDate(selectedDate).split(",")[0])}</h3> `);
        if (loading) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="flex items-center justify-center py-8"><div class="animate-spin rounded-full h-8 w-8 border-2 border-t-transparent" style="border-color: var(--brand-color); border-top-color: transparent"></div></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (availableSlots.length === 0) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<p class="text-sm text-gray-500 py-4">No available times</p>`);
          } else {
            $$renderer2.push("<!--[!-->");
            $$renderer2.push(`<div class="space-y-2 overflow-y-auto flex-1 pr-2 pb-2 scrollbar-thin"><!--[-->`);
            const each_array = ensure_array_like(availableSlots);
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let slot = each_array[$$index];
              if (selectedSlot === slot) {
                $$renderer2.push("<!--[-->");
                $$renderer2.push(`<button type="button" class="w-full py-2.5 px-3 border-2 border-gray-900 bg-gray-900 text-white rounded-lg text-sm font-semibold">${escape_html(formatTime(slot.start))}</button>`);
              } else {
                $$renderer2.push("<!--[!-->");
                $$renderer2.push(`<button type="button" class="w-full py-2.5 px-3 border-2 rounded-lg text-sm font-semibold transition" style="border-color: var(--brand-color); color: var(--brand-color)">${escape_html(formatTime(slot.start))}</button>`);
              }
              $$renderer2.push(`<!--]-->`);
            }
            $$renderer2.push(`<!--]--></div>`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div> `);
      if (selectedSlot) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="mt-6 pt-6 border-t border-gray-200"><button${attr("disabled", rescheduleStatus === "submitting", true)} class="w-full py-3 px-6 text-white rounded-full font-semibold transition disabled:opacity-50" style="background-color: var(--brand-color)">${escape_html("Confirm Reschedule")}</button></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <div class="mt-4 text-center"><a${attr("href", `/cancel/${stringify(data.booking.id)}`)} class="text-sm text-gray-500 hover:text-red-600 transition">Or cancel this meeting instead</a></div></div></div> `);
      Footer($$renderer2, { class: "mt-6" });
      $$renderer2.push(`<!---->`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
export {
  _page as default
};
