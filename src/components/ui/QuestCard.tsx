"use client";

import React from 'react';
import { Quest } from '@/types';
import { ExternalLink, Skull } from 'lucide-react';
import { cn } from '@/lib/utils';

export const QuestCard = ({ quest }: { quest: Quest }) => {
  const isA = quest.difficulty.includes('A-RANK');
  const badgeColor = isA ? 'bg-[#E63946]' : quest.difficulty.includes('B-RANK') ? 'bg-[#1D3557]' : 'bg-[#E9C46A]';

  return (
    <div 
      className={cn(
        "relative torn-scroll bg-[#fdfbf7] text-[#0D0D0D] p-6 pr-8 shadow-xl transition-transform hover:-translate-y-2 group",
        isA ? "border-4 border-[#F4A261] shadow-[0_0_20px_rgba(244,162,97,0.3)]" : "border-2 border-black"
      )}
    >
      <div className="absolute top-0 right-0 p-2">
        <div className="border border-red-800 rounded-full px-2 py-1 rotate-12 bg-red-800/10 text-red-800 font-bangers text-xs opacity-70">
          OFFICIAL LOG
        </div>
      </div>

      <div className="mb-4">
        <span className={cn("inline-block font-bangers text-white px-3 py-1 text-sm tracking-wider mb-2", badgeColor)}>
          {quest.difficulty}
        </span>
        <h3 className="font-bangers text-3xl uppercase leading-none text-[#0D0D0D]">{quest.codename}</h3>
        <p className="font-share text-[#1D3557] font-bold text-sm tracking-tighter uppercase">{quest.realName}</p>
      </div>

      {quest.special && (
        <div className="bg-[#111827] text-[#F4A261] font-share text-xs p-2 mb-4 border-l-4 border-[#E63946]">
          {quest.special}
        </div>
      )}

      <div className="space-y-4 mb-6">
        <div>
          <h4 className="font-bangers text-lg text-[#E63946] border-b-2 border-black/10 inline-block mb-1">OBJECTIVE:</h4>
          <p className="text-sm font-nunito font-semibold text-black/80">{quest.objective}</p>
        </div>

        <div>
           <h4 className="font-bangers text-lg text-[#E63946] border-b-2 border-black/10 inline-block mb-1">TECHNIQUES:</h4>
           <div className="flex flex-wrap gap-2 mt-1">
             {quest.tech.map((t, idx) => (
               <span key={idx} className="bg-black text-white px-2 py-0.5 text-xs font-share rounded-sm border border-gray-600">
                 {t}
               </span>
             ))}
           </div>
        </div>

        <div>
          <h4 className="font-bangers text-lg text-[#E63946] border-b-2 border-black/10 inline-block mb-1">RESULTS ACHIEVED:</h4>
          <ul className="list-none space-y-1">
            {quest.achievements.map((ach, idx) => (
              <li key={idx} className="flex items-start text-sm font-semibold text-black/80">
                <span className="text-[#E63946] mr-2">✓</span>
                {ach}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t-2 border-black/20 border-dashed">
        <div className="flex items-center gap-2 text-sm font-bangers text-[#1D3557]">
          <Skull size={18} className="text-[#E63946]" />
          BOSS DEFEATED: <span className="text-[#E63946]">{quest.boss}</span>
        </div>
        <a 
          href={quest.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 font-bangers text-sm bg-black text-white px-3 py-1 hover:bg-[#E63946] transition-colors"
        >
          MISSION REPORT <ExternalLink size={14} />
        </a>
      </div>

      <div className="absolute top-12 right-6 rotate-[-15deg] opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="font-bangers text-2xl text-[#E63946] border-4 border-[#E63946] px-2 py-1 bg-[#E63946]/10">
          MISSION COMPLETE
        </span>
      </div>
    </div>
  );
};
