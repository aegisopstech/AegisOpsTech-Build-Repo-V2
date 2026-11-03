import { S as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { r as SiteShell, t as Breadcrumbs } from "./_ssr/chrome-Bpp8ns_d.mjs";
import { r as Route$3 } from "./_ssr/router-DTokZTcj.mjs";
import { t as ArticleBody } from "./_ssr/content-blocks-Js5zZp8j.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-Cnl9IdMt.js
var import_jsx_runtime = require_jsx_runtime();
function ArticlePage() {
	const article = Route$3.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto w-full max-w-3xl px-5 py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [{
			label: "Insights",
			to: "/insights"
		}, { label: article.title }] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleBody, { article })]
	}) });
}
//#endregion
export { ArticlePage as component };
