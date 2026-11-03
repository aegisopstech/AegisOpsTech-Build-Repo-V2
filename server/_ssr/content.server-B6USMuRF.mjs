import { a as staticContent, n as contentSchema } from "./schema-BkSLwOoC.mjs";
import { logActivity, t as getStore } from "./auth.server-LvCUCnap.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content.server-B6USMuRF.js
var KEY = "content";
var BEFORE_IMPORT = "content:before-import";
/**
* The stored content, or the static content from `src/content/site.ts` when
* nothing has been saved yet (that is the seed: the first save writes it).
* A stored copy that no longer matches the schema also falls back, so a bad
* record can never take the public pages down.
*/
async function read(store) {
	const fallback = {
		...staticContent(),
		rev: 0,
		updatedAt: null
	};
	if (!store) return fallback;
	try {
		const stored = await store.get(KEY);
		if (!stored) return fallback;
		const parsed = contentSchema.safeParse(stored);
		if (!parsed.success) {
			console.error("[cms] stored content is invalid; serving the static content", parsed.error.issues.slice(0, 3));
			return fallback;
		}
		return {
			...parsed.data,
			rev: stored.rev,
			updatedAt: stored.updatedAt
		};
	} catch (err) {
		console.error("[cms] content read failed; serving the static content", err);
		return fallback;
	}
}
/** What the public pages show: drafts are left out. */
async function publicContent() {
	const content = await read(await getStore());
	return {
		...content,
		articles: content.articles.filter((article) => article.status === "published")
	};
}
async function adminContent(store) {
	return read(store);
}
var STALE = "Someone saved a newer version since this page loaded. Reload, then make the change again.";
var sectionNames = {
	team: "Team",
	articles: "Insights",
	faqs: "FAQs",
	aboutFacts: "About facts"
};
function itemKey(section, item) {
	const record = item;
	if (section === "team") return record.name;
	if (section === "articles") return record.slug;
	if (section === "faqs") return record.q;
	return record.title;
}
/** "Team: added X; edited Y" — the activity log's account of a save, worked out here rather than trusted from the page. */
function describeChange(section, before, after) {
	const key = (item) => itemKey(section, item);
	const old = new Map(before.map((item) => [key(item), JSON.stringify(item)]));
	const now = new Map(after.map((item) => [key(item), JSON.stringify(item)]));
	const quote = (keys) => keys.map((k) => `“${k.length > 60 ? `${k.slice(0, 57)}…` : k}”`).join(", ");
	const parts = [];
	const added = [...now.keys()].filter((k) => !old.has(k));
	const removed = [...old.keys()].filter((k) => !now.has(k));
	const edited = [...now.keys()].filter((k) => old.has(k) && old.get(k) !== now.get(k));
	if (added.length) parts.push(`added ${quote(added)}`);
	if (removed.length) parts.push(`deleted ${quote(removed)}`);
	if (edited.length) parts.push(`edited ${quote(edited)}`);
	const kept = (keys, other) => [...keys].filter((k) => other.has(k)).join("\n");
	if (kept(old.keys(), now) !== kept(now.keys(), old)) parts.push("reordered");
	return `${sectionNames[section]}: ${parts.join("; ") || "saved with no changes"}`;
}
async function saveSection(store, section, value, rev) {
	const current = await read(store);
	if (current.rev !== rev) return {
		ok: false,
		error: STALE
	};
	const next = {
		...current,
		[section]: value,
		rev: rev + 1,
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	await store.put(KEY, next);
	await logActivity(store, describeChange(section, current[section], value));
	return {
		ok: true,
		content: next
	};
}
/** Replaces everything with a backup file. The previous content is kept for one undo. */
async function importContent(store, content) {
	const current = await read(store);
	await store.put(BEFORE_IMPORT, current);
	const next = {
		...content,
		rev: current.rev + 1,
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	await store.put(KEY, next);
	await logActivity(store, "Backup imported", "previous content kept for undo");
	return {
		ok: true,
		content: next
	};
}
async function undoImport(store) {
	const previous = await store.get(BEFORE_IMPORT);
	const parsed = previous ? contentSchema.safeParse(previous) : null;
	if (!parsed?.success) return {
		ok: false,
		error: "There is no import to undo."
	};
	const current = await read(store);
	const next = {
		...parsed.data,
		rev: current.rev + 1,
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	await store.put(KEY, next);
	await store.delete(BEFORE_IMPORT);
	await logActivity(store, "Import undone");
	return {
		ok: true,
		content: next
	};
}
async function hasImportUndo(store) {
	return await store.get(BEFORE_IMPORT) !== null;
}
//#endregion
export { adminContent, hasImportUndo, importContent, publicContent, saveSection, undoImport };
