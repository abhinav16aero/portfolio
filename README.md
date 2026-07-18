```markdown
# Abhinav Kumar — Portfolio

This repository hosts the personal portfolio of **Abhinav Kumar**, Software Engineer (AI).
The site showcases projects, experience, education, and short essays on AI engineering.

🔗 **Live:** set `SITE_URL` in your environment (default is `https://abhinav16aero.github.io`)

---

## Tech stack

- **Framework:** Next.js (App Router) · React · TypeScript
- **Styling:** Tailwind CSS + design tokens
- **Animation:** Framer Motion
- **Integrations:** GitHub activity, contact form via Resend
- **Testing:** Vitest (unit) · Playwright (e2e)

## Highlights

- Live hero/status card with plasma backdrop and typed text effects
- Projects, Experience, Education, and a live GitHub signals section
- Blog listing links out to Medium (external posts)
- Accessible by design: keyboard skip link and respects `prefers-reduced-motion`

## Notable repo changes

- The in-repo SSH TUI formerly under `ssh/` has been moved to `ssh.bak/` and removed from the
  project root. If you need the SSH TUI, restore or inspect `ssh.bak/`.
- The sample blog page now forwards directly to the Medium article (external link).
- Spotify integration was removed from the codebase; there are no active Spotify widgets.

## Getting started

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

### Useful scripts

| Script | Description |
| --- | --- |
| `pnpm dev` | Start the dev server |
| `pnpm build` / `pnpm start` | Production build / serve |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm lint` | ESLint |
| `pnpm test` | Unit tests (Vitest) |
| `pnpm test:e2e` | End‑to‑end tests (Playwright) |

### Asset generators

```bash
node scripts/gen-icons.mjs      # generate icons
node scripts/gen-og.mjs         # generate OG images
node scripts/gen-games.mjs      # regenerate games metadata (if used)
node scripts/gen-worldmap.mjs   # regenerate world map assets
```

## Environment variables

Add these to `.env.local` for development and set them in your production host.

| Variable | Used for |
| --- | --- |
| `SITE_URL` | Canonical/OG/sitemap base URL |
| `RESEND_API_KEY` | Contact‑form email delivery |
| `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` | Contact recipient / verified sender |
| `GITHUB_TOKEN` | Optional — higher rate limits for the GitHub activity feed |
| `NEXT_PUBLIC_ENABLE_ANALYTICS` | Toggle analytics features |

> Note: Spotify environment variables have been removed.

## Deployment

Deploys easily to Vercel or any static hosting that supports Next.js App Router.

---

© Abhinav Kumar. Code available under MIT license.
```
Auto‑deploys to **Vercel** on push to `main`. Set the environment variables above in the Vercel
