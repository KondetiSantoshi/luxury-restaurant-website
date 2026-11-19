'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { TASTING_COURSES } from '../data/restaurantData';
import { ChevronLeft, ChevronRight, Wine, Sparkles, RotateCw, AlertCircle } from 'lucide-react';

export default function TurntableMenu({ onOpenReservation }) {
  const [activeIndex, setActiveIndex] = useState(2); // Start on signature Truffle Risotto (idx 2)
  const [autoRotate, setAutoRotate] = useState(false);
  const activeCourse = TASTING_COURSES[activeIndex];
  const timerRef = useRef(null);

  // Auto-rotate idle loop
  useEffect(() => {
    if (!autoRotate) return;
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TASTING_COURSES.length);
    }, 4500);

    return () => clearInterval(timerRef.current);
  }, [autoRotate]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TASTING_COURSES.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TASTING_COURSES.length) % TASTING_COURSES.length);
  };

  return (
    <section id="tasting-menu" className="relative py-28 sm:py-36 bg-[#080706] text-[#F7F4EE] overflow-hidden border-t border-[#1C1815]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#C5A880]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#C5A880]/20 pb-8 mb-16">
          <div>
            <div className="flex items-center gap-2 text-[#C5A880] text-xs font-mono tracking-[0.25em] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#DFC295]" />
              <span>Capitolo II • Il Tavolo Girevole</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-wide font-light">
              The Grand Autumn <span className="italic text-[#DFC295]">Degustation</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#A39C90] max-w-xl font-sans">
              Interact with our rotating walnut table. Select a course to reveal seasonal provenance, culinary technique, and curated vintage wine pairings.
            </p>
          </div>

          {/* Controls */}
          <div className="mt-6 md:mt-0 flex items-center gap-4">
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono tracking-widest uppercase transition-all ${
                autoRotate
                  ? 'border-[#DFC295] bg-[#C5A880]/20 text-[#DFC295]'
                  : 'border-[#C5A880]/30 text-[#A39C90] hover:text-[#C5A880]'
              }`}
            >
              <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} />
              <span>{autoRotate ? 'Auto: ON' : 'Auto Rotate'}</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous course"
                className="w-10 h-10 rounded-full border border-[#C5A880]/30 hover:border-[#DFC295] bg-[#12100E] flex items-center justify-center text-[#E8E2D5] hover:text-[#DFC295] transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next course"
                className="w-10 h-10 rounded-full border border-[#C5A880]/30 hover:border-[#DFC295] bg-[#12100E] flex items-center justify-center text-[#E8E2D5] hover:text-[#DFC295] transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Turntable Dial Navigation Bar */}
        <div className="flex items-center justify-between overflow-x-auto pb-4 mb-12 border-b border-[#2A241F] no-scrollbar">
          {TASTING_COURSES.map((course, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={course.id}
                onClick={() => setActiveIndex(idx)}
                className={`relative px-4 py-2 font-mono text-xs uppercase tracking-widest transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${
                  isActive ? 'text-[#DFC295]' : 'text-[#A39C90]/70 hover:text-[#E8E2D5]'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full transition-all ${
                  isActive ? 'bg-[#DFC295] scale-125' : 'bg-transparent border border-[#A39C90]/50'
                }`} />
                <span>{course.courseNumber}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C5A880] to-[#DFCA9F]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Main Turntable Display & Sommelier Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: The Rotating Plate Showcase */}
          <div
            data-cursor="drag"
            className="lg:col-span-6 relative flex items-center justify-center min-h-[420px] sm:min-h-[500px]"
          >
            {/* Walnut turntable table ring */}
            <div className="relative w-72 sm:w-96 md:w-[440px] aspect-square rounded-full border-2 border-[#C5A880]/20 bg-[radial-gradient(ellipse_at_center,#221A14_0%,#0D0B09_70%)] shadow-[0_0_60px_rgba(0,0,0,0.8)] flex items-center justify-center p-6">
              {/* Decorative concentric gold ring */}
              <div className="absolute inset-4 rounded-full border border-[#C5A880]/15" />
              <div className="absolute inset-8 rounded-full border border-dashed border-[#C5A880]/10" />

              {/* Course Plate with Animated Reveal */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCourse.id}
                  initial={{ opacity: 0, scale: 0.85, rotate: -15 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotate: 15 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-60 sm:w-80 md:w-84 aspect-square rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] border-4 border-[#1A1612]"
                >
                  <Image
                    src={activeCourse.image}
                    alt={activeCourse.italianTitle}
                    fill
                    sizes="(max-width: 768px) 240px, 340px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080706]/60 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Floating accent badge on turntable */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#12100E]/90 border border-[#C5A880]/40 backdrop-blur-md">
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#DFC295]">
                  {activeCourse.accent}
                </span>
              </div>
            </div>

            {/* Orbiting miniature previews of adjacent courses */}
            <div className="hidden sm:block absolute -left-4 top-1/2 -translate-y-1/2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer" onClick={handlePrev}>
              <div className="w-16 h-16 rounded-full overflow-hidden border border-[#C5A880]/30">
                <Image
                  src={TASTING_COURSES[(activeIndex - 1 + TASTING_COURSES.length) % TASTING_COURSES.length].image}
                  alt="Previous dish"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="hidden sm:block absolute -right-4 top-1/2 -translate-y-1/2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer" onClick={handleNext}>
              <div className="w-16 h-16 rounded-full border border-[#C5A880]/30 overflow-hidden">
                <Image
                  src={TASTING_COURSES[(activeIndex + 1) % TASTING_COURSES.length].image}
                  alt="Next dish"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right: Plate Notes, Technique & Wine Pairing */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCourse.id}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Course Metadata Tag */}
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded bg-[#2A221B] border border-[#C5A880]/30 font-mono text-xs text-[#DFC295] tracking-widest uppercase">
                    {activeCourse.courseNumber}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#A39C90]">
                    {activeCourse.category}
                  </span>
                  <span className="font-mono text-xs text-[#A39C90] ml-auto">
                    {activeCourse.prepTime}
                  </span>
                </div>

                {/* Dish Titles */}
                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#F7F4EE] leading-tight">
                    {activeCourse.italianTitle}
                  </h3>
                  <p className="mt-1 font-serif italic text-lg text-[#C5A880]">
                    {activeCourse.englishTitle}
                  </p>
                </div>

                {/* Dish Description */}
                <p className="text-sm sm:text-base text-[#A39C90] font-sans font-light leading-relaxed">
                  {activeCourse.description}
                </p>

                {/* Sommelier Vintage Wine Pairing Box */}
                <div className="p-6 rounded-2xl bg-[#14120F] border border-[#C5A880]/30 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[#C5A880]/5 rounded-bl-full pointer-events-none" />

                  <div className="flex items-center gap-2.5 text-[#DFC295] text-xs font-mono tracking-widest uppercase mb-2">
                    <Wine className="w-4 h-4 text-[#DFC295]" />
                    <span>Sommelier Cellar Pairing</span>
                  </div>

                  <h4 className="font-serif text-xl sm:text-2xl text-[#F7F4EE]">
                    {activeCourse.sommelierPairing.wine}
                  </h4>
                  <p className="text-xs font-mono text-[#C5A880] tracking-wider mt-0.5">
                    {activeCourse.sommelierPairing.origin}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-[#A39C90] italic font-serif leading-relaxed">
                    "{activeCourse.sommelierPairing.notes}"
                  </p>
                </div>

                {/* Allergens & CTA Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#2A241F]">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-3.5 h-3.5 text-[#A39C90]" />
                    <span className="font-mono text-[11px] text-[#A39C90] uppercase tracking-wider">
                      Allergens: {activeCourse.allergens.join(", ")}
                    </span>
                  </div>

                  <button
                    onClick={onOpenReservation}
                    className="px-6 py-2.5 rounded-full border border-[#C5A880]/40 hover:border-[#C5A880] bg-[#1A1612] hover:bg-[#C5A880] text-[#E8E2D5] hover:text-[#080706] font-sans text-xs tracking-widest uppercase font-medium transition-all duration-300"
                  >
                    Experience This Menu
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
