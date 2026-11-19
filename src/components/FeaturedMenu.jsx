'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TASTING_MENUS } from '../data/restaurantData';
import { Sparkles, Wine, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export default function FeaturedMenu({ onSelectMenu }) {
  const [selectedId, setSelectedId] = useState('grand-tasting');

  return (
    <section className="relative py-28 sm:py-36 bg-[#0B0908] text-[#F7F4EE] overflow-hidden border-t border-[#1C1815]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#C5A880]/20 pb-8 mb-16">
          <div>
            <div className="flex items-center gap-2 text-[#C5A880] text-xs font-mono tracking-[0.25em] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#DFC295]" />
              <span>Capitolo V • I Nostri Percorsi</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-wide font-light">
              Tasting Menu <span className="italic text-[#DFC295]">Experiences</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#A39C90] max-w-xl font-sans">
              Choose your sensory journey through the Venetian lagoon. Complete wine cellar pairings curated by Head Sommelier Elena Rossi.
            </p>
          </div>

          <div className="mt-6 md:mt-0 font-mono text-xs text-[#A39C90] uppercase tracking-widest">
            Autumn 2026 Season
          </div>
        </div>

        {/* 3 Menu Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TASTING_MENUS.map((menu, index) => {
            const isFeatured = menu.id === 'grand-tasting';
            return (
              <motion.div
                key={menu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 group ${
                  isFeatured
                    ? 'bg-[#181410] border-2 border-[#DFC295] shadow-[0_10px_40px_rgba(197,168,128,0.2)]'
                    : 'bg-[#12100E] border border-[#C5A880]/20 hover:border-[#C5A880]/60'
                }`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#C5A880] to-[#DFCA9F] text-[#080706] font-mono text-[10px] tracking-widest uppercase font-bold shadow-md">
                    Most Celebrated Experience
                  </div>
                )}

                <div>
                  {/* Top info */}
                  <div className="flex items-center justify-between border-b border-[#2A241F] pb-4 mb-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880]">
                      Menu 0{index + 1}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#A39C90]">
                      <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>{menu.duration}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-3xl text-[#F7F4EE] group-hover:text-[#DFC295] transition-colors leading-tight">
                    {menu.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#A39C90] font-sans font-light leading-relaxed">
                    {menu.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="font-serif text-4xl sm:text-5xl text-[#DFC295] font-light">
                      {menu.price}
                    </span>
                    <span className="font-mono text-xs text-[#A39C90] uppercase tracking-wider">
                      / guest
                    </span>
                  </div>

                  {/* Wine pairing */}
                  <div className="mt-3 flex items-start gap-2 text-xs text-[#A39C90] font-sans">
                    <Wine className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                    <span>Cellar Pairing: {menu.pairingPrice}</span>
                  </div>

                  {/* Highlights list */}
                  <div className="mt-8 pt-6 border-t border-[#2A241F] space-y-3">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-[#C5A880] block">
                      Course Highlights
                    </span>
                    {menu.highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-[#E8E2D5]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-10 pt-6 border-t border-[#2A241F]">
                  <p className="text-[11px] text-[#A39C90] italic font-serif mb-4">
                    "{menu.recommendedFor}"
                  </p>
                  <button
                    onClick={() => onSelectMenu(menu)}
                    className={`w-full py-3.5 px-6 rounded-full flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                      isFeatured
                        ? 'bg-gradient-to-r from-[#C5A880] to-[#DFCA9F] text-[#080706] hover:brightness-110 shadow-lg'
                        : 'border border-[#C5A880]/40 bg-[#1A1612] text-[#F7F4EE] hover:bg-[#C5A880] hover:text-[#080706]'
                    }`}
                  >
                    <span>Reserve {menu.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
