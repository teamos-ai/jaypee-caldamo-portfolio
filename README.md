# Jaypee Caldamo — Virtual Assistant Portfolio

A premium, cinematic single-page portfolio for **Jaypee Caldamo**, a marketing &
admin virtual assistant. Full-screen looping video hero, liquid-glass UI, floating
skill "power-ups", real client work (Contact Centre Network NZ / *The Kiwi CX
Collective*), and an inline "Book a Call" section.

Built with **Vite + React 18 + TypeScript + Tailwind CSS 3 + Framer Motion +
lucide-react**.

---

## Run it locally

> ⚠️ Build/dev on a **local drive** (e.g. `C:\dev`). Vite/esbuild cannot resolve
> modules from paths containing spaces (the network share does), so keep the
> working copy off the share.

```bash
cd C:\dev\jaypee-caldamo
npm install
npm run dev      # http://localhost:5192  (or 5173 default)
npm run build    # type-checks + outputs static site to /dist
npm run preview  # serve the production build
```

---

## Everything you can customise — `src/config.ts`

One file controls the per-deployment values:

| Field | What it does |
| --- | --- |
| `bookingEmbedUrl` | Inline booking calendar. **Connected** to the Team OS GoHighLevel widget (`link.teamos.ai/widget/booking/JRFrBfUv9kJwUPzABtAO`). The Booking component auto-loads GHL's `form_embed.js` so the iframe resizes to the calendar's height. Clear this value to fall back to the email panel. |
| `socials.linkedin` | Replace `#` with Jaypee's real LinkedIn URL. |
| `email`, `phone`, `location` | Contact details (already filled from the résumé). |
| `domain` | Your final domain — used in a couple of places. |

When you connect a **custom domain**, also update the absolute URLs in:
`index.html` (`<link rel="canonical">`, `og:url`, `og:image`, `twitter:image`,
JSON-LD `url`), `public/sitemap.xml`, and `public/robots.txt`.

---

## Go live on Vercel

1. Push this repo to GitHub (already done: `teamos-ai/jaypee-caldamo-portfolio`).
2. In Vercel → **Add New → Project → Import** this repo.
3. Framework preset: **Vite** (auto-detected). Build: `npm run build`, Output: `dist`.
4. Deploy. Add a custom domain when ready.

> If a Vercel deploy is blocked on author email, ensure commits use the
> Team OS no-reply email (`211211395+teamos-ai@users.noreply.github.com`).

---

## Content & assets

- **Résumé** → `public/Jaypee-Caldamo-Resume.pdf` (linked in nav/footer).
- **Portfolio images** → `public/assets/image-*.png` (his real CCNNZ work).
- **Hero video** → `public/hero.mp4` (self-hosted for reliability).
- All copy (skills, experience, works, testimonial) lives in `src/data/content.tsx`.

## SEO

Meta + Open Graph + Twitter cards, JSON-LD `Person` schema, `sitemap.xml`,
`robots.txt`, `site.webmanifest`, a generated `og-image.jpg`, and an SVG favicon
are all wired up. Update the absolute URLs after setting the final domain.
