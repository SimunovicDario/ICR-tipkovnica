export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","zoom-in.svg","zoom-out.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-46bb845c.js","imports":["_app/immutable/start-46bb845c.js","_app/immutable/chunks/index-00d53a59.js","_app/immutable/chunks/singletons-c3d0fc5a.js","_app/immutable/chunks/index-a06722b3.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
