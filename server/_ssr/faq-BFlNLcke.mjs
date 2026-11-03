import { o as faqs } from "./site-Bgu1USOS.mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as SiteShell, t as Breadcrumbs } from "./chrome-D-s4dhRZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-BFlNLcke.js
var import_jsx_runtime = require_jsx_runtime();
function FaqPage() {
	const schema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((item) => ({
			"@type": "Question",
			name: item.q,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.a
			}
		}))
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto w-full max-w-3xl px-5 py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [{ label: "FAQ" }] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-6 font-display text-4xl font-semibold",
				children: "Questions we can answer now."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted",
				children: "Where a fact is not settled — registration, regions, a public rate — the answer says so."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 divide-y divide-line rounded-card bg-card px-5 shadow-border",
				children: faqs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "group py-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
						className: "flex min-h-11 cursor-pointer items-center py-3 font-display font-semibold",
						children: item.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pb-4 text-muted",
						children: item.a
					})]
				}, item.q))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				children: JSON.stringify(schema)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				className: "btn btn-primary mt-8",
				children: "Discuss a Project"
			})
		]
	}) });
}
//#endregion
export { FaqPage as component };
