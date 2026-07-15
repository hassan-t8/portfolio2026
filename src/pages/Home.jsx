import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "../components/Reveal";
import Magnetic from "../components/Magnetic";
import Marquee from "../components/Marquee";
import Typewriter from "../components/Typewriter";
import Counter from "../components/Counter";
import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";
import CTA from "../components/CTA";
import RoleCommand from "../components/RoleCommand";
import { Icon } from "../components/Icons";
import { profile } from "../data/portfolio";
import { usePersona } from "../context/PersonaContext";
import { projectsFor } from "../data/personas";

const lineUp = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const word = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const morph = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
};

export default function Home() {
  const { personaId, persona } = usePersona();
  const projects = projectsFor(personaId);
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const marqueeItems = persona.skills.flatMap((s) => s.items).slice(0, 16);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              {profile.available && (
                <span className="status">
                  <span className="ping"><i /><b /></span> Available for new projects
                </span>
              )}
            </motion.div>

            <motion.h1 variants={lineUp} initial="hidden" animate="show">
              <span className="o"><motion.span variants={word} style={{ display: "inline-block" }}>{profile.firstName}</motion.span></span>
              <span className="o"><motion.span variants={word} style={{ display: "inline-block" }} className="accent">{profile.lastName}</motion.span></span>
            </motion.h1>

            <div className="hero-role mono">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={personaId} {...morph} style={{ display: "inline-block" }}>
                  <Typewriter key={personaId} words={persona.roles} />
                </motion.span>
              </AnimatePresence>
            </div>

            {/* THE ROLE COMMAND BAR — type a role to morph the site */}
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}>
              <RoleCommand />
            </motion.div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.p className="hero-lead" key={personaId} {...morph}>
                {persona.tagline}
              </motion.p>
            </AnimatePresence>

            <motion.div className="hero-actions" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
              <Magnetic><Link to="/projects" className="btn btn-primary">View my work <Icon.arrow /></Link></Magnetic>
              <Magnetic><a className="btn btn-ghost" href={`mailto:${profile.email}`}><Icon.mail /> Get in touch</a></Magnetic>
            </motion.div>

            <motion.div className="hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              <span>◦ {profile.location}</span>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={personaId} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                  ◦ {persona.label}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </div>

          <motion.div
            className="hero-card"
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="portrait">
              <span className="frame" />
              <span className="initials">{profile.firstName[0]}{profile.lastName[0]}</span>
            </div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                className="badge-float"
                key={personaId}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.35 }}
              >
                <span className="big">{persona.badge.big}</span>
                <span className="sm" dangerouslySetInnerHTML={{ __html: persona.badge.sm }} />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Marquee key={personaId} items={marqueeItems} />

      {/* STATS */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="stat-grid">
              {persona.stats.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="num accent"><Counter value={s.value} suffix={s.suffix} /></div>
                  <div className="lab">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 40 }}>
              <div>
                <span className="eyebrow">Selected work · {persona.short}</span>
                <h2 className="section-title">Featured Projects</h2>
              </div>
              <Magnetic><Link to="/projects" className="btn btn-ghost">All projects <Icon.arrow /></Link></Magnetic>
            </div>
          </Reveal>
          <div className="proj-grid">
            {featured.map((p, i) => (
              <Reveal key={`${personaId}-${p.name}`} delay={i * 0.08}>
                <ProjectCard project={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS PREVIEW */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Toolbox · {persona.short}</span>
            <h2 className="section-title">What I work with</h2>
            <p className="section-lead">The technologies I reach for as a {persona.label.toLowerCase()} to ship reliable, polished products.</p>
          </Reveal>
          <div className="skills-grid" style={{ marginTop: 40 }}>
            {persona.skills.slice(0, 3).map((s, i) => (
              <Reveal key={`${personaId}-${s.category}`} delay={i * 0.08}>
                <SkillCard skill={s} />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div style={{ marginTop: 28 }}>
              <Magnetic><Link to="/about" className="btn btn-ghost">More about me <Icon.arrow /></Link></Magnetic>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
