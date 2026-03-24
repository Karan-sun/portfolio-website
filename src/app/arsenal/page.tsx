import React from 'react';
import { ArsenalSection } from '@/components/sections/ArsenalSection';

export const metadata = { title: "Arsenal | Karan Kumar Maloo" };

export default function ArsenalPage() {
  return (
    <div className="min-h-screen px-4 pb-12">
      <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500 fill-mode-both">
        <ArsenalSection />
      </div>
    </div>
  );
}
