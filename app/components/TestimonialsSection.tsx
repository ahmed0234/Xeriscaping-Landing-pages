"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "motion/react";
import { Star, Quote, ChevronLeft, ChevronRight, User } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "Scottsdale, AZ",
    text: "The transformation is incredible. We replaced our high-maintenance lawn with a stunning desert landscape. Not only is our water bill a fraction of what it was, but the yard looks like a luxury resort.",
  },
  {
    id: 2,
    name: "Michael & Elena Torres",
    location: "Paradise Valley, AZ",
    text: "I was skeptical about removing our grass, but the design team created an architectural masterpiece. The modern hardscaping and native plants complement our home perfectly. Truly effortless beauty.",
  },
  {
    id: 3,
    name: "David Chen",
    location: "Carefree, AZ",
    text: "Professionalism at its peak. The smart irrigation system is flawless, and the sculptural cacti look stunning against the subtle outdoor lighting. It's an upgrade to our entire lifestyle.",
  },
  {
    id: 4,
    name: "James & Laura Bennett",
    location: "Sedona, AZ",
    text: "We wanted an outdoor space that required zero weekend chores. The gravel pathways, dry creek bed, and hardy perennials they installed gave us our weekends back, and the aesthetic is simply breathtaking.",
  },
  {
    id: 5,
    name: "Marcus Vance",
    location: "Mesa, AZ",
    text: "From the initial consultation to the final stone placement, the execution was flawless. They understood our vision for a minimalist desert sanctuary and delivered beyond our expectations. A truly premium service.",
  },
  {
    id: 6,
    name: "The Harrison Family",
    location: "Phoenix, AZ",
    text: "Our outdated, water-heavy backyard was a constant source of stress. The xeriscape conversion completely revitalized our property. We now host gatherings in an elegant, climate-adapted environment we're proud of.",
  },
];

