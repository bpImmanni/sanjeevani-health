"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);

  // "once: false" is the KEY: it re-animates whenever it comes back in view
  const inView = useInView(ref, {
    amount: 0.2,
    once: false,
    margin: "0px 0px -10% 0px",
  });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
        animate={
          inView
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, y: 18, filter: "blur(6px)" }
        }
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
