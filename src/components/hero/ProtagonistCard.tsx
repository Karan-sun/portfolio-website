"use client";

import React from 'react';
import { PROTAGONIST } from '@/lib/data';
import { GlitchText } from '../ui/GlitchText';
import { AnimeButton } from '../ui/AnimeButton';
import { useInkNavigation } from '@/hooks/useInkNavigation';

export const ProtagonistCard = () => {
  const { navigate } = useInkNavigation();

  return (
    <div className="relative z-10 manga-panel p-0 max-w-3xl w-full mx-auto flex flex-col md:flex-row shadow-[0_0_30px_rgba(230,57,70,0.15)] group">
      
      {/* Top Banner indicating profile style */}
      <div className="absolute -top-3 left-6 bg-[#E63946] px-4 py-1 z-20 border-2 border-black rotate-[-2deg]">
        <h2 className="font-bangers text-white text-md tracking-widest leading-none">PROTAGONIST PROFILE</h2>
      </div>

      {/* Abstract Avatar Section (Left) */}
      <div className="bg-[#1D3557] md:w-2/5 p-6 flex flex-col justify-center items-center relative overflow-hidden text-center md:border-r-4 border-black">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
        
        {/* Abstract geometric anime icon */}
        <div className="w-32 h-32 md:w-48 md:h-48 relative mb-4 mt-6">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(168,218,220,0.6)] animate-[pulse_4s_ease-in-out_infinite]" xmlns="http://www.w3.org/2000/svg">
            {/* Hexagon outline */}
            <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="none" stroke="#A8DADC" strokeWidth="2" strokeDasharray="5,5" className="animate-[spin_20s_linear_infinite_reverse]" />
            <polygon points="50,15 80,30 80,70 50,85 20,70 20,30" fill="rgba(230,57,70,0.2)" stroke="#E63946" strokeWidth="3" />
            {/* Abstract core / eye */}
            <circle cx="50" cy="50" r="15" fill="#111827" stroke="#F4A261" strokeWidth="2" />
            <circle cx="50" cy="50" r="5" fill="#F4A261" className="animate-ping" />
          </svg>
        </div>
        
        <div className="font-share text-[#A8DADC] text-xs uppercase tracking-widest opacity-80 mb-2">
          SCANNING BIOMETRICS...
        </div>
        <div className="font-bangers text-[#E63946] text-xl tracking-wider uppercase bg-black px-3 py-1 border border-[#E63946]/50">
          RANK: S-CLASS
        </div>
      </div>

      {/* Stats Section (Right) */}
      <div className="flex-1 p-8 pt-10 bg-[#111827] flex flex-col justify-between">
        
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bangers text-white uppercase leading-none mb-1">
            <GlitchText text={PROTAGONIST.name} />
          </h1>
          <h3 className="font-bangers text-[#F4A261] text-2xl tracking-widest">"{PROTAGONIST.alias}"</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 font-share text-[#F1FAEE] text-sm md:text-base mb-8">
          <div className="flex flex-col border-b border-white/10 pb-2">
            <span className="text-[#8892A4] text-xs uppercase">Class</span>
            <span className="font-bold">{PROTAGONIST.class}</span>
          </div>
          <div className="flex flex-col border-b border-white/10 pb-2">
            <span className="text-[#8892A4] text-xs uppercase">Level</span>
            <span className="font-bold text-[#E63946]">LVL 0{PROTAGONIST.level}</span>
          </div>
          <div className="flex flex-col border-b border-white/10 pb-2">
            <span className="text-[#8892A4] text-xs uppercase">Guild</span>
            <span className="font-bold truncate" title="GOOGLE DEVELOPER GROUP">GOOGLE DEVELOPER GROUP</span>
          </div>
          <div className="flex flex-col border-b border-white/10 pb-2">
            <span className="text-[#8892A4] text-xs uppercase">Rank</span>
            <span className="font-bold">{PROTAGONIST.rank}</span>
          </div>
          <div className="flex flex-col border-b border-white/10 pb-2">
            <span className="text-[#8892A4] text-xs uppercase">Base</span>
            <span className="font-bold uppercase">{PROTAGONIST.location}</span>
          </div>
          <div className="flex flex-col border-b border-white/10 pb-2">
            <span className="text-[#8892A4] text-xs uppercase">Affinity</span>
            <span className="font-bold text-[#A8DADC]">PYTHON · TENSORFLOW · OPENCV</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <AnimeButton variant="primary" onClick={() => navigate('/saga')} className="flex-1">
            BEGIN THE SAGA →
          </AnimeButton>
          <AnimeButton variant="outline" onClick={() => navigate('/missions')} className="flex-1">
            VIEW QUEST LOG
          </AnimeButton>
        </div>

      </div>
    </div>
  );
};