function TiltCard({
  testimonial,
  isActive,
  isNext,
  isPrev,
  onClick,
}: {
  testimonial: (typeof testimonials)[0];
  isActive: boolean;
  isNext: boolean;
  isPrev: boolean;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateY: isActive ? rotateY : 0,
        rotateX: isActive ? rotateX : 0,
        transformStyle: "preserve-3d",
      }}
      className={`relative w-full h-full rounded-3xl border transition-colors duration-700 cursor-pointer ${
        isActive
          ? "bg-warm-white/95 border-sunset-gold/30 shadow-2xl shadow-sunset-gold/15 cursor-default"
          : "bg-warm-white/40 border-sand/30 shadow-xl shadow-black/5 hover:bg-warm-white/60"
      } backdrop-blur-xl p-8 lg:p-12`}
    >
      {isActive && (
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}

      <div
        style={{ transform: isActive ? "translateZ(40px)" : "translateZ(0px)" }}
        className="flex flex-col h-full pointer-events-none transition-transform duration-700"
      >
        <div className="mb-6 lg:mb-8">
          <Quote
            className={`w-12 h-12 transition-colors duration-700 ${
              isActive ? "text-sunset-gold/40" : "text-sand/60"
            }`}
            strokeWidth={1}
            fill="currentColor"
            fillOpacity={0.1}
          />
        </div>

        <div className="flex items-center gap-1.5 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 transition-colors duration-700 ${
                isActive
                  ? "fill-sunset-gold text-sunset-gold"
                  : "fill-stone-gray/30 text-stone-gray/30"
              }`}
            />
          ))}
        </div>

        <p
          className={`text-base lg:text-lg font-body leading-relaxed flex-grow mb-10 transition-colors duration-700 ${
            isActive ? "text-night-desert/90" : "text-stone-gray/80"
          }`}
        >
          "{testimonial.text}"
        </p>

        <div className="mt-auto pt-6 border-t border-sand/30 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-700 overflow-hidden ${
              isActive ? "bg-sand-light/50 border-sunset-gold/20 shadow-sm" : "bg-sand/20 border-sand/40"
            }`}>
              <User className={`w-5 h-5 transition-colors duration-700 ${
                isActive ? "text-sunset-gold/70" : "text-stone-gray/50"
              }`} />
            </div>
            <div>
              <h4
                className={`font-heading text-lg lg:text-xl font-bold transition-colors duration-700 ${
                  isActive ? "text-night-desert" : "text-stone-gray"
                }`}
              >
                {testimonial.name}
              </h4>
              <p className="text-[11px] uppercase tracking-widest text-stone-gray/70 font-body mt-1.5">
                {testimonial.location}
              </p>
            </div>
          </div>
          {isActive && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-12 h-px bg-sunset-gold/50 origin-right hidden sm:block"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const total = testimonials.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((current) => (current - 1 + total) % total);
  }, [total]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isHovering, nextSlide]);

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = offset.x;
    if (swipe < -50 || velocity.x < -500) {
      nextSlide();
    } else if (swipe > 50 || velocity.x > 500) {
      prevSlide();
    }
  };

  const getRelativeIndex = (index: number) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #FAF7F2, #F3EBE0)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-sunset-gold/15 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -30, 0], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-terracotta/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.3em] font-body font-medium text-sunset-gold border border-sunset-gold/20 bg-sunset-gold/5 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sunset-gold" />
            Client Experiences
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
            Trusted by <br className="md:hidden" />
            <span className="text-gradient-gold">Homeowners</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.8, 0.25, 1],
            }}
            className="text-base lg:text-lg text-stone-gray font-body max-w-2xl mx-auto leading-relaxed"
          >
            Real feedback from homeowners who chose to elevate their outdoor
            spaces with sustainable, premium desert landscapes.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative h-[450px] sm:h-[400px] lg:h-[480px] w-full flex justify-center items-center perspective-[1200px]"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 z-40 touch-pan-y"
          />

          <AnimatePresence initial={false}>
            {testimonials.map((t, i) => {
              const relIndex = getRelativeIndex(i);
              const isActive = relIndex === 0;
              const isNext = relIndex === 1;
              const isPrev = relIndex === -1;
              const isVisible = Math.abs(relIndex) <= 2;

              if (!isVisible) return null;

              let xOffset = 0;
              let scale = 1;
              let opacity = 1;
              let zIndex = 30;
              let blur = "0px";

              if (relIndex === 0) {
                xOffset = 0;
                scale = 1;
                opacity = 1;
                zIndex = 30;
                blur = "0px";
              } else if (relIndex === -1) {
                xOffset = -105;
                scale = 0.85;
                opacity = 0.4;
                zIndex = 20;
                blur = "4px";
              } else if (relIndex === 1) {
                xOffset = 105;
                scale = 0.85;
                opacity = 0.4;
                zIndex = 20;
                blur = "4px";
              } else if (relIndex <= -2) {
                xOffset = -180;
                scale = 0.7;
                opacity = 0;
                zIndex = 10;
                blur = "8px";
              } else if (relIndex >= 2) {
                xOffset = 180;
                scale = 0.7;
                opacity = 0;
                zIndex = 10;
                blur = "8px";
              }

              return (
                <motion.div
                  key={t.id}
                  initial={false}
                  animate={{
                    x: `${xOffset}%`,
                    scale,
                    opacity,
                    zIndex,
                    filter: `blur(${blur})`,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.32, 0.72, 0, 1], 
                  }}
                  className="absolute w-full max-w-sm lg:max-w-xl h-full"
                  style={{ pointerEvents: isActive ? "auto" : "none" }}
                >
                  <TiltCard
                    testimonial={t}
                    isActive={isActive}
                    isNext={isNext}
                    isPrev={isPrev}
                    onClick={() => {
                      if (!isActive) goToSlide(i);
                    }}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-8 mt-12 lg:mt-16 relative z-50"
        >
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-sand flex items-center justify-center text-night-desert hover:bg-sand hover:text-white transition-all duration-300"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className="group p-2"
                aria-label={`Go to slide ${i + 1}`}
              >
                <div
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeIndex === i
                      ? "w-8 bg-sunset-gold"
                      : "w-2 bg-sand hover:bg-sunset-gold/50"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-sand flex items-center justify-center text-night-desert hover:bg-sand hover:text-white transition-all duration-300"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
