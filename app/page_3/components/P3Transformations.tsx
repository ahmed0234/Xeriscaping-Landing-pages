"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Image as ImageIcon } from "lucide-react";

const items = [
  {
    title: "Camelback Estate",
    location: "Paradise Valley",
    before: "Dying turf lawn, 4,200 sq ft of wasted water",
    after: "Sculptural agave garden with stone pathways",
    waterSaved: "62%",
  },
  {
    title: "Arcadia Mid-Century",
    location: "Scottsdale",
    before: "Bare gravel lot with no design intent",
    after: "Minimalist courtyard with specimen cacti array",
    waterSaved: "55%",
  },
  {
    title: "Desert Ridge Residence",
    location: "Mesa",
    before: "Neglected backyard with invasive weeds",
    after: "Terraced native garden with dry creek bed",
    waterSaved: "71%",
  },
];

export default function P3Transformations() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      id="transformations"
      className="relative bg-[#1A2B21] py-40 lg:py-56 overflow-hidden"
    >
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-24 lg:mb-32"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] font-body text-[#B87333] block mb-6">
            04 — Proof
          </span>
          <h2 className="font-heading text-5xl lg:text-7xl font-bold uppercase text-[#F0EBE3] tracking-tight leading-[0.95]">
            Before{" "}
            <span className="text-[#B87333]">&amp;</span>{" "}
            <span style={{ WebkitTextStroke: "1.5px #F0EBE3", color: "transparent" }}>
              After
            </span>
          </h2>
        </motion.div>

        {/* Transformations — Horizontal Full-Width Split Cards */}
        <div className="space-y-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group grid lg:grid-cols-2 border border-[#2A3D30] hover:border-[#B87333]/20 transition-colors duration-700 overflow-hidden"
            >
              {/* Before Side */}
              <div className="relative p-10 lg:p-14 bg-[#141F18] flex flex-col justify-between min-h-[300px]">
                {/* Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div
                    animate={{ opacity: hovered === i ? 0.15 : 0.06 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <ImageIcon className="w-10 h-10 text-[#6B7F6F]" strokeWidth={0.8} />
                    <span className="text-[9px] uppercase tracking-[0.3em] font-body text-[#6B7F6F]">
                      Before Image
                    </span>
                  </motion.div>
                </div>

                <div className="relative z-10">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-body text-[#6B7F6F] block mb-3">
                    Before
                  </span>
                  <p className="text-[#8A9B8A] text-sm font-body font-light leading-relaxed max-w-sm">
                    {item.before}
                  </p>
                </div>

                {/* Diagonal Line Separator */}
                <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#2A3D30] to-transparent hidden lg:block" />
              </div>

              {/* After Side */}
              <div className="relative p-10 lg:p-14 bg-[#0F1A14] flex flex-col justify-between min-h-[300px]">
                {/* Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div
                    animate={{ opacity: hovered === i ? 0.2 : 0.06 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <ImageIcon className="w-10 h-10 text-[#B87333]/40" strokeWidth={0.8} />
                    <span className="text-[9px] uppercase tracking-[0.3em] font-body text-[#B87333]/40">
                      After Image
                    </span>
                  </motion.div>
                </div>

                <div className="relative z-10">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-body text-[#B87333] block mb-3">
                    After
                  </span>
                  <p className="text-[#F0EBE3]/70 text-sm font-body font-light leading-relaxed max-w-sm">
                    {item.after}
                  </p>
                </div>

                {/* Project Meta — bottom right */}
                <div className="relative z-10 flex items-end justify-between mt-auto pt-10">
                  <div>
                    <h3 className="font-heading text-2xl lg:text-3xl font-bold uppercase text-[#F0EBE3] tracking-tight group-hover:text-[#B87333] transition-colors duration-500">
                      {item.title}
                    </h3>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-body text-[#6B7F6F] mt-1">
                      {item.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-heading text-3xl font-bold text-[#B87333]">
                      {item.waterSaved}
                    </span>
                    <p className="text-[9px] uppercase tracking-[0.15em] font-body text-[#6B7F6F] mt-1">
                      Water Saved
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
