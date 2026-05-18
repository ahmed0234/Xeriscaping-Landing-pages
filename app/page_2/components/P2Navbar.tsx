"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

const leftLinks = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Atelier", href: "#services" },
  { label: "Portfolio", href: "#projects" },
];

const rightLinks = [
  { label: "Voices", href: "#testimonials" },
  { label: "Journal", href: "#journal" },
  { label: "Inquire", href: "#contact" },
];

export default function P2Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#1A1814]/90 backdrop-blur-xl border-b border-[#3D3830]/50"
            : ""
        }`}
      >
        <nav className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <div className="hidden lg:flex items-center gap-10">
              {leftLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className="text-[13px] uppercase tracking-[0.2em] font-body text-[#A39B90] hover:text-[#F5F0E8] transition-colors duration-500"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <Link href="/page_2" className="group flex flex-col items-center">
              <motion.span
                initial={{ opacity: 0, letterSpacing: "0.1em" }}
                animate={{ opacity: 1, letterSpacing: "0.3em" }}
                transition={{ duration: 1.2, delay: 0.6 }}
                className="text-[11px] uppercase tracking-[0.3em] font-body text-[#C4956A] mb-0.5"
              >
                Atelier
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="font-heading text-2xl lg:text-3xl font-light tracking-wide text-[#F5F0E8] group-hover:text-[#C4956A] transition-colors duration-500"
              >
                XERISCAPING
              </motion.span>
            </Link>

            <div className="hidden lg:flex items-center gap-10">
              {rightLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                >
                  {link.label === "Inquire" ? (
                    <Link
                      href={link.href}
                      className="text-[13px] uppercase tracking-[0.2em] font-body text-[#1A1814] bg-[#C4956A] px-5 py-2 hover:bg-[#D4A57A] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[13px] uppercase tracking-[0.2em] font-body text-[#A39B90] hover:text-[#F5F0E8] transition-colors duration-500"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col items-end gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <motion.div animate={{ width: mobileOpen ? 24 : 24 }} className="h-[1.5px] bg-[#F5F0E8]" />
              <motion.div animate={{ width: mobileOpen ? 24 : 16 }} className="h-[1.5px] bg-[#F5F0E8]" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#1A1814]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {[...leftLinks, ...rightLinks].map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-heading font-light text-[#F5F0E8] hover:text-[#C4956A] transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
