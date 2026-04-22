"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────
const SHOWREELS = [
    {
        title: "Show Video 1",
        src: "https://www.youtube.com/embed/bksG-YATc30?rel=0",
        description: "Cinematic teaser edit with dynamic pacing and immersive visual storytelling.",
    },
    {
        title: "Show Video 2",
        src: "https://www.youtube.com/embed/gV3yitrCbDM?rel=0",
        description: "Short film edit balancing emotional arcs, continuity and cinematic rhythm.",
    },
    {
        title: "Show Video 3",
        src: "https://www.youtube.com/embed/okwaPE387u4?rel=0",
        description: "A simple narrative animation video crafted with Google Flow and Veo.",
    },
    {
        title: "Show Video 4",
        src: "https://www.youtube.com/embed/Px7iEI6qSyw?rel=0",
        description: "Social media reel with rapid cuts, strong hooks and action-driven pacing.",
    },
    {
        title: "Show Video 5",
        src: "https://www.youtube.com/embed/ru1LZFnSPyo?rel=0",
        description: "High-energy short-form content with precise beat-sync transitions.",
    },
];

// ─── ShowreelCard (YouTube iframe player) ───────────────────────────────────
function ShowreelCard({ reel, index }: { reel: typeof SHOWREELS[number]; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.1, type: "spring", bounce: 0.3 }}
            className="w-[90%] md:w-[calc(50%-1rem)] lg:w-[calc(50%-1rem)] shrink-0 flex flex-col"
        >
            {/* Video Card */}
            <div className="w-full aspect-video rounded-2xl overflow-hidden bg-[#050505] shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-[#E07810]/20 relative">
                <iframe
                    className="w-full h-full absolute top-0 left-0"
                    src={reel.src}
                    title={reel.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>

            {/* Title & Description below card */}
            <div className="mt-4 px-1">
                <h3 className="text-lg font-bold text-white mb-1">{reel.title}</h3>
                <p className="text-gray-400 text-sm">{reel.description}</p>
            </div>
        </motion.div>
    );
}

// ─── ShowreelSection (parent carousel) ──────────────────────────────────────
export function ShowreelSection() {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (carouselRef.current) {
            const { clientWidth, scrollLeft, scrollWidth } = carouselRef.current;

            // Wrap-around logic
            if (direction === "right" && scrollLeft + clientWidth >= scrollWidth - 10) {
                carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
                return;
            }
            if (direction === "left" && scrollLeft <= 10) {
                carouselRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
                return;
            }

            const scrollAmount = direction === "left" ? -clientWidth * 0.55 : clientWidth * 0.55;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section id="showreel" className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-24 scroll-mt-32 z-20">
            {/* Header + Navigation */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                className="mb-10 w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-6"
            >
                <div className="text-center sm:text-left">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-playfair tracking-wide">Featured Showreel</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-[#E07810] to-[#CC7A10] mx-auto sm:mx-0 rounded-full shadow-[0_0_10px_rgba(255,122,0,0.5)]" />
                </div>

                {/* Carousel Navigation Arrows */}
                <div className="flex gap-4">
                    <button
                        onClick={() => scroll("left")}
                        className="p-3 bg-[#140A00] rounded-full hover:bg-[#E07810]/20 text-[#CC7A10] ring-1 ring-[#E07810]/30 transition-all shadow-lg hover:scale-110 active:scale-95"
                        aria-label="Previous showreel"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="p-3 bg-[#140A00] rounded-full hover:bg-[#E07810]/20 text-[#CC7A10] ring-1 ring-[#E07810]/30 transition-all shadow-lg hover:scale-110 active:scale-95"
                        aria-label="Next showreel"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </motion.div>

            {/* Carousel Track */}
            <div
                ref={carouselRef}
                className="flex overflow-x-auto gap-8 pb-6 w-full max-w-6xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
                {SHOWREELS.map((reel, idx) => (
                    <ShowreelCard key={reel.title} reel={reel} index={idx} />
                ))}
            </div>
        </section>
    );
}
