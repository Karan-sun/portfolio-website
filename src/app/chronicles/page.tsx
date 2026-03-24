import React from 'react';
import { ChroniclesSection } from '@/components/sections/ChroniclesSection';

export const metadata = { title: "Chronicles | Karan Kumar Maloo" };

export default function ChroniclesPage() {
  return (
    <div className="min-h-screen px-4 pb-12 bg-[#111827]">
      <div className="fixed inset-0 halftone-bg z-0 pointer-events-none opacity-10" />
      <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500 fill-mode-both relative z-10">
        <ChroniclesSection />
      </div>
    </div>
  );
}
