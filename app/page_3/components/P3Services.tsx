"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Terrain\nSculpting",
    description:
      "We reshape raw land into flowing, intentional topography — creating landscapes that manage water, define space, and reveal the desert's inherent beauty.",
    tags: ["Grading", "Contouring", "Drainage"],
  },
  {
    num: "02",
    title: "Native\nComposition",
    description:
      "Each planting plan is composed like a work of art. Native and adapted species selected for sculptural form, seasonal rhythm, and ecological intelligence.",
    tags: ["Species Selection", "Bloom Sequencing", "Arid Palette"],
  },
  {
    num: "03",
    title: "Precision\nIrrigation",
    description:
      "Hydrozone-optimized drip systems deliver moisture with surgical accuracy. Smart controllers adapt to weather patterns in real time.",
    tags: ["Drip Systems", "Smart Controls", "Weather Sync"],
  },
  {
    num: "04",
    title: "Architectural\nHardscape",
    description:
      "Stone, aggregate, timber, steel — honest materials that anchor the landscape. From pathways carved into hillsides to walls that double as sculpture.",
    tags: ["Stone Work", "Feature Walls", "Pathways"],
  },
];

export default function P3Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="services"
      className="relative bg-[#0F1A14] py-40 lg:py-56 overflow-hidden"
    >
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-24 lg:mb-32"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] font-body text-[#B87333] block mb-6">
            03 — Atelier
          </span>
          <h2 className="font-heading text-5xl lg:text-7xl font-bold uppercase text-[#F0EBE3] tracking-tight leading-[0.95]">
            What we{" "}
            <span
              style={{ WebkitTextStroke: "1.5px #F0EBE3", color: "transparent" }}
            >
              craft
            </span>
          </h2>
        </motion.div>

        <div className="space-y-px">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.12,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              className="group relative grid lg:grid-cols-12 gap-8 lg:gap-0 bg-[#141F18] hover:bg-[#1A2B21] transition-colors duration-700 cursor-pointer"
            >
              <div className="lg:col-span-1 p-8 lg:p-12 flex items-start">
                <span className="text-[#B87333]/30 text-sm font-body tracking-wider group-hover:text-[#B87333]/60 transition-colors duration-500">
                  {service.num}
                </span>
              </div>

              <div className="lg:col-span-3 px-8 lg:px-0 lg:py-12 flex items-center">
                <h3 className="font-heading text-3xl lg:text-5xl font-bold uppercase text-[#F0EBE3] tracking-tight leading-[1.05] whitespace-pre-line group-hover:text-[#B87333] transition-colors duration-500">
                  {service.title}
                </h3>
              </div>

              <div className="lg:col-span-5 px-8 lg:px-12 lg:py-12 flex items-center">
                <p className="text-[#8A9B8A] text-base font-body font-light leading-[1.9]">
                  {service.description}
                </p>
              </div>

              <div className="lg:col-span-3 px-8 pb-8 lg:p-12 flex items-center justify-between gap-6">
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] font-body text-[#6B7F6F] border border-[#2A3D30] group-hover:border-[#B87333]/20 group-hover:text-[#B87333]/70 transition-colors duration-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#6B7F6F]/30 group-hover:text-[#B87333] transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 flex-shrink-0" />
              </div>

              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#B87333]/0 via-[#B87333]/0 to-[#B87333]/0 group-hover:from-transparent group-hover:via-[#B87333]/30 group-hover:to-transparent transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
