import { r as __toESM } from "../_runtime.mjs";
import { f as trustPoints, i as industries, n as capabilities, r as frameworks, s as method, t as advisoryDomains } from "./site-B37hbEET.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as SiteShell } from "./chrome-CvJ8SivA.mjs";
import { i as StartHere } from "./interactive-HuMEtBF2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CsIEfiSF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var VIDEO_SRC = "/brand/logo-animated.mp4";
var VIDEO_WIDTH = 416;
var VIDEO_HEIGHT = 736;
/**
* How far from white (on the darkest channel) a pixel must be to stay fully
* opaque. Pure white becomes transparent; the logo's saturated blues and teals
* sit far above this and are untouched.
*/
var KEY_RANGE = 64;
/** Make the video's white background transparent, in place. */
function keyOutWhite(data) {
	for (let i = 0; i < data.length; i += 4) {
		const r = data[i];
		const g = data[i + 1];
		const b = data[i + 2];
		const alpha = (255 - Math.min(r, g, b)) / KEY_RANGE;
		if (alpha >= 1) continue;
		if (alpha <= 0) {
			data[i + 3] = 0;
			continue;
		}
		const white = 255 * (1 - alpha);
		data[i] = (r - white) / alpha;
		data[i + 1] = (g - white) / alpha;
		data[i + 2] = (b - white) / alpha;
		data[i + 3] = alpha * 255;
	}
}
/**
* The hero mark: the rotating logo video with its white background keyed out on
* a canvas, so it sits directly on the navy card. The static mark shows until
* the first frame is drawn, and stays when motion is reduced, data saving is on,
* or the video can't play.
*/
function AnimatedMark({ className = "" }) {
	const videoRef = (0, import_react.useRef)(null);
	const canvasRef = (0, import_react.useRef)(null);
	const [enabled, setEnabled] = (0, import_react.useState)(false);
	const [live, setLive] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const saveData = navigator.connection?.saveData;
		if (!reduceMotion && !saveData) setEnabled(true);
	}, []);
	(0, import_react.useEffect)(() => {
		const video = videoRef.current;
		const canvas = canvasRef.current;
		if (!enabled || !video || !canvas) return;
		const ctx = canvas.getContext("2d", { willReadFrequently: true });
		if (!ctx) return;
		let stopped = false;
		let shown = false;
		let frameId = 0;
		const useVideoFrames = "requestVideoFrameCallback" in video;
		const schedule = () => {
			if (stopped) return;
			frameId = useVideoFrames ? video.requestVideoFrameCallback(draw) : requestAnimationFrame(draw);
		};
		function draw() {
			if (stopped) return;
			if (video.readyState >= 2) {
				ctx.drawImage(video, 0, 0, VIDEO_WIDTH, VIDEO_HEIGHT);
				const frame = ctx.getImageData(0, 0, VIDEO_WIDTH, VIDEO_HEIGHT);
				keyOutWhite(frame.data);
				ctx.putImageData(frame, 0, 0);
				if (!shown) {
					shown = true;
					setLive(true);
				}
			}
			schedule();
		}
		video.muted = true;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) video.play().catch(() => void 0);
			else video.pause();
		});
		observer.observe(canvas.parentElement ?? canvas);
		schedule();
		return () => {
			stopped = true;
			observer.disconnect();
			if (useVideoFrames) video.cancelVideoFrameCallback(frameId);
			else cancelAnimationFrame(frameId);
			video.pause();
		};
	}, [enabled]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/brand/mark.png",
			alt: "AegisOps mark, a faceted letter A",
			width: 784,
			height: 1261,
			className: `logo-mark w-auto ${className} ${live ? "hidden" : ""}`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			width: VIDEO_WIDTH,
			height: VIDEO_HEIGHT,
			role: "img",
			"aria-label": "AegisOps mark, a faceted letter A, rotating",
			className: `w-auto ${className} ${live ? "" : "hidden"}`
		}),
		enabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
			ref: videoRef,
			src: VIDEO_SRC,
			muted: true,
			autoPlay: true,
			loop: true,
			playsInline: true,
			preload: "auto",
			"aria-hidden": "true",
			tabIndex: -1,
			className: "pointer-events-none absolute h-px w-px opacity-0",
			onError: () => setEnabled(false)
		}) : null
	] });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid w-full max-w-6xl items-center gap-10 px-5 md:px-8 xl:px-12 py-14 md:grid-cols-12 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow rise",
						children: "An advisory and engineering firm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "rise rise-2 mt-4 font-display text-5xl font-semibold md:text-6xl xl:text-7xl",
						children: "Building the autonomous."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rise rise-3 mt-5 max-w-xl text-xl text-ink",
						children: "Autonomous systems that do the work. Governed so you can trust them."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-muted",
						children: "Seasoned judgment and young intelligence, in one firm. We advise the controls that keep an enterprise trustworthy, and we build the software and the agents we are willing to sign our names to."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/advisory",
							className: "btn btn-primary",
							children: ["IT advisory ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								"aria-hidden": "true",
								className: "size-4"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/agentic",
							className: "btn btn-line",
							children: "Agentic work"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "navy-grid flex flex-col items-center rounded-card px-6 py-10 text-center md:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedMark, { className: "h-56 xl:h-72" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 font-display text-sm font-semibold tracking-widest text-signal uppercase",
					children: "Building the autonomous"
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-line bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mx-auto flex w-full max-w-6xl flex-wrap gap-x-8 gap-y-3 px-5 md:px-8 xl:px-12 py-5",
				children: frameworks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "font-display text-sm font-semibold tracking-wide text-navy",
					children: item
				}, item))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto w-full max-w-6xl px-5 md:px-8 xl:px-12 py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "01 — Advise"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-semibold md:text-4xl",
							children: "Governance, security, and operations that hold."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted",
							children: "Every layer of IT: infrastructure, applications, cloud, security, data, operations, and continuity. Assess, strengthen, and leave a control the business can actually run."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/advisory",
							className: "btn btn-line mt-6",
							children: ["The advisory practice ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								"aria-hidden": "true",
								className: "size-4"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "md:col-span-7",
					children: advisoryDomains.map((domain) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-t border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/advisory",
							hash: domain.id,
							className: "flex min-h-14 items-baseline justify-between gap-4 py-3 hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display font-semibold",
								children: domain.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-sm text-muted",
								children: domain.code
							})]
						})
					}, domain.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "navy-grid text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-6xl px-5 md:px-8 xl:px-12 py-16 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow eyebrow-light",
						children: "02 — Automate"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-3xl font-display text-3xl font-semibold md:text-4xl",
						children: "Agents that finish multi-step work, with a person where judgment matters."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-paper/80",
						children: "Goal-directed systems that reason, plan, use your tools, and stop at a named gate. Not a chatbot on top of a broken process."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-10 grid gap-4 sm:grid-cols-2",
						children: trustPoints.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-card bg-navy-2 px-5 py-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-semibold",
								children: point.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-paper/80",
								children: point.text
							})]
						}, point.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/agentic",
						className: "btn btn-paper mt-8",
						children: ["Business cases ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							"aria-hidden": "true",
							className: "size-4"
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto w-full max-w-6xl px-5 md:px-8 xl:px-12 py-16 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "03 — Engineer"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-semibold md:text-4xl",
						children: "Advice stays honest because we can build the thing."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/engineering",
					className: "btn btn-line",
					children: ["Technical depth ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						"aria-hidden": "true",
						className: "size-4"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: capabilities.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-card bg-card px-5 py-5 shadow-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-semibold text-primary",
							children: item.code
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-lg font-semibold",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted",
							children: item.stance
						})
					]
				}, item.code))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StartHere, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-6xl px-5 md:px-8 xl:px-12 py-16 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Sectors"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-2xl font-display text-3xl font-semibold md:text-4xl",
						children: "Commercial work, not abstract demos."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-3 md:grid-cols-2",
						children: industries.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/agentic",
							hash: item.id,
							className: "flex min-h-16 items-center justify-between gap-4 rounded-card bg-paper px-5 py-4 shadow-border transition-shadow hover:shadow-lift",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display font-semibold",
								children: item.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-muted",
								children: item.line
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								"aria-hidden": "true",
								className: "size-4 shrink-0 text-primary"
							})]
						}) }, item.id))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto w-full max-w-6xl px-5 md:px-8 xl:px-12 py-16 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Method"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-semibold md:text-4xl",
					children: "Assess. Architect. Prove. Embed."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-8 grid gap-4 md:grid-cols-4",
					children: method.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-t-2 border-primary pt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm font-semibold text-primary",
								children: step.code
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-xl font-semibold",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-muted",
								children: step.text
							})
						]
					}, step.code))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-navy text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid w-full max-w-6xl gap-8 px-5 md:px-8 xl:px-12 py-16 md:grid-cols-2 md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow eyebrow-light",
					children: "The room"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-semibold md:text-4xl",
					children: "Seasoned judgment. Young intelligence."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-paper/85",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A recent firm, on purpose. The work is not recent: audits, incidents, production systems, and the Monday after a go-live. Principals who have held that weight sit with engineers who build agents and product software now." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4",
							children: "Neither side is decoration for the other. That is the intention."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/approach",
							className: "btn btn-line-light mt-6",
							children: "How we work"
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto w-full max-w-6xl px-5 md:px-8 xl:px-12 py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-card bg-foam px-6 py-10 md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "max-w-2xl font-display text-3xl font-semibold md:text-4xl",
						children: "Tell us the pain. We will tell you what we would not automate."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-muted",
						children: "A control problem, a systems problem, or work an agent should take. The briefing stays on your side until you choose to send it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "btn btn-primary mt-6",
						children: "Start a brief"
					})
				]
			})
		})
	] });
}
//#endregion
export { Home as component };
