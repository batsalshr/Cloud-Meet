import * as server from '../entries/pages/_slug_/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.CshrciRh.js","_app/immutable/chunks/PPVm8Dsz.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DQ3BFWhX.js","_app/immutable/chunks/CySGt9vl.js","_app/immutable/chunks/u6AVuwMs.js","_app/immutable/chunks/DKg4GSHA.js","_app/immutable/chunks/iqOSawfn.js","_app/immutable/chunks/R6z4UYL7.js","_app/immutable/chunks/pK6643e_.js","_app/immutable/chunks/3dsfsjWY.js","_app/immutable/chunks/B5_C4Q4i.js","_app/immutable/chunks/BI5nyQHI.js","_app/immutable/chunks/BXbUNSRB.js","_app/immutable/chunks/C1Rppsd0.js","_app/immutable/chunks/-WyYYBJa.js","_app/immutable/chunks/vr9HFtWH.js","_app/immutable/chunks/BFozC6y8.js","_app/immutable/chunks/BjWePiXU.js"];
export const stylesheets = [];
export const fonts = [];
