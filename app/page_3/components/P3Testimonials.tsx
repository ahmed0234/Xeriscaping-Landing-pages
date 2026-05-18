"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { User } from "lucide-react";

const testimonials = [
  {
    quote: "They didn't landscape our yard — they composed a living sculpture. Every stone, every plant, every shadow feels intentional.",
    name: "Sarah & Daniel Voss",
    location: "Paradise Valley",
  },
  {
    quote: "Our neighbors think we hired a museum architect. The truth is even better — we hired people who understand the desert.",
    name: "Marcus Chen",
    location: "Scottsdale",
  },
  {
    quote: "65% less water. Zero weekend maintenance. And a backyard that looks like a luxury resort. I didn't know that was possible.",
    name: "The Harrison Family",
    location: "Phoenix",
  },
  {
    quote: "From bare dirt to breathtaking in six weeks. The process was seamless, the communication flawless, the result extraordinary.",
    name: "James Bennett",
    location: "Sedona",
  },
  {
    quote: "Every evening we sit outside and discover something new — the way light hits the agave, the texture of the gravel at sunset. It's living art.",
    name: "Elena Torres",
    location: "Mesa",
  },
];

export default function P3Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const goNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(goNext, 6000);
    return () => clearInterval(interval);
  }, [isHovering, goNext]);

  const current = testimonials[active];

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative bg-[#0F1A14] py-40 lg:py-56 overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B87333]/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-24 lg:mb-32"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] font-body text-[#B87333] block mb-6">
            06 — Voices
          </span>
          <h2 className="font-heading text-5xl lg:text-7xl font-bold uppercase text-[#F0EBE3] tracking-tight leading-[0.95]">
            Client{" "}
            <span style={{ WebkitTextStroke: "1.5px #F0EBE3", color: "transparent" }}>
              stories
            </span>
          </h2>
        </motion.div>

        {/* Large Featured Quote */}
        <div className="relative min-h-[350px] flex flex-col justify-center">
          {/* Giant decorative number */}
          <span className="absolute -top-10 -left-4 font-heading text-[220px] font-black text-[#1A2B21] leading-none select-none pointer-events-none">
            {String(active + 1).padStart(2, "0")}
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
              className="relative z-10"
            >
              <blockquote className="mb-14">
                <p className="font-heading text-3xl lg:text-[3.2rem] font-light text-[#F0EBE3] leading-[1.35] italic lg:max-w-4xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
              </blockquote>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full border border-[#B87333]/20 bg-[#B87333]/5 flex items-center justify-center">
                  <User className="w-5 h-5 text-[#B87333]/50" strokeWidth={1.5} />
                </div>
                <div>
                  <cite className="not-italic font-body text-base text-[#F0EBE3] font-medium tracking-wide block">
                    {current.name}
                  </cite>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#6B7F6F] font-body mt-1">
                    {current.location}, AZ
                  </p>
                </div>
                <div className="ml-auto hidden lg:block">
                  <div className="w-16 h-px bg-[#B87333]/30" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex items-center gap-4"
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="group flex items-center gap-3"
              aria-label={`Testimonial ${i + 1}`}
            >
              <div className={`h-px transition-all duration-700 ${
                active === i
                  ? "w-12 bg-[#B87333]"
                  : "w-6 bg-[#2A3D30] group-hover:bg-[#6B7F6F] group-hover:w-8"
              }`} />
              <span className={`text-[10px] font-body transition-colors duration-500 ${
                active === i ? "text-[#B87333]" : "text-[#6B7F6F]/50"
              }`}>
                {String(i + 1).padStart(2, "0")}
              </span>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
