import { r as __toESM } from "../_runtime.mjs";
import { a as company } from "./site-CFNH31A9.mjs";
import { S as require_jsx_runtime, Z as require_react, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Menu, g as ChevronDown, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chrome-Bpp8ns_d.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CAPABILITIES = [
	{
		hash: "agentic",
		label: "Agentic AI & Automation"
	},
	{
		hash: "software",
		label: "Software Engineering & Integration"
	},
	{
		hash: "cyber",
		label: "Cybersecurity Engineering"
	},
	{
		hash: "data",
		label: "Data Engineering"
	},
	{
		hash: "advisory",
		label: "IT Advisory & Governance"
	}
];
var CASES = [
	{
		slug: "it-incident-investigation",
		label: "IT Incident Investigation"
	},
	{
		slug: "security-alert-investigation",
		label: "Security Alert Investigation"
	},
	{
		slug: "customer-support-resolution",
		label: "Customer Support Resolution"
	}
];
var APPROACH = [
	{
		hash: "how-we-work",
		label: "How We Work"
	},
	{
		hash: "engage",
		label: "Ways to Engage"
	},
	{
		hash: "trust",
		label: "Trust & Security"
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
			className: "mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-5",
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
					className: "hidden items-center gap-1 lg:flex",
					"aria-label": "Primary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HashMenu, {
							label: "Capabilities",
							base: "/capabilities",
							items: CAPABILITIES
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CasesMenu, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HashMenu, {
							label: "Approach",
							base: "/approach",
							items: APPROACH
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopLink, {
							to: "/about",
							label: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopLink, {
							to: "/insights",
							label: "Insights"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "btn btn-primary ml-2",
							children: "Discuss a Project"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "inline-flex size-11 items-center justify-center rounded-full text-ink lg:hidden",
					"aria-expanded": open,
					"aria-controls": "mobile-nav",
					onClick: () => setOpen((value) => !value),
					children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: open ? "Close menu" : "Open menu"
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			id: "mobile-nav",
			className: "max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-line bg-paper px-5 py-3 lg:hidden",
			"aria-label": "Mobile",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileGroup, {
					title: "Capabilities",
					children: CAPABILITIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/capabilities",
						hash: item.hash,
						className: "flex min-h-11 items-center",
						children: item.label
					}, item.hash))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MobileGroup, {
					title: "Use Cases",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/use-cases",
							className: "flex min-h-11 items-center",
							children: "All reference workflows"
						}),
						CASES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/use-cases/$slug",
							params: { slug: item.slug },
							className: "flex min-h-11 items-center",
							children: item.label
						}, item.slug)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/demo",
							className: "flex min-h-11 items-center",
							children: "Live Demo"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileGroup, {
					title: "Approach",
					children: APPROACH.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/approach",
						hash: item.hash,
						className: "flex min-h-11 items-center",
						children: item.label
					}, item.hash))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/about",
					className: "flex min-h-11 items-center font-display font-semibold",
					children: "About"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/insights",
					className: "flex min-h-11 items-center font-display font-semibold",
					children: "Insights"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/faq",
					className: "flex min-h-11 items-center font-display font-semibold",
					children: "FAQ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "py-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "btn btn-primary w-full",
						children: "Discuss a Project"
					})
				})
			]
		}) : null]
	});
}
function TopLink({ to, label }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const on = pathname === to || pathname.startsWith(`${to}/`);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		"aria-current": on ? "page" : void 0,
		className: "rounded-full px-3 py-2 font-display text-sm font-semibold " + (on ? "text-primary" : "text-ink"),
		children: label
	});
}
function HashMenu({ label, base, items }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const on = pathname === base;
	const [open, setOpen] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		function close(event) {
			if (!ref.current?.contains(event.target)) setOpen(false);
		}
		document.addEventListener("mousedown", close);
		return () => document.removeEventListener("mousedown", close);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "inline-flex min-h-11 items-center gap-1 rounded-full px-3 font-display text-sm font-semibold " + (on ? "text-primary" : "text-ink"),
			"aria-expanded": open,
			onClick: () => setOpen((value) => !value),
			children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
				"aria-hidden": "true",
				className: "size-4"
			})]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute top-full left-0 z-20 mt-1 w-72 rounded-card bg-card p-2 shadow-lift",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: base,
				className: "flex min-h-11 items-center rounded-xl px-3 font-display text-sm font-semibold",
				onClick: () => setOpen(false),
				children: [label, " overview"]
			}), items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: base,
				hash: item.hash,
				className: "flex min-h-11 items-center rounded-xl px-3 text-sm",
				onClick: () => setOpen(false),
				children: item.label
			}, item.hash))]
		}) : null]
	});
}
function CasesMenu() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const on = pathname.startsWith("/use-cases") || pathname === "/demo";
	const [open, setOpen] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		function close(event) {
			if (!ref.current?.contains(event.target)) setOpen(false);
		}
		document.addEventListener("mousedown", close);
		return () => document.removeEventListener("mousedown", close);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "inline-flex min-h-11 items-center gap-1 rounded-full px-3 font-display text-sm font-semibold " + (on ? "text-primary" : "text-ink"),
			"aria-expanded": open,
			onClick: () => setOpen((value) => !value),
			children: ["Use Cases", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
				"aria-hidden": "true",
				className: "size-4"
			})]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute top-full left-0 z-20 mt-1 w-72 rounded-card bg-card p-2 shadow-lift",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/use-cases",
					className: "flex min-h-11 items-center rounded-xl px-3 font-display text-sm font-semibold",
					onClick: () => setOpen(false),
					children: "All reference workflows"
				}),
				CASES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/use-cases/$slug",
					params: { slug: item.slug },
					className: "flex min-h-11 items-center rounded-xl px-3 text-sm",
					onClick: () => setOpen(false),
					children: item.label
				}, item.slug)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/demo",
					className: "flex min-h-11 items-center rounded-xl px-3 text-sm",
					onClick: () => setOpen(false),
					children: "Live Demo"
				})
			]
		}) : null]
	});
}
function MobileGroup({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-b border-line py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow py-2",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col",
			children
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-navy text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/brand/mark.png",
							alt: "",
							width: 784,
							height: 1261,
							className: "logo-mark h-12 w-auto"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { light: true })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-paper/80",
						children: company.short
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "mt-4 inline-flex min-h-11 items-center font-display font-semibold text-signal",
						children: "Discuss a Project"
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow eyebrow-light",
					children: "Capabilities"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3",
					children: CAPABILITIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/capabilities",
						hash: item.hash,
						className: "flex min-h-11 items-center hover:text-signal",
						children: item.label
					}) }, item.hash))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow eyebrow-light",
					children: "Use Cases"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3",
					children: [CASES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/use-cases/$slug",
						params: { slug: item.slug },
						className: "flex min-h-11 items-center hover:text-signal",
						children: item.label
					}) }, item.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/demo",
						className: "flex min-h-11 items-center hover:text-signal",
						children: "Live Demo"
					}) })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow eyebrow-light",
					children: "Firm"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "flex min-h-11 items-center hover:text-signal",
							children: "About"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/insights",
							className: "flex min-h-11 items-center hover:text-signal",
							children: "Insights"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/faq",
							className: "flex min-h-11 items-center hover:text-signal",
							children: "FAQ"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "flex min-h-11 items-center hover:text-signal",
							children: "Discuss a Project"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-paper/15",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-5 gap-y-2 px-5 py-5 text-sm text-paper/75",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" AegisOps Technologies."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Registered name and jurisdiction are confirmed on the first call." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						className: "inline-flex min-h-11 items-center hover:text-signal",
						children: "Privacy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/terms",
						className: "inline-flex min-h-11 items-center hover:text-signal",
						children: "Terms"
					})
				]
			})
		})]
	});
}
function Breadcrumbs({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Breadcrumb",
		className: "text-sm text-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
			className: "flex flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "underline-offset-4 hover:text-ink hover:underline",
				children: "Home"
			}) }), items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					children: "/"
				}), item.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					className: "underline-offset-4 hover:text-ink hover:underline",
					children: item.label
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-ink",
					children: item.label
				})]
			}, item.label))]
		})
	});
}
function LabelBanner({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "rounded-card border-l-4 border-teal bg-foam px-4 py-3 text-sm text-ink",
		children
	});
}
//#endregion
export { LabelBanner as n, SiteShell as r, Breadcrumbs as t };
