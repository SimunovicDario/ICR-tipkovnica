const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-d3fc2bd0.js","imports":["_app/immutable/start-d3fc2bd0.js","_app/immutable/chunks/index-2cb43462.js","_app/immutable/chunks/singletons-925b4e9c.js","_app/immutable/chunks/index-aa8b8d21.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-b6c693c1.js'),
			() => import('./chunks/1-f715847c.js'),
			() => import('./chunks/2-640c4452.js')
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

export { manifest };
//# sourceMappingURL=manifest.js.map
