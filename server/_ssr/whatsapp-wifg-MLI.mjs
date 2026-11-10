import { a as literal, c as string, n as array, r as discriminatedUnion, s as object, t as _enum } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/whatsapp-wifg-MLI.js
/**
* WhatsApp brief alerts: what the console and the server agree on. The
* template body must match the five parameters the alert sends, in this
* order: name, organization, interest, email, problem.
*/
var DEFAULT_TEMPLATE = "new_brief";
var DEFAULT_API_VERSION = "v23.0";
/** Common template language codes, as WhatsApp Manager names them. Any valid code can be typed. */
var LANGUAGE_OPTIONS = [
	{
		code: "en",
		label: "English"
	},
	{
		code: "en_US",
		label: "English (US)"
	},
	{
		code: "en_GB",
		label: "English (UK)"
	},
	{
		code: "ur",
		label: "Urdu"
	},
	{
		code: "ar",
		label: "Arabic"
	},
	{
		code: "hi",
		label: "Hindi"
	}
];
var TEMPLATE_BODY = [
	"New project brief from {{1}} ({{2}}).",
	"Interest: {{3}}",
	"Email: {{4}}",
	"Problem: {{5}}",
	"",
	"The full brief is in the team inbox."
].join("\n");
var PARAM_LABELS = [
	"Name",
	"Organization",
	"Area of interest",
	"Work email",
	"Problem"
];
/** Lengths each template variable is cut to before sending. */
var PARAM_LIMITS = [
	120,
	160,
	80,
	254,
	400
];
var SAMPLE_PARAMS = [
	"Test Visitor",
	"AegisOps console test",
	"Not sure yet",
	"test@example.com",
	"This is a test alert sent from the content console. No visitor sent this brief."
];
/** The message as the recipient sees it with the standard template body. */
function renderTemplate(params) {
	return TEMPLATE_BODY.replace(/\{\{(\d)\}\}/g, (_, n) => params[Number(n) - 1] ?? "");
}
var modes = [
	"live",
	"simulate",
	"off"
];
var modeLabels = {
	live: "Live: send each brief on WhatsApp",
	simulate: "Simulation: log each brief here, send nothing",
	off: "Off: no WhatsApp alerts"
};
var phoneNumberIdSchema = string().regex(/^\d{5,25}$/, "Digits only, as shown under WhatsApp → API Setup");
var recipientSchema = string().regex(/^[1-9]\d{7,14}$/, "Digits only, starting with the country code, not 0 (e.g. 923001234567)");
var templateNameSchema = string().regex(/^[a-z0-9_]{1,512}$/, "Lowercase letters, digits and underscores, exactly as in WhatsApp Manager");
var tokenSchema = string().min(20, "That does not look like a Meta access token").max(2e3).regex(/^\S+$/, "No spaces or line breaks");
var apiVersionSchema = string().regex(/^v\d{1,2}\.\d$/, "Like v23.0");
var languageSchema = string().regex(/^[a-z]{2,3}(_[A-Z]{2})?$/, "A language code as in WhatsApp Manager, e.g. en, en_US, ur");
var wabaIdSchema = string().regex(/^\d{5,25}$/, "Digits only (WhatsApp Manager → Account info)");
var senderSchema = object({
	id: string().regex(/^[a-z0-9]{1,24}$/),
	label: string().trim().min(1, "Give each sender a name").max(60),
	phoneNumberId: phoneNumberIdSchema
});
/**
* A save from the console. For recipients, template, API version and account
* ID, null clears the console value so the Worker secret (or default)
* applies; an empty sender list does the same for WHATSAPP_PHONE_NUMBER_ID.
* The token is only ever sent this way, never read back.
*/
var whatsappSaveSchema = object({
	mode: _enum(modes),
	senders: array(senderSchema).max(10),
	activeSender: string().nullable(),
	recipients: array(recipientSchema).min(1).max(10).nullable(),
	template: templateNameSchema.nullable(),
	language: languageSchema.nullable(),
	apiVersion: apiVersionSchema.nullable(),
	wabaId: wabaIdSchema.nullable(),
	token: discriminatedUnion("action", [
		object({ action: literal("keep") }),
		object({
			action: literal("set"),
			value: tokenSchema
		}),
		object({ action: literal("clear") })
	])
}).superRefine((value, ctx) => {
	const ids = /* @__PURE__ */ new Set();
	for (const sender of value.senders) {
		if (ids.has(sender.phoneNumberId)) ctx.addIssue({
			code: "custom",
			path: ["senders"],
			message: `Phone number ID ${sender.phoneNumberId} is listed twice`
		});
		ids.add(sender.phoneNumberId);
	}
	if (value.activeSender && !value.senders.some((s) => s.id === value.activeSender)) ctx.addIssue({
		code: "custom",
		path: ["activeSender"],
		message: "Choose which sender the site uses"
	});
});
/** Five template values for a simulated or test message. */
var paramsSchema = array(string().trim().min(1, "Fill in every value").max(2e3)).length(5);
var simulateSchema = object({
	senderId: string().max(24).nullable(),
	params: paramsSchema,
	recipients: array(recipientSchema).max(10).nullable()
});
//#endregion
export { PARAM_LIMITS as a, modeLabels as c, simulateSchema as d, whatsappSaveSchema as f, PARAM_LABELS as i, modes as l, DEFAULT_TEMPLATE as n, SAMPLE_PARAMS as o, LANGUAGE_OPTIONS as r, TEMPLATE_BODY as s, DEFAULT_API_VERSION as t, renderTemplate as u };
