import { b as useCases } from "./site-CFNH31A9.mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as LabelBanner, r as SiteShell, t as Breadcrumbs } from "./chrome-Bpp8ns_d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-cases-mp0Mb7ox.js
var import_jsx_runtime = require_jsx_runtime();
function UseCasesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto w-full max-w-6xl px-5 py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [{ label: "Use Cases" }] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-6 max-w-3xl font-display text-4xl font-semibold md:text-5xl",
				children: "Reference workflows we engineer from."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 max-w-3xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelBanner, { children: "Reference workflow — a design pattern, not a description of a past client deployment. The same pattern fits any desk where the work is evidence, a decision, and a logged action." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-4",
				children: useCases.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseCard, {
					slug: item.slug,
					title: item.title,
					problem: item.cardProblem,
					outcome: item.cardOutcome
				}) }, item.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 max-w-2xl text-muted",
				children: "Commerce operations and industrial maintenance are not published yet. They wait on a demo or a named domain lead."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/demo",
				className: "btn btn-primary mt-6",
				children: "See the live demo"
			})
		]
	}) });
}
function CaseCard({ slug, title, problem, outcome }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/use-cases/$slug",
		params: { slug },
		className: "block rounded-card bg-card p-6 shadow-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-semibold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: problem
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2",
				children: outcome
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-display text-sm font-semibold text-primary",
				children: "View workflow"
			})
		]
	});
}
//#endregion
export { UseCasesPage as component };
