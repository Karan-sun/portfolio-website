"use client";

import React from 'react';
import { QUESTS } from '@/lib/data';
import { QuestCard } from '../ui/QuestCard';
import { motion } from 'framer-motion';
import { staggerContainer, revealVariants } from '@/hooks/useScrollReveal';

export const MissionsSection = () => {
  return (
    <div className="max-w-4xl mx-auto w-full pt-16 relative">
      <div className="absolute inset-0 bg-[#3e2723] rounded-sm shadow-inner opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(0,0,0,0.1) 100px, rgba(0,0,0,0.1) 102px)' }} />
      
      <div className="relative z-10 flex flex-col gap-12 p-4 md:p-8">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {QUESTS.map((quest) => (
            <motion.div key={quest.id} variants={revealVariants} style={{ perspective: '1000px' }}>
               <motion.div 
                 initial={{ rotateX: 45, opacity: 0 }} 
                 whileInView={{ rotateX: 0, opacity: 1 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
               >
                 <QuestCard quest={quest} />
               </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
