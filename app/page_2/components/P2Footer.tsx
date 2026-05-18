"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { FaInstagram, FaPinterestP, FaLinkedinIn } from "react-icons/fa";

export default function P2Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  const links = [
    { label: "Philosophy", href: "#philosophy" },
    { label: "Atelier", href: "#services" },
    { label: "Portfolio", href: "#projects" },
    { label: "Voices", href: "#testimonials" },
    { label: "Inquire", href: "#contact" },
  ];

  const socials = [
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaPinterestP, href: "#", label: "Pinterest" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer
      ref={ref}
      className="relative bg-[#141210] pt-20 pb-10 lg:pt-28 lg:pb-14 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-gradient-to-r from-transparent via-[#3D3830]/40 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 mb-20">
            <div className="text-center lg:text-left">
              <Link href="/page_2" className="group inline-block">
                <span className="text-[10px] uppercase tracking-[0.3em] font-body text-[#C4956A]/60 block mb-1">
                  Atelier
                </span>
                <span className="font-heading text-3xl font-light tracking-wider text-[#F5F0E8] group-hover:text-[#C4956A] transition-colors duration-500">
                  XERISCAPING
                </span>
              </Link>
              <p className="text-[#A39B90]/60 font-body text-sm mt-4 max-w-xs leading-relaxed">
                Luxury landscape architecture for the modern desert.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[12px] uppercase tracking-[0.2em] font-body text-[#A39B90]/70 hover:text-[#F5F0E8] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-5">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full border border-[#3D3830]/50 flex items-center justify-center text-[#A39B90]/60 hover:text-[#C4956A] hover:border-[#C4956A]/40 transition-all duration-300"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="border-t border-[#3D3830]/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-body text-[#A39B90]/40">
            <p>© {new Date().getFullYear()} Atelier Xeriscaping. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-[#A39B90] transition-colors">
                Privacy
              </a>
              <a href="#terms" className="hover:text-[#A39B90] transition-colors">
                Terms
              </a>
              <span>Scottsdale, Arizona</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
