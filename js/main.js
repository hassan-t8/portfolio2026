/* =========================================================
   main.js — renders the public portfolio + all animations
   Content comes from data.js (editable via admin.html).
   Pure vanilla JS, no dependencies.
   ========================================================= */

const D = loadData();
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* helper: escape text for safe HTML insertion */
function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
const $ = (id) => document.getElementById(id);

/* Pick an icon for a skill category by keyword */
function skillIcon(cat) {
  const c = (cat || "").toLowerCase();
  if (c.includes("mobile")) return "📱";
  if (c.includes("backend") || c.includes("server")) return "⚙️";
  if (c.includes("frontend") || c.includes("web")) return "🖥️";
  if (c.includes("database") || c.includes("data")) return "🗄️";
  if (c.includes("payment") || c.includes("integration")) return "💳";
  if (c.includes("devops") || c.includes("tool")) return "🛠️";
  if (c.includes("design")) return "🎨";
  if (c.includes("project") || c.includes("manage")) return "📋";
  return "✨";
}

/* SVG icons (inline, no external requests) */
const ICONS = {
  mail: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .3z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.5 15.5 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.4 11.4 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z"/></svg>',
  download: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>',
};

/* =========================================================
   RENDER
   ========================================================= */
function render() {
  const p = D.profile;

  document.title = `${p.name} — ${p.title}`;
  $("brand").innerHTML = `<span class="dot"></span><span>${esc(p.name)}</span>`;

  // Availability pill
  if (p.available === false) $("availPill").style.display = "none";

  // Hero name
  const parts = (p.name || "").trim().split(/\s+/);
  const first = parts.shift() || p.name;
  const rest = parts.join(" ");
  $("heroName").innerHTML = rest
    ? `${esc(first)} <span class="grad">${esc(rest)}</span>`
    : `<span class="grad">${esc(first)}</span>`;

  // Summary line (prefer short tagline, fall back to full summary)
  $("heroSummary").textContent = p.tagline || p.summary;

  // Meta
  const meta = [];
  if (p.location) meta.push(`<span>📍 ${esc(p.location)}</span>`);
  if (p.email) meta.push(`<span>✉️ ${esc(p.email)}</span>`);
  if (p.phone) meta.push(`<span>📞 ${esc(p.phone)}</span>`);
  $("heroMeta").innerHTML = meta.join("");

  // Hero buttons
  const btns = [];
  if (p.email) btns.push(`<a class="btn btn-primary mag" href="mailto:${esc(p.email)}">${ICONS.mail} Get in touch</a>`);
  if (p.resumeUrl) btns.push(`<a class="btn btn-ghost mag" href="${esc(p.resumeUrl)}" target="_blank" rel="noopener">${ICONS.download} Resume</a>`);
  if (p.linkedin) btns.push(`<a class="btn btn-ghost mag" href="${esc(p.linkedin)}" target="_blank" rel="noopener">in LinkedIn</a>`);
  $("heroBtns").innerHTML = btns.join("");

  // Code-window card (fun, on-brand snippet built from real data)
  const topSkills = (D.skills && D.skills[0] && D.skills[0].items || []).slice(0, 3).join('", "');
  const yrs = (D.stats.find((s) => /year/i.test(s.label)) || {}).value || "3+";
  $("codeBody").innerHTML = [
    `<span class="ln"><span class="k">class</span> <span class="p">Developer</span> {</span>`,
    `<span class="ln">  <span class="k">final</span> name = <span class="s">'${esc(p.name)}'</span>;</span>`,
    `<span class="ln">  <span class="k">final</span> role = <span class="s">'${esc(p.title)}'</span>;</span>`,
    `<span class="ln">  <span class="k">final</span> stack = [<span class="s">"${esc(topSkills)}"</span>];</span>`,
    `<span class="ln">  <span class="k">final</span> experience = <span class="n">'${esc(yrs)} years'</span>;</span>`,
    `<span class="ln"></span>`,
    `<span class="ln">  <span class="p">bool</span> get openToWork =&gt; <span class="k">true</span>;</span>`,
    `<span class="ln">}</span>`,
  ].join("");

  // Avatar in code card
  const af = $("avatarFloat");
  if (p.image) af.innerHTML = `<img src="${esc(p.image)}" alt="${esc(p.name)}" style="width:100%;height:100%;object-fit:cover;border-radius:18px;">`;
  else af.textContent = initialsOf(p.name);

  // Stats
  $("stats").innerHTML = (D.stats || [])
    .map((s) => `<div class="stat"><div class="v" data-count="${esc(s.value)}">${esc(s.value)}</div><div class="l">${esc(s.label)}</div></div>`)
    .join("");

  // Marquee (all skills, duplicated for seamless loop)
  const allSkills = (D.skills || []).flatMap((s) => s.items || []);
  const once = allSkills.map((s) => `<span>${esc(s)}</span>`).join("");
  $("marquee").innerHTML = once + once;

  // Skills
  $("skillsGrid").innerHTML = (D.skills || [])
    .map((s) => `<div class="skill-card reveal tilt">
      <div class="sc-ic">${skillIcon(s.category)}</div>
      <h3>${esc(s.category)}</h3>
      <div class="chips">${(s.items || []).map((i) => `<span class="chip">${esc(i)}</span>`).join("")}</div>
    </div>`).join("");

  // Experience
  $("experienceList").innerHTML = (D.experience || [])
    .map((e) => `<div class="tl-item reveal">
      <div class="tl-card">
        <div class="tl-head">
          <div class="tl-role">${esc(e.role)}</div>
          <div class="tl-period">${esc(e.period)}</div>
        </div>
        <div class="tl-company">${esc(e.company)}${e.location ? ` <span class="loc">· ${esc(e.location)}</span>` : ""}</div>
        <ul class="tl-bullets">${(e.bullets || []).map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
      </div>
    </div>`).join("");

  // Projects
  $("projectsGrid").innerHTML = (D.projects || [])
    .map((pr, i) => {
      const tags = (pr.tech || "").split(",").map((t) => t.trim()).filter(Boolean);
      return `<div class="proj-card reveal tilt">
        <div class="proj-top">
          <h3>${esc(pr.name)}</h3>
          <span class="proj-num">0${i + 1}</span>
        </div>
        <div class="proj-period">${esc(pr.period)}</div>
        <ul>${(pr.bullets || []).map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
        <div class="proj-tags">${tags.map((t) => `<span class="t">${esc(t)}</span>`).join("")}</div>
      </div>`;
    }).join("");

  // Education
  $("educationList").innerHTML = (D.education || [])
    .map((ed) => `<div class="edu-item">
      <div class="d">${esc(ed.degree)}</div>
      <div class="i">${esc(ed.institution)}</div>
      <div class="p">${esc(ed.period)}${ed.detail ? " · " + esc(ed.detail) : ""}</div>
    </div>`).join("");

  $("certs").innerHTML = (D.certifications || []).map((c) => `<li>${esc(c)}</li>`).join("");
  $("awards").innerHTML = (D.awards || []).map((a) => `<li>${esc(a)}</li>`).join("");

  $("languages").innerHTML = (D.languages || [])
    .map((l) => `<div class="lang"><b>${esc(l.name)}</b><span>${esc(l.level)}</span></div>`).join("");

  // Contact buttons + socials
  const cBtns = [];
  if (p.email) cBtns.push(`<a class="btn btn-primary mag" href="mailto:${esc(p.email)}">${ICONS.mail} ${esc(p.email)}</a>`);
  if (p.resumeUrl) cBtns.push(`<a class="btn btn-ghost mag" href="${esc(p.resumeUrl)}" target="_blank" rel="noopener">${ICONS.download} Download CV</a>`);
  $("contactBtns").innerHTML = cBtns.join("");

  const soc = [];
  if (p.linkedin) soc.push(`<a href="${esc(p.linkedin)}" target="_blank" rel="noopener" aria-label="LinkedIn">${ICONS.linkedin}</a>`);
  if (p.github) soc.push(`<a href="${esc(p.github)}" target="_blank" rel="noopener" aria-label="GitHub">${ICONS.github}</a>`);
  if (p.email) soc.push(`<a href="mailto:${esc(p.email)}" aria-label="Email">${ICONS.mail.replace('class="ic" ', '')}</a>`);
  $("socials").innerHTML = soc.join("");

  $("footerText").innerHTML =
    `© <span id="year"></span> ${esc(p.name)} · Built with Flutter-grade attention to detail · <a href="admin.html">Edit</a>`;
  $("year").textContent = new Date().getFullYear();
}

