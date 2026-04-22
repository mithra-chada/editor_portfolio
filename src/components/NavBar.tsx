"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { Menu, X } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const NAV_LINKS = [
  { label: "Showreel", href: "#showreel" },
  { label: "Work",     href: "#work"     },
  { label: "Skills",   href: "#skills"   },
  { label: "About",    href: "#about"    },
  { label: "Contact",  href: "#contact"  },
];

export function NavBar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    if (lenis) lenis.scrollTo(href);
    else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ── Fixed header ──────────────────────────────────────────────────── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#070707]/88 backdrop-blur-md border-b border-[#E07810]/10 shadow-[0_4px_40px_rgba(0,0,0,0.7)]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Monogram + name */}
          <a href="#" onClick={scrollTop} className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#E07810] to-[#CC7A10] flex items-center justify-center shadow-[0_0_14px_rgba(255,122,0,0.22)] group-hover:shadow-[0_0_24px_rgba(255,122,0,0.42)] transition-shadow duration-300">
              <span className="text-[#070707] font-bold text-[11px] font-playfair tracking-wider leading-none">MC</span>
            </div>
            <span className="hidden sm:block text-[#F0EDE8]/70 font-playfair text-sm font-semibold tracking-[0.14em] uppercase group-hover:text-[#F0EDE8] transition-colors duration-300">
              Mithra Chada
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="relative text-[#8C8078] hover:text-[#F0EDE8] text-[11px] tracking-[0.16em] uppercase font-medium transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-[#E07810] to-[#CC7A10] group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "#contact")}
              className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-[#E07810] to-[#CC7A10] text-[#070707] px-5 py-2.5 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase hover:scale-105 hover:shadow-[0_0_20px_rgba(255,122,0,0.32)] transition-all duration-300"
            >
              Hire Me
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden p-2 text-[#F0EDE8] hover:text-[#CC7A10] transition-colors"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile full-screen overlay ────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-40 bg-[#070707]/96 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.065, duration: 0.4, ease: EASE }}
                className="text-[#F0EDE8] text-3xl font-playfair font-bold hover:text-[#CC7A10] transition-colors duration-200"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => scrollTo(e, "#contact")}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.38, duration: 0.4, ease: EASE }}
              className="mt-4 bg-gradient-to-r from-[#E07810] to-[#CC7A10] text-[#070707] px-8 py-4 rounded-full font-bold text-base tracking-wide"
            >
              Hire Me →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
