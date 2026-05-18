"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Leaf, Droplets, SunMedium } from "lucide-react";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const marqueeText =
    "MODERN XERISCAPING DESIGN • WATER EFFICIENT LANDSCAPES • LUXURY DESERT OUTDOOR LIVING • SUSTAINABLE TRANSFORMATION • ";

  return (
    <section
      ref={sectionRef}
      className="relative py-32 lg:py-48 overflow-hidden bg-warm-white flex flex-col items-center justify-center"
    >
    
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      <motion.div
        animate={{ y: [0, -40, 0], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-[500px] h-[500px] bg-sunset-gold/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 50, 0], x: [0, -30, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-sage/10 rounded-full blur-[150px] pointer-events-none"
      />

    
      <div className="absolute top-1/4 w-full flex overflow-hidden opacity-30 select-none pointer-events-none mix-blend-multiply">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40, 
          }}
          className="flex whitespace-nowrap"
        >
          <span
            className="text-[120px] lg:text-[180px] font-heading font-black tracking-widest px-4 uppercase"
            style={{
              WebkitTextStroke: "2px rgba(122, 143, 122, 0.4)", // Sage outline
              color: "transparent",
            }}
          >
            {marqueeText}
            {marqueeText}
          </span>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, ease: [0.25, 0.8, 0.25, 1] }}
          className="text-center max-w-5xl mx-auto mb-16 lg:mb-20"
        >
          <h2 className="font-heading text-3xl md:text-5xl lg:text-[4rem] font-bold leading-[1.3] text-night-desert tracking-tight uppercase">
            We Design{" "}
            <span className="inline-flex items-center justify-center mx-2 md:mx-4 w-16 h-10 md:w-24 md:h-14 lg:w-32 lg:h-16 rounded-full bg-sage/15 align-middle border border-sage/20 shadow-inner overflow-hidden">
              <Leaf className="w-5 h-5 md:w-8 md:h-8 text-sage/80" strokeWidth={1.5} />
            </span>{" "}
            Outdoor Spaces
            <br className="hidden md:block" />
            <span className="hidden md:inline">That </span>
            Save Water{" "}
            <span className="inline-flex items-center justify-center mx-2 md:mx-4 w-16 h-10 md:w-24 md:h-14 lg:w-32 lg:h-16 rounded-full bg-terracotta/10 align-middle border border-terracotta/20 shadow-inner overflow-hidden">
              <Droplets className="w-5 h-5 md:w-8 md:h-8 text-terracotta/80" strokeWidth={1.5} />
            </span>{" "}
            While Elevating
            <br className="hidden md:block" />
            Architectural{" "}
            <span className="inline-flex items-center justify-center mx-2 md:mx-4 w-16 h-10 md:w-24 md:h-14 lg:w-32 lg:h-16 rounded-full bg-sunset-gold/15 align-middle border border-sunset-gold/20 shadow-inner overflow-hidden">
              <SunMedium className="w-5 h-5 md:w-8 md:h-8 text-sunset-gold/80" strokeWidth={1.5} />
            </span>{" "}
            Beauty.
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
            className="text-base md:text-xl text-stone-gray font-body mt-8 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to transform your property into a stunning, low-maintenance
            desert sanctuary? Let’s create something extraordinary together.
          </motion.p>
        </motion.div>

 
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={
            isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }
          }
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 rounded-full bg-sage text-warm-white font-body font-semibold text-lg tracking-wide overflow-hidden shadow-lg shadow-sage/30 hover:shadow-2xl hover:shadow-sage/40 transition-all duration-500 hover:-translate-y-1"
          >
 
            <div className="absolute inset-0 bg-gradient-to-r from-sage-light/0 via-white/20 to-sage-light/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
            
            <span className="relative z-10">Get Free Landscape Design</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
