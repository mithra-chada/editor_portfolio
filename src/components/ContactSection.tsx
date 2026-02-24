"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin, MessageCircle, Phone } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="relative w-full py-32 px-6 flex flex-col items-center border-t border-[#FF7A00]/20 bg-[#050505]">
            <div className="max-w-2xl w-full text-center z-10 bg-[#0A0500] border border-[#FF7A00]/30 p-12 rounded-[3rem] shadow-2xl shadow-[#FF7A00]/5">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
                    className="text-4xl font-bold text-white mb-6"
                >
                    Let's Create Together
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ delay: 0.1, duration: 1.2, type: "spring", bounce: 0.4 }}
                    className="text-gray-300 font-medium mb-12 text-lg"
                >
                    Available for freelance editing projects and full-time inquiries.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ delay: 0.2, duration: 1.2, type: "spring", bounce: 0.4 }}
                    className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mb-16"
                >
                    <a href="mailto:mithrachada@gmail.com" className="w-full sm:w-auto bg-gradient-to-r from-[#FF7A00] to-[#FF9900] text-[#050505] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#FF7A00]/30">
                        <Mail size={20} />
                        Email Me
                    </a>
                    <a href="https://wa.me/917075147888" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#140A00] text-[#FF9900] border-2 border-[#FF7A00]/50 px-8 py-4 rounded-full font-bold text-lg hover:border-[#FF7A00] hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg hover:bg-[#FF7A00]/10">
                        <MessageCircle size={20} />
                        WhatsApp
                    </a>
                    <a href="tel:+917075147888" className="w-full sm:w-auto bg-[#140A00] text-[#FF9900] border-2 border-[#FF7A00]/50 px-8 py-4 rounded-full font-bold text-lg hover:border-[#FF7A00] hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg hover:bg-[#FF7A00]/10">
                        <Phone size={20} />
                        +91 7075147888
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ delay: 0.4, duration: 1.2, type: "spring", bounce: 0.4 }}
                    className="flex justify-center gap-6"
                >
                    <a href="https://www.instagram.com/mithra__884?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="p-4 bg-[#140A00] rounded-full shadow-md ring-1 ring-[#FF7A00]/30 text-[#FF9900] hover:text-[#FFB700] hover:scale-110 transition-all hover:bg-[#FF7A00]/10">
                        <Instagram size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/mithra-chada/" target="_blank" rel="noopener noreferrer" className="p-4 bg-[#140A00] rounded-full shadow-md ring-1 ring-[#FF7A00]/30 text-[#FF9900] hover:text-[#FFB700] hover:scale-110 transition-all hover:bg-[#FF7A00]/10">
                        <Linkedin size={24} />
                    </a>
                </motion.div>
            </div>

            <div className="mt-20 text-[#FFD1A6] font-medium text-sm bg-[#0A0500] border border-[#FF7A00]/30 px-6 py-2 rounded-full shadow-[#FF7A00]/5">
                © {new Date().getFullYear()} Mithra Chada. All rights reserved.
            </div>
        </section>
    );
}
