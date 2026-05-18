"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function P3CTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="contact"
      className="relative bg-[#1A2B21] py-40 lg:py-56 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#B87333]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="absolute inset-12 lg:inset-20 border border-[#2A3D30]/30 pointer-events-none" />

      <div className="relative z-10 max-w-[1000px] mx-auto px-8 lg:px-16 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-[10px] uppercase tracking-[0.5em] font-body text-[#B87333] block mb-10"
        >
          07 — Begin
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.25, 0.8, 0.25, 1] }}
          className="font-heading text-5xl md:text-7xl lg:text-[6.5rem] font-black uppercase text-[#F0EBE3] tracking-tight leading-[0.9] mb-8"
        >
          LET&apos;S
          <br />
          <span style={{ WebkitTextStroke: "2px #F0EBE3", color: "transparent" }}>
            BUILD
          </span>
          <br />
          <span className="text-[#B87333]">TOGETHER</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-[#8A9B8A] text-base lg:text-lg font-body font-light max-w-md mx-auto leading-relaxed mb-14"
        >
          Every transformation begins with a conversation. Schedule a
          complimentary site consultation and discover what your terrain
          can become.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#schedule"
            className="group relative inline-flex items-center gap-4 px-12 py-5 bg-[#B87333] text-[#0F1A14] font-body font-bold text-sm uppercase tracking-[0.15em] overflow-hidden hover:bg-[#C8834D] transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
            <span className="relative z-10">Schedule Consultation</span>
            <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="mailto:hello@xeriscapes.com"
            className="text-[11px] uppercase tracking-[0.2em] font-body text-[#6B7F6F] hover:text-[#F0EBE3] transition-colors duration-300 underline underline-offset-4 decoration-[#2A3D30] hover:decoration-[#B87333]"
          >
            hello@xeriscapes.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
