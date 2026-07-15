"use client";

import { motion } from "framer-motion";

/**
 * Opening black frame — matches the Figma intro frame (solid black, logo
 * mark draws in). Swap the outline "R" for the exact brand mark/svg once
 * exported from Figma.
 */
export default function Hero() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden bg-black">
      <motion.span
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1], delay: 0.3 }}
        className="select-none font-serif text-[45vw] leading-none text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.5)] sm:text-[30vw]"
      >
        R
      </motion.span>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 text-xs uppercase tracking-[0.3em] text-white/40"
      >
        Scroll
      </motion.div>
    </section>
  );
}
