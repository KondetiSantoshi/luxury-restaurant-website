'use client';

import { useState } from 'react';
import Preloader from '../components/Preloader';
import CustomCursor from '../components/CustomCursor';
import SmoothScroll from '../components/SmoothScroll';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TurntableMenu from '../components/TurntableMenu';
import FoggedWindow from '../components/FoggedWindow';
import ExperienceSection from '../components/ExperienceSection';
import FeaturedMenu from '../components/FeaturedMenu';
import GallerySection from '../components/GallerySection';
import ReviewsSection from '../components/ReviewsSection';
import ReservationSection from '../components/ReservationSection';
import Footer from '../components/Footer';
import ReservationModal from '../components/ReservationModal';

export default function Home() {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [selectedMenuForBooking, setSelectedMenuForBooking] = useState(null);

  const handleOpenReservation = (menu = null) => {
    setSelectedMenuForBooking(menu);
    setReservationOpen(true);
  };

  const handleCloseReservation = () => {
    setReservationOpen(false);
  };

  return (
    <SmoothScroll>
      {/* Luxury Cinematic Preloader */}
      <Preloader />

      {/* Dynamic Cursor with Contextual States (Wipe, Drag, Hover) */}
      <CustomCursor />

      {/* Luxury Navbar */}
      <Navbar onOpenReservation={() => handleOpenReservation()} />

      <main className="relative bg-[#080706] text-[#F7F4EE]">
        {/* 1. Hero Section */}
        <HeroSection onOpenReservation={() => handleOpenReservation()} />

        {/* 2. About & Terroir Section */}
        <AboutSection />

        {/* 3. The Interactive Rotating Turntable Course Selector */}
        <TurntableMenu onOpenReservation={() => handleOpenReservation()} />

        {/* 4. Special Interactive Section: The Fogged Window Experience */}
        <FoggedWindow />

        {/* 5. Experience Section: Architectural Sanctuaries */}
        <ExperienceSection onOpenReservation={() => handleOpenReservation()} />

        {/* 6. Featured Tasting Menus Collection */}
        <FeaturedMenu onSelectMenu={(menu) => handleOpenReservation(menu)} />

        {/* 7. Gallery Section with Fullscreen Lightbox */}
        <GallerySection />

        {/* 8. Critical Acclaim & Reviews */}
        <ReviewsSection />

        {/* 9. Direct Table Reservation Engine */}
        <ReservationSection />
      </main>

      {/* 10. Minimal Luxury Footer */}
      <Footer />

      {/* Pop-up Reservation Modal (Triggered by CTAs) */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={handleCloseReservation}
        selectedMenu={selectedMenuForBooking}
      />
    </SmoothScroll>
  );
}
