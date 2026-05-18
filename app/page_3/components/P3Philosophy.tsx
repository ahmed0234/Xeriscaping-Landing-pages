"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function P3Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="philosophy"
      className="relative bg-[#0F1A14] py-40 lg:py-56 overflow-hidden"
    >
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 1.5, ease: [0.25, 0.8, 0.25, 1] }}
        className="absolute left-16 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#B87333]/20 to-transparent origin-top hidden lg:block"
      />

      <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-20 lg:gap-32">
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
              className="text-[10px] uppercase tracking-[0.5em] font-body text-[#B87333] block mb-10"
            >
              01 — Philosophy
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.8, 0.25, 1] }}
              className="font-heading text-5xl lg:text-[5.5rem] font-bold uppercase text-[#F0EBE3] leading-[1] tracking-tight mb-16"
            >
              The desert
              <br />
              doesn&apos;t need
              <br />
              <span
                style={{ WebkitTextStroke: "1.5px #F0EBE3", color: "transparent" }}
              >
                saving.
              </span>
              <br />
              It needs{" "}
              <span className="text-[#B87333]">listening.</span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-24 h-px bg-[#B87333]/40 origin-left"
            />
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <p className="text-[#8A9B8A] text-lg font-body font-light leading-[2] mb-8">
                We practice landscape architecture as environmental dialogue.
                Every project begins with deep listening — to the soil, the
                climate, the light patterns, and the desires of those who will
                inhabit the space.
              </p>
              <p className="text-[#8A9B8A]/70 text-base font-body font-light leading-[2] mb-14">
                The result is never decoration. It is a living system — an
                ecology of beauty that conserves water, supports biodiversity,
                and grows more captivating with every season.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="space-y-8 border-l border-[#B87333]/20 pl-8"
            >
              {[
                { value: "150+", label: "Landscapes Transformed" },
                { value: "60%", label: "Average Water Reduction" },
                { value: "Zero", label: "Synthetic Materials Used" },
              ].map((stat, i) => (
                <div key={i}>
                  <span className="font-heading text-3xl lg:text-4xl font-bold text-[#B87333]">
                    {stat.value}
                  </span>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#6B7F6F] font-body mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
