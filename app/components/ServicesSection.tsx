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
import {
  Leaf,
  Droplets,
  ArrowRight,
  SunMedium,
  Layers,
  Flower2,
  Route,
  Gauge,
  Wifi,
  RefreshCcw,
  Target,
  TreePine,
  Palette,
  Shovel,
  Sprout,
  Gem,
  Fence,
  Mountain,
  Landmark,
  Compass,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const accentStyles: Record<
  string,
  {
    iconBox: string;
    iconText: string;
    featureBg: string;
    featureIcon: string;
    divider: string;
    bottomLine: string;
    activeBorder: string;
    activeShadow: string;
  }
> = {
  sage: {
    iconBox: "bg-sage/10 border-sage/15 text-sage",
    iconText: "text-sage",
    featureBg: "bg-sage/10",
    featureIcon: "text-sage/80",
    divider: "bg-gradient-to-r from-sage/20 via-sage/10 to-transparent",
    bottomLine: "bg-gradient-to-r from-sage/50 via-sage/20 to-transparent",
    activeBorder: "border-sage/40",
    activeShadow: "shadow-sage/15",
  },
  terracotta: {
    iconBox: "bg-terracotta/10 border-terracotta/15 text-terracotta",
    iconText: "text-terracotta",
    featureBg: "bg-terracotta/10",
    featureIcon: "text-terracotta/80",
    divider: "bg-gradient-to-r from-terracotta/20 via-terracotta/10 to-transparent",
    bottomLine: "bg-gradient-to-r from-terracotta/50 via-terracotta/20 to-transparent",
    activeBorder: "border-terracotta/40",
    activeShadow: "shadow-terracotta/15",
  },
  olive: {
    iconBox: "bg-olive/10 border-olive/15 text-olive",
    iconText: "text-olive",
    featureBg: "bg-olive/10",
    featureIcon: "text-olive/80",
    divider: "bg-gradient-to-r from-olive/20 via-olive/10 to-transparent",
    bottomLine: "bg-gradient-to-r from-olive/50 via-olive/20 to-transparent",
    activeBorder: "border-olive/40",
    activeShadow: "shadow-olive/15",
  },
  gold: {
    iconBox: "bg-sunset-gold/10 border-sunset-gold/15 text-sunset-gold",
    iconText: "text-sunset-gold",
    featureBg: "bg-sunset-gold/10",
    featureIcon: "text-sunset-gold/80",
    divider: "bg-gradient-to-r from-sunset-gold/20 via-sunset-gold/10 to-transparent",
    bottomLine: "bg-gradient-to-r from-sunset-gold/50 via-sunset-gold/20 to-transparent",
    activeBorder: "border-sunset-gold/40",
    activeShadow: "shadow-sunset-gold/15",
  },
};

const services = [
  {
    id: 1,
    icon: Leaf,
    accentColor: "sage",
    title: "Turf Removal & Landscape Installation",
    description:
      "We replace high-water lawns with modern, drought-adapted landscapes — designed for beauty, engineered for sustainability. Transforming wasted outdoor space into a refined environment.",
    features: [
      { icon: SunMedium, text: "Complete turf removal & lawn conversion" },
      { icon: Layers, text: "Decorative gravel & mulch design systems" },
      { icon: Flower2, text: "Native & drought-tolerant plant installation" },
      { icon: Route, text: "Pathways, dry creek beds & hardscaping" },
    ],
  },
  {
    id: 2,
    icon: Droplets,
    accentColor: "terracotta",
    title: "Smart Irrigation & Drip Systems",
    description:
      "Intelligent irrigation built for precision — delivering water exactly where it's needed. Our systems maximize plant health while dramatically reducing consumption.",
    features: [
      { icon: Gauge, text: "Drip irrigation system design & installation" },
      { icon: Wifi, text: "Smart controller setup with weather sync" },
      { icon: RefreshCcw, text: "Irrigation system upgrades & retrofits" },
      { icon: Target, text: "Hydrozone-based water optimization" },
    ],
  },
  {
    id: 3,
    icon: TreePine,
    accentColor: "olive",
    title: "Native Plant Design & Installation",
    description:
      "Thoughtfully curated native plant palettes that thrive in arid climates. We blend biodiversity with beauty — creating living compositions that evolve with the seasons.",
    features: [
      { icon: Sprout, text: "Native plant selection & spatial design" },
      { icon: Palette, text: "Seasonal color planning & bloom sequencing" },
      { icon: Shovel, text: "Arid-climate soil preparation & amendment" },
      { icon: Flower2, text: "Low-maintenance perennial planting" },
    ],
  },
  {
    id: 4,
    icon: Gem,
    accentColor: "gold",
    title: "Outdoor Hardscaping & Feature Design",
    description:
      "Architectural elements that anchor your landscape with style. We blend natural stone, modern materials, and desert design principles to create sculpted outdoor spaces.",
    features: [
      { icon: Compass, text: "Stone pathways & stepping layouts" },
      { icon: Fence, text: "Retaining walls & structural elements" },
      { icon: Mountain, text: "Dry creek bed design & flow features" },
      { icon: Landmark, text: "Outdoor focal features & accents" },
    ],
  },
];

function FloatingParticle({
  size,
  color,
  top,
  left,
  delay,
  duration,
}: {
  size: number;
  color: string;
  top: string;
  left: string;
  delay: number;
  duration: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${color}`}
      style={{
        width: size,
        height: size,
        top,
        left,
        filter: "blur(1px)",
        opacity: 0.6,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        rotate: [0, 90, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

function ServiceCard({
  service,
  isActive,
  onClick,
}: {
  service: (typeof services)[0];
  isActive: boolean;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const a = accentStyles[service.accentColor] || accentStyles.sage;
  const Icon = service.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
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
      className={`relative w-full h-full flex flex-col rounded-[2rem] border transition-all duration-700 overflow-hidden cursor-pointer ${
        isActive
          ? `bg-warm-white/95 ${a.activeBorder} shadow-2xl ${a.activeShadow} cursor-default`
          : "bg-warm-white/40 border-sand/30 shadow-lg shadow-black/5 hover:bg-warm-white/60"
      } backdrop-blur-xl p-8 lg:p-10`}
    >
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}

      {/* 3D Content Wrapper */}
      <div
        style={{ transform: isActive ? "translateZ(30px)" : "translateZ(0px)" }}
        className="flex flex-col h-full pointer-events-none transition-transform duration-700"
      >
        {/* Header: Icon + Title */}
        <div className="mb-6">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 mb-5 ${
              isActive ? a.iconBox : "bg-sand/10 border-sand/20 text-stone-gray"
            }`}
          >
            <Icon className="w-6 h-6" strokeWidth={1.5} />
          </div>
          <h3
            className={`font-heading text-2xl lg:text-3xl font-bold leading-tight transition-colors duration-700 ${
              isActive ? "text-night-desert" : "text-stone-gray"
            }`}
          >
            {service.title}
          </h3>
        </div>

        <p
          className={`text-sm lg:text-[15px] font-body leading-relaxed mb-8 transition-colors duration-700 ${
            isActive ? "text-stone-gray" : "text-stone-gray/70"
          }`}
        >
          {service.description}
        </p>

        <div
          className={`h-px mb-8 w-full transition-colors duration-700 ${
            isActive ? a.divider : "bg-sand/30"
          }`}
        />

        <ul className="space-y-4 mt-auto">
          {service.features.map((feature, idx) => {
            const FeatureIcon = feature.icon;
            return (
              <li key={idx} className="flex items-start gap-3">
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center mt-0.5 transition-colors duration-700 ${
                    isActive ? a.featureBg : "bg-sand/20"
                  }`}
                >
                  <FeatureIcon
                    className={`w-3.5 h-3.5 transition-colors duration-700 ${
                      isActive ? a.featureIcon : "text-stone-gray/60"
                    }`}
                    strokeWidth={2}
                  />
                </div>
                <span
                  className={`text-sm font-body font-medium transition-colors duration-700 ${
                    isActive ? "text-night-desert/90" : "text-stone-gray/70"
                  }`}
                >
                  {feature.text}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className={`absolute bottom-0 left-0 h-1.5 w-full transition-all duration-700 ease-out ${
          isActive ? a.bottomLine : "bg-transparent"
        }`}
      />
    </motion.div>
  );
}

// ── Main Section ──
export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const total = services.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((current) => (current - 1 + total) % total);
  }, [total]);

  const goToSlide = (index: number) => setActiveIndex(index);

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(nextSlide, 7000); // 7s for ample reading time
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
      id="services"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FAF7F2 0%, #F3EBE0 40%, #EDE4D6 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,163,115,0.05) 0%, transparent 70%)" }} />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] translate-x-1/3 -translate-y-1/4 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(122,143,122,0.04) 0%, transparent 70%)" }} />

      <FloatingParticle size={8} color="bg-stone-gray/40" top="20%" left="15%" delay={0} duration={15} />
      <FloatingParticle size={12} color="bg-sunset-gold/30" top="70%" left="10%" delay={2} duration={18} />
      <FloatingParticle size={6} color="bg-sage/40" top="30%" left="80%" delay={1} duration={20} />
      <FloatingParticle size={10} color="bg-terracotta/30" top="85%" left="85%" delay={3} duration={16} />
      <FloatingParticle size={14} color="bg-sand-light" top="50%" left="90%" delay={4} duration={22} />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.3em] font-body font-medium text-sunset-gold border border-sunset-gold/20 bg-sunset-gold/5 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sunset-gold" />
            Our Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.8, 0.25, 1] }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-night-desert tracking-tight mb-5"
          >
            Crafted Outdoor <br className="md:hidden" />
            <span className="text-gradient-gold">Environments</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.8, 0.25, 1] }}
            className="text-base lg:text-lg text-stone-gray font-body max-w-2xl mx-auto leading-relaxed"
          >
            We don&apos;t just landscape — we architect outdoor spaces that
            honor the desert, conserve water, and redefine what your property
            can become.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative h-[650px] sm:h-[600px] lg:h-[650px] w-full flex justify-center items-center perspective-[1200px]"
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
            {services.map((service, i) => {
              const relIndex = getRelativeIndex(i);
              const isActive = relIndex === 0;

              const isVisible = Math.abs(relIndex) <= 1;

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
              } else {
                xOffset = 0;
                scale = 0.7;
                opacity = 0;
                zIndex = 10;
                blur = "8px";
              }

              return (
                <motion.div
                  key={service.id}
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
                  className="absolute w-full max-w-[340px] md:max-w-md lg:max-w-[420px] h-[550px] lg:h-[600px]"
                  style={{ pointerEvents: isActive ? "auto" : "none" }}
                >
                  <ServiceCard
                    service={service}
                    isActive={isActive}
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
          className="flex flex-col items-center mt-12 lg:mt-16 relative z-50 gap-10"
        >
          <div className="flex items-center gap-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-sand flex items-center justify-center text-night-desert hover:bg-sand hover:text-white transition-all duration-300"
              aria-label="Previous Service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-3">
              {services.map((_, i) => (
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
              aria-label="Next Service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="text-center">
            <a
              href="#quote"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-body font-semibold tracking-wide text-warm-white bg-night-desert hover:bg-night-light transition-colors duration-500 shadow-xl shadow-night-desert/15"
            >
              Explore Our Full Process
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <p className="text-xs text-stone-gray font-body mt-4">
              Every project begins with a complimentary site consultation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
