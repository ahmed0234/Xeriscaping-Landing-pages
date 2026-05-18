"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { User } from "lucide-react";

const testimonials = [
  {
    quote:
      "They didn't just remove our lawn — they reimagined how we experience our outdoor space. The desert has never looked this elegant.",
    name: "Sarah & Daniel Voss",
    location: "Paradise Valley, AZ",
    project: "Full Xeriscape Conversion",
    waterSaved: "62%",
  },
  {
    quote:
      "We wanted something that felt like it had always been there. The result is so natural, so intentional — our neighbors think it was designed by a museum architect.",
    name: "Marcus Chen",
    location: "Arcadia, Scottsdale",
    project: "Courtyard Redesign",
    waterSaved: "55%",
  },
  {
    quote:
      "Our water bill dropped by 65% in the first season. But honestly? It's the beauty that surprises us every single morning.",
    name: "The Harrison Family",
    location: "Scottsdale, AZ",
    project: "Backyard Transformation",
    waterSaved: "65%",
  },
  {
    quote:
      "From the first consultation to the final stone placement, every step felt intentional. They treated our home like it was their own creative canvas.",
    name: "James & Laura Bennett",
    location: "Sedona, AZ",
    project: "Desert Garden Installation",
    waterSaved: "58%",
  },
  {
    quote:
      "I was hesitant about going xeriscape, but the team showed us a vision we couldn't refuse. Now we spend weekends enjoying our yard, not maintaining it.",
    name: "Elena Torres",
    location: "Mesa, AZ",
    project: "Lawn Replacement",
    waterSaved: "70%",
  },
  {
    quote:
      "The sculptural cacti and the dry creek bed they designed have become the centerpiece of our property. Guests always ask who designed it.",
    name: "David & Priya Kapoor",
    location: "Carefree, AZ",
    project: "Feature Landscape Design",
    waterSaved: "48%",
  },
];

export default function P2Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [active, setActive] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const total = testimonials.length;

  const goNext = useCallback(() => {
    setActive((prev) => (prev + 1) % total);
  }, [total]);

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(goNext, 5000);
    return () => clearInterval(interval);
  }, [isHovering, goNext]);

  const current = testimonials[active];

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative bg-[#1A1814] py-32 lg:py-48 overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C4956A]/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20 lg:mb-28"
        >
          <span className="text-[11px] uppercase tracking-[0.4em] font-body text-[#C4956A] block mb-6">
            Voices
          </span>
          <h2 className="font-heading text-5xl lg:text-7xl font-light text-[#F5F0E8] leading-[1.05]">
            In their{" "}
            <em className="italic text-[#C4956A]/80">words</em>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center min-h-[400px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-4 order-2 lg:order-1"
          >
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`group flex items-center gap-4 p-4 lg:p-5 rounded-sm text-left transition-all duration-500 w-full min-w-[240px] lg:min-w-0 border ${
                    active === i
                      ? "bg-[#242019] border-[#C4956A]/20"
                      : "bg-transparent border-transparent hover:bg-[#242019]/50 hover:border-[#3D3830]/30"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${
                      active === i
                        ? "bg-[#C4956A]/10 border-[#C4956A]/30"
                        : "bg-[#242019] border-[#3D3830]/50 group-hover:border-[#3D3830]"
                    }`}
                  >
                    <User
                      className={`w-4 h-4 transition-colors duration-500 ${
                        active === i ? "text-[#C4956A]/70" : "text-[#A39B90]/40"
                      }`}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-sm font-body font-medium truncate transition-colors duration-500 ${
                        active === i ? "text-[#F5F0E8]" : "text-[#A39B90]/70 group-hover:text-[#A39B90]"
                      }`}
                    >
                      {t.name}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#A39B90]/40 font-body mt-0.5 truncate">
                      {t.location}
                    </p>
                  </div>

                  <div
                    className={`flex-shrink-0 w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                      active === i ? "bg-[#C4956A]" : "bg-transparent"
                    }`}
                  />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-8 order-1 lg:order-2 relative"
          >
            {/* Decorative Quote Mark */}
            <span className="font-heading text-[200px] lg:text-[300px] leading-none text-[#C4956A]/5 absolute -top-20 -left-6 pointer-events-none select-none">
              &ldquo;
            </span>

            <div className="relative z-10 pl-2 lg:pl-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.8, 0.25, 1],
                  }}
                >
                  <blockquote className="mb-12">
                    <p className="font-heading text-3xl lg:text-5xl font-light text-[#F5F0E8]/90 leading-[1.4] italic">
                      &ldquo;{current.quote}&rdquo;
                    </p>
                  </blockquote>

                  {/* Author + Meta */}
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-[#3D3830]/30 pt-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full border border-[#C4956A]/20 bg-[#C4956A]/5 flex items-center justify-center">
                        <User className="w-5 h-5 text-[#C4956A]/60" strokeWidth={1.5} />
                      </div>
                      <div>
                        <cite className="not-italic font-body text-base text-[#F5F0E8] font-medium tracking-wide block">
                          {current.name}
                        </cite>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-[#A39B90]/50 font-body mt-1">
                          {current.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-8">
                      <div>
                        <span className="font-heading text-2xl font-light text-[#C4956A]">
                          {current.waterSaved}
                        </span>
                        <p className="text-[9px] uppercase tracking-[0.15em] text-[#A39B90]/40 font-body mt-1">
                          Water Saved
                        </p>
                      </div>
                      <div className="w-px h-8 bg-[#3D3830]/40" />
                      <div>
                        <span className="text-xs text-[#A39B90]/70 font-body">
                          {current.project}
                        </span>
                        <p className="text-[9px] uppercase tracking-[0.15em] text-[#A39B90]/40 font-body mt-1">
                          Project Type
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-10 flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    className="h-[2px] flex-1 bg-[#3D3830]/40 rounded-full overflow-hidden cursor-pointer"
                    onClick={() => setActive(i)}
                  >
                    <motion.div
                      className="h-full bg-[#C4956A]/60 rounded-full origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX: active === i ? 1 : 0,
                      }}
                      transition={{
                        duration: active === i ? 5 : 0.3,
                        ease: active === i ? "linear" : "easeOut",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
