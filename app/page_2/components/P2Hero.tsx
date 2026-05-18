"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function P2Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92]);

  const words = ["REDEFINE", "YOUR", "TERRAIN"];

  return (
    <div ref={containerRef} className="relative h-[120vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#1A1814] flex items-center justify-center">
        <div
          className="absolute inset-0 z-10 opacity-[0.04] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#C4956A]/5 rounded-full blur-[200px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#7A8F7A]/5 rounded-full blur-[180px] pointer-events-none" />

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 1.5, ease: [0.25, 0.8, 0.25, 1] }}
          className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3D3830] to-transparent origin-center"
        />

        <motion.div
          style={{ y: yText, opacity: opacityText, scale }}
          className="relative z-20 text-center px-8"
        >
         
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="w-16 h-px bg-[#C4956A]/40" />
              <div className="w-16 h-px bg-[#C4956A]/40" />
            </div>
          </motion.div> */}

          <div className="flex flex-col items-center gap-2 lg:gap-0">
            {words.map((word, i) => (
              <div key={word} className="overflow-hidden">
                <motion.h1
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 1.2,
                    delay: 0.5 + i * 0.15,
                    ease: [0.25, 0.8, 0.25, 1],
                  }}
                  className="font-heading font-light text-[#F5F0E8] text-[14vw] lg:text-[12vw] leading-[0.85] tracking-tight"
                  style={
                    i === 1
                      ? {
                          WebkitTextStroke: "1.5px #F5F0E8",
                          color: "transparent",
                        }
                      : {}
                  }
                >
                  {word}
                </motion.h1>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="mt-16 flex flex-col items-center"
          >
            <p className="text-[#A39B90] text-base lg:text-lg font-body font-light tracking-wide max-w-xl mx-auto leading-relaxed">
              Luxury landscape architecture for the modern desert. We sculpt
              terrain into art—water-wise, timeless, alive.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="mt-14 flex flex-col items-center gap-3"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] font-body text-[#A39B90]/60">
                Explore
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowDown className="w-4 h-4 text-[#C4956A]/70" strokeWidth={1} />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute top-8 left-8 w-16 h-16 border-l border-t border-[#3D3830]/60 pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-[#3D3830]/60 pointer-events-none"
        />
      </div>
    </div>
  );
}
