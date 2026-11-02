import { u as interestOptions } from "./site-DRS0GyJG.mjs";
import { a as object, n as email, o as string, t as _enum } from "../_libs/zod.mjs";
import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brief-B6i4kKyr.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
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
var sendBrief_createServerFn_handler = createServerRpc({
	id: "aa8fdfe33933893dd128448d3ecf0226427bc1e9db5e52ff6afb656b137bb648",
	name: "sendBrief",
	filename: "src/lib/brief.ts"
}, (opts) => sendBrief.__executeServer(opts));
var sendBrief = createServerFn({ method: "POST" }).inputValidator(briefSchema).handler(sendBrief_createServerFn_handler, async ({ data }) => {
	const { deliverBrief } = await import("./brief.server-yDJbteBB.mjs");
	return deliverBrief(data);
});
//#endregion
export { sendBrief_createServerFn_handler };
