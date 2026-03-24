"use client";

import React, { useState, useEffect } from 'react';
import { ARSENAL } from '@/lib/data';
import { PowerBar } from '../ui/PowerBar';
import { MangaPanel } from '../ui/MangaPanel';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const ArsenalSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showSeals, setShowSeals] = useState(true);

  // Initial hand seal animation
  useEffect(() => {
    const timer = setTimeout(() => setShowSeals(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (showSeals) {
    return (
      <div className="w-full h-[60vh] flex flex-col items-center justify-center">
        <div className="font-bangers text-4xl text-[#E63946] mb-4 animate-[pulse_0.3s_infinite]">FORMING SEALS...</div>
        <div className="w-32 h-32 border-4 border-white rounded-full flex items-center justify-center shadow-[0_0_20px_#E63946] animate-[spin_1s_linear_infinite]">
          <span className="font-bangers text-6xl text-white">印</span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto w-full pt-12">
      <MangaPanel direction="down" className="mb-8 p-1 flex flex-wrap bg-[#1D3557] border-0">
        {ARSENAL.map((category, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={cn(
              "flex-1 font-bangers text-lg md:text-xl py-3 px-2 text-center transition-colors border-4 border-transparent",
              activeTab === idx 
                ? "bg-[#E63946] text-white border-black shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" 
                : "text-[#A8DADC] hover:bg-white/5"
            )}
          >
            {category.title}
          </button>
        ))}
      </MangaPanel>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8">
          <MangaPanel className="min-h-[400px]">
             <h2 className="font-bangers text-[#E63946] text-3xl mb-8 border-b-2 border-[#E63946] inline-block pr-6 pb-1">
               {ARSENAL[activeTab].title}
             </h2>
             
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeTab}
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: 20 }}
                 transition={{ duration: 0.3 }}
                 className="space-y-4"
               >
                 {ARSENAL[activeTab].skills.map((skill, idx) => (
                   <PowerBar 
                     key={skill.name} 
                     name={skill.name} 
                     rank={skill.rank as any} 
                     level={skill.level} 
                     delay={idx * 0.15} 
                   />
                 ))}
               </motion.div>
             </AnimatePresence>
          </MangaPanel>
        </div>

        <div className="md:col-span-4 space-y-6">
           <MangaPanel delay={0.3} className="bg-gradient-to-b from-[#111827] to-[#1a1a2e] border-[#F4A261] shadow-[0_0_15px_rgba(244,162,97,0.2)]">
             <h3 className="font-bangers text-[#F4A261] text-2xl mb-2 text-center border-b border-[#F4A261]/30 pb-2">SECRET TECHNIQUES</h3>
             <div className="space-y-4 pt-2">
               
               <div className="bg-black/50 p-3 border-l-4 border-yellow-400">
                 <h4 className="font-bangers text-yellow-400 text-lg">SAS Certified ML</h4>
                 <p className="font-share text-xs text-white/80 mt-1">Legendary tier analytical mastery</p>
               </div>

               <div className="bg-black/50 p-3 border-l-4 border-blue-400">
                 <h4 className="font-bangers text-blue-400 text-lg">Eye of Truth</h4>
                 <p className="font-share text-xs text-white/80 mt-1">OpenCV mastery. Sees what humans cannot.</p>
               </div>

               <div className="bg-black/50 p-3 border-l-4 border-[#E63946]">
                 <h4 className="font-bangers text-[#E63946] text-lg">Binding Technique</h4>
                 <p className="font-share text-xs text-white/80 mt-1">MediaPipe Seal: Maps human form in real-time.</p>
               </div>

             </div>
           </MangaPanel>
        </div>
      </div>
    </div>
  );
};
