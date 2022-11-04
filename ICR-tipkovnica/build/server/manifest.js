const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-87912260.js","imports":["_app/immutable/start-87912260.js","_app/immutable/chunks/index-2cb43462.js","_app/immutable/chunks/singletons-f851cb9a.js","_app/immutable/chunks/index-aa8b8d21.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-b6c693c1.js'),
			() => import('./chunks/1-407b2c26.js'),
			() => import('./chunks/2-cc93b886.js')
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
