"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Leaf } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Book Online", href: "#book" },
  { label: "Our Projects", href: "#projects" },
  { label: "Get a Quote", href: "#quote" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "glass shadow-[0_4px_30px_rgba(0,0,0,0.08)] border-b border-sand/30"
            : "navbar-gradient"
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-18 lg:h-22">
            {/* === Logo === */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="relative"
              >
                <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-cactus to-olive flex items-center justify-center shadow-lg">
                  <Leaf className="w-4.5 h-4.5 lg:w-5 lg:h-5 text-sand-light" strokeWidth={1.5} />
                </div>
              </motion.div>
              <div className="flex flex-col leading-none">
                <span
                  className={`font-heading text-xl lg:text-2xl font-semibold tracking-tight transition-colors duration-500 ${
                    scrolled ? "text-night-desert" : "text-warm-white"
                  }`}
                  style={scrolled ? {} : { textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}
                >
                  Xeriscaping
                </span>
                <span
                  className={`text-[10px] lg:text-[11px] uppercase tracking-[0.25em] font-body mt-0.5 transition-colors duration-500 ${
                    scrolled ? "text-stone-gray" : "text-warm-white/60"
                  }`}
                >
                  Landscape Studio
                </span>
              </div>
            </Link>

            <div className="hidden xl:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 * i + 0.3,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={link.href}
                    className={`nav-link-underline relative px-3.5 py-2 text-[13px] font-body font-medium tracking-wide transition-colors duration-300 ${
                      scrolled
                        ? "text-night-desert/80 hover:text-night-desert"
                        : "text-warm-white/80 hover:text-warm-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="hidden xl:block"
              >
                <Link
                  href="#contact"
                  className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[13px] font-body font-semibold tracking-wide text-night-desert bg-gradient-to-r from-sunset-gold to-desert-tan hover:from-desert-tan hover:to-sunset-gold transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-sunset-gold/20 animate-glow"
                >
                  <span className="relative z-10">Contact Us</span>
                </Link>
              </motion.div>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`xl:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-300 ${
                  scrolled
                    ? "text-night-desert hover:bg-sand/30"
                    : "text-warm-white hover:bg-white/10"
                }`}
                aria-label="Toggle navigation menu"
                id="mobile-menu-toggle"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" strokeWidth={1.5} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" strokeWidth={1.5} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 xl:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-night-desert/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="absolute top-0 right-0 h-full w-[85%] max-w-sm glass-dark border-l border-white/5"
            >
              <div className="flex flex-col h-full pt-24 pb-10 px-8">
                <nav className="flex-1 flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.05 * i + 0.15,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center py-3.5 text-lg font-heading font-medium text-warm-white/90 hover:text-sunset-gold transition-colors duration-300 border-b border-white/5"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="mt-6"
                >
                  <Link
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center w-full px-6 py-3.5 rounded-full text-sm font-body font-semibold tracking-wide text-night-desert bg-gradient-to-r from-sunset-gold to-desert-tan hover:from-desert-tan hover:to-sunset-gold transition-all duration-500 shadow-lg"
                  >
                    Contact Us
                  </Link>
                </motion.div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-stone-gray/60 font-body">
                    Luxury Landscape Architecture
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
