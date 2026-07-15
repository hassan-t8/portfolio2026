import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePersona } from "../context/PersonaContext";
import { matchPersona } from "../data/personas";
import { Icon } from "./Icons";

/* The hero "command bar": visitors TYPE a role (flutter / web /
   backend) and the whole site morphs to that profile. Clickable
   chips are there for discoverability; typing is the magic. */
export default function RoleCommand() {
  const { personaId, persona, setPersona, personas } = usePersona();
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const matchedId = query.trim() ? matchPersona(query) : null;

  /* Live-switch as the visitor types a recognised role. */
  useEffect(() => {
    if (matchedId && matchedId !== personaId) setPersona(matchedId);
  }, [matchedId, personaId, setPersona]);

  /* Press "/" anywhere to jump into the command bar. */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "/" && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      setQuery("");
      inputRef.current?.blur();
    }
    if (e.key === "Enter") inputRef.current?.blur();
  };

  const pickChip = (id) => {
    setPersona(id);
    setQuery("");
  };

  return (
    <div className="rolecmd">
      <div className="rolecmd-bar">
        <span className="rolecmd-prompt mono">&gt;</span>
        <input
          ref={inputRef}
          className="rolecmd-input mono"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="type a role — flutter, web, backend…"
          aria-label="Type a developer role to tailor this portfolio"
          autoComplete="off"
          spellCheck="false"
        />
        <kbd className="rolecmd-kbd mono">/</kbd>
      </div>

      <div className="rolecmd-hint mono">
        <AnimatePresence mode="wait" initial={false}>
          {query.trim() && matchedId ? (
            <motion.span
              key={`ok-${matchedId}`}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              ↳ showing the <b className="accent">{persona.label}</b> profile
            </motion.span>
          ) : query.trim() ? (
            <motion.span
              key="none"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              style={{ color: "var(--ink-3)" }}
            >
              ↳ no match — try “flutter”, “web” or “backend”
            </motion.span>
          ) : (
            <motion.span
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ color: "var(--ink-3)" }}
            >
              ↳ or pick one below — the whole page retunes to it
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <div className="rolecmd-chips">
        {personas.map((p) => {
          const Glyph = Icon[p.icon] || Icon.tools;
          const active = p.id === personaId;
          return (
            <button
              key={p.id}
              className={`rolechip ${active ? "active" : ""}`}
              onClick={() => pickChip(p.id)}
              aria-pressed={active}
            >
              {active && (
                <motion.span layoutId="rolechip-bg" className="rolechip-bg" transition={{ type: "spring", stiffness: 400, damping: 34 }} />
              )}
              <span className="rolechip-in">
                <Glyph />
                {p.short}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
