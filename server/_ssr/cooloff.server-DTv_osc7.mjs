import { o as getRequestHeader, s as getRequestIP$1 } from "./ssr.mjs";
import { logActivity, n as getStore } from "./auth.server-vnv3xF25.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cooloff.server-DTv_osc7.js
/**
* Contact-form cool-off: after a brief is sent, the same visitor cannot send
* another for COOLOFF_HOURS. A visitor is matched by network address or by
* email, each stored only as a SHA-256 hash. Keys carry a version number so
* the console can clear every cool-off at once by bumping it.
*
* If storage is unavailable the form still works (fail open): the cool-off is
* a guard against misuse, and losing a real brief would be worse.
*/
var COOLOFF_HOURS = 2;
var COOLOFF_SECONDS = 7200;
var VERSION_KEY = "brief:cooloff-version";
async function hash(value) {
	const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
	return Array.from(new Uint8Array(digest).slice(0, 16), (b) => b.toString(16).padStart(2, "0")).join("");
}
function visitorIp() {
	try {
		return getRequestHeader("cf-connecting-ip") ?? getRequestIP$1({ xForwardedFor: true }) ?? void 0;
	} catch {
		return;
	}
}
async function keysFor(store, email) {
	const version = await store.get(VERSION_KEY) ?? 0;
	const keys = [`brief:cool:${version}:email:${await hash(email.trim().toLowerCase())}`];
	const ip = visitorIp();
	if (ip) keys.push(`brief:cool:${version}:ip:${await hash(ip)}`);
	return keys;
}
/** "1 h 35 min", "40 min", "1 min". */
function remaining(ms) {
	const minutes = Math.max(1, Math.ceil(ms / 6e4));
	const h = Math.floor(minutes / 60);
	const m = minutes % 60;
	return h ? `${h} h${m ? ` ${m} min` : ""}` : `${m} min`;
}
async function checkCooloff(email) {
	try {
		const store = await getStore();
		if (!store) return {
			ok: true,
			keys: []
		};
		const keys = await keysFor(store, email);
		const now = Date.now();
		let latest = 0;
		for (const key of keys) {
			const entry = await store.get(key);
			if (entry && entry.until > now) latest = Math.max(latest, entry.until);
		}
		return latest ? {
			ok: false,
			wait: remaining(latest - now)
		} : {
			ok: true,
			keys
		};
	} catch (err) {
		console.error("[brief] cool-off check failed; allowing the brief", err);
		return {
			ok: true,
			keys: []
		};
	}
}
/** Starts the cool-off once a brief has really been sent. */
async function startCooloff(keys) {
	if (!keys.length) return;
	try {
		const store = await getStore();
		if (!store) return;
		const until = Date.now() + COOLOFF_SECONDS * 1e3;
		await Promise.all(keys.map((key) => store.put(key, { until }, { ttl: COOLOFF_SECONDS })));
	} catch (err) {
		console.error("[brief] cool-off could not be saved", err);
	}
}
/** Lets everyone send again straight away (for testing, or after a mistake). */
async function resetCooloffs(store) {
	const version = await store.get(VERSION_KEY) ?? 0;
	await store.put(VERSION_KEY, version + 1);
	await logActivity(store, "Contact-form cool-offs reset");
}
//#endregion
export { COOLOFF_HOURS, checkCooloff, resetCooloffs, startCooloff };
