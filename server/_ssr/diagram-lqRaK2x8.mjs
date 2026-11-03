import { r as __toESM } from "../_runtime.mjs";
import { h as pattern } from "./site-CFNH31A9.mjs";
import { S as require_jsx_runtime, Z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Shield } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/diagram-lqRaK2x8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function WorkflowDiagram({ autoplay = false, title = "Trigger, gather context, reason and recommend, human approves, act and record." }) {
	const [step, setStep] = (0, import_react.useState)(0);
	const timer = (0, import_react.useRef)(null);
	const current = pattern[step] ?? pattern[0];
	(0, import_react.useEffect)(() => {
		if (!autoplay) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let index = 0;
		timer.current = window.setInterval(() => {
			index += 1;
			if (index >= pattern.length) {
				if (timer.current) window.clearInterval(timer.current);
				return;
			}
			setStep(index);
		}, 1400);
		return () => {
			if (timer.current) window.clearInterval(timer.current);
		};
	}, [autoplay]);
	function choose(index) {
		if (timer.current) window.clearInterval(timer.current);
		setStep(index);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "rounded-card bg-card p-4 text-ink shadow-border md:p-5",
		"aria-label": title,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "technical text-muted",
				children: "Signature pattern"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid gap-2 sm:grid-cols-5",
				role: "tablist",
				"aria-label": "Workflow steps",
				children: pattern.map((item, index) => {
					const on = index === step;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "tab",
						"aria-selected": on,
						onClick: () => choose(index),
						className: "min-h-11 rounded-xl px-2 py-3 text-left " + (on ? "bg-navy text-paper" : "bg-paper text-ink"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1 font-display text-xs font-semibold tracking-wide uppercase",
							children: ["shield" in item && item.shield ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
								"aria-hidden": "true",
								className: "size-3.5"
							}) : null, index + 1]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block font-display text-sm leading-snug font-semibold",
							children: item.name
						})]
					}, item.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 min-h-16 text-base",
				role: "tabpanel",
				children: [current.text, "logged" in current && current.logged ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "technical ml-2 inline-flex items-center rounded-full bg-foam px-2 py-1 text-navy",
					children: "Logged"
				}) : null]
			})
		]
	});
}
function Architecture({ systems, approval }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "rounded-card bg-paper p-4 md:p-6",
		"aria-label": "Reference architecture. Not a client deployment.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "technical text-muted",
			children: "Reference architecture — not a deployment"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-3 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-card p-4 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm font-semibold",
						children: "Your systems"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: systems.map((system) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-lg bg-paper px-3 py-2 text-sm",
							children: system
						}, system))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border-2 border-dashed border-primary bg-card p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-semibold text-primary",
							children: "Permission boundary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-lg font-semibold",
							children: "Agent"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "Reads the allow-list. Proposes. Does not approve itself."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-navy p-4 text-paper",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 font-display text-sm font-semibold text-signal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
							"aria-hidden": "true",
							className: "size-4"
						}), "Human approval"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3",
						children: approval
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-card p-4 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "technical text-navy",
						children: "Logged"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm",
						children: "The read, the recommendation, the approval or refusal, and the action."
					})]
				})
			]
		})]
	});
}
//#endregion
export { WorkflowDiagram as n, Architecture as t };
