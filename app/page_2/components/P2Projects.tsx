"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "The Camelback Residence",
    year: "2024",
    category: "Full Xeriscape",
    description: "A complete lawn-to-desert conversion for a 4,200 sq ft estate, featuring sculptural agaves and custom dry creek beds.",
  },
  {
    id: "02",
    title: "Arcadia Modern Courtyard",
    year: "2024",
    category: "Courtyard Design",
    description: "Minimalist gravel courtyard with precision-placed specimen cacti and architectural stone seating walls.",
  },
  {
    id: "03",
    title: "Desert Ridge Sanctuary",
    year: "2023",
    category: "Native Restoration",
    description: "Native habitat restoration across 2 acres, integrating a smart drip system that reduced water use by 70%.",
  },
  {
    id: "04",
    title: "Paradise Valley Estate",
    year: "2023",
    category: "Hardscape + Planting",
    description: "Premium flagstone terracing with integrated LED lighting and a curated palette of 40+ native species.",
  },
];

export default function P2Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="projects"
      className="relative bg-[#242019] py-32 lg:py-48 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 lg:mb-28"
        >
          <div>
            <span className="text-[11px] uppercase tracking-[0.4em] font-body text-[#C4956A] block mb-6">
              Selected Work
            </span>
            <h2 className="font-heading text-5xl lg:text-7xl font-light text-[#F5F0E8] leading-[1.05]">
              Portfolio
            </h2>
          </div>
          <a
            href="#all-work"
            className="group inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] font-body text-[#A39B90] hover:text-[#F5F0E8] transition-colors pb-2"
          >
            View Archive
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <div>
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href="#project-detail"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * i }}
              className="group grid grid-cols-12 gap-6 items-center py-10 lg:py-14 border-t border-[#3D3830]/40 first:border-t-0 cursor-pointer"
            >
              <div className="col-span-1 hidden lg:block">
                <span className="text-[#C4956A]/30 text-sm font-body">{project.id}</span>
              </div>

              <div className="col-span-3 lg:col-span-2">
                <div className="aspect-[4/3] bg-[#2E2A23] rounded-sm flex items-center justify-center border border-[#3D3830]/30 group-hover:border-[#C4956A]/20 transition-colors duration-500 overflow-hidden">
                  <ImageIcon className="w-5 h-5 text-[#3D3830]" strokeWidth={1} />
                </div>
              </div>

              <div className="col-span-5 lg:col-span-4">
                <h3 className="font-heading text-2xl lg:text-3xl font-light text-[#A39B90] group-hover:text-[#F5F0E8] transition-colors duration-500 leading-tight">
                  {project.title}
                </h3>
              </div>

              <div className="col-span-12 lg:col-span-3 hidden lg:block">
                <p className="text-sm text-[#A39B90]/60 font-body font-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Meta */}
              <div className="col-span-4 lg:col-span-2 text-right">
                <span className="text-[10px] uppercase tracking-[0.15em] font-body text-[#C4956A]/50 block mb-1">
                  {project.category}
                </span>
                <span className="text-xs text-[#A39B90]/40 font-body">
                  {project.year}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
