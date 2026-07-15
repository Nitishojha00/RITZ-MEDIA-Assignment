"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
}

/**
 * Clip-path "curtain" reveal + subtle parallax scale — common on premium
 * agency sites for hero/gallery imagery.
 */
export default function ImageReveal({
  src,
  alt,
  className,
  imgClassName,
  priority,
  fill = true,
  width,
  height,
}: ImageRevealProps) {
  return (
    <motion.div
      className={cn("relative overflow-hidden", className)}
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
    >
      <motion.div
        initial={{ scale: 1.25 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
        className="h-full w-full"
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className={cn("object-cover", imgClassName)}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className={cn("object-cover", imgClassName)}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
