import { V as attr, $ as attr_class, X as stringify } from "../../../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../../../chunks/exports.js";
import "../../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../../chunks/state.svelte.js";
import { S as SimpleWysiwyg } from "../../../../../chunks/SimpleWysiwyg.js";
import { e as escape_html } from "../../../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data, form } = $$props;
    let name = data.eventType.name;
    let slug = data.eventType.slug;
    let duration = data.eventType.duration;
    let description = data.eventType.description || "";
    let isActive = data.eventType.is_active === 1;
    let coverImage = data.eventType.cover_image || "";
    let saving = false;
    let uploadingCover = false;
    const hasGoogle = data.googleConnected;
    const hasOutlook = data.outlookConnected && data.outlookConfigured;
    const hasCustomSettings = !!(data.eventType.availability_calendars || data.eventType.invite_calendar);
    let overrideCalendarSettings = hasCustomSettings;
    function getGlobalAvailability() {
      if (data.defaultAvailabilityCalendars) return data.defaultAvailabilityCalendars;
      if (hasGoogle && hasOutlook) return "both";
      if (hasOutlook) return "outlook";
      return "google";
    }
    function getGlobalInviteCalendar() {
      if (data.defaultInviteCalendar) return data.defaultInviteCalendar;
      if (hasGoogle) return "google";
      if (hasOutlook) return "outlook";
      return "google";
    }
    function getDefaultAvailability() {
      if (data.eventType.availability_calendars) return data.eventType.availability_calendars;
      return getGlobalAvailability();
    }
    function getDefaultInviteCalendar() {
      if (data.eventType.invite_calendar) return data.eventType.invite_calendar;
      return getGlobalInviteCalendar();
    }
    let availabilityCalendars = getDefaultAvailability();
    let inviteCalendar = getDefaultInviteCalendar();
    function getAvailabilityLabel(val) {
      if (val === "both") return "Both calendars";
      if (val === "outlook") return "Outlook Calendar";
      return "Google Calendar";
    }
    function getInviteLabel(val) {
      if (val === "outlook") return "Outlook (Microsoft Teams)";
      return "Google Calendar (Google Meet)";
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="min-h-screen bg-gray-50"><header class="bg-white shadow-sm"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"><div class="flex items-center gap-4"><a href="/dashboard" class="text-gray-600 hover:text-gray-900">← Back to Dashboard</a> <h1 class="text-2xl font-bold text-gray-900">Edit Event Type</h1></div></div></header> <main class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">`);
      if (form?.error) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6">Error: ${escape_html(form.error)}</div>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> <div class="bg-white rounded-lg shadow-sm p-6"><form method="POST"><div class="space-y-6"><div><label for="name" class="block text-sm font-medium text-gray-700 mb-2">Event Name *</label> <input type="text" id="name" name="name"${attr("value", name)} required placeholder="e.g., 30 Minute Meeting" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"/></div> <div><label for="slug" class="block text-sm font-medium text-gray-700 mb-2">URL Slug *</label> <input type="text" id="slug" name="slug"${attr("value", slug)} required pattern="[a-z0-9-]+" placeholder="e.g., 30min" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"/> <p class="text-xs text-gray-500 mt-1">Only lowercase letters, numbers, and hyphens. This will be part of your booking URL.</p></div> <div><label for="duration" class="block text-sm font-medium text-gray-700 mb-2">Duration (minutes) *</label> `);
      $$renderer3.select(
        {
          id: "duration",
          name: "duration",
          value: duration,
          required: true,
          class: "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        },
        ($$renderer4) => {
          $$renderer4.option({ value: 15 }, ($$renderer5) => {
            $$renderer5.push(`15 minutes`);
          });
          $$renderer4.option({ value: 30 }, ($$renderer5) => {
            $$renderer5.push(`30 minutes`);
          });
          $$renderer4.option({ value: 45 }, ($$renderer5) => {
            $$renderer5.push(`45 minutes`);
          });
          $$renderer4.option({ value: 60 }, ($$renderer5) => {
            $$renderer5.push(`60 minutes`);
          });
          $$renderer4.option({ value: 90 }, ($$renderer5) => {
            $$renderer5.push(`90 minutes`);
          });
          $$renderer4.option({ value: 120 }, ($$renderer5) => {
            $$renderer5.push(`2 hours`);
          });
        }
      );
      $$renderer3.push(`</div> <div><label for="description" class="block text-sm font-medium text-gray-700 mb-2">Description</label> `);
      SimpleWysiwyg($$renderer3, {
        placeholder: "Describe what this meeting is for...",
        get value() {
          return description;
        },
        set value($$value) {
          description = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <input type="hidden" name="description"${attr("value", description)}/></div> <div><label class="block text-sm font-medium text-gray-700 mb-2">Cover Image</label> <p class="text-xs text-gray-500 mb-3">This image will be displayed at the top of your booking page (like Calendly)</p> `);
      if (coverImage) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="relative mb-3 p-4 bg-gray-100 rounded-lg"><img${attr("src", coverImage)} alt="Cover preview" class="max-h-20 w-auto object-contain mx-auto"/> <button type="button" class="absolute top-2 right-2 bg-red-600 text-white p-1.5 rounded-full hover:bg-red-700 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> <label${attr_class(`flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition ${stringify(coverImage ? "hidden" : "")}`)}><input type="file" accept="image/*" class="hidden"${attr("disabled", uploadingCover, true)}/> `);
      {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push(`<div class="text-center"><svg class="w-8 h-8 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> <p class="text-sm text-gray-500">Click to upload cover image</p> <p class="text-xs text-gray-400">Max 2MB</p></div>`);
      }
      $$renderer3.push(`<!--]--></label> <input type="hidden" name="cover_image"${attr("value", coverImage)}/></div> `);
      if (hasGoogle || hasOutlook) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="border-t border-gray-200 pt-6"><h3 class="text-sm font-medium text-gray-900 mb-4">Calendar Settings</h3> <div class="mb-4 p-3 bg-gray-50 rounded-lg text-sm"><p class="text-gray-600 mb-1"><span class="font-medium">Check availability from:</span> ${escape_html(getAvailabilityLabel(getGlobalAvailability()))}</p> <p class="text-gray-600"><span class="font-medium">Send invite via:</span> ${escape_html(getInviteLabel(getGlobalInviteCalendar()))}</p> <p class="text-xs text-gray-500 mt-2">These are your global settings. <a href="/dashboard" class="text-blue-600 hover:underline">Change in Dashboard</a></p></div> <div class="flex items-center mb-4"><input type="checkbox" id="override_calendar_settings" name="override_calendar_settings"${attr("checked", overrideCalendarSettings, true)} class="h-4 w-4 text-blue-600 rounded border-gray-300"/> <label for="override_calendar_settings" class="ml-2 text-sm text-gray-700">Override global calendar settings for this event type</label></div> `);
        if (overrideCalendarSettings) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="mb-4"><label for="availability_calendars" class="block text-sm font-medium text-gray-700 mb-2">Check availability from</label> `);
          $$renderer3.select(
            {
              id: "availability_calendars",
              name: "availability_calendars",
              value: availabilityCalendars,
              class: "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            },
            ($$renderer4) => {
              if (hasGoogle && hasOutlook) {
                $$renderer4.push("<!--[-->");
                $$renderer4.option({ value: "both" }, ($$renderer5) => {
                  $$renderer5.push(`Both Google &amp; Outlook calendars`);
                });
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]-->`);
              if (hasGoogle) {
                $$renderer4.push("<!--[-->");
                $$renderer4.option({ value: "google" }, ($$renderer5) => {
                  $$renderer5.push(`Google Calendar only`);
                });
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]-->`);
              if (hasOutlook) {
                $$renderer4.push("<!--[-->");
                $$renderer4.option({ value: "outlook" }, ($$renderer5) => {
                  $$renderer5.push(`Outlook Calendar only`);
                });
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]-->`);
            }
          );
          $$renderer3.push(` <p class="text-xs text-gray-500 mt-1">Which calendars to check when showing available time slots</p></div> <div><label for="invite_calendar" class="block text-sm font-medium text-gray-700 mb-2">Send calendar invite via</label> `);
          $$renderer3.select(
            {
              id: "invite_calendar",
              name: "invite_calendar",
              value: inviteCalendar,
              class: "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            },
            ($$renderer4) => {
              if (hasGoogle) {
                $$renderer4.push("<!--[-->");
                $$renderer4.option({ value: "google" }, ($$renderer5) => {
                  $$renderer5.push(`Google Calendar (with Google Meet)`);
                });
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]-->`);
              if (hasOutlook) {
                $$renderer4.push("<!--[-->");
                $$renderer4.option({ value: "outlook" }, ($$renderer5) => {
                  $$renderer5.push(`Outlook Calendar (with Microsoft Teams)`);
                });
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]-->`);
            }
          );
          $$renderer3.push(` <p class="text-xs text-gray-500 mt-1">The attendee will receive an invite from this calendar with the meeting link</p></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push(`<div class="border-t border-gray-200 pt-6"><p class="text-sm text-gray-500">Connect a calendar in <a href="/dashboard" class="text-blue-600 hover:underline">Dashboard Settings</a> to configure calendar options.</p></div>`);
      }
      $$renderer3.push(`<!--]--> <div class="flex items-center"><input type="checkbox" id="is_active" name="is_active"${attr("checked", isActive, true)} class="h-4 w-4 text-blue-600 rounded border-gray-300"/> <label for="is_active" class="ml-2 text-sm text-gray-700">Active (allow people to book this event type)</label></div> <div class="flex gap-4 pt-4"><button type="submit"${attr("disabled", saving, true)} class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50">${escape_html("Save Changes")}</button> <a href="/dashboard" class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">Cancel</a></div></div></form></div></main></div>`);
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
