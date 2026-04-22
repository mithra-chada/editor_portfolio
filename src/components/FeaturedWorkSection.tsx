"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const WORKS = [
  {
    title: "Rachana Official — Reels",
    role: "Content Creator",
    desc: "Edited YouTube content and Instagram reels focused on audience engagement, strong hooks, and social media retention.",
    img: "/logos/Rachana Logo.jpg",
    borderColor: "border-[#CC7A10]/40",
    tags: ["Hook-focused", "Beat-sync"],
    href: "https://www.instagram.com/rachana._official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    title: "JPS Trainers",
    role: "Educational YouTube · 179k Subscribers",
    desc: "Edited educational YouTube videos prioritising clarity, structured pacing, and distraction-free visual flow.",
    img: "/logos/JPS Trainers.jpg",
    borderColor: "border-[#E07810]/40",
    tags: ["Structured cuts", "Pacing"],
    href: "https://www.youtube.com/@JPSTrainersJPSRatnam",
  },
  {
    title: "Rachana Short Films",
    role: "Narrative Fiction",
    desc: "Narrative short film edit focused on emotional pacing, cinematic tone, and storytelling continuity.",
    img: "/logos/Rachana Logo.jpg",
    borderColor: "border-[#E8A020]/40",
    tags: ["Cinematic tone", "Emotional pacing"],
    href: "https://www.youtube.com/@Rachanaoffical",
  },
  {
    title: "Faces Theatre Club",
    role: "Promotional Reels & Content",
    desc: "Edited engaging promotional reels and dynamic social media content capturing the energy of live theatrical performances.",
    img: "/logos/FACES Logo.png",
    borderColor: "border-[#E07810]/40",
    tags: ["Promotional", "Social media"],
    href: "https://www.instagram.com/faces_theatre_club/?utm_source=ig_web_button_share_sheet",
  },
];

export function FeaturedWorkSection() {
  return (
    <section id="work" className="relative w-full py-24 px-6 flex flex-col items-center">
      <div className="max-w-6xl w-full">

        {/* ── Section header ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-10 text-center sm:text-left"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Work</h2>
          <div className="h-px w-16 bg-gradient-to-r from-[#E07810] to-transparent mx-auto sm:mx-0 rounded-full" />
        </motion.div>

        {/* ── 2 × 2 grid ───────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {WORKS.map((work, idx) => (
            <motion.a
              key={work.title}
              href={work.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: EASE }}
              whileHover={{ y: -4, transition: { duration: 0.25, ease: EASE } }}
              className="bg-[#0A0500] border border-[#E07810]/25 p-6 rounded-[2rem] shadow-xl shadow-[#E07810]/4 ring-1 ring-[#E07810]/12 flex flex-col group"
            >
              {/* ── Thumbnail: atmospheric blurred bg + clear centred logo ── */}
              <div
                className={`w-full aspect-video mb-6 rounded-2xl overflow-hidden relative flex items-center justify-center bg-[#100800] border ${work.borderColor}`}
              >
                {/* Blurred logo fills the background atmospherically */}
                <img
                  src={work.img}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-2xl scale-150 opacity-25 saturate-150"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#100800]/70 via-[#0A0500]/50 to-[#100800]/80" />
                {/* Dot-grid texture */}
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage: "radial-gradient(circle, #CC7A10 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                />
                {/* Logo — centred and clear */}
                <img
                  src={work.img}
                  alt={work.title}
                  className="relative z-10 w-20 h-20 md:w-24 md:h-24 object-cover rounded-full shadow-[0_0_40px_rgba(0,0,0,0.55)] ring-2 ring-[#E07810]/20 group-hover:ring-[#E07810]/50 group-hover:scale-110 transition-all duration-500"
                />
                {/* External link badge on hover */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-1.5 bg-[#E07810]/20 rounded-full backdrop-blur-sm">
                    <ExternalLink size={12} className="text-[#CC7A10]" />
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-1.5 font-playfair">{work.title}</h3>
              <p className="text-xs text-[#E07810] font-semibold mb-3 uppercase tracking-wide font-inter">
                {work.role}
              </p>
              <p className="text-[#6A5F54] text-sm mb-5 flex-grow leading-relaxed font-inter">
                {work.desc}
              </p>

              <ul className="flex flex-wrap gap-2 mt-auto">
                {work.tags.map((tag) => (
                  <li
                    key={tag}
                    className="px-3 py-1 bg-[#E07810]/8 text-[#CC7A10] text-xs rounded-full border border-[#E07810]/18 font-inter"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.a>
          ))}
        </div>

        {/* ── NDA section ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="mt-6 w-full p-8 rounded-3xl bg-gradient-to-br from-[#0F0A05] to-[#0A0500] text-white shadow-2xl relative overflow-hidden group border border-[#E07810]/18 ring-1 ring-[#E07810]/8"
        >
          {/* Subtle hatch pattern background */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #E07810 0, #E07810 1px, transparent 0, transparent 50%)",
              backgroundSize: "12px 12px",
            }}
          />

          <div className="relative z-10 md:flex items-center gap-8">
            <div className="hidden md:flex shrink-0 w-20 h-20 rounded-full bg-[#140A00] border-2 border-[#E07810]/40 items-center justify-center shadow-lg shadow-[#E07810]/15">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E8A020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="md:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E8A020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E8A020] to-white font-playfair">
                  International Wedding Film — Dubai Client
                </h3>
              </div>
              <p className="text-[#E07810] font-medium mb-3 uppercase tracking-[0.2em] text-[10px] font-inter">
                NDA Protected
              </p>
              <p className="text-[#8C8078] max-w-3xl leading-relaxed text-sm font-inter">
                Currently editing a cinematic wedding film for an international client. Due to NDA
                restrictions, footage cannot be shared publicly. Selected preview clips are available
                privately upon request.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
