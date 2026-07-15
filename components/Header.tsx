"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    setHidden(y > lastY.current && y > 120);
    lastY.current = y;
  });

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-ritz-navy px-6 py-5 sm:px-10 lg:px-16"
    >
      <a href="#" className="flex items-baseline gap-2 leading-none">
        <span className="text-2xl font-extrabold tracking-tight text-ritz-gold">
          RITZ MEDIA
        </span>
        <span
          className="text-2xl font-extrabold tracking-tight text-transparent [-webkit-text-stroke:1.5px_white]"
        >
          WORLD
        </span>
      </a>

      <nav className="hidden items-center gap-10 text-sm font-medium tracking-wide text-white sm:flex">
        <a href="#work" className="transition-opacity hover:opacity-60">WORK</a>
        <a href="#about" className="transition-opacity hover:opacity-60">ABOUT</a>
        <a
          href="#contact"
          className="rounded-full border border-white/30 px-5 py-2 transition-colors hover:border-white/70"
        >
          GET IN TOUCH
        </a>
        <button aria-label="Open menu" className="flex flex-col gap-1.5">
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-4 bg-white" />
        </button>
      </nav>

      <button aria-label="Open menu" className="flex flex-col gap-1.5 sm:hidden">
        <span className="block h-0.5 w-6 bg-white" />
        <span className="block h-0.5 w-6 bg-white" />
        <span className="block h-0.5 w-4 bg-white" />
      </button>
    </motion.header>
  );
}
