import React from 'react';
import { MissionsSection } from '@/components/sections/MissionsSection';

export const metadata = { title: "Missions | Karan Kumar Maloo" };

export default function MissionsPage() {
  return (
    <div className="min-h-screen px-4 pb-12 bg-[#0D0D0D]">
      <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500 fill-mode-both">
        <MissionsSection />
      </div>
    </div>
  );
}
