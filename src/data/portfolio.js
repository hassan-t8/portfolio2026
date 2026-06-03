/* =========================================================
   portfolio.js — single source of truth for all content.
   Edit anything here; the whole site updates. No other file
   needs to change to update your résumé content.
   ========================================================= */

export const profile = {
  name: "Hassan Talha",
  firstName: "Hassan",
  lastName: "Talha",
  title: "Mobile Application Developer",
  roles: [
    "Flutter & Dart Specialist",
    "Cross-Platform App Builder",
    "Node.js Backend Engineer",
    "Real-Time Systems Developer",
  ],
  tagline:
    "I build production-ready Flutter apps end-to-end — sleek UI, real-time chat & calling, payments, and scalable Node.js backends.",
  summary:
    "Dedicated Mobile Application Developer with 3+ years of experience delivering production-ready cross-platform applications using Flutter and Dart. Skilled in building feature-rich mobile solutions with real-time chat, in-app calling, WebSocket integration, payment gateways (Stripe, Hyperpay), geolocation, push notifications, and state management via Provider and Riverpod. Backed by strong Node.js and Express.js backend experience and a proven track record of owning the full mobile development lifecycle across Agile teams.",
  available: true,
  location: "Rawalpindi, Pakistan",
  phone: "+92 316 5218752",
  email: "hassantalha807@gmail.com",
  linkedin: "https://pk.linkedin.com/in/hassan-talha-452a7a283",
  github: "https://github.com/hassan-t8",
  resumeUrl: "", // e.g. "/Hassan-Talha-CV.pdf" (drop the file in /public)
};

export const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 9, suffix: "+", label: "Projects Delivered" },
  { value: 6, suffix: "", label: "Companies & Clients" },
  { value: 15, suffix: "+", label: "Technologies" },
];

export const skills = [
  {
    category: "Mobile Development",
    icon: "mobile",
    items: ["Flutter", "Dart", "Provider", "Riverpod", "Shared Preferences", "Firebase", "Push Notifications", "In-App Calling", "Real-Time Chat", "WebSockets", "iOS & Android"],
  },
  {
    category: "Backend Development",
    icon: "server",
    items: ["Node.js", "Express.js", "RESTful API Design", "JWT Authentication", "MVC Architecture"],
  },
  {
    category: "Frontend Development",
    icon: "web",
    items: ["React.js", "Next.js", "Svelte"],
  },
  {
    category: "Databases",
    icon: "database",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Database Design", "Query Optimization"],
  },
  {
    category: "Payments & Integrations",
    icon: "card",
    items: ["Stripe", "Hyperpay", "Google Maps", "Geolocation", "Third-Party APIs"],
  },
  {
    category: "DevOps & Tools",
    icon: "tools",
    items: ["Git", "GitHub", "GitLab", "Docker", "Postman", "DBeaver", "Android Studio", "VS Code"],
  },
];

export const experience = [
  {
    role: "Mobile Application Developer",
    company: "Marifahsol",
    location: "Islamabad, Pakistan",
    period: "Apr 2025 – Present",
    current: true,
    bullets: [
      "Led Flutter and Dart development for cross-platform mobile applications, delivering responsive UI and smooth experience across iOS and Android.",
      "Built and consumed RESTful APIs using Node.js and Express.js to power mobile client features including real-time data sync, authentication, and dynamic content.",
      "Integrated payment gateways (Hyperpay), Google Maps, geolocation services, and push notifications into production mobile apps.",
      "Collaborated with frontend (React.js / Next.js) and backend teams in Agile sprints using Git and Jira for version control and task tracking.",
    ],
  },
  {
    role: "Software Developer",
    company: "TechChaps.uk",
    location: "Islamabad, Pakistan",
    period: "Feb 2024 – Mar 2025",
    bullets: [
      "Developed core mobile features and complete screens using Flutter and Dart for multiple client applications across various domains.",
      "Integrated third-party APIs and managed backend communication for real-time data flow and seamless user experience.",
      "Worked closely with UI/UX designers to convert Figma designs into pixel-perfect Flutter widgets.",
      "Used Git for version control and Jira for task tracking within Agile workflows.",
    ],
  },
  {
    role: "Backend Developer",
    company: "GrowUp Tech Solutions",
    location: "Islamabad, Pakistan",
    period: "Feb 2023 – Nov 2023",
    bullets: [
      "Built RESTful APIs using Node.js and MongoDB to support mobile frontend and admin panel functionality.",
      "Designed efficient database models and optimized queries for improved application performance.",
      "Developed authentication systems and admin panels to manage user roles and permissions.",
      "Supported mobile and frontend teams with API integration, debugging, and technical documentation.",
    ],
  },
];

