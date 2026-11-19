'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Globe, Share2, Compass, Award, Mail, Sparkles, Check } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060504] text-[#F7F4EE] pt-24 pb-12 overflow-hidden border-t border-[#1C1815]">
      {/* Decorative top gold monogram glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-[#C5A880]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        {/* Top Accolades Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pb-16 border-b border-[#2A241F]">
          {RESTAURANT_INFO.accolades.map((acc, i) => (
            <div key={i} className="flex flex-col items-center text-center p-4 rounded-2xl bg-[#0D0B0A] border border-[#C5A880]/15">
              <Award className="w-5 h-5 text-[#DFC295] mb-2" />
              <span className="font-serif text-lg text-[#F7F4EE] leading-tight">
                {acc.title}
              </span>
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#A39C90] mt-1">
                {acc.subtitle}
              </span>
            </div>
          ))}
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-16 border-b border-[#2A241F]">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C5A880]/40 flex items-center justify-center">
                <span className="font-serif text-lg italic text-[#C5A880]">A</span>
              </div>
              <span className="font-serif text-3xl tracking-[0.2em] uppercase text-[#F7F4EE]">
                AURA
              </span>
            </div>

            <p className="text-sm font-sans font-light text-[#A39C90] max-w-sm leading-relaxed">
              Three Michelin-starred haute cuisine born of Venetian lagoon terroir, woodfire hearths, and centuries of architectural refinement.
            </p>

            <div className="flex items-center gap-3 text-xs font-mono text-[#C5A880]">
              <Compass className="w-4 h-4 text-[#DFC295]" />
              <span>{RESTAURANT_INFO.location}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880] block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs font-sans tracking-wider uppercase text-[#A39C90]">
              <li>
                <a href="#philosophy" className="hover:text-[#DFC295] transition-colors">
                  The Philosophy
                </a>
              </li>
              <li>
                <a href="#tasting-menu" className="hover:text-[#DFC295] transition-colors">
                  Tasting Degustation
                </a>
              </li>
              <li>
                <a href="#spaces" className="hover:text-[#DFC295] transition-colors">
                  Architectural Salons
                </a>
              </li>
              <li>
                <a href="#fogged-window" className="hover:text-[#DFC295] transition-colors">
                  Peek Inside (Fogged Window)
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#DFC295] transition-colors">
                  Visual Gallery
                </a>
              </li>
              <li>
                <a href="#reservation" className="hover:text-[#DFC295] transition-colors">
                  Book Table
                </a>
              </li>
            </ul>
          </div>

          {/* VIP Private Reserve Newsletter */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880] block">
              The Private Gazette
            </span>
            <p className="text-xs text-[#A39C90] font-sans leading-relaxed">
              Receive private invitations for seasonal menu debuts, rare truffle arrivals, and allocated wine cellar releases.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-[#12100E] border border-[#C5A880]/30 rounded-full px-4 py-2.5 text-xs text-[#F7F4EE] placeholder-[#A39C90]/40 focus:outline-none focus:border-[#DFC295]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-full bg-[#C5A880] text-[#080706] font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#DFCA9F] transition-colors"
                  >
                    Join
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#C5A880]/15 border border-[#C5A880]/40 text-[#DFC295] text-xs font-mono">
                <Check className="w-4 h-4" />
                <span>You are now inscribed in our Private Gazette.</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#A39C90] font-mono">
          <div>
            © {new Date().getFullYear()} AURA Venezia. All rights reserved. Artisanal Gastronomy.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#DFC295] transition-colors flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Instagram</span>
            </a>
            <a
              href="#"
              className="hover:text-[#DFC295] transition-colors flex items-center gap-1.5"
            >
              <Share2 className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Venice Gazette</span>
            </a>
            <button
              onClick={scrollToTop}
              className="hover:text-[#DFC295] transition-colors flex items-center gap-1.5 ml-4"
              title="Return to summit"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#C5A880]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
