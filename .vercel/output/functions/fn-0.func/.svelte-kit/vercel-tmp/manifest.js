export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.8d9e4d47.js","app":"_app/immutable/entry/app.890597d1.js","imports":["_app/immutable/entry/start.8d9e4d47.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.f4323b53.js","_app/immutable/entry/app.890597d1.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.54605d54.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/add",
				pattern: /^\/api\/add\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/add/_server.ts.js'))
			},
			{
				id: "/api/dummy",
				pattern: /^\/api\/dummy\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/dummy/_server.ts.js'))
			},
			{
				id: "/api/random",
				pattern: /^\/api\/random\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/random/_server.ts.js'))
			},
			{
				id: "/lol",
				pattern: /^\/lol\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
