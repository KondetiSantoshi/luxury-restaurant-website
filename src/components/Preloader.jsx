'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Smooth counter animation
    const startTime = Date.now();
    const duration = 2200; // 2.2 seconds luxury introduction

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(rawProgress);

      if (rawProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          onComplete?.();
        }, 400);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            transition: { duration: 1.1, ease: [0.77, 0, 0.175, 1] } 
          }}
          className="fixed inset-0 z-[10000] flex flex-col justify-between bg-[#080706] p-8 sm:p-12 md:p-16 select-none"
        >
          {/* Subtle noise background texture simulation */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Top Bar */}
          <div className="flex items-center justify-between text-[#A39C90] text-xs font-mono tracking-widest uppercase">
            <span>Dorsoduro • Venezia</span>
            <span>Est. 1894</span>
          </div>

          {/* Center Brand Identity */}
          <div className="flex flex-col items-center justify-center text-center my-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mb-6"
            >
              <div className="w-16 h-16 rounded-full border border-[#C5A880]/30 flex items-center justify-center mb-4 mx-auto">
                <span className="font-serif text-2xl text-[#C5A880] italic">A</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-[0.25em] text-[#F7F4EE] uppercase font-light">
                AURA
              </h1>
              <p className="mt-3 text-xs sm:text-sm tracking-[0.3em] font-sans text-[#C5A880] uppercase">
                Modern Haute Gastronomy
              </p>
            </motion.div>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xs italic text-[#A39C90] font-serif max-w-sm"
            >
              "Where water, fire, and lagoon terroir converge into memory."
            </motion.p>
          </div>

          {/* Bottom Progress Counter */}
          <div className="w-full flex items-end justify-between border-t border-[#C5A880]/20 pt-6">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-ping" />
              <span className="font-mono text-xs text-[#A39C90] tracking-widest">
                PREPARING THE SALON
              </span>
            </div>

            <div className="flex items-baseline gap-1 font-mono text-[#F7F4EE]">
              <span className="text-3xl sm:text-4xl font-light tracking-tighter">
                {String(progress).padStart(3, '0')}
              </span>
              <span className="text-xs text-[#C5A880]">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
