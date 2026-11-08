import { t as createServerFn } from "./ssr.mjs";
import { a as literal, c as string, o as number, r as discriminatedUnion, s as object } from "../_libs/zod.mjs";
import { i as faqListSchema, n as contentSchema, o as teamListSchema, r as factListSchema, t as articleListSchema } from "./schema-BkSLwOoC.mjs";
import { d as whatsappSaveSchema, u as simulateSchema } from "./whatsapp-BuUS6Hlp.mjs";
import { t as createServerRpc } from "./createServerRpc-A6pJPYTF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api-s83bD9Y8.js
/**
* Server functions for the public pages (published content only) and for the
* content console (every one behind `requireAdmin`). Server code is imported
* dynamically, as in `src/lib/brief.ts`, so it never ships to the browser.
*/
var content = () => import("./content.server-Betn6HyW.mjs");
var auth = () => import("./auth.server-BoClezSG.mjs");
var getTeamAndFacts_createServerFn_handler = createServerRpc({
	id: "3b5f4c70f3acab549025e0a226fbf6ffd8c4657e57912aa8bedd38b631108a07",
	name: "getTeamAndFacts",
	filename: "src/lib/cms/api.ts"
}, (opts) => getTeamAndFacts.__executeServer(opts));
var getTeamAndFacts = createServerFn({ method: "GET" }).handler(getTeamAndFacts_createServerFn_handler, async () => {
	const { team, aboutFacts } = await (await content()).publicContent();
	return {
		team,
		aboutFacts
	};
});
var getFaqs_createServerFn_handler = createServerRpc({
	id: "47fded03e66f27cfdb56c5f59ca75ccac7f1134a914f28ea4442a74d46794588",
	name: "getFaqs",
	filename: "src/lib/cms/api.ts"
}, (opts) => getFaqs.__executeServer(opts));
var getFaqs = createServerFn({ method: "GET" }).handler(getFaqs_createServerFn_handler, async () => {
	return (await (await content()).publicContent()).faqs;
});
var getArticleList_createServerFn_handler = createServerRpc({
	id: "df790591e1a3358abca947266aba29869a07182ce4816ea65b72874b3f875101",
	name: "getArticleList",
	filename: "src/lib/cms/api.ts"
}, (opts) => getArticleList.__executeServer(opts));
var getArticleList = createServerFn({ method: "GET" }).handler(getArticleList_createServerFn_handler, async () => {
	const { articles } = await (await content()).publicContent();
	return articles.map(({ slug, title, description, date }) => ({
		slug,
		title,
		description,
		date
	}));
});
var getArticleBySlug_createServerFn_handler = createServerRpc({
	id: "298ad4ff3b19a45d8d7213a1d9026372491ac2d2960d71a6e9cbf14dd1f8d656",
	name: "getArticleBySlug",
	filename: "src/lib/cms/api.ts"
}, (opts) => getArticleBySlug.__executeServer(opts));
var getArticleBySlug = createServerFn({ method: "GET" }).inputValidator(object({ slug: string().max(80) })).handler(getArticleBySlug_createServerFn_handler, async ({ data }) => {
	const { articles } = await (await content()).publicContent();
	return articles.find((article) => article.slug === data.slug) ?? null;
});
var cmsSession_createServerFn_handler = createServerRpc({
	id: "2d8ab58888b36855d2ad1dc08e4e63a12ed92e8c64665bf97228c8fbb8a927a4",
	name: "cmsSession",
	filename: "src/lib/cms/api.ts"
}, (opts) => cmsSession.__executeServer(opts));
var cmsSession = createServerFn({ method: "GET" }).handler(cmsSession_createServerFn_handler, async () => (await auth()).sessionState());
var credentials = object({
	username: string().max(100),
	password: string().max(200)
});
var cmsLogin_createServerFn_handler = createServerRpc({
	id: "039fc4aa7d08f63388d01f6a45c8de649e21a8551f61b43f99204bc394b6d45f",
	name: "cmsLogin",
	filename: "src/lib/cms/api.ts"
}, (opts) => cmsLogin.__executeServer(opts));
var cmsLogin = createServerFn({ method: "POST" }).inputValidator(credentials).handler(cmsLogin_createServerFn_handler, async ({ data }) => (await auth()).login(data.username, data.password));
var cmsLogout_createServerFn_handler = createServerRpc({
	id: "4ee2a582b237c91ed4e320f6ae0244e29e98ae63482d8a2cf9151984dc88904f",
	name: "cmsLogout",
	filename: "src/lib/cms/api.ts"
}, (opts) => cmsLogout.__executeServer(opts));
var cmsLogout = createServerFn({ method: "POST" }).handler(cmsLogout_createServerFn_handler, async () => (await auth()).logout());
var cmsRequestReset_createServerFn_handler = createServerRpc({
	id: "192de2e2ee839cd7b66633c46379dfe257faa21ded3cada65e932c8b1fed9758",
	name: "cmsRequestReset",
	filename: "src/lib/cms/api.ts"
}, (opts) => cmsRequestReset.__executeServer(opts));
var cmsRequestReset = createServerFn({ method: "POST" }).inputValidator(object({ username: string().max(100) })).handler(cmsRequestReset_createServerFn_handler, async ({ data }) => (await auth()).requestResetCode(data.username));
var cmsResetPassword_createServerFn_handler = createServerRpc({
	id: "0e07f73a707bb1f57016a6cc37efa47acfce2f032becc7dc561ef13acdc4b93c",
	name: "cmsResetPassword",
	filename: "src/lib/cms/api.ts"
}, (opts) => cmsResetPassword.__executeServer(opts));
var cmsResetPassword = createServerFn({ method: "POST" }).inputValidator(object({
	username: string().max(100),
	code: string().max(20),
	password: string().max(300),
	confirm: string().max(300)
})).handler(cmsResetPassword_createServerFn_handler, async ({ data }) => (await auth()).resetPassword(data.username, data.code, data.password, data.confirm));
var cmsChangePassword_createServerFn_handler = createServerRpc({
	id: "61c01d9f0719454acbe876c9158904bb7ed86f6531fe1776dae8f90c99f4a844",
	name: "cmsChangePassword",
	filename: "src/lib/cms/api.ts"
}, (opts) => cmsChangePassword.__executeServer(opts));
var cmsChangePassword = createServerFn({ method: "POST" }).inputValidator(object({
	current: string().max(300),
	next: string().max(300),
	confirm: string().max(300)
})).handler(cmsChangePassword_createServerFn_handler, async ({ data }) => (await auth()).changePassword(data.current, data.next, data.confirm));
var cmsSignOutEverywhere_createServerFn_handler = createServerRpc({
	id: "03376851840497750734e54fb32812ceb1f0292a824f6c9e185ce9e6f0e7e053",
	name: "cmsSignOutEverywhere",
	filename: "src/lib/cms/api.ts"
}, (opts) => cmsSignOutEverywhere.__executeServer(opts));
var cmsSignOutEverywhere = createServerFn({ method: "POST" }).handler(cmsSignOutEverywhere_createServerFn_handler, async () => (await auth()).signOutEverywhere());
var cmsLoad_createServerFn_handler = createServerRpc({
	id: "5da76a4b9467a34499d827ad745fcf2048335a0c1c390eefb9cfa1891920e8cc",
	name: "cmsLoad",
	filename: "src/lib/cms/api.ts"
}, (opts) => cmsLoad.__executeServer(opts));
var cmsLoad = createServerFn({ method: "GET" }).handler(cmsLoad_createServerFn_handler, async () => {
	const store = await (await auth()).requireAdmin();
	const { adminContent, hasImportUndo } = await content();
	return {
		content: await adminContent(store),
		canUndoImport: await hasImportUndo(store)
	};
});
var cmsActivity_createServerFn_handler = createServerRpc({
	id: "3bd77fe6e64998b685c02dcc4fdea93ad6b6bd8c565449a1e574d8ac1b3aacf0",
	name: "cmsActivity",
	filename: "src/lib/cms/api.ts"
}, (opts) => cmsActivity.__executeServer(opts));
var cmsActivity = createServerFn({ method: "GET" }).handler(cmsActivity_createServerFn_handler, async () => {
	const { requireAdmin, readActivity } = await auth();
	return readActivity(await requireAdmin());
});
var saveInput = discriminatedUnion("section", [
	object({
		section: literal("team"),
		rev: number().int(),
		value: teamListSchema
	}),
	object({
		section: literal("articles"),
		rev: number().int(),
		value: articleListSchema
	}),
	object({
		section: literal("faqs"),
		rev: number().int(),
		value: faqListSchema
	}),
	object({
		section: literal("aboutFacts"),
		rev: number().int(),
		value: factListSchema
	})
]);
var cmsSave_createServerFn_handler = createServerRpc({
	id: "bf0c9a4a3f2ff5080815fcf444b16ef6ebb55a9d967b4bc91f928f216fe4e52b",
	name: "cmsSave",
	filename: "src/lib/cms/api.ts"
}, (opts) => cmsSave.__executeServer(opts));
var cmsSave = createServerFn({ method: "POST" }).inputValidator(saveInput).handler(cmsSave_createServerFn_handler, async ({ data }) => {
	const store = await (await auth()).requireAdmin();
	return (await content()).saveSection(store, data.section, data.value, data.rev);
});
var cmsImport_createServerFn_handler = createServerRpc({
	id: "32236bfc553857cc6875324accf7f5b015d84e754b87802ec6a07b167720b71b",
	name: "cmsImport",
	filename: "src/lib/cms/api.ts"
}, (opts) => cmsImport.__executeServer(opts));
var cmsImport = createServerFn({ method: "POST" }).inputValidator(contentSchema).handler(cmsImport_createServerFn_handler, async ({ data }) => {
	const store = await (await auth()).requireAdmin();
	return (await content()).importContent(store, data);
});
var cmsUndoImport_createServerFn_handler = createServerRpc({
	id: "02ff3a322226b33d03dacb58716e340dd446be4f1380a680db53f1e15c5b242e",
	name: "cmsUndoImport",
	filename: "src/lib/cms/api.ts"
}, (opts) => cmsUndoImport.__executeServer(opts));
var cmsUndoImport = createServerFn({ method: "POST" }).handler(cmsUndoImport_createServerFn_handler, async () => {
	const store = await (await auth()).requireAdmin();
	return (await content()).undoImport(store);
});
var whatsapp = () => import("./whatsapp.server-CXELqNxa.mjs");
var cmsWhatsappStatus_createServerFn_handler = createServerRpc({
	id: "1e40c1520e954c90a73bc56424878065a4b45490d3b252850e4057d5d378cc07",
	name: "cmsWhatsappStatus",
	filename: "src/lib/cms/api.ts"
}, (opts) => cmsWhatsappStatus.__executeServer(opts));
var cmsWhatsappStatus = createServerFn({ method: "GET" }).handler(cmsWhatsappStatus_createServerFn_handler, async () => {
	const store = await (await auth()).requireAdmin();
	return (await whatsapp()).whatsappStatus(store);
});
var cmsWhatsappSave_createServerFn_handler = createServerRpc({
	id: "8675bbf5843824cc25dd98f8d951b9bf16d1508cbe935facfb969432ced71d0c",
	name: "cmsWhatsappSave",
	filename: "src/lib/cms/api.ts"
}, (opts) => cmsWhatsappSave.__executeServer(opts));
var cmsWhatsappSave = createServerFn({ method: "POST" }).inputValidator(whatsappSaveSchema).handler(cmsWhatsappSave_createServerFn_handler, async ({ data }) => {
	const store = await (await auth()).requireAdmin();
	return (await whatsapp()).saveWhatsappSettings(store, data);
});
var cmsWhatsappCheck_createServerFn_handler = createServerRpc({
	id: "84140b5ec61054d124470b6d8b4018ac9c9c277b3daafa924241c9ce72145aec",
	name: "cmsWhatsappCheck",
	filename: "src/lib/cms/api.ts"
}, (opts) => cmsWhatsappCheck.__executeServer(opts));
var cmsWhatsappCheck = createServerFn({ method: "POST" }).handler(cmsWhatsappCheck_createServerFn_handler, async () => {
	const store = await (await auth()).requireAdmin();
	return (await whatsapp()).checkConnection(store);
});
var cmsWhatsappSimulate_createServerFn_handler = createServerRpc({
	id: "9681a59d11a928f7f349a0d94f5e78d3331ab8c99a15e19fb4188e108e111074",
	name: "cmsWhatsappSimulate",
	filename: "src/lib/cms/api.ts"
}, (opts) => cmsWhatsappSimulate.__executeServer(opts));
var cmsWhatsappSimulate = createServerFn({ method: "POST" }).inputValidator(simulateSchema).handler(cmsWhatsappSimulate_createServerFn_handler, async ({ data }) => {
	const store = await (await auth()).requireAdmin();
	return (await whatsapp()).simulate(store, data);
});
var cmsWhatsappSend_createServerFn_handler = createServerRpc({
	id: "a69bf7be3b2abf3b69507fad6c537269e4f3a55070d2c387218edc597f1b5fa5",
	name: "cmsWhatsappSend",
	filename: "src/lib/cms/api.ts"
}, (opts) => cmsWhatsappSend.__executeServer(opts));
var cmsWhatsappSend = createServerFn({ method: "POST" }).inputValidator(simulateSchema.nullable()).handler(cmsWhatsappSend_createServerFn_handler, async ({ data }) => {
	const store = await (await auth()).requireAdmin();
	return (await whatsapp()).sendTest(store, data);
});
var cmsWhatsappOutbox_createServerFn_handler = createServerRpc({
	id: "af628e5c52f6c6a9e573e1a3fc2dc2f5c56a325de0189aa4261a15a0011deace",
	name: "cmsWhatsappOutbox",
	filename: "src/lib/cms/api.ts"
}, (opts) => cmsWhatsappOutbox.__executeServer(opts));
var cmsWhatsappOutbox = createServerFn({ method: "GET" }).handler(cmsWhatsappOutbox_createServerFn_handler, async () => {
	const store = await (await auth()).requireAdmin();
	return (await whatsapp()).readOutbox(store);
});
var cmsWhatsappClearOutbox_createServerFn_handler = createServerRpc({
	id: "0532ede24d6505dd4e018d416aab3771b91386db558caf0e5595cb6e70af233e",
	name: "cmsWhatsappClearOutbox",
	filename: "src/lib/cms/api.ts"
}, (opts) => cmsWhatsappClearOutbox.__executeServer(opts));
var cmsWhatsappClearOutbox = createServerFn({ method: "POST" }).handler(cmsWhatsappClearOutbox_createServerFn_handler, async () => {
	const store = await (await auth()).requireAdmin();
	return (await whatsapp()).clearOutbox(store);
});
//#endregion
export { cmsActivity_createServerFn_handler, cmsChangePassword_createServerFn_handler, cmsImport_createServerFn_handler, cmsLoad_createServerFn_handler, cmsLogin_createServerFn_handler, cmsLogout_createServerFn_handler, cmsRequestReset_createServerFn_handler, cmsResetPassword_createServerFn_handler, cmsSave_createServerFn_handler, cmsSession_createServerFn_handler, cmsSignOutEverywhere_createServerFn_handler, cmsUndoImport_createServerFn_handler, cmsWhatsappCheck_createServerFn_handler, cmsWhatsappClearOutbox_createServerFn_handler, cmsWhatsappOutbox_createServerFn_handler, cmsWhatsappSave_createServerFn_handler, cmsWhatsappSend_createServerFn_handler, cmsWhatsappSimulate_createServerFn_handler, cmsWhatsappStatus_createServerFn_handler, getArticleBySlug_createServerFn_handler, getArticleList_createServerFn_handler, getFaqs_createServerFn_handler, getTeamAndFacts_createServerFn_handler };
