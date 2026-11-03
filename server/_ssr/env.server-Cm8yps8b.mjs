import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/env.server-Cm8yps8b.js
function env(key) {
	return processModule.env[key]?.trim() || void 0;
}
//#endregion
export { env as t };
