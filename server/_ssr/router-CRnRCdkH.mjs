import { r as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, _ as lazyRouteComponent, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CRnRCdkH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-kQFT5LnK.css";
var APP_NAME = "AegisOps Technologies";
var Route$7 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: `${APP_NAME} — Building the Autonomous` },
			{
				name: "description",
				content: "AegisOps Technologies advises on GRC, ISMS, and IT operations, and builds governed autonomous systems and production software."
			},
			{
				name: "theme-color",
				content: "#0a1c38"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var frameworks = [
	"ISO 27001",
	"NIST",
	"COBIT",
	"GDPR",
	"PCI DSS"
];
var advisoryDomains = [
	{
		id: "grc",
		short: "GRC",
		code: "01",
		title: "Governance, risk & compliance",
		intent: "Governance has to be a system the business can run, not a binder that appears when the auditor does.",
		good: "Owners, risks, and controls connect. Evidence comes out of the work, not out of a scramble the week before the review.",
		points: [
			"IT governance framework design & implementation",
			"Risk management — identification, assessment, and treatment",
			"Compliance assessments: ISO 27001, NIST, COBIT, GDPR, PCI DSS",
			"Internal and external IT audit readiness",
			"Policy and control framework development",
			"GRC automation and maturity assessments",
			"Vendor risk and third-party security evaluation"
		]
	},
	{
		id: "isms",
		short: "ISMS",
		code: "02",
		title: "ISMS & cybersecurity",
		intent: "An information security management system that changes how access, incidents, and data are actually handled.",
		good: "Posture is measured. Identity is deliberate. People know what the first hour of an incident requires.",
		points: [
			"ISMS development and advisory",
			"Cybersecurity posture assessments",
			"Identity and access management evaluation",
			"Security architecture and control reviews",
			"Incident management readiness",
			"Data protection, privacy, and compliance reviews",
			"Security awareness and culture programs"
		]
	},
	{
		id: "infrastructure",
		short: "Infra",
		code: "03",
		title: "Infrastructure & operations",
		intent: "The estate — cloud, assets, change, and release — is known, owned, and safe to change.",
		good: "You can name the asset, the owner, the last change, and the patch that is still open.",
		points: [
			"IT infrastructure assessment and optimization",
			"Hybrid and multi-cloud security and compliance",
			"IT asset and configuration management",
			"Patch, change, and release control reviews",
			"CI/CD and DevOps readiness audits"
		]
	},
	{
		id: "applications",
		short: "Apps",
		code: "04",
		title: "Applications",
		intent: "Business systems, including ERP and the APIs around them, carry controls that match how they are really used.",
		good: "Change, access, and data integrity are visible from the transaction back to a person.",
		points: [
			"Application risk and security assessments",
			"ERP, database, and system control reviews",
			"Data classification, integrity, and governance",
			"Application lifecycle and change control evaluation",
			"API security and integration governance"
		]
	},
	{
		id: "data",
		short: "Data",
		code: "05",
		title: "Data governance & management",
		intent: "The firm knows what data it holds, who owns it, and how it is allowed to move.",
		good: "Catalog, glossary, and access rules agree with each other — and with the systems that store the data.",
		points: [
			"Identification of data assets, ownership, and access control",
			"Data catalog architecture",
			"Domain discovery, classification, taxonomy, and hierarchies",
			"Integration of data dictionaries, business glossaries, and catalogs"
		]
	},
	{
		id: "continuity",
		short: "Continuity",
		code: "06",
		title: "Business continuity & disaster recovery",
		intent: "Recovery is a tested capability with numbers, not a document with a date on the cover.",
		good: "RTO and RPO have been measured in a drill. The gaps have names next to them.",
		points: [
			"Business continuity and disaster recovery program design",
			"RTO and RPO evaluation and testing",
			"Crisis response planning and simulation",
			"Resilience gap and maturity assessment"
		]
	},
	{
		id: "kpi",
		short: "KPI / KRI",
		code: "07",
		title: "IT indicators & value",
		intent: "Leadership sees capability and risk in indicators that survive contact with operations.",
		good: "A KPI or KRI changes a decision. It is not a dashboard nobody opens.",
		points: [
			"IT maturity and capability assessments",
			"Benchmarking and KPI dashboards",
			"Strategic IT planning and optimization",
			"Post-implementation reviews",
			"Value realization and process efficiency audits"
		]
	}
];
var workCases = [
	{
		id: "finance",
		group: "operations",
		sector: "Financial & insurance",
		title: "The exception desk that never closes",
		pain: "Claims, bordereaux, and procure-to-pay exceptions pile into shared inboxes. Analysts re-key the same evidence into the core system. Months later, audit cannot reconstruct why a payment was released.",
		agent: "Reads the case packet, matches policy and ledger, drafts the resolution with the sources it used, and parks anything outside tolerance for a named approver.",
		gate: "No payment instruction leaves the sandbox without a human release above the agreed threshold. The trail of sources is the record.",
		signal: "Cycle time on standard exceptions, share prepared versus escalated, and hours to reconstruct a decision."
	},
	{
		id: "healthcare",
		group: "operations",
		sector: "Healthcare & medicine",
		title: "Prior authorization that stalls care",
		pain: "Prior auth and coding queries bounce between clinic, payer, and records. Clinicians retype facts that already exist. Denials arrive late, and copies of PHI end up in side spreadsheets.",
		agent: "Assembles the packet from approved systems, checks it against the payer rule, and drafts the submission. If a clinical fact is missing, it says so. It does not invent one.",
		gate: "Protected health information stays in the tenant. A clinician or coder releases anything that changes a record of care.",
		signal: "Touch time per authorization, denial rate for incomplete packets, and time to a clean escalation."
	},
	{
		id: "people",
		group: "operations",
		sector: "Human capital",
		title: "Onboarding that depends on who is on shift",
		pain: "Offer to day one is a chain across HR, IT, facilities, and the hiring manager. Cases stall in email. Policy answers change with the person who picks up the ticket.",
		agent: "Runs the case across HRIS and the service desk, chases missing inputs, and answers policy only from the approved corpus. A hire that does not match a rule becomes an exception, not a workaround.",
		gate: "Pay, access above baseline, and employment status wait for HR. The agent prepares the case. It does not decide it.",
		signal: "Day-one readiness, consistency of policy answers, and the count of aged cases."
	},
	{
		id: "supply",
		group: "operations",
		sector: "Supply chain",
		title: "The disruption seen after the line has stopped",
		pain: "A late vessel, a quality hold, or an expired vendor certificate is visible in one system and invisible in the plan. Planners often hear it first from the customer.",
		agent: "Watches shipment, quality, and vendor-risk signals, explains the impact on a specific order, and proposes a reallocation for a planner to accept or refuse.",
		gate: "No purchase and no customer commitment is sent without the planner. Vendor risk stays explainable — a score without a reason is not a control.",
		signal: "Hours from signal to decision, expedites avoided, and certificate gaps caught before receipt."
	},
	{
		id: "support",
		group: "operations",
		sector: "Customer support",
		title: "The queue that answers the same ticket twice",
		pain: "Tier one repeats diagnostics senior staff already wrote down. Customers hear a different story at each transfer. The knowledge base is behind the floor.",
		agent: "Classifies the contact, runs the approved diagnostic, and drafts the reply with the article version it used. Unknowns escalate as a structured brief, not an empty ticket.",
		gate: "Refunds, account changes, and regulated statements stay with a person. Every reply cites the source it was allowed to use.",
		signal: "First-contact resolution, handle time, reopen rate, and whether escalations arrive usable."
	},
	{
		id: "textile",
		group: "operations",
		sector: "Textile",
		title: "A mill that cannot prove the shipment",
		pain: "Buyer compliance, shade approval, and shipment documents live in chat threads and shared drives. A failed inspection is discovered at the port. Lot-to-buyer traceability is rebuilt under pressure.",
		agent: "Ties lot, inspection, and document status to the order, chases missing certificates, and prepares the buyer pack. A nonconformance becomes a case with an owner and a date.",
		gate: "Shipment release, and any concession to a buyer, stays with quality leadership.",
		signal: "Documents complete before ex-factory, age of open nonconformances, and claim rate."
	},
	{
		id: "power",
		group: "operations",
		sector: "Power generation",
		title: "Alarms, permits, and the outage window",
		pain: "Alarm floods hide the few that matter. Permit-to-work and isolation steps sit next to the real system, not in it. Maintenance windows collide with generation commitments.",
		agent: "Triages alarms against known patterns, assembles the permit pack, and sequences work against the outage plan. It will not close an isolation step.",
		gate: "Safety-critical steps require a named authorized person. The agent prepares. It does not sign.",
		signal: "Quality of alarm acknowledgement, permit preparation time, and outage tasks that start with complete isolation evidence."
	},
	{
		id: "safety",
		group: "operations",
		sector: "Health & safety",
		title: "Incidents that vanish into narrative",
		pain: "Incident reports are prose. Corrective actions slip their owners. Audit week becomes a hunt for proof that a control actually ran.",
		agent: "Structures the incident, maps it to the hazard register, drafts corrective actions with owners, and assembles the evidence pack from the systems of record.",
		gate: "Severity, and any regulatory notification, stay with the safety lead.",
		signal: "Corrective actions closed on time, minutes to retrieve evidence, and repeat incidents."
	},
	{
		id: "delivery",
		group: "engineering",
		sector: "IT development",
		title: "Specs that die between the ticket and the pull request",
		pain: "Requirements live in decks. Pull requests arrive without the tests or the traceability the deck implied. Review becomes taste.",
		agent: "Turns an accepted spec into tasks, checks the change against those criteria, and comments on the gap. It may open a draft. A person merges.",
		gate: "Protected branches stay human. The agent works in a sandbox repository with no production credentials.",
		signal: "Review cycles, criteria actually covered, and defects that escape."
	},
	{
		id: "patch",
		group: "engineering",
		sector: "IT operations",
		title: "The patch window that keeps slipping",
		pain: "Vulnerability lists are long, owners are unclear, and the change record is written after the fact. Production patches ride on whoever stays late.",
		agent: "Prioritizes by exposure and asset criticality, drafts the change with a backout, and chases owners before the window. It does not push the patch.",
		gate: "The named owner, or the change board, approves. Execution is logged. The agent does not approve its own change.",
		signal: "Time to patch critical assets, change records complete before the window, and failed changes."
	},
	{
		id: "vuln",
		group: "engineering",
		sector: "Vulnerability remediation",
		title: "Findings with no owner and no proof of close",
		pain: "Scanner output is a spreadsheet. The same finding returns next quarter because “fixed” was a comment on a ticket.",
		agent: "Assigns by service ownership, proposes a remediation path, and re-checks the evidence of close — not the ticket status.",
		gate: "Risk acceptance above the threshold needs a named authority and an expiry. Open-ended acceptance is not a treatment.",
		signal: "Findings closed with evidence, reopen rate, and aged criticals."
	},
	{
		id: "compliance",
		group: "engineering",
		sector: "Regulatory governance",
		title: "Evidence week",
		pain: "ISO, NIST, GDPR, and PCI ask for artifacts teams cannot find. Controls exist in policy and not in the pipeline that ships the system.",
		agent: "Maps each control to a system, pulls evidence on a schedule, and flags drift between the policy and what the pipeline actually does.",
		gate: "Attestation stays with the control owner. The agent never marks a control effective on its own.",
		signal: "Hours to produce an evidence pack, controls with fresh evidence, and policy-to-pipeline gaps."
	},
	{
		id: "risk",
		group: "engineering",
		sector: "Risk mitigation",
		title: "A register that is a document, not a system",
		pain: "Risks are scored once a year. Treatment plans have no link to the change that was supposed to reduce them. The committee pack is a surprise.",
		agent: "Watches the signals tied to each treatment — patch rate, access reviews, failed drills — and drafts the narrative for the risk owner to accept or correct.",
		gate: "Residual risk is accepted by the risk owner, not by the model.",
		signal: "Treatments with a live signal, overdue treatments, and surprises that still reach the committee."
	},
	{
		id: "recovery",
		group: "engineering",
		sector: "Disaster recovery",
		title: "A plan nobody has run",
		pain: "RTO and RPO are numbers on a slide. Runbooks are stale. The last exercise was a tabletop that skipped the hard step. Zero downtime is a hope.",
		agent: "Walks the runbook against the live architecture, prepares the drill, records the timings, and files the gaps against the stated RTO.",
		gate: "Failover is a human decision. Outside a declared drill sandbox, the agent does not touch production.",
		signal: "Drills actually completed, measured RTO against the claim, and runbook steps that failed."
	},
	{
		id: "culture",
		group: "engineering",
		sector: "Human capital & culture",
		title: "Awareness nobody remembers on a Thursday",
		pain: "Annual training is a click-through. Engineers route around a control because the secure path is slower, and nobody measures that bypass.",
		agent: "Delivers a role-specific prompt at the moment of the risky action — a public repository, a broad access grant — and records coaching rather than shame.",
		gate: "Discipline and access removal stay with people leadership. The agent does not punish.",
		signal: "Repeat risky actions, time from action to coaching, and how often the control is bypassed."
	}
];
var industries = [
	{
		id: "finance",
		label: "Financial & insurance",
		line: "Exceptions, claims, and payments that must be reconstructable."
	},
	{
		id: "healthcare",
		label: "Healthcare & medicine",
		line: "Prior authorization and coding, without spreading patient data."
	},
	{
		id: "people",
		label: "Human capital",
		line: "Onboarding and policy answers that do not depend on who is on shift."
	},
	{
		id: "supply",
		label: "Supply chain",
		line: "Disruptions seen in time to change the plan, not the apology."
	},
	{
		id: "support",
		label: "Customer support",
		line: "Diagnostics and replies that stay consistent across the queue."
	},
	{
		id: "textile",
		label: "Textile",
		line: "Lot, inspection, and buyer documents in one case — not in a chat."
	},
	{
		id: "power",
		label: "Power generation",
		line: "Alarms, permits, and outage work with a human on the safety step."
	},
	{
		id: "safety",
		label: "Health & safety",
		line: "Incidents and corrective actions with evidence, not prose."
	}
];
var capabilities = [
	{
		code: "01",
		title: "Application development & architecture",
		stance: "Logic, service boundaries, and the integrations that move money and records.",
		points: [
			"Application logic and architecture",
			"Microservices and service-oriented architecture",
			"Web and mobile: React, Angular, Flutter, React Native",
			"REST and GraphQL services",
			"Third-party integrations — applications, databases, payment gateways",
			"Machine learning and AI integration, where it earns a place in the design"
		]
	},
	{
		code: "02",
		title: "User experience & interface",
		stance: "Interfaces a person can finish a task in. Consistent, responsive, and accessible.",
		points: [
			"Interface design and responsive layouts",
			"Design systems and accessibility",
			"Frontend usability and consistency audits"
		]
	},
	{
		code: "03",
		title: "Data management & security",
		stance: "Data that is classed, protected, and explainable to an auditor.",
		points: [
			"Database and data-store design and optimization",
			"Encryption, masking, and protection",
			"Authentication and authorization controls",
			"Audit logging and compliance mechanisms",
			"Privacy and regulatory alignment"
		]
	},
	{
		code: "04",
		title: "Infrastructure & cloud engineering",
		stance: "Cloud, containers, and pipelines treated as production systems, not as diagrams.",
		points: [
			"Public, private, and hybrid cloud",
			"Containers and orchestration — Docker, Kubernetes",
			"Infrastructure as code — Terraform, Ansible, CloudFormation",
			"Configuration management and automation",
			"CI/CD pipeline development and optimization",
			"Version control — Git, GitHub, GitLab, Bitbucket"
		]
	},
	{
		code: "05",
		title: "Monitoring, observability & operations",
		stance: "If it cannot be seen, it cannot be governed.",
		points: [
			"Application performance monitoring",
			"Log management and SIEM integration",
			"Incident, bug tracking, and issue management",
			"Support and helpdesk systems"
		]
	},
	{
		code: "06",
		title: "Process documentation & knowledge",
		stance: "A system nobody can explain will fail the first time its author is away.",
		points: [
			"Operational runbooks tied to the real system",
			"Control narratives an auditor and an engineer can both read",
			"Knowledge bases that serve people — and the agents working beside them"
		]
	}
];
var loopSteps = [
	{
		name: "Trigger",
		text: "Scanner and asset inventory agree: a critical vulnerability sits on a customer-facing payments service, it is exploitable, and it has an owner."
	},
	{
		name: "Plan",
		text: "The agent ranks it against this week’s window, drafts the change with a backout, and names who must approve before anything moves."
	},
	{
		name: "Act",
		text: "It opens the change, gathers package evidence, and prepares the runbook. It does not deploy."
	},
	{
		name: "Verify",
		text: "After the owner runs the window, the agent checks the scanner and the service — not the status of the ticket."
	},
	{
		name: "Human review",
		text: "The service owner accepts what remains or signs the close. The plan, the tool calls, and the release are the record."
	}
];
var trustPoints = [
	{
		title: "Human in the loop",
		text: "Judgment that spends money, changes access, or affects safety is a person’s decision."
	},
	{
		title: "Sandboxed",
		text: "Agents run where they cannot wander the network and collect credentials as they go."
	},
	{
		title: "Private intelligence",
		text: "Models sit in your tenant. Prompts and records are not a shared bin."
	},
	{
		title: "Audit trail",
		text: "Every plan, tool call, and release can be reconstructed. Autonomy you can audit."
	}
];
var method = [
	{
		code: "01",
		title: "Assess",
		text: "Evidence before opinion. The control, the architecture, and the actual workflow — not the slide that describes them."
	},
	{
		code: "02",
		title: "Architect",
		text: "The control, the loop, or the system. Scope what may run on its own. Name the human gate before a line is written."
	},
	{
		code: "03",
		title: "Prove",
		text: "One painful path, measured. Cycle time and evidence quality, not applause for a demo."
	},
	{
		code: "04",
		title: "Embed",
		text: "Owners, runbooks, and your people. We leave a capability, not a dependency on us."
	}
];
var intentions = [
	{
		title: "Tell the client when the honest answer is not yet.",
		text: "A broken control, automated, only fails faster. We will say so."
	},
	{
		title: "Prefer a smaller system that can be audited.",
		text: "Scope is a control. A larger design nobody can explain is not ambition. It is risk."
	},
	{
		title: "Put names on decisions.",
		text: "Models do not own residual risk. A person does, with an expiry when they accept it."
	},
	{
		title: "Write for the next operator.",
		text: "The next person — or the next agent — should be able to run the work without folklore."
	},
	{
		title: "Stay close to the operation.",
		text: "Advice that cannot survive a Tuesday incident is not advice. We assess as people who can also build."
	}
];
var shapes = [
	{
		title: "Advisory assessment",
		text: "A defined slice of governance, security, cloud, applications, data, continuity, or the indicators leadership actually uses."
	},
	{
		title: "Agentic pilot",
		text: "One queue. One loop. One human gate. A before-and-after on cycle time and evidence, then a decision to stop or extend."
	},
	{
		title: "Engineering build",
		text: "Architecture through implementation — or the rescue of a system that cannot be changed safely in its current form."
	},
	{
		title: "Combined",
		text: "Govern the workflow first. Automate only the parts that deserve it. The same team stays accountable for both."
	}
];
var practiceLabels = {
	advisory: "IT advisory",
	agentic: "Agentic engineering",
	engineering: "Software engineering",
	combined: "Combined — govern, then build"
};
var sectorOptions = [
	"Financial & insurance",
	"Healthcare & medicine",
	"Human capital",
	"Supply chain",
	"Customer support",
	"Textile",
	"Power generation",
	"Health & safety",
	"Internal IT & engineering",
	"Other"
];
function pageMeta(title, description) {
	return { meta: [{ title }, {
		name: "description",
		content: description
	}] };
}
var $$splitComponentImporter$6 = () => import("./routes-DbpfbEoK.mjs");
var Route$6 = createFileRoute("/")({
	head: () => pageMeta("AegisOps Technologies — Building the Autonomous", "IT advisory for GRC, ISMS, and operations, plus agentic and software engineering. Autonomous systems, governed so you can trust them."),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("../_-Dwu2Hj6Y.mjs");
var Route$5 = createFileRoute("/$")({
	head: () => pageMeta("Not found — AegisOps Technologies", "That page is not part of the AegisOps site."),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./advisory-Vtyvb0QY.mjs");
var Route$4 = createFileRoute("/advisory")({
	head: () => pageMeta("IT Advisory — AegisOps Technologies", "GRC, ISMS, cybersecurity, infrastructure, applications, data governance, continuity, and IT indicators. Advisory with an engineer’s standard."),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./agentic-BCXDxYiU.mjs");
var Route$3 = createFileRoute("/agentic")({
	head: () => pageMeta("Agentic engineering — AegisOps Technologies", "Business cases for governed agents across finance, healthcare, operations, and engineering pain: patching, vulnerabilities, compliance, and recovery."),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./approach-CdEyOMIM.mjs");
var Route$2 = createFileRoute("/approach")({
	head: () => pageMeta("Approach — AegisOps Technologies", "Seasoned judgment and young intelligence. How AegisOps decides what to assess, what to build, and what not to automate."),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./contact-CNGWd5Xo.mjs");
var Route$1 = createFileRoute("/contact")({
	head: () => pageMeta("Start a brief — AegisOps Technologies", "Describe the audit, the queue, or the system. Compose a briefing and send it from your own mail."),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./engineering-BY0Y0MHr.mjs");
var Route = createFileRoute("/engineering")({
	head: () => pageMeta("Software engineering — AegisOps Technologies", "Application architecture, experience, data, cloud, observability, and knowledge. Engineering depth behind every assessment."),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	SplatRoute: Route$5.update({
		id: "/$",
		path: "/$",
		getParentRoute: () => Route$7
	}),
	AdvisoryRoute: Route$4.update({
		id: "/advisory",
		path: "/advisory",
		getParentRoute: () => Route$7
	}),
	AgenticRoute: Route$3.update({
		id: "/agentic",
		path: "/agentic",
		getParentRoute: () => Route$7
	}),
	ApproachRoute: Route$2.update({
		id: "/approach",
		path: "/approach",
		getParentRoute: () => Route$7
	}),
	ContactRoute: Route$1.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$7
	}),
	EngineeringRoute: Route.update({
		id: "/engineering",
		path: "/engineering",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { industries as a, method as c, shapes as d, trustPoints as f, frameworks as i, practiceLabels as l, advisoryDomains as n, intentions as o, workCases as p, capabilities as r, loopSteps as s, router_exports as t, sectorOptions as u };
