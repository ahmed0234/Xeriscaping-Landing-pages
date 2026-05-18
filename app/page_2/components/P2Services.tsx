"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Terrain Sculpting & Grading",
    description:
      "We reshape raw land into flowing, intentional topography. Using precise grading techniques and natural contouring, we create landscapes that manage water, define space, and reveal the desert's inherent beauty.",
    tags: ["Land Grading", "Contour Design", "Drainage Architecture"],
  },
  {
    id: "02",
    title: "Curated Plant Composition",
    description:
      "Each planting plan is composed like a work of art. We select native and climate-adapted species for their sculptural form, seasonal rhythm, and ecological intelligence — designing gardens that thrive with intention, not intervention.",
    tags: ["Native Species", "Bloom Sequencing", "Arid Palette"],
  },
  {
    id: "03",
    title: "Precision Irrigation Systems",
    description:
      "Water is precious. Our hydrozone-optimized drip systems deliver moisture with surgical accuracy. Smart controllers adapt in real time to weather patterns, ensuring every drop sustains — never wastes.",
    tags: ["Drip Design", "Smart Controllers", "Weather Sync"],
  },
  {
    id: "04",
    title: "Architectural Hardscaping",
    description:
      "Stone, aggregate, timber, steel — we work with honest materials to create structures that anchor the landscape. From pathways carved into hillsides to retaining walls that double as sculpture, every element is built to endure.",
    tags: ["Stone Pathways", "Feature Walls", "Outdoor Structures"],
  },
  {
    id: "05",
    title: "Night Lighting & Atmosphere",
    description:
      "When the sun sets, the landscape transforms. Our lighting design reveals texture, casts intentional shadow, and creates an after-dark atmosphere that extends the living space into the desert evening.",
    tags: ["Landscape Lighting", "Shadow Design", "Ambient Systems"],
  },
];

function AccordionItem({
  service,
  isOpen,
  onToggle,
  index,
}: {
  service: (typeof services)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.8, 0.25, 1] }}
      className="border-b border-[#3D3830]/50"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-8 lg:py-10 group text-left"
      >
        <div className="flex items-baseline gap-8">
          <span className="text-[#C4956A]/50 text-sm font-body tracking-wider">
            {service.id}
          </span>
          <h3
            className={`font-heading text-2xl lg:text-4xl font-light transition-colors duration-500 ${
              isOpen ? "text-[#F5F0E8]" : "text-[#A39B90] group-hover:text-[#F5F0E8]"
            }`}
          >
            {service.title}
          </h3>
        </div>
        <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[#3D3830] flex items-center justify-center transition-colors duration-300 group-hover:border-[#C4956A]/40">
          {isOpen ? (
            <Minus className="w-4 h-4 text-[#C4956A]" strokeWidth={1} />
          ) : (
            <Plus className="w-4 h-4 text-[#A39B90]" strokeWidth={1} />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 lg:pb-14 pl-0 lg:pl-[calc(theme(spacing.8)+2rem)] max-w-3xl">
              <p className="text-[#A39B90] text-base lg:text-lg font-body font-light leading-[1.8] mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 text-[10px] uppercase tracking-[0.15em] font-body text-[#C4956A]/70 border border-[#3D3830] bg-[#242019]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function P2Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [openId, setOpenId] = useState<string | null>("01");

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative bg-[#1A1814] py-32 lg:py-48 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.8, 0.25, 1] }}
          className="mb-20 lg:mb-28"
        >
          <span className="text-[11px] uppercase tracking-[0.4em] font-body text-[#C4956A] block mb-6">
            The Atelier
          </span>
          <h2 className="font-heading text-5xl lg:text-7xl font-light text-[#F5F0E8] leading-[1.05]">
            What we
            <br />
            <em className="italic text-[#C4956A]/80">craft</em>
          </h2>
        </motion.div>

        <div>
          {services.map((service, i) => (
            <AccordionItem
              key={service.id}
              service={service}
              index={i}
              isOpen={openId === service.id}
              onToggle={() => setOpenId(openId === service.id ? null : service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