export const projects = [
  {
    name: "CureVista",
    subtitle: "Physiotherapy & Patient Platform",
    period: "2025",
    featured: true,
    tech: ["Flutter", "Node.js", "Express.js", "PostgreSQL", "Stripe"],
    bullets: [
      "Built a dual-app Flutter platform — a Patient App and a Physiotherapist App — enabling end-to-end clinic management and remote care delivery.",
      "Implemented session booking for consultations, follow-ups and paid packages, with Stripe payments, package purchases and secure refund flows.",
      "Developed full appointment lifecycle management: scheduling, rescheduling, cancellation and status tracking across both dashboards.",
      "Built reviews & ratings plus a Node.js/PostgreSQL backend for users, sessions, payments and real-time push notifications.",
    ],
  },
  {
    name: "Care & Clean",
    subtitle: "Home Services Platform",
    period: "Jul 2025 – Present",
    featured: true,
    tech: ["Flutter", "Node.js", "Next.js", "Hyperpay", "Google Maps"],
    bullets: [
      "Developed two Flutter apps — a customer-facing User App and an internal Admin & Staff App — for a home cleaning services platform.",
      "Implemented bookings, a dynamic pricing engine, promo codes, Google Maps integration, geolocation tracking and Hyperpay payments.",
      "Contributed to a Next.js CRM dashboard and integrated Node.js / Express.js APIs with cross-functional backend teams.",
    ],
  },
  {
    name: "Thrive Hub",
    subtitle: "Business & Subscription Platform",
    period: "2024 – 2025",
    featured: true,
    tech: ["Flutter", "Node.js", "PostgreSQL", "Svelte", "Docker"],
    bullets: [
      "Built a Flutter app for business registration, profile management, user reviews and Stripe-based subscription billing with real-time notifications.",
      "Developed scalable backend services with Node.js, PostgreSQL and Docker — optimized REST APIs and well-structured data models.",
    ],
  },
  {
    name: "Talk To Learn",
    subtitle: "Language Learning App",
    period: "2024",
    tech: ["Flutter", "Node.js", "MongoDB", "Stripe"],
    bullets: [
      "Developed a Flutter language-learning app with REST APIs, Provider state management, Shared Preferences, Stripe payments and AI-driven feedback.",
      "Enabled teachers to manage classes and students to complete tasks via voice recordings; built scalable Node.js / MongoDB APIs for high content volumes.",
    ],
  },
  {
    name: "Best Buddy",
    subtitle: "Task Management App",
    period: "2024",
    tech: ["Flutter", "Firebase", "REST APIs"],
    bullets: [
      "Built a Flutter task-management app using Firebase, REST APIs and Provider for mentor–student interactions and task tracking.",
      "Designed the UI/UX in Figma to deliver an intuitive, engaging experience.",
    ],
  },
  {
    name: "Touch Bistro",
    subtitle: "Digital Restaurant Ordering System",
    period: "2022 – 2023",
    tech: ["Flutter", "Node.js"],
    bullets: [
      "Final Year Project: a digital ordering system with QR-code menu scanning, real-time order tracking and payment processing via mobile & web.",
      "Awarded 2nd Position at NUML Open House 2023 for excellence in project development.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Science (BSCS)",
    institution: "National University of Modern Languages (NUML), Islamabad",
    period: "2020 – 2024",
    detail: "CGPA: 3.55 / 4.00",
  },
];

export const certifications = [
  "Node.js — Code with Harry (2024)",
  "Flutter App Development — Code with Dhruv (2023)",
  "Freelancing — DigiSkills (2019)",
];

export const awards = [
  "2nd Position — NUML Open House 2023, Touch Bistro project (Certificate of Achievement).",
  "Active Member — NUML Computer Science Society (NCSS), organising and supporting community events.",
];

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Urdu", level: "Native" },
  { name: "Punjabi", level: "Native" },
  { name: "German", level: "Basic" },
];
