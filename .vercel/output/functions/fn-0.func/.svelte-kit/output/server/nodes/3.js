import * as server from '../entries/pages/lol/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/lol/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/lol/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.88c12e57.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.54605d54.js"];
export const stylesheets = [];
export const fonts = [];
