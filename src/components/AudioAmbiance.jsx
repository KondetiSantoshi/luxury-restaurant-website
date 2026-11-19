'use client';

import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioAmbiance() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const audioCtxRef = useRef(null);
  const masterGainRef = useRef(null);
  const nodesRef = useRef([]);

  useEffect(() => {
    // Check Web Audio API support
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) {
      setIsSupported(false);
    }

    return () => {
      // Clean up audio nodes on unmount
      nodesRef.current.forEach(node => {
        try { node.stop?.(); node.disconnect?.(); } catch (e) {}
      });
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        try { audioCtxRef.current.close(); } catch (e) {}
      }
    };
  }, []);

  const startAmbiance = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Master Gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 3);
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;

      // Harmonic Warm Pad Oscillators (C2 - 65.41Hz, G2 - 98Hz, C3 - 130.81Hz)
      const frequencies = [65.41, 98.0, 130.81, 196.0];
      const gains = [0.35, 0.25, 0.2, 0.1];

      frequencies.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Lowpass filter for smooth warmth
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(320 + i * 40, ctx.currentTime);

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(gains[i], ctx.currentTime);

        // Subtle LFO for breathing movement
        const lfo = ctx.createOscillator();
        lfo.frequency.setValueAtTime(0.15 + i * 0.05, ctx.currentTime);
        const lfoGain = ctx.createGain();
        lfoGain.gain.setValueAtTime(0.05, ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(gainNode.gain);

        osc.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(masterGain);

        osc.start();
        lfo.start();

        nodesRef.current.push(osc, lfo, filter, gainNode);
      });

      // Subtle hearth / vinyl crackle generator using noise buffer
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        // intermittent soft crackle pops
        if (Math.random() > 0.998) {
          output[i] = (Math.random() * 2 - 1) * 0.25;
        } else {
          output[i] = (Math.random() * 2 - 1) * 0.008;
        }
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(1400, ctx.currentTime);
      noiseFilter.Q.setValueAtTime(1.2, ctx.currentTime);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.04, ctx.currentTime);

      whiteNoise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(masterGain);

      whiteNoise.start();
      nodesRef.current.push(whiteNoise, noiseFilter, noiseGain);

      setIsPlaying(true);
    } catch (e) {
      console.warn("Audio ambiance initialization prevented:", e);
    }
  };

  const stopAmbiance = () => {
    if (masterGainRef.current && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      masterGainRef.current.gain.setValueAtTime(masterGainRef.current.gain.value, ctx.currentTime);
      masterGainRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

      setTimeout(() => {
        nodesRef.current.forEach(node => {
          try { node.stop?.(); node.disconnect?.(); } catch (e) {}
        });
        nodesRef.current = [];
        setIsPlaying(false);
      }, 1200);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopAmbiance();
    } else {
      startAmbiance();
    }
  };

  if (!isSupported) return null;

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? "Mute Atmospheric Soundscape" : "Play Atmospheric Soundscape"}
      className="group flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-[#C5A880]/30 hover:border-[#C5A880] bg-[#12100E]/70 backdrop-blur-md text-[#E8E2D5] text-xs font-sans tracking-widest transition-all duration-300 hover:scale-105"
    >
      <div className="flex items-center gap-0.5 h-3 w-4">
        {isPlaying ? (
          <>
            <span className="w-0.5 bg-[#C5A880] rounded-full animate-[soundWave_1.2s_ease-in-out_infinite]" style={{ height: '70%' }} />
            <span className="w-0.5 bg-[#C5A880] rounded-full animate-[soundWave_1.5s_ease-in-out_infinite_0.2s]" style={{ height: '100%' }} />
            <span className="w-0.5 bg-[#C5A880] rounded-full animate-[soundWave_1.1s_ease-in-out_infinite_0.4s]" style={{ height: '45%' }} />
            <span className="w-0.5 bg-[#C5A880] rounded-full animate-[soundWave_1.3s_ease-in-out_infinite_0.1s]" style={{ height: '80%' }} />
          </>
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-[#A39C90] group-hover:text-[#C5A880]" />
        )}
      </div>
      <span className="hidden sm:inline font-mono text-[10px] uppercase text-[#A39C90] group-hover:text-[#C5A880] transition-colors">
        {isPlaying ? "Ambiance: ON" : "Sound"}
      </span>
    </button>
  );
}
