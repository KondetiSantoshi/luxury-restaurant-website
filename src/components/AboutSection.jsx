'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Shield, Flame, Clock } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      icon: Shield,
      title: "Venetian Lineage",
      subtitle: "Since 1894",
      desc: "Housed inside a preserved 18th-century canal residence where Venetian aristocrats gathered for private banquets."
    },
    {
      icon: Flame,
      title: "Woodfire Hearth",
      subtitle: "Almond & Olive Embers",
      desc: "Every cut of meat and lagoon crustacean meets open flame and charcoal heat, imparting nuanced ethereal smoke."
    },
    {
      icon: Clock,
      title: "Subterranean Vault",
      subtitle: "14,200 Vintage Bottles",
      desc: "Fourteen centuries of masonry temperature cellaring verticals of Barolo, Brunello, and Grand Cru Burgundies."
    }
  ];

  return (
    <section id="philosophy" className="relative py-28 sm:py-36 bg-[#080706] text-[#F7F4EE] overflow-hidden border-t border-[#1C1815]">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header Tag */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#C5A880]/20 pb-6 mb-16 sm:mb-24">
          <div>
            <div className="flex items-center gap-2 text-[#C5A880] text-xs font-mono tracking-[0.25em] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#DFC295]" />
              <span>Capitolo I • La Filosofia</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-wide font-light text-[#F7F4EE]">
              An Homage to Venice, <br className="hidden sm:inline" />
              <span className="italic text-[#DFC295]">Sculpted by Salt & Fire</span>
            </h2>
          </div>
          <div className="mt-6 sm:mt-0 font-mono text-xs text-[#A39C90] tracking-widest uppercase">
            Est. 1894 • Dorsoduro, Venice
          </div>
        </div>

        {/* Narrative & Dual Imagery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Composition (Dual overlapping luxury images) */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9 }}
              className="relative w-full h-[460px] sm:h-[540px] rounded-2xl overflow-hidden border border-[#C5A880]/20 shadow-2xl group"
            >
              <Image
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop"
                alt="Chef preparing dish with tweezers at counter"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#12100E]/80 backdrop-blur-md border border-[#C5A880]/30">
                <p className="font-serif italic text-sm text-[#DFC295]">
                  "Cooking in Venice is not about reinventing nature; it is about listening to the tide and honouring the woodfire."
                </p>
                <p className="font-mono text-[10px] text-[#A39C90] mt-1 tracking-widest uppercase">
                  Matteo Moretti • Executive Chef
                </p>
              </div>
            </motion.div>

            {/* Overlapping Secondary Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="hidden sm:block absolute -bottom-10 -right-8 w-60 h-72 rounded-xl overflow-hidden border-2 border-[#C5A880]/40 shadow-2xl z-20"
            >
              <Image
                src="https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=800&auto=format&fit=crop"
                alt="Tasting course plating"
                fill
                sizes="240px"
                className="object-cover brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080706]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <span className="font-mono text-[9px] tracking-widest uppercase text-[#DFC295] bg-[#080706]/80 px-2 py-1 rounded">
                  7-Year Riserva Truffle
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Text Storytelling */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#C5A880]">
              The Craft of Slow Dining
            </span>

            <h3 className="font-serif text-3xl sm:text-4xl text-[#F7F4EE] leading-snug">
              Every dish is an intimate dialogue between the lagoon's brine and the mountain's earth.
            </h3>

            <p className="text-sm sm:text-base text-[#A39C90] font-sans font-light leading-relaxed">
              At AURA, time slows to the rhythm of the Adriatic tides. Under the guidance of Chef Matteo Moretti, we source exclusively from day-boat artisans in Chioggia, heirloom market gardeners on the island of Sant’Erasmo, and small-batch biodynamic vintners across Northern Italy.
            </p>

            <p className="text-sm sm:text-base text-[#A39C90] font-sans font-light leading-relaxed">
              Our tasting menu is not simply eaten; it is experienced in courses designed to awaken the senses—accompanied by rare cellar vintages poured into hand-blown Murano and Austrian Zalto crystal.
            </p>

            {/* Key Metrics / Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#2A241F]">
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#DFC295] font-light">3</span>
                <p className="font-mono text-[10px] tracking-widest uppercase text-[#A39C90] mt-1">
                  Michelin Stars
                </p>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#DFC295] font-light">14K</span>
                <p className="font-mono text-[10px] tracking-widest uppercase text-[#A39C90] mt-1">
                  Cellar Bottles
                </p>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#DFC295] font-light">8</span>
                <p className="font-mono text-[10px] tracking-widest uppercase text-[#A39C90] mt-1">
                  Seats at Hearth
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative p-8 rounded-2xl bg-[#12100E] border border-[#C5A880]/15 hover:border-[#C5A880]/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
              >
                <div className="w-12 h-12 rounded-full border border-[#C5A880]/30 flex items-center justify-center mb-6 group-hover:border-[#DFC295] group-hover:bg-[#C5A880]/10 transition-colors">
                  <Icon className="w-5 h-5 text-[#C5A880] group-hover:text-[#DFC295]" />
                </div>
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#C5A880]/80">
                  {pillar.subtitle}
                </span>
                <h4 className="font-serif text-2xl text-[#F7F4EE] mt-1 mb-3 group-hover:text-[#DFC295] transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#A39C90] font-sans font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
