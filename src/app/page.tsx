import React from 'react';
import { ClientHeroCanvas } from '@/components/hero/ClientHeroCanvas';
import { SpeedLines } from '@/components/hero/SpeedLines';
import { ProtagonistCard } from '@/components/hero/ProtagonistCard';

export default function LandingPage() {
  return (
    <div className="relative min-h-[calc(100vh-72px)] overflow-hidden flex items-center justify-center p-4">
      <ClientHeroCanvas />
      <SpeedLines className="opacity-10 pointer-events-none" />
      
      <div className="w-full relative z-10 pt-8 pb-16">
        <ProtagonistCard />
      </div>
    </div>
  );
}
