/* =========================================================
   main.js — renders the public portfolio from data
   ========================================================= */

const D = loadData();

/* helper: escape text for safe HTML insertion */
function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function render() {
  const p = D.profile;

  // document + brand
  document.title = `${p.name} — ${p.title}`;
  document.getElementById("brand").innerHTML = `<span>${esc(p.name)}</span>`;

  // Hero
  document.getElementById("heroName").innerHTML =
    `Hi, I'm <span class="grad">${esc(p.name)}</span>`;
  document.getElementById("heroRole").textContent = p.title;
  document.getElementById("heroSummary").textContent = p.summary;

  const meta = [];
  if (p.location) meta.push(`<span>📍 ${esc(p.location)}</span>`);
  if (p.email) meta.push(`<span>✉️ ${esc(p.email)}</span>`);
  if (p.phone) meta.push(`<span>📞 ${esc(p.phone)}</span>`);
  document.getElementById("heroMeta").innerHTML = meta.join("");

  // Buttons
  const btns = [];
  if (p.email) btns.push(`<a class="btn btn-primary" href="mailto:${esc(p.email)}">✉️ Contact Me</a>`);
  if (p.linkedin) btns.push(`<a class="btn btn-ghost" href="${esc(p.linkedin)}" target="_blank" rel="noopener">in LinkedIn</a>`);
  if (p.github) btns.push(`<a class="btn btn-ghost" href="${esc(p.github)}" target="_blank" rel="noopener">⌥ GitHub</a>`);
  document.getElementById("heroBtns").innerHTML = btns.join("");

  // Avatar
  const av = document.getElementById("avatar");
  if (p.image) {
    av.innerHTML = `<img class="avatar" src="${esc(p.image)}" alt="${esc(p.name)}">`;
  } else {
    av.innerHTML = `<div class="avatar-fallback">${esc(initialsOf(p.name))}</div>`;
  }

  // Stats
  document.getElementById("stats").innerHTML = (D.stats || [])
    .map((s) => `<div class="stat"><div class="v">${esc(s.value)}</div><div class="l">${esc(s.label)}</div></div>`)
    .join("");

  // Skills
  document.getElementById("skillsGrid").innerHTML = (D.skills || [])
    .map(
      (s) => `<div class="skill-card reveal">
        <h3>${esc(s.category)}</h3>
        <div class="chips">${(s.items || []).map((i) => `<span class="chip">${esc(i)}</span>`).join("")}</div>
      </div>`
    )
    .join("");

  // Experience
  document.getElementById("experienceList").innerHTML = (D.experience || [])
    .map(
      (e) => `<div class="tl-item reveal">
        <div class="tl-head">
          <div class="tl-role">${esc(e.role)}</div>
          <div class="tl-period">${esc(e.period)}</div>
        </div>
        <div class="tl-company">${esc(e.company)}${e.location ? " · " + esc(e.location) : ""}</div>
        <ul class="tl-bullets">${(e.bullets || []).map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
      </div>`
    )
    .join("");

  // Projects
  document.getElementById("projectsGrid").innerHTML = (D.projects || [])
    .map(
      (pr) => `<div class="proj-card reveal">
        <h3>${esc(pr.name)}</h3>
        <div class="proj-tech">${esc(pr.tech)}</div>
        <div class="proj-period">${esc(pr.period)}</div>
        <ul>${(pr.bullets || []).map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
      </div>`
    )
    .join("");

  // Education + Certifications
  document.getElementById("educationList").innerHTML = (D.education || [])
    .map(
      (ed) => `<div class="edu-item">
        <div class="d">${esc(ed.degree)}</div>
        <div class="i">${esc(ed.institution)}</div>
        <div class="p">${esc(ed.period)}${ed.detail ? " · " + esc(ed.detail) : ""}</div>
      </div>`
    )
    .join("");

  document.getElementById("certs").innerHTML = (D.certifications || [])
    .map((c) => `<li>${esc(c)}</li>`).join("");

  document.getElementById("awards").innerHTML = (D.awards || [])
    .map((a) => `<li>${esc(a)}</li>`).join("");

  // Languages
  document.getElementById("languages").innerHTML = (D.languages || [])
    .map((l) => `<div class="lang"><b>${esc(l.name)}</b><span>${esc(l.level)}</span></div>`)
    .join("");

  // Contact
  document.getElementById("contactEmail").innerHTML = p.email
    ? `<a class="btn btn-primary" href="mailto:${esc(p.email)}">✉️ ${esc(p.email)}</a>` : "";
  document.getElementById("footerText").innerHTML =
    `© <span id="year"></span> ${esc(p.name)} · Built with ❤️ · <a href="admin.html">Edit Portfolio</a>`;
  document.getElementById("year").textContent = new Date().getFullYear();
}

/* Scroll reveal */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }),
    { threshold: 0.12 }
  );
  els.forEach((el) => io.observe(el));
}

/* Mobile nav toggle */
function initNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (toggle) toggle.addEventListener("click", () => links.classList.toggle("open"));
  links?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => links.classList.remove("open")));
}

render();
initReveal();
initNav();
