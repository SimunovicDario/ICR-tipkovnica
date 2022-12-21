const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","zoom-in.svg","zoom-out.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-e0295fdb.js","imports":["_app/immutable/start-e0295fdb.js","_app/immutable/chunks/index-00d53a59.js","_app/immutable/chunks/singletons-39ffe9b9.js","_app/immutable/chunks/index-a06722b3.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-9b3db23d.js'),
			() => import('./chunks/1-fd844aee.js'),
			() => import('./chunks/2-fd0cdf9e.js')
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
