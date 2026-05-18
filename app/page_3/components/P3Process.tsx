"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const steps = [
  {
    num: "01",
    title: "Listen",
    subtitle: "Site Analysis & Vision",
    description:
      "We begin with your land. Soil tests, sun mapping, drainage patterns, and your aspirations merge into a comprehensive site profile.",
  },
  {
    num: "02",
    title: "Compose",
    subtitle: "Design Development",
    description:
      "Every element is composed with purpose — material palettes, planting arrangements, and spatial flow are crafted into a detailed master plan.",
  },
  {
    num: "03",
    title: "Build",
    subtitle: "Precision Installation",
    description:
      "Our crews execute each phase with architectural precision. Hardscaping, irrigation infrastructure, and soil preparation form the foundation.",
  },
  {
    num: "04",
    title: "Plant",
    subtitle: "Living Systems",
    description:
      "Native species are placed according to hydrozone logic and aesthetic vision. The landscape comes alive as a self-sustaining ecology.",
  },
  {
    num: "05",
    title: "Evolve",
    subtitle: "Ongoing Stewardship",
    description:
      "We monitor, adjust, and refine. Your landscape matures over seasons — each year more beautiful, more resilient, more yours.",
  },
];

export default function P3Process() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="process"
      className="relative bg-[#1A2B21] py-40 lg:py-56 overflow-hidden"
    >
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-24 lg:mb-32"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] font-body text-[#B87333] block mb-6">
            02 — Process
          </span>
          <h2 className="font-heading text-5xl lg:text-7xl font-bold uppercase text-[#F0EBE3] tracking-tight leading-[0.95]">
            How we{" "}
            <span className="text-[#B87333]">work</span>
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 2, delay: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
            className="absolute left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-[#B87333]/40 via-[#B87333]/20 to-transparent origin-top hidden lg:block"
          />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + i * 0.15,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
                className="group grid lg:grid-cols-12 gap-8 py-12 lg:py-16 border-b border-[#2A3D30] last:border-b-0"
              >
                <div className="lg:col-span-1 flex items-start gap-4 lg:flex-col lg:items-center">
                  <div className="relative w-[20px] h-[20px] rounded-full border border-[#B87333]/40 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#B87333]/60 group-hover:bg-[#B87333] transition-colors duration-500" />
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <span className="text-[11px] font-body text-[#6B7F6F] tracking-wider block mb-2">
                    {step.num}
                  </span>
                  <h3 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-[#F0EBE3] group-hover:text-[#B87333] transition-colors duration-500 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#6B7F6F] font-body mt-2 tracking-wide">
                    {step.subtitle}
                  </p>
                </div>

                <div className="lg:col-span-6 lg:col-start-6 flex items-center">
                  <p className="text-[#8A9B8A] text-base lg:text-lg font-body font-light leading-[1.9]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
