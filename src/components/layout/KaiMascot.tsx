"use client";

import React, { useEffect, useState } from 'react';
import { useKaiMood } from '@/hooks/useKaiMood';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export const KaiMascot = () => {
  const { mood } = useKaiMood();
  const pathname = usePathname();
  const [speech, setSpeech] = useState<string | null>(null);

  // Simple eye shapes based on mood
  const getEyeComponent = () => {
    switch(mood) {
      case 'happy':
        return (
          <>
            <path d="M 25 35 Q 30 25 35 35" stroke="#A8DADC" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 45 35 Q 50 25 55 35" stroke="#A8DADC" strokeWidth="3" fill="none" strokeLinecap="round" />
          </>
        );
      case 'idle':
        return (
          <>
             <circle cx="30" cy="35" r="4" fill="#A8DADC" opacity="0.5" />
             <circle cx="50" cy="35" r="4" fill="#A8DADC" opacity="0.5" />
             {/* Half closed lids */}
             <rect x="25" y="30" width="10" height="4" fill="#1a1a2e" />
             <rect x="45" y="30" width="10" height="4" fill="#1a1a2e" />
          </>
        );
      case 'excited':
      case 'wave':
      case 'working':
      default:
        return (
          <>
             <circle cx="30" cy="35" r="6" fill="#A8DADC" className={mood === 'excited' ? "animate-pulse" : ""} />
             <circle cx="50" cy="35" r="6" fill="#A8DADC" className={mood === 'excited' ? "animate-pulse" : ""} />
             {mood === 'working' && (
               <rect x="24" y="29" width="12" height="12" fill="url(#code-scroll)" opacity="0.8" />
             )}
          </>
        );
    }
  };

  useEffect(() => {
    const speechMap: Record<string, string> = {
      '/': "MASTER'S GRIMOIRE LOADING...",
      '/saga': "THIS IS WHERE IT ALL BEGAN.",
      '/arsenal': "CHARGING JUTSU SYSTEMS...",
      '/missions': "QUEST LOG VERIFIED.",
      '/trophies': "SO MANY TROPHIES, MASTER.",
      '/transmit': "I'LL GUARD THE CHANNEL.",
    };
    
    setSpeech(speechMap[pathname] || null);

    const timeout = setTimeout(() => {
      setSpeech(null);
    }, 4000);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Speech bubble */}
      {speech && (
        <div className="mb-4 mr-4 bg-white text-black font-share text-xs px-3 py-2 border-2 border-black rounded-lg relative max-w-[200px] animate-in fade-in slide-in-from-bottom-2 duration-300">
          {speech}
          <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-black border-r-0" />
          <div className="absolute -bottom-1.5 right-[25px] w-0 h-0 border-l-6 border-l-transparent border-t-6 border-t-white border-r-0" />
        </div>
      )}

      {/* Mascot SVG */}
      <div className={cn(
        "relative w-20 h-20 transition-transform duration-500",
        mood === 'idle' ? "animate-[bounce_3s_ease-in-out_infinite]" : "animate-[bounce_1.5s_ease-in-out_infinite]",
        mood === 'excited' && "scale-110"
      )}>
        <svg viewBox="0 0 80 80" width="80" height="80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
             <pattern id="code-scroll" patternUnits="userSpaceOnUse" width="12" height="12">
               <text x="0" y="10" fontSize="8" fill="#0f0">10</text>
             </pattern>
          </defs>
          
          {/* Antenna */}
          <line x1="40" y1="20" x2="40" y2="5" stroke="#A8DADC" strokeWidth="2" />
          <circle cx="40" cy="5" r="3" fill="#E63946" className="animate-pulse" />
          
          {/* Body */}
          <rect x="15" y="20" width="50" height="40" rx="10" fill="#1a1a2e" stroke="#2a2a4a" strokeWidth="2" />
          
          {/* Screen / Face */}
          <rect x="22" y="27" width="36" height="16" rx="4" fill="#0D0D0D" />
          
          {getEyeComponent()}

          {/* Arms */}
          <line x1="15" y1="40" x2="5" y2="45" stroke="#1a1a2e" strokeWidth="4" strokeLinecap="round" />
          
          {/* Right Arm (waves if mood === wave) */}
           <line 
            x1="65" y1="40" x2="75" y2={mood === 'wave' ? "25" : "45"} 
            stroke="#1a1a2e" strokeWidth="4" strokeLinecap="round" 
            className={cn("transition-all duration-300 transform origin-[65px_40px]", mood === 'wave' && "animate-[spin_0.5s_ease-in-out_infinite_alternate]")}
          />
        </svg>

        {/* Sparkles if excited */}
        {mood === 'excited' && (
          <div className="absolute inset-0">
             <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-yellow-300 animate-ping" />
             <div className="absolute bottom-0 left-0 w-2 h-2 rounded-full bg-yellow-300 animate-ping" style={{ animationDelay: '0.2s' }} />
          </div>
        )}
      </div>
    </div>
  );
};
