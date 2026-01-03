import * as server from '../entries/pages/dashboard/calendars/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/calendars/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/calendars/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.0pz4pDDh.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DQ3BFWhX.js","_app/immutable/chunks/BH885Lyd.js","_app/immutable/chunks/CySGt9vl.js","_app/immutable/chunks/u6AVuwMs.js","_app/immutable/chunks/DKg4GSHA.js","_app/immutable/chunks/BI5nyQHI.js","_app/immutable/chunks/R6z4UYL7.js","_app/immutable/chunks/pK6643e_.js","_app/immutable/chunks/BXbUNSRB.js","_app/immutable/chunks/C1Rppsd0.js","_app/immutable/chunks/CdhubeB1.js","_app/immutable/chunks/dm5yZCSw.js","_app/immutable/chunks/BjWePiXU.js"];
export const stylesheets = [];
export const fonts = [];
