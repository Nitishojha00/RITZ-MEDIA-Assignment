"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const rows: { items: string[]; direction: 1 | -1 }[] = [
  { items: ["CONTENT MARKETING", "WEB DEVELOPMENT"], direction: -1 },
  { items: ["INFLUENCER MARKETING", "CELEBRITY ENDORSEMENT"], direction: 1 },
  { items: ["CREATIVE SERVICE", "PRINT ADVERTISEMENT"], direction: -1 },
  { items: ["CELEBRITY ENDORSEMENT", "RADIO ADVERTISEMENT"], direction: 1 },
  { items: ["INFLUENCER MARKETING"], direction: -1 },
  { items: ["DIGITAL MARKETING"], direction: 1 },
];

function TickerRow({ items, direction }: { items: string[]; direction: 1 | -1 }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const tween = gsap.to(track, {
      xPercent: direction === 1 ? 50 : -50,
      duration: 24,
      ease: "none",
      repeat: -1,
    });
    return () => {
      tween.kill();
    };
  }, [direction]);

  const content = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden">
      <div ref={trackRef} className="flex w-max gap-10 whitespace-nowrap">
        {content.map((item, i) => (
          <span
            key={i}
            className="text-2xl font-extrabold uppercase tracking-tight text-white/50 sm:text-4xl"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * Dark rust-toned photo background with multi-row alternating marquee text —
 * matches the Figma "services ticker" frame. Swap the background image with
 * the real export.
 */
export default function BrandTicker() {
  return (
    <section className="relative overflow-hidden bg-ritz-rust py-20">
      {/* TODO: replace with the real background photo from Figma, kept as a
          dark gradient placeholder for now so text stays legible */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-ritz-rust/70 to-black/80" />
      <div className="relative flex flex-col gap-6">
        {rows.map((row, i) => (
          <TickerRow key={i} items={row.items} direction={row.direction} />
        ))}
      </div>
    </section>
  );
}
