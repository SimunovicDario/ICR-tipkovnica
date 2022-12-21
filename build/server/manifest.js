const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","zoom-in.svg","zoom-out.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-f4799305.js","imports":["_app/immutable/start-f4799305.js","_app/immutable/chunks/index-b14742d4.js","_app/immutable/chunks/singletons-c83b47a9.js","_app/immutable/chunks/index-3b55d3c1.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-a86a15ac.js'),
			() => import('./chunks/1-47ade35a.js'),
			() => import('./chunks/2-98ce349c.js')
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
