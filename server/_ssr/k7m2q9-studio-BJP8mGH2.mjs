import { r as __toESM } from "../_runtime.mjs";
import { g as personGroups, n as articleHrefs } from "./site-CFNH31A9.mjs";
import { S as require_jsx_runtime, Z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Stethoscope, c as RefreshCw, f as Eye, g as ChevronDown, h as ChevronUp, i as Trash2, l as Plus, m as Copy, n as Upload, p as Download, s as Send, u as Pencil } from "../_libs/lucide-react.mjs";
import { i as faqListSchema, n as contentSchema, o as teamListSchema, r as factListSchema, t as articleListSchema } from "./schema-BkSLwOoC.mjs";
import { c as modeLabels, f as whatsappSaveSchema, i as PARAM_LABELS, l as modes, n as DEFAULT_TEMPLATE, o as SAMPLE_PARAMS, r as LANGUAGE_OPTIONS, s as TEMPLATE_BODY, t as DEFAULT_API_VERSION } from "./whatsapp-wifg-MLI.mjs";
import { C as cmsWhatsappOutbox, D as cmsWhatsappStatus, E as cmsWhatsappSimulate, S as cmsWhatsappClearOutbox, T as cmsWhatsappSend, _ as cmsSave, b as cmsUndoImport, c as cmsActivity, d as cmsLoad, f as cmsLogin, g as cmsResetPassword, h as cmsResetCooloffs, l as cmsChangePassword, m as cmsRequestReset, p as cmsLogout, u as cmsImport, v as cmsSession, w as cmsWhatsappSave, x as cmsWhatsappCheck, y as cmsSignOutEverywhere } from "./router-61mhIF7S.mjs";
import { r as TeamCard, t as ArticleBody } from "./content-blocks-Js5zZp8j.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/k7m2q9-studio-BJP8mGH2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function isUnauthorized(err) {
	return err instanceof Error && err.message.includes("UNAUTHORIZED");
}
/** Zod issues as "Item 2 › linkedin: message" lines, using each item's label. */
function formatIssues(error, labelAt) {
	return error.issues.slice(0, 8).map((issue) => {
		const [index, ...rest] = issue.path;
		const where = typeof index === "number" ? labelAt(index) : "List";
		const field = rest.filter((part) => typeof part === "string").join(" › ");
		return `${where}${field ? ` › ${field}` : ""}: ${issue.message}`;
	});
}
function TextField({ label, value, onChange, hint, multiline, rows, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "field",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "field-label",
				children: label
			}),
			multiline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				value,
				rows,
				onChange: (event) => onChange(event.target.value),
				maxLength: rest.maxLength
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value,
				onChange: (event) => onChange(event.target.value),
				...rest
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm text-muted",
				children: hint
			}) : null
		]
	});
}
function SelectField({ label, value, options, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "field",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "field-label",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			value,
			onChange: (event) => onChange(event.target.value),
			children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: option.value,
				children: option.label
			}, option.value))
		})]
	});
}
function Notice({ tone = "info", children }) {
	const styles = {
		info: "bg-paper-2 text-ink",
		error: "bg-[#fdecec] text-[#8a1c1c]",
		ok: "bg-foam text-ink"
	}[tone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: tone === "error" ? "alert" : "status",
		className: `rounded-xl px-4 py-3 text-sm ${styles}`,
		children
	});
}
/**
* Header for a content section: what it controls, a link to the live page,
* and save / discard for the whole section. Client-side validation runs before
* the save; the server validates again.
*/
function SectionBar({ title, description, liveHref, dirty, validate, onSave, onDiscard }) {
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [problems, setProblems] = (0, import_react.useState)([]);
	const [saved, setSaved] = (0, import_react.useState)(false);
	async function save() {
		const issues = validate();
		setProblems(issues);
		setSaved(false);
		if (issues.length) return;
		setSaving(true);
		const error = await onSave();
		setSaving(false);
		if (error) setProblems([error]);
		else setSaved(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6 space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-semibold",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 max-w-2xl text-muted",
				children: [
					description,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: liveHref,
						target: "_blank",
						rel: "noreferrer",
						className: "text-primary underline underline-offset-4",
						children: "View the live page"
					})
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn btn-line",
					disabled: !dirty || saving,
					onClick: () => {
						if (window.confirm("Discard your unsaved changes in this section?")) {
							onDiscard();
							setProblems([]);
						}
					},
					children: "Discard"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn btn-primary disabled:opacity-50",
					disabled: !dirty || saving,
					onClick: save,
					children: saving ? "Saving…" : "Save and publish"
				})]
			})]
		}), problems.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Notice, {
			tone: "error",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-semibold",
				children: "Not saved."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-1 list-disc pl-5",
				children: problems.map((problem) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: problem }, problem))
			})]
		}) : dirty ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, { children: "Unsaved changes. Visitors see them only after you save." }) : saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, {
			tone: "ok",
			children: "Saved. The live page shows it now (allow up to a minute on other continents)."
		}) : null]
	});
}
var iconButton = "inline-flex size-9 items-center justify-center rounded-full text-muted hover:bg-paper-2 hover:text-ink disabled:opacity-30";
/**
* A reorderable list on the left and the selected item's form (or preview) on
* the right. Used by every content section.
*/
function ListEditor({ items, onChange, itemLabel, itemMeta, create, addLabel, renderForm, renderPreview, minItems = 0 }) {
	const [selected, setSelected] = (0, import_react.useState)(0);
	const [previewing, setPreviewing] = (0, import_react.useState)(false);
	const index = Math.min(selected, items.length - 1);
	const item = items[index];
	function move(from, to) {
		const next = [...items];
		const [moved] = next.splice(from, 1);
		next.splice(to, 0, moved);
		onChange(next);
		setSelected(to);
	}
	function remove(at) {
		if (!window.confirm(`Delete “${itemLabel(items[at]) || "this item"}”? It goes when you save.`)) return;
		onChange(items.filter((_, i) => i !== at));
		setSelected(Math.max(0, at - 1));
	}
	function add() {
		onChange([...items, create()]);
		setSelected(items.length);
		setPreviewing(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[20rem_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-2",
				children: items.map((entry, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: `flex items-center gap-1 rounded-xl bg-card p-1.5 pl-3 shadow-border ${i === index ? "ring-2 ring-primary" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "min-w-0 flex-1 py-1.5 text-left",
							onClick: () => setSelected(i),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate font-display text-sm font-semibold",
								children: itemLabel(entry) || "Untitled"
							}), itemMeta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate text-xs text-muted",
								children: itemMeta(entry)
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: iconButton,
							disabled: i === 0,
							onClick: () => move(i, i - 1),
							"aria-label": "Move up",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: iconButton,
							disabled: i === items.length - 1,
							onClick: () => move(i, i + 1),
							"aria-label": "Move down",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: iconButton,
							disabled: items.length <= minItems,
							onClick: () => remove(i),
							"aria-label": "Delete",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
						})
					]
				}, i))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "btn btn-line mt-3 w-full",
				onClick: add,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }),
					" ",
					addLabel
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-w-0",
			children: item === void 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-card bg-card p-6 text-muted shadow-border",
				children: "Nothing here yet."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-card bg-card p-5 shadow-border md:p-6",
				children: [renderPreview ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-5 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: `btn ${previewing ? "btn-line" : "btn-primary"}`,
						onClick: () => setPreviewing(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" }), " Edit"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: `btn ${previewing ? "btn-primary" : "btn-line"}`,
						onClick: () => setPreviewing(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" }), " Preview"]
					})]
				}) : null, previewing && renderPreview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-card border border-dashed border-line bg-paper p-5",
					children: renderPreview(item)
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4",
					children: renderForm(item, (patch) => onChange(items.map((entry, i) => i === index ? {
						...entry,
						...patch
					} : entry)))
				})]
			})
		})]
	});
}
function SignIn({ session, onSignedIn }) {
	const [mode, setMode] = (0, import_react.useState)("sign-in");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-5 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-card bg-card p-6 shadow-border md:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "AegisOps"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-2xl font-semibold",
					children: mode === "sign-in" ? "Sign in to the console" : "Reset the password"
				}),
				!session.configured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, {
						tone: "error",
						children: session.error ?? "The console is not set up on this deployment."
					})
				}) : mode === "sign-in" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignInForm, {
					onSignedIn,
					onForgot: () => setMode("reset")
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResetForm, {
					onDone: onSignedIn,
					onBack: () => setMode("sign-in")
				})
			]
		})
	});
}
function SignInForm({ onSignedIn, onForgot }) {
	const [username, setUsername] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function submit(event) {
		event.preventDefault();
		setBusy(true);
		setError(null);
		try {
			const result = await cmsLogin({ data: {
				username: username.trim(),
				password
			} });
			if (result.ok) onSignedIn();
			else setError(result.error);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Sign-in failed.");
		}
		setBusy(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "mt-6 grid gap-4",
		onSubmit: submit,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
				label: "Username",
				value: username,
				onChange: setUsername,
				autoComplete: "username",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
				label: "Password",
				type: "password",
				value: password,
				onChange: setPassword,
				autoComplete: "current-password",
				required: true
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, {
				tone: "error",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "btn btn-primary",
				disabled: busy,
				children: busy ? "Signing in…" : "Sign in"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "text-sm text-primary underline underline-offset-4",
				onClick: onForgot,
				children: "Forgot the password?"
			})
		]
	});
}
function ResetForm({ onDone, onBack }) {
	const [step, setStep] = (0, import_react.useState)("request");
	const [username, setUsername] = (0, import_react.useState)("");
	const [code, setCode] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirm, setConfirm] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function run(task) {
		setBusy(true);
		setError(null);
		try {
			await task();
		} catch (err) {
			setError(err instanceof Error ? err.message : "Something went wrong.");
		}
		setBusy(false);
	}
	const requestCode = (event) => {
		event.preventDefault();
		run(async () => {
			const result = await cmsRequestReset({ data: { username: username.trim() } });
			if (!result.ok) return setError(result.error);
			setMessage(result.message ?? null);
			setStep("confirm");
		});
	};
	const resetPassword = (event) => {
		event.preventDefault();
		if (password !== confirm) return setError("The two passwords do not match.");
		run(async () => {
			const result = await cmsResetPassword({ data: {
				username: username.trim(),
				code,
				password,
				confirm
			} });
			if (result.ok) onDone();
			else setError(result.error);
		});
	};
	return step === "request" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "mt-6 grid gap-4",
		onSubmit: requestCode,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted",
				children: "We email a 6-digit code to the recovery inbox. It works once, for 10 minutes."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
				label: "Username",
				value: username,
				onChange: setUsername,
				autoComplete: "username",
				required: true
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, {
				tone: "error",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "btn btn-primary",
				disabled: busy,
				children: busy ? "Sending…" : "Email me a code"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "text-sm text-primary underline underline-offset-4",
				onClick: onBack,
				children: "Back to sign-in"
			})
		]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "mt-6 grid gap-4",
		onSubmit: resetPassword,
		children: [
			message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, {
				tone: "ok",
				children: message
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
				label: "Code",
				value: code,
				onChange: setCode,
				inputMode: "numeric",
				autoComplete: "one-time-code",
				maxLength: 6,
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
				label: "New password",
				hint: "At least 12 characters.",
				type: "password",
				value: password,
				onChange: setPassword,
				autoComplete: "new-password",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
				label: "New password again",
				type: "password",
				value: confirm,
				onChange: setConfirm,
				autoComplete: "new-password",
				required: true
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, {
				tone: "error",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "btn btn-primary",
				disabled: busy,
				children: busy ? "Saving…" : "Set the new password"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "text-sm text-primary underline underline-offset-4",
				onClick: () => setStep("request"),
				children: "Send another code"
			})
		]
	});
}
function validator(schema, items, label) {
	return () => {
		const result = schema.safeParse(items);
		if (result.success) return [];
		return formatIssues(result.error, (i) => `“${label(items[i]) || `Item ${i + 1}`}”`);
	};
}
function initialsOf(name) {
	const words = name.split(/\s+/).filter(Boolean);
	return ((words[0]?.[0] ?? "") + (words.length > 1 ? words[words.length - 1][0] : "")).toUpperCase();
}
function TeamEditor({ value, onChange, dirty, onSave, onDiscard }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBar, {
		title: "Team",
		description: "The team cards on /about, in this order. The home page shows the first two in a wide row and the rest below.",
		liveHref: "/about",
		dirty,
		validate: validator(teamListSchema, value, (person) => person.name),
		onSave,
		onDiscard
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListEditor, {
		items: value,
		onChange,
		itemLabel: (person) => person.name,
		itemMeta: (person) => `${person.group} · ${person.title}`,
		addLabel: "Add a person",
		create: () => ({
			name: "",
			title: "",
			group: "Associates",
			text: "",
			initials: ""
		}),
		renderPreview: (person) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-xl rounded-card bg-card p-5 shadow-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamCard, { person })
		}),
		renderForm: (person, update) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-[1fr_8rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
					label: "Name",
					value: person.name,
					maxLength: 120,
					onChange: (name) => update({
						name,
						initials: person.initials && person.initials !== initialsOf(person.name) ? person.initials : initialsOf(name)
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
					label: "Initials",
					value: person.initials,
					maxLength: 3,
					onChange: (initials) => update({ initials: initials.toUpperCase() })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
					label: "Title",
					value: person.title,
					maxLength: 160,
					onChange: (title) => update({ title })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
					label: "Group",
					value: person.group,
					options: personGroups.map((group) => ({
						value: group,
						label: group
					})),
					onChange: (group) => update({ group })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
				label: "Text",
				multiline: true,
				rows: 4,
				value: person.text,
				maxLength: 1e3,
				onChange: (text) => update({ text })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
				label: "Credentials (optional)",
				hint: "One per line. Only list what the person has approved.",
				multiline: true,
				rows: 4,
				value: (person.credentials ?? []).join("\n"),
				onChange: (lines) => {
					const credentials = lines.split("\n").map((line) => line.trimStart());
					update({ credentials: credentials.some((line) => line.trim()) ? credentials : void 0 });
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
				label: "LinkedIn (optional)",
				hint: "https://www.linkedin.com/in/…",
				value: person.linkedin ?? "",
				onChange: (linkedin) => update({ linkedin: linkedin.trim() ? linkedin : void 0 })
			})
		] })
	})] });
}
var hrefOptions = articleHrefs.map((href) => ({
	value: href,
	label: href
}));
function slugify(title) {
	return title.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);
}
function ArticlesEditor({ value, onChange, dirty, onSave, onDiscard }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBar, {
		title: "Insights",
		description: "Posts on /insights. Drafts are saved but stay off the site until you switch them to Published.",
		liveHref: "/insights",
		dirty,
		validate: validator(articleListSchema, value, (article) => article.title),
		onSave,
		onDiscard
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListEditor, {
		items: value,
		onChange,
		itemLabel: (article) => article.title,
		itemMeta: (article) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: article.status === "draft" ? "font-semibold text-primary-deep" : "",
				children: article.status === "draft" ? "Draft" : "Published"
			}),
			" ",
			"· /insights/",
			article.slug
		] }),
		addLabel: "New insight",
		create: () => ({
			slug: "",
			title: "",
			description: "",
			date: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
				month: "long",
				year: "numeric"
			}),
			href: "/approach",
			hrefLabel: "Trust and security",
			sections: [{
				heading: "",
				body: ""
			}],
			status: "draft"
		}),
		renderPreview: (article) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-3xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleBody, { article })
		}),
		renderForm: (article, update) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "field-label",
					children: "Status"
				}), ["draft", "published"].map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": article.status === status,
					className: `btn ${article.status === status ? "btn-primary" : "btn-line"}`,
					onClick: () => update({ status }),
					children: status === "draft" ? "Draft" : "Published"
				}, status))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
				label: "Title",
				value: article.title,
				maxLength: 200,
				onChange: (title) => update({
					title,
					slug: article.slug && article.slug !== slugify(article.title) ? article.slug : slugify(title)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
					label: "Slug",
					hint: `Address: /insights/${article.slug || "…"}. Changing it breaks old links.`,
					value: article.slug,
					maxLength: 80,
					onChange: (slug) => update({ slug: slug.toLowerCase() })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
					label: "Date",
					hint: "As shown, e.g. November 2026",
					value: article.date,
					maxLength: 40,
					onChange: (date) => update({ date })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
				label: "Description",
				hint: "One or two sentences. Also the search-result description.",
				multiline: true,
				rows: 2,
				value: article.description,
				maxLength: 400,
				onChange: (description) => update({ description })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
					label: "Link at the end goes to",
					value: article.href,
					options: hrefOptions,
					onChange: (href) => update({ href })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
					label: "Link label",
					value: article.hrefLabel,
					maxLength: 80,
					onChange: (hrefLabel) => update({ hrefLabel })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionsEditor, {
				sections: article.sections,
				onChange: (sections) => update({ sections })
			})
		] })
	})] });
}
function SectionsEditor({ sections, onChange }) {
	const set = (index, patch) => onChange(sections.map((section, i) => i === index ? {
		...section,
		...patch
	} : section));
	const move = (from, to) => {
		const next = [...sections];
		const [moved] = next.splice(from, 1);
		next.splice(to, 0, moved);
		onChange(next);
	};
	const button = "inline-flex size-9 items-center justify-center rounded-full text-muted hover:bg-paper-2 disabled:opacity-30";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
		className: "grid gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
				className: "field-label mb-2",
				children: "Sections"
			}),
			sections.map((section, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 rounded-xl bg-paper p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "technical text-muted",
							children: ["Section ", index + 1]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: button,
								disabled: index === 0,
								onClick: () => move(index, index - 1),
								"aria-label": "Move section up",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: button,
								disabled: index === sections.length - 1,
								onClick: () => move(index, index + 1),
								"aria-label": "Move section down",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: button,
								disabled: sections.length === 1,
								onClick: () => window.confirm("Delete this section?") && onChange(sections.filter((_, i) => i !== index)),
								"aria-label": "Delete section",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
							})
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						label: "Heading",
						value: section.heading,
						maxLength: 200,
						onChange: (heading) => set(index, { heading })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						label: "Body",
						multiline: true,
						rows: 5,
						value: section.body,
						maxLength: 6e3,
						onChange: (body) => set(index, { body })
					})
				]
			}, index)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "btn btn-line justify-self-start",
				onClick: () => onChange([...sections, {
					heading: "",
					body: ""
				}]),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " Add a section"]
			})
		]
	});
}
function FaqsEditor({ value, onChange, dirty, onSave, onDiscard }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBar, {
		title: "FAQs",
		description: "Questions on /faq, in this order. They also feed the FAQ data search engines read.",
		liveHref: "/faq",
		dirty,
		validate: validator(faqListSchema, value, (item) => item.q),
		onSave,
		onDiscard
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListEditor, {
		items: value,
		onChange,
		itemLabel: (item) => item.q,
		addLabel: "Add a question",
		create: () => ({
			q: "",
			a: ""
		}),
		renderForm: (item, update) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
			label: "Question",
			value: item.q,
			maxLength: 300,
			onChange: (q) => update({ q })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
			label: "Answer",
			multiline: true,
			rows: 6,
			value: item.a,
			maxLength: 3e3,
			onChange: (a) => update({ a })
		})] })
	})] });
}
function FactsEditor({ value, onChange, dirty, onSave, onDiscard }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBar, {
		title: "About facts",
		description: "The navy cards at the top of /about: founding year, registration, where you deliver. Up to six.",
		liveHref: "/about",
		dirty,
		validate: validator(factListSchema, value, (fact) => fact.title),
		onSave,
		onDiscard
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListEditor, {
		items: value,
		onChange,
		itemLabel: (fact) => fact.title,
		addLabel: "Add a fact",
		minItems: 1,
		create: () => ({
			title: "",
			text: ""
		}),
		renderPreview: (fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-sm rounded-card bg-navy p-5 text-paper",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-lg font-semibold",
				children: fact.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-paper/80",
				children: fact.text
			})]
		}),
		renderForm: (fact, update) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
			label: "Title",
			value: fact.title,
			maxLength: 80,
			onChange: (title) => update({ title })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
			label: "Text",
			multiline: true,
			rows: 4,
			value: fact.text,
			maxLength: 600,
			onChange: (text) => update({ text })
		})] })
	})] });
}
function ActivityPanel({ onError }) {
	const [entries, setEntries] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	const load = (0, import_react.useCallback)(() => {
		setError(null);
		cmsActivity().then(setEntries).catch((err) => setError(onError(err)));
	}, [onError]);
	(0, import_react.useEffect)(load, [load]);
	const [cooloffMessage, setCooloffMessage] = (0, import_react.useState)(null);
	async function resetCooloffs() {
		if (!window.confirm("Let every visitor send a brief again right away?")) return;
		try {
			await cmsResetCooloffs();
			setCooloffMessage("Cool-offs cleared. Anyone can send a brief now.");
			load();
		} catch (err) {
			setError(onError(err));
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-wrap items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-semibold",
				children: "Activity"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-muted",
				children: "The last 200 sign-ins, failed attempts, saves and password events, newest first. Everything is done as root; the address shows where it came from."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn btn-line",
					onClick: resetCooloffs,
					title: "The contact form accepts one brief per visitor every 2 hours. This clears that wait for everyone.",
					children: "Reset contact-form cool-offs"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "btn btn-line",
					onClick: load,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-4" }), " Refresh"]
				})]
			})]
		}),
		cooloffMessage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, {
				tone: "ok",
				children: cooloffMessage
			})
		}) : null,
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, {
			tone: "error",
			children: error
		}) : null,
		!entries ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted",
			children: "Loading…"
		}) : !entries.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted",
			children: "Nothing yet."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto rounded-card bg-card shadow-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "border-b border-line font-display",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3",
							children: "When"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3",
							children: "What"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3",
							children: "From"
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
					className: "divide-y divide-line",
					children: entries.map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: entry.action.includes("failed") || entry.action.includes("rejected") ? "bg-[#fdf3f3]" : "",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "whitespace-nowrap px-4 py-3 text-muted",
								children: new Date(entry.at).toLocaleString()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-4 py-3",
								children: [entry.action, entry.detail ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted",
									children: [" — ", entry.detail]
								}) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "technical whitespace-nowrap px-4 py-3 text-muted",
								children: entry.ip
							})
						]
					}, `${entry.at}-${index}`))
				})]
			})
		})
	] });
}
function BackupPanel({ content, canUndoImport, hasDrafts, onReplaced, onError }) {
	const fileInput = (0, import_react.useRef)(null);
	const [status, setStatus] = (0, import_react.useState)(null);
	function exportJson() {
		const { team, articles, faqs, aboutFacts } = content;
		const file = JSON.stringify({
			exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
			content: {
				team,
				articles,
				faqs,
				aboutFacts
			}
		}, null, 2);
		const url = URL.createObjectURL(new Blob([file], { type: "application/json" }));
		const link = document.createElement("a");
		link.href = url;
		link.download = `aegisops-content-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`;
		link.click();
		URL.revokeObjectURL(url);
	}
	async function importJson(file) {
		setStatus(null);
		let parsed;
		try {
			parsed = JSON.parse(await file.text());
		} catch {
			return setStatus({
				tone: "error",
				text: "That file is not valid JSON."
			});
		}
		const candidate = parsed?.content ?? parsed;
		const result = contentSchema.safeParse(candidate);
		if (!result.success) return setStatus({
			tone: "error",
			text: `That file does not match the content format. ${formatIssues(result.error, (i) => `Item ${i + 1}`).join(" ")}`
		});
		const { team, articles, faqs } = result.data;
		const summary = `${team.length} people, ${articles.length} insights, ${faqs.length} FAQs`;
		if (!window.confirm(`Replace all site content with this backup (${summary})? You can undo this once.`)) return;
		try {
			const saved = await cmsImport({ data: result.data });
			if (!saved.ok) return setStatus({
				tone: "error",
				text: saved.error
			});
			setStatus({
				tone: "ok",
				text: `Imported: ${summary}.`
			});
			onReplaced();
		} catch (err) {
			setStatus({
				tone: "error",
				text: onError(err)
			});
		}
	}
	async function undo() {
		if (!window.confirm("Put back the content from before the last import?")) return;
		try {
			const result = await cmsUndoImport();
			if (!result.ok) return setStatus({
				tone: "error",
				text: result.error
			});
			setStatus({
				tone: "ok",
				text: "The last import was undone."
			});
			onReplaced();
		} catch (err) {
			setStatus({
				tone: "error",
				text: onError(err)
			});
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-semibold",
				children: "Backup"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: "Download everything the console edits (team, insights including drafts, FAQs, about facts) as one JSON file. Keep a copy before large changes. Importing a file replaces all of it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-card bg-card p-5 shadow-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold",
							children: "Export"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "The saved content as it is now. Unsaved changes are not included."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "btn btn-primary mt-4",
							onClick: exportJson,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), " Download JSON"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-card bg-card p-5 shadow-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold",
							children: "Import"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "Restores a file exported here. It is checked before anything changes."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: fileInput,
							type: "file",
							accept: "application/json,.json",
							className: "hidden",
							onChange: (event) => {
								const file = event.target.files?.[0];
								event.target.value = "";
								if (file) importJson(file);
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "btn btn-line mt-4 disabled:opacity-50",
							disabled: hasDrafts,
							onClick: () => fileInput.current?.click(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4" }), " Choose a file…"]
						}),
						hasDrafts ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "Save or discard your unsaved changes first."
						}) : null,
						canUndoImport ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "mt-3 block text-sm text-primary underline underline-offset-4",
							onClick: undo,
							children: "Undo the last import"
						}) : null
					]
				})]
			}),
			status ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, {
					tone: status.tone,
					children: status.text
				})
			}) : null
		]
	});
}
function AccountPanel({ onError }) {
	const [current, setCurrent] = (0, import_react.useState)("");
	const [next, setNext] = (0, import_react.useState)("");
	const [confirm, setConfirm] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function change(event) {
		event.preventDefault();
		setBusy(true);
		setStatus(null);
		try {
			const result = await cmsChangePassword({ data: {
				current,
				next,
				confirm
			} });
			if (result.ok) {
				setStatus({
					tone: "ok",
					text: "Password changed. Other sessions are signed out."
				});
				setCurrent("");
				setNext("");
				setConfirm("");
			} else setStatus({
				tone: "error",
				text: result.error
			});
		} catch (err) {
			setStatus({
				tone: "error",
				text: onError(err)
			});
		}
		setBusy(false);
	}
	async function signOutOthers() {
		try {
			await cmsSignOutEverywhere();
			setStatus({
				tone: "ok",
				text: "Every other session is signed out. This one stays signed in."
			});
		} catch (err) {
			setStatus({
				tone: "error",
				text: onError(err)
			});
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-semibold",
				children: "Account"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-muted",
				children: [
					"Signed in as ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "technical",
						children: "root"
					}),
					". Sessions last 8 hours. Forgotten passwords are reset with a code emailed to the recovery inbox."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-4 rounded-card bg-card p-5 shadow-border",
					onSubmit: change,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold",
							children: "Change the password"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							label: "Current password",
							type: "password",
							value: current,
							onChange: setCurrent,
							autoComplete: "current-password",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							label: "New password",
							hint: "At least 12 characters.",
							type: "password",
							value: next,
							onChange: setNext,
							autoComplete: "new-password",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							label: "New password again",
							type: "password",
							value: confirm,
							onChange: setConfirm,
							autoComplete: "new-password",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "btn btn-primary",
							disabled: busy,
							children: busy ? "Saving…" : "Change password"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-card bg-card p-5 shadow-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold",
							children: "Sign out everywhere else"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "Use this if you signed in on a shared or lost device."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "btn btn-line mt-4",
							onClick: signOutOthers,
							children: "Sign out other sessions"
						})
					]
				})]
			}),
			status ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, {
					tone: status.tone,
					children: status.text
				})
			}) : null
		]
	});
}
var sourceLabel = {
	console: "Set here",
	secret: "Worker secret",
	default: "Default",
	none: "Not set"
};
function SourceBadge({ source }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `technical shrink-0 rounded-full px-2.5 py-0.5 ${source === "none" ? "bg-[#fdecec] text-[#8a1c1c]" : source === "console" ? "bg-foam text-ink" : "bg-paper-2 text-muted"}`,
		children: sourceLabel[source]
	});
}
function Card({ title, description, children, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0 rounded-card bg-card p-5 shadow-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-lg font-semibold",
				children: title
			}), description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 max-w-2xl text-sm text-muted",
				children: description
			}) : null] }), action]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children
		})]
	});
}
/** "+92 300-123 4567" → "923001234567"; a leading 00 international prefix is dropped. */
function normalizeNumber(line) {
	return line.replace(/[^\d]/g, "").replace(/^00/, "");
}
/** "en_US" → "English (US) — en_US"; unknown codes are shown as they are. */
function languageName(code) {
	const known = LANGUAGE_OPTIONS.find((option) => option.code === code);
	return known ? `${known.label} — ${code}` : code;
}
function newId() {
	return Math.random().toString(36).slice(2, 10);
}
function WhatsappPanel({ onError }) {
	const [status, setStatus] = (0, import_react.useState)(null);
	const [loadError, setLoadError] = (0, import_react.useState)(null);
	const [outboxVersion, setOutboxVersion] = (0, import_react.useState)(0);
	const load = (0, import_react.useCallback)(() => {
		setLoadError(null);
		cmsWhatsappStatus().then(setStatus).catch((err) => setLoadError(onError(err)));
	}, [onError]);
	(0, import_react.useEffect)(load, [load]);
	const sent = () => setOutboxVersion((v) => v + 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "max-w-5xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-semibold",
				children: "WhatsApp alerts"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-muted",
				children: "Each contact-form brief can also reach the team on WhatsApp through Meta’s Cloud API. The email always goes first; a WhatsApp problem never stops a brief. Values set here override the Worker secrets."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "btn btn-line",
				onClick: load,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-4" }), " Refresh"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-4",
			children: [
				loadError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, {
					tone: "error",
					children: loadError
				}) : null,
				!status ? !loadError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted",
					children: "Loading…"
				}) : null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusCard, { status }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsForm, {
						status,
						onSaved: setStatus,
						onError
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConnectionCard, {
						status,
						onError
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimulatorCard, {
						status,
						onError,
						onSent: sent
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutboxCard, {
						version: outboxVersion,
						onError
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SetupGuide, {})
			]
		})]
	});
}
function StatusCard({ status }) {
	const rows = [
		{
			label: "Access token",
			value: status.token.set ? `Set (ends …${status.token.last4})` : "Not set",
			source: status.token.source
		},
		{
			label: "Site sends from",
			value: status.activeSender ? `${status.activeSender.label} — ${status.activeSender.phoneNumberId}` : "Not set",
			source: status.activeSender?.source ?? "none"
		},
		{
			label: "Recipients",
			value: status.recipients.value.length ? status.recipients.value.join(", ") : "Not set",
			source: status.recipients.source
		},
		{
			label: "Template",
			value: status.template.value,
			source: status.template.source
		},
		{
			label: "Template language",
			value: languageName(status.language.value),
			source: status.language.source
		},
		{
			label: "API version",
			value: status.apiVersion.value,
			source: status.apiVersion.source
		},
		{
			label: "Business account ID",
			value: status.wabaId.value ?? "Not set (template check is skipped)",
			source: status.wabaId.source
		}
	];
	const badge = status.mode === "off" ? {
		tone: "bg-paper-2 text-muted",
		text: "Off: no WhatsApp alerts"
	} : status.mode === "simulate" ? {
		tone: "bg-[#fff4d6] text-[#7a5200]",
		text: "Simulation: briefs are logged below, nothing is sent"
	} : status.configured ? {
		tone: "bg-foam text-teal",
		text: "Live: alerts are on"
	} : {
		tone: "bg-[#fdecec] text-[#8a1c1c]",
		text: `Live, but not sending — missing ${status.missing.join(", ")}`
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		title: "Status",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `inline-block rounded-full px-3 py-1 text-sm font-semibold ${badge.tone}`,
				children: badge.text
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-3 divide-y divide-line",
				children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-2 py-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-display text-sm font-semibold",
						children: row.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
						className: "flex min-w-0 flex-wrap items-center gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "technical break-all text-muted",
							children: row.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { source: row.source })]
					})]
				}, row.label))
			}),
			status.updatedAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-xs text-muted",
				children: [
					"Console settings last changed ",
					new Date(status.updatedAt).toLocaleString(),
					"."
				]
			}) : null
		]
	});
}
function SettingsForm({ status, onSaved, onError }) {
	const [mode, setMode] = (0, import_react.useState)(status.mode);
	const [senders, setSenders] = (0, import_react.useState)(status.consoleSenders);
	const [activeSender, setActiveSender] = (0, import_react.useState)(status.consoleActiveSender ?? status.consoleSenders[0]?.id ?? null);
	const [recipients, setRecipients] = (0, import_react.useState)((status.recipients.console ?? []).join("\n"));
	const [template, setTemplate] = (0, import_react.useState)(status.template.console ?? "");
	const [language, setLanguage] = (0, import_react.useState)(status.language.console ?? "");
	const [apiVersion, setApiVersion] = (0, import_react.useState)(status.apiVersion.console ?? "");
	const [wabaId, setWabaId] = (0, import_react.useState)(status.wabaId.console ?? "");
	const [token, setToken] = (0, import_react.useState)("");
	const [clearToken, setClearToken] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const updateSender = (id, patch) => setSenders((list) => list.map((s) => s.id === id ? {
		...s,
		...patch
	} : s));
	function addSender() {
		const id = newId();
		setSenders((list) => [...list, {
			id,
			label: list.length ? `Number ${list.length + 1}` : "Main",
			phoneNumberId: ""
		}]);
		if (!activeSender) setActiveSender(id);
	}
	function removeSender(id) {
		const rest = senders.filter((s) => s.id !== id);
		setSenders(rest);
		if (activeSender === id) setActiveSender(rest[0]?.id ?? null);
	}
	async function save(event) {
		event.preventDefault();
		setMessage(null);
		const numbers = recipients.split(/[\n,]/).map(normalizeNumber).filter(Boolean);
		const cleanSenders = senders.map((s) => ({
			...s,
			label: s.label.trim(),
			phoneNumberId: s.phoneNumberId.replace(/\s/g, "")
		}));
		const input = {
			mode,
			senders: cleanSenders,
			activeSender: cleanSenders.length ? activeSender ?? cleanSenders[0].id : null,
			recipients: numbers.length ? [...new Set(numbers)] : null,
			template: template.trim() || null,
			language: language.trim() || null,
			apiVersion: apiVersion.trim() || null,
			wabaId: wabaId.trim() || null,
			token: token.trim() ? {
				action: "set",
				value: token.trim()
			} : clearToken ? { action: "clear" } : { action: "keep" }
		};
		const parsed = whatsappSaveSchema.safeParse(input);
		if (!parsed.success) {
			const issue = parsed.error.issues[0];
			return setMessage({
				tone: "error",
				text: `${{
					senders: "Senders",
					activeSender: "Senders",
					recipients: "Recipients",
					template: "Template",
					language: "Template language",
					apiVersion: "API version",
					wabaId: "Business account ID",
					token: "Access token"
				}[String(issue.path[0])] ?? "Settings"}: ${issue.message}`
			});
		}
		setBusy(true);
		try {
			const next = await cmsWhatsappSave({ data: parsed.data });
			onSaved(next);
			setToken("");
			setClearToken(false);
			setRecipients((next.recipients.console ?? []).join("\n"));
			setSenders(next.consoleSenders);
			setActiveSender(next.consoleActiveSender);
			setMessage({
				tone: "ok",
				text: "Saved. The next brief uses these settings."
			});
		} catch (err) {
			setMessage({
				tone: "error",
				text: onError(err)
			});
		}
		setBusy(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
		onSubmit: save,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			title: "Settings",
			description: "Leave a field empty to use its Worker secret or default instead.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "field-label mb-1",
							children: "Mode"
						}), modes.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "radio",
								name: "mode",
								checked: mode === m,
								onChange: () => setMode(m)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: modeLabels[m] })]
						}, m))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "grid gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "field-label mb-1",
								children: "Sender numbers"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "-mt-1 text-sm text-muted",
								children: ["Each WhatsApp number you send from has its own Phone number ID (WhatsApp → API Setup). The site sends from the one marked “Site uses this”; tests can use any of them.", status.sendersSource === "secret" && !senders.length ? ` None added here, so the Worker secret is used (${status.activeSender?.phoneNumberId}).` : ""]
							}),
							senders.map((sender) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid items-end gap-3 rounded-xl bg-paper p-3 md:grid-cols-[1fr_1.3fr_auto_auto]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
										label: "Name",
										value: sender.label,
										maxLength: 60,
										onChange: (label) => updateSender(sender.id, { label })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
										label: "Phone number ID",
										value: sender.phoneNumberId,
										inputMode: "numeric",
										onChange: (phoneNumberId) => updateSender(sender.id, { phoneNumberId })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex min-h-11 items-center gap-2 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "radio",
											name: "active-sender",
											checked: activeSender === sender.id,
											onChange: () => setActiveSender(sender.id)
										}), "Site uses this"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "inline-flex size-11 items-center justify-center rounded-full text-muted hover:bg-paper-2",
										"aria-label": `Remove ${sender.label}`,
										onClick: () => removeSender(sender.id),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
									})
								]
							}, sender.id)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "btn btn-line justify-self-start",
								disabled: senders.length >= 10,
								onClick: addSender,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " Add a sender number"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						label: `Recipient numbers (up to 10)`,
						hint: status.recipients.source === "secret" && !recipients ? `Empty: using the Worker secret (${status.recipients.value.join(", ")}).` : "One per line, with the country code, e.g. 923001234567. Spaces, dashes and a leading + are removed.",
						multiline: true,
						rows: 3,
						value: recipients,
						onChange: setRecipients
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							label: "Template name",
							hint: `Empty: ${status.template.source === "secret" && !template ? `the Worker secret (${status.template.value})` : `“${DEFAULT_TEMPLATE}”`}`,
							value: template,
							onChange: (value) => setTemplate(value.toLowerCase())
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "field",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "field-label",
									children: "Template language"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									list: "whatsapp-languages",
									value: language,
									placeholder: "en",
									onChange: (event) => setLanguage(event.target.value.trim())
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("datalist", {
									id: "whatsapp-languages",
									children: LANGUAGE_OPTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: option.code,
										children: option.label
									}, option.code))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm text-muted",
									children: [
										"The code shown for the template in WhatsApp Manager: English = ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "technical",
											children: "en"
										}),
										", English (US) = ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "technical",
											children: "en_US"
										}),
										", Urdu = ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "technical",
											children: "ur"
										}),
										". Empty:",
										" ",
										status.language.source === "secret" && !language ? `the Worker secret (${status.language.value})` : "en",
										"."
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							label: "Graph API version",
							hint: `Empty: ${DEFAULT_API_VERSION}`,
							value: apiVersion,
							onChange: setApiVersion
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							label: "Business account ID (optional)",
							hint: "WhatsApp Manager → Account info. Lets the check below confirm the template is approved.",
							value: wabaId,
							inputMode: "numeric",
							onChange: setWabaId
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							label: status.token.consoleSet ? "Replace the access token" : "Access token",
							hint: status.token.set ? `A token is set (ends …${status.token.last4}, ${sourceLabel[status.token.source].toLowerCase()}). Leave empty to keep it. It is never shown again.` : "The permanent system-user token from Meta Business settings. It is never shown again after saving.",
							type: "password",
							autoComplete: "off",
							value: token,
							onChange: setToken
						}), status.token.consoleSet ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-center gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: clearToken,
								disabled: Boolean(token),
								onChange: (e) => setClearToken(e.target.checked)
							}), "Remove the token saved here (falls back to the Worker secret, if any)"]
						}) : null]
					}),
					message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, {
						tone: message.tone,
						children: message.text
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "btn btn-primary justify-self-start",
						disabled: busy,
						children: busy ? "Saving…" : "Save WhatsApp settings"
					})
				]
			})
		})
	});
}
function ConnectionCard({ status, onError }) {
	const [result, setResult] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function check() {
		setBusy(true);
		setResult(null);
		try {
			setResult(await cmsWhatsappCheck());
		} catch (err) {
			setResult({ error: onError(err) });
		}
		setBusy(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		title: "Connection check",
		description: "Asks Meta whether the token can see each sender number, and whether the template is approved. Sends no message.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "btn btn-line",
			disabled: busy || !status.token.set,
			onClick: check,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, { className: "size-4" }),
				" ",
				busy ? "Checking…" : "Check connection"
			]
		}),
		children: [
			!status.token.set ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Set the access token first."
			}) : null,
			result && "error" in result ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, {
				tone: "error",
				children: result.error
			}) : null,
			result && "senders" in result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2",
				children: [result.senders.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Notice, {
					tone: s.ok ? "ok" : "error",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: s.label }),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "technical",
							children: [
								"(",
								s.phoneNumberId,
								")"
							]
						}),
						":",
						" ",
						s.ok ? `reachable — ${s.displayPhoneNumber ?? "number hidden"}${s.verifiedName ? `, “${s.verifiedName}”` : ""}${s.qualityRating ? `, quality ${s.qualityRating}` : ""}` : s.error
					]
				}, s.id)), !result.template.checked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, { children: "Template not checked: add the Business account ID in Settings to check it." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Notice, {
					tone: result.template.ok ? "ok" : "error",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
							"Template “",
							status.template.value,
							"” (",
							status.language.value,
							")"
						] }),
						":",
						" ",
						result.template.error ?? `${result.template.status}, ${result.template.category ?? "category unknown"}${result.template.status === "APPROVED" ? "" : " — it can be sent once Meta approves it"}`,
						result.template.available && result.template.available.length > 1 && !result.template.error ? ` (also exists in: ${result.template.available.filter((a) => !a.startsWith(`${status.language.value} `)).join(", ")})` : ""
					]
				})]
			}) : null
		]
	});
}
function SimulatorCard({ status, onError, onSent }) {
	const [params, setParams] = (0, import_react.useState)(SAMPLE_PARAMS);
	const [senderId, setSenderId] = (0, import_react.useState)(status.activeSender?.id ?? "");
	const [chosen, setChosen] = (0, import_react.useState)(status.recipients.value);
	const [preview, setPreview] = (0, import_react.useState)(null);
	const [sendResult, setSendResult] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setChosen(status.recipients.value);
		setSenderId((id) => status.senders.some((s) => s.id === id) ? id : status.activeSender?.id ?? "");
	}, [status]);
	const input = () => ({
		senderId: senderId || null,
		params,
		recipients: chosen.length ? chosen : null
	});
	async function runPreview() {
		setBusy("preview");
		setError(null);
		setSendResult(null);
		try {
			setPreview(await cmsWhatsappSimulate({ data: input() }));
		} catch (err) {
			setError(onError(err));
		}
		setBusy(null);
	}
	async function send() {
		const sender = status.senders.find((s) => s.id === senderId) ?? status.activeSender;
		if (!window.confirm(`Really send this to ${chosen.length} number(s) from “${sender?.label ?? "the sender"}”?`)) return;
		setBusy("send");
		setError(null);
		try {
			setSendResult(await cmsWhatsappSend({ data: input() }));
			onSent();
		} catch (err) {
			setError(onError(err));
		}
		setBusy(null);
	}
	const missing = params.some((p) => !p.trim());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		title: "Simulator and test messages",
		description: "Change the five values a brief fills in, pick the sender and recipients, then preview the exact message and API request (nothing is sent), or send it for real.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid content-start gap-3",
				children: [PARAM_LABELS.map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
					label: `{{${i + 1}}} ${label}`,
					value: params[i] ?? "",
					multiline: i === 4,
					rows: i === 4 ? 3 : void 0,
					onChange: (value) => setParams((list) => list.map((p, j) => j === i ? value : p))
				}, label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "justify-self-start text-sm text-primary underline underline-offset-4",
					onClick: () => setParams(SAMPLE_PARAMS),
					children: "Reset to the sample brief"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid content-start gap-3",
				children: [
					status.senders.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
						label: "Send from",
						value: senderId,
						options: status.senders.map((s) => ({
							value: s.id,
							label: `${s.label} — ${s.phoneNumberId}${s.id === status.activeSender?.id ? " (site)" : ""}`
						})),
						onChange: setSenderId
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, { children: "No sender number yet. Add one in Settings." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "grid gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "field-label mb-1",
							children: "Send to"
						}), status.recipients.value.length ? status.recipients.value.map((to) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: chosen.includes(to),
								onChange: (e) => setChosen((list) => e.target.checked ? [...list, to] : list.filter((n) => n !== to))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "technical",
								children: to
							})]
						}, to)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "No recipients yet. Add them in Settings."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "btn btn-line",
							disabled: busy !== null || missing,
							onClick: runPreview,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" }),
								" ",
								busy === "preview" ? "Building…" : "Preview (sends nothing)"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "btn btn-primary disabled:opacity-50",
							disabled: busy !== null || missing || !status.token.set || !status.senders.length || !chosen.length,
							onClick: send,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" }),
								" ",
								busy === "send" ? "Sending…" : "Send for real"
							]
						})]
					}),
					missing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Fill in all five values."
					}) : null,
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, {
						tone: "error",
						children: error
					}) : null,
					sendResult ? !sendResult.ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, {
						tone: "error",
						children: sendResult.error
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2",
						children: sendResult.results.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Notice, {
							tone: r.ok ? "ok" : "error",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "technical",
									children: r.to
								}),
								":",
								" ",
								r.ok ? `accepted by Meta${r.messageId ? ` (message ${r.messageId.slice(-12)})` : ""}. It should arrive within a minute.` : r.error
							]
						}, r.to))
					}) : null,
					preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3",
						children: [
							preview.problems.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, {
								tone: "error",
								children: p
							}, p)),
							preview.truncated.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Notice, { children: [
								"Shortened to fit: ",
								preview.truncated.join(", "),
								"."
							] }) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-[#e7f6e9] p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "technical text-muted",
									children: [
										"From ",
										preview.sender ? `${preview.sender.label} (${preview.sender.phoneNumberId})` : "—",
										" · template “",
										preview.template,
										"” in",
										" ",
										preview.language
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 whitespace-pre-wrap rounded-xl bg-card p-3 text-sm shadow-border",
									children: preview.text
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
								className: "cursor-pointer text-sm font-semibold",
								children: ["API request", preview.requests.length > 1 ? `s (${preview.requests.length})` : ""]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
								className: "technical mt-2 max-h-80 overflow-auto rounded-xl bg-paper p-3 text-xs",
								children: preview.requests.map((r) => `${r.method} ${r.url}\n${Object.entries(r.headers).map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${r.body}`).join("\n\n————\n\n")
							})] })
						]
					}) : null
				]
			})]
		})
	});
}
function OutboxCard({ version, onError }) {
	const [entries, setEntries] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	const load = (0, import_react.useCallback)(() => {
		setError(null);
		cmsWhatsappOutbox().then(setEntries).catch((err) => setError(onError(err)));
	}, [onError]);
	(0, import_react.useEffect)(load, [load, version]);
	async function clear() {
		if (!window.confirm("Clear the WhatsApp delivery log?")) return;
		try {
			await cmsWhatsappClearOutbox();
			load();
		} catch (err) {
			setError(onError(err));
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		title: "Delivery log",
		description: "The last 30 alerts: real briefs (live or simulated) and test messages, newest first. Kept for 30 days. It holds visitors' names and emails, so clear it when you no longer need it.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "btn btn-line",
				onClick: load,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-4" }), " Refresh"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "btn btn-line",
				disabled: !entries?.length,
				onClick: clear,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" }), " Clear"]
			})]
		}),
		children: [error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, {
			tone: "error",
			children: error
		}) : null, !entries ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "Loading…"
		}) : !entries.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "Nothing yet. Switch to Simulation and send a brief from the contact form, or send a test above."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "divide-y divide-line",
			children: entries.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "grid gap-1 py-3 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `technical rounded-full px-2.5 py-0.5 ${!e.ok ? "bg-[#fdecec] text-[#8a1c1c]" : e.mode === "simulated" ? "bg-[#fff4d6] text-[#7a5200]" : "bg-foam text-teal"}`,
								children: !e.ok ? "Failed" : e.mode === "simulated" ? "Simulated" : "Sent"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: e.kind === "test" ? "Test message" : "Brief"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: "to"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "technical",
								children: e.to
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-auto text-muted",
								children: new Date(e.at).toLocaleString()
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted",
						children: [
							e.params[0],
							" (",
							e.params[1],
							") · ",
							e.params[2],
							e.sender ? ` · from ${e.sender}` : "",
							e.messageId ? ` · Meta id …${e.messageId.slice(-12)}` : ""
						]
					}),
					e.error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[#8a1c1c]",
						children: e.error
					}) : null
				]
			}, `${e.at}-${e.to}-${i}`))
		})]
	});
}
function SetupGuide() {
	const [copied, setCopied] = (0, import_react.useState)(false);
	async function copy() {
		try {
			await navigator.clipboard.writeText(TEMPLATE_BODY);
			setCopied(true);
			setTimeout(() => setCopied(false), 2e3);
		} catch {
			setCopied(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		title: "Meta setup checklist",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "list-decimal space-y-2 pl-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"In",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://business.facebook.com",
							target: "_blank",
							rel: "noreferrer",
							className: "text-primary underline underline-offset-4",
							children: "Meta Business"
						}),
						", create (or use) the AegisOps Technologies business portfolio."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"In",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://developers.facebook.com/apps",
							target: "_blank",
							rel: "noreferrer",
							className: "text-primary underline underline-offset-4",
							children: "Meta for Developers"
						}),
						", create an app of type ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Business" }),
						", add the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "WhatsApp" }),
						" product, and link it to that portfolio."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"In WhatsApp → API Setup, copy the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Phone number ID" }),
						" of the sending number (Meta’s free test number to start) into a sender above. For more numbers, add each in WhatsApp Manager → Phone numbers and add its ID as another sender."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Add each team number as a recipient (API Setup → “To”) and confirm it with the code WhatsApp sends. The test number only delivers to numbers listed there, at most 5." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"In WhatsApp Manager → Message templates, create ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "technical",
							children: DEFAULT_TEMPLATE
						}),
						", category",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Utility" }),
						", language ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "English" }),
						" (",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "technical",
							children: "en"
						}),
						"), with the body below. Wait until it shows ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Active" }),
						". Copy the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "WhatsApp Business Account ID" }),
						" into Settings so the check can confirm it."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Create a permanent token: Business settings → Users → System users → add an admin system user; assign the app",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "and" }),
						" the WhatsApp account with full control; then ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Generate token" }),
						" with",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "technical",
							children: "whatsapp_business_messaging"
						}),
						" and",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "technical",
							children: "whatsapp_business_management"
						}),
						", set to never expire. Paste it into Settings."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Save, run ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Check connection" }),
						", preview a message, then ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Send for real" }),
						" and check each phone. To try the whole site without sending, switch to ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Simulation" }),
						" and submit the contact form."
					] })
				].map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: step }, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "field-label",
							children: "Template body"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "btn btn-line",
							onClick: copy,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }),
								" ",
								copied ? "Copied" : "Copy"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "technical mt-2 overflow-x-auto whitespace-pre-wrap rounded-xl bg-paper p-4",
						children: TEMPLATE_BODY
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "The five variables are filled in this order: name, organization, area of interest, work email, problem. Meta asks for sample values when you submit the template."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: "If a brief arrives by email but not on WhatsApp, the delivery log above and the Worker logs (Workers & Pages → aegisops-web → Logs, search “WhatsApp”) say why."
			})
		]
	});
}
var tabs = [
	{
		id: "team",
		label: "Team"
	},
	{
		id: "articles",
		label: "Insights"
	},
	{
		id: "faqs",
		label: "FAQs"
	},
	{
		id: "aboutFacts",
		label: "About facts"
	},
	{
		id: "whatsapp",
		label: "WhatsApp"
	},
	{
		id: "activity",
		label: "Activity"
	},
	{
		id: "backup",
		label: "Backup"
	},
	{
		id: "account",
		label: "Account"
	}
];
function Console() {
	const [session, setSession] = (0, import_react.useState)(null);
	const refresh = (0, import_react.useCallback)(() => {
		cmsSession().then(setSession).catch((err) => setSession({
			signedIn: false,
			configured: false,
			error: err.message
		}));
	}, []);
	(0, import_react.useEffect)(refresh, [refresh]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-paper",
		children: session === null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "p-10 text-muted",
			children: "Loading…"
		}) : session.signedIn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dashboard, { onSignedOut: refresh }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignIn, {
			session,
			onSignedIn: refresh
		})
	});
}
function Dashboard({ onSignedOut }) {
	const [tab, setTab] = (0, import_react.useState)("team");
	const [loaded, setLoaded] = (0, import_react.useState)(null);
	const [loadError, setLoadError] = (0, import_react.useState)(null);
	const [drafts, setDrafts] = (0, import_react.useState)({});
	const handleError = (0, import_react.useCallback)((err) => {
		if (isUnauthorized(err)) onSignedOut();
		return err instanceof Error ? err.message : String(err);
	}, [onSignedOut]);
	const reload = (0, import_react.useCallback)(() => {
		setLoadError(null);
		cmsLoad().then((result) => {
			setLoaded(result);
			setDrafts({});
		}).catch((err) => setLoadError(handleError(err)));
	}, [handleError]);
	(0, import_react.useEffect)(reload, [reload]);
	const dirtySections = Object.keys(drafts).filter((section) => loaded && JSON.stringify(drafts[section]) !== JSON.stringify(loaded.content[section]));
	(0, import_react.useEffect)(() => {
		if (!dirtySections.length) return;
		const warn = (event) => event.preventDefault();
		window.addEventListener("beforeunload", warn);
		return () => window.removeEventListener("beforeunload", warn);
	}, [dirtySections.length]);
	async function save(section) {
		if (!loaded) return "Not loaded";
		const value = drafts[section];
		if (value === void 0) return null;
		try {
			const result = await cmsSave({ data: {
				section,
				rev: loaded.content.rev,
				value
			} });
			if (!result.ok) return result.error;
			setLoaded({
				...loaded,
				content: result.content
			});
			setDrafts(({ [section]: _saved, ...rest }) => rest);
			return null;
		} catch (err) {
			return handleError(err);
		}
	}
	async function signOut() {
		if (dirtySections.length && !window.confirm("You have unsaved changes. Sign out anyway?")) return;
		await cmsLogout();
		onSignedOut();
	}
	function sectionProps(section) {
		const content = loaded.content;
		return {
			value: drafts[section] ?? content[section],
			onChange: (value) => setDrafts((current) => ({
				...current,
				[section]: value
			})),
			dirty: dirtySections.includes(section),
			onSave: () => save(section),
			onDiscard: () => setDrafts(({ [section]: _discarded, ...rest }) => rest)
		};
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "navy-grid text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow eyebrow-light",
				children: "AegisOps"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-2xl font-semibold",
				children: "Content console"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4 text-sm text-paper/80",
				children: [loaded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: loaded.content.updatedAt ? `Last saved ${new Date(loaded.content.updatedAt).toLocaleString()}` : "Showing the built-in content (nothing saved yet)" }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn btn-line-light",
					onClick: signOut,
					children: "Sign out"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "mx-auto flex w-full max-w-6xl gap-1 overflow-x-auto px-5",
			"aria-label": "Console sections",
			children: tabs.map((item) => {
				const dirty = dirtySections.includes(item.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setTab(item.id),
					"aria-current": tab === item.id ? "page" : void 0,
					className: `shrink-0 rounded-t-xl px-4 py-3 font-display text-sm font-semibold ${tab === item.id ? "bg-paper text-ink" : "text-paper/80 hover:text-paper"}`,
					children: [item.label, dirty ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-1.5 text-teal",
						"aria-label": "unsaved changes",
						children: "●"
					}) : null]
				}, item.id);
			})
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto w-full max-w-6xl px-5 py-8",
		children: loadError ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-card bg-card p-5 shadow-border",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display font-semibold",
					children: "Could not load the content."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: loadError
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn btn-line mt-4",
					onClick: reload,
					children: "Try again"
				})
			]
		}) : !loaded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted",
			children: "Loading content…"
		}) : tab === "team" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamEditor, { ...sectionProps("team") }) : tab === "articles" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticlesEditor, { ...sectionProps("articles") }) : tab === "faqs" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqsEditor, { ...sectionProps("faqs") }) : tab === "aboutFacts" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FactsEditor, { ...sectionProps("aboutFacts") }) : tab === "whatsapp" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappPanel, { onError: handleError }) : tab === "activity" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityPanel, { onError: handleError }) : tab === "backup" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackupPanel, {
			content: loaded.content,
			canUndoImport: loaded.canUndoImport,
			hasDrafts: dirtySections.length > 0,
			onReplaced: reload,
			onError: handleError
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountPanel, { onError: handleError })
	})] });
}
/**
* Private content console. Deliberately unlinked: no menu, sitemap or search
* entry points here, and robots.txt disallows /x/. The password, not the
* path, is what protects it.
*/
var SplitComponent = Console;
//#endregion
export { SplitComponent as component };
