import { r as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Z as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Shield } from "../_libs/lucide-react.mjs";
import { n as LabelBanner, r as SiteShell, t as Breadcrumbs } from "./chrome-D-s4dhRZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/demo-C50kcPx8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	{
		name: "Trigger",
		body: "Synthetic monitor: payments-api error rate is 6.4% and has stayed there for 8 minutes. Ticket INC-1044 is opened with no human note."
	},
	{
		name: "Gather context",
		body: "Logs show 142 timeouts calling ledger-config after 14:02. Release 2.14.3 went out at 13:58. The only config change set ledger.timeout_ms from 800 to 80."
	},
	{
		name: "Reason and recommend",
		body: "Likely cause: the timeout is too low for ledger calls after 2.14.3. Confidence is high because the errors start four minutes after that deploy. Open question: whether the ledger itself slowed down. Those host metrics are not in this demo. Proposed action: approved runbook RB-17, restore the previous timeout and watch the error rate for 10 minutes."
	}
];
function IncidentDemo() {
	const [step, setStep] = (0, import_react.useState)(0);
	const [decision, setDecision] = (0, import_react.useState)("pending");
	const phase = decision === "pending" ? step : 4;
	function reset() {
		setStep(0);
		setDecision("pending");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:col-span-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-card bg-navy p-5 text-paper md:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "technical text-signal",
						children: "INC-1044 · synthetic payments-api · not a client system"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "mt-5 flex flex-wrap gap-2",
						children: [
							STEPS.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								disabled: decision !== "pending",
								onClick: () => setStep(index),
								className: "min-h-11 rounded-full px-3 font-display text-sm font-semibold " + (phase === index ? "bg-paper text-navy" : "bg-navy-2 text-paper"),
								children: [
									index + 1,
									" ",
									item.name
								]
							}) }, item.name)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex min-h-11 items-center gap-1 rounded-full px-3 font-display text-sm font-semibold " + (phase >= 3 ? "bg-paper text-navy" : "bg-navy-2 text-paper"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
									"aria-hidden": "true",
									className: "size-3.5"
								}), "4 Human approves"]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "technical inline-flex min-h-11 items-center rounded-full px-3 " + (decision !== "pending" ? "bg-paper text-navy" : "bg-navy-2 text-signal"),
								children: "5 Logged"
							}) })
						]
					}),
					decision === "pending" && step < 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-semibold",
								children: STEPS[step]?.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-2xl text-paper/85",
								children: STEPS[step]?.body
							}),
							step < 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "btn btn-paper mt-6",
								onClick: () => setStep((value) => value + 1),
								children: "Continue"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display font-semibold",
									children: "The agent stops here."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "btn btn-paper",
										onClick: () => setDecision("approved"),
										children: "Approve RB-17"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "btn btn-line-light",
										onClick: () => setDecision("refused"),
										children: "Do not act"
									})]
								})]
							})
						]
					}) : null,
					decision === "approved" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-semibold",
								children: "Act and record"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "technical mt-4 space-y-2 text-signal",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "14:11 technician approved RB-17" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "synthetic change: ledger.timeout_ms restored to 800" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "synthetic series: error rate falls under 1%" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "INC-1044 updated with the evidence and the named approval" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-2xl text-paper/85",
								children: "The agent did not choose this. A person did. The recovery figures are synthetic."
							})
						]
					}) : null,
					decision === "refused" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-semibold",
							children: "Refused. Nothing changed."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "technical mt-4 text-signal",
							children: "14:11 technician declined RB-17. No configuration write. Ticket notes the refusal."
						})]
					}) : null,
					decision !== "pending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "btn btn-line-light mt-6",
						onClick: reset,
						children: "Run it again"
					}) : null
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "rounded-card border-l-4 border-teal bg-foam p-5 lg:col-span-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold",
					children: "Demo disclosure"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm",
					children: "This panel stays up for the whole walkthrough."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-4 space-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-display font-semibold",
							children: "What it does"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Walks one incident from alert to a logged decision." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-display font-semibold",
							children: "Connected systems"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "None. There is no client network behind this page." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-display font-semibold",
							children: "Simulated"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "The monitor, logs, deploy, ticket, and recovery numbers." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-display font-semibold",
							children: "Real"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "The sequence, the stop before approval, and the record of a yes or a no." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-display font-semibold",
							children: "What it does not do"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Page a person, change infrastructure, or learn from your data." })] })
					]
				})
			]
		})]
	});
}
function DemoPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto w-full max-w-6xl px-5 py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [{ label: "Live Demo" }] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelBanner, { children: "Technical demo — a working sequence, with the disclosure beside it. Not a client deployment." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-6 max-w-3xl font-display text-4xl font-semibold md:text-5xl",
				children: "Watch an agent investigate an IT incident."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-muted",
				children: "Move through the evidence, then approve or refuse the runbook. The agent cannot skip that step."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IncidentDemo, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/use-cases/$slug",
					params: { slug: "it-incident-investigation" },
					className: "btn btn-line",
					children: "Read the workflow"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "btn btn-primary",
					children: "Discuss a similar workflow"
				})]
			})
		]
	}) });
}
//#endregion
export { DemoPage as component };
