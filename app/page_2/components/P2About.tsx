"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function P2About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="philosophy"
      className="relative bg-[#1A1814] py-32 lg:py-48 overflow-hidden"
    >
      <div className="absolute top-0 left-16 w-px h-full bg-gradient-to-b from-transparent via-[#3D3830]/40 to-transparent hidden lg:block" />

      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: [0.25, 0.8, 0.25, 1] }}
            >
              <span className="text-[11px] uppercase tracking-[0.4em] font-body text-[#C4956A] block mb-10">
                Our Philosophy
              </span>

              <h2 className="font-heading text-5xl lg:text-7xl font-light text-[#F5F0E8] leading-[1.1] mb-10">
                Landscape
                <br />
                is{" "}
                <em className="font-heading italic text-[#C4956A]/80">
                  architecture
                </em>
                <br />
                without walls.
              </h2>

              <div className="w-20 h-px bg-[#3D3830]" />
            </motion.div>
          </div>

          <div className="lg:col-span-7 lg:pt-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
              className="space-y-8"
            >
              <p className="text-[#A39B90] text-lg lg:text-xl font-body font-light leading-[1.9]">
                We believe the desert is not a limitation — it is a canvas. Every
                grain of decomposed granite, every sculptural agave, every dry creek
                bed is an opportunity to create something that transcends traditional
                landscaping.
              </p>

              <p className="text-[#A39B90] text-lg lg:text-xl font-body font-light leading-[1.9]">
                Our practice sits at the intersection of ecological intelligence
                and architectural beauty. We don&apos;t plant — we compose. We
                don&apos;t install — we curate. The result is a living environment
                that conserves water, requires minimal intervention, and grows more
                compelling with each passing season.
              </p>

              <p className="text-[#A39B90]/70 text-base font-body font-light leading-[1.9]">
                Founded in Scottsdale by a team of landscape architects and
                environmental designers, we serve clients who refuse to choose
                between sustainability and beauty.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 flex gap-16 border-t border-[#3D3830]/40 pt-10"
            >
              {[
                { value: "120+", label: "Projects Completed" },
                { value: "60%", label: "Avg. Water Savings" },
                { value: "8yrs", label: "of Practice" },
              ].map((stat, i) => (
                <div key={i}>
                  <span className="font-heading text-4xl font-light text-[#C4956A]">
                    {stat.value}
                  </span>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#A39B90]/60 font-body mt-2">
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
