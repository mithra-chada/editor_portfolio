"use client";

import { motion } from "framer-motion";

export function AboutSection() {
    return (
        <section id="about" className="relative w-full py-24 px-6 flex flex-col items-center border-t border-[#FF7A00]/20">
            <div className="max-w-3xl w-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
                    viewport={{ once: false, amount: 0.4 }}
                    className="text-center bg-[#0A0500] p-10 sm:p-16 rounded-[3rem] shadow-2xl border border-[#FF7A00]/30 shadow-[#FF7A00]/5"
                >
                    <h2 className="text-3xl font-bold text-white mb-8">About Mithra</h2>
                    <p className="text-xl text-[#FFD1A6] font-medium leading-relaxed">
                        I’m a video editor specializing in YouTube content, social media reels, and cinematic storytelling. With experience in short films and wedding projects for international clients, I focus on audience engagement, emotional pacing, and clean, purposeful visuals that strengthen the creator’s message.

                        <br /> <br /> With a theatre background and active leadership in university cultural productions, I bring a strong understanding of performance, timing, and collaboration into every edit. I’m currently open to freelance and full-time opportunities where I can contribute value, grow with a team, and create content that truly connects with audiences.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
