import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as capabilities } from "./router-CRnRCdkH.mjs";
import { t as SiteShell } from "./chrome-CwvkjpFy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/engineering-BY0Y0MHr.js
var import_jsx_runtime = require_jsx_runtime();
function EngineeringPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto w-full max-w-6xl px-5 py-14 md:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Software engineering"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 max-w-3xl font-display text-4xl font-semibold md:text-6xl",
					children: "The stack underneath the advice."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-lg text-muted",
					children: "AegisOps keeps depth across the domains we assess. That is how a recommendation survives contact with a repository, a cluster, and a release window. We evaluate, improve, and — when it is the right engagement — implement."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-6xl px-5 pb-8",
			children: capabilities.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-6 border-t border-line py-10 md:grid-cols-12 md:py-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-semibold text-primary",
							children: item.code
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl font-semibold md:text-3xl",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted",
							children: item.stance
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-2 sm:grid-cols-2 md:col-span-8",
					children: item.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-xl bg-card px-4 py-3 shadow-border",
						children: point
					}, point))
				})]
			}, item.code))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-navy text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex w-full max-w-6xl flex-wrap items-end justify-between gap-6 px-5 py-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow eyebrow-light",
							children: "With the other practices"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-semibold",
							children: "Build only what governance can carry."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-paper/80",
							children: "A pipeline, an integration, or a model in production is also a control problem. Engineering does not ship around advisory. Advisory does not specify what engineering cannot run."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "btn btn-paper",
						children: "Start a brief"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/advisory",
						className: "btn btn-line-light",
						children: "Advisory"
					})]
				})]
			})
		})
	] });
}
//#endregion
export { EngineeringPage as component };
