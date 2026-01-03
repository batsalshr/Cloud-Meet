import * as server from '../entries/pages/dashboard/event-types/new/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/event-types/new/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/event-types/new/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.DhudEfs1.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DQ3BFWhX.js","_app/immutable/chunks/CySGt9vl.js","_app/immutable/chunks/u6AVuwMs.js","_app/immutable/chunks/B4Bv1KaN.js","_app/immutable/chunks/CWkUecql.js","_app/immutable/chunks/CdhubeB1.js","_app/immutable/chunks/B5_C4Q4i.js","_app/immutable/chunks/BI5nyQHI.js","_app/immutable/chunks/R6z4UYL7.js","_app/immutable/chunks/pK6643e_.js","_app/immutable/chunks/C1Rppsd0.js","_app/immutable/chunks/dm5yZCSw.js","_app/immutable/chunks/DZq_RO9z.js","_app/immutable/chunks/vr9HFtWH.js","_app/immutable/chunks/3dsfsjWY.js"];
export const stylesheets = ["_app/immutable/assets/SimpleWysiwyg.CkPInVwj.css"];
export const fonts = [];
