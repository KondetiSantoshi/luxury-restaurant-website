'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Calendar, Compass, Phone } from 'lucide-react';
import AudioAmbiance from './AudioAmbiance';

export default function Navbar({ onOpenReservation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Philosophy", href: "#philosophy" },
    { name: "Tasting Menu", href: "#tasting-menu" },
    { name: "The Spaces", href: "#spaces" },
    { name: "Fogged Window", href: "#fogged-window" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3.5 bg-[#080706]/85 backdrop-blur-md border-b border-[#C5A880]/15 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'py-6 sm:py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full border border-[#C5A880]/40 flex items-center justify-center group-hover:border-[#C5A880] transition-colors">
              <span className="font-serif text-sm italic text-[#C5A880]">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] uppercase text-[#F7F4EE] group-hover:text-[#DFC295] transition-colors">
                AURA
              </span>
              <span className="font-mono text-[9px] tracking-[0.25em] text-[#A39C90] uppercase -mt-1 hidden sm:block">
                Venezia • Est. 1894
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-sans tracking-[0.2em] uppercase text-[#E8E2D5]/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 hover:text-[#DFC295] transition-colors group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A880] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Audio Ambiance Synthesizer */}
            <AudioAmbiance />

            {/* Book Table CTA */}
            <button
              onClick={onOpenReservation}
              className="relative group hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full overflow-hidden border border-[#C5A880]/50 bg-[#181512]/90 hover:border-[#C5A880] text-xs font-sans tracking-widest uppercase text-[#F7F4EE] transition-all duration-300 hover:shadow-[0_0_20px_rgba(197,168,128,0.25)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#C5A880] to-[#DFCA9F] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Calendar className="w-3.5 h-3.5 text-[#C5A880] relative z-10 group-hover:text-[#080706] transition-colors" />
              <span className="relative z-10 group-hover:text-[#080706] transition-colors font-medium">
                Reserve Table
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-full border border-[#C5A880]/30 text-[#F7F4EE] hover:text-[#C5A880] transition-colors focus:outline-none"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Curtain Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            exit={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-[100] bg-[#0A0908] flex flex-col justify-between p-8 sm:p-12 overflow-y-auto"
          >
            {/* Top Close Bar */}
            <div className="flex items-center justify-between border-b border-[#C5A880]/20 pb-6">
              <div className="flex items-center gap-3">
                <span className="font-serif text-2xl tracking-[0.2em] text-[#F7F4EE] uppercase">
                  AURA
                </span>
                <span className="text-[10px] font-mono text-[#C5A880] px-2 py-0.5 rounded border border-[#C5A880]/30">
                  ★★★ MICHELIN
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-full border border-[#C5A880]/40 text-[#F7F4EE] hover:text-[#C5A880] hover:border-[#C5A880] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex flex-col gap-6 my-auto py-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.08, duration: 0.4 }}
                  className="group flex items-baseline justify-between border-b border-[#2A241F] pb-4"
                >
                  <span className="font-serif text-3xl sm:text-4xl text-[#F7F4EE] group-hover:text-[#DFC295] transition-colors italic">
                    {link.name}
                  </span>
                  <span className="font-mono text-xs text-[#A39C90] group-hover:text-[#C5A880]">
                    0{idx + 1}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Bottom Actions & Details */}
            <div className="pt-6 border-t border-[#C5A880]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#C5A880] to-[#DFCA9F] text-[#080706] font-sans text-xs uppercase tracking-widest font-semibold rounded-full hover:brightness-110 transition-all"
              >
                <Calendar className="w-4 h-4" />
                Reserve a Table Online
              </button>

              <div className="flex items-center gap-6 text-xs text-[#A39C90] font-mono">
                <a href="tel:+390415289920" className="flex items-center gap-2 hover:text-[#DFC295]">
                  <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>+39 041 528 9920</span>
                </a>
                <span>Dorsoduro, Venice</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
