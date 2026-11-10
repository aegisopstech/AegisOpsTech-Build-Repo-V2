import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as SiteShell, t as Breadcrumbs } from "./chrome-Bpp8ns_d.mjs";
import { i as Route$4 } from "./router-61mhIF7S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/insights-C33hljyh.js
var import_jsx_runtime = require_jsx_runtime();
function InsightsPage() {
	const articles = Route$4.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto w-full max-w-6xl px-5 py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [{ label: "Insights" }] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-6 font-display text-4xl font-semibold md:text-5xl",
				children: "Notes from the engineering, not a blog."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-muted",
				children: "Three pieces at launch. Each one states a control we can implement. This replaces the old agentic-notes link."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-4",
				children: articles.map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleLink, {
					slug: article.slug,
					title: article.title,
					description: article.description,
					date: article.date
				}) }, article.slug))
			})
		]
	}) });
}
function ArticleLink({ slug, title, description, date }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/insights/$slug",
		params: { slug },
		className: "block rounded-card bg-card p-6 shadow-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "technical text-muted",
				children: date
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-2xl font-semibold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: description
			})
		]
	});
}
//#endregion
export { InsightsPage as component };
