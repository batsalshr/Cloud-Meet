import { W as attr_style, X as stringify, Y as ensure_array_like, V as attr, Z as bind_props, _ as head, $ as attr_class } from "../../../chunks/index2.js";
import { c as createBrandColors, d as detectTimezone, g as getTimezoneWithTime, B as BookingCalendar } from "../../../chunks/BookingCalendar.js";
import { F as Footer } from "../../../chunks/Footer.js";
import { f as formatSelectedDate, a as formatDateLocal } from "../../../chunks/dateFormatters.js";
import { e as escape_html } from "../../../chunks/context.js";
function html(value) {
  var html2 = String(value);
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function TimeSlotList($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      selectedDate,
      availableSlots,
      selectedSlot,
      loading,
      brandColor,
      formatTime
    } = $$props;
    $$renderer2.push(`<div class="w-52 ml-6 border-l border-gray-200 pl-6 flex flex-col" style="max-height: 400px;"><h3 class="text-sm font-medium text-gray-500 mb-4 flex-shrink-0">${escape_html(formatSelectedDate(selectedDate).split(",")[0])}</h3> `);
    if (loading) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex items-center justify-center py-8"><div class="animate-spin rounded-full h-8 w-8 border-2 border-t-transparent"${attr_style(`border-color: ${stringify(brandColor)}; border-top-color: transparent`)}></div></div>`);
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
            $$renderer2.push(`<div class="flex gap-2"><button type="button" class="flex-1 py-2.5 px-3 border-2 border-gray-900 bg-gray-900 text-white rounded-lg text-sm font-semibold">${escape_html(formatTime(slot.start))}</button> <button type="button" class="flex-1 py-2.5 px-3 text-white rounded-lg text-sm font-semibold transition"${attr_style(`background-color: ${stringify(brandColor)}`)}>Next</button></div>`);
          } else {
            $$renderer2.push("<!--[!-->");
            $$renderer2.push(`<button type="button" class="w-full py-2.5 px-3 border-2 rounded-lg text-sm font-semibold transition"${attr_style(`border-color: ${stringify(brandColor)}; color: ${stringify(brandColor)}`)}>${escape_html(formatTime(slot.start))}</button>`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]--></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function BookingForm($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      bookingForm = void 0,
      bookingStatus,
      bookingError,
      brandColor,
      brandDark,
      onSubmit
    } = $$props;
    $$renderer2.push(`<div class="max-w-md"><h2 class="text-xl font-semibold text-gray-900 mb-6">Enter Details</h2> `);
    if (bookingError) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6">${escape_html(bookingError)}</div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <form class="space-y-5"><div><label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name *</label> <input type="text" id="name"${attr("value", bookingForm.name)} required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none"${attr_style(`--tw-ring-color: ${stringify(brandColor)}`)}/></div> <div><label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email *</label> <input type="email" id="email"${attr("value", bookingForm.email)} required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none"${attr_style(`--tw-ring-color: ${stringify(brandColor)}`)}/></div> <div><label for="notes" class="block text-sm font-medium text-gray-700 mb-2">Please share anything that will help prepare for our meeting.</label> <textarea id="notes" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none resize-none"${attr_style(`--tw-ring-color: ${stringify(brandColor)}`)}>`);
    const $$body = escape_html(bookingForm.notes);
    if ($$body) {
      $$renderer2.push(`${$$body}`);
    }
    $$renderer2.push(`</textarea></div> <button type="submit"${attr("disabled", bookingStatus === "submitting", true)} class="w-full text-white py-3 px-6 rounded-full font-semibold transition disabled:opacity-50"${attr_style(`background-color: ${stringify(brandColor)}`)}>${escape_html(bookingStatus === "submitting" ? "Scheduling..." : "Schedule Event")}</button></form></div>`);
    bind_props($$props, { bookingForm });
  });
}
function BookingSuccess($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      eventName,
      selectedDate,
      selectedSlot,
      meetingUrl,
      meetingType = "google_meet",
      brandColor,
      formatTimeRange,
      formatSelectedDate: formatSelectedDate2
    } = $$props;
    const meetingLabel = meetingType === "teams" ? "Join Microsoft Teams Meeting" : "Join Google Meet";
    $$renderer2.push(`<div class="bg-white rounded-2xl shadow-lg p-6 sm:p-8 max-w-md w-full mx-2"><div class="text-center"><div class="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"><svg class="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div> <h1 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">You are scheduled</h1> <p class="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">A calendar invitation has been sent to your email address.</p> <div class="bg-gray-50 rounded-lg p-4 sm:p-6 text-left mb-6"><h3 class="font-semibold text-gray-900 mb-3 sm:mb-4">${escape_html(eventName)}</h3> <div class="space-y-3 text-sm"><div class="flex items-start gap-3"><svg class="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> <div><p class="text-gray-900">${escape_html(formatTimeRange(selectedSlot.start, selectedSlot.end))}</p> <p class="text-gray-500">${escape_html(formatSelectedDate2(selectedDate))}</p></div></div> `);
    if (meetingUrl) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex items-start gap-3"><svg class="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg> <a${attr("href", meetingUrl)} target="_blank" class="hover:underline break-all"${attr_style(`color: ${stringify(brandColor)}`)}>${escape_html(meetingLabel)}</a></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div></div></div>`);
  });
}
function EventSidebar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      user,
      eventType,
      selectedDate,
      selectedSlot,
      brandColor,
      formatTime
    } = $$props;
    let sanitizedDescription = "";
    const meetingLabel = eventType?.invite_calendar === "outlook" ? "Microsoft Teams" : "Google Meet";
    $$renderer2.push(`<div class="w-72 border-r border-gray-200 flex flex-col flex-shrink-0">`);
    if (eventType?.cover_image) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="p-6 pb-4 flex justify-center"><img${attr("src", eventType.cover_image)} alt="" class="max-h-16 w-auto object-contain"/></div> <div class="border-b border-gray-200 mx-6"></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="flex-1 p-6"><div class="mb-6">`);
    if (user?.profileImage) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img${attr("src", user.profileImage)}${attr("alt", user.name)} class="w-12 h-12 rounded-full object-cover mb-3"/>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg mb-3"${attr_style(`background-color: ${stringify(brandColor)}`)}>${escape_html(user?.name?.charAt(0) || "M")}</div>`);
    }
    $$renderer2.push(`<!--]--> <p class="text-sm font-medium text-gray-600 mb-1">${escape_html(user?.name || "Host")}</p> <h1 class="text-2xl font-bold text-gray-900">${escape_html(eventType?.name || "Meeting")}</h1></div> <div class="space-y-4 text-sm text-gray-600"><div class="flex items-center gap-3"><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>${escape_html(eventType?.duration)} min</span></div> <div class="flex items-center gap-3"><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg> <span>${escape_html(meetingLabel)}</span></div></div> `);
    if (eventType?.description) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="mt-6 pt-6 border-t border-gray-200"><div class="text-sm text-gray-600 prose prose-sm max-w-none [&amp;_p]:my-2 [&amp;_ul]:my-2 [&amp;_ol]:my-2 [&amp;_li]:my-1">${html(sanitizedDescription)}</div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (selectedDate && selectedSlot) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="mt-6 pt-6 border-t border-gray-200"><div class="flex items-center gap-3 text-sm"><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> <div><p class="font-medium text-gray-900">${escape_html(formatTime(selectedSlot.start))} - ${escape_html(formatTime(selectedSlot.end))}</p> <p class="text-gray-500">${escape_html(formatSelectedDate(selectedDate))}</p></div></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let sanitizedDescription = "";
    const brandColor = data.user?.brandColor || "#3b82f6";
    const colors = createBrandColors(brandColor);
    let selectedDate = null;
    let selectedSlot = null;
    let availableSlots = [];
    let loading = false;
    let showForm = false;
    let bookingForm = { name: "", email: "", notes: "" };
    let bookingStatus = "idle";
    let bookingError = "";
    let meetingUrl = null;
    let meetingType = "google_meet";
    let availableDates = /* @__PURE__ */ new Set();
    let mobileStep = "calendar";
    let selectedTimezone = detectTimezone();
    let currentMonth = /* @__PURE__ */ new Date();
    const use12Hour = data.user?.timeFormat !== "24h";
    function formatTime(isoStr) {
      const date = new Date(isoStr);
      return new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: use12Hour,
        timeZone: selectedTimezone
      }).format(date);
    }
    function formatTimeRange(start, end) {
      return `${formatTime(start)} - ${formatTime(end)}`;
    }
    function formatShortDate(dateStr) {
      const date = /* @__PURE__ */ new Date(dateStr + "T12:00:00");
      return new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric" }).format(date);
    }
    function formatMonthYear(date) {
      return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(date);
    }
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
        const response = await fetch(`/api/availability/month?event=${data.slug}&month=${monthStr}`);
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
      showForm = false;
      loading = true;
      mobileStep = "times";
      try {
        const response = await fetch(`/api/availability?event=${data.slug}&date=${dateStr}`);
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
    async function handleSubmit(e) {
      e.preventDefault();
      bookingStatus = "submitting";
      bookingError = "";
      try {
        const response = await fetch("/api/bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            eventSlug: data.slug,
            startTime: selectedSlot?.start,
            endTime: selectedSlot?.end,
            attendeeName: bookingForm.name,
            attendeeEmail: bookingForm.email,
            notes: bookingForm.notes,
            timezone: selectedTimezone
          })
        });
        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.message || "Failed to create booking");
        }
        const result = await response.json();
        meetingUrl = result.meetingUrl || null;
        meetingType = result.meetingType || "google_meet";
        bookingStatus = "success";
      } catch (error) {
        console.error("Booking error:", error);
        bookingError = error.message || "Failed to create booking";
        bookingStatus = "error";
      }
    }
    const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head("jot9ci", $$renderer3, ($$renderer4) => {
        $$renderer4.title(($$renderer5) => {
          $$renderer5.push(`<title>${escape_html(data.eventType?.name || "Book a Meeting")}</title>`);
        });
        $$renderer4.push(`<link rel="icon" type="image/svg+xml"${attr("href", `data:image/svg+xml,${stringify(encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><defs><linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:${brandColor};stop-opacity:1'/><stop offset='100%' style='stop-color:${colors.darkHex};stop-opacity:1'/></linearGradient></defs><circle cx='16' cy='16' r='15' fill='url(%23grad)'/><rect x='7' y='9' width='18' height='15' rx='2' fill='white' opacity='0.95'/><rect x='7' y='9' width='18' height='5' rx='2' fill='white'/><rect x='7' y='12' width='18' height='2' fill='${brandColor}'/><rect x='10' y='6' width='2.5' height='5' rx='1' fill='white'/><rect x='19.5' y='6' width='2.5' height='5' rx='1' fill='white'/><circle cx='16' cy='18' r='4' fill='none' stroke='${colors.darkHex}' stroke-width='1.5'/><line x1='16' y1='18' x2='16' y2='16' stroke='${colors.darkHex}' stroke-width='1.5' stroke-linecap='round'/><line x1='16' y1='18' x2='18' y2='18' stroke='${colors.darkHex}' stroke-width='1.5' stroke-linecap='round'/></svg>`))}`)}/>`);
      });
      $$renderer3.push(`<div class="min-h-screen bg-white md:bg-gray-100 flex flex-col items-center md:justify-center md:p-4"${attr_style(`--brand-color: ${stringify(brandColor)}; --brand-light: ${stringify(colors.light)}; --brand-lighter: ${stringify(colors.lighter)}; --brand-dark: ${stringify(colors.dark)}; --brand-rgb: ${stringify(colors.rgb.r)}, ${stringify(colors.rgb.g)}, ${stringify(colors.rgb.b)};`)}>`);
      if (bookingStatus === "success") {
        $$renderer3.push("<!--[-->");
        BookingSuccess($$renderer3, {
          eventName: data.eventType?.name || "Meeting",
          selectedDate,
          selectedSlot,
          meetingUrl,
          meetingType,
          brandColor,
          formatTimeRange,
          formatSelectedDate
        });
        $$renderer3.push(`<!----> `);
        Footer($$renderer3, { class: "mt-6" });
        $$renderer3.push(`<!---->`);
      } else {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push(`<div class="md:hidden min-h-screen w-full bg-white">`);
        if (data.eventType?.cover_image) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="px-6 pt-6 flex justify-center"><img${attr("src", data.eventType.cover_image)} alt="" class="max-h-16 w-auto object-contain"/></div> <div class="border-b border-gray-200 mx-6 mt-4"></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (mobileStep !== "calendar") {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="px-6 py-4"><button class="flex items-center gap-2 text-gray-600 hover:text-gray-900" aria-label="Go back"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> <span class="text-sm">Back</span></button></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (mobileStep === "calendar") {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="flex flex-col items-center pt-8 pb-6 px-6">`);
          if (data.user?.profileImage) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<img${attr("src", data.user.profileImage)}${attr("alt", data.user.name)} class="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"/>`);
          } else {
            $$renderer3.push("<!--[!-->");
            $$renderer3.push(`<div class="w-24 h-24 rounded-full flex items-center justify-center text-white font-semibold text-3xl border-4 border-white shadow-lg" style="background-color: var(--brand-color)">${escape_html(data.user?.name?.charAt(0) || "M")}</div>`);
          }
          $$renderer3.push(`<!--]--> <p class="mt-4 text-base font-semibold text-gray-600">${escape_html(data.user?.name || "Host")}</p></div> <div class="px-6 pb-5"><h1 class="text-2xl font-bold text-gray-900 text-center">${escape_html(data.eventType?.name || "Meeting")}</h1></div> <div class="px-6 pb-5"><ul class="space-y-3 text-sm text-gray-600"><li class="flex items-center gap-3"><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>${escape_html(data.eventType?.duration)} min</span></li> <li class="flex items-center gap-3"><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg> <span>${escape_html(data.eventType?.invite_calendar === "outlook" ? "Microsoft Teams" : "Google Meet")}</span></li> <li class="flex items-center gap-3"><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <button type="button" class="flex items-center gap-1 hover:text-gray-900 transition"><span>${escape_html(getTimezoneWithTime(selectedTimezone, use12Hour))}</span> <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button></li></ul> `);
          {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></div> `);
          if (data.eventType?.description) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="px-6 pb-5 text-sm text-gray-600 prose prose-sm max-w-none">${html(sanitizedDescription)}</div>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> <div class="border-b border-gray-200 mx-6 mb-6"></div> <div class="px-6 pb-8"><h2 class="text-lg font-semibold text-gray-900 mb-5 text-center">Select a Date &amp; Time</h2> <div class="flex items-center justify-between mb-4"><button class="p-2 hover:bg-gray-100 rounded-full transition" aria-label="Previous month"><svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button> <h3 class="text-base font-semibold text-gray-900">${escape_html(formatMonthYear(currentMonth))}</h3> <button class="p-2 hover:bg-gray-100 rounded-full transition" aria-label="Next month"><svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button></div> <div class="grid grid-cols-7 gap-1 mb-2"><!--[-->`);
          const each_array = ensure_array_like(weekDays);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let day = each_array[$$index];
            $$renderer3.push(`<div class="text-center text-xs font-medium text-gray-500 py-2">${escape_html(day)}</div>`);
          }
          $$renderer3.push(`<!--]--></div> <div class="grid grid-cols-7 gap-1"><!--[-->`);
          const each_array_1 = ensure_array_like(calendarDays());
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let day = each_array_1[$$index_1];
            const hasSlots = availableDates.has(day.dateStr);
            const isClickable = day.isAvailable && hasSlots;
            const isSelected = selectedDate === day.dateStr;
            $$renderer3.push(`<button type="button"${attr("disabled", !isClickable, true)}${attr_class(`aspect-square flex items-center justify-center text-sm rounded-full transition ${stringify(!day.isCurrentMonth ? "text-gray-300" : "")} ${stringify(isClickable && !isSelected ? "font-semibold" : "")} ${stringify(day.isAvailable && !hasSlots && day.isCurrentMonth ? "text-gray-400" : "")} ${stringify(!day.isAvailable && day.isCurrentMonth ? "text-gray-300" : "")} ${stringify(isSelected ? "text-white" : "")}`)}${attr_style(`${stringify(isClickable && !isSelected ? `background-color: var(--brand-lighter); color: var(--brand-dark)` : "")}${stringify(isSelected ? `background-color: var(--brand-color)` : "")}`)}>${escape_html(day.date.getDate())}</button>`);
          }
          $$renderer3.push(`<!--]--></div></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (mobileStep === "times") {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="px-6 pb-8"><h2 class="text-lg font-semibold text-gray-900 mb-2 text-center">Select a Time</h2> <p class="text-sm text-gray-500 text-center mb-6">${escape_html(selectedDate ? formatSelectedDate(selectedDate) : "")}</p> `);
          if (loading) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="flex items-center justify-center py-8"><div class="animate-spin rounded-full h-8 w-8 border-2 border-t-transparent" style="border-color: var(--brand-color); border-top-color: transparent;"></div></div>`);
          } else {
            $$renderer3.push("<!--[!-->");
            if (availableSlots.length === 0) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<p class="text-sm text-gray-500 py-4 text-center">No available times for this date</p>`);
            } else {
              $$renderer3.push("<!--[!-->");
              $$renderer3.push(`<div class="grid grid-cols-2 gap-3"><!--[-->`);
              const each_array_2 = ensure_array_like(availableSlots);
              for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
                let slot = each_array_2[$$index_2];
                const isSelected = selectedSlot === slot;
                $$renderer3.push(`<button type="button"${attr_class(`py-3 px-4 border-2 rounded-lg text-sm font-semibold transition ${stringify(isSelected ? "border-gray-900 bg-gray-900 text-white" : "")}`)}${attr_style(!isSelected ? `border-color: var(--brand-color); color: var(--brand-color)` : "")}>${escape_html(formatTime(slot.start))}</button>`);
              }
              $$renderer3.push(`<!--]--></div> `);
              if (selectedSlot) {
                $$renderer3.push("<!--[-->");
                $$renderer3.push(`<button type="button" class="w-full mt-6 py-3 px-6 text-white rounded-full font-semibold transition" style="background-color: var(--brand-color)">Next</button>`);
              } else {
                $$renderer3.push("<!--[!-->");
              }
              $$renderer3.push(`<!--]-->`);
            }
            $$renderer3.push(`<!--]-->`);
          }
          $$renderer3.push(`<!--]--></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (mobileStep === "form") {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="px-6 pb-8">`);
          if (bookingError) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="bg-red-50 border border-red-200 text-red-800 rounded-lg p-3 mb-4 text-sm">${escape_html(bookingError)}</div>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> <h2 class="text-lg font-semibold text-gray-900 mb-2 text-center">Enter Details</h2> <p class="text-sm text-gray-500 text-center mb-6">${escape_html(selectedDate ? formatShortDate(selectedDate) : "")}${escape_html(selectedSlot ? ` at ${formatTime(selectedSlot.start)}` : "")}</p> <form class="space-y-4"><div><label for="mobile-name" class="block text-sm font-medium text-gray-700 mb-1.5">Name *</label> <input type="text" id="mobile-name"${attr("value", bookingForm.name)} required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none text-sm" style="--tw-ring-color: var(--brand-color)"/></div> <div><label for="mobile-email" class="block text-sm font-medium text-gray-700 mb-1.5">Email *</label> <input type="email" id="mobile-email"${attr("value", bookingForm.email)} required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none text-sm" style="--tw-ring-color: var(--brand-color)"/></div> <div><label for="mobile-notes" class="block text-sm font-medium text-gray-700 mb-1.5">Additional notes</label> <textarea id="mobile-notes" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none resize-none text-sm" style="--tw-ring-color: var(--brand-color)">`);
          const $$body = escape_html(bookingForm.notes);
          if ($$body) {
            $$renderer3.push(`${$$body}`);
          }
          $$renderer3.push(`</textarea></div> <button type="submit"${attr("disabled", bookingStatus === "submitting", true)} class="w-full text-white py-3 px-6 rounded-full font-semibold transition disabled:opacity-50" style="background-color: var(--brand-color)">${escape_html(bookingStatus === "submitting" ? "Scheduling..." : "Schedule Event")}</button></form></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        Footer($$renderer3, { class: "px-6 pb-8" });
        $$renderer3.push(`<!----></div> <div class="hidden md:flex bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out"${attr_style(`width: ${stringify(showForm ? "700px" : selectedDate ? "920px" : "650px")}`)}>`);
        EventSidebar($$renderer3, {
          user: data.user,
          eventType: data.eventType,
          selectedDate,
          selectedSlot,
          brandColor,
          formatTime
        });
        $$renderer3.push(`<!----> <div class="flex-1 p-6">`);
        if (bookingError) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6 max-w-2xl">${escape_html(bookingError)}</div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (showForm) {
          $$renderer3.push("<!--[-->");
          BookingForm($$renderer3, {
            bookingStatus,
            bookingError,
            brandColor,
            brandDark: colors.dark,
            onSubmit: handleSubmit,
            get bookingForm() {
              return bookingForm;
            },
            set bookingForm($$value) {
              bookingForm = $$value;
              $$settled = false;
            }
          });
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<div class="flex items-stretch"><div class="w-80"><h2 class="text-xl font-semibold text-gray-900 mb-6">Select a Date &amp; Time</h2> `);
          BookingCalendar($$renderer3, {
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
          $$renderer3.push(`<!----> <div class="mt-6 relative"><p class="text-sm font-semibold text-gray-900 mb-2">Time zone</p> <button type="button" class="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition"><svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>${escape_html(getTimezoneWithTime(selectedTimezone, use12Hour))}</span> <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> `);
          {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></div></div> `);
          if (selectedDate) {
            $$renderer3.push("<!--[-->");
            TimeSlotList($$renderer3, {
              selectedDate,
              availableSlots,
              selectedSlot,
              loading,
              brandColor,
              formatTime
            });
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></div>`);
        }
        $$renderer3.push(`<!--]--></div></div> `);
        Footer($$renderer3, { class: "mt-6" });
        $$renderer3.push(`<!---->`);
      }
      $$renderer3.push(`<!--]--></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
export {
  _page as default
};
