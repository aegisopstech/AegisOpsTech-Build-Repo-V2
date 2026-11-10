import { d as interestOptions } from "./site-CFNH31A9.mjs";
import { t as createServerFn } from "./ssr.mjs";
import { c as string, i as email, s as object, t as _enum } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-A6pJPYTF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brief-BfNER_AQ.js
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
	const { deliverBrief } = await import("./brief.server-Dc0MMUet.mjs");
	return deliverBrief(data);
});
//#endregion
export { sendBrief_createServerFn_handler };
