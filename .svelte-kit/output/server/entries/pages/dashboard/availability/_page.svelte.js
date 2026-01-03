import { V as attr, Y as ensure_array_like, X as stringify } from "../../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/state.svelte.js";
import { e as escape_html } from "../../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data, form } = $$props;
    const daysOfWeek = [
      { id: 0, name: "Sunday" },
      { id: 1, name: "Monday" },
      { id: 2, name: "Tuesday" },
      { id: 3, name: "Wednesday" },
      { id: 4, name: "Thursday" },
      { id: 5, name: "Friday" },
      { id: 6, name: "Saturday" }
    ];
    let availability = daysOfWeek.map((day) => {
      const existingRules = data.rules?.filter((r) => r.day_of_week === day.id) || [];
      return {
        day: day.id,
        name: day.name,
        enabled: existingRules.length > 0,
        startTime: existingRules[0]?.start_time || "09:00",
        endTime: existingRules[0]?.end_time || "17:00"
      };
    });
    let saving = false;
    let selectedTimezone = data.timezone || "UTC";
    const timezoneLabels = {
      "America/Los_Angeles": "Pacific Time",
      "America/Denver": "Mountain Time",
      "America/Chicago": "Central Time",
      "America/New_York": "Eastern Time",
      "Europe/London": "UK, Ireland Time",
      "Europe/Paris": "Central European Time",
      "Europe/Amsterdam": "Amsterdam Time",
      "Europe/Berlin": "Berlin Time",
      "Asia/Tokyo": "Japan Time",
      "Asia/Shanghai": "China Time",
      "Australia/Sydney": "Sydney Time",
      "UTC": "UTC Time"
    };
    function getTimezoneLabel(tz) {
      return timezoneLabels[tz] || tz.replace(/_/g, " ").split("/").pop() || tz;
    }
    function getCurrentTime(tz) {
      try {
        return new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          timeZone: tz
        }).format(/* @__PURE__ */ new Date());
      } catch {
        return "--:--";
      }
    }
    $$renderer2.push(`<div class="min-h-screen bg-gray-50"><header class="bg-white shadow-sm"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"><div class="flex items-center gap-4"><a href="/dashboard" class="text-gray-600 hover:text-gray-900">← Back to Dashboard</a> <h1 class="text-2xl font-bold text-gray-900">Set Availability</h1></div></div></header> <main class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">`);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (form?.error) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6">Error: ${escape_html(form.error)}</div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="bg-white rounded-lg shadow-sm p-6 mb-6"><h2 class="text-lg font-semibold text-gray-900 mb-4">Your Timezone</h2> <p class="text-sm text-gray-600 mb-4">Set your timezone so that your availability is shown correctly to people booking meetings.</p> <div class="relative"><button type="button" class="flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition w-full sm:w-auto"><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div class="text-left"><div class="font-medium text-gray-900">${escape_html(getTimezoneLabel(selectedTimezone))}</div> <div class="text-sm text-gray-500">${escape_html(selectedTimezone)} (${escape_html(getCurrentTime(selectedTimezone))})</div></div> <svg class="w-5 h-5 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div> <div class="bg-white rounded-lg shadow-sm p-6 mb-6"><h2 class="text-lg font-semibold text-gray-900 mb-4">Weekly Schedule</h2> <p class="text-sm text-gray-600 mb-6">Set your available hours for each day of the week. People can only book meetings during these times.</p> <form method="POST" action="?/save"><input type="hidden" name="rules"${attr("value", JSON.stringify(availability))}/> <input type="hidden" name="timezone"${attr("value", selectedTimezone)}/> <div class="space-y-4"><!--[-->`);
    const each_array = ensure_array_like(availability);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let day = each_array[$$index];
      $$renderer2.push(`<div class="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"><div class="flex items-center min-w-[120px]"><input type="checkbox"${attr("checked", day.enabled, true)} class="h-4 w-4 text-blue-600 rounded border-gray-300"${attr("id", `day-${stringify(day.day)}`)}/> <label${attr("for", `day-${stringify(day.day)}`)} class="ml-2 font-medium text-gray-900">${escape_html(day.name)}</label></div> `);
      if (day.enabled) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="flex items-center gap-2 flex-1"><input type="time"${attr("value", day.startTime)} class="px-3 py-2 border border-gray-300 rounded-md text-sm"/> <span class="text-gray-600">to</span> <input type="time"${attr("value", day.endTime)} class="px-3 py-2 border border-gray-300 rounded-md text-sm"/></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<span class="text-gray-400 text-sm">Unavailable</span>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="mt-6 flex gap-4"><button type="submit"${attr("disabled", saving, true)} class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50">${escape_html("Save Availability")}</button> <button type="button" class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">Set Default Hours (Mon-Fri, 9-5)</button></div></form></div> <div class="bg-blue-50 border border-blue-200 rounded-lg p-4"><h3 class="font-semibold text-blue-900 mb-2">Note</h3> <p class="text-sm text-blue-800">Your connected calendars will also be checked for conflicts. Even if you're available according to these hours,
				if you have an event on your calendar during a time slot, it won't be shown as available to book.</p></div></main></div>`);
  });
}
export {
  _page as default
};
