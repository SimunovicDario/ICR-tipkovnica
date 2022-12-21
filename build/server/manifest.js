const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","zoom-in.svg","zoom-out.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-35ff957e.js","imports":["_app/immutable/start-35ff957e.js","_app/immutable/chunks/index-3efb032d.js","_app/immutable/chunks/singletons-d52cbd44.js","_app/immutable/chunks/index-b9777866.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-14dc4f1f.js'),
			() => import('./chunks/1-ffa2fab2.js'),
			() => import('./chunks/2-2d6ca1a3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
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
