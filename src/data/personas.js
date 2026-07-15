/* =========================================================
   personas.js — the "role switcher" brain.

   The portfolio is one person shown through four lenses.
   The visitor lands on the generalist "Software Developer"
   profile and can TYPE a role (flutter / web / backend) to
   morph the whole site — hero copy, skills, projects and the
   accent colour all retune to that specialty.

   Every project carries per-persona "variants" so the same
   real work is retold from the angle the visitor cares about
   (the Flutter apps are also framed as their React/Next web
   builds and their Node/DB backends).
   ========================================================= */

/* ---------- PROJECTS with per-persona framing ---------- */
/* Each project describes the same product from 4 angles.
   `sub` overrides the subtitle for that lens when useful.   */
export const projectData = [
  {
    name: "CureVista",
    subtitle: "Physiotherapy & Patient Platform",
    period: "2025",
    featured: true,
    variants: {
      default: {
        tech: ["Flutter", "Node.js", "PostgreSQL", "Stripe", "Next.js"],
        bullets: [
          "End-to-end healthcare platform — patient + physiotherapist apps, a web dashboard and the Node/PostgreSQL API behind them.",
          "Session booking, paid packages, Stripe payments and secure refunds with a full appointment lifecycle.",
        ],
      },
      flutter: {
        sub: "Dual Patient & Physiotherapist Apps",
        tech: ["Flutter", "Dart", "Riverpod", "Stripe SDK", "Push Notifications"],
        bullets: [
          "Built a dual-app Flutter platform — a Patient app and a Physiotherapist app — for end-to-end clinic management and remote care.",
          "Session booking for consultations, follow-ups and paid packages with Stripe payments and secure refund flows.",
          "Full appointment lifecycle (schedule / reschedule / cancel / track) with reviews, ratings and real-time push notifications.",
        ],
      },
      web: {
        sub: "Clinic Web Dashboard & Booking Portal",
        tech: ["Next.js", "React", "TypeScript", "Tailwind", "Stripe.js"],
        bullets: [
          "Delivered the clinic-facing web dashboard as a Next.js app — server-rendered schedules, patient records and package management.",
          "Responsive booking portal in React with Stripe.js checkout, optimistic UI and role-based views for patients vs. physiotherapists.",
          "Shared design system and API layer with the mobile apps so web and app stay pixel- and data-consistent.",
        ],
      },
      backend: {
        sub: "Booking, Payments & Notifications API",
        tech: ["Node.js", "Express.js", "PostgreSQL", "Stripe", "Redis"],
        bullets: [
          "Designed the Node.js / Express API powering users, sessions, packages and payments with a normalised PostgreSQL schema.",
          "Stripe payment + refund webhooks, idempotent booking transactions and Redis-cached availability lookups.",
          "Push-notification service and reviews/ratings endpoints consumed by both mobile apps and the web dashboard.",
        ],
      },
    },
  },
  {
    name: "Care & Clean",
    subtitle: "Home Services Platform",
    period: "Jul 2025 – Present",
    featured: true,
    variants: {
      default: {
        tech: ["Flutter", "Node.js", "Next.js", "Hyperpay", "Google Maps"],
        bullets: [
          "On-demand home-cleaning platform — customer app, staff app, a Next.js CRM and the pricing/booking engine tying them together.",
          "Dynamic pricing, promo codes, live geolocation tracking and Hyperpay payments across the whole stack.",
        ],
      },
      flutter: {
        sub: "Customer & Staff Mobile Apps",
        tech: ["Flutter", "Dart", "Provider", "Google Maps", "Hyperpay"],
        bullets: [
          "Developed two Flutter apps — a customer-facing User app and an internal Admin & Staff app — for a home-cleaning marketplace.",
          "Bookings, a dynamic pricing engine, promo codes, Google Maps integration and live geolocation tracking.",
          "Hyperpay payment flow with saved cards, order status timeline and push notifications.",
        ],
      },
      web: {
        sub: "Next.js CRM & Ops Dashboard",
        tech: ["Next.js", "React", "TypeScript", "Tailwind", "Maps API"],
        bullets: [
          "Built the operations CRM in Next.js — job dispatch board, staff scheduling and revenue analytics with server components.",
          "Interactive React maps for live crew tracking and coverage zones, plus a promo-code and pricing-rules admin.",
          "Rebuilt the customer booking journey as a responsive React web flow sharing the same Node APIs as the apps.",
        ],
      },
      backend: {
        sub: "Pricing Engine & Booking Services",
        tech: ["Node.js", "Express.js", "MySQL", "Redis", "Hyperpay"],
        bullets: [
          "Built the dynamic pricing engine and booking services in Node.js / Express with a MySQL data model.",
          "Hyperpay payment integration, promo-code validation and Redis-backed job queues for dispatch and notifications.",
          "Geolocation and Google Maps APIs wired into the backend for distance-based pricing and crew assignment.",
        ],
      },
    },
  },
  {
    name: "Thrive Hub",
    subtitle: "Business & Subscription Platform",
    period: "2024 – 2025",
    featured: true,
    variants: {
      default: {
        tech: ["Flutter", "Node.js", "PostgreSQL", "Svelte", "Docker"],
        bullets: [
          "Business-directory + subscription platform — mobile app, Svelte web front-end and a Dockerised Node/PostgreSQL backend.",
          "Business registration, reviews and Stripe subscription billing with real-time notifications.",
        ],
      },
      flutter: {
        sub: "Business & Subscriptions App",
        tech: ["Flutter", "Dart", "Provider", "Stripe", "Firebase"],
        bullets: [
          "Built a Flutter app for business registration, profile management, user reviews and Stripe subscription billing.",
          "Real-time notifications and a smooth onboarding flow tuned for both iOS and Android.",
        ],
      },
      web: {
        sub: "Web Directory & Billing Portal",
        tech: ["React", "Next.js", "Svelte", "TypeScript", "Stripe.js"],
        bullets: [
          "Built the public business directory and subscriber portal as a fast, SEO-friendly web app (React / Next.js, Svelte components).",
          "Self-serve billing UI with Stripe.js, plan upgrades/downgrades and a reviews & profile management dashboard.",
        ],
      },
      backend: {
        sub: "Subscription & Billing Services",
        tech: ["Node.js", "Express.js", "PostgreSQL", "Docker", "Stripe"],
        bullets: [
          "Developed scalable subscription services with Node.js, PostgreSQL and Docker — clean REST APIs and well-structured data models.",
          "Stripe recurring-billing webhooks, plan/entitlement logic and a notification pipeline for renewals and reviews.",
        ],
      },
    },
  },
  {
    name: "Talk To Learn",
    subtitle: "Language Learning App",
    period: "2024",
    variants: {
      default: {
        tech: ["Flutter", "Node.js", "MongoDB", "Stripe"],
        bullets: [
          "Language-learning product — Flutter app, Node/MongoDB APIs and AI-driven feedback on voice recordings.",
          "Teachers manage classes; students complete spoken tasks with Stripe-paid lessons.",
        ],
      },
      flutter: {
        sub: "Voice-Driven Learning App",
        tech: ["Flutter", "Dart", "Provider", "Shared Prefs", "Stripe"],
        bullets: [
          "Developed a Flutter language-learning app with Provider state management, Shared Preferences and Stripe payments.",
          "Voice-recording tasks with AI-driven feedback; teachers manage classes while students complete spoken exercises.",
        ],
      },
      web: {
        sub: "Teacher Web Console",
        tech: ["React", "Next.js", "TypeScript", "Tailwind", "REST"],
        bullets: [
          "Built the teacher web console in React/Next.js — class management, student progress dashboards and content authoring.",
          "Audio playback and review UI for grading student voice submissions from the browser.",
        ],
      },
      backend: {
        sub: "Content & Audio APIs at Scale",
        tech: ["Node.js", "Express.js", "MongoDB", "Redis", "Stripe"],
        bullets: [
          "Built scalable Node.js / MongoDB APIs sized for high volumes of lessons, audio submissions and AI-feedback jobs.",
          "Stripe lesson payments, media-upload handling and Redis-queued transcription/scoring workers.",
        ],
      },
    },
  },
  {
    name: "Best Buddy",
    subtitle: "Task Management App",
    period: "2024",
    variants: {
      default: {
        tech: ["Flutter", "Firebase", "REST APIs", "Figma"],
        bullets: [
          "Mentor–student task tracker built in Flutter on Firebase, with the UX designed end-to-end in Figma.",
        ],
      },
      flutter: {
        sub: "Mentor–Student Task Tracker",
        tech: ["Flutter", "Firebase", "Provider", "REST APIs"],
        bullets: [
          "Built a Flutter task-management app on Firebase with Provider for mentor–student interactions and task tracking.",
          "Designed the UI/UX in Figma to deliver an intuitive, engaging experience.",
        ],
      },
      web: {
        sub: "Web Task Board",
        tech: ["React", "Next.js", "TypeScript", "Firebase"],
        bullets: [
          "Reframed as a React/Next.js web task board — drag-and-drop lists, real-time Firebase sync and shared mentor/student views.",
          "Responsive layout and keyboard-friendly interactions for desktop productivity.",
        ],
      },
      backend: {
        sub: "Realtime Sync & Auth",
        tech: ["Node.js", "Firebase", "REST APIs", "Auth"],
        bullets: [
          "Modelled tasks, roles and permissions with Firebase auth and real-time sync, exposed through clean REST endpoints.",
        ],
      },
    },
  },
  {
    name: "Touch Bistro",
    subtitle: "Digital Restaurant Ordering System",
    period: "2022 – 2023",
    variants: {
      default: {
        tech: ["Flutter", "Node.js", "QR", "Payments"],
        bullets: [
          "Final-year project: QR-menu ordering with real-time order tracking across mobile & web — awarded 2nd place at NUML Open House 2023.",
        ],
      },
      flutter: {
        sub: "QR Ordering App",
        tech: ["Flutter", "Dart", "Node.js", "Payments"],
        bullets: [
          "Final Year Project — a digital ordering system with QR-code menu scanning, real-time order tracking and payments on mobile & web.",
          "Awarded 2nd Position at NUML Open House 2023 for excellence in project development.",
        ],
      },
      web: {
        sub: "Web Ordering & Kitchen Display",
        tech: ["React", "Next.js", "WebSockets", "QR"],
        bullets: [
          "Built the customer web-ordering flow and a live kitchen-display board in React with WebSocket order updates.",
          "QR menu → cart → checkout journey optimised for phones scanning at the table.",
        ],
      },
      backend: {
        sub: "Orders & Realtime Tracking API",
        tech: ["Node.js", "Express.js", "WebSockets", "MySQL"],
        bullets: [
          "Built the ordering API and real-time order-tracking service in Node.js with WebSockets and a MySQL menu/orders schema.",
        ],
      },
    },
  },
];

