"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WORKS = [
    {
        title: "Rachana Official - Reels",
        role: "Content Creator",
        desc: "Edited YouTube content and Instagram reels focused on audience engagement, strong hooks, and social media retention.",
        img: "/logos/Rachana Logo.jpg",
        borderColor: "border-[#FF9900]/50",
        tags: ["Hook-focused", "Beat-sync"],
        logoClass: "w-32 h-32 md:w-40 md:h-40",
        href: "https://www.instagram.com/rachana._official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    {
        title: "JPS Trainers ",
        role: "Educational YouTube Channel 179k Subscribers",
        desc: "Edited educational YouTube videos prioritizing clarity, structured pacing, and distraction-free visual flow.",
        img: "/logos/JPS Trainers.jpg",
        borderColor: "border-[#FF7A00]/50",
        tags: ["Structured cuts", "Pacing"],
        logoClass: "w-32 h-32 md:w-40 md:h-40",
        href: "https://www.youtube.com/@JPSTrainersJPSRatnam"
    },
    {
        title: "Rachana Shortfilms",
        role: "Narrative Fiction",
        desc: "Narrative short film edit focused on emotional pacing, cinematic tone, and storytelling continuity.",
        img: "/logos/Rachana Logo.jpg",
        borderColor: "border-[#FFB700]/50",
        tags: ["Cinematic tone", "Emotional pacing"],
        logoClass: "w-32 h-32 md:w-40 md:h-40",
        href: "https://www.youtube.com/@Rachanaoffical"
    },
    {
        title: "Faces Theatre Club",
        role: "Promotional Reels & Content",
        desc: "Edited engaging promotional reels and dynamic social media content to capture the energy of live theatrical performances.",
        img: "/logos/FACES Logo.png",
        borderColor: "border-[#FF7A00]/50",
        tags: ["Promotional", "Social media"],
        logoClass: "w-36 h-36 md:w-44 md:h-44",
        href: "https://www.instagram.com/faces_theatre_club/?utm_source=ig_web_button_share_sheet"
    }
];

