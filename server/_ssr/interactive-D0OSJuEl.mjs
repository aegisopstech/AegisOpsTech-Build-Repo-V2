import { r as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Check, i as Copy, o as ArrowRight } from "../_libs/lucide-react.mjs";
import { l as practiceLabels, p as workCases, s as loopSteps, u as sectorOptions } from "./router-CRnRCdkH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/interactive-D0OSJuEl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
var STORAGE_KEY = "aegisops.brief";
function compose(brief) {
	return [
		"AegisOps briefing",
		`Name: ${brief.name}`,
		`Email: ${brief.email}`,
		`Organization: ${brief.organization}`,
		`Practice: ${practiceLabels[brief.practice]}`,
		`Sector: ${brief.sector}`,
		"",
		"The pain:",
		brief.pain
	].join("\n");
}
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
	const [ready, setReady] = (0, import_react.useState)(null);
	const [copied, setCopied] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (!raw) return;
			const parsed = JSON.parse(raw);
			if (parsed.text) setReady(parsed.text);
		} catch {}
	}, []);
	function update(key, value) {
		setBrief((prev) => ({
			...prev,
			[key]: value
		}));
	}
	function onSubmit(event) {
		event.preventDefault();
		const next = validate(brief);
		setErrors(next);
		if (Object.keys(next).length > 0) return;
		const text = compose({
			...brief,
			name: brief.name.trim(),
			email: brief.email.trim(),
			organization: brief.organization.trim(),
			pain: brief.pain.trim()
		});
		setReady(text);
		setCopied(false);
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify({ text }));
		} catch {}
	}
	async function copy() {
		if (!ready) return;
		try {
			await navigator.clipboard.writeText(ready);
			setCopied(true);
		} catch {
			setCopied(false);
		}
	}
	function mail() {
		if (!ready) return;
		const subject = encodeURIComponent(`AegisOps briefing — ${brief.organization || "conversation"}`);
		window.location.href = `mailto:?subject=${subject}&body=${encodeURIComponent(ready)}`;
	}
	if (ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-card bg-card p-5 shadow-border md:p-7",
		"aria-live": "polite",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Briefing composed"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-2xl font-semibold",
				children: "Nothing was sent from this site."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Copy it, or open it in your mail app and address it to your AegisOps contact. It is also saved in this browser."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "mt-5 overflow-x-auto rounded-xl bg-paper px-4 py-4 font-sans text-base whitespace-pre-wrap text-ink",
				children: ready
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-wrap gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "btn btn-primary",
						onClick: copy,
						children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							"aria-hidden": "true",
							className: "size-4"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
							"aria-hidden": "true",
							className: "size-4"
						}), copied ? "Copied" : "Copy briefing"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "btn btn-line",
						onClick: mail,
						children: "Open in email"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "btn btn-line",
						onClick: () => {
							setReady(null);
							try {
								localStorage.removeItem(STORAGE_KEY);
							} catch {}
						},
						children: "Start again"
					})
				]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "rounded-card bg-card p-5 shadow-border md:p-7",
		onSubmit,
		noValidate: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex flex-wrap items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "btn btn-primary",
				children: "Compose briefing"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "We do not pretend this form delivers mail. You send it."
			})]
		})]
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
