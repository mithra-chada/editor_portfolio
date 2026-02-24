"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "DaVinci Resolve", color: "text-[#4DB8FF]", bg: "bg-[#140A00]" },
    { name: "Premiere Pro 2023", color: "text-[#EA77FF]", bg: "bg-[#140A00]" },
    { name: "Filmora", color: "text-[#00E5B5]", bg: "bg-[#140A00]" },
];

export function SkillsSection() {
    return (
        <section className="relative w-full py-24 px-6 flex flex-col items-center">
            <div className="max-w-4xl w-full text-center">
                <h2 className="text-3xl font-bold text-white mb-12">Tools & Arsenal</h2>
                <div className="flex flex-wrap items-center justify-center gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5, scale: 1.05 }}
                            transition={{ delay: index * 0.1, duration: 1.5, type: "spring", bounce: 0.4 }}
                            viewport={{ once: false, amount: 0.2 }}
                            className={`px-8 py-6 rounded-2xl ${skill.bg} border border-[#FF7A00]/30 shadow-2xl flex items-center justify-center ring-1 ring-[#FF7A00]/20 shadow-[#FF7A00]/5`}
                        >
                            <h4 className={`text-xl font-bold ${skill.color}`}>{skill.name}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
