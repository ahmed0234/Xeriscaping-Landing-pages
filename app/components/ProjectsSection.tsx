"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Image as ImageIcon } from "lucide-react";

const projects = [
  {
    title: "Paradise Valley Estate",
    description:
      "A complete turf-to-desert conversion featuring architectural agaves and custom stone pathways.",
    tags: ["Xeriscape Conversion", "Hardscaping"],
  },
  {
    title: "Scottsdale Modern Courtyard",
    description:
      "An elegant minimal outdoor space blending decomposed granite with smart drip irrigation.",
    tags: ["Smart Irrigation", "Native Design"],
  },
  {
    title: "Camelback Retreat",
    description:
      "Terraced native gardens seamlessly integrated with the property's natural rock formations.",
    tags: ["Native Planting", "Custom Design"],
  },
  {
    title: "Desert Ridge Sanctuary",
    description:
      "Replaced a water-heavy backyard with a drought-resilient, low-maintenance desert oasis.",
    tags: ["Lawn Replacement", "Low Maintenance"],
  },
  {
    title: "Arcadia Desert Modern",
    description:
      "Sculptural cacti and dry creek beds designed to create a striking, dynamic entry experience.",
    tags: ["Feature Design", "Xeriscaping"],
  },
  {
    title: "Carefree Minimalist",
    description:
      "A high-end minimal garden focusing on negative space, crisp lines, and dramatic focal points.",
    tags: ["Minimalist", "Hardscaping"],
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 lg:py-32 bg-warm-white overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.3em] font-body font-medium text-sunset-gold border border-sunset-gold/20 bg-sunset-gold/5 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sunset-gold" />
              Our Portfolio
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-night-desert tracking-tight mb-5"
            >
              Real Projects. <br />
              <span className="text-gradient-gold">Real Impact.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              className="text-base lg:text-lg text-stone-gray font-body leading-relaxed"
            >
              A curated collection of xeriscaping transformations built for
              beauty, efficiency, and sustainability. Real outdoor spaces
              redesigned for modern desert living.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.8, 0.25, 1],
            }}
            className="hidden md:block pb-2"
          >
            <a
              href="#all-projects"
              className="group inline-flex items-center gap-2 text-sm font-body font-semibold uppercase tracking-wider text-night-desert hover:text-sunset-gold transition-colors duration-300"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.1,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              <a
                href="#project"
                className="group block relative rounded-2xl overflow-hidden bg-white shadow-sm border border-sand/30 hover:shadow-xl hover:shadow-sunset-gold/10 transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* Image Placeholder */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand-light/50 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-sand-light/80 to-warm-white mix-blend-overlay" />
                  
                  {/* Subtle placeholder icon/text */}
                  <div className="relative z-10 flex flex-col items-center gap-3 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                    <ImageIcon className="w-8 h-8 text-stone-gray" strokeWidth={1} />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-body font-medium text-stone-gray">
                      Project Image
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-night-desert/0 group-hover:bg-night-desert/5 transition-colors duration-500 z-20" />
                </div>

                <div className="p-6 lg:p-8">
                  <h3 className="font-heading text-xl lg:text-2xl font-bold text-night-desert mb-2 group-hover:text-sunset-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-stone-gray font-body leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-body font-medium bg-sand-light/40 text-stone-gray border border-sand/50 group-hover:border-sunset-gold/20 group-hover:bg-sunset-gold/5 group-hover:text-night-desert/80 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0.25, 0.8, 0.25, 1],
          }}
          className="mt-12 text-center md:hidden"
        >
          <a
            href="#all-projects"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-body font-semibold tracking-wide text-night-desert border border-sand hover:bg-sand-light transition-colors duration-300"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
