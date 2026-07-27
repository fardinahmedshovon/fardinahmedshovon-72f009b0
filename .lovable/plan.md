## Changes

**1. Add launch year to the ApkBongo card**

Add `year: "2020"` to the venture data in `src/pages/Index.tsx`, then render it as a small muted line at the bottom of the card, styled like the existing `tag` (uppercase, tracked, muted color) so it reads as a subtle credential rather than a stat.

Card layout after change:
```text
FOUNDER · ACTIVE                 ↗

ApkBongo
Simplifying how people discover…

EST. 2020
```

**2. Add Vercel Analytics**

Since the site is deployed on Vercel, use `@vercel/analytics` — one-click, privacy-friendly, no cookie banner, free tier covers small sites.

Steps:
- `npm install @vercel/analytics`
- In `src/App.tsx`, import `{ Analytics } from "@vercel/analytics/react"` and render `<Analytics />` once at the app root.
- No config, no keys. Vercel auto-detects it and starts collecting pageviews after the next deploy.
- Enable it in the Vercel dashboard → Project → Analytics tab (free tier, one click) after redeploying.

What you'll see: pageviews, top pages, referrers (Twitter, LinkedIn, Google, direct), countries, devices. No personal data, no cookies.

## Not doing (unless you say otherwise)

- No changes to prerender script — the Analytics component mounts client-side and doesn't need to be in the static HTML.
- Skipping Plausible/GA — Vercel Analytics is simpler since you're already on Vercel.

## After the changes

Build locally to confirm no errors, then you'll need to redeploy to Vercel and flip on Analytics in the Vercel dashboard for data to start flowing.
