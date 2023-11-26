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
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
