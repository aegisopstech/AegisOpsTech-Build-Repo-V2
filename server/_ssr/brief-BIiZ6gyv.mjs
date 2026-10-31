import { l as practiceLabels, u as sectorOptions } from "./site-B37hbEET.mjs";
import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { a as object, n as email, o as string, t as _enum } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brief-BIiZ6gyv.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
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
var sendBrief_createServerFn_handler = createServerRpc({
	id: "aa8fdfe33933893dd128448d3ecf0226427bc1e9db5e52ff6afb656b137bb648",
	name: "sendBrief",
	filename: "src/lib/brief.ts"
}, (opts) => sendBrief.__executeServer(opts));
var sendBrief = createServerFn({ method: "POST" }).inputValidator(briefSchema).handler(sendBrief_createServerFn_handler, async ({ data }) => {
	const { deliverBrief } = await import("./brief.server-CvFkGrtW.mjs");
	return deliverBrief(data);
});
//#endregion
export { sendBrief_createServerFn_handler };
