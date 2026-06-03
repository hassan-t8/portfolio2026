import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { Icon } from "./Icons";
import { profile } from "../data/portfolio";

export default function CTA() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="cta">
            <span className="eyebrow">Get in touch</span>
            <h2 style={{ marginTop: 18 }}>Let's build something<br /><span className="accent">great together.</span></h2>
            <p>Open to mobile development roles and freelance projects. I usually reply within a day.</p>
            <div className="actions">
              <Magnetic>
                <a className="btn btn-primary" href={`mailto:${profile.email}`}><Icon.mail /> {profile.email}</a>
              </Magnetic>
              <Magnetic>
                <Link className="btn btn-ghost" to="/contact">Contact page <Icon.arrow /></Link>
              </Magnetic>
            </div>
            <div className="socials">
              {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon.linkedin /></a>}
              {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon.github /></a>}
              <a href={`mailto:${profile.email}`} aria-label="Email"><Icon.mail /></a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
