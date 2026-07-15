"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  /** Use for grids of cards to auto-stagger children that are FadeInSection themselves */
  amount?: number;
}

export default function FadeInSection({
  children,
  className,
  delay = 0,
  y = 60,
  once = true,
  amount = 0.2,
}: FadeInSectionProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.9, delay, ease: [0.19, 1, 0.22, 1] }}
    >
      {children}
    </motion.div>
  );
}
