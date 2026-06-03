/* =========================================================
   admin.js — Settings / editor page logic
   ========================================================= */

let data = loadData();

/* ---------- small helpers ---------- */
const el = (id) => document.getElementById(id);
const create = (tag, cls, html) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
};
function toast(msg) {
  const t = el("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove("show"), 1900);
}

/* Build a labelled input field */
function field(label, value, onInput, opts = {}) {
  const wrap = create("div", "field");
  wrap.appendChild(create("label", null, label));
  const input = document.createElement(opts.textarea ? "textarea" : "input");
  input.value = value == null ? "" : value;
  if (opts.placeholder) input.placeholder = opts.placeholder;
  input.addEventListener("input", () => onInput(input.value));
  wrap.appendChild(input);
  return wrap;
}

/* A removable repeatable block */
function repeatItem(buildInner, onRemove) {
  const box = create("div", "repeat-item");
  const rm = create("button", "rm", "✕ Remove");
  rm.addEventListener("click", onRemove);
  box.appendChild(rm);
  buildInner(box);
  return box;
}

/* ===========================================================
   RENDER EACH PANEL
   =========================================================== */

function renderProfile() {
  const c = el("panel-profile");
  c.innerHTML = "<h2>Profile</h2><p class='hint'>Your name, title and contact details shown in the hero section.</p>";
  const p = data.profile;

  // Avatar editor
  const av = create("div", "field");
  av.appendChild(create("label", null, "Profile Image"));
  const row = create("div", "avatar-edit");
  const prev = create("div", "preview");
  const renderPrev = () => {
    if (p.image) prev.innerHTML = `<img src="${p.image}" style="width:100%;height:100%;object-fit:cover;border-radius:16px;">`;
    else prev.textContent = initialsOf(p.name);
  };
  renderPrev();
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.style.display = "none";
  fileInput.addEventListener("change", (e) => {
    const f = e.target.files[0];
    if (!f) return;
    if (f.size > 2_500_000) { toast("Image too large (max ~2.5MB)"); return; }
    const reader = new FileReader();
    reader.onload = () => { p.image = reader.result; renderPrev(); };
    reader.readAsDataURL(f);
  });
  const upBtn = create("button", "add-btn", "📷 Upload Image");
  upBtn.addEventListener("click", () => fileInput.click());
  const clrBtn = create("button", "btn btn-ghost btn-sm", "Remove");
  clrBtn.addEventListener("click", () => { p.image = ""; renderPrev(); });
  const btnCol = create("div");
  btnCol.style.cssText = "display:flex;gap:10px;flex-wrap:wrap;align-items:center;";
  btnCol.append(upBtn, clrBtn, fileInput);
  row.append(prev, btnCol);
  av.appendChild(row);
  c.appendChild(av);

  c.appendChild(field("Full Name", p.name, (v) => { p.name = v; renderPrev(); }));
  c.appendChild(field("Title / Role", p.title, (v) => (p.title = v)));

  const g1 = create("div", "grid-2");
  g1.appendChild(field("Location", p.location, (v) => (p.location = v)));
  g1.appendChild(field("Phone", p.phone, (v) => (p.phone = v)));
  c.appendChild(g1);

  const g2 = create("div", "grid-2");
  g2.appendChild(field("Email", p.email, (v) => (p.email = v)));
  g2.appendChild(field("LinkedIn URL", p.linkedin, (v) => (p.linkedin = v)));
  c.appendChild(g2);

  c.appendChild(field("GitHub URL (optional)", p.github, (v) => (p.github = v)));
  c.appendChild(field("Summary / About", p.summary, (v) => (p.summary = v), { textarea: true }));
}

function renderStats() {
  const c = el("panel-stats");
  c.innerHTML = "<h2>Highlight Stats</h2><p class='hint'>The small number cards under the hero (e.g. years of experience).</p>";
  data.stats = data.stats || [];
  const list = create("div");
  data.stats.forEach((s, i) => {
    list.appendChild(repeatItem(
      (box) => {
        const g = create("div", "grid-2");
        g.appendChild(field("Value", s.value, (v) => (s.value = v), { placeholder: "3+" }));
        g.appendChild(field("Label", s.label, (v) => (s.label = v), { placeholder: "Years Experience" }));
        box.appendChild(g);
      },
      () => { data.stats.splice(i, 1); renderStats(); }
    ));
  });
  c.appendChild(list);
  const add = create("button", "add-btn", "+ Add Stat");
  add.addEventListener("click", () => { data.stats.push({ value: "", label: "" }); renderStats(); });
  c.appendChild(add);
}

function renderSkills() {
  const c = el("panel-skills");
  c.innerHTML = "<h2>Technical Skills</h2><p class='hint'>Each card is a category. Enter skills separated by commas.</p>";
  data.skills = data.skills || [];
  const list = create("div");
  data.skills.forEach((s, i) => {
    list.appendChild(repeatItem(
      (box) => {
        box.appendChild(field("Category", s.category, (v) => (s.category = v)));
        box.appendChild(field("Skills (comma separated)", (s.items || []).join(", "),
          (v) => (s.items = v.split(",").map((x) => x.trim()).filter(Boolean)), { textarea: true }));
      },
      () => { data.skills.splice(i, 1); renderSkills(); }
    ));
  });
  c.appendChild(list);
  const add = create("button", "add-btn", "+ Add Category");
  add.addEventListener("click", () => { data.skills.push({ category: "", items: [] }); renderSkills(); });
  c.appendChild(add);
}

function renderExperience() {
  const c = el("panel-experience");
  c.innerHTML = "<h2>Experience</h2><p class='hint'>Your work history. One bullet per line.</p>";
  data.experience = data.experience || [];
  const list = create("div");
  data.experience.forEach((e, i) => {
    list.appendChild(repeatItem(
      (box) => {
        const g = create("div", "grid-2");
        g.appendChild(field("Role", e.role, (v) => (e.role = v)));
        g.appendChild(field("Period", e.period, (v) => (e.period = v), { placeholder: "Jan 2024 – Present" }));
        box.appendChild(g);
        const g2 = create("div", "grid-2");
        g2.appendChild(field("Company", e.company, (v) => (e.company = v)));
        g2.appendChild(field("Location", e.location, (v) => (e.location = v)));
        box.appendChild(g2);
        box.appendChild(field("Bullets (one per line)", (e.bullets || []).join("\n"),
          (v) => (e.bullets = v.split("\n").map((x) => x.trim()).filter(Boolean)), { textarea: true }));
      },
      () => { data.experience.splice(i, 1); renderExperience(); }
    ));
  });
  c.appendChild(list);
  const add = create("button", "add-btn", "+ Add Experience");
  add.addEventListener("click", () => { data.experience.push({ role: "", company: "", location: "", period: "", bullets: [] }); renderExperience(); });
  c.appendChild(add);
}

function renderProjects() {
  const c = el("panel-projects");
  c.innerHTML = "<h2>Projects</h2><p class='hint'>Showcase your best work. One bullet per line.</p>";
  data.projects = data.projects || [];
  const list = create("div");
  data.projects.forEach((p, i) => {
    list.appendChild(repeatItem(
      (box) => {
        box.appendChild(field("Project Name", p.name, (v) => (p.name = v)));
        const g = create("div", "grid-2");
        g.appendChild(field("Tech Stack", p.tech, (v) => (p.tech = v), { placeholder: "Flutter, Node.js" }));
        g.appendChild(field("Period", p.period, (v) => (p.period = v), { placeholder: "2025" }));
        box.appendChild(g);
        box.appendChild(field("Bullets (one per line)", (p.bullets || []).join("\n"),
          (v) => (p.bullets = v.split("\n").map((x) => x.trim()).filter(Boolean)), { textarea: true }));
      },
      () => { data.projects.splice(i, 1); renderProjects(); }
    ));
  });
  c.appendChild(list);
  const add = create("button", "add-btn", "+ Add Project");
  add.addEventListener("click", () => { data.projects.push({ name: "", tech: "", period: "", bullets: [] }); renderProjects(); });
  c.appendChild(add);
}

function renderEducation() {
  const c = el("panel-education");
  c.innerHTML = "<h2>Education</h2><p class='hint'>Your degrees and academic background.</p>";
  data.education = data.education || [];
  const list = create("div");
  data.education.forEach((e, i) => {
    list.appendChild(repeatItem(
      (box) => {
        box.appendChild(field("Degree", e.degree, (v) => (e.degree = v)));
        box.appendChild(field("Institution", e.institution, (v) => (e.institution = v)));
        const g = create("div", "grid-2");
        g.appendChild(field("Period", e.period, (v) => (e.period = v)));
        g.appendChild(field("Detail (e.g. CGPA)", e.detail, (v) => (e.detail = v)));
        box.appendChild(g);
      },
      () => { data.education.splice(i, 1); renderEducation(); }
    ));
  });
  c.appendChild(list);
  const add = create("button", "add-btn", "+ Add Education");
  add.addEventListener("click", () => { data.education.push({ degree: "", institution: "", period: "", detail: "" }); renderEducation(); });
  c.appendChild(add);
}

/* simple one-line-per-entry list editor (certs, awards) */
function renderLineList(panelId, title, hint, key) {
  const c = el(panelId);
  c.innerHTML = `<h2>${title}</h2><p class='hint'>${hint}</p>`;
  data[key] = data[key] || [];
  c.appendChild(field(title + " (one per line)", data[key].join("\n"),
    (v) => (data[key] = v.split("\n").map((x) => x.trim()).filter(Boolean)), { textarea: true }));
}

function renderLanguages() {
  const c = el("panel-languages");
  c.innerHTML = "<h2>Languages</h2><p class='hint'>Languages you speak and your fluency level.</p>";
  data.languages = data.languages || [];
  const list = create("div");
  data.languages.forEach((l, i) => {
    list.appendChild(repeatItem(
      (box) => {
        const g = create("div", "grid-2");
        g.appendChild(field("Language", l.name, (v) => (l.name = v)));
        g.appendChild(field("Level", l.level, (v) => (l.level = v), { placeholder: "Native / Professional" }));
        box.appendChild(g);
      },
      () => { data.languages.splice(i, 1); renderLanguages(); }
    ));
  });
  c.appendChild(list);
  const add = create("button", "add-btn", "+ Add Language");
  add.addEventListener("click", () => { data.languages.push({ name: "", level: "" }); renderLanguages(); });
  c.appendChild(add);
}

function renderAll() {
  renderProfile();
  renderStats();
  renderSkills();
  renderExperience();
  renderProjects();
  renderEducation();
  renderLineList("panel-certs", "Certifications", "Courses and certifications you've completed.", "certifications");
  renderLineList("panel-awards", "Awards & Achievements", "Recognitions and achievements.", "awards");
  renderLanguages();
}

/* ===========================================================
   ACTIONS: save / export / import / reset
   =========================================================== */

el("saveBtn").addEventListener("click", () => {
  saveData(data);
  toast("✓ Saved! Your portfolio is updated.");
});

el("exportBtn").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "portfolio-data.json";
  a.click();
  URL.revokeObjectURL(url);
  toast("Exported portfolio-data.json");
});

el("importInput").addEventListener("change", (e) => {
  const f = e.target.files[0];
  if (!f) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      data = { ...DEFAULT_DATA, ...parsed };
      saveData(data);
      renderAll();
      toast("✓ Imported successfully");
    } catch (err) {
      toast("Invalid JSON file");
    }
  };
  reader.readAsText(f);
  e.target.value = "";
});

el("resetBtn").addEventListener("click", () => {
  if (confirm("Reset all content back to the original resume defaults? This cannot be undone.")) {
    resetData();
    data = loadData();
    renderAll();
    toast("Reset to defaults");
  }
});

/* sidebar smooth-scroll + active state */
document.querySelectorAll(".side a").forEach((a) => {
  a.addEventListener("click", () => {
    document.querySelectorAll(".side a").forEach((x) => x.classList.remove("active"));
    a.classList.add("active");
    const target = el(a.dataset.target);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

renderAll();
