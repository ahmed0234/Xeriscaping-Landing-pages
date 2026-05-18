"use client";

import Link from "next/link";
import { FaInstagram, FaPinterestP, FaLinkedinIn } from "react-icons/fa";

export default function P3Footer() {
  return (
    <footer className="relative bg-[#0A120E] py-16 lg:py-20 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2A3D30]/40 to-transparent" />

      <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
          <Link href="/page_3" className="group">
            <span className="font-heading text-[#F0EBE3] text-xl tracking-[0.15em] uppercase font-bold group-hover:text-[#B87333] transition-colors duration-500">
              XERI
            </span>
            <span className="font-heading text-[#6B7F6F] text-xl tracking-[0.15em] uppercase font-light">
              SCAPES
            </span>
          </Link>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {["Philosophy", "Process", "Atelier", "Work", "Voices", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[11px] uppercase tracking-[0.2em] font-body text-[#6B7F6F]/60 hover:text-[#F0EBE3] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: FaInstagram, label: "Instagram" },
              { icon: FaPinterestP, label: "Pinterest" },
              { icon: FaLinkedinIn, label: "LinkedIn" },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 border border-[#2A3D30]/50 flex items-center justify-center text-[#6B7F6F]/50 hover:text-[#B87333] hover:border-[#B87333]/30 transition-all duration-300"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="border-t border-[#2A3D30]/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-body text-[#6B7F6F]/40 tracking-wider uppercase">
          <p>© {new Date().getFullYear()} Xeriscapes Atelier. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-[#6B7F6F] transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-[#6B7F6F] transition-colors">Terms</a>
            <span>Scottsdale, AZ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
