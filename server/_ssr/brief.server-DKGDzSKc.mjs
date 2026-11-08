import { t as env } from "./env.server-Cm8yps8b.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brief.server-DKGDzSKc.js
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
/**
* Plain-text mail from no-reply@ for the site's own notices (the content
* console's password-reset codes). Throws when Resend is not configured.
*/
async function sendNoticeEmail(to, subject, text) {
	const apiKey = env("RESEND_API_KEY");
	if (!apiKey) throw new Error("RESEND_API_KEY is not set");
	await sendEmail(apiKey, {
		from: FROM,
		to: [to],
		subject: oneLine(subject),
		text
	});
}
/** Collapse newlines so visitor text can't break a subject line. */
function oneLine(value) {
	return value.replace(/[\r\n]+/g, " ").trim();
}
function teamEmail(brief) {
	return [
		"New project brief from the website",
		"",
		`Name: ${brief.name}`,
		`Work email: ${brief.email}`,
		`Organization: ${brief.organization}`,
		`Area of interest: ${brief.interest}`,
		"",
		"What they are trying to solve:",
		brief.problem,
		"",
		brief.timeline ? `Timeline: ${brief.timeline}` : "",
		brief.budget ? `Budget range: ${brief.budget}` : "",
		brief.contact ? `Preferred contact: ${brief.contact}` : "",
		"",
		"Reply to this email to answer the visitor directly."
	].filter((line, i, lines) => line !== "" || lines[i - 1] !== "").join("\n");
}
/**
* WhatsApp alert to the team through Meta's Cloud API. Sending, settings
* (content console first, then the WHATSAPP_* Worker secrets), simulation
* mode and the delivery log live in src/lib/cms/whatsapp.server.ts.
*/
async function alertTeamOnWhatsApp(brief) {
	try {
		const { alertTeamOnWhatsApp: alert } = await import("./whatsapp.server-CXELqNxa.mjs");
		await alert(brief);
	} catch (err) {
		console.error("[brief] WhatsApp alert failed:", err);
	}
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
		`Thank you for your project brief (${brief.interest}). It has reached the AegisOps team, and one of us will reply to this address within one business day.`,
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
			subject: oneLine(`New brief — ${brief.organization} (${brief.interest})`),
			text: teamEmail(brief)
		});
	} catch (err) {
		console.error("[brief] team email failed:", err);
		return {
			ok: false,
			error: "We could not send your brief. Please try again in a minute."
		};
	}
	const acknowledgement = sendEmail(apiKey, {
		from: FROM,
		to: [brief.email],
		subject: "We received your brief — AegisOps Technologies",
		text: visitorEmail(brief)
	}).catch((err) => console.error("[brief] acknowledgement email failed:", err));
	await Promise.all([acknowledgement, alertTeamOnWhatsApp(brief)]);
	return { ok: true };
}
//#endregion
export { deliverBrief, sendNoticeEmail };
