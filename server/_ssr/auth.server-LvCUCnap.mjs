import { a as getCookie, c as setCookie$1, i as deleteCookie$1, l as setResponseHeader, o as getRequestHeader, s as getRequestIP$1 } from "./ssr.mjs";
import { t as env } from "./env.server-Cm8yps8b.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth.server-LvCUCnap.js
/** The KV binding name, set as `kv_namespaces` in vite.config.ts. */
var BINDING = "CMS_KV";
function workersStore(kv) {
	return {
		async get(key) {
			return await kv.get(key, "json");
		},
		async put(key, value, options) {
			const ttl = options?.ttl ? Math.max(60, Math.ceil(options.ttl)) : void 0;
			await kv.put(key, JSON.stringify(value), ttl ? { expirationTtl: ttl } : void 0);
		},
		async delete(key) {
			await kv.delete(key);
		}
	};
}
/**
* Workers KV on Cloudflare (nitro puts the bindings on `globalThis.__env__`),
* a JSON file under `.cms-dev/` in `npm run dev`, otherwise null: the public
* pages then fall back to the static content and the console says storage
* is not configured.
*/
async function getStore() {
	const kv = globalThis.__env__?.[BINDING];
	if (kv && typeof kv.get === "function") return workersStore(kv);
	return null;
}
/** A Worker variable or secret; in `npm run dev` also read from `.dev.vars`. */
async function cmsEnv(key) {
	return env(key);
}
/**
* Sign-in for the content console. One account, `root`.
*
* - The password is a PBKDF2 hash: the Worker secret CMS_ROOT_PASSWORD_HASH at
*   first, then the KV record `auth:password` once it is reset or changed.
* - The session is a signed cookie (HttpOnly, Secure, SameSite=Strict). It
*   carries the password record's `version`, so a reset, a change, or "sign
*   out everywhere" ends every other session.
* - Failed sign-ins lock an address after 5 tries and everyone after 20.
* - Reset codes are 6 digits, mailed from no-reply@, valid 10 minutes, used
*   once, and give up after 5 wrong tries.
*/
var USERNAME = "root";
var COOKIE = "__Host-aegis-cms";
var SESSION_SECONDS = 28800;
var PBKDF2_ITERATIONS = 1e5;
var MIN_PASSWORD = 12;
var LOGIN_PER_IP = {
	max: 5,
	seconds: 900
};
var LOGIN_ALL = {
	max: 20,
	seconds: 3600
};
var RESET_SENDS = {
	max: 3,
	seconds: 3600
};
var OTP_SECONDS = 600;
var OTP_TRIES = 5;
var LOG_LIMIT = 200;
var K = {
	password: "auth:password",
	sessionKey: "auth:session-key",
	otp: "auth:otp",
	log: "log:entries",
	loginIp: (ip) => `rl:login:${ip}`,
	loginAll: "rl:login:all",
	resetSends: "rl:reset-send"
};
var encoder = new TextEncoder();
function toB64url(bytes) {
	let binary = "";
	for (const byte of bytes) binary += String.fromCharCode(byte);
	return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function fromB64url(value) {
	const binary = atob(value.replace(/-/g, "+").replace(/_/g, "/"));
	return Uint8Array.from(binary, (char) => char.charCodeAt(0));
}
function sameString(a, b) {
	let diff = a.length ^ b.length;
	for (let i = 0; i < Math.max(a.length, b.length); i++) diff |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
	return diff === 0;
}
async function pbkdf2(password, salt, iterations) {
	const key = await crypto.subtle.importKey("raw", encoder.encode(password), "PBKDF2", false, ["deriveBits"]);
	const bits = await crypto.subtle.deriveBits({
		name: "PBKDF2",
		hash: "SHA-256",
		salt,
		iterations
	}, key, 256);
	return new Uint8Array(bits);
}
/** Same format as scripts/cms-password-hash.mjs: pbkdf2-sha256$<iterations>$<salt>$<hash>. */
async function hashPassword(password) {
	const salt = crypto.getRandomValues(/* @__PURE__ */ new Uint8Array(16));
	const hash = await pbkdf2(password, salt, PBKDF2_ITERATIONS);
	return `pbkdf2-sha256$${PBKDF2_ITERATIONS}$${toB64url(salt)}$${toB64url(hash)}`;
}
async function checkPassword(password, stored) {
	const [scheme, iter, salt, hash] = (stored ?? "").split("$");
	const iterations = Number(iter);
	const valid = scheme === "pbkdf2-sha256" && salt && hash && iterations > 0 && iterations <= PBKDF2_ITERATIONS;
	const derived = await pbkdf2(password, valid ? fromB64url(salt) : /* @__PURE__ */ new Uint8Array(16), valid ? iterations : PBKDF2_ITERATIONS);
	return Boolean(valid) && sameString(toB64url(derived), hash);
}
async function sha256(value) {
	return toB64url(new Uint8Array(await crypto.subtle.digest("SHA-256", encoder.encode(value))));
}
async function hmacKey(store) {
	let secret = await store.get(K.sessionKey);
	if (!secret) {
		secret = toB64url(crypto.getRandomValues(/* @__PURE__ */ new Uint8Array(32)));
		await store.put(K.sessionKey, secret);
	}
	return crypto.subtle.importKey("raw", fromB64url(secret), {
		name: "HMAC",
		hash: "SHA-256"
	}, false, ["sign"]);
}
async function sign(store, payload) {
	const mac = await crypto.subtle.sign("HMAC", await hmacKey(store), encoder.encode(payload));
	return toB64url(new Uint8Array(mac));
}
function clientIp() {
	return getRequestHeader("cf-connecting-ip") ?? getRequestIP$1({ xForwardedFor: true }) ?? "unknown";
}
/** Every console response: not indexed, not cached. */
function privateHeaders() {
	setResponseHeader("X-Robots-Tag", "noindex, nofollow");
	setResponseHeader("Cache-Control", "no-store");
}
async function requireStore() {
	const store = await getStore();
	if (!store) throw new Error("Content storage is not configured on this deployment (KV binding CMS_KV).");
	return store;
}
async function passwordRecord(store) {
	const stored = await store.get(K.password);
	if (stored) return stored;
	const fromSecret = await cmsEnv("CMS_ROOT_PASSWORD_HASH");
	return fromSecret ? {
		hash: fromSecret,
		version: 0,
		changedAt: ""
	} : null;
}
async function count(store, key) {
	const counter = await store.get(key);
	return counter && counter.until > Date.now() ? counter.n : 0;
}
async function bump(store, key, seconds) {
	const now = Date.now();
	const counter = await store.get(key);
	const live = counter && counter.until > now ? counter : {
		n: 0,
		until: now + seconds * 1e3
	};
	await store.put(key, {
		n: live.n + 1,
		until: live.until
	}, { ttl: (live.until - now) / 1e3 });
}
async function logActivity(store, action, detail) {
	const entries = await store.get(K.log) ?? [];
	entries.unshift({
		at: (/* @__PURE__ */ new Date()).toISOString(),
		action,
		detail,
		ip: clientIp()
	});
	await store.put(K.log, entries.slice(0, LOG_LIMIT));
}
async function readActivity(store) {
	return await store.get(K.log) ?? [];
}
async function startSession(store, version) {
	const payload = toB64url(encoder.encode(JSON.stringify({
		u: USERNAME,
		v: version,
		exp: Date.now() + SESSION_SECONDS * 1e3
	})));
	setCookie$1(COOKIE, `${payload}.${await sign(store, payload)}`, {
		httpOnly: true,
		secure: true,
		sameSite: "strict",
		path: "/",
		maxAge: SESSION_SECONDS
	});
}
async function currentSession(store) {
	const [payload, mac] = (getCookie(COOKIE) ?? "").split(".");
	if (!payload || !mac || !sameString(await sign(store, payload), mac)) return false;
	try {
		const session = JSON.parse(new TextDecoder().decode(fromB64url(payload)));
		const record = await passwordRecord(store);
		return session.u === "root" && session.exp > Date.now() && !!record && session.v === record.version;
	} catch {
		return false;
	}
}
/** Gate for every console server function. Throws "UNAUTHORIZED" when signed out. */
async function requireAdmin() {
	privateHeaders();
	const store = await requireStore();
	if (!await currentSession(store)) throw new Error("UNAUTHORIZED");
	return store;
}
async function sessionState() {
	privateHeaders();
	const store = await getStore();
	if (!store) return {
		signedIn: false,
		configured: false,
		error: "Content storage (KV binding CMS_KV) is not configured."
	};
	if (!await passwordRecord(store)) return {
		signedIn: false,
		configured: false,
		error: "No password is set (Worker secret CMS_ROOT_PASSWORD_HASH)."
	};
	return {
		signedIn: await currentSession(store),
		configured: true
	};
}
var LOCKED = "Too many failed attempts. Try again later, or reset the password.";
async function login(username, password) {
	privateHeaders();
	const store = await requireStore();
	const ip = clientIp();
	if (await count(store, K.loginIp(ip)) >= LOGIN_PER_IP.max || await count(store, K.loginAll) >= LOGIN_ALL.max) return {
		ok: false,
		error: LOCKED
	};
	const record = await passwordRecord(store);
	const passwordOk = await checkPassword(password, record?.hash);
	if (!record || !passwordOk || !sameString(username, "root")) {
		await bump(store, K.loginIp(ip), LOGIN_PER_IP.seconds);
		await bump(store, K.loginAll, LOGIN_ALL.seconds);
		await logActivity(store, "Sign-in failed", `username "${username.slice(0, 40)}"`);
		return {
			ok: false,
			error: "Wrong username or password."
		};
	}
	await store.delete(K.loginIp(ip));
	await startSession(store, record.version);
	await logActivity(store, "Signed in");
	return { ok: true };
}
async function logout() {
	privateHeaders();
	deleteCookie$1(COOKIE, {
		path: "/",
		secure: true,
		httpOnly: true,
		sameSite: "strict"
	});
}
async function setPassword(store, password) {
	const version = ((await passwordRecord(store))?.version ?? 0) + 1;
	await store.put(K.password, {
		hash: await hashPassword(password),
		version,
		changedAt: (/* @__PURE__ */ new Date()).toISOString()
	});
	return version;
}
function passwordProblem(password, confirm) {
	if (password.length < 12) return `Use at least 12 characters.`;
	if (password.length > 200) return "Use at most 200 characters.";
	if (password !== confirm) return "The two passwords do not match.";
	return null;
}
async function changePassword(current, next, confirm) {
	const store = await requireAdmin();
	if (!await checkPassword(current, (await passwordRecord(store))?.hash)) return {
		ok: false,
		error: "The current password is wrong."
	};
	const problem = passwordProblem(next, confirm);
	if (problem) return {
		ok: false,
		error: problem
	};
	await startSession(store, await setPassword(store, next));
	await logActivity(store, "Password changed", "other sessions signed out");
	return { ok: true };
}
/** Bumps the session version without changing the password. */
async function signOutEverywhere() {
	const store = await requireAdmin();
	const record = await passwordRecord(store);
	if (!record) return;
	const version = record.version + 1;
	await store.put(K.password, {
		...record,
		version
	});
	await startSession(store, version);
	await logActivity(store, "Signed out all other sessions");
}
var SENT = "If that account exists, a code is on its way to the recovery inbox. It is valid for 10 minutes.";
async function requestResetCode(username) {
	privateHeaders();
	const store = await requireStore();
	if (!sameString(username, "root")) return {
		ok: true,
		message: SENT
	};
	if (await count(store, K.resetSends) >= RESET_SENDS.max) return {
		ok: false,
		error: "Too many codes requested. Try again in an hour."
	};
	await bump(store, K.resetSends, RESET_SENDS.seconds);
	const code = String(crypto.getRandomValues(/* @__PURE__ */ new Uint32Array(1))[0] % 1e6).padStart(6, "0");
	await store.put(K.otp, {
		hash: await sha256(code),
		expires: Date.now() + OTP_SECONDS * 1e3,
		tries: 0
	}, { ttl: OTP_SECONDS });
	const to = await cmsEnv("CMS_RESET_TO");
	const body = [
		"A password reset was requested for the AegisOps content console.",
		"",
		`Code: ${code}`,
		"",
		"It is valid for 10 minutes and works once.",
		`Requested from ${clientIp()} at ${(/* @__PURE__ */ new Date()).toUTCString()}.`,
		"",
		"If you did not ask for this, ignore this email. The password stays the same."
	].join("\n");
	await cmsEnv("RESEND_API_KEY");
	if (!to || /^no-reply@/i.test(to)) console.error("[cms] CMS_RESET_TO is missing or is a no-reply address; reset code not sent");
	else try {
		const { sendNoticeEmail } = await import("./brief.server-DT9UwfZJ.mjs");
		await sendNoticeEmail(to, "Your AegisOps console reset code", body);
	} catch (err) {
		console.error("[cms] reset email failed:", err);
		return {
			ok: false,
			error: "The code could not be sent. Try again in a minute."
		};
	}
	await logActivity(store, "Reset code requested");
	return {
		ok: true,
		message: SENT
	};
}
async function resetPassword(username, code, password, confirm) {
	privateHeaders();
	const store = await requireStore();
	const otp = await store.get(K.otp);
	const invalid = {
		ok: false,
		error: "That code is wrong or has expired. Request a new one."
	};
	if (!otp || otp.expires < Date.now() || !sameString(username, "root")) return invalid;
	if (!sameString(await sha256(code.trim()), otp.hash)) {
		const tries = otp.tries + 1;
		if (tries >= OTP_TRIES) await store.delete(K.otp);
		else await store.put(K.otp, {
			...otp,
			tries
		}, { ttl: (otp.expires - Date.now()) / 1e3 });
		await logActivity(store, "Reset code rejected");
		return invalid;
	}
	const problem = passwordProblem(password, confirm);
	if (problem) return {
		ok: false,
		error: problem
	};
	await store.delete(K.otp);
	const version = await setPassword(store, password);
	await store.delete(K.loginIp(clientIp()));
	await store.delete(K.loginAll);
	await startSession(store, version);
	await logActivity(store, "Password reset by emailed code", "other sessions signed out");
	return { ok: true };
}
//#endregion
export { MIN_PASSWORD, USERNAME, changePassword, logActivity, login, logout, readActivity, requestResetCode, requireAdmin, resetPassword, sessionState, signOutEverywhere, getStore as t };
