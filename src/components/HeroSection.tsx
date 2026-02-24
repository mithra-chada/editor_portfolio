"use client";

import { motion } from "framer-motion";
import { useLenis } from "lenis/react";

export function HeroSection() {
    const lenis = useLenis();

    const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
        e.preventDefault();
        if (lenis) {
            lenis.scrollTo(target);
        } else {
            document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
            {/* Unified Single Box Layout (overflow hidden to cut off feet) */}
            <div className="max-w-6xl w-full bg-[#0A0500] p-10 sm:p-16 lg:p-20 rounded-[3rem] shadow-2xl border border-[#FF7A00]/30 shadow-[#FF7A00]/10 flex flex-col-reverse lg:flex-row items-center justify-between relative z-10 mt-16 lg:mt-0 overflow-hidden">

                {/* Subtle background glow inside the main box */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/5 to-transparent pointer-events-none rounded-[3rem]"></div>

                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left relative z-30 w-full lg:w-3/5 lg:pr-10 -mt-6 lg:-mt-16">
                    <motion.h1
                        className="text-7xl md:text-8xl lg:text-9xl font-playfair font-bold text-white mb-4 leading-none drop-shadow-md relative z-30 tracking-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Mithra Chada
                    </motion.h1>

                    <motion.h2
                        className="text-2xl md:text-3xl lg:text-4xl text-google-blue mb-8 uppercase drop-shadow-sm font-bold relative z-30 max-w-lg mx-auto lg:mx-0 tracking-wide font-playfair"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        Video Editor for YouTube, Reels & Cinematic Stories
                    </motion.h2>

                    <motion.p
                        className="text-lg md:text-xl text-gray-300 font-medium mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-inter relative z-30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        Turning raw footage into engaging stories that retain viewers and elevate brands.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 font-inter relative z-30"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <a href="#showreel" onClick={(e) => scrollTo(e, "#showreel")} className="bg-gradient-to-r from-[#FF7A00] to-[#FF9900] text-[#050505] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-[#FF7A00]/20 hover:shadow-[#FF7A00]/50 text-center tracking-tight">
                            View Showreel
                        </a>
                        <a href="#contact" onClick={(e) => scrollTo(e, "#contact")} className="bg-[#140A00] text-[#FF9900] border-2 border-[#FF7A00]/50 px-8 py-4 rounded-full font-bold text-lg hover:border-[#FF7A00] hover:text-[#FFB700] hover:scale-105 transition-all text-center hover:bg-[#FF7A00]/10 tracking-tight">
                            Contact Me
                        </a>
                    </motion.div>
                </div>

                {/* Hero Cutout Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, type: "spring", bounce: 0.4 }}
                    className="w-full relative z-0 flex justify-center items-end lg:absolute lg:right-0 lg:bottom-0 lg:h-[135%] lg:w-1/2 pt-10 lg:pt-0 pointer-events-none"
                >
                    <img
                        src="/hero-image.png?v=5"
                        alt="Mithra Chada - Video Editor"
                        className="relative z-0 object-contain object-bottom w-[110%] max-w-[360px] lg:max-w-none lg:w-[130%] h-[420px] lg:h-[95%] drop-shadow-[0_20px_50px_rgba(255,122,0,0.15)] hover:scale-[1.05] transition-transform duration-700 ease-out origin-bottom lg:origin-bottom-right pointer-events-auto lg:-mr-4 lg:mb-[-2rem] translate-y-28 lg:translate-y-48"
                    />
                </motion.div>

            </div>
        </section>
    );
}
