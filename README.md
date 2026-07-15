# Hassan Talha — Portfolio (React)

> **This is the React version of the portfolio**, living on the `react-portfolio` branch.
> It is a separate, modern rebuild — different design, multi-page, animated — meant to be
> hosted on its own with a Vercel CI/CD pipeline.
> The original no-build static site (with the admin editor) lives on the **`main`** branch.

A production-grade personal portfolio for **Hassan Talha — full-stack Software Developer** (Flutter · Web · Backend), built with **React + Vite** and animated with **Framer Motion**.

## ✨ Highlights

- **🎭 Role-driven profiles** — visitors land on a generalist *Software Developer* profile and can
  **type a role** in the hero command bar (or use the navbar switch) to morph the whole site into
  a tailored **Flutter**, **Web** or **Backend** profile. See [Role-driven profiles](#-role-driven-profiles).
- **Multi-page app** — Home, About, Projects, Contact (client-side routing via React Router).
- **Distinct design system** — near-black canvas, per-role accent colour, big `Sora` display type.
- **Light / dark theme** toggle (remembered between visits).
- **Production animations** — animated route transitions, scroll-reveal, typewriter hero,
  count-up stats, infinite marquee, magnetic buttons, a custom cursor, parallax background
  blobs and a scroll-progress bar. All respect `prefers-reduced-motion` and disable on touch.
- **Filterable projects** grid with animated layout — re-framed per role.
- **Accessible, responsive, SEO-friendly** (semantic markup, meta/OG tags, per-role `<title>`).
- **Zero content duplication** — everything reads from two data files.

## 🎭 Role-driven profiles

The same person is presented through four lenses. Type a keyword (e.g. `flutter`, `react`, `node`,
`php`) in the hero command bar, click a role chip, or use the navbar switch — the hero copy, skills,
featured projects and the **site-wide accent colour** all retune to that role. Every project carries
per-role framings, so the same real work is retold as its **Flutter app**, its **React/Next.js web
build** and its **Node/PHP backend**.

The active role is saved to the **URL** (`?role=`) and `localStorage`, so each profile is a
**shareable, bookmarkable link**:

| Profile | Accent | Shareable link | Also matches when you type… |
|---|---|---|---|
| **Software Developer** (default) | lime | `/` or `/?role=default` | `software`, `dev`, `full stack` |
| **Flutter Developer** | blue | `/?role=flutter` | `flutter`, `dart`, `mobile`, `app`, `android`, `ios` |
| **Web Developer** | violet | `/?role=web` | `web`, `react`, `next`, `frontend`, `svelte`, `ui` |
| **Backend Developer** | emerald | `/?role=backend` | `backend`, `node`, `express`, `php`, `laravel`, `mysql`, `postgres`, `mongo`, `redis`, `supabase` |

The role also applies on the inner pages, e.g. `/about?role=backend`, `/projects?role=web`,
`/projects?role=flutter`. Press <kbd>/</kbd> anywhere to jump into the command bar.

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
    ├── main.jsx                    # App bootstrap + Router + PersonaProvider
    ├── App.jsx                     # Layout shell + animated routes + per-role accent/title
    ├── index.css                   # Global design system (themes, components)
    ├── data/
    │   ├── portfolio.js            # ← Static content: profile, experience, education, etc.
    │   └── personas.js             # ← Role content: per-role copy/skills + per-project framings
    ├── context/PersonaContext.jsx  # Active-role state + URL/localStorage persistence
    ├── hooks/useTheme.js
    ├── components/                 # Navbar, Footer, Cursor, Background, Reveal, Magnetic, Marquee,
    │                               #   Typewriter, Counter, ProjectCard, SkillCard, CTA, Icons,
    │                               #   RoleCommand (hero command bar), PersonaSwitch (role switcher)
    └── pages/                      # Home, About, Projects, Contact
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

Content lives in two files:

- **`src/data/portfolio.js`** — static, role-independent content: your profile (name, contact,
  socials), work experience, education, certifications, awards and languages.
- **`src/data/personas.js`** — everything role-specific:
  - `personas[]` — for each role: the label, accent colour, typewriter roles, tagline, summary,
    stats, skill groups, hero badge and the `keywords` that make typing match that role.
  - `projectData[]` — each project once, with a `variants` map (`default` / `flutter` / `web` /
    `backend`) so the same project is described from each angle. Add or reword a variant to change
    how a project reads for that role.

To add a whole new role, append an entry to `personas[]` (give it a unique `id`, `keywords` and an
`accent`) and add a matching `variants` key to each project — the command bar, navbar switch and all
pages pick it up automatically.

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
