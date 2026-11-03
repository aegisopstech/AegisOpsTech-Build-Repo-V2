import { r as __toESM } from "../_runtime.mjs";
import { p as pageMeta, u as getUseCase } from "./site-CFNH31A9.mjs";
import { S as require_jsx_runtime, X as notFound, Z as require_react, _ as lazyRouteComponent, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, q as redirect, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as TriangleAlert } from "../_libs/lucide-react.mjs";
import { t as createServerFn } from "./ssr.mjs";
import { a as literal, c as string, l as union, o as number, r as discriminatedUnion, s as object } from "../_libs/zod.mjs";
import { i as faqListSchema, n as contentSchema, o as teamListSchema, r as factListSchema, t as articleListSchema } from "./schema-BkSLwOoC.mjs";
import { t as createSsrRpc } from "./createSsrRpc-C1p7zOu_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api-C6-RHN6P.js
/**
* Server functions for the public pages (published content only) and for the
* content console (every one behind `requireAdmin`). Server code is imported
* dynamically, as in `src/lib/brief.ts`, so it never ships to the browser.
*/
var getTeamAndFacts = createServerFn({ method: "GET" }).handler(createSsrRpc("3b5f4c70f3acab549025e0a226fbf6ffd8c4657e57912aa8bedd38b631108a07"));
var getFaqs = createServerFn({ method: "GET" }).handler(createSsrRpc("47fded03e66f27cfdb56c5f59ca75ccac7f1134a914f28ea4442a74d46794588"));
var getArticleList = createServerFn({ method: "GET" }).handler(createSsrRpc("df790591e1a3358abca947266aba29869a07182ce4816ea65b72874b3f875101"));
var getArticleBySlug = createServerFn({ method: "GET" }).inputValidator(object({ slug: string().max(80) })).handler(createSsrRpc("298ad4ff3b19a45d8d7213a1d9026372491ac2d2960d71a6e9cbf14dd1f8d656"));
var cmsSession = createServerFn({ method: "GET" }).handler(createSsrRpc("2d8ab58888b36855d2ad1dc08e4e63a12ed92e8c64665bf97228c8fbb8a927a4"));
var credentials = object({
	username: string().max(100),
	password: string().max(200)
});
var cmsLogin = createServerFn({ method: "POST" }).inputValidator(credentials).handler(createSsrRpc("039fc4aa7d08f63388d01f6a45c8de649e21a8551f61b43f99204bc394b6d45f"));
var cmsLogout = createServerFn({ method: "POST" }).handler(createSsrRpc("4ee2a582b237c91ed4e320f6ae0244e29e98ae63482d8a2cf9151984dc88904f"));
var cmsRequestReset = createServerFn({ method: "POST" }).inputValidator(object({ username: string().max(100) })).handler(createSsrRpc("192de2e2ee839cd7b66633c46379dfe257faa21ded3cada65e932c8b1fed9758"));
var cmsResetPassword = createServerFn({ method: "POST" }).inputValidator(object({
	username: string().max(100),
	code: string().max(20),
	password: string().max(300),
	confirm: string().max(300)
})).handler(createSsrRpc("0e07f73a707bb1f57016a6cc37efa47acfce2f032becc7dc561ef13acdc4b93c"));
var cmsChangePassword = createServerFn({ method: "POST" }).inputValidator(object({
	current: string().max(300),
	next: string().max(300),
	confirm: string().max(300)
})).handler(createSsrRpc("61c01d9f0719454acbe876c9158904bb7ed86f6531fe1776dae8f90c99f4a844"));
var cmsSignOutEverywhere = createServerFn({ method: "POST" }).handler(createSsrRpc("03376851840497750734e54fb32812ceb1f0292a824f6c9e185ce9e6f0e7e053"));
var cmsLoad = createServerFn({ method: "GET" }).handler(createSsrRpc("5da76a4b9467a34499d827ad745fcf2048335a0c1c390eefb9cfa1891920e8cc"));
var cmsActivity = createServerFn({ method: "GET" }).handler(createSsrRpc("3bd77fe6e64998b685c02dcc4fdea93ad6b6bd8c565449a1e574d8ac1b3aacf0"));
var saveInput = discriminatedUnion("section", [
	object({
		section: literal("team"),
		rev: number().int(),
		value: teamListSchema
	}),
	object({
		section: literal("articles"),
		rev: number().int(),
		value: articleListSchema
	}),
	object({
		section: literal("faqs"),
		rev: number().int(),
		value: faqListSchema
	}),
	object({
		section: literal("aboutFacts"),
		rev: number().int(),
		value: factListSchema
	})
]);
var cmsSave = createServerFn({ method: "POST" }).inputValidator(saveInput).handler(createSsrRpc("bf0c9a4a3f2ff5080815fcf444b16ef6ebb55a9d967b4bc91f928f216fe4e52b"));
var cmsImport = createServerFn({ method: "POST" }).inputValidator(contentSchema).handler(createSsrRpc("32236bfc553857cc6875324accf7f5b015d84e754b87802ec6a07b167720b71b"));
var cmsUndoImport = createServerFn({ method: "POST" }).handler(createSsrRpc("02ff3a322226b33d03dacb58716e340dd446be4f1380a680db53f1e15c5b242e"));
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-DTokZTcj.js
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
var styles_default = "/assets/styles-BQTvw-T1.css";
var APP_NAME = "AegisOps Technologies";
var Route$18 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: `${APP_NAME} — AI agents with humans in control` },
			{
				name: "description",
				content: "Agentic AI, software engineering and cybersecurity, engineered with the controls to run in production."
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
var $$splitComponentImporter$14 = () => import("./routes-BY78gva9.mjs");
var Route$17 = createFileRoute("/")({
	loader: async () => (await getTeamAndFacts()).team,
	head: () => pageMeta("AegisOps Technologies — AI agents with humans in control", "Agentic automation, engineered with the controls to run in production. Reference workflows, a disclosed incident demo, and a named team."),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("../_-D6-XINJ7.mjs");
var Route$16 = createFileRoute("/$")({
	head: () => pageMeta("Not found — AegisOps Technologies", "That page is not part of the AegisOps site."),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./about-D8wM2Zdy.mjs");
var Route$15 = createFileRoute("/about")({
	loader: () => getTeamAndFacts(),
	head: () => pageMeta("About — AegisOps Technologies", "Seasoned judgment, engineered with modern AI. The people accountable for an AegisOps engagement, and how the network is used."),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var Route$14 = createFileRoute("/advisory")({ beforeLoad: () => {
	throw redirect({
		to: "/capabilities",
		hash: "advisory"
	});
} });
var Route$13 = createFileRoute("/agentic")({ beforeLoad: () => {
	throw redirect({ to: "/use-cases" });
} });
var $$splitComponentImporter$11 = () => import("./approach-DHfu8YLk.mjs");
var Route$12 = createFileRoute("/approach")({
	head: () => pageMeta("Approach — AegisOps Technologies", "Assess, architect, prove, embed. Fixed-scope ways to start, and the controls around a production agent."),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./capabilities-DxW6ZPXw.mjs");
var Route$11 = createFileRoute("/capabilities")({
	head: () => pageMeta("Capabilities — AegisOps Technologies", "The engineering behind production-ready AI agents: agentic workflows, software, cybersecurity, data, and IT advisory."),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./contact-BYM1oLXN.mjs");
var Route$10 = createFileRoute("/contact")({
	head: () => pageMeta("Discuss a project — AegisOps Technologies", "Tell us what you need to solve. No specification required. The brief goes straight to the AegisOps team."),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./demo-BQZu7QBN.mjs");
var Route$9 = createFileRoute("/demo")({
	head: () => pageMeta("Live demo — IT incident investigation — AegisOps", "A technical demo of an IT incident agent on synthetic data. Disclosure of what is simulated and what requires approval."),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var Route$8 = createFileRoute("/engineering")({ beforeLoad: () => {
	throw redirect({
		to: "/capabilities",
		hash: "software"
	});
} });
var $$splitComponentImporter$7 = () => import("./faq-BbmFddQA.mjs");
var Route$7 = createFileRoute("/faq")({
	loader: () => getFaqs(),
	head: () => pageMeta("FAQ — AegisOps Technologies", "Engagement size, models, data, NDAs, ownership, and who actually works on a project."),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./privacy-UK6_lRrq.mjs");
var Route$6 = createFileRoute("/privacy")({
	head: () => pageMeta("Privacy — AegisOps Technologies", "Where the project brief goes, how it is used, and how to ask for it to be deleted."),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./terms-DCBOutn1.mjs");
var Route$5 = createFileRoute("/terms")({
	head: () => pageMeta("Terms — AegisOps Technologies", "This site describes the practice. A written statement of work governs each engagement."),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./insights-CDeX238R.mjs");
var Route$4 = createFileRoute("/insights/")({
	loader: () => getArticleList(),
	head: () => pageMeta("Insights — AegisOps Technologies", "Notes on approval gates, read-only permissions, and what the incident demo does and does not simulate."),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("../_slug-Cnl9IdMt.mjs");
var Route$3 = createFileRoute("/insights/$slug")({
	loader: async ({ params }) => {
		const article = await getArticleBySlug({ data: { slug: params.slug } });
		if (!article) throw notFound();
		return article;
	},
	head: ({ loaderData }) => pageMeta(loaderData ? `${loaderData.title} — AegisOps` : "Insight — AegisOps", loaderData?.description ?? ""),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./use-cases-mp0Mb7ox.mjs");
var Route$2 = createFileRoute("/use-cases/")({
	head: () => pageMeta("Use cases — AegisOps Technologies", "Three reference workflows: IT incident investigation, security alert investigation, and customer support resolution."),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("../_slug-1nyOIQzM.mjs");
var Route$1 = createFileRoute("/use-cases/$slug")({
	beforeLoad: ({ params }) => {
		if (!getUseCase(params.slug)) throw notFound();
	},
	head: ({ params }) => {
		const item = getUseCase(params.slug);
		return pageMeta(item ? `${item.seoTitle} — AegisOps` : "Use case — AegisOps", item?.description ?? "Reference workflow.");
	},
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./k7m2q9-studio-C-QzgfGI.mjs");
/**
* Private content console. Deliberately unlinked: no menu, sitemap or search
* entry points here, and robots.txt disallows /x/. The password, not the
* path, is what protects it.
*/
var Route = createFileRoute("/x/k7m2q9-studio")({
	head: () => ({ meta: [
		{ title: "Console" },
		{
			name: "robots",
			content: "noindex, nofollow, noarchive"
		},
		{
			name: "referrer",
			content: "no-referrer"
		}
	] }),
	headers: () => ({
		"X-Robots-Tag": "noindex, nofollow, noarchive",
		"Cache-Control": "no-store",
		"Referrer-Policy": "no-referrer",
		"X-Frame-Options": "DENY"
	}),
	ssr: false,
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$17.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$18
});
var SplatRoute = Route$16.update({
	id: "/$",
	path: "/$",
	getParentRoute: () => Route$18
});
var AboutRoute = Route$15.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$18
});
var AdvisoryRoute = Route$14.update({
	id: "/advisory",
	path: "/advisory",
	getParentRoute: () => Route$18
});
var AgenticRoute = Route$13.update({
	id: "/agentic",
	path: "/agentic",
	getParentRoute: () => Route$18
});
var ApproachRoute = Route$12.update({
	id: "/approach",
	path: "/approach",
	getParentRoute: () => Route$18
});
var CapabilitiesRoute = Route$11.update({
	id: "/capabilities",
	path: "/capabilities",
	getParentRoute: () => Route$18
});
var ContactRoute = Route$10.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$18
});
var DemoRoute = Route$9.update({
	id: "/demo",
	path: "/demo",
	getParentRoute: () => Route$18
});
var EngineeringRoute = Route$8.update({
	id: "/engineering",
	path: "/engineering",
	getParentRoute: () => Route$18
});
var FaqRoute = Route$7.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$18
});
var PrivacyRoute = Route$6.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$18
});
var TermsRoute = Route$5.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$18
});
var InsightsIndexRoute = Route$4.update({
	id: "/insights/",
	path: "/insights/",
	getParentRoute: () => Route$18
});
var InsightsSlugRoute = Route$3.update({
	id: "/insights/$slug",
	path: "/insights/$slug",
	getParentRoute: () => Route$18
});
var UseCasesIndexRoute = Route$2.update({
	id: "/use-cases/",
	path: "/use-cases/",
	getParentRoute: () => Route$18
});
var rootRouteChildren = {
	IndexRoute,
	SplatRoute,
	AboutRoute,
	AdvisoryRoute,
	AgenticRoute,
	ApproachRoute,
	CapabilitiesRoute,
	ContactRoute,
	DemoRoute,
	EngineeringRoute,
	FaqRoute,
	PrivacyRoute,
	TermsRoute,
	InsightsSlugRoute,
	UseCasesSlugRoute: Route$1.update({
		id: "/use-cases/$slug",
		path: "/use-cases/$slug",
		getParentRoute: () => Route$18
	}),
	XK7m2q9StudioRoute: Route.update({
		id: "/x/k7m2q9-studio",
		path: "/x/k7m2q9-studio",
		getParentRoute: () => Route$18
	}),
	InsightsIndexRoute,
	UseCasesIndexRoute
};
var routeTree = Route$18._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { cmsSession as _, Route$7 as a, cmsActivity as c, cmsLoad as d, cmsLogin as f, cmsSave as g, cmsResetPassword as h, Route$4 as i, cmsChangePassword as l, cmsRequestReset as m, Route$1 as n, Route$15 as o, cmsLogout as p, Route$3 as r, Route$17 as s, router_exports as t, cmsImport as u, cmsSignOutEverywhere as v, cmsUndoImport as y };
