import { V as attr, W as attr_style, X as stringify, Y as ensure_array_like } from "../../chunks/index2.js";
import { e as escape_html } from "../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    function stripHtml(html) {
      return html.replace(/<\/(p|div|li|br|h[1-6])>/gi, " ").replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
    }
    if (data.user && data.eventTypes) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="min-h-screen bg-gray-50 py-12"><div class="max-w-2xl mx-auto px-4"><div class="text-center mb-10">`);
      if (data.user.profileImage) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<img${attr("src", data.user.profileImage)}${attr("alt", data.user.name)} class="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-md"/>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div class="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-3xl shadow-md"${attr_style(`background-color: ${stringify(data.user.brandColor || "#3b82f6")}`)}>${escape_html(data.user.name?.charAt(0) || "U")}</div>`);
      }
      $$renderer2.push(`<!--]--> <h1 class="text-3xl font-bold text-gray-900 mb-2">${escape_html(data.user.name)}</h1> <p class="text-gray-600">Select a meeting type to book a time</p></div> `);
      if (data.eventTypes.length > 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="space-y-4"><!--[-->`);
        const each_array = ensure_array_like(data.eventTypes);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let eventType = each_array[$$index];
          $$renderer2.push(`<a${attr("href", `/${stringify(eventType.slug)}`)} class="block bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-5 border-l-4 hover:translate-x-1"${attr_style(`border-left-color: ${stringify(data.user.brandColor || "#3b82f6")}`)}><div class="flex justify-between items-start"><div class="flex-1 min-w-0"><h2 class="text-lg font-semibold text-gray-900 mb-1">${escape_html(eventType.name)}</h2> `);
          if (eventType.description) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<p class="text-gray-600 text-sm line-clamp-2">${escape_html(stripHtml(eventType.description))}</p>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--></div> <div class="flex items-center text-sm font-medium ml-4 px-3 py-1 rounded-full"${attr_style(`background-color: ${stringify(data.user.brandColor || "#3b82f6")}20; color: ${stringify(data.user.brandColor || "#3b82f6")}`)}><svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>${escape_html(eventType.duration)} min</span></div></div></a>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div class="bg-white rounded-lg shadow-md p-12 text-center"><svg class="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> <h2 class="text-xl font-semibold text-gray-900 mb-2">No Available Meeting Types</h2> <p class="text-gray-600">Check back later.</p></div>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><div class="text-center mb-16"><h1 class="text-5xl font-bold text-gray-900 mb-4">Meeting Scheduler</h1> <p class="text-xl text-gray-600 mb-8">Free, open-source meeting scheduling on Cloudflare</p> <div class="flex justify-center gap-4"><a href="/auth/login" class="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition">Login with Google</a> <a href="/dashboard" class="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition">Go to Dashboard</a></div></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"><div class="bg-white p-8 rounded-xl shadow-sm"><div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"><svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div> <h3 class="text-lg font-semibold mb-2 text-gray-900">Google Calendar Sync</h3> <p class="text-gray-600 text-sm">Automatically sync with your Google Calendar to prevent double bookings</p></div> <div class="bg-white p-8 rounded-xl shadow-sm"><div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4"><svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <h3 class="text-lg font-semibold mb-2 text-gray-900">Set Your Hours</h3> <p class="text-gray-600 text-sm">Define your availability and let people book meetings during those times</p></div> <div class="bg-white p-8 rounded-xl shadow-sm"><div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4"><svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div> <h3 class="text-lg font-semibold mb-2 text-gray-900">Lightning Fast</h3> <p class="text-gray-600 text-sm">Built on Cloudflare's edge network for instant page loads worldwide</p></div></div> <div class="mt-20 max-w-3xl mx-auto"><h2 class="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2> <div class="space-y-6"><div class="flex gap-4"><div class="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div> <div><h4 class="font-semibold text-gray-900 mb-1">Connect Your Google Calendar</h4> <p class="text-gray-600 text-sm">Log in with Google and grant access to your calendar</p></div></div> <div class="flex gap-4"><div class="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div> <div><h4 class="font-semibold text-gray-900 mb-1">Set Your Availability</h4> <p class="text-gray-600 text-sm">Define your working hours and create event types (30 min meetings, consultations, etc.)</p></div></div> <div class="flex gap-4"><div class="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div> <div><h4 class="font-semibold text-gray-900 mb-1">Share Your Link</h4> <p class="text-gray-600 text-sm">Get a personalized booking link to share with others</p></div></div> <div class="flex gap-4"><div class="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div> <div><h4 class="font-semibold text-gray-900 mb-1">Get Booked</h4> <p class="text-gray-600 text-sm">When someone books a meeting, it's automatically added to your Google Calendar</p></div></div></div></div> <div class="mt-20 text-center"><a href="/auth/login" class="inline-flex items-center px-12 py-4 border border-transparent text-lg font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition">Get Started - It's Free</a></div></div></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  _page as default
};
