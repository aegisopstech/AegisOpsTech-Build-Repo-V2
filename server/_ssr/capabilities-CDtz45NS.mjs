import { n as capabilities } from "./site-DRS0GyJG.mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as SiteShell, t as Breadcrumbs } from "./chrome-WP0uVX5Y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/capabilities-CDtz45NS.js
var import_jsx_runtime = require_jsx_runtime();
function CapabilitiesPage() {
	const [lead, ...rest] = capabilities;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto w-full max-w-6xl px-5 py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [{ label: "Capabilities" }] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-6 max-w-3xl font-display text-4xl font-semibold md:text-5xl",
				children: "The engineering behind production-ready AI agents."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-lg text-muted",
				children: "Agentic work is the spearhead. The other four exist so an agent can be integrated, secured, fed reliable data, and governed."
			}),
			lead ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: lead.id,
				className: "scroll-mt-24 mt-12 rounded-card bg-navy p-6 text-paper md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow eyebrow-light",
						children: "01"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-semibold",
						children: lead.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-3xl text-paper/85",
						children: lead.build
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-3xl text-sm text-signal",
						children: lead.lead
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid gap-3 md:grid-cols-2",
						children: lead.deliverables.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-xl bg-navy-2 px-4 py-3",
							children: item
						}, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-3xl text-sm text-paper/75",
						children: lead.note
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-6",
				children: rest.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: item.id,
					className: "scroll-mt-24 rounded-card bg-card p-6 shadow-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-sm font-semibold text-primary",
							children: ["0", index + 2]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl font-semibold",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-3xl",
							children: item.build
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: item.lead
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 grid gap-2 md:grid-cols-3",
							children: item.deliverables.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-xl bg-paper px-4 py-3 text-sm",
								children: point
							}, point))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted",
							children: item.note
						})
					]
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "btn btn-primary",
					children: "Discuss a Project"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/use-cases",
					className: "btn btn-line",
					children: "Reference workflows"
				})]
			})
		]
	}) });
}
//#endregion
export { CapabilitiesPage as component };
