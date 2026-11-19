'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const categories = ['All', 'Gastronomy', 'Atmosphere', 'The Cellar', 'The Kitchen'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handlePrev = (e) => {
    e.stopPropagation();
    if (!selectedPhoto) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedPhoto(filteredItems[prevIndex]);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (!selectedPhoto) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedPhoto(filteredItems[nextIndex]);
  };

  return (
    <section id="gallery" className="relative py-28 sm:py-36 bg-[#080706] text-[#F7F4EE] overflow-hidden border-t border-[#1C1815]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#C5A880]/20 pb-8 mb-16">
          <div>
            <div className="flex items-center gap-2 text-[#C5A880] text-xs font-mono tracking-[0.25em] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#DFC295]" />
              <span>Capitolo VI • Galleria Visiva</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-wide font-light">
              Atmosphere & <span className="italic text-[#DFC295]">Moments</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#A39C90] max-w-xl font-sans">
              A curated photographic record of woodfire hearths, aged Barolo decanters, and quiet candlelit evenings along Rio de San Trovaso.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#C5A880] text-[#080706] font-semibold shadow-md'
                    : 'border border-[#C5A880]/30 text-[#A39C90] hover:text-[#DFC295] bg-[#12100E]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Masonry / Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedPhoto(item)}
                className={`group relative rounded-2xl overflow-hidden border border-[#C5A880]/20 cursor-pointer shadow-lg bg-[#12100E] ${
                  idx % 3 === 0 ? 'sm:col-span-2 aspect-[16/10]' : 'aspect-square'
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-95 group-hover:brightness-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Hover Details */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="flex justify-end">
                    <div className="w-8 h-8 rounded-full bg-[#080706]/70 border border-[#C5A880]/40 flex items-center justify-center text-[#DFC295]">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-[#C5A880] block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#F7F4EE]">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-[#A39C90] mt-1 line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-[1000] bg-[#080706]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 z-50 p-3 rounded-full border border-[#C5A880]/40 text-[#F7F4EE] hover:text-[#C5A880] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Nav Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full border border-[#C5A880]/40 bg-[#12100E]/70 text-[#F7F4EE] hover:text-[#DFC295] transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full border border-[#C5A880]/40 bg-[#12100E]/70 text-[#F7F4EE] hover:text-[#DFC295] transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Image & Info */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
            >
              <div className="relative w-full h-[55vh] sm:h-[65vh] rounded-2xl overflow-hidden border border-[#C5A880]/30 shadow-2xl">
                <Image
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {/* Caption */}
              <div className="mt-4 text-center max-w-xl">
                <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880]">
                  {selectedPhoto.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F7F4EE] mt-1">
                  {selectedPhoto.title}
                </h3>
                <p className="font-serif italic text-sm text-[#A39C90] mt-1">
                  "{selectedPhoto.caption}"
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
