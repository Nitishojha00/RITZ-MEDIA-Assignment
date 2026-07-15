"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RevealText from "@/components/animations/RevealText";
import FadeInSection from "@/components/animations/FadeInSection";

const testimonials = [
  {
    quote:
      "They not only make sure that they deliver on their promises, but also educate you on what exactly is needed to be done for your brand, thereby preventing you from under or over spending your precious money.",
    name: "Eldeco Group",
    title: "Managing Director",
  },
  // TODO: add the remaining testimonials from the Figma carousel
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section id="clients" className="bg-white px-6 py-28 text-black sm:px-10 lg:px-16">
      <RevealText as="h2" className="mb-2 text-4xl font-extrabold sm:text-5xl">
        What Clients Say
      </RevealText>
      <FadeInSection delay={0.1}>
        <p className="mb-16 max-w-xl text-black/60">
          The world&apos;s largest independent brand agency. We drive growth,
        </p>
      </FadeInSection>

      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 block text-6xl font-serif text-ritz-rust">&ldquo;</span>
            <p className="max-w-xl text-xl leading-relaxed sm:text-2xl">
              {t.quote}
            </p>
            <div className="mt-8">
              <p className="text-lg font-bold uppercase">{t.name}</p>
              <p className="text-sm uppercase tracking-widest text-black/50">
                {t.title}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* TODO: swap for the real client project photo from Figma */}
        <div className="aspect-[4/5] w-full max-w-sm justify-self-end rounded-sm bg-gradient-to-br from-sky-300 to-emerald-600" />
      </div>

      <div className="mt-12 flex gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            aria-label={`Show testimonial ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all ${
              i === active ? "w-8 bg-black" : "w-2 bg-black/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
