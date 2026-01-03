
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/api" | "/api/availability" | "/api/availability/month" | "/api/bookings" | "/api/bookings/cancel" | "/api/bookings/propose-reschedule" | "/api/bookings/reschedule" | "/api/calendars" | "/api/calendars/google" | "/api/cron" | "/api/cron/send-reminders" | "/api/email-templates" | "/api/event-type" | "/api/event-type/[slug]" | "/api/profile" | "/auth" | "/auth/callback" | "/auth/login" | "/auth/logout" | "/auth/outlook" | "/auth/outlook/callback" | "/auth/outlook/disconnect" | "/cancel" | "/cancel/[id]" | "/dashboard" | "/dashboard/availability" | "/dashboard/calendars" | "/dashboard/emails" | "/dashboard/event-types" | "/dashboard/event-types/new" | "/dashboard/event-types/[id]" | "/reschedule-response" | "/reschedule-response/[token]" | "/reschedule" | "/reschedule/[id]" | "/[slug]";
		RouteParams(): {
			"/api/event-type/[slug]": { slug: string };
			"/cancel/[id]": { id: string };
			"/dashboard/event-types/[id]": { id: string };
			"/reschedule-response/[token]": { token: string };
			"/reschedule/[id]": { id: string };
			"/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { slug?: string; id?: string; token?: string };
			"/api": { slug?: string };
			"/api/availability": Record<string, never>;
			"/api/availability/month": Record<string, never>;
			"/api/bookings": Record<string, never>;
			"/api/bookings/cancel": Record<string, never>;
			"/api/bookings/propose-reschedule": Record<string, never>;
			"/api/bookings/reschedule": Record<string, never>;
			"/api/calendars": Record<string, never>;
			"/api/calendars/google": Record<string, never>;
			"/api/cron": Record<string, never>;
			"/api/cron/send-reminders": Record<string, never>;
			"/api/email-templates": Record<string, never>;
			"/api/event-type": { slug?: string };
			"/api/event-type/[slug]": { slug: string };
			"/api/profile": Record<string, never>;
			"/auth": Record<string, never>;
			"/auth/callback": Record<string, never>;
			"/auth/login": Record<string, never>;
			"/auth/logout": Record<string, never>;
			"/auth/outlook": Record<string, never>;
			"/auth/outlook/callback": Record<string, never>;
			"/auth/outlook/disconnect": Record<string, never>;
			"/cancel": { id?: string };
			"/cancel/[id]": { id: string };
			"/dashboard": { id?: string };
			"/dashboard/availability": Record<string, never>;
			"/dashboard/calendars": Record<string, never>;
			"/dashboard/emails": Record<string, never>;
			"/dashboard/event-types": { id?: string };
			"/dashboard/event-types/new": Record<string, never>;
			"/dashboard/event-types/[id]": { id: string };
			"/reschedule-response": { token?: string };
			"/reschedule-response/[token]": { token: string };
			"/reschedule": { token?: string; id?: string };
			"/reschedule/[id]": { id: string };
			"/[slug]": { slug: string }
		};
		Pathname(): "/" | "/api" | "/api/" | "/api/availability" | "/api/availability/" | "/api/availability/month" | "/api/availability/month/" | "/api/bookings" | "/api/bookings/" | "/api/bookings/cancel" | "/api/bookings/cancel/" | "/api/bookings/propose-reschedule" | "/api/bookings/propose-reschedule/" | "/api/bookings/reschedule" | "/api/bookings/reschedule/" | "/api/calendars" | "/api/calendars/" | "/api/calendars/google" | "/api/calendars/google/" | "/api/cron" | "/api/cron/" | "/api/cron/send-reminders" | "/api/cron/send-reminders/" | "/api/email-templates" | "/api/email-templates/" | "/api/event-type" | "/api/event-type/" | `/api/event-type/${string}` & {} | `/api/event-type/${string}/` & {} | "/api/profile" | "/api/profile/" | "/auth" | "/auth/" | "/auth/callback" | "/auth/callback/" | "/auth/login" | "/auth/login/" | "/auth/logout" | "/auth/logout/" | "/auth/outlook" | "/auth/outlook/" | "/auth/outlook/callback" | "/auth/outlook/callback/" | "/auth/outlook/disconnect" | "/auth/outlook/disconnect/" | "/cancel" | "/cancel/" | `/cancel/${string}` & {} | `/cancel/${string}/` & {} | "/dashboard" | "/dashboard/" | "/dashboard/availability" | "/dashboard/availability/" | "/dashboard/calendars" | "/dashboard/calendars/" | "/dashboard/emails" | "/dashboard/emails/" | "/dashboard/event-types" | "/dashboard/event-types/" | "/dashboard/event-types/new" | "/dashboard/event-types/new/" | `/dashboard/event-types/${string}` & {} | `/dashboard/event-types/${string}/` & {} | "/reschedule-response" | "/reschedule-response/" | `/reschedule-response/${string}` & {} | `/reschedule-response/${string}/` & {} | "/reschedule" | "/reschedule/" | `/reschedule/${string}` & {} | `/reschedule/${string}/` & {} | `/${string}` & {} | `/${string}/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/availability/defaults.json" | "/availability/timezones.json" | "/cache-warming.json" | "/favicon.png" | "/favicon.svg" | "/screenshot.png" | string & {};
	}
}