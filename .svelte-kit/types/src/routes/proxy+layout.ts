// @ts-nocheck
import type { LayoutLoad } from './$types';

export const prerender = false;
export const ssr = true;

export const load = async ({ fetch }: Parameters<LayoutLoad>[0]) => {
	// Load any global data needed across the app
	// This can be cached in stores
	return {
		timestamp: Date.now()
	};
};