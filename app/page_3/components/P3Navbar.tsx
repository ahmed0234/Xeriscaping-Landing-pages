"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

const navItems = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Process", href: "#process" },
  { label: "Atelier", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Voices", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function P3Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#0F1A14]/95 backdrop-blur-xl"
            : ""
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-8 lg:px-16 flex items-center justify-between h-20">
          <Link href="/page_3" className="group">
            <span className="font-heading text-[#F0EBE3] text-xl tracking-[0.15em] uppercase font-bold group-hover:text-[#B87333] transition-colors duration-500">
              XERI
            </span>
            <span className="font-heading text-[#6B7F6F] text-xl tracking-[0.15em] uppercase font-light">
              SCAPES
            </span>
          </Link>

          <div className="flex items-center gap-8">
            <span className="text-[10px] tracking-[0.3em] uppercase font-body text-[#6B7F6F] hidden lg:block">
              Scottsdale, AZ
            </span>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="group flex items-center gap-3 text-[#F0EBE3] hover:text-[#B87333] transition-colors duration-300"
            >
              <span className="text-[11px] tracking-[0.2em] uppercase font-body">
                {menuOpen ? "Close" : "Menu"}
              </span>
              <div className="flex flex-col gap-[5px]">
                <motion.div
                  animate={{ width: menuOpen ? 20 : 20, rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
                  className="h-[1.5px] bg-current"
                />
                <motion.div
                  animate={{ opacity: menuOpen ? 0 : 1 }}
                  className="h-[1.5px] w-3 bg-current ml-auto"
                />
                <motion.div
                  animate={{ width: menuOpen ? 20 : 14, rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
                  className="h-[1.5px] bg-current ml-auto"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 60px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 60px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 60px) 40px)" }}
            transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-[#0F1A14] flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center gap-6 py-3"
                  >
                    <span className="text-[11px] font-body text-[#6B7F6F] tracking-wider">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-heading text-5xl lg:text-7xl font-bold uppercase text-[#F0EBE3] group-hover:text-[#B87333] transition-colors duration-300 tracking-wider">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="absolute bottom-12 left-0 right-0 flex items-center justify-between px-16 text-[10px] tracking-[0.2em] uppercase font-body text-[#6B7F6F]">
              <span>hello@xeriscapes.com</span>
              <span>+1 (480) 555-0142</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
