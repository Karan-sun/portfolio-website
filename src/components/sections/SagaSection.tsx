"use client";

import React from 'react';
import { ORIGIN_STORY, PROTAGONIST } from '@/lib/data';
import { MangaPanel } from '../ui/MangaPanel';
import { StatBadge } from '../ui/StatBadge';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Code, Flame } from 'lucide-react';

export const SagaSection = () => {
  const { ref: p1Ref, isInView: p1InView } = useScrollReveal();
  const { ref: p2Ref, isInView: p2InView } = useScrollReveal();
  const { ref: p3Ref, isInView: p3InView } = useScrollReveal();

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto w-full pt-16">

      {/* Panel 1: Illustration */}
      <div className="md:col-span-7 h-full min-h-[400px]" ref={p1Ref}>
        <MangaPanel
          direction="left"
          inView={p1InView}
          className="h-full flex flex-col justify-end bg-gradient-to-t from-[#111827] to-[#1D3557] relative p-0 overflow-hidden"
        >
          {/* Abstract SVG Illustration */}
          <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
            <path d="M0,100 Q150,50 300,100 T600,100 L600,0 L0,0 Z" fill="#0D0D0D" />
            <path d="M100,400 L200,200 L300,250 L400,100 L500,300" stroke="#E63946" strokeWidth="3" fill="none" strokeDasharray="10,5" className="animate-[dash_5s_linear_infinite]" />
            <style>{`@keyframes dash { to { stroke-dashoffset: -100; } }`}</style>
          </svg>

          <div className="relative z-10 w-full flex-1 min-h-[150px] mb-4 overflow-hidden border-2 border-[#E63946]/30">
            <img
              src="./anime-place.jpg"
              alt="Anime Location"
              className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="relative z-10 p-8 pt-0">
            <h2 className="font-bangers text-[#A8DADC] text-3xl mb-2 flex items-center gap-2">
              <Code size={24} /> ALCHEMY LAB
            </h2>
            <div className="w-1/2 h-1 bg-[#E63946] mb-4" />
            <p className="font-share text-[#F1FAEE] text-sm opacity-80 uppercase tracking-widest">
              Location: Sri Dungargarh / Jaipur<br />
              Status: Jutsu training active
            </p>
          </div>
        </MangaPanel>
      </div>

      <div className="md:col-span-5 flex flex-col gap-6">

        {/* Panel 2: Speech Bubble / Origin story */}
        <div ref={p2Ref} className="flex-1">
          <MangaPanel direction="right" inView={p2InView} className="h-full bg-white text-black p-8 relative">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-0 h-0 border-r-[16px] border-r-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent z-10 block" />
            <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-0 h-0 border-r-[20px] border-r-black border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent z-0 block" />

            <h3 className="font-bangers text-[#E63946] text-2xl mb-4 border-b-2 border-black inline-block">THE AWAKENING</h3>
            <p className="font-nunito font-bold italic text-sm md:text-base leading-relaxed mb-4">
              "{ORIGIN_STORY.anime_lore}"
            </p>
            <p className="font-nunito text-sm opacity-80 leading-relaxed">
              {ORIGIN_STORY.summary}
            </p>
          </MangaPanel>
        </div>

        {/* Panel 3: Stats */}
        <div ref={p3Ref}>
          <MangaPanel direction="up" inView={p3InView} delay={0.2} className="bg-[#1D3557] border-[#A8DADC]">
            <h3 className="font-bangers text-[#F4A261] text-xl tracking-wider mb-4 flex items-center gap-2">
              <Flame size={20} /> CURRENT STATS
            </h3>

            <div className="flex gap-4 mb-6">
              <StatBadge label="STR" value={85} />
              <StatBadge label="INT" value={95} textColor="text-[#F4A261]" />
              <StatBadge label="DEX" value={90} color="bg-[#E63946]/20" textColor="text-[#E63946]" />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between font-share text-xs text-[#A8DADC]">
                <span>TRAINING COMPLETION (GPA {PROTAGONIST.gpa})</span>
                <span>83%</span>
              </div>
              <div className="h-2 w-full bg-black border border-[#A8DADC]">
                <div className="h-full bg-[#E63946] w-[83%] shadow-[0_0_10px_#E63946]" />
              </div>
            </div>
          </MangaPanel>
        </div>

      </div>
    </div>
  );
};
