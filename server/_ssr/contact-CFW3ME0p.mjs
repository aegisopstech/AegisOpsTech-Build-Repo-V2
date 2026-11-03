import { r as __toESM } from "../_runtime.mjs";
import { u as interestOptions } from "./site-Bgu1USOS.mjs";
import { S as require_jsx_runtime, Z as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Check } from "../_libs/lucide-react.mjs";
import { r as SiteShell, t as Breadcrumbs } from "./chrome-D-s4dhRZ.mjs";
import { a as object, n as email, o as string, t as _enum } from "../_libs/zod.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CFW3ME0p.js
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
	interest: _enum(interestOptions),
	problem: string().trim().min(24).max(5e3),
	timeline: string().trim().max(200).optional(),
	budget: string().trim().max(200).optional(),
	contact: _enum(["Email", "Call"]).optional(),
	website: string().max(500).optional()
});
/**
* Emails the brief to the team and an acknowledgement to the visitor via
* Resend. The send logic is imported dynamically so the API key handling
* never ships in the client bundle.
*/
var sendBrief = createServerFn({ method: "POST" }).inputValidator(briefSchema).handler(createSsrRpc("aa8fdfe33933893dd128448d3ecf0226427bc1e9db5e52ff6afb656b137bb648"));
var EMPTY = {
	name: "",
	email: "",
	organization: "",
	interest: "",
	problem: "",
	timeline: "",
	budget: "",
	contact: ""
};
function validate(brief) {
	const errors = {};
	if (brief.name.trim().length < 2) errors.name = "Give us a name.";
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(brief.email.trim())) errors.email = "Use a work email.";
	if (brief.organization.trim().length < 2) errors.organization = "Which organization is this for?";
	if (!brief.interest) errors.interest = "Choose an area, or “Not sure yet”.";
	if (brief.problem.trim().length < 24) errors.problem = "A sentence or two on the problem. No specification required.";
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
		if (Object.keys(next).length > 0 || !brief.interest) return;
		setStatus("sending");
		setSendError(null);
		try {
			const result = await sendBrief({ data: {
				...brief,
				interest: brief.interest,
				timeline: brief.timeline || void 0,
				budget: brief.budget || void 0,
				contact: brief.contact || void 0,
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
					". Expect a reply within one business day."
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
						label: "Area of interest",
						error: errors.interest,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							name: "interest",
							value: brief.interest,
							onChange: (event) => update("interest", event.target.value),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select"
							}), interestOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: option,
								children: option
							}, option))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "What are you trying to solve?",
							error: errors.problem,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "problem",
								value: brief.problem,
								onChange: (event) => update("problem", event.target.value),
								placeholder: "The queue, the alert type, or the decision that takes too long."
							})
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
				className: "mt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
					className: "min-h-11 cursor-pointer font-display text-sm font-semibold",
					children: "Optional: timeline, budget, contact method"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-5 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Timeline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: brief.timeline,
								onChange: (event) => update("timeline", event.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Budget range",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: brief.budget,
								onChange: (event) => update("budget", event.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Preferred contact",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: brief.contact,
								onChange: (event) => update("contact", event.target.value),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "No preference"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Email",
										children: "Email"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Call",
										children: "Call"
									})
								]
							})
						})
					]
				})]
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
					className: "max-w-sm text-sm text-muted",
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
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 lg:grid-cols-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [{ label: "Discuss a Project" }] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-6 font-display text-4xl font-semibold",
					children: "Tell us what you need to solve."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "No specification required."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "mt-6 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display font-semibold",
							children: "1. "
						}), "You send a brief. It goes straight to the team, and you get a confirmation by email."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display font-semibold",
							children: "2. "
						}), "We reply within one business day. We do not have a calendar embedded yet, so the 30-minute call is arranged by email."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display font-semibold",
							children: "3. "
						}), "Then a written next step. NDA on request."] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-sm text-muted",
					children: [
						"How the brief is handled is in the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							className: "text-primary underline underline-offset-4",
							children: "privacy note"
						}),
						"."
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:col-span-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefForm, {})
		})]
	}) });
}
//#endregion
export { ContactPage as component };
