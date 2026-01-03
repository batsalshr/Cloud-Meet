import * as server from '../entries/pages/cancel/_id_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cancel/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/cancel/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.Bhm2kjv4.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DQ3BFWhX.js","_app/immutable/chunks/CySGt9vl.js","_app/immutable/chunks/u6AVuwMs.js","_app/immutable/chunks/iqOSawfn.js","_app/immutable/chunks/R6z4UYL7.js","_app/immutable/chunks/pK6643e_.js","_app/immutable/chunks/3dsfsjWY.js","_app/immutable/chunks/B5_C4Q4i.js","_app/immutable/chunks/B4Bv1KaN.js","_app/immutable/chunks/CWkUecql.js","_app/immutable/chunks/CdhubeB1.js","_app/immutable/chunks/BI5nyQHI.js","_app/immutable/chunks/C1Rppsd0.js","_app/immutable/chunks/CSjB5q8c.js"];
export const stylesheets = [];
export const fonts = [];
