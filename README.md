# Hassan Talha — Portfolio (React)

> **This is the React version of the portfolio**, living on the `react-portfolio` branch.
> It is a separate, modern rebuild — different design, multi-page, animated — meant to be
> hosted on its own with a Vercel CI/CD pipeline.
> The original no-build static site (with the admin editor) lives on the **`main`** branch.

A production-grade personal portfolio for **Hassan Talha — Mobile Application Developer**, built with **React + Vite** and animated with **Framer Motion**.

## ✨ Highlights

- **Multi-page app** — Home, About, Projects, Contact (client-side routing via React Router).
- **Distinct design system** — near-black canvas, electric-lime accent, big `Sora` display type.
- **Light / dark theme** toggle (remembered between visits).
- **Production animations** — animated route transitions, scroll-reveal, typewriter hero,
  count-up stats, infinite marquee, magnetic buttons, a custom cursor, parallax background
  blobs and a scroll-progress bar. All respect `prefers-reduced-motion` and disable on touch.
- **Filterable projects** grid with animated layout.
- **Accessible, responsive, SEO-friendly** (semantic markup, meta/OG tags).
- **Zero content duplication** — everything reads from one data file.

## 🧱 Tech stack

| | |
|---|---|
| Framework | React 18 |
| Build tool | Vite 5 |
| Routing | React Router 6 |
| Animation | Framer Motion 11 |
| Styling | Plain CSS with a token-based design system (no Tailwind, no UI kit) |
| Icons | Inline SVG (no icon dependency) |

## 📁 Structure

```
├── index.html              # Vite entry HTML
├── vercel.json             # Vite framework + SPA rewrites + asset caching
├── public/favicon.svg
└── src/
    ├── main.jsx            # App bootstrap + Router
    ├── App.jsx             # Layout shell + animated routes
    ├── index.css           # Global design system (themes, components)
    ├── data/portfolio.js   # ← ALL content lives here (edit this)
    ├── hooks/useTheme.js
    ├── components/         # Navbar, Footer, Cursor, Background, Reveal, Magnetic,
    │                       #   Marquee, Typewriter, Counter, ProjectCard, SkillCard, CTA, Icons
    └── pages/              # Home, About, Projects, Contact
```

## 🚀 Run locally

```bash
npm install
npm run dev       # http://localhost:5173
```

Other scripts:

```bash
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

## ✏️ How to edit content

Open **`src/data/portfolio.js`** — it's the single source of truth. Update your profile,
roles (typewriter), stats, skills, experience, projects, education, certifications, awards
and languages. Nothing else needs to change.

- Add a CV: drop a PDF in `public/` and set `profile.resumeUrl` (e.g. `/Hassan-Talha-CV.pdf`).
- Add a photo: place it in `public/`, then swap the `.portrait` initials in `src/pages/Home.jsx`
  for an `<img src="/your-photo.jpg" />`.

## ☁️ Deploy on Vercel (CI/CD)

1. Go to **vercel.com → Add New → Project** and import `hassan-t8/portfolio2026`.
2. On the import screen set **Production Branch = `react-portfolio`** (Settings → Git after import,
   or pick the branch when importing).
3. Vercel **auto-detects Vite** — leave Build Command (`vite build`) and Output (`dist`) as-is.
4. Click **Deploy**.

After that, the pipeline is automatic:

- Push to `react-portfolio` → **Production** deploy.
- Any other branch / PR → **Preview** deploy with its own URL.

`vercel.json` already configures the Vite framework, SPA fallback routing, and long-term
caching for hashed assets.
