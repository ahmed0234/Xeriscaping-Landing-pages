"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function P2CTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="contact"
      className="relative bg-[#242019] py-32 lg:py-48 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#C4956A]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="absolute top-12 left-12 w-20 h-20 border-l border-t border-[#3D3830]/40 pointer-events-none hidden lg:block" />
      <div className="absolute bottom-12 right-12 w-20 h-20 border-r border-b border-[#3D3830]/40 pointer-events-none hidden lg:block" />

      <div className="relative z-10 max-w-[900px] mx-auto px-8 lg:px-16 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-[11px] uppercase tracking-[0.5em] font-body text-[#C4956A] block mb-10"
        >
          Begin
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.25, 0.8, 0.25, 1] }}
          className="font-heading text-5xl md:text-6xl lg:text-8xl font-light text-[#F5F0E8] leading-[1.05] mb-8"
        >
          Let&apos;s shape
          <br />
          your <em className="italic text-[#C4956A]/80">terrain</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[#A39B90] text-base lg:text-lg font-body font-light max-w-lg mx-auto leading-relaxed mb-14"
        >
          Every transformation begins with a conversation. Schedule a
          complimentary site visit and discover what your landscape can become.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#schedule"
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#C4956A] text-[#1A1814] font-body font-semibold text-sm uppercase tracking-[0.15em] overflow-hidden hover:bg-[#D4A57A] transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
            <span className="relative z-10">Schedule Consultation</span>
            <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="mailto:hello@xeriscaping.com"
            className="text-[12px] uppercase tracking-[0.2em] font-body text-[#A39B90] hover:text-[#F5F0E8] transition-colors duration-300 underline underline-offset-4 decoration-[#3D3830] hover:decoration-[#C4956A]"
          >
            Or write us directly
          </a>
        </motion.div>
      </div>
    </section>
  );
}
