import { r as __toESM } from "../_runtime.mjs";
import { r as frameworks } from "./site-B37hbEET.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chrome-CvJ8SivA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		to: "/advisory",
		label: "Advisory"
	},
	{
		to: "/agentic",
		label: "Agentic"
	},
	{
		to: "/engineering",
		label: "Engineering"
	},
	{
		to: "/approach",
		label: "Approach"
	}
];
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-paper",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "content",
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function Wordmark({ light = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-display text-lg leading-none font-semibold tracking-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: light ? "text-paper" : "text-ink",
				children: "Aegis"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: light ? "text-signal" : "text-primary",
				children: "Ops"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-1 font-display text-xs leading-none tracking-widest uppercase " + (light ? "text-paper/70" : "text-muted"),
			children: "Technologies"
		})]
	});
}
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 md:px-8 xl:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3",
					"aria-label": "AegisOps Technologies, home",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/brand/mark.png",
						alt: "",
						width: 784,
						height: 1261,
						className: "logo-mark h-10 w-auto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-6 md:flex",
					"aria-label": "Primary",
					children: [NAV.map((item) => {
						const on = pathname === item.to;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							"aria-current": on ? "page" : void 0,
							className: "font-display text-sm font-semibold " + (on ? "text-primary" : "text-ink hover:text-primary"),
							children: item.label
						}, item.to);
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "btn btn-primary",
						children: "Start a brief"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "inline-flex size-11 items-center justify-center rounded-full text-ink md:hidden",
					"aria-expanded": open,
					"aria-controls": "mobile-nav",
					onClick: () => setOpen((v) => !v),
					children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: open ? "Close menu" : "Open menu"
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			id: "mobile-nav",
			className: "border-t border-line bg-paper px-5 py-3 md:hidden",
			"aria-label": "Mobile",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "flex flex-col",
				children: [NAV.map((item) => {
					const on = pathname === item.to;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						"aria-current": on ? "page" : void 0,
						className: "flex min-h-11 items-center font-display font-semibold " + (on ? "text-primary" : "text-ink"),
						children: item.label
					}) }, item.to);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "pt-2 pb-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "btn btn-primary w-full",
						children: "Start a brief"
					})
				})]
			})
		}) : null]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-navy text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-6xl gap-10 px-5 md:px-8 xl:px-12 py-14 md:grid-cols-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/brand/mark.png",
							alt: "",
							width: 784,
							height: 1261,
							className: "logo-mark h-12 w-auto"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { light: true })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-sm text-paper/80",
						children: "Building the autonomous. Advisory, engineering, and agents that stay inside a human decision."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow eyebrow-light",
						children: "Practices"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/advisory",
								className: "flex min-h-11 items-center hover:text-signal",
								children: "IT advisory"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/agentic",
								className: "flex min-h-11 items-center hover:text-signal",
								children: "Agentic engineering"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/engineering",
								className: "flex min-h-11 items-center hover:text-signal",
								children: "Software engineering"
							}) })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow eyebrow-light",
						children: "Firm"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/approach",
								className: "flex min-h-11 items-center hover:text-signal",
								children: "Approach"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "flex min-h-11 items-center hover:text-signal",
								children: "Start a brief"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://aegisopstech.me",
								className: "flex min-h-11 items-center hover:text-signal",
								target: "_blank",
								rel: "noreferrer",
								children: "Agentic notes"
							}) })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow eyebrow-light",
						children: "Frames"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3 text-paper/80",
						children: frameworks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-paper/15",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mx-auto w-full max-w-6xl px-5 md:px-8 xl:px-12 py-5 text-sm text-paper/70",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" AegisOps Technologies. Building the autonomous."
				]
			})
		})]
	});
}
//#endregion
export { SiteShell as t };
