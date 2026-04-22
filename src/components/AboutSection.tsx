"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const HIGHLIGHTS = [
  {
    icon: "🎭",
    title: "Theatre Background",
    desc: "Deep sense of timing, performance & narrative from university cultural productions.",
  },
  {
    icon: "🌍",
    title: "International Clients",
    desc: "Cinematic wedding & short film work for clients including an international Dubai project.",
  },
  {
    icon: "📺",
    title: "YouTube & Reels",
    desc: "Edited channels across entertainment, education & theatre with proven audience retention.",
  },
  {
    icon: "✅",
    title: "Available Now",
    desc: "Open to freelance projects and full-time roles. Quick turnaround guaranteed.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative w-full py-24 px-6 flex flex-col items-center border-t border-[#E07810]/20">
      <div className="max-w-5xl w-full">

        {/* ── Section header ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12 text-center sm:text-left"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Mithra</h2>
          <div className="h-px w-16 bg-gradient-to-r from-[#E07810] to-transparent mx-auto sm:mx-0 rounded-full" />
        </motion.div>

        {/* ── Two-column layout ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">

          {/* Bio — left 3/5 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: EASE }}
            className="lg:col-span-3 bg-[#0A0500] p-8 sm:p-10 rounded-3xl border border-[#E07810]/20 shadow-xl shadow-[#E07810]/4 flex flex-col justify-center"
          >
            <p className="text-base md:text-lg text-[#C8B9A8] font-inter leading-relaxed mb-5">
              I'm a video editor specialising in YouTube content, social media reels, and cinematic
              storytelling. With experience in short films and wedding projects for international
              clients, I focus on audience engagement, emotional pacing, and clean, purposeful visuals
              that strengthen the creator's message.
            </p>
            <p className="text-base md:text-lg text-[#C8B9A8] font-inter leading-relaxed">
              With a theatre background and active leadership in university cultural productions, I bring
              a strong understanding of performance, timing, and collaboration into every edit. I'm
              currently open to freelance and full-time opportunities where I can contribute value,
              grow with a team, and create content that truly connects with audiences.
            </p>
          </motion.div>

          {/* Highlights — right 2/5 */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.09, ease: EASE }}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#0E0900] border border-[#E07810]/10 hover:border-[#E07810]/28 hover:bg-[#E07810]/3 transition-all duration-300"
              >
                <span className="text-xl shrink-0 mt-0.5 leading-none">{item.icon}</span>
                <div>
                  <h4 className="text-sm font-bold text-[#F0EDE8] mb-1 font-playfair leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#5A5048] leading-relaxed font-inter">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
