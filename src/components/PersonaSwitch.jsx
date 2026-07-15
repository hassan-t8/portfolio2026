import { useId } from "react";
import { motion } from "framer-motion";
import { usePersona } from "../context/PersonaContext";
import { Icon } from "./Icons";

/* Compact role switcher for the navbar (and mobile menu) so the
   active profile can be changed from any page, not just the hero. */
export default function PersonaSwitch({ variant = "bar", onPick }) {
  const { personaId, setPersona, personas } = usePersona();
  /* Unique per instance so multiple switches on one page don't
     share a layoutId and fight over the sliding highlight. */
  const uid = useId();

  return (
    <div className={`pswitch pswitch-${variant}`} role="group" aria-label="Choose a developer role">
      {personas.map((p) => {
        const Glyph = Icon[p.icon] || Icon.tools;
        const active = p.id === personaId;
        return (
          <button
            key={p.id}
            className={`pswitch-btn ${active ? "active" : ""}`}
            onClick={() => { setPersona(p.id); onPick?.(); }}
            aria-pressed={active}
            title={p.label}
          >
            {active && (
              <motion.span
                layoutId={`pswitch-bg-${uid}`}
                className="pswitch-bg"
                transition={{ type: "spring", stiffness: 400, damping: 34 }}
              />
            )}
            <span className="pswitch-in">
              <Glyph />
              <span className="pswitch-label">{p.short}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
