# Hassan Talha — Portfolio Website

A fast, modern, **single-page portfolio** with a built-in **admin/settings page** to edit all content (profile image, name, contact, skills, experience, projects, education, etc.) — no coding required.

No build step, no install. Pure HTML/CSS/JS.

## Files
```
hassan-portfolio/
├── index.html        # The public portfolio
├── admin.html        # Settings page — edit everything here
├── css/style.css     # All styles
└── js/
    ├── data.js       # Default content + storage helpers
    ├── main.js       # Renders the portfolio
    └── admin.js      # Powers the settings editor
```

## How to run
Just open `index.html` in a browser.

Or run a tiny local server (recommended, avoids file restrictions):
```bash
cd hassan-portfolio
python3 -m http.server 8000
# then open http://localhost:8000
```

## How to edit your portfolio
1. Open **`admin.html`** (or click "Edit Portfolio" in the site footer).
2. Update any section — upload a profile photo, change text, add/remove projects, etc.
3. Click **💾 Save Changes**.
4. Open `index.html` to see it live.

Changes are stored in your browser (localStorage).

## Backing up / deploying with your real data
- **Export**: in admin, click **⬇ Export** → downloads `portfolio-data.json`.
- **Import**: click **⬆ Import** to restore it on another browser/device.
- To publish online (GitHub Pages, Netlify, Vercel), upload the whole folder. After deploying, open `admin.html` on the live site, **Import** your JSON, and **Save**.

> Tip: To ship your data baked-in (so visitors see it without importing), paste your exported JSON values into `DEFAULT_DATA` in `js/data.js`.

## Reset
The **↺ Reset** button restores the original content from the resume.
