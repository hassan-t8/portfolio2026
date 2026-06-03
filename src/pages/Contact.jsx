import { useState } from "react";
import Reveal from "../components/Reveal";
import Magnetic from "../components/Magnetic";
import { Icon } from "../components/Icons";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  /* No backend needed — compose a prefilled email via the user's mail client. */
  function onSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || "someone"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  const rows = [
    { ic: "mail", k: "Email", v: profile.email, href: `mailto:${profile.email}` },
    { ic: "phone", k: "Phone", v: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { ic: "pin", k: "Location", v: profile.location },
    { ic: "linkedin", k: "LinkedIn", v: "hassan-talha", href: profile.linkedin },
  ];

  return (
    <section className="section page-top">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Contact</span>
          <h1 className="section-title">Let's start a<br /><span className="accent">conversation.</span></h1>
          <p className="section-lead">Have a project, a role, or just a question? Drop a message — I usually reply within a day.</p>
        </Reveal>

        <div className="contact-grid" style={{ marginTop: 56 }}>
          <Reveal>
            <div className="contact-info">
              {rows.map((r) => {
                const Glyph = Icon[r.ic];
                const inner = (
                  <div className="ci-row">
                    <div className="ci-ic"><Glyph /></div>
                    <div>
                      <div className="k">{r.k}</div>
                      <div className="v">{r.v}</div>
                    </div>
                  </div>
                );
                return r.href ? (
                  <a key={r.k} href={r.href} target={r.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{inner}</a>
                ) : (
                  <div key={r.k}>{inner}</div>
                );
              })}
              <div className="socials" style={{ justifyContent: "flex-start", marginTop: 10 }}>
                {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon.linkedin /></a>}
                {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon.github /></a>}
                <a href={`mailto:${profile.email}`} aria-label="Email"><Icon.mail /></a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="card" style={{ padding: 30 }} onSubmit={onSubmit}>
              <div className="field">
                <label htmlFor="name">Your name</label>
                <input id="name" value={form.name} onChange={set("name")} placeholder="Jane Doe" required />
              </div>
              <div className="field">
                <label htmlFor="email">Your email</label>
                <input id="email" type="email" value={form.email} onChange={set("email")} placeholder="jane@company.com" required />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" value={form.message} onChange={set("message")} placeholder="Tell me about your project or role…" required />
              </div>
              <Magnetic>
                <button type="submit" className="btn btn-primary"><Icon.mail /> Send message</button>
              </Magnetic>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
