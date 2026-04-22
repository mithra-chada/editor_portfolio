"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STRIP_EASE  = [0.76, 0, 0.24, 1] as const;
const ENTRY_EASE  = [0.22, 1, 0.36, 1] as const;
const NUM_STRIPS  = 7;

interface Props { onComplete: () => void }

export function LoadingScreen({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase]       = useState<"loading" | "exit" | "done">("loading");
  const calledComplete           = useRef(false);

  /* ── Simulated progress counter ──────────────────────────────────────── */
  useEffect(() => {
    let raf: number;
    let startTime: number | null = null;
    const TOTAL = 2400; // ms

    // Non-linear ease: fast → stalls near 88% → jumps to 100
    const easedProgress = (t: number): number => {
      if (t < 0.55) return t * 1.28;              // 0 → ~70%
      if (t < 0.88) return 0.704 + (t - 0.55) * 0.64; // ~70 → ~91%
      return 0.915 + (t - 0.88) * 0.72;           // ~91 → 100%
    };

    const tick = (ts: number) => {
      if (!startTime) startTime = ts;
      const t = Math.min((ts - startTime) / TOTAL, 1);
      setProgress(Math.min(Math.round(easedProgress(t) * 100), 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setPhase("exit"), 380);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  /* ── Strip completion → unmount ──────────────────────────────────────── */
  const handleStripDone = () => {
    if (calledComplete.current) return;
    calledComplete.current = true;
    setPhase("done");
    onComplete();
  };

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[9000] overflow-hidden">

      {/* ── Vertical cover strips ─────────────────────────────────────────
          Always fill the viewport (black = same as page bg during loading).
          On exit, each strip slides downward exposing the real page.       */}
      <div className="absolute inset-0 flex pointer-events-none">
        {Array.from({ length: NUM_STRIPS }).map((_, i) => (
          <motion.div
            key={i}
            className="flex-1 h-full"
            style={{ backgroundColor: "#070707" }}
            initial={{ y: 0 }}
            animate={phase === "exit" ? { y: "100%" } : { y: 0 }}
            transition={{
              duration:  0.72,
              delay:     phase === "exit" ? i * 0.065 : 0,
              ease:      STRIP_EASE,
            }}
            onAnimationComplete={
              i === NUM_STRIPS - 1
                ? () => { if (phase === "exit") handleStripDone(); }
                : undefined
            }
          />
        ))}
      </div>

      {/* ── Centre content (MC + progress) ───────────────────────────────
          Rendered on top of the strips. Fades out as exit begins.         */}
      <AnimatePresence>
        {phase === "loading" && (
          <motion.div
            key="mc-content"
            className="absolute inset-0 flex flex-col items-center justify-center gap-10 pointer-events-none select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(12px)", transition: { duration: 0.35, ease: "easeIn" } }}
            transition={{ duration: 0.55, ease: ENTRY_EASE }}
          >
            {/* Monogram */}
            <div className="flex flex-col items-center">
              <motion.span
                className="block font-playfair font-bold text-white leading-none tracking-[-0.03em]"
                style={{ fontSize: "clamp(88px, 16vw, 160px)" }}
                initial={{ opacity: 0, y: 24, scale: 0.88 }}
                animate={{ opacity: 1, y: 0,  scale: 1    }}
                transition={{ duration: 0.75, delay: 0.1, ease: ENTRY_EASE }}
              >
                MC
              </motion.span>

              {/* Amber underline */}
              <motion.div
                className="mt-3 h-[1.5px] bg-gradient-to-r from-transparent via-[#E07810] to-transparent rounded-full"
                style={{ width: "clamp(80px, 13vw, 140px)" }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.45, ease: ENTRY_EASE }}
              />
            </div>

            {/* Progress bar + counter */}
            <motion.div
              className="flex flex-col items-center gap-3"
              style={{ width: "clamp(100px, 12vw, 160px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55, ease: ENTRY_EASE }}
            >
              {/* Track */}
              <div className="w-full h-px bg-[#1E1710] relative overflow-hidden rounded-full">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#E07810] to-[#E8A020] rounded-full"
                  style={{
                    width: `${progress}%`,
                    transition: "width 50ms linear",
                  }}
                />
              </div>

              {/* Percentage label */}
              <span className="text-[#4A3F34] font-inter text-[11px] tracking-[0.28em] tabular-nums">
                {String(progress).padStart(2, "0")}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
