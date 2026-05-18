"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Leaf,
} from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Our Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
    { label: "Book Online", href: "#book" },
  ];

  const socialLinks = [
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative bg-night-desert pt-24 pb-8 lg:pt-32 lg:pb-12 overflow-hidden"
    >
    
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-sage/20 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/2"
      />
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -20, 0], opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sunset-gold/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-10 pb-20 border-b border-sand/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
            className="lg:col-span-4 flex flex-col items-start"
          >
            <Link href="/" className="group inline-flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="relative w-12 h-12 flex items-center justify-center bg-gradient-to-br from-sage/30 to-sage/10 rounded-full border border-sage/20 overflow-hidden"
              >
                <Image
                  src="/Navlogo.png"
                  alt="Xeriscaping Logo"
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-bold tracking-tight text-warm-white group-hover:text-sand transition-colors duration-300">
                  Xeriscaping
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-sand/60 font-body">
                  Landscape Studio
                </span>
              </div>
            </Link>
            <p className="text-stone-gray font-body leading-relaxed max-w-sm mb-8 text-sm lg:text-base">
              Modern landscapes designed for water-wise living. We craft
              sustainable, elegant outdoor spaces that honor the desert environment.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full border border-sand/20 flex items-center justify-center text-sand hover:bg-sage/20 hover:border-sage/40 hover:text-sage-light transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.8, 0.25, 1] }}
            className="lg:col-span-4 grid grid-cols-2 gap-8"
          >
            {/* Nav Links */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-body font-semibold text-sand mb-6">
                Explore
              </h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group relative inline-block text-sm text-stone-gray hover:text-warm-white transition-colors duration-300 font-body"
                    >
                      {link.label}
                      <span className="absolute left-0 -bottom-1 w-0 h-px bg-sage transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-body font-semibold text-sand mb-6">
                Contact
              </h4>
              <ul className="space-y-5">
                <li>
                  <a
                    href="mailto:hello@xeriscaping.com"
                    className="group flex items-start gap-3 text-sm text-stone-gray hover:text-warm-white transition-colors duration-300 font-body"
                  >
                    <Mail className="w-4 h-4 mt-0.5 text-sage/70 group-hover:text-sage transition-colors" />
                    hello@xeriscaping.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+18005550199"
                    className="group flex items-start gap-3 text-sm text-stone-gray hover:text-warm-white transition-colors duration-300 font-body"
                  >
                    <Phone className="w-4 h-4 mt-0.5 text-sage/70 group-hover:text-sage transition-colors" />
                    +1 (800) 555-0199
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-stone-gray font-body leading-relaxed">
                  <MapPin className="w-4 h-4 mt-0.5 text-sage/70 flex-shrink-0" />
                  123 Desert View Dr.
                  <br />
                  Scottsdale, AZ 85255
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
            className="lg:col-span-4 flex flex-col items-start lg:items-end lg:text-right"
          >
            <h3 className="font-heading text-3xl lg:text-4xl font-bold text-warm-white mb-4 leading-tight">
              Ready to Transform Your Outdoor Space?
            </h3>
            <p className="text-stone-gray text-sm lg:text-base font-body mb-8 max-w-sm">
              Start your xeriscape journey today. Schedule a complimentary site
              consultation and discover the potential of your property.
            </p>
            <a
              href="#quote"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-sunset-gold text-night-desert font-body font-semibold tracking-wide overflow-hidden shadow-lg shadow-sunset-gold/20 hover:shadow-xl hover:shadow-sunset-gold/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              <span className="relative z-10">Get a Quote</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-body text-stone-gray/60"
        >
          <p>© {new Date().getFullYear()} Xeriscaping Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-warm-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-warm-white transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
