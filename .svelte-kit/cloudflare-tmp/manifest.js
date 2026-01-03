export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["availability/defaults.json","availability/timezones.json","cache-warming.json","favicon.png","favicon.svg","screenshot.png"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.RD3hqIEy.js",app:"_app/immutable/entry/app.DgkgMGf2.js",imports:["_app/immutable/entry/start.RD3hqIEy.js","_app/immutable/chunks/CWkUecql.js","_app/immutable/chunks/CdhubeB1.js","_app/immutable/chunks/DQ3BFWhX.js","_app/immutable/chunks/CySGt9vl.js","_app/immutable/chunks/B5_C4Q4i.js","_app/immutable/entry/app.DgkgMGf2.js","_app/immutable/chunks/PPVm8Dsz.js","_app/immutable/chunks/DQ3BFWhX.js","_app/immutable/chunks/CySGt9vl.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CdhubeB1.js","_app/immutable/chunks/u6AVuwMs.js","_app/immutable/chunks/vr9HFtWH.js","_app/immutable/chunks/3dsfsjWY.js","_app/immutable/chunks/B5_C4Q4i.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js')),
			__memo(() => import('../output/server/nodes/12.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/availability",
				pattern: /^\/api\/availability\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/availability/_server.ts.js'))
			},
			{
				id: "/api/availability/month",
				pattern: /^\/api\/availability\/month\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/availability/month/_server.ts.js'))
			},
			{
				id: "/api/bookings",
				pattern: /^\/api\/bookings\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/bookings/_server.ts.js'))
			},
			{
				id: "/api/bookings/cancel",
				pattern: /^\/api\/bookings\/cancel\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/bookings/cancel/_server.ts.js'))
			},
			{
				id: "/api/bookings/propose-reschedule",
				pattern: /^\/api\/bookings\/propose-reschedule\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/bookings/propose-reschedule/_server.ts.js'))
			},
			{
				id: "/api/bookings/reschedule",
				pattern: /^\/api\/bookings\/reschedule\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/bookings/reschedule/_server.ts.js'))
			},
			{
				id: "/api/calendars/google",
				pattern: /^\/api\/calendars\/google\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/calendars/google/_server.ts.js'))
			},
			{
				id: "/api/cron/send-reminders",
				pattern: /^\/api\/cron\/send-reminders\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/cron/send-reminders/_server.ts.js'))
			},
			{
				id: "/api/email-templates",
				pattern: /^\/api\/email-templates\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/email-templates/_server.ts.js'))
			},
			{
				id: "/api/event-type/[slug]",
				pattern: /^\/api\/event-type\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/event-type/_slug_/_server.ts.js'))
			},
			{
				id: "/api/profile",
				pattern: /^\/api\/profile\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/profile/_server.ts.js'))
			},
			{
				id: "/auth/callback",
				pattern: /^\/auth\/callback\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/auth/callback/_server.ts.js'))
			},
			{
				id: "/auth/login",
				pattern: /^\/auth\/login\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/auth/login/_server.ts.js'))
			},
			{
				id: "/auth/logout",
				pattern: /^\/auth\/logout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/auth/logout/_server.ts.js'))
			},
			{
				id: "/auth/outlook",
				pattern: /^\/auth\/outlook\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/auth/outlook/_server.ts.js'))
			},
			{
				id: "/auth/outlook/callback",
				pattern: /^\/auth\/outlook\/callback\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/auth/outlook/callback/_server.ts.js'))
			},
			{
				id: "/auth/outlook/disconnect",
				pattern: /^\/auth\/outlook\/disconnect\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/auth/outlook/disconnect/_server.ts.js'))
			},
			{
				id: "/cancel/[id]",
				pattern: /^\/cancel\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/dashboard/availability",
				pattern: /^\/dashboard\/availability\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/dashboard/calendars",
				pattern: /^\/dashboard\/calendars\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/dashboard/emails",
				pattern: /^\/dashboard\/emails\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/dashboard/event-types/new",
				pattern: /^\/dashboard\/event-types\/new\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/dashboard/event-types/[id]",
				pattern: /^\/dashboard\/event-types\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/reschedule-response/[token]",
				pattern: /^\/reschedule-response\/([^/]+?)\/?$/,
				params: [{"name":"token","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/reschedule/[id]",
				pattern: /^\/reschedule\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/[slug]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set([]);

export const base_path = "";
