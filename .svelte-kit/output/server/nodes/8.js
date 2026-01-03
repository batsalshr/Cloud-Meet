import * as server from '../entries/pages/dashboard/emails/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/emails/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/emails/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.D7jKS0Gr.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CdhubeB1.js","_app/immutable/chunks/DQ3BFWhX.js","_app/immutable/chunks/CySGt9vl.js","_app/immutable/chunks/u6AVuwMs.js","_app/immutable/chunks/DKg4GSHA.js","_app/immutable/chunks/BI5nyQHI.js","_app/immutable/chunks/C1Rppsd0.js"];
export const stylesheets = [];
export const fonts = [];
