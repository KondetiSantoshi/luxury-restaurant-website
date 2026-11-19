'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { Sparkles, Hand, RotateCcw, Eye } from 'lucide-react';

export default function FoggedWindow() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const isDrawingRef = useRef(false);
  const [wipedPercentage, setWipedPercentage] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      drawFog();
    };

    const drawFog = () => {
      const w = canvas.width;
      const h = canvas.height;
      
      // Draw frosted glass condensation texture
      ctx.globalCompositeOperation = 'source-over';
      
      // Soft misty steam gradient
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, 'rgba(28, 25, 22, 0.96)');
      grad.addColorStop(0.5, 'rgba(38, 33, 29, 0.94)');
      grad.addColorStop(1, 'rgba(24, 21, 18, 0.97)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Micro condensation water beads
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      for (let i = 0; i < 400; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const r = Math.random() * 2 + 0.5;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Slow fog regeneration loop if untouched
    let lastWipeTime = Date.now();

    const wipeAt = (x, y) => {
      setHasInteracted(true);
      lastWipeTime = Date.now();

      ctx.save();
      ctx.globalCompositeOperation = 'destination-out';
      
      // Multi-layer radial brush for natural finger wiping with feathered edges
      const brushRadius = 55;
      const brushGrad = ctx.createRadialGradient(x, y, brushRadius * 0.2, x, y, brushRadius);
      brushGrad.addColorStop(0, 'rgba(0, 0, 0, 1)');
      brushGrad.addColorStop(0.6, 'rgba(0, 0, 0, 0.85)');
      brushGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = brushGrad;
      ctx.beginPath();
      ctx.arc(x, y, brushRadius, 0, Math.PI * 2);
      ctx.fill();

      // Occasional gentle water droplet trail downwards
      if (Math.random() > 0.8) {
        ctx.beginPath();
        ctx.arc(x + (Math.random() * 8 - 4), y + Math.random() * 30 + 10, Math.random() * 3 + 1, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    // Slow re-fogging timer loop
    const refogLoop = () => {
      const now = Date.now();
      // If no wipe for 2.5 seconds, slowly add back microscopic mist
      if (now - lastWipeTime > 2500) {
        ctx.save();
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = 'rgba(28, 25, 22, 0.008)'; // Ultra subtle refog
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
      }
      animationFrameId = requestAnimationFrame(refogLoop);
    };

    animationFrameId = requestAnimationFrame(refogLoop);

    // Event listeners
    const handleMouseDown = (e) => {
      isDrawingRef.current = true;
      const rect = canvas.getBoundingClientRect();
      wipeAt(e.clientX - rect.left, e.clientY - rect.top);
    };

    const handleMouseMove = (e) => {
      if (!isDrawingRef.current) return;
      const rect = canvas.getBoundingClientRect();
      wipeAt(e.clientX - rect.left, e.clientY - rect.top);
    };

    const handleMouseUp = () => {
      isDrawingRef.current = false;
    };

    // Touch support for mobile devices
    const handleTouchStart = (e) => {
      isDrawingRef.current = true;
      if (e.touches[0]) {
        const rect = canvas.getBoundingClientRect();
        wipeAt(e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top);
      }
    };

    const handleTouchMove = (e) => {
      if (!isDrawingRef.current || !e.touches[0]) return;
      const rect = canvas.getBoundingClientRect();
      wipeAt(e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top);
    };

    const handleTouchEnd = () => {
      isDrawingRef.current = false;
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const resetFog = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const w = canvas.width;
    const h = canvas.height;
    ctx.globalCompositeOperation = 'source-over';
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, 'rgba(28, 25, 22, 0.96)');
    grad.addColorStop(0.5, 'rgba(38, 33, 29, 0.94)');
    grad.addColorStop(1, 'rgba(24, 21, 18, 0.97)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
    setHasInteracted(false);
  };

  return (
    <section id="fogged-window" className="relative py-28 sm:py-36 bg-[#080706] text-[#F7F4EE] overflow-hidden border-t border-[#1C1815]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#C5A880]/20 pb-8 mb-16">
          <div>
            <div className="flex items-center gap-2 text-[#C5A880] text-xs font-mono tracking-[0.25em] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#DFC295]" />
              <span>Capitolo III • Lo Sguardo Segreto</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-wide font-light">
              Peek Into <span className="italic text-[#DFC295]">AURA</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#A39C90] max-w-xl font-sans">
              Condensation fogs the arched window of our canal salon. Wipe the glass with your cursor or touch to reveal tonight's candlelit dining room.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <button
              onClick={resetFog}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#C5A880]/30 hover:border-[#C5A880] bg-[#12100E] text-[#A39C90] hover:text-[#DFC295] text-xs font-mono tracking-widest uppercase transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Re-Fog Glass</span>
            </button>
          </div>
        </div>

        {/* The Fogged Glass Interactive Frame */}
        <div
          ref={containerRef}
          data-cursor="wipe"
          className="relative w-full h-[520px] sm:h-[620px] rounded-3xl overflow-hidden border-2 border-[#C5A880]/30 shadow-[0_20px_60px_rgba(0,0,0,0.9)] select-none group"
        >
          {/* Underneath: The glowing warm candlelit interior */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop"
              alt="Inside the candlelit Palazzo dining salon"
              fill
              sizes="100vw"
              className="object-cover object-center filter brightness-105 contrast-110"
            />
            {/* Ambient golden glow from within */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080706]/70 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Interactive Mist / Condensation Canvas Layer */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full cursor-crosshair z-10 touch-none"
          />

          {/* Floating Instructions Pill (Fades once user interacts) */}
          <div
            className={`absolute top-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-all duration-700 flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#080706]/90 border border-[#DFC295]/50 backdrop-blur-md shadow-2xl ${
              hasInteracted ? 'opacity-30 hover:opacity-100' : 'opacity-100 animate-bounce'
            }`}
          >
            <Hand className="w-4 h-4 text-[#DFC295]" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#E8E2D5]">
              Wipe with mouse or finger to peek inside
            </span>
          </div>

          {/* Atmospheric window frame border overlay */}
          <div className="absolute inset-0 pointer-events-none border-[12px] sm:border-[18px] border-[#181411]/90 rounded-3xl z-20 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]" />

          {/* Corner Architectural Monogram Accent */}
          <div className="absolute bottom-8 right-8 z-30 pointer-events-none hidden sm:flex items-center gap-3 px-4 py-2 rounded-xl bg-[#080706]/85 border border-[#C5A880]/30 backdrop-blur-md">
            <Eye className="w-4 h-4 text-[#DFC295]" />
            <span className="font-mono text-[11px] tracking-widest uppercase text-[#A39C90]">
              Sala dei Dogi • 20:45 Service
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
