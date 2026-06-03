import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import CTA from "../components/CTA";
import { projects } from "../data/portfolio";

/* Build the filter list from the tech stacks actually used. */
function buildFilters(list) {
  const counts = {};
  list.forEach((p) => p.tech.forEach((t) => { counts[t] = (counts[t] || 0) + 1; }));
  return Object.entries(counts)
    .filter(([, n]) => n >= 2)
    .sort((a, b) => b[1] - a[1])
    .map(([t]) => t);
}

export default function Projects() {
  const filters = useMemo(() => ["All", ...buildFilters(projects)], []);
  const [active, setActive] = useState("All");

  const shown = active === "All" ? projects : projects.filter((p) => p.tech.includes(active));

  return (
    <>
      <section className="section page-top">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Portfolio</span>
            <h1 className="section-title">Things I've designed,<br />built &amp; <span className="accent">shipped.</span></h1>
            <p className="section-lead">A selection of production apps and platforms — mostly Flutter front-ends backed by Node.js services.</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="filters" style={{ marginTop: 40 }}>
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
                  key={p.name}
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