export function FeaturedWorkSection() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const isScrollingRef = useRef(false);
    const scrollTimeoutRef = useRef<NodeJS.Timeout>(null);

    const scroll = (direction: "left" | "right") => {
        if (carouselRef.current) {
            // Disable repositioning during smooth scroll animation
            isScrollingRef.current = true;
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

            const { clientWidth } = carouselRef.current;
            const scrollAmount = direction === "left" ? -clientWidth * 0.8 : clientWidth * 0.8;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

            // Re-enable repositioning after the smooth scroll finishes (~800ms)
            scrollTimeoutRef.current = setTimeout(() => {
                isScrollingRef.current = false;
                // Now check if we need to reposition
                handleReposition();
            }, 800);
        }
    };

    // Calculate the total number of items to render
    const extendedWorks = [...WORKS, ...WORKS, ...WORKS];

    // Reposition scroll to maintain infinite illusion
    const handleReposition = () => {
        if (!carouselRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const singleSetWidth = scrollWidth / 3;

        // If we scroll past the end of the second set (into the third clone set)
        if (scrollLeft > singleSetWidth * 2 - clientWidth) {
            carouselRef.current.scrollTo({ left: scrollLeft - singleSetWidth, behavior: "instant" as ScrollBehavior });
        }
        // If we scroll backward past the beginning of the second set (into the first clone set)
        else if (scrollLeft < singleSetWidth * 0.5) {
            carouselRef.current.scrollTo({ left: scrollLeft + singleSetWidth, behavior: "instant" as ScrollBehavior });
        }
    };

    // Only reposition when NOT in the middle of a button-triggered smooth scroll
    const handleScroll = () => {
        if (isScrollingRef.current) return;
        handleReposition();
    };

    // Auto-loop every 4 seconds
    const autoScrollTimer = useRef<NodeJS.Timeout>(null);

    const startAutoScroll = () => {
        stopAutoScroll();
        autoScrollTimer.current = setInterval(() => {
            scroll("right");
        }, 4000);
    };

    const stopAutoScroll = () => {
        if (autoScrollTimer.current) {
            clearInterval(autoScrollTimer.current);
        }
    };

    useEffect(() => {
        startAutoScroll();
        return () => stopAutoScroll();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Initial position setup: Jump to the middle set of cards immediately on mount
    useEffect(() => {
        if (carouselRef.current) {
            const { scrollWidth } = carouselRef.current;
            // Jump to the middle block (which starts at 1/3rd of the total scroll width)
            carouselRef.current.scrollTo({ left: scrollWidth / 3, behavior: "instant" as ScrollBehavior });
        }
    }, []);

    return (
        <section id="work" className="relative w-full py-24 px-6 flex flex-col items-center">
            <div className="max-w-6xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-6"
                >
                    <div className="text-center sm:text-left">
                        <h2 className="text-4xl font-bold text-white mb-4">Featured Work</h2>
                        <div className="h-1 w-20 bg-[#FF7A00] rounded-full mx-auto sm:mx-0" />
                    </div>

                    {/* Carousel Navigation Arrows */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => scroll("left")}
                            className="p-3 bg-[#140A00] rounded-full hover:bg-[#FF7A00]/20 text-[#FF9900] ring-1 ring-[#FF7A00]/30 transition-all shadow-lg hover:scale-110 active:scale-95"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="p-3 bg-[#140A00] rounded-full hover:bg-[#FF7A00]/20 text-[#FF9900] ring-1 ring-[#FF7A00]/30 transition-all shadow-lg hover:scale-110 active:scale-95"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </motion.div>

                {/* Carousel Track */}
                <div
                    ref={carouselRef}
                    onScroll={handleScroll}
                    onMouseEnter={stopAutoScroll}
                    onMouseLeave={startAutoScroll}
                    className="flex overflow-x-auto gap-8 pb-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full cursor-grab active:cursor-grabbing"
                >
                    {extendedWorks.map((work, idx) => (
                        <div key={`${work.title}-${idx}`} className="w-[85%] md:w-[calc(50%-1rem)] lg:w-[calc(33.3333%-1.3333rem)] shrink-0">
                            <motion.a
                                href={work.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", bounce: 0.4 }}
                                className="bg-[#0A0500] border border-[#FF7A00]/30 p-6 rounded-[2rem] shadow-2xl shadow-[#FF7A00]/5 hover:-translate-y-2 transition-transform duration-300 ring-1 ring-[#FF7A00]/20 h-full flex flex-col group block"
                            >
                                <div className="bg-[#140A00] rounded-2xl w-full aspect-video mb-6 overflow-hidden flex items-center justify-center relative shrink-0">
                                    <img
                                        src={work.img}
                                        alt={work.title}
                                        className={`${work.logoClass} object-cover rounded-full group-hover:scale-110 transition-all duration-700 drop-shadow-[0_0_15px_rgba(255,122,0,0.3)] ${work.title === "Faces Theatre Club" ? "" : "border-2 border-[#FF7A00]/20"}`}
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{work.title}</h3>
                                <p className="text-sm text-[#FF7A00] font-semibold mb-4">{work.role}</p>
                                <p className="text-gray-400 text-sm mb-6 flex-grow">{work.desc}</p>
                                <ul className="flex justify-start gap-2 flex-wrap pb-2 mt-auto">
                                    {work.tags.map(tag => (
                                        <li key={tag} className="px-3 py-1 bg-[#FF7A00]/10 text-[#FF9900] text-xs rounded-full border border-[#FF7A00]/20">
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </motion.a>
                        </div>
                    ))}
                </div>

                {/* NDA Section below Featured Work */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
                    className="mt-6 w-full p-8 rounded-3xl bg-gradient-to-br from-[#0F0A05] to-[#0A0500] text-white shadow-2xl relative overflow-hidden group border border-[#FF7A00]/20 ring-1 ring-[#FF7A00]/10"
                >
                    <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?q=80&w=2000')] bg-cover mix-blend-overlay pointer-events-none group-hover:opacity-20 transition-opacity duration-700" />

                    <div className="relative z-10 md:flex items-center gap-8">
                        <div className="hidden md:flex flex-shrink-0 w-24 h-24 rounded-full bg-[#140A00] border-2 border-[#FF7A00]/50 items-center justify-center shadow-lg shadow-[#FF7A00]/20">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FFB700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="md:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                </span>
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFB700] to-white">
                                    International Wedding Film — Dubai Client
                                </h3>
                            </div>
                            <p className="text-[#FF7A00] font-medium mb-4 uppercase tracking-widest text-xs">NDA Protected</p>
                            <p className="text-gray-300 max-w-3xl leading-relaxed">
                                Currently editing a cinematic wedding film for an international client. Due to NDA restrictions, the footage cannot be shared publicly. Selected preview clips can be shown privately upon request.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
