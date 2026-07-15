"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const services = [
  { n: "01", label: "Digital Marketing" },
  { n: "02", label: "Creative Services" },
  { n: "03", label: "Print Advertising" },
  { n: "04", label: "Radio Advertising" },
  { n: "05", label: "Content Marketing" },
  { n: "06", label: "Celebrity Endorsements" },
];

/**
 * Stacked numbered services list with an image bleeding into the first row —
 * matches the Figma "01 Digital Marketing / 02 Creative Services / ..." frame.
 * Swap /placeholder-service.jpg with the real export.
 */
export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={containerRef}
      className="relative bg-white px-6 py-28 text-black sm:px-10 lg:px-16"
    >
      <div className="relative">
        {services.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: i * 0.05, ease: [0.19, 1, 0.22, 1] }}
            className="flex items-baseline gap-6 border-b border-black/10 py-4 sm:gap-10 sm:py-6"
          >
            <span className="text-sm text-black/30 sm:text-base">{s.n}</span>
            <h3
              className={cn(
                "font-extrabold uppercase leading-none tracking-tight",
                i === 0
                  ? "text-[10vw] text-black sm:text-[6vw]"
                  : "text-[10vw] text-black/15 sm:text-[6vw]"
              )}
            >
              {s.label}
            </h3>
          </motion.div>
        ))}

        {/* image bleeding into the first row, top-right */}
        <motion.div
          style={{ y: imgY }}
          className="pointer-events-none absolute right-0 top-0 hidden aspect-[3/4] w-[22vw] max-w-xs overflow-hidden rounded-sm bg-gradient-to-br from-orange-400 to-blue-500 sm:block"
        >
          {/* TODO: replace with the real model photo exported from Figma */}
        </motion.div>
      </div>
    </section>
  );
}
