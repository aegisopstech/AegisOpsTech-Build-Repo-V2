import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content-blocks-Js5zZp8j.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Markup for the editable content, shared by the public pages and the content
* console's preview so a preview looks exactly like the live page.
*/
/** A team card as on /about. */
function TeamCard({ person }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex size-12 shrink-0 items-center justify-center rounded-full bg-navy font-display text-sm font-semibold text-paper",
			"aria-hidden": "true",
			children: person.initials
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "technical text-primary",
				children: person.group
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
			}),
			person.credentials?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 list-disc space-y-1 pl-5 text-sm text-muted",
				children: person.credentials.map((credential) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: credential }, credential))
			}) : null,
			person.linkedin ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: person.linkedin,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "mt-3 inline-block text-sm text-primary underline underline-offset-4",
				children: "LinkedIn profile"
			}) : null
		] })]
	});
}
/** The compact person row on the home page. */
function PersonRow({ person }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex size-12 shrink-0 items-center justify-center rounded-full bg-navy font-display text-sm font-semibold text-paper",
			"aria-hidden": "true",
			children: person.initials
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "technical text-primary",
				children: person.group
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-1 font-display text-lg font-semibold",
				children: person.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: person.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm",
				children: person.text
			})
		] })]
	});
}
/** Everything below the breadcrumbs on /insights/$slug. */
function ArticleBody({ article }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "technical mt-6 text-muted",
			children: article.date
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-3 font-display text-4xl font-semibold",
			children: article.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-lg text-muted",
			children: article.description
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 space-y-8",
			children: article.sections.map((section, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-semibold",
				children: section.heading
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3",
				children: section.body
			})] }, `${index}-${section.heading}`))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Related, {
				href: article.href,
				label: article.hrefLabel
			})
		})
	] });
}
function Related({ href, label }) {
	const className = "btn btn-line";
	if (href === "/demo") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/demo",
		className,
		children: label
	});
	if (href === "/approach") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/approach",
		hash: "trust",
		className,
		children: label
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/use-cases/$slug",
		params: { slug: "it-incident-investigation" },
		className,
		children: label
	});
}
//#endregion
export { PersonRow as n, TeamCard as r, ArticleBody as t };
