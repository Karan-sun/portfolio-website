"use client";

import React from 'react';
import { CHRONICLES } from '@/lib/data';
import { MangaPanel } from '../ui/MangaPanel';
import { cn } from '@/lib/utils';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export const ChroniclesSection = () => {
  return (
    <div className="max-w-4xl mx-auto w-full pt-16 relative pb-20">
      
      {/* Center timeline line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-2 bg-black -translate-x-1/2 z-0" />

      <div className="relative z-10 flex flex-col gap-16">
        {CHRONICLES.map((node, idx) => {
          const { ref, isInView } = useScrollReveal();
          const isLeft = idx % 2 === 0;

          return (
            <div key={node.id} ref={ref} className="relative w-full flex justify-end md:justify-center items-center">
              
              {/* Timeline Center Node */}
              <div className="absolute left-8 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                <div className={cn(
                  "w-6 h-6 border-4 border-black rounded-full bg-white transition-all duration-500 delay-300", 
                  isInView && "scale-110",
                  node.isActive ? "bg-[#E63946] animate-pulse shadow-[0_0_15px_#E63946]" : "bg-white"
                )} />
              </div>

              {/* Card Container */}
              <div className={cn(
                "w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] transition-all duration-700 delay-100",
                isLeft ? "md:mr-auto pl-12 md:pl-0 md:pr-12" : "md:ml-auto pl-12",
                isInView ? "opacity-100 translate-x-0" : "opacity-0 " + (isLeft ? "md:-translate-x-12 translate-x-12" : "translate-x-12")
              )}>
                <MangaPanel direction={isLeft ? 'left' : 'right'} inView={isInView} className="p-6 relative group">
                  {/* Speech bubble pointer */}
                  <div className={cn(
                    "hidden md:block absolute top-1/2 -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent z-10",
                    isLeft ? "-right-3 border-l-[12px] border-l-[#111827]" : "-left-3 border-r-[12px] border-r-[#111827]"
                  )} />
                  <div className={cn(
                    "hidden md:block absolute top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent z-0",
                    isLeft ? "-right-4 border-l-[16px] border-l-black" : "-left-4 border-r-[16px] border-r-black"
                  )} />

                  <span className={cn(
                    "font-bangers text-xs md:text-sm tracking-wider px-2 py-1 mb-3 inline-block border-2 border-black",
                    node.isActive ? "bg-[#E63946] text-white" : "bg-[#F4A261] text-black"
                  )}>
                    {node.animeRank}
                  </span>

                  <h3 className="font-bangers text-2xl md:text-3xl text-white tracking-widest leading-none mb-1">
                    {node.title}
                  </h3>
                  <p className="font-share text-[#A8DADC] text-xs uppercase mb-4">- {node.organization} ({node.period})</p>

                  {node.achievements && (
                     <ul className="space-y-2 mb-4">
                       {node.achievements.map((ach, i) => (
                         <li key={i} className="flex items-start text-sm text-[#F1FAEE]/80">
                           <span className="text-[#E63946] mr-2">»</span> {ach}
                         </li>
                       ))}
                     </ul>
                  )}

                  {node.quote && (
                    <div className="mt-4 bg-white text-black p-3 text-sm italic font-nunito border border-black relative">
                      <div className="absolute -top-2 left-4 w-4 h-4 bg-white border-l border-t border-black rotate-45" />
                      "{node.quote}"
                    </div>
                  )}

                </MangaPanel>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
