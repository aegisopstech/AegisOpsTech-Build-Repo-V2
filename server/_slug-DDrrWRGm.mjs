import { c as getArticle } from "./_ssr/site-Bgu1USOS.mjs";
import { S as require_jsx_runtime, X as notFound, b as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { r as SiteShell, t as Breadcrumbs } from "./_ssr/chrome-D-s4dhRZ.mjs";
import { r as Route$2 } from "./_ssr/router-75sSIzOO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-DDrrWRGm.js
var import_jsx_runtime = require_jsx_runtime();
function ArticlePage() {
	const { slug } = Route$2.useParams();
	const article = getArticle(slug);
	if (!article) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto w-full max-w-3xl px-5 py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [{
				label: "Insights",
				to: "/insights"
			}, { label: article.title }] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "technical mt-6 text-muted",
				children: article.date
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl font-semibold",
				children: article.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg text-muted",
				children: article.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-8",
				children: article.sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold",
					children: section.heading
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3",
					children: section.body
				})] }, section.heading))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Related, {
					href: article.href,
					label: article.hrefLabel
				})
			})
		]
	}) });
}
function Related({ href, label }) {
	const className = "btn btn-line";
	if (href === "/demo") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/demo",
		className,
		children: label
	});
	if (href === "/approach") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/approach",
		hash: "trust",
		className,
		children: label
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/use-cases/$slug",
		params: { slug: "it-incident-investigation" },
		className,
		children: label
	});
}
//#endregion
export { ArticlePage as component };
