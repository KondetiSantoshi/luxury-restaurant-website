'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Compass, Wine, Star } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection({ onOpenReservation }) {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#080706]">
      {/* Background Cinematic Image with Slow Zoom & Vignette */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1.0, opacity: 0.85 }}
        transition={{ duration: 3.5, ease: [0.25, 1, 0.5, 1] }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop"
          alt="Palazzo candlelit salon interior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.72] contrast-[1.08]"
        />

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-[#080706]/40 to-[#080706]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,7,6,0.6)_100%)]" />
      </motion.div>

      {/* Floating Micro Accents */}
      <div className="absolute top-28 sm:top-32 left-6 sm:left-12 z-10 hidden sm:flex items-center gap-3 text-[11px] font-mono tracking-widest uppercase text-[#C5A880]/80 border-l border-[#C5A880]/30 pl-3">
        <Compass className="w-3.5 h-3.5 text-[#DFC295]" />
        <span>45.4297° N, 12.3274° E • Rio de San Trovaso</span>
      </div>

      <div className="absolute top-28 sm:top-32 right-6 sm:right-12 z-10 hidden sm:flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase text-[#A39C90] border-r border-[#C5A880]/30 pr-3">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
        <span>Tonight's Salon: Tables Open</span>
      </div>

      {/* Center Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center mt-12 sm:mt-8">
        {/* Michelin Accolade Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C5A880]/40 bg-[#141210]/60 backdrop-blur-md mb-6"
        >
          <div className="flex text-[#DFC295]">
            {[...Array(3)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-[#DFC295]" />
            ))}
          </div>
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-[#E8E2D5] uppercase font-light">
            Guide Michelin 2026 • 3 Stars
          </span>
        </motion.div>

        {/* Main Heading Reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.18em] uppercase text-[#F7F4EE] leading-none select-none drop-shadow-2xl font-light"
        >
          AURA
        </motion.h1>

        {/* Subtitle with Serif Italic Accent */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 text-sm sm:text-lg md:text-xl font-serif italic text-[#DFC295] max-w-2xl font-normal tracking-wide"
        >
          "Where centuries of Venetian lagoon tradition dissolve into avant-garde culinary alchemy."
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-2 text-xs sm:text-sm font-sans tracking-[0.3em] uppercase text-[#A39C90]"
        >
          Chef Matteo Moretti • Dorsoduro, Venice
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#C5A880] via-[#DFCA9F] to-[#C5A880] text-[#080706] font-sans text-xs tracking-[0.25em] uppercase font-semibold hover:shadow-[0_0_35px_rgba(223,202,159,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Reserve Your Experience
          </button>

          <a
            href="#tasting-menu"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#C5A880]/40 hover:border-[#C5A880] bg-[#12100E]/70 backdrop-blur-md text-[#F7F4EE] hover:text-[#DFC295] font-sans text-xs tracking-[0.25em] uppercase transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Explore The Menu</span>
            <Wine className="w-3.5 h-3.5 text-[#C5A880] group-hover:rotate-12 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <a href="#philosophy" className="flex flex-col items-center gap-2">
          <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#A39C90] group-hover:text-[#C5A880] transition-colors">
            Scroll to Discover
          </span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#C5A880] to-transparent relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 40, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-full h-3 bg-[#DFC295]"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
