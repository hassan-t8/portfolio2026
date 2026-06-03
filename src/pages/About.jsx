import Reveal from "../components/Reveal";
import SkillCard from "../components/SkillCard";
import CTA from "../components/CTA";
import { profile, skills, experience, education, certifications, awards, languages } from "../data/portfolio";

export default function About() {
  return (
    <>
      {/* Intro */}
      <section className="section page-top">
        <div className="container">
          <Reveal>
            <span className="eyebrow">About me</span>
            <h1 className="section-title">Mobile developer who ships<br />the <span className="accent">whole product.</span></h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-lead" style={{ maxWidth: 760, fontSize: 19 }}>{profile.summary}</p>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Toolbox</span>
            <h2 className="section-title">Technical Skills</h2>
          </Reveal>
          <div className="skills-grid" style={{ marginTop: 40 }}>
            {skills.map((s, i) => (
              <Reveal key={s.category} delay={(i % 3) * 0.07}>
                <SkillCard skill={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Career</span>
            <h2 className="section-title">Experience</h2>
          </Reveal>
          <div className="xp-list" style={{ marginTop: 40 }}>
            {experience.map((e, i) => (
              <Reveal key={e.company} delay={i * 0.06}>
                <article className="card xp">
                  <div>
                    <div className="when">{e.period}</div>
                    <div className="co">{e.company}</div>
                    <div className="loc">{e.location}</div>
                    {e.current && <span className="now">● Current</span>}
                  </div>
                  <div>
                    <h3>{e.role}</h3>
                    <ul>
                      {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education + extras */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Background</span>
            <h2 className="section-title">Education &amp; more</h2>
          </Reveal>

          <div className="info-grid" style={{ marginTop: 40 }}>
            <Reveal>
              <div className="card info">
                <h3><span className="em">◆</span> Education</h3>
                {education.map((ed) => (
                  <div className="edu" key={ed.degree}>
                    <div className="d">{ed.degree}</div>
                    <div className="i">{ed.institution}</div>
                    <div className="p">{ed.period} · {ed.detail}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.07}>
              <div className="card info">
                <h3><span className="em">◆</span> Certifications</h3>
                <ul className="plain">
                  {certifications.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
            </Reveal>
            <Reveal>
              <div className="card info">
                <h3><span className="em">◆</span> Awards &amp; Achievements</h3>
                <ul className="plain">
                  {awards.map((a) => <li key={a}>{a}</li>)}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.07}>
              <div className="card info">
                <h3><span className="em">◆</span> Languages</h3>
                <div className="langs">
                  {languages.map((l) => (
                    <div className="lang" key={l.name}>
                      <b>{l.name}</b>
                      <span>{l.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
