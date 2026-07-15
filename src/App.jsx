import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Background from "./components/Background";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";
import { usePersona } from "./context/PersonaContext";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

/* Scroll to top whenever the route changes. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div {...pageTransition}><Home /></motion.div>} />
        <Route path="/about" element={<motion.div {...pageTransition}><About /></motion.div>} />
        <Route path="/projects" element={<motion.div {...pageTransition}><Projects /></motion.div>} />
        <Route path="/contact" element={<motion.div {...pageTransition}><Contact /></motion.div>} />
        <Route path="*" element={<motion.div {...pageTransition}><Home /></motion.div>} />
      </Routes>
    </AnimatePresence>
  );
}

/* Retint the whole site's accent to match the active persona.
   Every component keys off --accent / --accent-ink / --glow, so
   overriding those three variables morphs the entire palette. */
function usePersonaAccent(persona, theme) {
  useEffect(() => {
    const root = document.documentElement;
    const acc = theme === "light" ? persona.accent.light : persona.accent.dark;
    root.style.setProperty("--accent", acc);
    root.style.setProperty("--accent-ink", persona.accent.ink);
    root.style.setProperty("--glow", `0 0 60px -12px ${acc}66`);
    document.title = `Hassan Talha — ${persona.label}`;
  }, [persona, theme]);
}

export default function App() {
  const { theme, toggle } = useTheme();
  const { persona } = usePersona();
  usePersonaAccent(persona, theme);
  return (
    <>
      <Background />
      <Cursor />
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <ScrollToTop />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </>
  );
}
