import { r as __toESM } from "../_runtime.mjs";
import { t as advisoryDomains } from "./site-B37hbEET.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteShell } from "./chrome-CvJ8SivA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/advisory-E_gndm2t.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdvisoryPage() {
	const [active, setActive] = (0, import_react.useState)(advisoryDomains[0]?.id ?? "grc");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto w-full max-w-6xl px-5 md:px-8 xl:px-12 py-14 md:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "IT advisory"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 max-w-3xl font-display text-4xl font-semibold md:text-6xl",
					children: "Operational excellence, and the confidence to show it."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-lg text-muted",
					children: "Organizations have to hold innovation, compliance, performance, and resilience at the same time. AegisOps assesses and strengthens every layer — infrastructure, applications, cloud, security, data, operations, and continuity — then says plainly what is theater."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sticky top-16 z-30 border-y border-line bg-paper/95 backdrop-blur",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto px-5 md:px-8 xl:px-12 py-3",
				children: advisoryDomains.map((domain) => {
					const on = domain.id === active;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-current": on ? "true" : void 0,
						onClick: () => {
							setActive(domain.id);
							document.getElementById(domain.id)?.scrollIntoView({ block: "start" });
						},
						className: "min-h-11 shrink-0 rounded-full px-4 font-display text-sm font-semibold " + (on ? "bg-navy text-paper" : "text-ink hover:bg-paper-2"),
						children: domain.short
					}, domain.id);
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-6xl px-5 md:px-8 xl:px-12",
			children: advisoryDomains.map((domain) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: domain.id,
				className: "scroll-mt-36 border-b border-line py-12 md:py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 md:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-semibold text-primary",
							children: domain.code
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl font-semibold",
							children: domain.title
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg",
								children: domain.intent
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 border-l-4 border-teal pl-4 text-muted",
								children: domain.good
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 grid gap-3 sm:grid-cols-2",
								children: domain.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "rounded-xl bg-card px-4 py-3 text-ink shadow-border",
									children: point
								}, point))
							})
						]
					})]
				})
			}, domain.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto w-full max-w-6xl px-5 md:px-8 xl:px-12 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-card bg-navy px-6 py-10 text-paper md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold",
						children: "An assessment is not the end of the work."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-paper/80",
						children: "If the finding is a missing control, we design it. If the finding is a queue, the agentic practice takes one painful path. If the finding is the system, engineering builds."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "btn btn-paper",
							children: "Start a brief"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/agentic",
							className: "btn btn-line-light",
							children: "Agentic practice"
						})]
					})
				]
			})
		})
	] });
}
//#endregion
export { AdvisoryPage as component };
