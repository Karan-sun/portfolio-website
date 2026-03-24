"use client";

import React, { useState } from 'react';
import { CODEX_LORE } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Zap, Sparkles, Eye, Users, Flame, Coffee, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MangaPanel } from '../ui/MangaPanel';

const iconMap: Record<string, any> = {
  zap: Zap,
  sparkles: Sparkles,
  eye: Eye,
  users: Users,
  flame: Flame,
  coffee: Coffee,
};

export const CodexSection = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollReveal();
  const [activeEntry, setActiveEntry] = useState<string | null>(null);

  // Auto-typing objective effect
  const [objectiveText, setObjectiveText] = useState('');
  const objective = "> CURRENT_OBJECTIVE: Build technology that changes lives. AI/ML mode active.";
  
  React.useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setObjectiveText(objective.substring(0, i));
      i++;
      if (i > objective.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto w-full pt-16 relative perspective-1000">
      
      {/* Background Grimoire parchment texture */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundColor: '#f4ecd8',
          mixBlendMode: 'overlay'
        }}
      />

      <div ref={headerRef} className="relative z-10 text-center mb-16">
        <MangaPanel direction="down" inView={headerInView} className="bg-[#111827] border-[#A8DADC] mx-auto max-w-2xl">
          <BookOpen size={48} className="mx-auto text-[#A8DADC] mb-4" />
          <h2 className="font-bangers text-[#A8DADC] text-3xl md:text-5xl tracking-widest">
            THE GRIMOIRE LORE
          </h2>
          <div className="mt-4 font-share text-xs sm:text-sm text-[#F4A261] text-left bg-black p-3 border border-[#F4A261]/30">
            {objectiveText}
            <span className="animate-pulse">_</span>
          </div>
        </MangaPanel>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {CODEX_LORE.map((lore, idx) => {
          const { ref, isInView } = useScrollReveal();
          const Icon = iconMap[lore.icon] || Zap;
          const isActive = activeEntry === lore.id;

          return (
            <motion.div
              key={lore.id}
              ref={ref}
              initial={{ rotateY: 90, opacity: 0 }}
              animate={isInView ? { rotateY: 0, opacity: 1 } : { rotateY: 90, opacity: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1, type: "spring" }}
              className="perspective-1000 h-full"
              onHoverStart={() => setActiveEntry(lore.id)}
              onHoverEnd={() => setActiveEntry(null)}
            >
              <div 
                className={cn(
                  "relative w-full h-full bg-[#fdfbf7] border-2 border-[#5c3a21] shadow-2xl p-6 md:p-8 cursor-pointer transform-style-3d transition-transform duration-500",
                  isActive && "scale-105 rotate-z-1"
                )}
                style={{ 
                  clipPath: 'polygon(0 0, 100% 2%, 98% 100%, 2% 98%)',
                  boxShadow: 'inset 0 0 50px rgba(92, 58, 33, 0.1)'
                }}
              >
                {/* Torn edge decoration */}
                <div className="absolute top-0 left-0 w-8 h-8 bg-[#0D0D0D] rotate-45 -translate-x-4 -translate-y-4 border-b border-r border-[#5c3a21]" />
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#0D0D0D] rotate-45 translate-x-4 translate-y-4 border-t border-l border-[#5c3a21]" />

                <div className="flex justify-between items-start mb-6 border-b-2 border-[#5c3a21] pb-2">
                  <span className="font-share text-[#5c3a21]/50 tracking-widest text-lg font-bold">
                    {lore.number}
                  </span>
                  <Icon size={24} className="text-[#E63946]" />
                </div>
                
                <p className="font-nunito italic text-[#1a1a1a] text-lg leading-relaxed font-semibold">
                  "{lore.text}"
                </p>

                {isActive && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="absolute inset-0 bg-[#E63946]/5 mix-blend-multiply pointer-events-none"
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Power Source widget */}
      <div className="mt-16 text-center pb-20 relative z-10 flex flex-col items-center">
        <h4 className="font-bangers text-[#F4A261] text-xl mb-4">POWER SOURCE DETECTED</h4>
        <div className="w-16 h-20 border-4 border-white rounded-b-xl relative overflow-hidden flex items-end justify-center">
           <div className="absolute top-0 w-full h-2 bg-white" />
           {/* Handle */}
           <div className="absolute -right-4 top-4 w-6 h-10 border-4 border-white rounded-r-xl" />
           {/* Coffee liquid filling */}
           <div className="w-full bg-[#E63946] animate-[fillUp_3s_ease-in-out_infinite_alternate]" style={{ height: '80%' }} />
        </div>
        <style>{`@keyframes fillUp { 0% { height: 10%; } 100% { height: 90%; } }`}</style>
      </div>

    </div>
  );
};
