"use client";

import RevealText from "@/components/animations/RevealText";
import FadeInSection from "@/components/animations/FadeInSection";

/**
 * "WE CREATE DESIRE THROUGH..." statement section with a subtle topographic
 * line-pattern background. Replace the SVG pattern with the exact one
 * exported from Figma if it differs.
 */
export default function IntroStatement() {
  return (
    <section className="relative overflow-hidden bg-ritz-cream px-6 py-24 text-black sm:px-10 lg:px-16">
      {/* topographic pattern background */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.15]"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="topo" width="220" height="220" patternUnits="userSpaceOnUse">
            {[40, 70, 100, 130, 160].map((r) => (
              <circle
                key={r}
                cx="110"
                cy="110"
                r={r}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topo)" />
      </svg>

      <div className="relative flex flex-col gap-6">
        <div className="flex items-start justify-between gap-8">
          <RevealText
            as="h2"
            className="max-w-3xl text-4xl font-extrabold uppercase leading-[1.05] sm:text-5xl lg:text-6xl"
          >
            We create desire through
          </RevealText>
          <FadeInSection delay={0.3} className="hidden shrink-0 sm:block">
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
            >
              About US <span aria-hidden>↗</span>
            </a>
          </FadeInSection>
        </div>

        <FadeInSection delay={0.15}>
          <p className="max-w-2xl text-lg italic text-black/70 sm:text-xl">
            The world&apos;s largest independent brand agency. We drive
            growth, standout and fandom for the world&apos;s most desirable
            brands.
          </p>
        </FadeInSection>
      </div>

      {/* decorative giant outline letterform, as seen scrolling in below the statement */}
      <div className="relative mt-10 flex justify-center">
        <span className="select-none font-serif text-[38vw] leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(0,0,0,0.5)] sm:text-[22vw]">
          R
        </span>
      </div>
    </section>
  );
}
