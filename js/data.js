/* =========================================================
   data.js  —  Default content + storage helpers
   Shared by index.html (portfolio) and admin.html (editor)
   ========================================================= */

const STORAGE_KEY = "hassan_portfolio_data_v2";

/* Default content seeded from the resume.
   Everything here is editable from the Admin page. */
const PLAY = "https://play.google.com/store/apps/details?id=";

const DEFAULT_DATA = {
  profile: {
    name: "Hassan Talha",
    title: "Flutter & Full Stack Developer",
    // Rotating words shown by the animated typewriter in the hero.
    roles: [
      "Flutter & Full Stack Developer",
      "Mobile App Developer · Android & iOS",
      "React & Next.js Web Developer",
      "Node.js & NestJS Backend Developer",
    ],
    tagline: "I build and ship production apps end-to-end: Flutter apps live on Google Play, React / Next.js web apps and Node.js / NestJS APIs with real-time features and payments.",
    available: true,
    location: "Rawalpindi, Pakistan",
    phone: "+92 316 5218752",
    email: "hassantalha807@gmail.com",
    linkedin: "https://www.linkedin.com/in/hassan-talha-452a7a283/",
    github: "https://github.com/hassan-t8",
    resumeUrl: "assets/Hassan_Talha_CV.pdf",
    image: "",
    summary:
      "Flutter & Full Stack Developer with 3+ years of experience building and publishing production apps. Sole developer of the Care N Clean User, Partner and CRM apps and main developer on the CureVista healthcare platform, with 5 apps published on Google Play. Strong in Flutter, Riverpod, React, Next.js, Node.js, NestJS, PostgreSQL and MySQL, with real-time features (Socket.IO, LiveKit), payments (HyperPay, Stripe), Firebase push notifications and CI/CD.",
  },

  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "5", label: "Apps on Google Play" },
    { value: "15+", label: "Projects Delivered" },
    { value: "2400+", label: "Commits in Production Apps" },
  ],

  skills: [
    { category: "Mobile Development", items: ["Flutter", "Dart", "Riverpod", "Provider", "Clean Architecture", "go_router", "Dio", "Firebase FCM", "Google Maps", "LiveKit Calls", "Android & iOS", "Google Play Console"] },
    { category: "Frontend Development", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Vite", "Svelte", "Vue 3", "Astro", "Responsive UI", "SEO"] },
    { category: "Backend Development", items: ["Node.js", "Express.js", "NestJS", "REST APIs", "Socket.IO", "JWT / OAuth", "Sign in with Apple", "Cron Jobs", "PHP"] },
    { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite", "Prisma", "Sequelize", "TypeORM"] },
    { category: "Payments & Integrations", items: ["HyperPay", "Stripe", "PayPal", "JazzCash", "Easypaisa", "Wallets", "Twilio", "AWS S3", "Google Places"] },
    { category: "DevOps & Tools", items: ["Docker", "GitHub Actions CI/CD", "Nginx", "PM2", "Linux VPS", "Vercel", "Git", "Jira", "Figma", "Postman"] },
  ],

  experience: [
    {
      role: "Full Stack & Flutter Developer",
      company: "Marifahsol",
      location: "Islamabad, Pakistan",
      period: "April 2025 – Present",
      bullets: [
        "Sole Flutter developer of the Care N Clean home-services platform (User, Partner and CRM apps, 2,480+ commits) and main developer on the CureVista healthcare platform (469 of 665 commits).",
        "Published and maintain 5 apps on Google Play: app signing, AAB builds, store listings and review compliance.",
        "Built Node.js/Express and NestJS APIs for HyperPay payments, payment links, wallets, Sign in with Apple, WhatsApp/SMS OTP, account deletion and FCM push broadcasts.",
        "Built React CRM dashboards and integrated Socket.IO real-time updates, Google Maps and LiveKit voice/video calls across web and mobile.",
      ],
    },
    {
      role: "Software Developer",
      company: "TechChaps.uk",
      location: "Islamabad, Pakistan",
      period: "February 2024 – March 2025",
      bullets: [
        "Main developer of the Thrive Hub Flutter app (184 of 215 commits): 38 screens across consumer and business portals with ~20 REST endpoints.",
        "Built the Talk to Learn language-learning app almost single-handedly: 23 screens, voice recording, AWS S3 uploads and Stripe subscriptions.",
        "Delivered SvelteKit, Vue 3 and TypeScript/Express features via GitLab merge requests in Agile sprints.",
      ],
    },
    {
      role: "Backend Developer",
      company: "GrowUp Tech Solutions",
      location: "Islamabad, Pakistan",
      period: "February 2023 – November 2023",
      bullets: [
        "Built RESTful APIs with Node.js, Express.js and MongoDB for mobile apps and admin panels, including authentication and role management.",
        "Designed database models, optimized queries and supported frontend and mobile teams with API integration and documentation.",
      ],
    },
  ],

  projects: [
    {
      name: "Care N Clean – User, Partner & CRM Apps",
      status: "Live on Google Play",
      tech: "Flutter, Riverpod, Provider, Socket.IO, Firebase FCM, Google Maps, HyperPay, Node.js",
      period: "Jun 2025 – Oct 2026",
      bullets: [
        "Sole developer of three production apps for a UAE home-services platform: customer booking, partner/driver/crew field operations, and a 51-module admin CRM.",
        "Server-driven service catalog, cart and recurring bookings, HyperPay payments and wallets, real-time dispatch via Socket.IO, and 170+ automated test files.",
      ],
      links: [
        { label: "CNC Partner on Google Play", url: PLAY + "com.carenclean.partner" },
        { label: "Website", url: "https://carencleans.com" },
      ],
    },
    {
      name: "CureVista – Home Physiotherapy Platform",
      status: "Live on Google Play",
      tech: "Flutter, Riverpod, LiveKit, NestJS, PostgreSQL, Redis, React, Astro",
      period: "Jun 2026 – Oct 2026",
      bullets: [
        "Most active developer on a platform of a NestJS API (431 endpoints), React admin CRM, Astro SEO site and two Flutter apps for patients and physiotherapists.",
        "LiveKit voice/video calls, clinical documentation with PDF reports, Google & Apple sign-in, wallet and bank-transfer payments.",
      ],
      links: [
        { label: "Patient App", url: PLAY + "pk.curevista.patient" },
        { label: "Physio App", url: PLAY + "pk.curevista.physio" },
        { label: "Website", url: "https://curevista.pk" },
      ],
    },
    {
      name: "WePower Solar – Company Website & Admin CRM",
      status: "Live",
      tech: "PHP 8, MySQL, React, Express, Firebase FCM, Chart.js, GitHub Actions",
      period: "May 2026 – Oct 2026",
      bullets: [
        "Solo-built company website with 5 lead-capture forms (quotes, site surveys, load calculator, careers) and an admin CRM with analytics, CSV export and job postings.",
        "Cut homepage image weight from 9.3 MB to 0.48 MB, added English/Urdu, SEO, push notifications and SSH-based CI/CD to a VPS.",
      ],
      links: [
        { label: "Live Site", url: "https://wepowerenergysolutions.com/" },
        { label: "Admin Panel", url: "https://wepowerenergysolutions.com/admin/login" },
        { label: "Code", url: "https://github.com/hassan-t8/wepower-solar-php" },
      ],
    },
    {
      name: "PNG Distribution – Wholesale & Retail Store",
      status: "Live Demo",
      tech: "Next.js 15, React 19, TypeScript, PostgreSQL, Prisma, Tailwind CSS, Playwright",
      period: "Oct 2026",
      bullets: [
        "Bilingual (English/Urdu, RTL) B2B/B2C store with 55 pages, tiered pricing, geofenced delivery fees and live GPS rider tracking.",
        "Real-time updates via Server-Sent Events over PostgreSQL LISTEN/NOTIFY, role permission matrix, audit trail and 33 Playwright E2E tests.",
      ],
      links: [
        { label: "Live Demo", url: "https://png-testing.185-211-6-213.sslip.io/" },
        { label: "Admin Panel", url: "https://png-testing.185-211-6-213.sslip.io/admin" },
      ],
    },
    {
      name: "Talk to Learn – Language Learning App",
      tech: "Flutter, Provider, Stripe, flutter_sound, AWS S3, Vue 3, Node.js",
      period: "Mar 2024 – Oct 2024",
      bullets: [
        "Built the Flutter app almost single-handedly (23 screens): voice-recorded language tasks uploaded to AWS S3, quizzes, scoring and feedback.",
        "Stripe subscriptions with saved cards, plan upgrades, billing history and cancellation, plus plan upgrades in the Vue 3 web app and Node.js API.",
      ],
    },
    {
      name: "Nikamy – Fashion E-Commerce Platform",
      tech: "Next.js 14, TypeScript, Express, Sequelize, MySQL, Stripe, Flutter",
      period: "May 2026 – Sep 2026",
      bullets: [
        "Solo-built store and admin panel: 41 pages, ~117 REST endpoints and 31 models shared by the web store and a Flutter app.",
        "6 payment methods (Stripe, PayPal, JazzCash, Easypaisa, bank transfer, COD), B2B wholesale tiers and CI with 4 API test suites.",
      ],
    },
    {
      name: "SnapGrab – Media Downloader & Browser Toolkit",
      tech: "Next.js 16, React 19, TypeScript, Prisma, Tailwind CSS, Framer Motion",
      period: "Aug 2026",
      bullets: [
        "41 SEO landing pages generated from one registry with dynamic OG images and JSON-LD, and 24 privacy-first tools that run fully in the browser.",
        "Admin dashboard for visitor and download analytics, API quota monitoring and per-service on/off switches.",
      ],
      links: [{ label: "Code", url: "https://github.com/hassan-t8/snapgrab" }],
    },
    {
      name: "Thrive Hub – Business Review Platform",
      tech: "Flutter, REST APIs, SvelteKit, TypeScript, Express, PostgreSQL",
      period: "Jun 2024 – Jan 2025",
      bullets: [
        "Main Flutter developer: 38 screens for consumer and business portals with search, reviews and replies, team management and a guest Discovery Mode.",
        "Built SvelteKit pricing, review and blog pages and TypeScript/Express endpoints with SQL migrations.",
      ],
    },
    {
      name: "Elazel – E-Commerce Platform",
      tech: "TypeScript, Express, PostgreSQL, Vue 3, FormKit",
      period: "Mar 2024 – Jun 2024",
      bullets: [
        "Built a layered Deals module with 10 CRUD REST endpoints and rebuilt the account views with Vue 3, TypeScript and reusable form components.",
      ],
    },
    {
      name: "Touch Bistro – Restaurant Ordering System",
      status: "Award Winner",
      tech: "Flutter, Node.js",
      period: "2022 – 2023",
      bullets: [
        "Final Year Project: QR menu ordering, real-time order tracking and payments across mobile and web. 2nd Position at NUML Open House 2023.",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      institution: "National University of Modern Languages (NUML), Islamabad",
      period: "2020 – 2024",
      detail: "CGPA: 3.55 / 4.00",
    },
  ],

  certifications: [
    "Node.js – Code with Harry (2024)",
    "Flutter App Development – Code with Dhruv (2023)",
    "Freelancing – DigiSkills (2019)",
  ],

  awards: [
    "2nd Position – NUML Open House 2023, Touch Bistro project (Certificate of Achievement).",
    "Active Member – NUML Computer Science Society (NCSS), organising and supporting community events.",
  ],

  languages: [
    { name: "English", level: "Professional" },
    { name: "Urdu", level: "Native" },
    { name: "Punjabi", level: "Native" },
    { name: "German", level: "Basic" },
  ],
};

/* ---------- Storage helpers ---------- */

// Deep clone so defaults are never mutated
function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Load saved data merged over defaults (so new fields always exist)
function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return clone(DEFAULT_DATA);
    const saved = JSON.parse(raw);
    return { ...clone(DEFAULT_DATA), ...saved };
  } catch (e) {
    console.warn("Failed to load saved data, using defaults.", e);
    return clone(DEFAULT_DATA);
  }
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function resetData() {
  localStorage.removeItem(STORAGE_KEY);
}

// Build initials from a name (used when no profile image is set)
function initialsOf(name) {
  return (name || "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0] || "")
    .join("")
    .toUpperCase();
}
