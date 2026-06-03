import { Link } from "react-router-dom";
import { Icon } from "./Icons";
import { profile } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <Link to="/" className="brand">
            <span className="badge">{profile.firstName[0]}</span>
            {profile.name}
          </Link>
          <nav className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
            {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
          </nav>
        </div>
        <div className="copy">
          © {year} {profile.name} — {profile.title}. Built with React, Vite &amp; Framer Motion.
        </div>
      </div>
    </footer>
  );
}
