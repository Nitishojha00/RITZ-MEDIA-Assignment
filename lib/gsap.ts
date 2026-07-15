"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // Sensible global defaults for a "premium" feel
  gsap.defaults({
    ease: "power3.out",
    duration: 1,
  });
}

export { gsap, ScrollTrigger };
