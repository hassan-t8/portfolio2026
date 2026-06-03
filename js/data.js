/* =========================================================
   data.js  —  Default content + storage helpers
   Shared by index.html (portfolio) and admin.html (editor)
   ========================================================= */

const STORAGE_KEY = "hassan_portfolio_data_v1";

/* Default content seeded from the resume.
   Everything here is editable from the Admin page. */
const DEFAULT_DATA = {
  profile: {
    name: "Hassan Talha",
    title: "Mobile Application Developer",
    // Rotating words shown by the animated typewriter in the hero.
    // Edit freely — falls back to [title] if left empty.
    roles: [
      "Mobile Application Developer",
      "Flutter & Dart Specialist",
      "Node.js Backend Engineer",
      "Cross-Platform App Builder",
    ],
    // A short, punchy line shown under the name (separate from the long summary).
    tagline: "I build production-ready Flutter apps end-to-end — sleek UI, real-time features, payments & scalable Node.js backends.",
    available: true, // shows the green "Available for work" pill in the hero
    location: "Rawalpindi, Pakistan",
    phone: "+92 316 5218752",
    email: "hassantalha807@gmail.com",
    linkedin: "https://pk.linkedin.com/in/hassan-talha-452a7a283",
    github: "",
    resumeUrl: "", // optional link/path to a downloadable CV (e.g. "assets/resume.pdf")
    image: "", // base64 string set from admin; falls back to initials
    summary:
      "Dedicated Mobile Application Developer with 3+ years of experience delivering production-ready cross-platform applications using Flutter and Dart. Skilled in building feature-rich mobile solutions with real-time chat, in-app calling, WebSocket integration, payment gateways (Stripe, Hyperpay), geolocation, push notifications, and state management via Provider and Riverpod. Backed by strong Node.js and Express.js backend experience and a proven track record of owning the full mobile development lifecycle across Agile teams.",
  },

  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "9+", label: "Projects Delivered" },
    { value: "10+", label: "Technologies" },
  ],

  skills: [
    {
      category: "Mobile Development",
      items: ["Flutter", "Dart", "Provider", "Riverpod", "Shared Preferences", "Firebase", "Push Notifications", "In-App Calling", "Real-Time Chat", "WebSockets", "iOS & Android"],
    },
    {
      category: "Backend Development",
      items: ["Node.js", "Express.js", "RESTful API Design", "JWT Authentication", "MVC Architecture"],
    },
    {
      category: "Frontend Development",
      items: ["React.js", "Next.js", "Svelte"],
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Database Design", "Query Optimization"],
    },
    {
      category: "Payments & Integrations",
      items: ["Stripe", "Hyperpay", "Google Maps", "Geolocation", "Third-Party APIs"],
    },
    {
      category: "DevOps & Tools",
      items: ["Git", "GitHub", "GitLab", "Docker", "Postman", "DBeaver", "Android Studio", "VS Code"],
    },
  ],

  experience: [
    {
      role: "Mobile Application Developer",
      company: "Marifahsol",
      location: "Islamabad, Pakistan",
      period: "April 2025 – Present",
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
      period: "February 2024 – March 2025",
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
      period: "February 2023 – November 2023",
      bullets: [
        "Built RESTful APIs using Node.js and MongoDB to support mobile frontend and admin panel functionality.",
        "Designed efficient database models and optimized queries for improved application performance.",
        "Developed authentication systems and admin panels to manage user roles and permissions.",
        "Supported mobile and frontend teams with API integration, debugging, and technical documentation.",
      ],
    },
  ],

  projects: [
    {
      name: "CureVista – Physiotherapy & Patient Platform",
      tech: "Flutter, Node.js, PostgreSQL",
      period: "2025",
      bullets: [
        "Built a dual-app Flutter platform: a Patient App and a Physiotherapist App, enabling end-to-end clinic management and remote care delivery.",
        "Integrated Stripe payment gateway to handle session payments, package purchases, and refund flows securely.",
        "Implemented full appointment lifecycle management — scheduling, rescheduling, cancellation, and status tracking.",
        "Built reviews & ratings system and Node.js/PostgreSQL backend APIs with real-time push notifications.",
      ],
    },
    {
      name: "Care & Clean – Home Services Platform",
      tech: "Flutter, Node.js, Next.js",
      period: "July 2025 – Present",
      bullets: [
        "Developed two Flutter apps — a customer-facing User App and an internal Admin & Staff App — for a home cleaning services platform.",
        "Implemented bookings, dynamic pricing engine, promo codes, Google Maps integration, geolocation tracking, and Hyperpay payment gateway.",
        "Contributed to a Next.js CRM Dashboard and collaborated with backend teams on Node.js / Express.js API integration.",
      ],
    },
    {
      name: "Thrive Hub – Business & Subscription Platform",
      tech: "Flutter, Node.js, PostgreSQL, Svelte, Docker",
      period: "2024 – March 2025",
      bullets: [
        "Built a Flutter app supporting business registration, profile management, user reviews, and Stripe-based subscription billing with real-time notifications.",
        "Developed scalable backend services using Node.js, PostgreSQL, and Docker, delivering optimized RESTful APIs and well-structured data models.",
      ],
    },
    {
      name: "Talk To Learn – Language Learning App",
      tech: "Flutter, Node.js, MongoDB",
      period: "2024",
      bullets: [
        "Developed a Flutter language learning app with REST API integration, Provider state management, Shared Preferences, Stripe payments, and AI-driven feedback.",
        "Enabled teachers to manage classes and students to complete tasks via voice recordings; built scalable Node.js / MongoDB APIs to handle high volumes of user content.",
      ],
    },
    {
      name: "Best Buddy – Task Management App",
      tech: "Flutter, Firebase, REST APIs",
      period: "2024",
      bullets: [
        "Built a Flutter and Dart task management app using Firebase, REST APIs, and Provider for mentor-student interactions and task tracking.",
        "Designed UI/UX in Figma to deliver an intuitive, engaging experience.",
      ],
    },
    {
      name: "Touch Bistro – Digital Restaurant Ordering System",
      tech: "Flutter, Node.js",
      period: "2022 – 2023",
      bullets: [
        "Final Year Project: built a digital ordering system with QR code menu scanning, real-time order tracking, and payment processing via mobile app and web interface.",
        "Awarded 2nd Position at NUML Open House 2023 for excellence in project development.",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Computer Science (BSCS)",
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
