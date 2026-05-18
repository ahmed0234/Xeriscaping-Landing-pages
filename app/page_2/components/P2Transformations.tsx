"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Image as ImageIcon, ArrowRight } from "lucide-react";

const transformations = [
  {
    id: 1,
    title: "The Camelback Estate",
    location: "Paradise Valley, AZ",
    beforeLabel: "High-water turf lawn with dying patches",
    afterLabel: "Sculptural desert garden with native agaves",
    waterSaved: "62%",
    timeline: "6 Weeks",
    sqft: "3,800",
  },
  {
    id: 2,
    title: "Arcadia Mid-Century",
    location: "Scottsdale, AZ",
    beforeLabel: "Overgrown grass yard with no structure",
    afterLabel: "Minimalist gravel courtyard with specimen cacti",
    waterSaved: "55%",
    timeline: "4 Weeks",
    sqft: "2,200",
  },
  {
    id: 3,
    title: "Desert Ridge Sanctuary",
    location: "Mesa, AZ",
    beforeLabel: "Bare dirt lot with sparse weeds",
    afterLabel: "Terraced native garden with dry creek bed",
    waterSaved: "71%",
    timeline: "8 Weeks",
    sqft: "5,100",
  },
];

function TransformationCard({
  project,
  index,
}: {
  project: (typeof transformations)[0];
  index: number;
}) {
  const [showAfter, setShowAfter] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1,
        delay: index * 0.2,
        ease: [0.25, 0.8, 0.25, 1],
      }}
      className={`grid lg:grid-cols-2 gap-0 border border-[#3D3830]/40 overflow-hidden ${
        index % 2 === 1 ? "lg:direction-rtl" : ""
      }`}
    >
      <div
        className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px] bg-[#242019] cursor-pointer overflow-hidden group"
        onClick={() => setShowAfter(!showAfter)}
      >
        <AnimatePresence mode="wait">
          {!showAfter ? (
            <motion.div
              key="before"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-4"
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="w-16 h-16 rounded-full border border-[#3D3830] flex items-center justify-center mb-2">
                  <ImageIcon
                    className="w-6 h-6 text-[#3D3830]"
                    strokeWidth={1}
                  />
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-body text-[#A39B90]/60">
                  Before
                </span>
                <p className="text-sm text-[#A39B90]/80 font-body font-light max-w-[240px]">
                  {project.beforeLabel}
                </p>
              </div>

              <motion.span
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-6 text-[10px] uppercase tracking-[0.2em] font-body text-[#C4956A]/60"
              >
                Click to reveal transformation
              </motion.span>
            </motion.div>
          ) : (
            <motion.div
              key="after"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#2E2A23]"
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="w-16 h-16 rounded-full border border-[#C4956A]/30 bg-[#C4956A]/5 flex items-center justify-center mb-2">
                  <ImageIcon
                    className="w-6 h-6 text-[#C4956A]/50"
                    strokeWidth={1}
                  />
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-body text-[#C4956A]">
                  After
                </span>
                <p className="text-sm text-[#F5F0E8]/70 font-body font-light max-w-[240px]">
                  {project.afterLabel}
                </p>
              </div>

              <motion.span
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-6 text-[10px] uppercase tracking-[0.2em] font-body text-[#C4956A]/60"
              >
                Click to see before
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute top-6 right-6 flex items-center gap-2 z-10">
          <div
            className={`w-2 h-2 rounded-full transition-colors duration-500 ${
              !showAfter ? "bg-[#A39B90]" : "bg-[#3D3830]"
            }`}
          />
          <div
            className={`w-2 h-2 rounded-full transition-colors duration-500 ${
              showAfter ? "bg-[#C4956A]" : "bg-[#3D3830]"
            }`}
          />
        </div>
      </div>

      <div
        className={`p-10 lg:p-16 bg-[#1A1814] flex flex-col justify-center ${
          index % 2 === 1 ? "lg:direction-ltr" : ""
        }`}
      >
        <span className="text-[11px] uppercase tracking-[0.4em] font-body text-[#C4956A]/60 mb-4 block">
          Transformation {String(project.id).padStart(2, "0")}
        </span>

        <h3 className="font-heading text-3xl lg:text-4xl font-light text-[#F5F0E8] leading-tight mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-[#A39B90]/70 font-body mb-10">
          {project.location}
        </p>

        <div className="grid grid-cols-3 gap-6 mb-10 border-t border-[#3D3830]/30 pt-8">
          <div>
            <span className="font-heading text-3xl font-light text-[#C4956A]">
              {project.waterSaved}
            </span>
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#A39B90]/50 font-body mt-1.5">
              Water Saved
            </p>
          </div>
          <div>
            <span className="font-heading text-3xl font-light text-[#C4956A]">
              {project.timeline}
            </span>
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#A39B90]/50 font-body mt-1.5">
              Timeline
            </p>
          </div>
          <div>
            <span className="font-heading text-3xl font-light text-[#C4956A]">
              {project.sqft}
            </span>
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#A39B90]/50 font-body mt-1.5">
              Sq. Ft.
            </p>
          </div>
        </div>

        <a
          href="#case-study"
          className="group inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.15em] font-body text-[#A39B90] hover:text-[#F5F0E8] transition-colors duration-300 w-fit"
        >
          View Full Case Study
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
}

export default function P2Transformations() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      id="transformations"
      className="relative bg-[#1A1814] py-32 lg:py-48 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C4956A]/3 rounded-full blur-[200px] pointer-events-none translate-x-1/3" />

      <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.8, 0.25, 1] }}
          className="mb-20 lg:mb-28"
        >
          <span className="text-[11px] uppercase tracking-[0.4em] font-body text-[#C4956A] block mb-6">
            Before &amp; After
          </span>
          <h2 className="font-heading text-5xl lg:text-7xl font-light text-[#F5F0E8] leading-[1.05] mb-6">
            Visible{" "}
            <em className="italic text-[#C4956A]/80">proof</em>
          </h2>
          <p className="text-[#A39B90] text-base lg:text-lg font-body font-light max-w-xl leading-relaxed">
            Every project tells a story of transformation. Click each frame to
            reveal the journey from neglected terrain to curated landscape.
          </p>
        </motion.div>

        <div className="space-y-1">
          {transformations.map((project, i) => (
            <TransformationCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
