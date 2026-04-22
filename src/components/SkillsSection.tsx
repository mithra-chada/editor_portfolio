"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const TOOLS = [
  {
    name: "DaVinci Resolve",
    desc: "Color grading, timeline editing & cinematic post-production",
    color: "text-[#4DB8FF]",
    stripe: "bg-[#4DB8FF]",
    level: "Primary Tool",
    levelStyle: "border-[#4DB8FF]/30 text-[#4DB8FF]/80",
  },
  {
    name: "Premiere Pro",
    desc: "Multi-cam editing, YouTube workflows & long-form cuts",
    color: "text-[#EA77FF]",
    stripe: "bg-[#EA77FF]",
    level: "Primary Tool",
    levelStyle: "border-[#EA77FF]/30 text-[#EA77FF]/80",
  },
  {
    name: "Filmora",
    desc: "Fast-turnaround social media content & reels",
    color: "text-[#00E5B5]",
    stripe: "bg-[#00E5B5]",
    level: "Proficient",
    levelStyle: "border-[#00E5B5]/30 text-[#00E5B5]/80",
  },
];

const AI_TOOLS = [
  {
    name: "Google Flow",
    desc: "AI-powered video generation & cinematic scene creation built on Veo",
    color: "text-[#4ECDC4]",
    stripe: "bg-[#4ECDC4]",
    level: "Actively Using",
    levelStyle: "border-[#4ECDC4]/30 text-[#4ECDC4]/80",
  },
  {
    name: "Higgsfield AI",
    desc: "Character-consistent AI video generation with cinematic motion & style control",
    color: "text-[#FFB347]",
    stripe: "bg-[#FFB347]",
    level: "Actively Using",
    levelStyle: "border-[#FFB347]/30 text-[#FFB347]/80",
  },
];

const SPECIALIZATIONS = [
  "Hook-focused Editing",
  "Beat Sync Cuts",
  "Cinematic Storytelling",
  "Color Grading",
  "Emotional Pacing",
  "Structured Long-form",
  "Social Media Reels",
  "Promotional Content",
  "AI Video Generation",
  "AI-Assisted Editing",
  "Video Animations via AI",
  "AI Workflow Integration",
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative w-full py-24 px-6 flex flex-col items-center">
      <div className="max-w-4xl w-full">

        {/* ── Section header ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12 text-center sm:text-left"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Craft & Arsenal</h2>
          <div className="h-px w-16 bg-gradient-to-r from-[#E07810] to-transparent mx-auto sm:mx-0 rounded-full" />
        </motion.div>

        {/* ── Software label ───────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="text-[10px] text-[#8C8078] tracking-[0.2em] uppercase mb-5 font-inter"
        >
          Software
        </motion.p>

        {/* ── Tool cards ───────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {TOOLS.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              whileHover={{ y: -4, transition: { duration: 0.25, ease: EASE } }}
              className="relative overflow-hidden rounded-2xl bg-[#0E0900] border border-[#E07810]/15 p-6 group hover:border-[#E07810]/30 hover:shadow-[0_8px_30px_rgba(255,122,0,0.06)] transition-all duration-300"
            >
              {/* Coloured left accent stripe */}
              <div
                className={`absolute left-0 top-4 bottom-4 w-[3px] ${tool.stripe} rounded-r-full opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <div className="pl-4">
                <h4 className={`text-lg font-bold font-playfair ${tool.color} mb-2 leading-snug`}>
                  {tool.name}
                </h4>
                <p className="text-xs text-[#5A5048] leading-relaxed mb-4 font-inter">
                  {tool.desc}
                </p>
                <span
                  className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-medium border tracking-wide font-inter ${tool.levelStyle}`}
                >
                  {tool.level}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Divider ──────────────────────────────────────────────────── */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E07810]/15 to-transparent mb-10" />

        {/* ── AI Tools label ───────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-[10px] text-[#8C8078] tracking-[0.2em] uppercase mb-5 font-inter"
        >
          AI Tools
        </motion.p>

        {/* ── AI Tool cards ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {AI_TOOLS.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              whileHover={{ y: -4, transition: { duration: 0.25, ease: EASE } }}
              className="relative overflow-hidden rounded-2xl bg-[#0E0900] border border-[#E07810]/15 p-6 group hover:border-[#E07810]/30 hover:shadow-[0_8px_30px_rgba(255,122,0,0.06)] transition-all duration-300"
            >
              <div
                className={`absolute left-0 top-4 bottom-4 w-[3px] ${tool.stripe} rounded-r-full opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <div className="pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className={`text-lg font-bold font-playfair ${tool.color} leading-snug`}>
                    {tool.name}
                  </h4>
                  <span className="text-[9px] font-inter tracking-[0.12em] uppercase text-[#E07810]/60 bg-[#E07810]/8 px-2 py-0.5 rounded-full border border-[#E07810]/15">
                    AI
                  </span>
                </div>
                <p className="text-xs text-[#5A5048] leading-relaxed mb-4 font-inter">
                  {tool.desc}
                </p>
                <span
                  className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-medium border tracking-wide font-inter ${tool.levelStyle}`}
                >
                  {tool.level}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Divider ──────────────────────────────────────────────────── */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E07810]/15 to-transparent mb-10" />

        {/* ── Specializations label ─────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-[10px] text-[#8C8078] tracking-[0.2em] uppercase mb-5 font-inter"
        >
          Specializations
        </motion.p>

        {/* ── Spec pills ───────────────────────────────────────────────── */}
        <div className="flex flex-wrap gap-3">
          {SPECIALIZATIONS.map((spec, i) => (
            <motion.span
              key={spec}
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: EASE }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="px-4 py-2 rounded-full text-sm font-medium font-inter bg-[#0E0900] border border-[#E07810]/15 text-[#9A8F82] hover:border-[#E07810]/40 hover:text-[#F0EDE8] hover:bg-[#E07810]/5 transition-all duration-200 cursor-default"
            >
              {spec}
            </motion.span>
          ))}
        </div>

      </div>
    </section>
  );
}
