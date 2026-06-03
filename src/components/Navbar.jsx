import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "./Icons";
import { profile } from "../data/portfolio";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <span className="badge">{profile.firstName[0]}</span>
            {profile.name}
          </Link>

          <nav className="nav-links">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => (isActive ? "active" : "")}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-right">
            <button className="theme-btn" onClick={onToggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? <Icon.sun /> : <Icon.moon />}
            </button>
            <Link to="/contact" className="btn nav-cta">Let's talk</Link>
            <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open menu">
              <Icon.menu />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <button className="menu-btn" onClick={() => setOpen(false)} aria-label="Close menu" style={{ position: "absolute", top: 26, right: 26 }}>
              <Icon.close />
            </button>
            {links.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.06 }}
              >
                <NavLink to={l.to} end={l.end} onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>
                  {l.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
