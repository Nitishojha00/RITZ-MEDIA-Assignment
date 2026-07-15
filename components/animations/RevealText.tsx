"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
  /** Split by "word" (default, best for headlines) or "char" (best for short labels) */
  splitBy?: "word" | "char";
  once?: boolean;
}

const container: Variants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
};

const item: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, ease: [0.19, 1, 0.22, 1] },
  },
};

/**
 * Masked line-reveal for headlines/paragraphs — the classic "premium agency"
 * text animation: each word (or char) slides up out of a clipped mask.
 */
export default function RevealText({
  children,
  as = "h2",
  className,
  delay = 0,
  splitBy = "word",
  once = true,
}: RevealTextProps) {
  const Tag = motion[as];
  const pieces =
    splitBy === "word" ? children.split(" ") : children.split("");

  return (
    <Tag className={cn("relative", className)}>
      <motion.span
        className="inline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.6 }}
        variants={container}
        custom={0.045}
        style={{ transitionDelay: `${delay}s` }}
      >
        {pieces.map((piece, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden align-top"
          >
            <motion.span className="inline-block" variants={item}>
              {piece === "" ? "\u00A0" : piece}
              {splitBy === "word" && i !== pieces.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
