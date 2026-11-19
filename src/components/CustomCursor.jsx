'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default'); // 'default', 'hover', 'wipe', 'drag'
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  
  const posRef = useRef({ x: -200, y: -200 });
  const ringPosRef = useRef({ x: -200, y: -200 });

  useEffect(() => {
    // Only enable on desktop fine pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;
    
    setEnabled(true);

    const onMouseMove = (e) => {
      if (!hasMoved) setHasMoved(true);
      posRef.current = { x: e.clientX, y: e.clientY };

      // Check for custom cursor targets
      const target = e.target;
      const wipeEl = target?.closest?.('[data-cursor="wipe"]');
      const dragEl = target?.closest?.('[data-cursor="drag"]');
      const linkEl = target?.closest?.('a, button, [role="button"], input, select');

      if (wipeEl) {
        setCursorVariant('wipe');
        setCursorText('WIPE');
      } else if (dragEl) {
        setCursorVariant('drag');
        setCursorText('DRAG');
      } else if (linkEl) {
        setCursorVariant('hover');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const onMouseLeave = () => {
      setHasMoved(false);
    };

    const onMouseEnter = () => {
      setHasMoved(true);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    let animationFrameId;
    const render = () => {
      const ease = 0.18;
      ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * ease;
      ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * ease;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
      }

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringPosRef.current.x}px, ${ringPosRef.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [hasMoved]);

  if (!enabled || !hasMoved) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Central precise dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-[#DFCA9F] transition-opacity duration-300 pointer-events-none ${
          cursorVariant === 'wipe' || cursorVariant === 'drag' ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Outer fluid luxury follower ring */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 -ml-5 -mt-5 flex items-center justify-center rounded-full pointer-events-none transition-[width,height,background-color,border-color,margin] duration-300 ease-out ${
          cursorVariant === 'hover'
            ? 'w-14 h-14 -ml-7 -mt-7 border border-[#C5A880]/60 bg-[#C5A880]/10 backdrop-blur-[2px]'
            : cursorVariant === 'wipe'
            ? 'w-20 h-20 -ml-10 -mt-10 border border-[#DFC295] bg-[#12100E]/80 backdrop-blur-md shadow-[0_0_20px_rgba(223,194,149,0.3)]'
            : cursorVariant === 'drag'
            ? 'w-20 h-20 -ml-10 -mt-10 border border-[#DFC295] bg-[#12100E]/80 backdrop-blur-md shadow-[0_0_20px_rgba(223,194,149,0.3)]'
            : 'w-10 h-10 -ml-5 -mt-5 border border-[#C5A880]/40 bg-transparent'
        }`}
      >
        {cursorText && (
          <span className="font-mono text-[9px] tracking-widest uppercase text-[#DFC295] font-semibold animate-pulse">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
