import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/* Animated background blobs (with subtle scroll parallax) + dotted overlay. */
export default function Background() {
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  const y1 = useTransform(p, [0, 1], [0, -120]);
  const y2 = useTransform(p, [0, 1], [0, 140]);

  return (
    <>
      <div className="bg-layer">
        <motion.div className="bg-blob one" style={{ y: y1 }} />
        <motion.div className="bg-blob two" style={{ y: y2 }} />
      </div>
      <div className="bg-noise" />
    </>
  );
}