/* =========================================================
   Typewriter (rotating roles)
   ========================================================= */
function initTypewriter() {
  const target = $("typeText");
  const roles = (D.profile.roles && D.profile.roles.length ? D.profile.roles : [D.profile.title]).filter(Boolean);
  if (reduceMotion) { target.textContent = roles[0] || ""; return; }

  let ri = 0, ci = 0, deleting = false;
  function tick() {
    const word = roles[ri % roles.length];
    ci += deleting ? -1 : 1;
    target.textContent = word.slice(0, ci);
    let delay = deleting ? 45 : 85;
    if (!deleting && ci === word.length) { deleting = true; delay = 1500; }
    else if (deleting && ci === 0) { deleting = false; ri++; delay = 350; }
    setTimeout(tick, delay);
  }
  tick();
}

/* =========================================================
   Animated number counters
   ========================================================= */
function animateCounters() {
  document.querySelectorAll("[data-count]").forEach((node) => {
    const raw = node.getAttribute("data-count");
    const m = String(raw).match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
    if (!m || reduceMotion) { node.textContent = raw; return; }
    const pre = m[1], end = parseFloat(m[2]), suf = m[3];
    const dur = 1400, start = performance.now();
    function step(now) {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      node.textContent = pre + Math.round(end * eased) + suf;
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}

/* =========================================================
   Scroll reveal (with stagger) + counter trigger
   ========================================================= */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      const sibs = Array.from(el.parentElement ? el.parentElement.children : [el]).filter((s) => s.classList.contains("reveal"));
      const idx = Math.max(0, sibs.indexOf(el));
      el.style.transitionDelay = Math.min(idx * 70, 350) + "ms";
      el.classList.add("in");
      io.unobserve(el);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // Counters fire when the stats row enters view
  const stats = $("stats");
  if (stats) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { animateCounters(); co.disconnect(); } });
    }, { threshold: 0.4 });
    co.observe(stats);
  }
}

