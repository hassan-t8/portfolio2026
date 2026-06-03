import { motion } from "framer-motion";

/* Seamless infinite marquee of words. */
export default function Marquee({ items, duration = 28 }) {
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <motion.div
        className="marquee-row"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {row.map((it, i) => (
          <span key={i}>{it}</span>
        ))}
      </motion.div>
    </div>
  );
}
