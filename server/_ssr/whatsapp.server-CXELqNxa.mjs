import { a as SAMPLE_PARAMS, i as PARAM_LIMITS, l as renderTemplate, r as PARAM_LABELS } from "./whatsapp-BuUS6Hlp.mjs";
import { logActivity, n as getStore, t as cmsEnv } from "./auth.server-BoClezSG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/whatsapp.server-CXELqNxa.js
/**
* WhatsApp brief alerts through Meta's Cloud API. A message the business
* starts must use an approved template, so each alert is the template with
* five variables (see TEMPLATE_BODY in ./whatsapp).
*
* Settings saved in the console (KV key `settings:whatsapp`) win; anything not
* set there falls back to the Worker secrets WHATSAPP_TOKEN,
* WHATSAPP_PHONE_NUMBER_ID, WHATSAPP_TO and WHATSAPP_TEMPLATE.
*/
var KEY = "settings:whatsapp";
var OUTBOX = "whatsapp:outbox";
var OUTBOX_LIMIT = 30;
var GRAPH = "https://graph.facebook.com";
function parseRecipients(value) {
	return (value ?? "").split(",").map((n) => n.replace(/[^\d]/g, "")).filter(Boolean);
}
async function stored(store) {
	if (!store) return {};
	try {
		const saved = await store.get(KEY) ?? {};
		if (!saved.senders && saved.phoneNumberId) saved.senders = [{
			id: "main",
			label: "Main",
			phoneNumberId: saved.phoneNumberId
		}];
		return saved;
	} catch (err) {
		console.error("[whatsapp] settings read failed; using the Worker secrets", err);
		return {};
	}
}
function pick(fromConsole, fromSecret, empty) {
	if (fromConsole !== void 0 && !empty(fromConsole)) return {
		value: fromConsole,
		source: "console"
	};
	if (fromSecret !== void 0 && !empty(fromSecret)) return {
		value: fromSecret,
		source: "secret"
	};
	return {
		value: void 0,
		source: "none"
	};
}
async function resolve(store) {
	const saved = await stored(store);
	const blank = (v) => !v;
	const token = pick(saved.token, await cmsEnv("WHATSAPP_TOKEN"), blank);
	const recipients = pick(saved.recipients, parseRecipients(await cmsEnv("WHATSAPP_TO")), (v) => v.length === 0);
	const template = pick(saved.template, await cmsEnv("WHATSAPP_TEMPLATE"), blank);
	const apiVersion = pick(saved.apiVersion, void 0, blank);
	const wabaId = pick(saved.wabaId, await cmsEnv("WHATSAPP_BUSINESS_ACCOUNT_ID"), blank);
	const secretPhone = await cmsEnv("WHATSAPP_PHONE_NUMBER_ID");
	const senders = saved.senders?.length ? saved.senders.map((s) => ({
		...s,
		source: "console"
	})) : secretPhone ? [{
		id: "secret",
		label: "Worker secret",
		phoneNumberId: secretPhone,
		source: "secret"
	}] : [];
	const activeSender = senders.find((s) => s.id === saved.activeSender) ?? senders[0] ?? null;
	return {
		saved,
		mode: saved.mode ?? "live",
		token,
		recipients,
		template,
		apiVersion,
		wabaId,
		senders,
		activeSender
	};
}
function missingFor(r) {
	return [
		r.token.value ? null : "access token",
		r.activeSender ? null : "sender phone number ID",
		r.recipients.value?.length ? null : "recipient numbers"
	].filter((item) => item !== null);
}
/** Template variables may not hold newlines, tabs or long runs of spaces, and are cut to a length. */
function prepareParams(raw) {
	const truncated = [];
	return {
		params: raw.map((value, i) => {
			const flat = value.replace(/\s+/g, " ").trim();
			const max = PARAM_LIMITS[i] ?? 400;
			if (flat.length <= max) return flat;
			truncated.push(PARAM_LABELS[i] ?? `Value ${i + 1}`);
			return `${flat.slice(0, max - 1)}…`;
		}),
		truncated
	};
}
function briefParams(brief) {
	return [
		brief.name,
		brief.organization,
		brief.interest,
		brief.email,
		brief.problem
	];
}
function buildRequest(apiVersion, phoneNumberId, template, to, params) {
	return {
		url: `${GRAPH}/${apiVersion}/${phoneNumberId}/messages`,
		body: {
			messaging_product: "whatsapp",
			to,
			type: "template",
			template: {
				name: template,
				language: { code: "en" },
				components: [{
					type: "body",
					parameters: params.map((text) => ({
						type: "text",
						text
					}))
				}]
			}
		}
	};
}
/** Sends one template message and returns Meta's message ID; throws with Meta's response on failure. */
async function sendOne(r, sender, to, params) {
	const request = buildRequest(r.apiVersion.value ?? "v23.0", sender.phoneNumberId, r.template.value ?? "new_brief", to, params);
	const res = await fetch(request.url, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${r.token.value}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify(request.body)
	});
	const text = await res.text();
	if (!res.ok) throw new Error(`WhatsApp ${res.status}: ${text}`);
	try {
		return JSON.parse(text).messages?.[0]?.id;
	} catch {
		return;
	}
}
/** Meta's error message from a failed call, without the whole JSON envelope. */
function metaError(err) {
	const text = err instanceof Error ? err.message : String(err);
	const json = text.indexOf("{");
	if (json >= 0) try {
		const e = JSON.parse(text.slice(json)).error;
		if (e?.message) return [
			text.slice(0, json).trim().replace(/:$/, ""),
			e.message,
			e.error_data?.details,
			e.code ? `(code ${e.code})` : ""
		].filter(Boolean).join(" — ");
	} catch {}
	return text.slice(0, 500);
}
async function graphGet(r, path) {
	const res = await fetch(`${GRAPH}/${r.apiVersion.value ?? "v23.0"}/${path}`, { headers: { Authorization: `Bearer ${r.token.value}` } });
	const text = await res.text();
	if (!res.ok) throw new Error(`WhatsApp ${res.status}: ${text}`);
	return JSON.parse(text);
}
async function record(store, entries) {
	if (!store || !entries.length) return;
	try {
		const current = await store.get(OUTBOX) ?? [];
		await store.put(OUTBOX, [...entries, ...current].slice(0, OUTBOX_LIMIT), { ttl: 2592e3 });
	} catch (err) {
		console.error("[whatsapp] delivery log write failed", err);
	}
}
async function readOutbox(store) {
	return await store.get(OUTBOX) ?? [];
}
async function clearOutbox(store) {
	await store.delete(OUTBOX);
	await logActivity(store, "WhatsApp delivery log cleared");
}
/**
* Called for every contact-form brief. Off: nothing. Simulation: the alert is
* written to the delivery log, nothing is sent. Live: sent from the active
* sender to every recipient. Never throws; failures are logged.
*/
async function alertTeamOnWhatsApp(brief) {
	const store = await getStore();
	const r = await resolve(store);
	if (r.mode === "off") return;
	const { params } = prepareParams(briefParams(brief));
	const at = (/* @__PURE__ */ new Date()).toISOString();
	const sender = r.activeSender ? `${r.activeSender.label} (${r.activeSender.phoneNumberId})` : null;
	if (r.mode === "simulate") {
		await record(store, (r.recipients.value?.length ? r.recipients.value : ["(no recipients set)"]).map((to) => ({
			at,
			kind: "brief",
			mode: "simulated",
			sender,
			to,
			ok: true,
			params
		})));
		return;
	}
	if (missingFor(r).length) return;
	await record(store, await Promise.all(r.recipients.value.map(async (to) => {
		try {
			const messageId = await sendOne(r, r.activeSender, to, params);
			return {
				at,
				kind: "brief",
				mode: "live",
				sender,
				to,
				ok: true,
				messageId,
				params
			};
		} catch (err) {
			console.error("[brief] WhatsApp alert failed:", err);
			return {
				at,
				kind: "brief",
				mode: "live",
				sender,
				to,
				ok: false,
				error: metaError(err),
				params
			};
		}
	})));
}
async function whatsappStatus(store) {
	const r = await resolve(store);
	const missing = missingFor(r);
	return {
		mode: r.mode,
		configured: missing.length === 0,
		missing,
		senders: r.senders,
		sendersSource: r.senders[0]?.source ?? "none",
		activeSender: r.activeSender,
		recipients: {
			value: r.recipients.value ?? [],
			source: r.recipients.source,
			console: r.saved.recipients ?? null
		},
		template: {
			value: r.template.value ?? "new_brief",
			source: r.template.value ? r.template.source : "default",
			console: r.saved.template ?? null
		},
		apiVersion: {
			value: r.apiVersion.value ?? "v23.0",
			source: r.apiVersion.value ? "console" : "default",
			console: r.saved.apiVersion ?? null
		},
		wabaId: {
			value: r.wabaId.value ?? null,
			source: r.wabaId.source,
			console: r.saved.wabaId ?? null
		},
		token: {
			set: Boolean(r.token.value),
			last4: r.token.value ? r.token.value.slice(-4) : null,
			source: r.token.source,
			consoleSet: Boolean(r.saved.token)
		},
		consoleSenders: r.saved.senders ?? [],
		consoleActiveSender: r.saved.activeSender ?? null,
		updatedAt: r.saved.updatedAt ?? null
	};
}
async function saveWhatsappSettings(store, input) {
	const before = await stored(store);
	const next = { ...before };
	delete next.phoneNumberId;
	const changes = [];
	const same = (a, b) => JSON.stringify(a ?? null) === JSON.stringify(b ?? null);
	if ((before.mode ?? "live") !== input.mode) changes.push(`mode → ${input.mode}`);
	next.mode = input.mode;
	if (!same(before.senders ?? [], input.senders)) changes.push(`senders (${input.senders.length}) updated`);
	if (input.senders.length) next.senders = input.senders;
	else delete next.senders;
	const active = input.activeSender ?? input.senders[0]?.id;
	if (before.activeSender !== active) {
		const label = input.senders.find((s) => s.id === active)?.label;
		if (label) changes.push(`site sends from “${label}”`);
	}
	if (active) next.activeSender = active;
	else delete next.activeSender;
	const optional = [
		[
			"recipients",
			input.recipients,
			`recipients (${input.recipients?.length ?? 0})`
		],
		[
			"template",
			input.template,
			"template name"
		],
		[
			"apiVersion",
			input.apiVersion,
			"API version"
		],
		[
			"wabaId",
			input.wabaId,
			"business account ID"
		]
	];
	for (const [key, value, label] of optional) {
		if (!same(before[key], value)) changes.push(value === null ? `${label} cleared` : `${label} set`);
		if (value === null) delete next[key];
		else next[key] = value;
	}
	if (input.token.action === "set") {
		next.token = input.token.value;
		changes.push(before.token ? "access token replaced" : "access token set");
	} else if (input.token.action === "clear" && before.token) {
		delete next.token;
		changes.push("access token removed");
	}
	next.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
	await store.put(KEY, next);
	await logActivity(store, "WhatsApp settings", changes.join("; ") || "saved with no changes");
	return whatsappStatus(store);
}
/** Asks Meta about each sender and the template, without sending anything. */
async function checkConnection(store) {
	const r = await resolve(store);
	if (!r.token.value) return { error: "Set the access token first." };
	if (!r.senders.length) return { error: "Add a sender phone number ID first." };
	const senders = await Promise.all(r.senders.map(async (s) => {
		try {
			const info = await graphGet(r, `${s.phoneNumberId}?fields=display_phone_number,verified_name,quality_rating`);
			return {
				id: s.id,
				label: s.label,
				phoneNumberId: s.phoneNumberId,
				ok: true,
				displayPhoneNumber: info.display_phone_number,
				verifiedName: info.verified_name,
				qualityRating: info.quality_rating
			};
		} catch (err) {
			return {
				id: s.id,
				label: s.label,
				phoneNumberId: s.phoneNumberId,
				ok: false,
				error: metaError(err)
			};
		}
	}));
	let template = { checked: false };
	if (r.wabaId.value) {
		const name = r.template.value ?? "new_brief";
		try {
			const list = await graphGet(r, `${r.wabaId.value}/message_templates?name=${encodeURIComponent(name)}&fields=name,status,language,category`);
			const found = list.data?.find((t) => t.name === name && (t.language === "en" || !t.language)) ?? list.data?.find((t) => t.name === name);
			template = found ? {
				checked: true,
				ok: found.status === "APPROVED" && found.language === "en",
				status: found.status,
				language: found.language,
				category: found.category
			} : {
				checked: true,
				ok: false,
				error: `No template named “${name}” in this WhatsApp Business Account.`
			};
		} catch (err) {
			template = {
				checked: true,
				ok: false,
				error: metaError(err)
			};
		}
	}
	const failed = senders.filter((s) => !s.ok).length;
	await logActivity(store, "WhatsApp connection check", `${senders.length - failed} of ${senders.length} sender(s) OK${template.checked ? `; template ${template.ok ? "OK" : "not ready"}` : ""}`);
	return {
		senders,
		template
	};
}
function chooseSender(r, senderId) {
	return (senderId ? r.senders.find((s) => s.id === senderId) : null) ?? r.activeSender;
}
/** The exact message and API requests a send would make, with the token masked. Sends nothing. */
async function simulate(store, input) {
	const r = await resolve(store);
	const sender = chooseSender(r, input.senderId);
	const recipients = input.recipients?.length ? input.recipients : r.recipients.value ?? [];
	const { params, truncated } = prepareParams(input.params);
	const template = r.template.value ?? "new_brief";
	const problems = [
		r.token.value ? null : "No access token is set, so a real send would fail.",
		sender ? null : "No sender phone number ID is set.",
		recipients.length ? null : "No recipients are set.",
		r.mode === "off" ? "Mode is Off: real briefs are not alerted at all." : null,
		r.mode === "simulate" ? "Mode is Simulation: real briefs are only logged, not sent." : null
	].filter((p) => p !== null);
	return {
		ok: Boolean(r.token.value && sender && recipients.length),
		problems,
		sender,
		template,
		params,
		truncated,
		text: renderTemplate(params),
		requests: (recipients.length ? recipients : ["<recipient>"]).map((to) => {
			const request = buildRequest(r.apiVersion.value ?? "v23.0", sender?.phoneNumberId ?? "<phone-number-id>", template, to, params);
			return {
				to,
				method: "POST",
				url: request.url,
				headers: {
					Authorization: r.token.value ? `Bearer …${r.token.value.slice(-4)}` : "Bearer <not set>",
					"Content-Type": "application/json"
				},
				body: JSON.stringify(request.body, null, 2)
			};
		})
	};
}
/** Really sends: the simulator's values (or the sample brief) from a chosen sender. */
async function sendTest(store, input) {
	const r = await resolve(store);
	const sender = chooseSender(r, input?.senderId ?? null);
	const recipients = input?.recipients?.length ? input.recipients : r.recipients.value ?? [];
	const missing = [
		r.token.value ? null : "access token",
		sender ? null : "sender phone number ID",
		recipients.length ? null : "recipient numbers"
	].filter(Boolean);
	if (missing.length) return {
		ok: false,
		error: `Not configured yet: missing ${missing.join(", ")}.`
	};
	const { params } = prepareParams(input?.params ?? SAMPLE_PARAMS);
	const at = (/* @__PURE__ */ new Date()).toISOString();
	const label = `${sender.label} (${sender.phoneNumberId})`;
	const results = await Promise.all(recipients.map(async (to) => {
		try {
			return {
				to,
				ok: true,
				messageId: await sendOne(r, sender, to, params)
			};
		} catch (err) {
			return {
				to,
				ok: false,
				error: metaError(err)
			};
		}
	}));
	await record(store, results.map((res) => ({
		at,
		kind: "test",
		mode: "live",
		sender: label,
		to: res.to,
		ok: res.ok,
		messageId: res.messageId,
		error: res.error,
		params
	})));
	const failed = results.filter((res) => !res.ok).length;
	await logActivity(store, "WhatsApp test message", `from “${sender.label}”: ${failed ? `${failed} of ${results.length} failed` : `sent to ${results.length} number(s)`}`);
	return {
		ok: true,
		sender: label,
		results
	};
}
//#endregion
export { alertTeamOnWhatsApp, briefParams, checkConnection, clearOutbox, readOutbox, saveWhatsappSettings, sendTest, simulate, whatsappStatus };
