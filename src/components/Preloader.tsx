import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 1200; // 1.2s loading simulation
    const intervalTime = 15;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setIsDone(true);
        // Let slide-out animation complete before signaling App
        setTimeout(() => {
          onComplete();
        }, 600);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="preloader-container"
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070707] text-white select-none"
        >
          {/* Subtle glowing dark background effect */}
          <div className="absolute inset-x-0 top-0 h-[50vh] bg-gradient-to-b from-[#E31B23]/10 to-transparent blur-[120px] pointer-events-none" />

          <div className="relative flex flex-col items-center max-w-sm w-full px-6">
            {/* Brand Logo and Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-1.5 mb-10"
            >
              <h1 className="text-3xl font-extrabold tracking-tight font-sans text-white uppercase tracking-wider">
                Elumelu<span className="text-[#E31B23]">.</span>
              </h1>
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-3.5 h-3.5 rounded-full bg-[#E31B23] inline-block shadow-[0_0_12px_#E31B23]"
              />
            </motion.div>

            {/* Custom Modern Progress Loading Bar */}
            <div className="w-full h-[3px] bg-zinc-800 rounded-full overflow-hidden relative mb-4">
              <motion.div
                className="h-full bg-[#E31B23] rounded-full shadow-[0_0_8px_#E31B23]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Progress Percentage & Subtext */}
            <div className="flex justify-between items-center w-full text-xs font-mono text-zinc-400">
              <motion.span>AFRICAPITALISM ADVOCACY</motion.span>
              <span className="text-white font-semibold text-sm">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
