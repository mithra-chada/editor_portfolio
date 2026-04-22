"use client";

import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { useReady } from "./PageShell";

const EASE = [0.22, 1, 0.36, 1] as const;

const STATS = [
  { value: "30+",  label: "Projects"  },
  { value: "5+",   label: "Clients"   },
  { value: "3+",   label: "Years"     },
];

export function HeroSection() {
  const lenis = useLenis();
  const ready = useReady();

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    if (lenis) lenis.scrollTo(target);
    else document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      <div className="max-w-6xl w-full bg-[#0A0500] p-10 sm:p-16 lg:p-20 rounded-[3rem] shadow-2xl border border-[#E07810]/30 shadow-[#E07810]/10 flex flex-col-reverse lg:flex-row items-center justify-between relative z-10 mt-16 lg:mt-0 overflow-hidden">

        {/* Inner ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E07810]/5 via-transparent to-transparent pointer-events-none rounded-[3rem]" />

        {/* ── Text Column ───────────────────────────────────────────────── */}
        <div className="flex-1 text-center lg:text-left relative z-30 w-full lg:w-3/5 lg:pr-10 -mt-6 lg:-mt-16">

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-7 bg-[#071408] border border-[#4ADE80]/20 rounded-full text-[#4ADE80] text-xs font-medium tracking-wide font-inter w-fit mx-auto lg:mx-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse shrink-0" />
            Available for new projects
          </motion.div>

          {/* ── Name — M flies in from left, C from right; rest reveals after ── */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-playfair font-bold text-white mb-4 leading-none drop-shadow-md relative z-30 tracking-tight">
            {/* Mithra */}
            <span className="inline-flex items-baseline">
              <motion.span
                className="inline-block"
                initial={{ x: -220, opacity: 0 }}
                animate={ready ? { x: 0, opacity: 1 } : { x: -220, opacity: 0 }}
                transition={{ duration: 0.85, ease: EASE }}
              >
                M
              </motion.span>
              <motion.span
                className="inline-block"
                style={{ overflow: "hidden", whiteSpace: "nowrap" }}
                initial={{ maxWidth: 0, opacity: 0 }}
                animate={ready ? { maxWidth: 700, opacity: 1 } : { maxWidth: 0, opacity: 0 }}
                transition={{ duration: 0.65, delay: 0.58, ease: EASE }}
              >
                ithra
              </motion.span>
            </span>
            {" "}
            {/* Chada */}
            <span className="inline-flex items-baseline">
              <motion.span
                className="inline-block"
                initial={{ x: 220, opacity: 0 }}
                animate={ready ? { x: 0, opacity: 1 } : { x: 220, opacity: 0 }}
                transition={{ duration: 0.85, delay: 0.08, ease: EASE }}
              >
                C
              </motion.span>
              <motion.span
                className="inline-block"
                style={{ overflow: "hidden", whiteSpace: "nowrap" }}
                initial={{ maxWidth: 0, opacity: 0 }}
                animate={ready ? { maxWidth: 700, opacity: 1 } : { maxWidth: 0, opacity: 0 }}
                transition={{ duration: 0.65, delay: 0.7, ease: EASE }}
              >
                hada
              </motion.span>
            </span>
          </h1>

          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl text-google-blue mb-8 uppercase drop-shadow-sm font-bold relative z-30 max-w-lg mx-auto lg:mx-0 tracking-wide font-playfair"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
          >
            Video Editor for YouTube, Reels & Cinematic Stories
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-300 font-medium mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-inter relative z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
          >
            Turning raw footage into engaging stories that retain viewers and elevate brands.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 font-inter relative z-30"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
          >
            <a
              href="#showreel"
              onClick={(e) => scrollTo(e, "#showreel")}
              className="bg-gradient-to-r from-[#E07810] to-[#CC7A10] text-[#050505] px-8 py-4 rounded-full font-bold text-base hover:scale-105 transition-all duration-300 shadow-lg shadow-[#E07810]/20 hover:shadow-[#E07810]/40 text-center tracking-wide"
            >
              View Showreel
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "#contact")}
              className="bg-[#140A00] text-[#CC7A10] border-2 border-[#E07810]/50 px-8 py-4 rounded-full font-bold text-base hover:border-[#E07810] hover:text-[#E8A020] hover:scale-105 transition-all duration-300 text-center hover:bg-[#E07810]/10 tracking-wide"
            >
              Contact Me
            </a>
          </motion.div>

          {/* ── Stats row ─────────────────────────────────────────────── */}
          <motion.div
            className="flex items-center justify-center lg:justify-start gap-0 mt-10 pt-8 border-t border-[#E07810]/10 relative z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.62, ease: EASE }}
          >
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center">
                <div className="text-center lg:text-left px-6 first:pl-0">
                  <div className="text-3xl font-bold text-white font-playfair leading-none tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-[#8C8078] tracking-[0.14em] uppercase mt-1.5 font-inter">
                    {stat.label}
                  </div>
                </div>
                {i < STATS.length - 1 && (
                  <div className="h-8 w-px bg-[#E07810]/18 shrink-0" />
                )}
              </div>
            ))}
          </motion.div>

        </div>

        {/* ── Hero Cutout Image ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.92 }}
          animate={{ opacity: 1, x: 0,  scale: 1 }}
          transition={{ duration: 1.0, delay: 0.18, ease: EASE }}
          className="w-full relative z-0 flex justify-center items-end lg:absolute lg:right-0 lg:bottom-0 lg:h-[86%] lg:w-[38%] pt-6 lg:pt-0 pointer-events-none"
        >
          <img
            src="/hero-image.png?v=5"
            alt="Mithra Chada - Video Editor"
            className="relative z-0 object-contain object-bottom w-full max-w-[260px] lg:max-w-none lg:w-full h-[280px] lg:h-full drop-shadow-[0_20px_50px_rgba(255,122,0,0.15)] hover:scale-[1.04] transition-transform duration-700 ease-out origin-bottom pointer-events-auto"
          />
        </motion.div>

      </div>
    </section>
  );
}
