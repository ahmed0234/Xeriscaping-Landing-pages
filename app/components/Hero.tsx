"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";

const DesertScene = dynamic(() => import("./DesertScene"), {
  ssr: false,
});

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen overflow-hidden"
      id="hero"
    >
      <motion.div
        className="absolute inset-0 w-full h-[120%]"
        style={{ y: bgY }}
      >
        <Image
          src="/hero-bg.png"
          alt="Luxury desert landscape with modern xeriscaping"
          fill
          className="object-cover object-center"
          loading="eager"
          sizes="100vw"
          quality={90}
        />
      </motion.div>

      <div className="absolute inset-0 hero-overlay" style={{ zIndex: 2 }} />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background: "linear-gradient(to right, rgba(28,26,23,0.35) 0%, rgba(28,26,23,0.15) 45%, transparent 70%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 3,
          clipPath: "inset(80px 0 0 0)",
        }}
      >
        <DesertScene />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          zIndex: 4,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        className="relative flex items-center min-h-screen px-6 lg:px-10"
        style={{ zIndex: 10, y: textY, opacity }}
      >
        <div className="max-w-[1400px] mx-auto w-full pt-24 pb-16 lg:pt-0 lg:pb-0">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col"
            >
              <motion.div variants={fadeUpVariant} className="mb-6 lg:mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.3em] font-body font-medium text-sunset-gold border border-sunset-gold/30 bg-sunset-gold/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sunset-gold animate-pulse" />
                  Est. 2024 — Desert Landscape Atelier
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUpVariant}
                className="font-heading text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.95] font-bold tracking-tight text-warm-white mb-6 lg:mb-8 hero-text-shadow"
              >
                Creating Art From
                <br />
                <span className="text-gradient-gold">
                  Dry Land
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="text-base lg:text-lg text-warm-white/80 font-body leading-relaxed max-w-lg mb-10 hero-text-shadow-sm"
              >
                We sculpt living landscapes that honor the desert&apos;s quiet
                elegance water wise design, sustainable materials, and
                architectural precision that transforms outdoor spaces into
                sanctuaries of modern beauty.
              </motion.p>

              <motion.div
                variants={fadeUpVariant}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="#quote"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-body font-semibold tracking-wide text-night-desert bg-gradient-to-r from-sunset-gold via-desert-tan to-sunset-gold bg-[length:200%_100%] hover:bg-right transition-all duration-700 shadow-2xl shadow-sunset-gold/30"
                >
                  Get a Free Landscape Design
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>

                {/* Secondary CTA */}
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-body font-semibold tracking-wide text-warm-white border border-warm-white/30 hover:border-warm-white/50 hover:bg-warm-white/10 backdrop-blur-md transition-all duration-500 hero-text-shadow-sm"
                >
                  <Play className="w-4 h-4 fill-warm-white/40 group-hover:fill-sunset-gold transition-colors duration-300" />
                  View Our Projects
                </motion.a>
              </motion.div>

              <motion.div
                variants={fadeUpVariant}
                className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10"
              >
                <div className="flex flex-col">
                  <span className="text-2xl lg:text-3xl font-heading font-bold text-sunset-gold">
                    150+
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-warm-white/50 font-body mt-0.5">
                    Projects Delivered
                  </span>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-2xl lg:text-3xl font-heading font-bold text-sunset-gold">
                    40%
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-warm-white/50 font-body mt-0.5">
                    Water Savings
                  </span>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-2xl lg:text-3xl font-heading font-bold text-sunset-gold">
                    5★
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-warm-white/50 font-body mt-0.5">
                    Client Rating
                  </span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={scaleInVariant}
              initial="hidden"
              animate="visible"
              className="hidden lg:flex items-center justify-center"
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="absolute -inset-8 rounded-[2rem] border border-sunset-gold/10 rotate-3" />
                <div className="absolute -inset-16 rounded-[2.5rem] border border-sunset-gold/5 -rotate-2" />

                <div className="relative w-[380px] h-[480px] rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
                  <Image
                    src="/hero-bg.png"
                    alt="Premium xeriscape garden design"
                    fill
                    className="object-cover object-center"
                    sizes="380px"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-night-desert/80 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-sage animate-pulse" />
                      <span className="text-[10px] uppercase tracking-[0.25em] text-sage font-body font-medium">
                        Featured Project
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-warm-white leading-snug mb-1">
                      Desert Oasis Residence
                    </h3>
                    <p className="text-xs text-warm-white/50 font-body">
                      Scottsdale, AZ — Modern Xeriscape
                    </p>
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -right-12 top-16 glass-dark rounded-xl px-4 py-3 shadow-xl border border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sage to-olive flex items-center justify-center">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#E8D8C3"
                        strokeWidth="2"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] text-warm-white/50 font-body uppercase tracking-wider">
                        Water Saved
                      </p>
                      <p className="text-sm font-heading font-semibold text-sunset-gold">
                        1.2M Gallons
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute -left-10 bottom-24 glass-dark rounded-xl px-4 py-3 shadow-xl border border-white/5"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🌿</span>
                    <div>
                      <p className="text-[10px] text-warm-white/50 font-body uppercase tracking-wider">
                        Eco Certified
                      </p>
                      <p className="text-xs font-body font-medium text-warm-white/80">
                        Sustainable Design
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 10 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-warm-white/40 font-body">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-warm-white/20 flex justify-center pt-1.5"
        >
          <motion.div className="w-1 h-2 rounded-full bg-sunset-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