/* =========================================================
   Nav: scrolled state, scrollspy, mobile toggle, progress bar
   ========================================================= */
function initNav() {
  const nav = $("nav");
  const toggle = $("navToggle");
  const links = $("navLinks");
  const progress = $("scrollProgress");
  const toTop = $("toTop");

  if (toggle) toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => links.classList.remove("open")));

  const sections = ["about", "skills", "experience", "projects", "education", "contact"]
    .map((id) => $(id)).filter(Boolean);
  const navItems = Array.from(links.querySelectorAll("a"));

  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 20);
    toTop.classList.toggle("show", y > 600);

    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";

    // scrollspy
    let current = sections[0] && sections[0].id;
    for (const sec of sections) {
      if (y >= sec.offsetTop - 120) current = sec.id;
    }
    navItems.forEach((a) => {
      const href = a.getAttribute("href") || "";
      a.classList.toggle("active", href === "#" + current && !a.classList.contains("nav-cta"));
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* =========================================================
   Pointer effects: cursor glow, 3D tilt, magnetic buttons, card spotlight
   ========================================================= */
function initPointerFX() {
  if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;

  // Cursor glow
  const glow = $("cursorGlow");
  let gx = 0, gy = 0, cx = 0, cy = 0;
  window.addEventListener("mousemove", (e) => { gx = e.clientX; gy = e.clientY; glow.style.opacity = "1"; });
  (function loop() {
    cx += (gx - cx) * 0.15; cy += (gy - cy) * 0.15;
    glow.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  })();

  // Card spotlight (skills) — track local mouse position via CSS vars
  document.querySelectorAll(".skill-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", (e.clientX - r.left) + "px");
      card.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  });

  // 3D tilt
  document.querySelectorAll(".tilt").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateY(${px * 7}deg) rotateX(${-py * 7}deg) translateY(-5px)`;
    });
    card.addEventListener("mouseleave", () => { card.style.transform = ""; });
  });

  // Code card subtle tilt
  const cc = $("codeCard");
  if (cc) {
    cc.addEventListener("mousemove", (e) => {
      const r = cc.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      cc.style.transform = `perspective(1000px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg)`;
    });
    cc.addEventListener("mouseleave", () => { cc.style.transform = ""; });
  }

  // Magnetic buttons
  document.querySelectorAll(".mag").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const r = btn.getBoundingClientRect();
      btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.4 - 3}px)`;
    });
    btn.addEventListener("mouseleave", () => { btn.style.transform = ""; });
  });
}

/* =========================================================
   Hero canvas: subtle constellation network
   ========================================================= */
function initCanvas() {
  const canvas = $("fxCanvas");
  if (!canvas || reduceMotion) { if (canvas) canvas.style.display = "none"; return; }
  const ctx = canvas.getContext("2d");
  let w, h, dots = [];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = Math.min(window.innerHeight * 1.1, 1100);
    const count = Math.min(70, Math.floor(w / 24));
    dots = Array.from({ length: count }, (_, i) => ({
      x: ((i * 97) % w),
      y: ((i * 53) % h),
      vx: (((i % 7) - 3) / 18),
      vy: (((i % 5) - 2) / 18),
    }));
  }
  resize();
  window.addEventListener("resize", resize);

  function frame() {
    ctx.clearRect(0, 0, w, h);
    for (const d of dots) {
      d.x += d.vx; d.y += d.vy;
      if (d.x < 0 || d.x > w) d.vx *= -1;
      if (d.y < 0 || d.y > h) d.vy *= -1;
    }
    for (let i = 0; i < dots.length; i++) {
      const a = dots[i];
      ctx.beginPath();
      ctx.arc(a.x, a.y, 1.6, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(120,160,255,0.55)";
      ctx.fill();
      for (let j = i + 1; j < dots.length; j++) {
        const b = dots[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(91,140,255,${0.14 * (1 - dist / 130)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(frame);
  }
  frame();
}

/* ---------- boot ---------- */
render();
initTypewriter();
initReveal();
initNav();
initPointerFX();
initCanvas();
