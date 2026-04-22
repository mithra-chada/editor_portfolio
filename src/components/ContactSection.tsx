"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin, MessageCircle, Phone } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full py-32 px-6 flex flex-col items-center border-t border-[#E07810]/20 bg-[#050505]"
    >
      <div className="max-w-2xl w-full text-center z-10 bg-[#0A0500] border border-[#E07810]/30 p-10 sm:p-12 rounded-[3rem] shadow-2xl shadow-[#E07810]/5">

        {/* ── Availability signal ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-[#071408] border border-[#4ADE80]/20 rounded-full text-[#4ADE80] text-xs font-medium tracking-wide font-inter"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse shrink-0" />
          Available · Usually responds within 24h
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-4xl font-bold text-white mb-4"
        >
          Let's Create Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1, duration: 0.7, ease: EASE }}
          className="text-[#8C8078] font-inter mb-10 text-base leading-relaxed"
        >
          Available for freelance editing projects and full-time inquiries.
          <br />
          Let's talk about your next video.
        </motion.p>

        {/* ── Contact buttons ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.18, duration: 0.7, ease: EASE }}
          className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 mb-10"
        >
          <a
            href="mailto:mithrachada@gmail.com"
            className="w-full sm:w-auto bg-gradient-to-r from-[#E07810] to-[#CC7A10] text-[#050505] px-7 py-3.5 rounded-full font-bold text-sm hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#E07810]/25 tracking-wide font-inter"
          >
            <Mail size={17} />
            mithrachada@gmail.com
          </a>
          <a
            href="https://wa.me/917075147888"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#140A00] text-[#CC7A10] border border-[#E07810]/40 px-7 py-3.5 rounded-full font-bold text-sm hover:border-[#E07810] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-[#E07810]/8 tracking-wide font-inter"
          >
            <MessageCircle size={17} />
            WhatsApp
          </a>
          <a
            href="tel:+917075147888"
            className="w-full sm:w-auto bg-[#140A00] text-[#CC7A10] border border-[#E07810]/40 px-7 py-3.5 rounded-full font-bold text-sm hover:border-[#E07810] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-[#E07810]/8 tracking-wide font-inter"
          >
            <Phone size={17} />
            +91 70751 47888
          </a>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E07810]/15 to-transparent mb-8" />

        {/* ── Social icons ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3, duration: 0.7, ease: EASE }}
          className="flex justify-center gap-4"
        >
          <a
            href="https://www.instagram.com/mithra__884?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 bg-[#140A00] rounded-full ring-1 ring-[#E07810]/20 text-[#CC7A10] hover:text-[#E8A020] hover:scale-110 transition-all duration-300 hover:bg-[#E07810]/10 hover:ring-[#E07810]/40"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/mithra-chada/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 bg-[#140A00] rounded-full ring-1 ring-[#E07810]/20 text-[#CC7A10] hover:text-[#E8A020] hover:scale-110 transition-all duration-300 hover:bg-[#E07810]/10 hover:ring-[#E07810]/40"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-[#5A4F44] font-inter text-[11px] tracking-[0.18em] uppercase">
        © {new Date().getFullYear()} Mithra Chada. All rights reserved.
      </div>
    </section>
  );
}
