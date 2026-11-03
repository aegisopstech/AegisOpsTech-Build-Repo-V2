import { c as faqs, g as personGroups, n as articleHrefs, r as articles, t as aboutFacts, v as team } from "./site-CFNH31A9.mjs";
import { c as string, n as array, s as object, t as _enum } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/schema-BkSLwOoC.js
/**
* Shape of the editable site content. The static values in `src/content/site.ts`
* are the seed and the fallback; edits made in the console live in Workers KV.
* Text is rendered as plain text everywhere, never as HTML.
*/
var text = (max) => string().trim().min(1, "Required").max(max);
var personSchema = object({
	name: text(120),
	title: text(160),
	group: _enum(personGroups),
	text: text(1e3),
	initials: string().trim().min(1, "Required").max(3, "Up to 3 letters"),
	credentials: array(string().trim().max(300)).max(30).transform((list) => list.filter(Boolean)).optional(),
	linkedin: string().trim().max(300).regex(/^https:\/\/([a-z]{2,3}\.)?linkedin\.com\/\S+$/i, "Must be an https://linkedin.com/... address").optional()
});
var articleSchema = object({
	slug: string().trim().min(1, "Required").max(80).regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "Lowercase letters, digits and single hyphens"),
	title: text(200),
	description: text(400),
	date: text(40),
	href: _enum(articleHrefs),
	hrefLabel: text(80),
	sections: array(object({
		heading: text(200),
		body: text(6e3)
	})).min(1).max(30),
	status: _enum(["published", "draft"])
});
var faqSchema = object({
	q: text(300),
	a: text(3e3)
});
var factSchema = object({
	title: text(80),
	text: text(600)
});
function uniqueSlugs(items, ctx) {
	const seen = /* @__PURE__ */ new Set();
	for (const item of items) {
		if (seen.has(item.slug)) ctx.addIssue({
			code: "custom",
			message: `Duplicate slug "${item.slug}"`
		});
		seen.add(item.slug);
	}
}
var teamListSchema = array(personSchema).max(60);
var articleListSchema = array(articleSchema).max(200).superRefine(uniqueSlugs);
var faqListSchema = array(faqSchema).max(60);
var factListSchema = array(factSchema).min(1).max(6);
var contentSchema = object({
	team: teamListSchema,
	articles: articleListSchema,
	faqs: faqListSchema,
	aboutFacts: factListSchema
});
function staticContent() {
	return {
		team: team.map((person) => ({
			...person,
			credentials: person.credentials ? [...person.credentials] : void 0
		})),
		articles: articles.map((article) => ({
			...article,
			sections: article.sections.map((section) => ({ ...section })),
			status: "published"
		})),
		faqs: faqs.map((item) => ({
			q: item.q,
			a: item.a
		})),
		aboutFacts: aboutFacts.map((fact) => ({ ...fact }))
	};
}
//#endregion
export { staticContent as a, faqListSchema as i, contentSchema as n, teamListSchema as o, factListSchema as r, articleListSchema as t };
