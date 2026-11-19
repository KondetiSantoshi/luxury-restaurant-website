'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { REVIEWS } from '../data/restaurantData';
import { Sparkles, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ReviewsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const review = REVIEWS[currentIdx];

  return (
    <section id="reviews" className="relative py-28 sm:py-36 bg-[#0B0908] text-[#F7F4EE] overflow-hidden border-t border-[#1C1815]">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C5A880]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
        {/* Header Tag */}
        <div className="flex items-center justify-center gap-2 text-[#C5A880] text-xs font-mono tracking-[0.25em] uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#DFC295]" />
          <span>Critical Acclaim</span>
        </div>

        {/* Big Quote Symbol */}
        <div className="w-16 h-16 rounded-full border border-[#C5A880]/30 flex items-center justify-center mx-auto mb-8 bg-[#12100E]">
          <Quote className="w-6 h-6 text-[#DFC295]" />
        </div>

        {/* Dynamic Animated Quote */}
        <div className="min-h-[220px] sm:min-h-[180px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl italic text-[#F7F4EE] leading-relaxed max-w-4xl mx-auto font-light">
                "{review.quote}"
              </p>

              <div>
                <span className="font-mono text-xs tracking-widest uppercase text-[#DFC295] block">
                  {review.author}
                </span>
                <span className="font-sans text-xs text-[#A39C90] uppercase tracking-wider mt-1 block">
                  {review.publication} • {review.rating}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators & Controls */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            onClick={() => setCurrentIdx((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length)}
            aria-label="Previous quote"
            className="p-2 rounded-full border border-[#C5A880]/30 text-[#A39C90] hover:text-[#DFC295] hover:border-[#DFC295] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIdx(i)}
                aria-label={`Jump to review ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIdx ? 'w-8 bg-[#DFC295]' : 'w-2 bg-[#2A241F]'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentIdx((prev) => (prev + 1) % REVIEWS.length)}
            aria-label="Next quote"
            className="p-2 rounded-full border border-[#C5A880]/30 text-[#A39C90] hover:text-[#DFC295] hover:border-[#DFC295] transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
