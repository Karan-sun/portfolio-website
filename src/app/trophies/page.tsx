import React from 'react';
import { TrophiesSection } from '@/components/sections/TrophiesSection';

export const metadata = { title: "Trophy Hall | Karan Kumar Maloo" };

export default function TrophiesPage() {
  return (
    <div className="min-h-screen px-4 pb-12 bg-[#0D0D0D] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1D3557]/40 via-[#0D0D0D] to-[#0D0D0D]">
      <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500 fill-mode-both">
        <TrophiesSection />
      </div>
    </div>
  );
}
