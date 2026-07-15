"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Premium page-load intro: a solid panel that wipes away once the page
 * (and its critical fonts/images) is ready. Also blocks scroll during the
 * intro so Lenis doesn't fight with it.
 */
export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setLoading(false);
      document.documentElement.style.overflow = "";
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.span
            className="text-sm uppercase tracking-[0.3em] text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            Loading
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
