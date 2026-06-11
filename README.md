# Versed Hand — versedhand.com

Marketing site for Versed Hand: website design & SEO, social media management, and virtual assistant placement for Nashville service businesses.

**Stack:** Next.js (App Router, TypeScript) · Tailwind CSS v4 · static export (`output: "export"`) — ideal for Cloudflare Pages.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to ./out
```

## Deploy to Cloudflare Pages

### Option A — Git integration (recommended)
1. Push this repo to GitHub/GitLab.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
4. Deploy, then add `versedhand.com` under **Custom domains**.

### Option B — Direct upload (no Git)
```bash
npm run build
npx wrangler pages deploy out --project-name=versedhand
```

No environment variables, server functions, or KV needed — the site is fully static.

## Structure

- `app/page.tsx` — Home (hero, work-order ticket, services, testimonials, CTA)
- `app/services/page.tsx` — Service detail sections (`#websites`, `#social`, `#assistants`)
- `app/about/page.tsx` — Story + how-we-work
- `app/contact/page.tsx` + `components/ContactForm.tsx` — contact info + form
- `app/blog/page.tsx` — Resources listing; add posts to the `posts` array to populate the grid
- `app/sitemap.ts`, `app/robots.ts` — SEO endpoints
- `app/globals.css` — design tokens (palette, type) as Tailwind v4 `@theme` variables

## Before launch

- **Testimonials on the home page are placeholder copy** — replace with real client quotes (and get permission to use them).
- The contact form shows a success state but **does not send anywhere yet**. To wire it up on Cloudflare Pages, the simplest options are a Pages Function (`/functions/api/contact.ts`) emailing via MailChannels/Resend, or a service like Formspree/Web3Forms — point the form `onSubmit` at it.
- Fonts are self-hosted (Zilla Slab + Figtree) — no external requests, good for Lighthouse.
