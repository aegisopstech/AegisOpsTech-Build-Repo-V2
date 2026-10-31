import { r as __toESM } from "../_runtime.mjs";
import { l as practiceLabels, o as loopSteps, p as workCases, u as sectorOptions } from "./site-B37hbEET.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowRight, i as Check } from "../_libs/lucide-react.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as object, n as email, o as string, t as _enum } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/interactive-DknaMr9D.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
/** Server-side mirror of the contact form's checks, plus length caps. */
var briefSchema = object({
	name: string().trim().min(2).max(120),
	email: email().trim().max(254),
	organization: string().trim().min(2).max(160),
	practice: _enum(Object.keys(practiceLabels)),
	sector: _enum(sectorOptions),
	pain: string().trim().min(24).max(5e3),
	website: string().max(500).optional()
});
/**
* Emails the brief to the team and an acknowledgement to the visitor via
* Resend. The send logic is imported dynamically so the API key handling
* never ships in the client bundle.
*/
var sendBrief = createServerFn({ method: "POST" }).inputValidator(briefSchema).handler(createSsrRpc("aa8fdfe33933893dd128448d3ecf0226427bc1e9db5e52ff6afb656b137bb648"));
var STARTS = [
	{
		id: "audit",
		practice: "advisory",
		label: "An auditor, a regulator, or a customer is asking for proof.",
		text: "Start with the control and the evidence. Automating a fiction only makes the finding arrive faster."
	},
	{
		id: "queue",
		practice: "agentic",
		label: "A team is drowning in work that repeats, but still needs judgment.",
		text: "Pick one queue. Bound the agent. Keep a person on the decisions that carry money, safety, or reputation."
	},
	{
		id: "system",
		practice: "engineering",
		label: "The system itself is the risk — architecture, pipeline, or cloud.",
		text: "We assess as engineers who can also build: applications, data, cloud, and the pipeline that ships them."
	}
];
function StartHere() {
	const [id, setId] = (0, import_react.useState)(null);
	const current = STARTS.find((item) => item.id === id) ?? null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto w-full max-w-6xl px-5 py-16 md:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Where to begin"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 max-w-2xl font-display text-3xl font-semibold md:text-4xl",
				children: "Where is the pressure?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-muted",
				children: "Three honest starting points. The first engagement follows the pressure, not a catalog."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-3 md:grid-cols-3",
				children: STARTS.map((item) => {
					const on = item.id === id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": on,
						onClick: () => setId(item.id),
						className: "min-h-11 rounded-card px-5 py-5 text-left font-display text-base leading-snug font-semibold transition-shadow " + (on ? "bg-navy text-paper shadow-lift" : "bg-card text-ink shadow-border hover:shadow-lift"),
						children: item.label
					}, item.id);
				})
			}),
			current ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-card bg-foam px-5 py-5 md:px-7",
				"aria-live": "polite",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: practiceLabels[current.practice]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-3xl text-lg",
						children: current.text
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PracticeLink, { practice: current.practice })
					})
				]
			}) : null
		]
	});
}
function PracticeLink({ practice }) {
	const className = "btn btn-primary";
	if (practice === "advisory") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/advisory",
		className,
		children: ["Open advisory ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
			"aria-hidden": "true",
			className: "size-4"
		})]
	});
	if (practice === "agentic") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/agentic",
		className,
		children: ["Open agentic work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
			"aria-hidden": "true",
			className: "size-4"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/engineering",
		className,
		children: ["Open engineering ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
			"aria-hidden": "true",
			className: "size-4"
		})]
	});
}
function Loop() {
	const [step, setStep] = (0, import_react.useState)(0);
	const current = loopSteps[step] ?? loopSteps[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-card bg-card p-5 shadow-border md:p-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				role: "tablist",
				"aria-label": "Cognitive loop",
				children: loopSteps.map((item, index) => {
					const on = index === step;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "tab",
						"aria-selected": on,
						onClick: () => setStep(index),
						className: "min-h-11 rounded-full px-4 font-display text-sm font-semibold " + (on ? "bg-navy text-paper" : "bg-paper-2 text-ink"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: on ? "text-signal" : "text-primary",
							children: index + 1
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: on ? " text-paper" : "",
							children: [" ", item.name]
						})]
					}, item.name);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-3xl text-lg",
				role: "tabpanel",
				children: current.text
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: "Example: a critical vulnerability on a payments service. Same loop, different queue, for every case below."
			})
		]
	});
}
function CaseBoard() {
	const [group, setGroup] = (0, import_react.useState)("operations");
	const [activeId, setActiveId] = (0, import_react.useState)("finance");
	const didScroll = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		const id = window.location.hash.replace("#", "");
		const match = workCases.find((item) => item.id === id);
		if (!match) return;
		setGroup(match.group);
		setActiveId(match.id);
	}, []);
	(0, import_react.useEffect)(() => {
		if (didScroll.current) return;
		const id = window.location.hash.replace("#", "");
		if (!id) return;
		const node = document.getElementById(id);
		if (!node) return;
		node.scrollIntoView({ block: "center" });
		didScroll.current = true;
	}, [group, activeId]);
	const visible = workCases.filter((item) => item.group === group);
	const active = workCases.find((item) => item.id === activeId) ?? visible[0];
	function chooseGroup(next) {
		setGroup(next);
		const first = workCases.find((item) => item.group === next);
		if (first) setActiveId(first.id);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "cases",
		className: "scroll-mt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				role: "tablist",
				"aria-label": "Case groups",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroupTab, {
					on: group === "operations",
					label: "Business operations",
					onClick: () => chooseGroup("operations")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroupTab, {
					on: group === "engineering",
					label: "Engineering & resilience",
					onClick: () => chooseGroup("engineering")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid gap-3 sm:grid-cols-2",
				children: visible.map((item) => {
					const on = item.id === active?.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						id: item.id,
						type: "button",
						"aria-pressed": on,
						onClick: () => setActiveId(item.id),
						className: "scroll-mt-28 rounded-card px-5 py-4 text-left shadow-border transition-shadow " + (on ? "bg-navy text-paper" : "bg-card text-ink hover:shadow-lift"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xs font-semibold tracking-widest uppercase " + (on ? "text-signal" : "text-primary"),
							children: item.sector
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block font-display text-lg leading-snug font-semibold",
							children: item.title
						})]
					}, item.id);
				})
			}),
			active ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "mt-4 rounded-card border-l-4 border-teal bg-card px-5 py-6 shadow-border md:px-7",
				"aria-live": "polite",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: active.sector
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-display text-2xl font-semibold",
						children: active.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-6 grid gap-6 md:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
								term: "The pain",
								text: active.pain
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
								term: "What the agent takes",
								text: active.agent
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
								term: "The human gate",
								text: active.gate
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
								term: "What we would measure",
								text: active.signal
							})
						]
					})
				]
			}) : null
		]
	});
}
function GroupTab({ on, label, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		role: "tab",
		"aria-selected": on,
		onClick,
		className: "min-h-11 rounded-full px-4 font-display text-sm font-semibold " + (on ? "bg-primary text-paper" : "bg-paper-2 text-ink"),
		children: label
	});
}
function Detail({ term, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "font-display text-sm font-semibold text-primary",
		children: term
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "mt-2 text-ink",
		children: text
	})] });
}
var EMPTY = {
	name: "",
	email: "",
	organization: "",
	practice: "combined",
	sector: "",
	pain: ""
};
function validate(brief) {
	const errors = {};
	if (brief.name.trim().length < 2) errors.name = "Give us a name.";
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(brief.email.trim())) errors.email = "That email does not look usable.";
	if (brief.organization.trim().length < 2) errors.organization = "Which organization is this for?";
	if (!brief.sector) errors.sector = "Choose a sector.";
	if (brief.pain.trim().length < 24) errors.pain = "A sentence or two on the actual pain.";
	return errors;
}
function BriefForm() {
	const [brief, setBrief] = (0, import_react.useState)(EMPTY);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [website, setWebsite] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [sendError, setSendError] = (0, import_react.useState)(null);
	const [sentTo, setSentTo] = (0, import_react.useState)("");
	function update(key, value) {
		setBrief((prev) => ({
			...prev,
			[key]: value
		}));
	}
	async function onSubmit(event) {
		event.preventDefault();
		if (status === "sending") return;
		const next = validate(brief);
		setErrors(next);
		if (Object.keys(next).length > 0 || !brief.sector) return;
		setStatus("sending");
		setSendError(null);
		try {
			const result = await sendBrief({ data: {
				...brief,
				sector: brief.sector,
				website
			} });
			if (result.ok) {
				setSentTo(brief.email.trim());
				setBrief(EMPTY);
				setStatus("sent");
			} else {
				setSendError(result.error);
				setStatus("error");
			}
		} catch {
			setSendError("We could not send your brief. Please check your connection and try again.");
			setStatus("error");
		}
	}
	if (status === "sent") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-card bg-card p-5 shadow-border md:p-7",
		"aria-live": "polite",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Brief sent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mt-3 flex items-center gap-3 font-display text-2xl font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					"aria-hidden": "true",
					className: "size-6 text-primary"
				}), "It is with the team."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-muted",
				children: [
					"A confirmation is on its way to ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-ink",
						children: sentTo
					}),
					". One of us will reply to that address."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn btn-line",
					onClick: () => setStatus("idle"),
					children: "Send another brief"
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "rounded-card bg-card p-5 shadow-border md:p-7",
		onSubmit,
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 md:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Name",
						error: errors.name,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "name",
							autoComplete: "name",
							value: brief.name,
							onChange: (event) => update("name", event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Work email",
						error: errors.email,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "email",
							type: "email",
							autoComplete: "email",
							inputMode: "email",
							value: brief.email,
							onChange: (event) => update("email", event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Organization",
						error: errors.organization,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "organization",
							autoComplete: "organization",
							value: brief.organization,
							onChange: (event) => update("organization", event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Sector",
						error: errors.sector,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							name: "sector",
							value: brief.sector,
							onChange: (event) => update("sector", event.target.value),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select"
							}), sectorOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: option,
								children: option
							}, option))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "field-label",
							children: "Where should we start?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid gap-2 sm:grid-cols-2",
							children: Object.keys(practiceLabels).map((key) => {
								const on = brief.practice === key;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex min-h-11 cursor-pointer items-center gap-3 rounded-xl px-3 py-2 " + (on ? "bg-navy text-paper" : "bg-paper text-ink"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "practice",
										className: "size-4 accent-primary",
										checked: on,
										onChange: () => update("practice", key)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-sm font-semibold",
										children: practiceLabels[key]
									})]
								}, key);
							})
						})] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "What is actually hurting?",
							error: errors.pain,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "pain",
								value: brief.pain,
								onChange: (event) => update("pain", event.target.value),
								placeholder: "The queue, the finding, the system, or the drill that has never been run."
							})
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "absolute -left-[9999px] h-px w-px overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Website", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "website",
					tabIndex: -1,
					autoComplete: "off",
					value: website,
					onChange: (event) => setWebsite(event.target.value)
				})] })
			}),
			status === "error" && sendError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "alert",
				className: "field-error mt-6",
				children: sendError
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "btn btn-primary",
					disabled: status === "sending",
					children: status === "sending" ? "Sending…" : "Send brief"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "It goes straight to the team. You get a confirmation by email."
				})]
			})
		]
	});
}
function Field({ label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "field",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "field-label",
				children: label
			}),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "field-error",
				children: error
			}) : null
		]
	});
}
//#endregion
export { StartHere as i, CaseBoard as n, Loop as r, BriefForm as t };
