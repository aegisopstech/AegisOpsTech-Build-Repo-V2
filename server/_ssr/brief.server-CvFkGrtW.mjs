import { l as practiceLabels } from "./site-B37hbEET.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/brief.server-CvFkGrtW.js
function env(key) {
	return processModule.env[key]?.trim() || void 0;
}
var RESEND_URL = "https://api.resend.com/emails";
var FROM = "AegisOps Technologies <no-reply@aegisopstech.me>";
async function sendEmail(apiKey, email) {
	const res = await fetch(RESEND_URL, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${apiKey}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify(email)
	});
	if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}
/** Collapse newlines so visitor text can't break a subject line. */
function oneLine(value) {
	return value.replace(/[\r\n]+/g, " ").trim();
}
function teamEmail(brief) {
	return [
		"New brief from the website",
		"",
		`Name: ${brief.name}`,
		`Email: ${brief.email}`,
		`Organization: ${brief.organization}`,
		`Practice: ${practiceLabels[brief.practice]}`,
		`Sector: ${brief.sector}`,
		"",
		"What is actually hurting:",
		brief.pain,
		"",
		"Reply to this email to answer the visitor directly."
	].join("\n");
}
/**
* The acknowledgement goes to an address anyone can type in, so it echoes
* none of the visitor's free text (that would turn the form into a relay for
* spam). The greeting uses the first name only when it is plain letters.
*/
function visitorEmail(brief) {
	const firstName = brief.name.split(/\s+/)[0] ?? "";
	return [
		/^[\p{L}'-]{1,40}$/u.test(firstName) ? `Hi ${firstName},` : "Hello,",
		"",
		`Thank you for your brief about ${practiceLabels[brief.practice]}. It has reached the AegisOps team, and one of us will reply to this address.`,
		"",
		"This mailbox is not monitored, so please do not reply to this email.",
		"",
		"AegisOps Technologies",
		"https://aegisopstech.me"
	].join("\n");
}
async function deliverBrief(brief) {
	if (brief.website) return { ok: true };
	const apiKey = env("RESEND_API_KEY");
	const teamInbox = env("CONTACT_TO");
	if (!apiKey || !teamInbox) {
		console.error("[brief] RESEND_API_KEY or CONTACT_TO is not set");
		return {
			ok: false,
			error: "The contact form is not available right now. Please try again later."
		};
	}
	try {
		await sendEmail(apiKey, {
			from: FROM,
			to: [teamInbox],
			reply_to: brief.email,
			subject: oneLine(`New brief — ${brief.organization} (${practiceLabels[brief.practice]})`),
			text: teamEmail(brief)
		});
	} catch (err) {
		console.error("[brief] team email failed:", err);
		return {
			ok: false,
			error: "We could not send your brief. Please try again in a minute."
		};
	}
	try {
		await sendEmail(apiKey, {
			from: FROM,
			to: [brief.email],
			subject: "We received your brief — AegisOps Technologies",
			text: visitorEmail(brief)
		});
	} catch (err) {
		console.error("[brief] acknowledgement email failed:", err);
	}
	return { ok: true };
}
//#endregion
export { deliverBrief };
