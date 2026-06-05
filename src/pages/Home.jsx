import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import Magnetic from "../components/Magnetic";
import Marquee from "../components/Marquee";
import Typewriter from "../components/Typewriter";
import Counter from "../components/Counter";
import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";
import CTA from "../components/CTA";
import { Icon } from "../components/Icons";
import { profile, stats, skills, projects } from "../data/portfolio";

const lineUp = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const word = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const marqueeItems = skills.flatMap((s) => s.items).slice(0, 16);

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
              <Typewriter words={profile.roles} />
            </div>

            <motion.p className="hero-lead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}>
              {profile.tagline}
            </motion.p>

            <motion.div className="hero-actions" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
              <Magnetic><Link to="/projects" className="btn btn-primary">View my work <Icon.arrow /></Link></Magnetic>
              <Magnetic><a className="btn btn-ghost" href={`mailto:${profile.email}`}><Icon.mail /> Get in touch</a></Magnetic>
            </motion.div>

            <motion.div className="hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              <span>◦ {profile.location}</span>
              <span>◦ {profile.title}</span>
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
            <motion.div
              className="badge-float"
              initial={{ opacity: 0.1, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              <span className="big">3+</span>
              <span className="sm">years building<br />Flutter apps</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Marquee items={marqueeItems} />

      {/* STATS */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="stat-grid">
              {stats.map((s) => (
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
                <span className="eyebrow">Selected work</span>
                <h2 className="section-title">Featured Projects</h2>
              </div>
              <Magnetic><Link to="/projects" className="btn btn-ghost">All projects <Icon.arrow /></Link></Magnetic>
            </div>
          </Reveal>
          <div className="proj-grid">
            {featured.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
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
            <span className="eyebrow">Toolbox</span>
            <h2 className="section-title">What I work with</h2>
            <p className="section-lead">The technologies I reach for to ship reliable, polished products.</p>
          </Reveal>
          <div className="skills-grid" style={{ marginTop: 40 }}>
            {skills.slice(0, 3).map((s, i) => (
              <Reveal key={s.category} delay={i * 0.08}>
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
