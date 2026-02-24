"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, FastForward, Rewind, Volume2, VolumeX, Maximize, ChevronLeft, ChevronRight } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────
const SHOWREELS = [
    {
        title: "Show Video 1",
        src: "/videos/MBI tease V4.mov",
        description: "Cinematic teaser edit with dynamic pacing and visual storytelling.",
    },
    {
        title: "Show Video 2",
        src: "/videos/Bhiksha Final.mov",
        description: "Shortfilm edit with visual storytelling emotional arcs.",
    },
    {
        title: "Show Video 3",
        src: "/videos/V5.mov",
        description: "Short form content with beat synced transitions.",
    },
    {
        title: "Show Video 4",
        src: "/videos/The fight.mov",
        description: "Social media reel with fast cuts and engaging hooks.",
    },
];

// ─── ShowreelCard (self-contained video player) ─────────────────────────────
function ShowreelCard({ reel, index }: { reel: typeof SHOWREELS[number]; index: number }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [showControls, setShowControls] = useState(true);

    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const controlsTimeoutRef = useRef<NodeJS.Timeout>(null);

    const resetControlsTimeout = useCallback(() => {
        setShowControls(true);
        if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
        if (isPlaying) {
            controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 3000);
        }
    }, [isPlaying]);

    useEffect(() => {
        resetControlsTimeout();
        return () => {
            if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
        };
    }, [isPlaying, resetControlsTimeout]);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const current = videoRef.current.currentTime;
            const total = videoRef.current.duration;
            setCurrentTime(current);
            setDuration(total);
            setProgress((current / total) * 100);
        }
    };

    const handleProgressScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
        const manualChange = Number(e.target.value);
        if (videoRef.current) {
            const newTime = (manualChange / 100) * duration;
            videoRef.current.currentTime = newTime;
            setProgress(manualChange);
            setCurrentTime(newTime);
        }
    };

    const skip = (amount: number) => {
        if (videoRef.current) {
            videoRef.current.currentTime += amount;
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
            if (isMuted && volume === 0) setVolume(0.5);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = Number(e.target.value);
        setVolume(newVolume);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
            if (newVolume === 0) {
                setIsMuted(true);
                videoRef.current.muted = true;
            } else {
                setIsMuted(false);
                videoRef.current.muted = false;
            }
        }
    };

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    };

    const formatTime = (timeInSeconds: number) => {
        if (isNaN(timeInSeconds)) return "00:00";
        const mins = Math.floor(timeInSeconds / 60);
        const secs = Math.floor(timeInSeconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.1, type: "spring", bounce: 0.3 }}
            className="w-[90%] md:w-[calc(50%-1rem)] lg:w-[calc(50%-1rem)] shrink-0 flex flex-col"
        >
            {/* Video Card */}
            <div
                ref={containerRef}
                className="w-full aspect-video rounded-2xl overflow-hidden bg-[#050505] shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative group border border-[#FF7A00]/20"
                onMouseMove={resetControlsTimeout}
                onMouseLeave={() => isPlaying && setShowControls(false)}
            >
                <video
                    ref={videoRef}
                    className="w-full h-full object-contain cursor-pointer bg-black"
                    src={reel.src}
                    onClick={togglePlay}
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={() => setIsPlaying(false)}
                    playsInline
                />

                {/* Play Overlay */}
                {!isPlaying && progress === 0 && (
                    <div
                        className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center cursor-pointer backdrop-blur-sm z-10 transition-all duration-500"
                        onClick={togglePlay}
                    >
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-br from-[#FF7A00] to-[#FF9900] w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,122,0,0.4)] text-[#050505]"
                        >
                            <Play fill="currentColor" size={28} className="ml-1" />
                        </motion.div>
                    </div>
                )}

                {/* Custom Controls UI */}
                <AnimatePresence>
                    {showControls && (
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            transition={{ duration: 0.3 }}
                            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-16 pb-4 px-4 z-20 flex flex-col"
                        >
                            {/* Progress Bar */}
                            <div className="flex items-center gap-3 mb-3 group/progress">
                                <span className="text-gray-300 text-xs font-inter min-w-[38px]">{formatTime(currentTime)}</span>
                                <div className="relative flex-1 h-3 flex items-center cursor-pointer">
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={progress}
                                        onChange={handleProgressScrub}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-30"
                                    />
                                    <div className="w-full h-1 bg-gray-600/50 rounded-full relative overflow-hidden z-10">
                                        <div
                                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FF7A00] to-[#FF9900]"
                                            style={{ width: `${progress}%` }}
                                        />
                                    </div>
                                    <div
                                        className="absolute h-3 w-3 bg-[#FFB700] rounded-full shadow-lg z-20 opacity-0 group-hover/progress:opacity-100 transition-opacity transform -translate-x-1/2 pointer-events-none"
                                        style={{ left: `${progress}%` }}
                                    />
                                </div>
                                <span className="text-gray-300 text-xs font-inter min-w-[38px]">{formatTime(duration)}</span>
                            </div>

                            {/* Control Buttons */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <button onClick={togglePlay} className="text-white hover:text-[#FF9900] transition-colors hover:scale-110 active:scale-95">
                                        {isPlaying ? <Pause fill="currentColor" size={22} /> : <Play fill="currentColor" size={22} />}
                                    </button>

                                    <div className="flex items-center gap-3 border-l border-gray-700 pl-4 ml-1">
                                        <button onClick={() => skip(-10)} className="text-gray-300 hover:text-white transition-colors hover:scale-110 active:scale-95" title="Rewind 10s">
                                            <Rewind size={18} />
                                        </button>
                                        <button onClick={() => skip(10)} className="text-gray-300 hover:text-white transition-colors hover:scale-110 active:scale-95" title="Skip 10s">
                                            <FastForward size={18} />
                                        </button>
                                    </div>

                                    <div className="flex items-center gap-2 border-l border-gray-700 pl-4 ml-1 group/volume">
                                        <button onClick={toggleMute} className="text-gray-300 hover:text-white transition-colors hover:scale-110 active:scale-95">
                                            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                                        </button>
                                        <input
                                            type="range"
                                            min="0"
                                            max="1"
                                            step="0.01"
                                            value={isMuted ? 0 : volume}
                                            onChange={handleVolumeChange}
                                            className="w-0 opacity-0 group-hover/volume:w-20 group-hover/volume:opacity-100 transition-all duration-300 origin-left accent-[#FF7A00] h-1 bg-gray-700 rounded-lg cursor-pointer"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button onClick={toggleFullScreen} className="text-gray-300 hover:text-white transition-colors hover:scale-110 active:scale-95">
                                        <Maximize size={18} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
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
                    <div className="h-1 w-24 bg-gradient-to-r from-[#FF7A00] to-[#FF9900] mx-auto sm:mx-0 rounded-full shadow-[0_0_10px_rgba(255,122,0,0.5)]" />
                </div>

                {/* Carousel Navigation Arrows */}
                <div className="flex gap-4">
                    <button
                        onClick={() => scroll("left")}
                        className="p-3 bg-[#140A00] rounded-full hover:bg-[#FF7A00]/20 text-[#FF9900] ring-1 ring-[#FF7A00]/30 transition-all shadow-lg hover:scale-110 active:scale-95"
                        aria-label="Previous showreel"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="p-3 bg-[#140A00] rounded-full hover:bg-[#FF7A00]/20 text-[#FF9900] ring-1 ring-[#FF7A00]/30 transition-all shadow-lg hover:scale-110 active:scale-95"
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
