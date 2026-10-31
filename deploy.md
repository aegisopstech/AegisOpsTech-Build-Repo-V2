# Deploying from the build repo

This repo holds the **built** AegisOps site — the `.output/` folder produced by
`npm run build` in `AegisOpsTech-Code-Repo-V2`. Do not edit these files by
hand; change the source in the code repo and rebuild.

It deploys as the Cloudflare Worker **`aegisops-web`** on the account
`aegisopstech@gmail.com`. Live URL:
https://aegisops-web.aegisopstech.workers.dev

## What is here

| Path | Contents |
| --- | --- |
| `server/` | Worker code (`index.mjs` + chunks) and `wrangler.json`, the deploy config |
| `public/` | Static files served by Cloudflare (JS/CSS in `assets/`, images, favicon, `_headers`) |
| `nitro.json`, `package.json` | Build metadata |

Each commit message names the source commit in the code repo and the Worker
version it was deployed as.

## Deploy this build

Needs Node.js 22+ and a Cloudflare login (`npx wrangler@4 login`, check with
`npx wrangler@4 whoami`). From the root of this repo:

```powershell
npx wrangler@4 deploy --config server/wrangler.json
```

To test first without touching the live site:

```powershell
npx wrangler@4 versions upload --config server/wrangler.json --message "What changed"
npx wrangler@4 versions deploy <version-id>@100% --yes
```

The first command prints a preview URL to check before running the second.

The `RESEND_API_KEY` secret lives on the Worker in Cloudflare and survives
deploys; variables come from `server/wrangler.json`.

## Roll back to an older build

Either redeploy an earlier commit of this repo:

```powershell
git checkout <commit>
npx wrangler@4 deploy --config server/wrangler.json
git checkout main
```

or pick an earlier version in the Cloudflare dashboard → Workers & Pages →
`aegisops-web` → **Deployments**.

## Update this repo after a release

Run step 8 of `deploy.md` in the code repo. It replaces these files with the
new `.output/`, sets `server/wrangler.json`'s assets path to `"../public"`
(the Windows build writes `..\\public`, which breaks deploys on Linux), and
commits and pushes.
