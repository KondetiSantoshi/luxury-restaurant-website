'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ARCHITECTURAL_SPACES } from '../data/restaurantData';
import { Sparkles, Users, Calendar, Check, Compass } from 'lucide-react';

export default function ExperienceSection({ onOpenReservation }) {
  const [activeSpaceId, setActiveSpaceId] = useState(ARCHITECTURAL_SPACES[0].id);
  const activeSpace = ARCHITECTURAL_SPACES.find((s) => s.id === activeSpaceId) || ARCHITECTURAL_SPACES[0];

  return (
    <section id="spaces" className="relative py-28 sm:py-36 bg-[#080706] text-[#F7F4EE] overflow-hidden border-t border-[#1C1815]">
      {/* Background ambient gradient */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#C5A880]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#C5A880]/20 pb-8 mb-16">
          <div>
            <div className="flex items-center gap-2 text-[#C5A880] text-xs font-mono tracking-[0.25em] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#DFC295]" />
              <span>Capitolo IV • Gli Spazi</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-wide font-light">
              Architectural <span className="italic text-[#DFC295]">Sanctuaries</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#A39C90] max-w-xl font-sans">
              From the vaulted 18th-century frescoed salon to subterranean brick wine vaults and canal-level stone terraces.
            </p>
          </div>

          <div className="mt-6 md:mt-0 font-mono text-xs text-[#A39C90] uppercase tracking-widest">
            4 Distinct Ambiences
          </div>
        </div>

        {/* Room Switcher Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {ARCHITECTURAL_SPACES.map((space) => {
            const isActive = space.id === activeSpaceId;
            return (
              <button
                key={space.id}
                onClick={() => setActiveSpaceId(space.id)}
                className={`p-4 rounded-xl border text-left transition-all duration-300 relative overflow-hidden ${
                  isActive
                    ? 'border-[#DFC295] bg-[#181410] shadow-[0_4px_20px_rgba(223,194,149,0.15)]'
                    : 'border-[#2A241F] bg-[#100E0C] hover:border-[#C5A880]/40'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#C5A880] to-[#DFCA9F]" />
                )}
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#C5A880] block mb-1">
                  {space.capacity}
                </span>
                <h3 className="font-serif text-lg text-[#F7F4EE] leading-tight">
                  {space.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Space Hero Showcase */}
        <div className="relative rounded-3xl overflow-hidden border border-[#C5A880]/30 shadow-2xl bg-[#12100E]">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[540px]">
            {/* Visual Canvas (Sticky image with transition) */}
            <div className="lg:col-span-7 relative h-[380px] lg:h-auto overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSpace.id}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeSpace.image}
                    alt={activeSpace.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-transparent to-transparent lg:hidden" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#12100E] hidden lg:block" />
                </motion.div>
              </AnimatePresence>

              {/* Watermark badge */}
              <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-[#080706]/80 backdrop-blur-md border border-[#C5A880]/30 font-mono text-[10px] text-[#DFC295] tracking-widest uppercase flex items-center gap-2">
                <Compass className="w-3 h-3" />
                <span>{activeSpace.period}</span>
              </div>
            </div>

            {/* Room Story & Features */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSpace.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880]">
                      {activeSpace.subtitle}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#F7F4EE] mt-1">
                      {activeSpace.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#A39C90] font-sans font-light leading-relaxed">
                    {activeSpace.atmosphere}
                  </p>

                  {/* Curated space architectural highlights */}
                  <div className="space-y-3 pt-4 border-t border-[#2A241F]">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#DFC295] block">
                      Architectural Attributes
                    </span>
                    <div className="space-y-2">
                      {activeSpace.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs text-[#E8E2D5] font-sans">
                          <div className="w-4 h-4 rounded-full bg-[#C5A880]/15 flex items-center justify-center text-[#DFC295]">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Reservation Button for this space */}
              <div className="pt-8 mt-6 border-t border-[#2A241F] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-[#A39C90]">
                  <Users className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{activeSpace.capacity}</span>
                </div>

                <button
                  onClick={onOpenReservation}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#C5A880] to-[#DFCA9F] text-[#080706] font-sans text-xs uppercase tracking-widest font-semibold hover:shadow-[0_0_20px_rgba(223,194,149,0.3)] transition-all hover:scale-105"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Table in {activeSpace.title.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
