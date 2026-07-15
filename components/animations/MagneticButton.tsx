"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  strength?: number;
}

/**
 * Cursor-follows-into-button micro-interaction. Disabled on touch devices
 * (no hover/cursor there) — falls back to a normal tap target.
 */
export default function MagneticButton({
  children,
  className,
  onClick,
  href,
  strength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const quickX = useRef<gsap.QuickToFunc | null>(null);
  const quickY = useRef<gsap.QuickToFunc | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || matchMedia("(pointer: coarse)").matches) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    quickX.current ??= gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" });
    quickY.current ??= gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });

    quickX.current(x * strength);
    quickY.current(y * strength);
  };

  const handleMouseLeave = () => {
    quickX.current?.(0);
    quickY.current?.(0);
  };

  const Tag = href ? "a" : "button";

  return (
    <Tag
      ref={ref as never}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "inline-flex items-center justify-center will-change-transform",
        className
      )}
    >
      {children}
    </Tag>
  );
}
