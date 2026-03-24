"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { CHAPTERS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { SpeedLines } from '../hero/SpeedLines';

export const ChapterCard = () => {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [chapterText, setChapterText] = useState('');

  useEffect(() => {
    // Determine chapter from path
    const title = CHAPTERS[pathname] || 'CHAPTER ?? — UNKNOWN TERRITORY';
    setChapterText(title);
    setShow(true);

    // Prefer-reduced-motion check could go here
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const timeout = setTimeout(() => {
      setShow(false);
    }, prefersReduced ? 0 : 1200);

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!show) return null;

  const parts = chapterText.split(' — ');
  const subtitle = parts[0];
  const mainTitle = parts[1] || '';

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0D0D0D] flex items-center justify-center overflow-hidden animate-out fade-out duration-300 delay-1000 fill-mode-forwards pointer-events-none">
      <SpeedLines className="opacity-30" />
      
      <div className="relative z-10 text-center flex flex-col items-center">
        <span className="font-bangers text-[#F4A261] text-2xl md:text-4xl tracking-widest mb-2 animate-in slide-in-from-bottom-5 fade-in duration-300">
          {subtitle}
        </span>
        <h1 className="font-bangers text-white text-5xl md:text-7xl lg:text-9xl tracking-widest leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-in slide-in-from-bottom-10 fade-in duration-500 delay-100">
          {mainTitle}
        </h1>
      </div>
    </div>
  );
};
