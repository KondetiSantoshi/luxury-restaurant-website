'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, Clock, Users, Wine, CheckCircle2, Phone, Mail, MapPin, Send, ArrowRight, X } from 'lucide-react';
import { RESTAURANT_INFO, TASTING_MENUS } from '../data/restaurantData';

export default function ReservationSection({ preselectedMenu, isModal = false, onClose }) {
  const [formData, setFormData] = useState({
    experience: preselectedMenu?.id || 'grand-tasting',
    space: 'sala-nobile',
    date: '2026-11-28',
    time: '20:00',
    guests: '2',
    winePairing: 'classic',
    name: '',
    email: '',
    phone: '',
    dietaryNotes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  const menuPrices = {
    'grand-tasting': 285,
    'chef-counter': 340,
    'terroir-degustation': 225
  };

  const winePrices = {
    'none': 0,
    'classic': 160,
    'prestige': 260,
    'botanical': 140
  };

  const guestCount = parseInt(formData.guests) || 2;
  const baseCost = (menuPrices[formData.experience] || 285) * guestCount;
  const wineCost = (winePrices[formData.winePairing] || 0) * guestCount;
  const totalCost = baseCost + wineCost;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const randomCode = 'AUR-' + Math.floor(1000 + Math.random() * 9000);
    setBookingCode(randomCode);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      experience: 'grand-tasting',
      space: 'sala-nobile',
      date: '2026-11-28',
      time: '20:00',
      guests: '2',
      winePairing: 'classic',
      name: '',
      email: '',
      phone: '',
      dietaryNotes: '',
    });
  };

  const FormContent = (
    <div className={`rounded-3xl bg-[#14110E] border border-[#C5A880]/30 shadow-2xl relative ${isModal ? 'p-6 sm:p-8' : 'p-8 sm:p-12'}`}>
      {/* Modal Close Button if in modal */}
      {isModal && onClose && (
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2 rounded-full border border-[#C5A880]/30 text-[#A39C90] hover:text-[#DFC295] hover:border-[#DFC295] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="booking-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 text-[#C5A880] text-xs font-mono tracking-widest uppercase mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#DFC295]" />
                <span>AURA Table Reservation</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F7F4EE]">
                Select Your Salon & Experience
              </h3>
              <p className="text-xs sm:text-sm text-[#A39C90] mt-1 font-sans">
                Experience our 3-Star Michelin tasting courses cooked over live embers.
              </p>
            </div>

            {/* Step 1: Menu Selection */}
            <div className="space-y-3">
              <label className="font-mono text-xs uppercase tracking-widest text-[#C5A880] block">
                1. Select Degustation Experience
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TASTING_MENUS.map((menu) => {
                  const isSelected = formData.experience === menu.id;
                  return (
                    <button
                      key={menu.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, experience: menu.id })}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'border-[#DFC295] bg-[#C5A880]/15 text-[#F7F4EE]'
                          : 'border-[#2A241F] bg-[#0E0C0A] text-[#A39C90] hover:border-[#C5A880]/40'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-mono text-xs font-semibold text-[#DFC295]">{menu.price}</span>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#DFC295]" />}
                      </div>
                      <p className="font-serif text-sm text-[#E8E2D5] leading-tight">{menu.name}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Date, Time & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Date */}
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-[#C5A880] block">
                  Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-[#080706] border border-[#C5A880]/30 rounded-xl px-4 py-3 text-xs font-mono text-[#F7F4EE] focus:outline-none focus:border-[#DFC295]"
                  required
                />
              </div>

              {/* Time Slot */}
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-[#C5A880] block">
                  Service Time
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-[#080706] border border-[#C5A880]/30 rounded-xl px-4 py-3 text-xs font-mono text-[#F7F4EE] focus:outline-none focus:border-[#DFC295]"
                >
                  <option value="18:30">18:30 (Early Twilight)</option>
                  <option value="19:15">19:15 (Candlelight)</option>
                  <option value="20:00">20:00 (Prime Salon)</option>
                  <option value="20:45">20:45 (Prime Salon)</option>
                  <option value="21:30">21:30 (Late Evening)</option>
                </select>
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-[#C5A880] block">
                  Party Size
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full bg-[#080706] border border-[#C5A880]/30 rounded-xl px-4 py-3 text-xs font-mono text-[#F7F4EE] focus:outline-none focus:border-[#DFC295]"
                >
                  <option value="1">1 Guest (Solo Journey)</option>
                  <option value="2">2 Guests (Couple Table)</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests (Salon Table)</option>
                  <option value="6">6 Guests (Banquette)</option>
                  <option value="8">8 Guests (Private Counter)</option>
                </select>
              </div>
            </div>

            {/* Step 3: Wine Pairing Option */}
            <div className="space-y-3">
              <label className="font-mono text-xs uppercase tracking-widest text-[#C5A880] block">
                Cellar Wine Pairing
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'none', title: 'A La Carte Wine', sub: 'From the list' },
                  { id: 'classic', title: 'Classic Reserve', sub: '+€160 / guest' },
                  { id: 'prestige', title: 'Grand Cru Prestige', sub: '+€260 / guest' },
                  { id: 'botanical', title: 'Botanical Pairing', sub: '+€140 / guest' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, winePairing: tier.id })}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      formData.winePairing === tier.id
                        ? 'border-[#DFC295] bg-[#C5A880]/20 text-[#DFC295]'
                        : 'border-[#2A241F] bg-[#0E0C0A] text-[#A39C90] hover:border-[#C5A880]/30'
                    }`}
                  >
                    <span className="font-mono text-xs block font-medium">{tier.title}</span>
                    <span className="font-mono text-[10px] text-[#A39C90] mt-0.5 block">{tier.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#2A241F]">
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-[#C5A880] block">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Lord Byron"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#080706] border border-[#C5A880]/30 rounded-xl px-4 py-3 text-xs text-[#F7F4EE] placeholder-[#A39C90]/40 focus:outline-none focus:border-[#DFC295]"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-[#C5A880] block">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="byron@estate.it"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#080706] border border-[#C5A880]/30 rounded-xl px-4 py-3 text-xs text-[#F7F4EE] placeholder-[#A39C90]/40 focus:outline-none focus:border-[#DFC295]"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-[#C5A880] block">
                  Telephone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+39 340 000 0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#080706] border border-[#C5A880]/30 rounded-xl px-4 py-3 text-xs text-[#F7F4EE] placeholder-[#A39C90]/40 focus:outline-none focus:border-[#DFC295]"
                />
              </div>
            </div>

            {/* Dietary / Special Notes */}
            <div className="space-y-2">
              <label className="font-mono text-xs uppercase tracking-widest text-[#C5A880] block">
                Dietary Notes & Celebrations
              </label>
              <input
                type="text"
                placeholder="E.g., Anniversary table, shellfish sensitivity, water taxi arrival..."
                value={formData.dietaryNotes}
                onChange={(e) => setFormData({ ...formData, dietaryNotes: e.target.value })}
                className="w-full bg-[#080706] border border-[#C5A880]/30 rounded-xl px-4 py-3 text-xs text-[#F7F4EE] placeholder-[#A39C90]/40 focus:outline-none focus:border-[#DFC295]"
              />
            </div>

            {/* Cost Summary & Submission Button */}
            <div className="pt-6 border-t border-[#2A241F] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#A39C90] block">
                  Estimated Total ({formData.guests} Guests)
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-3xl sm:text-4xl text-[#DFC295] font-light">
                    €{totalCost}
                  </span>
                  <span className="font-mono text-[10px] text-[#A39C90]">
                    (inc. VAT & table curation)
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#C5A880] via-[#DFCA9F] to-[#C5A880] text-[#080706] font-sans text-xs tracking-[0.25em] uppercase font-semibold hover:shadow-[0_0_30px_rgba(223,194,149,0.4)] transition-all hover:scale-105"
              >
                Confirm Reservation Request
              </button>
            </div>
          </motion.form>
        ) : (
          /* Confirmation Screen */
          <motion.div
            key="booking-success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="py-8 text-center space-y-6"
          >
            <div className="w-20 h-20 rounded-full border-2 border-[#DFC295] bg-[#DFC295]/10 flex items-center justify-center mx-auto text-[#DFC295]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880]">
                Reservation Confirmed
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#F7F4EE] mt-1">
                We Await You in Venice
              </h3>
              <p className="font-serif italic text-sm text-[#DFC295] mt-1">
                "Your candlelit table at AURA has been placed in our diary."
              </p>
            </div>

            {/* Receipt Card */}
            <div className="max-w-md mx-auto p-6 rounded-2xl bg-[#0E0C0A] border border-[#C5A880]/30 text-left space-y-3 font-mono text-xs">
              <div className="flex justify-between border-b border-[#2A241F] pb-2">
                <span className="text-[#A39C90]">Booking Reference:</span>
                <span className="text-[#DFC295] font-bold">{bookingCode}</span>
              </div>
              <div className="flex justify-between border-b border-[#2A241F] pb-2">
                <span className="text-[#A39C90]">Guest:</span>
                <span className="text-[#E8E2D5]">{formData.name}</span>
              </div>
              <div className="flex justify-between border-b border-[#2A241F] pb-2">
                <span className="text-[#A39C90]">Date & Time:</span>
                <span className="text-[#E8E2D5]">{formData.date} at {formData.time}</span>
              </div>
              <div className="flex justify-between border-b border-[#2A241F] pb-2">
                <span className="text-[#A39C90]">Party:</span>
                <span className="text-[#E8E2D5]">{formData.guests} Guests</span>
              </div>
              <div className="flex justify-between pt-1 text-sm">
                <span className="text-[#C5A880]">Total Amount:</span>
                <span className="text-[#DFC295] font-serif text-lg">€{totalCost}</span>
              </div>
            </div>

            <p className="text-xs text-[#A39C90] max-w-sm mx-auto font-sans">
              A personalized confirmation letter and water taxi coordinates have been sent to <span className="text-[#DFC295]">{formData.email}</span>.
            </p>

            <div className="flex items-center justify-center gap-4 pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full border border-[#C5A880]/40 text-[#DFC295] hover:bg-[#C5A880]/10 text-xs font-mono uppercase tracking-widest transition-colors"
              >
                Make Another Booking
              </button>
              {isModal && onClose && (
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-[#C5A880] text-[#080706] font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#DFCA9F] transition-colors"
                >
                  Done
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  // If rendered as a standalone modal, return just the FormContent
  if (isModal) {
    return FormContent;
  }

  // Otherwise, return full in-page section with sidebars
  return (
    <section id="reservation" className="relative py-28 sm:py-36 bg-[#080706] text-[#F7F4EE] border-t border-[#1C1815]">
      {/* Glow elements */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[#C5A880]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#C5A880]/20 pb-8 mb-16">
          <div>
            <div className="flex items-center gap-2 text-[#C5A880] text-xs font-mono tracking-[0.25em] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#DFC295]" />
              <span>Capitolo VII • Prenotazioni & Contatti</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-wide font-light">
              Reserve Your <span className="italic text-[#DFC295]">Table</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#A39C90] max-w-xl font-sans">
              Due to our limited salon seating and bespoke market sourcing, we recommend booking two to four weeks in advance.
            </p>
          </div>

          <div className="mt-6 md:mt-0 font-mono text-xs text-[#A39C90] uppercase tracking-widest">
            Concierge Direct Line
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Inquiries & Arrival Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 rounded-3xl bg-[#12100E] border border-[#C5A880]/20 space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880] block">
                AURA Concierge
              </span>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#DFC295] shrink-0 mt-1" />
                  <div>
                    <p className="text-xs font-mono text-[#E8E2D5]">{RESTAURANT_INFO.location}</p>
                    <p className="text-[11px] text-[#A39C90] mt-0.5">{RESTAURANT_INFO.coordinates}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#DFC295] shrink-0 mt-1" />
                  <div>
                    <a href="tel:+390415289920" className="text-xs font-mono text-[#E8E2D5] hover:text-[#DFC295]">
                      {RESTAURANT_INFO.phone}
                    </a>
                    <p className="text-[11px] text-[#A39C90] mt-0.5">Assistance daily 10:00 – 22:00 CET</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#DFC295] shrink-0 mt-1" />
                  <div>
                    <a href={`mailto:${RESTAURANT_INFO.email}`} className="text-xs font-mono text-[#E8E2D5] hover:text-[#DFC295]">
                      {RESTAURANT_INFO.email}
                    </a>
                    <p className="text-[11px] text-[#A39C90] mt-0.5">Private dining & press inquiries</p>
                  </div>
                </div>
              </div>

              {/* Private Pontoon Box */}
              <div className="pt-6 border-t border-[#2A241F]">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#DFC295] block mb-1">
                  Private Water Taxi Mooring
                </span>
                <p className="text-xs text-[#A39C90] leading-relaxed">
                  Arriving by boat? Hail our watermen on VHF Ch. 74 or provide flight/train details to our concierge for private mahogany Riva transfer.
                </p>
              </div>
            </div>

            {/* Operating Hours card */}
            <div className="p-8 rounded-3xl bg-[#12100E] border border-[#C5A880]/20 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880] block">
                Service Schedule
              </span>
              <div className="space-y-3">
                {RESTAURANT_INFO.hours.map((h, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs border-b border-[#2A241F] pb-2 last:border-none">
                    <div>
                      <span className="text-[#E8E2D5] font-medium block">{h.days}</span>
                      <span className="text-[10px] font-mono text-[#A39C90]">{h.service}</span>
                    </div>
                    <span className="font-mono text-[#DFC295]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Engine Form */}
          <div className="lg:col-span-8">
            {FormContent}
          </div>
        </div>
      </div>
    </section>
  );
}
