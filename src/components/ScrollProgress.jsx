import { motion, useScroll, useSpring } from "framer-motion";

/* Top scroll-progress bar. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  return <motion.div className="scroll-bar" style={{ scaleX, right: 0 }} />;
}