/* ---------- PERSONAS ---------- */
/* accent.dark / accent.light are the accent hex per theme;
   ink is the text colour that sits ON the accent.            */
export const personas = [
  {
    id: "default",
    label: "Software Developer",
    short: "Software",
    icon: "tools",
    keywords: ["software", "software developer", "developer", "dev", "full stack", "fullstack", "full-stack", "generalist", "engineer", "all", "everything", "home"],
    accent: { dark: "#c8ff2e", light: "#6fae00", ink: "#0a0a0c" },
    kicker: "software developer",
    roles: ["Flutter & Node.js Developer", "Full-Stack Problem Solver", "Ships the Whole Product", "Mobile · Web · Backend"],
    tagline:
      "I build complete products end-to-end — Flutter apps, React/Next web front-ends and the Node.js backends that power them. Type a role above to see the profile tuned to what you need.",
    summary:
      "Full-stack software developer with 3+ years shipping production apps across mobile, web and backend. I own features end-to-end: sleek Flutter UI, React/Next web front-ends, and scalable Node.js services with SQL/NoSQL data layers, real-time chat, payments and geolocation. Pick a specialty above and this whole page retunes to it.",
    badge: { big: "3+", sm: "years building<br/>full-stack products" },
    stats: [
      { value: 3, suffix: "+", label: "Years Experience" },
      { value: 9, suffix: "+", label: "Projects Delivered" },
      { value: 6, suffix: "", label: "Clients & Companies" },
      { value: 15, suffix: "+", label: "Technologies" },
    ],
    skills: [
      { category: "Mobile", icon: "mobile", items: ["Flutter", "Dart", "Riverpod", "Firebase", "iOS & Android"] },
      { category: "Web", icon: "web", items: ["React.js", "Next.js", "Svelte", "TypeScript"] },
      { category: "Backend", icon: "server", items: ["Node.js", "Express.js", "REST APIs", "JWT Auth"] },
      { category: "Databases", icon: "database", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
      { category: "Payments & Maps", icon: "card", items: ["Stripe", "Hyperpay", "Google Maps", "Geolocation"] },
      { category: "DevOps & Tools", icon: "tools", items: ["Git", "Docker", "Postman", "CI/CD"] },
    ],
  },
  {
    id: "flutter",
    label: "Flutter Developer",
    short: "Flutter",
    icon: "mobile",
    keywords: ["flutter", "dart", "mobile", "mobile developer", "app", "app developer", "android", "ios", "cross platform", "cross-platform", "crossplatform", "riverpod", "provider"],
    accent: { dark: "#40c4ff", light: "#0c87c9", ink: "#04121a" },
    kicker: "flutter developer",
    roles: ["Flutter & Dart Specialist", "Cross-Platform App Builder", "Real-Time Chat & Calling", "iOS + Android from one codebase"],
    tagline:
      "I build production-ready Flutter apps end-to-end — sleek pixel-perfect UI, real-time chat & calling, payments and push notifications, shipped to both iOS and Android from a single Dart codebase.",
    summary:
      "Flutter & Dart specialist with 3+ years delivering production cross-platform apps. Deep experience with real-time chat and in-app calling, WebSockets, payment gateways (Stripe, Hyperpay), geolocation, push notifications and state management with Provider and Riverpod — owning the full mobile lifecycle across Agile teams.",
    badge: { big: "9+", sm: "Flutter apps<br/>on iOS & Android" },
    stats: [
      { value: 9, suffix: "+", label: "Apps Shipped" },
      { value: 3, suffix: "+", label: "Years in Flutter" },
      { value: 2, suffix: "", label: "Platforms (iOS/Android)" },
      { value: 6, suffix: "", label: "Clients & Companies" },
    ],
    skills: [
      { category: "Flutter & Dart", icon: "mobile", items: ["Flutter", "Dart", "Provider", "Riverpod", "Shared Preferences", "Custom Widgets", "Animations"] },
      { category: "Realtime & Messaging", icon: "server", items: ["WebSockets", "Real-Time Chat", "In-App Calling", "Push Notifications", "Firebase"] },
      { category: "Native Integrations", icon: "card", items: ["Stripe", "Hyperpay", "Google Maps", "Geolocation", "Camera & Media"] },
      { category: "Platform & Tooling", icon: "tools", items: ["iOS & Android", "Android Studio", "Figma → Flutter", "Play Store / App Store", "Git"] },
    ],
  },
  {
    id: "web",
    label: "Web Developer",
    short: "Web",
    icon: "web",
    keywords: ["web", "web developer", "frontend", "front end", "front-end", "react", "reactjs", "react.js", "next", "nextjs", "next.js", "svelte", "ui", "ux", "typescript", "javascript", "tailwind", "css"],
    accent: { dark: "#a78bff", light: "#6d3bef", ink: "#0a0714" },
    kicker: "web developer",
    roles: ["React & Next.js Developer", "Front-End Engineer", "Design-System Builder", "Fast, Accessible Web Apps"],
    tagline:
      "I turn products into fast, responsive web apps with React and Next.js — server rendering, clean design systems and the same real projects I built in Flutter, delivered for the browser with proper integration.",
    summary:
      "Web developer focused on React and Next.js. I build server-rendered, SEO-friendly front-ends and dashboards with TypeScript and Tailwind, backed by the same Node.js APIs powering the mobile apps — so web, app and data stay perfectly in sync. Every Flutter product here is reframed as its React/Next web build.",
    badge: { big: "React", sm: "+ Next.js web<br/>front-ends" },
    stats: [
      { value: 6, suffix: "+", label: "Web Front-Ends" },
      { value: 3, suffix: "", label: "Frameworks (React/Next/Svelte)" },
      { value: 100, suffix: "%", label: "Responsive & Accessible" },
      { value: 9, suffix: "+", label: "Products Built" },
    ],
    skills: [
      { category: "Frameworks", icon: "web", items: ["React.js", "Next.js", "Svelte", "React Router", "Vite"] },
      { category: "Language & Styling", icon: "tools", items: ["TypeScript", "JavaScript", "Tailwind CSS", "CSS3", "Framer Motion"] },
      { category: "Data & State", icon: "database", items: ["REST APIs", "React Query", "Context / Hooks", "SSR & SSG", "Auth flows"] },
      { category: "Craft", icon: "card", items: ["Design Systems", "Responsive UI", "Accessibility", "Figma → Code", "Performance"] },
    ],
  },
  {
    id: "backend",
    label: "Backend Developer",
    short: "Backend",
    icon: "server",
    keywords: ["backend", "back end", "back-end", "backend developer", "server", "api", "node", "nodejs", "node.js", "express", "database", "db", "sql", "mysql", "postgres", "postgresql", "mongo", "mongodb", "redis", "supabase", "php", "laravel"],
    accent: { dark: "#3ddc97", light: "#0f9d67", ink: "#03130c" },
    kicker: "backend developer",
    roles: ["Node.js Backend Engineer", "API & Database Designer", "PHP / Laravel Developer", "Scalable Real-Time Systems"],
    tagline:
      "I design and build the engine room — Node.js and PHP/Laravel APIs, well-modelled SQL and NoSQL databases, Redis caching and Supabase, powering everything from payments to real-time features.",
    summary:
      "Backend developer building scalable services with Node.js/Express and PHP/Laravel. I design clean REST APIs, model data in PostgreSQL, MySQL and MongoDB, add Redis caching and Supabase where they fit, and wire up auth, payments (Stripe/Hyperpay) and real-time WebSocket features that mobile and web clients depend on.",
    badge: { big: "APIs", sm: "Node · PHP · SQL<br/>Redis · Supabase" },
    stats: [
      { value: 20, suffix: "+", label: "REST APIs Built" },
      { value: 5, suffix: "", label: "Databases Worked With" },
      { value: 3, suffix: "+", label: "Years Backend" },
      { value: 6, suffix: "", label: "Production Systems" },
    ],
    skills: [
      { category: "Runtimes & Frameworks", icon: "server", items: ["Node.js", "Express.js", "PHP", "Laravel", "REST API Design", "MVC Architecture"] },
      { category: "SQL Databases", icon: "database", items: ["PostgreSQL", "MySQL", "Supabase", "Schema Design", "Query Optimization"] },
      { category: "NoSQL & Caching", icon: "tools", items: ["MongoDB", "Redis", "Firebase", "Caching Strategies"] },
      { category: "Security & Realtime", icon: "card", items: ["JWT Authentication", "Stripe / Hyperpay Webhooks", "WebSockets", "Job Queues", "Docker"] },
    ],
  },
];

/* ---------- Helpers ---------- */
export const DEFAULT_PERSONA_ID = "default";

export function getPersona(id) {
  return personas.find((p) => p.id === id) || personas[0];
}

/* Map a typed query to a persona id. Returns null if no
   confident match, so the caller can leave the persona as-is. */
export function matchPersona(raw) {
  const q = String(raw || "").trim().toLowerCase();
  if (!q) return null;

  let best = null; // { id, score }
  for (const p of personas) {
    for (const kw of p.keywords) {
      let score = 0;
      if (kw === q) score = 100;                    // exact keyword
      else if (kw.startsWith(q)) score = 70 + q.length; // typing forward: "flu" -> flutter
      else if (q.startsWith(kw)) score = 55 + kw.length; // "react dev" -> react
      else if (q.includes(kw) && kw.length >= 3) score = 30 + kw.length;
      else if (kw.includes(q) && q.length >= 3) score = 20 + q.length;
      if (score && (!best || score > best.score)) best = { id: p.id, score };
    }
  }
  // Require a minimum confidence so a stray keystroke doesn't switch.
  if (best && (best.score >= 40 || q.length >= 2)) return best.id;
  return null;
}

/* Projects flattened for a given persona (falls back to the
   default framing when a project has no variant for that lens). */
export function projectsFor(personaId) {
  return projectData.map((p) => {
    const v = p.variants[personaId] || p.variants.default;
    return {
      name: p.name,
      subtitle: v.sub || p.subtitle,
      period: p.period,
      featured: !!p.featured,
      tech: v.tech,
      bullets: v.bullets,
    };
  });
}
