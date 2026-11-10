import { _ as principles } from "./site-CFNH31A9.mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as SiteShell, t as Breadcrumbs } from "./chrome-Bpp8ns_d.mjs";
import { o as Route$15 } from "./router-61mhIF7S.mjs";
import { r as TeamCard } from "./content-blocks-Js5zZp8j.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-nb5pnunx.js
var import_jsx_runtime = require_jsx_runtime();
var layers = [
	{
		title: "Leadership",
		who: "CEO and Founder. Chief Data Scientist and AI Engineer.",
		text: "Accountable for every engagement, the architecture, and the quality of the AI."
	},
	{
		title: "Independent consultants",
		who: "Senior independent consultants.",
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
	const { team, aboutFacts } = Route$15.useLoaderData();
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-10 grid gap-4 md:grid-cols-3",
				children: aboutFacts.map((fact, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
					title: fact.title,
					text: fact.text
				}, `${index}-${fact.title}`))
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
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamCard, { person })
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
