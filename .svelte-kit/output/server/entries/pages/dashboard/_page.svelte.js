import { V as attr, Y as ensure_array_like, $ as attr_class, X as stringify } from "../../../chunks/index2.js";
import { e as escape_html } from "../../../chunks/context.js";
import "clsx";
import { c as createFormatters } from "../../../chunks/dateFormatters.js";
function ProfileSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { user } = $$props;
    function getUserSettings() {
      try {
        return user?.settings ? JSON.parse(user.settings) : {};
      } catch {
        return {};
      }
    }
    user?.name || "";
    user?.profile_image || "";
    user?.brand_color || "#3b82f6";
    user?.contact_email || "";
    getUserSettings().timeFormat || "12h";
    $$renderer2.push(`<div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8"><div class="flex items-center justify-between mb-4"><h2 class="text-lg font-semibold text-gray-900">Your Profile</h2> <button class="text-sm text-blue-600 hover:text-blue-700">${escape_html("Edit Profile")}</button></div> `);
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="flex items-center gap-4">`);
      if (user?.profile_image) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<img${attr("src", user.profile_image)} alt="Profile" class="w-16 h-16 rounded-full object-cover"/>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-2xl">${escape_html(user?.name?.charAt(0) || "U")}</div>`);
      }
      $$renderer2.push(`<!--]--> <div><p class="font-semibold text-gray-900">${escape_html(user?.name)}</p> <p class="text-sm text-gray-600">${escape_html(user?.email)}</p></div></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function CancelBookingModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    createFormatters();
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function HostRescheduleModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { booking } = $$props;
    const { formatCompactDateTime } = createFormatters();
    let selectedDate = null;
    let message = "";
    let currentMonth = /* @__PURE__ */ new Date();
    const monthName = currentMonth.toLocaleString("default", { month: "long", year: "numeric" });
    const calendarDays = () => {
      const year = currentMonth.getFullYear();
      const month = currentMonth.getMonth();
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const startPadding = firstDay.getDay();
      const days = [];
      for (let i = startPadding - 1; i >= 0; i--) {
        const date = new Date(year, month, -i);
        days.push({ date, isCurrentMonth: false, isToday: false, isPast: true });
      }
      const today = /* @__PURE__ */ new Date();
      today.setHours(0, 0, 0, 0);
      for (let day = 1; day <= lastDay.getDate(); day++) {
        const date = new Date(year, month, day);
        const isToday = date.toDateString() === today.toDateString();
        const isPast = date < today;
        days.push({ date, isCurrentMonth: true, isToday, isPast });
      }
      const remaining = 42 - days.length;
      for (let i = 1; i <= remaining; i++) {
        const date = new Date(year, month + 1, i);
        days.push({ date, isCurrentMonth: false, isToday: false, isPast: false });
      }
      return days;
    };
    function formatDateKey(date) {
      return date.toISOString().split("T")[0];
    }
    if (booking) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"><div class="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"><div class="p-6 border-b border-gray-200"><div class="flex justify-between items-start"><div><h2 class="text-xl font-semibold text-gray-900">Propose New Time</h2> <p class="text-sm text-gray-600 mt-1">Current: ${escape_html(formatCompactDateTime(new Date(booking.start_time)))}</p></div> <button class="text-gray-400 hover:text-gray-600"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="mt-3 bg-gray-50 rounded-lg p-3"><p class="text-sm"><span class="text-gray-600">Meeting:</span> <span class="font-medium">${escape_html(booking.event_type_name)}</span></p> <p class="text-sm"><span class="text-gray-600">With:</span> <span class="font-medium">${escape_html(booking.attendee_name)}</span></p></div></div> <div class="p-6">`);
      {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <div class="flex gap-6"><div class="flex-1"><div class="flex items-center justify-between mb-4"><button class="p-1 hover:bg-gray-100 rounded"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button> <span class="font-medium">${escape_html(monthName)}</span> <button class="p-1 hover:bg-gray-100 rounded"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button></div> <div class="grid grid-cols-7 gap-1 text-center text-xs text-gray-500 mb-2"><div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div></div> <div class="grid grid-cols-7 gap-1"><!--[-->`);
      const each_array = ensure_array_like(calendarDays());
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let day = each_array[$$index];
        $$renderer2.push(`<button type="button"${attr("disabled", day.isPast || !day.isCurrentMonth, true)}${attr_class(`aspect-square flex items-center justify-center text-sm rounded-lg transition ${stringify(day.isCurrentMonth ? "" : "text-gray-300")} ${stringify(day.isPast ? "text-gray-300 cursor-not-allowed" : "hover:bg-blue-50")} ${stringify(day.isToday ? "font-bold" : "")} ${stringify(selectedDate === formatDateKey(day.date) ? "bg-blue-600 text-white hover:bg-blue-700" : "")}`)}>${escape_html(day.date.getDate())}</button>`);
      }
      $$renderer2.push(`<!--]--></div></div> <div class="flex-1"><h3 class="font-medium text-gray-900 mb-3">`);
      {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`Select a date`);
      }
      $$renderer2.push(`<!--]--></h3> `);
      {
        $$renderer2.push("<!--[!-->");
        {
          $$renderer2.push("<!--[!-->");
          {
            $$renderer2.push("<!--[!-->");
            $$renderer2.push(`<div class="text-center py-8 text-gray-400"><svg class="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> <p class="text-sm">Pick a date to see times</p></div>`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></div></div> <div class="mt-6"><label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message to attendee (optional)</label> <textarea id="message" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm" placeholder="Let them know why you need to reschedule...">`);
      const $$body = escape_html(message);
      if ($$body) {
        $$renderer2.push(`${$$body}`);
      }
      $$renderer2.push(`</textarea></div></div> <div class="p-6 border-t border-gray-200 flex gap-3 justify-end"><button type="button" class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition">Cancel</button> <button type="button"${attr("disabled", !selectedDate, true)} class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed">${escape_html("Send Proposal")}</button></div></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function BookingsList($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { bookings } = $$props;
    const { formatCompactDateTime } = createFormatters();
    let sortOrder = "last_booked";
    const sortedBookings = () => {
      if (!bookings) return [];
      const sorted = [...bookings];
      return sorted;
    };
    function getStatusColor(status) {
      switch (status) {
        case "confirmed":
          return "bg-green-100 text-green-800";
        case "canceled":
          return "bg-red-100 text-red-800";
        case "pending":
          return "bg-yellow-100 text-yellow-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    }
    $$renderer2.push(`<div><div class="flex justify-between items-center mb-4"><h2 class="text-xl font-bold text-gray-900">Upcoming Bookings</h2> `);
    $$renderer2.select(
      {
        value: sortOrder,
        class: "text-sm border border-gray-300 rounded-md px-2 py-1 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      },
      ($$renderer3) => {
        $$renderer3.option({ value: "last_booked" }, ($$renderer4) => {
          $$renderer4.push(`Last booked`);
        });
        $$renderer3.option({ value: "upcoming" }, ($$renderer4) => {
          $$renderer4.push(`Upcoming first`);
        });
      }
    );
    $$renderer2.push(`</div> <div class="space-y-4">`);
    if (sortedBookings().length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(sortedBookings());
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let booking = each_array[$$index];
        $$renderer2.push(`<div class="bg-white rounded-lg shadow-sm p-4 border border-gray-200"><div class="flex justify-between items-start mb-2"><div><h3 class="font-semibold text-gray-900">${escape_html(booking.event_type_name)}</h3> <p class="text-sm text-gray-600">${escape_html(booking.attendee_name)}</p> <p class="text-xs text-gray-500">${escape_html(booking.attendee_email)}</p></div> <div class="flex items-center gap-2"><span${attr_class(`px-2 py-1 text-xs rounded-full ${stringify(getStatusColor(booking.status))}`)}>${escape_html(booking.status)}</span> `);
        if (booking.status === "confirmed") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<button class="text-xs text-blue-600 hover:text-blue-700 font-medium">Reschedule</button> <button class="text-xs text-red-600 hover:text-red-700 font-medium">Cancel</button>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div></div> <div class="text-sm text-gray-700 mt-2"><p>${escape_html(formatCompactDateTime(new Date(booking.start_time)))}</p></div> `);
        if (booking.attendee_notes) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="mt-2 text-sm text-gray-600 bg-gray-50 rounded p-2"><span class="font-medium">Message:</span> ${escape_html(booking.attendee_notes)}</div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (booking.status === "canceled") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="mt-2 text-sm text-red-600 bg-red-50 rounded p-2"><span class="font-medium">Cancelled by ${escape_html(booking.canceled_by === "host" ? "you" : "attendee")}</span> `);
          if (booking.cancellation_reason) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<span class="text-red-500">: ${escape_html(booking.cancellation_reason)}</span>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="bg-white rounded-lg shadow-sm p-8 text-center border border-gray-200"><p class="text-gray-600">No bookings yet</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
function EventTypesList($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { eventTypes } = $$props;
    $$renderer2.push(`<div><div class="flex justify-between items-center mb-4"><h2 class="text-xl font-bold text-gray-900">Event Types</h2> <a href="/dashboard/event-types/new" class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm">+ New Event Type</a></div> <div class="space-y-4">`);
    if (eventTypes && eventTypes.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(eventTypes);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let eventType = each_array[$$index];
        $$renderer2.push(`<div class="bg-white rounded-lg shadow-sm p-4 border border-gray-200"><div class="flex justify-between items-start mb-2"><div><h3 class="font-semibold text-gray-900">${escape_html(eventType.name)}</h3> <p class="text-sm text-gray-600">${escape_html(eventType.duration)} minutes</p></div> <span${attr_class(`px-2 py-1 text-xs rounded-full ${stringify(eventType.is_active ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800")}`)}>${escape_html(eventType.is_active ? "Active" : "Inactive")}</span></div> `);
        if (eventType.description) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="text-sm text-gray-600 mb-3">${escape_html(eventType.description)}</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> <div class="flex gap-2"><a${attr("href", `/${stringify(eventType.slug)}`)} target="_blank" class="text-sm text-blue-600 hover:text-blue-700">View Page</a> <span class="text-gray-300">|</span> <a${attr("href", `/dashboard/event-types/${stringify(eventType.id)}`)} class="text-sm text-blue-600 hover:text-blue-700">Edit</a></div></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="bg-white rounded-lg shadow-sm p-8 text-center border border-gray-200"><p class="text-gray-600 mb-4">No event types yet</p> <a href="/dashboard/event-types/new" class="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">Create Your First Event Type</a></div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let bookings = data.recentBookings || [];
    function getBookingById(bookingId) {
      return null;
    }
    $$renderer2.push(`<div class="min-h-screen bg-gray-50"><header class="bg-white shadow-sm"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"><div class="flex justify-between items-center"><div><h1 class="text-2xl font-bold text-gray-900">Dashboard</h1> <p class="text-sm text-gray-600">Welcome back, ${escape_html(data.user?.name || "User")}!</p></div> <div class="flex gap-4"><a href="/dashboard/calendars" class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">Calendars</a> <a href="/dashboard/emails" class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">Emails</a> <a href="/dashboard/availability" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Set Availability</a> <form method="POST" action="/auth/logout"><button type="submit" class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">Logout</button></form></div></div></div></header> <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">`);
    ProfileSection($$renderer2, { user: data.user });
    $$renderer2.push(`<!----> <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8"><h2 class="text-lg font-semibold text-blue-900 mb-2">Your Booking Page</h2> <div class="flex items-center gap-2"><input type="text" readonly${attr("value", `${stringify(data.appUrl)}/`)} class="flex-1 px-3 py-2 bg-white border border-blue-300 rounded-md text-sm"/> <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm">Copy Link</button></div></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">`);
    EventTypesList($$renderer2, { eventTypes: data.eventTypes || [] });
    $$renderer2.push(`<!----> `);
    BookingsList($$renderer2, {
      bookings
    });
    $$renderer2.push(`<!----></div></main></div> `);
    CancelBookingModal($$renderer2);
    $$renderer2.push(`<!----> `);
    HostRescheduleModal($$renderer2, {
      booking: getBookingById()
    });
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
