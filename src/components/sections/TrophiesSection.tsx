"use client";

import React from 'react';
import { GUILD_INFO, TROPHIES } from '@/lib/data';
import { MangaPanel } from '../ui/MangaPanel';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Award, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const tierStyles = {
  LEGENDARY: "border-[#F4A261] shadow-[0_0_15px_rgba(244,162,97,0.3)] bg-gradient-to-br from-[#111827] to-[#5c3a21]",
  EPIC: "border-[#8e44ad] shadow-[0_0_15px_rgba(142,68,173,0.3)] bg-gradient-to-br from-[#111827] to-[#3a1c4a]",
  RARE: "border-[#3498db] shadow-[0_0_15px_rgba(52,152,219,0.3)] bg-gradient-to-br from-[#111827] to-[#1a3852]",
  UNCOMMON: "border-[#2ecc71] shadow-[0_0_15px_rgba(46,204,113,0.3)] bg-gradient-to-br from-[#111827] to-[#18452b]",
};

const tierColors = {
  LEGENDARY: "text-[#F4A261] bg-[#F4A261]/20",
  EPIC: "text-[#d288ed] bg-[#8e44ad]/20",
  RARE: "text-[#85c1e9] bg-[#3498db]/20",
  UNCOMMON: "text-[#82e0aa] bg-[#2ecc71]/20",
};

export const TrophiesSection = () => {
  const { ref: guildRef, isInView: guildInView } = useScrollReveal();
  const { ref: gridRef, isInView: gridInView } = useScrollReveal();

  return (
    <div className="max-w-6xl mx-auto w-full pt-16">
      
      {/* Section A - Guild */}
      <div ref={guildRef} className="mb-20">
        <MangaPanel direction="up" inView={guildInView} className="bg-[#1D3557] relative p-8 md:p-12 overflow-hidden items-center text-center">
          
          <div className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-[150%] h-[150%] animate-[spin_60s_linear_infinite]" preserveAspectRatio="xMidYMid slice">
              <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill="none" stroke="#fff" strokeWidth="0.5" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-24 h-24 bg-white/10 rounded-full border-4 border-[#F4A261] flex items-center justify-center mb-6 shadow-[0_0_30px_#F4A261]">
               <Award size={48} className="text-[#F4A261]" />
            </div>
            
            <h2 className="font-bangers text-[#F4A261] text-2xl tracking-widest mb-2 border-b-2 border-dashed border-[#F4A261]/50 inline-block px-4 pb-1">
              {GUILD_INFO.rank}
            </h2>
            <h3 className="font-share text-white text-xl uppercase mb-1">{GUILD_INFO.role}</h3>
            <p className="font-nunito text-[#A8DADC] text-sm mb-8">{GUILD_INFO.name}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full text-left">
              {GUILD_INFO.achievements.map((ach, i) => (
                <div key={i} className="bg-black/30 p-4 border-l-4 border-white flex gap-3 text-sm">
                  <Star size={16} className="text-[#E63946] shrink-0 mt-0.5 animate-pulse" />
                  <span className="font-semibold text-white/90">{ach}</span>
                </div>
              ))}
            </div>
          </div>
        </MangaPanel>
      </div>

      {/* Section B - Skill Scrolls */}
      <div ref={gridRef}>
        <MangaPanel direction="up" inView={gridInView} delay={0.2} className="bg-transparent border-0 p-0 shadow-none">
          <h2 className="font-bangers text-[#E63946] text-4xl mb-8 border-b-4 border-[#E63946] inline-block pb-2">
            SKILL SCROLLS EARNED
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TROPHIES.map((trophy, i) => (
              <div 
                key={trophy.id} 
                className={cn(
                  "relative group overflow-hidden border-2 p-6 transition-transform hover:-translate-y-2",
                  tierStyles[trophy.tier]
                )}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_0.75s_forwards] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10 pointer-events-none" />
                <style>{`@keyframes shimmer { 100% { transform: translateX(100%); } }`}</style>

                <div className={cn("inline-block font-bangers text-xs px-2 py-1 mb-4", tierColors[trophy.tier])}>
                  {trophy.tier} TIER
                </div>
                
                <h3 className="font-bangers text-xl text-white mb-2 leading-tight">
                  {trophy.title}
                </h3>
                <p className="font-share text-xs text-white/60 uppercase">
                  ISSUER: {trophy.issuer}
                </p>
              </div>
            ))}
          </div>
        </MangaPanel>
      </div>
      
    </div>
  );
};
