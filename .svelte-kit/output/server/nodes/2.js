import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.Gr1M5ZmL.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DQ3BFWhX.js","_app/immutable/chunks/CySGt9vl.js","_app/immutable/chunks/u6AVuwMs.js","_app/immutable/chunks/DKg4GSHA.js","_app/immutable/chunks/BI5nyQHI.js","_app/immutable/chunks/BXbUNSRB.js","_app/immutable/chunks/pK6643e_.js"];
export const stylesheets = [];
export const fonts = [];
