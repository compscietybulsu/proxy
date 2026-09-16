# Cloudflare Pages Proxy

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/compscietybulsu/proxy)

A lightweight Cloudflare Worker to proxy Cloudflare-deployed services without CNAME collision issues.

## Why?

Pointing a custom domain or Worker across different Cloudflare accounts directly via CNAME returns [Error 1014: CNAME Cross-User Banned](https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/error-1014/). This Worker proxies HTTP requests to the target domain while preserving request method, headers, query parameters, body, and rewriting the `Host` header.

## Configuration

Set the upstream target destination using the `TARGET_URL` environment variable in `wrangler.jsonc` or via the Cloudflare dashboard:

| Variable | Description | Default |
|---|---|---|
| `TARGET_URL` | Upstream destination URL to proxy requests to | `https://website.cssbulsu.workers.dev` |

## Local Development

1. Install dependencies:
```bash
pnpm install
```

2. Copy the development variables example:
```bash
cp .dev.vars.example .dev.vars
```

3. Run the local development server:
```bash
pnpm dev
```

## Manual Deploy

Deploy to your Cloudflare account using Wrangler:

```bash
pnpm deploy
```

---

&copy; 2026 CompSciety BulSU
