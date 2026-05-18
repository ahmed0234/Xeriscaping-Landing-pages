"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Image as ImageIcon, ArrowUpRight } from "lucide-react";

const projects = [
  { title: "Saguaro Estate", category: "Full Xeriscape", year: "2024", span: "col-span-8 row-span-2" },
  { title: "Arcadia Courtyard", category: "Hardscape", year: "2024", span: "col-span-4 row-span-1" },
  { title: "Desert Ridge", category: "Native Restoration", year: "2023", span: "col-span-4 row-span-1" },
  { title: "Camelback Modern", category: "Landscape Design", year: "2023", span: "col-span-6 row-span-1" },
  { title: "Sedona Retreat", category: "Full Conversion", year: "2023", span: "col-span-6 row-span-1" },
];

export default function P3Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="projects"
      className="relative bg-[#0F1A14] py-40 lg:py-56 overflow-hidden"
    >
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex items-end justify-between mb-20 lg:mb-28"
        >
          <div>
            <span className="text-[10px] uppercase tracking-[0.5em] font-body text-[#B87333] block mb-6">
              05 — Work
            </span>
            <h2 className="font-heading text-5xl lg:text-7xl font-bold uppercase text-[#F0EBE3] tracking-tight leading-[0.95]">
              Selected{" "}
              <span className="text-[#B87333]">projects</span>
            </h2>
          </div>
          <a
            href="#archive"
            className="hidden lg:flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-body text-[#6B7F6F] hover:text-[#F0EBE3] transition-colors group"
          >
            Full Archive
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        <div className="grid grid-cols-12 gap-4 auto-rows-[280px]">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href="#project-detail"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.1 }}
              className={`group relative overflow-hidden border border-[#2A3D30] hover:border-[#B87333]/30 transition-colors duration-700 cursor-pointer ${project.span}`}
            >
              <div className="absolute inset-0 bg-[#141F18] flex items-center justify-center">
                <ImageIcon className="w-8 h-8 text-[#2A3D30] group-hover:text-[#6B7F6F]/30 transition-colors duration-500" strokeWidth={0.8} />
              </div>

              <div className="absolute inset-0 bg-[#0F1A14]/0 group-hover:bg-[#0F1A14]/60 transition-all duration-700" />

              <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-10">
                <span className="text-[9px] uppercase tracking-[0.2em] font-body text-[#B87333] mb-2">
                  {project.category} — {project.year}
                </span>
                <h3 className="font-heading text-2xl lg:text-3xl font-bold uppercase text-[#F0EBE3] tracking-tight">
                  {project.title}
                </h3>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                <ArrowUpRight className="w-5 h-5 text-[#B87333]" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
