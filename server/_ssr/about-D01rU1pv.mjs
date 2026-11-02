import { g as team, h as principles } from "./site-DRS0GyJG.mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as SiteShell, t as Breadcrumbs } from "./chrome-WP0uVX5Y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-D01rU1pv.js
var import_jsx_runtime = require_jsx_runtime();
var layers = [
	{
		title: "Leadership",
		who: "CEO and Founder. Chief Data Scientist and AI Engineer.",
		text: "Accountable for every engagement, the architecture, and the quality of the AI."
	},
	{
		title: "Principal consultants",
		who: "Three senior consultants.",
		text: "Advisory, business analysis, domain framing, and client leadership."
	},
	{
		title: "Expert network",
		who: "Vetted specialists on a per-project basis.",
		text: "Developers, security, data, cloud, and QA, added when the scope needs them. Labeled as associates."
	},
	{
		title: "Agentic engineering",
		who: "AegisOps agents and toolchain.",
		text: "They speed analysis, drafting, tests, and documentation. Engineers review everything they produce."
	}
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto w-full max-w-6xl px-5 py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [{ label: "About" }] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-6 max-w-3xl font-display text-4xl font-semibold md:text-5xl",
				children: "Seasoned judgment, engineered with modern AI."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-lg text-muted",
				children: "A small senior core owns every engagement. Specialists join when the scope requires them. One contract, with AegisOps."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 grid gap-4 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						title: "Founded",
						text: "A recent firm. The year is confirmed with the registration details, which are not published on this page yet."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						title: "Where we deliver",
						text: "Remote, and on-site when the work needs it. Region on the first call."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						title: "What we will not print",
						text: "A city, a client count, or a certification we have not earned."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold",
						children: "Principles"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid gap-4 md:grid-cols-3",
						children: principles.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-card bg-card p-5 shadow-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-semibold",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-muted",
								children: item.text
							})]
						}, item.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 grid gap-4 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-card bg-paper-2 p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-semibold",
								children: "Security by design"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-muted",
								children: "Permissions, approval, and the record are part of the build, not a review at the end."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-card bg-paper-2 p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-semibold",
								children: "Systems you can run"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-muted",
								children: "Handover includes the workflow, the controls, and the people who own them."
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold",
						children: "How delivery is staffed"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid gap-4 md:grid-cols-2",
						children: layers.map((layer) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-card bg-card p-5 shadow-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-semibold",
									children: layer.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-display text-sm font-semibold text-primary",
									children: layer.who
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-muted",
									children: layer.text
								})
							]
						}, layer.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 max-w-3xl space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "A senior person leads every engagement, from the first call to handover." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The team is sized to the scope. You do not pay for people with nothing to do." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Repetitive engineering work can be drafted by agents. It is reviewed before it ships." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Whoever joins from the network is still under one AegisOps contract." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-3xl text-muted",
						children: "Quality control on agent-produced work: code review, automated tests, security scanning, and no client data sent to a public model without approval."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold",
						children: "Team"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted",
						children: "Brief roles only. A public track record and a LinkedIn profile are added when that person approves the wording. We will not invent either."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid gap-4 md:grid-cols-2",
						children: team.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-card bg-card p-5 shadow-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-12 shrink-0 items-center justify-center rounded-full bg-navy font-display text-sm font-semibold text-paper",
									"aria-hidden": "true",
									children: person.initials
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "technical text-primary",
										children: person.group === "Associate" ? "Associate · not an employee" : person.group
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 font-display text-xl font-semibold",
										children: person.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted",
										children: person.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3",
										children: person.text
									})
								] })]
							})
						}, person.name))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				className: "btn btn-primary mt-10",
				children: "Discuss a Project"
			})
		]
	}) });
}
function Fact({ title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-card bg-navy p-5 text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-lg font-semibold",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-paper/80",
			children: text
		})]
	});
}
//#endregion
export { AboutPage as component };
