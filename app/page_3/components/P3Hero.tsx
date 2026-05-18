"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function P3Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yLine = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scaleContent = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const yBottom = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const lines = [
    { text: "WE DON'T", style: "filled" as const },
    { text: "LANDSCAPE", style: "outline" as const },
    { text: "WE", style: "filled" as const },
    { text: "ARCHITECT", style: "accent" as const },
    { text: "TERRAIN", style: "outline" as const },
  ];

  return (
    <div ref={containerRef} className="relative h-[130vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0F1A14] flex flex-col items-center justify-center">
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-40 w-[800px] h-[800px] bg-[#1A3A2A] rounded-full blur-[200px] pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-40 w-[700px] h-[700px] bg-[#B87333]/10 rounded-full blur-[180px] pointer-events-none"
        />

        <motion.div
          style={{ y: yLine }}
          className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 1.8, ease: [0.25, 0.8, 0.25, 1] }}
            className="h-px bg-gradient-to-r from-transparent via-[#B87333]/50 to-transparent origin-left"
          />
        </motion.div>

        <motion.div
          style={{ opacity: opacityContent, scale: scaleContent }}
          className="relative z-10 flex flex-col items-center"
        >
          {lines.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                initial={{ y: "120%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1.4,
                  delay: 0.3 + i * 0.12,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
                className={`font-heading uppercase leading-[0.85] tracking-tight text-center ${
                  line.style === "filled"
                    ? "text-[10vw] lg:text-[8vw] font-black text-[#F0EBE3]"
                    : line.style === "outline"
                    ? "text-[10vw] lg:text-[8vw] font-black"
                    : "text-[12vw] lg:text-[10vw] font-black text-[#B87333]"
                }`}
                style={
                  line.style === "outline"
                    ? {
                        WebkitTextStroke: "2px #F0EBE3",
                        color: "transparent",
                      }
                    : {}
                }
              >
                {line.text}
              </motion.h1>
            </div>
          ))}
        </motion.div>

        <motion.div
          style={{ y: yBottom }}
          className="absolute bottom-10 left-0 right-0 px-8 lg:px-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="max-w-[1800px] mx-auto flex items-end justify-between"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] font-body text-[#6B7F6F]">
                Landscape Architecture
              </p>
              <p className="text-[10px] uppercase tracking-[0.4em] font-body text-[#6B7F6F]/50 mt-1">
                Scottsdale — Phoenix — Sedona
              </p>
            </div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-[9px] uppercase tracking-[0.5em] font-body text-[#6B7F6F]/50">
                Scroll
              </span>
              <div className="w-px h-8 bg-gradient-to-b from-[#B87333]/60 to-transparent" />
            </motion.div>

            <div className="text-right">
              <p className="text-[10px] uppercase tracking-[0.4em] font-body text-[#6B7F6F]">
                Est. 2024
              </p>
              <p className="text-[10px] uppercase tracking-[0.4em] font-body text-[#6B7F6F]/50 mt-1">
                Luxury Xeriscaping
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="absolute inset-8 lg:inset-16 border border-[#6B7F6F]/10 pointer-events-none"
        />
      </div>
    </div>
  );
}
