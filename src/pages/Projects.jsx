import { useMemo, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import PersonaSwitch from "../components/PersonaSwitch";
import CTA from "../components/CTA";
import { usePersona } from "../context/PersonaContext";
import { projectsFor } from "../data/personas";

/* Build the filter list from the tech stacks actually used. */
function buildFilters(list) {
  const counts = {};
  list.forEach((p) => p.tech.forEach((t) => { counts[t] = (counts[t] || 0) + 1; }));
  return Object.entries(counts)
    .filter(([, n]) => n >= 2)
    .sort((a, b) => b[1] - a[1])
    .map(([t]) => t);
}

const leadFor = {
  default: "A selection of production apps and platforms — the full-stack story behind each one.",
  flutter: "Production Flutter apps shipped to iOS and Android — real-time features, payments and pixel-perfect UI.",
  web: "The same real products, reframed as their React & Next.js web builds — fast, responsive and API-integrated.",
  backend: "The engine room — Node.js & PHP/Laravel APIs, SQL/NoSQL data models, caching and real-time services.",
};

export default function Projects() {
  const { personaId, persona } = usePersona();
  const projects = useMemo(() => projectsFor(personaId), [personaId]);
  const filters = useMemo(() => ["All", ...buildFilters(projects)], [projects]);
  const [active, setActive] = useState("All");

  /* Reset the tech filter when the persona (and its stacks) change. */
  useEffect(() => { setActive("All"); }, [personaId]);

  const shown = active === "All" ? projects : projects.filter((p) => p.tech.includes(active));

  return (
    <>
      <section className="section page-top">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Portfolio · {persona.label}</span>
            <h1 className="section-title">Things I've designed,<br />built &amp; <span className="accent">shipped.</span></h1>
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                className="section-lead"
                key={personaId}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {leadFor[personaId] || leadFor.default}
              </motion.p>
            </AnimatePresence>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="proj-persona">
              <span className="proj-persona-label mono">view as</span>
              <PersonaSwitch variant="page" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="filters" style={{ marginTop: 28 }}>
              {filters.map((f) => (
                <button key={f} className={`filter ${active === f ? "active" : ""}`} onClick={() => setActive(f)}>
                  {f}
                </button>
              ))}
            </div>
          </Reveal>

          <motion.div className="proj-grid" layout>
            <AnimatePresence mode="popLayout">
              {shown.map((p, i) => (
                <motion.div
                  key={`${personaId}-${p.name}`}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard project={p} index={projects.indexOf(p)} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}
