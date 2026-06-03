import { motion } from "framer-motion";

/* Scroll-reveal wrapper. Fades + lifts children when they enter the viewport. */
export default function Reveal({ children, delay = 0, y = 28, as = "div", className, ...rest }) {
  const M = motion[as] || motion.div;
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </M>
  );
}
