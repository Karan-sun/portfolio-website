"use client";

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import gsap from 'gsap';

interface PowerBarProps {
  name: string;
  rank: 'S' | 'A' | 'B' | 'C';
  level: number;
  delay?: number;
}

const RankColors: Record<string, string> = {
  S: '#E63946', // Red
  A: '#F4A261', // Orange
  B: '#E9C46A', // Yellow
  C: '#8892A4', // Gray
};

export const PowerBar = ({ name, rank, level, delay = 0 }: PowerBarProps) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barRef.current) return;
    
    gsap.fromTo(barRef.current, 
      { width: 0 },
      { width: `${level}%`, duration: 0.8, delay, ease: "power3.out" }
    );
  }, [level, delay]);

  return (
    <div className="group relative w-full mb-4">
      <div className="flex justify-between items-end mb-1">
        <div className="flex items-center gap-2">
          <span 
            className="w-6 h-6 flex items-center justify-center font-bangers text-white border-2 border-black" 
            style={{ backgroundColor: RankColors[rank] }}
          >
            {rank}
          </span>
          <span className="font-bangers tracking-wider text-lg">{name}</span>
        </div>
        <span className="font-share text-sm text-[var(--color-primary)]">LVL {level}</span>
      </div>
      
      <div className="h-3 w-full bg-[#111827] border-2 border-black relative overflow-hidden">
        <div 
          ref={barRef}
          className="h-full absolute left-0 top-0 transition-opacity group-hover:brightness-125"
          style={{ backgroundColor: RankColors[rank], boxShadow: `0 0 10px ${RankColors[rank]}` }}
        />
      </div>

      <div className="absolute right-0 -top-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <span className="font-bangers text-xs text-white animate-pulse" style={{ textShadow: `0 0 5px ${RankColors[rank]}` }}>
          POWER SURGE
        </span>
      </div>
    </div>
  );
};
