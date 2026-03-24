import React from 'react';
import { TransmitSection } from '@/components/sections/TransmitSection';
import { HalftoneSection } from '@/components/ui/HalftoneSection';

export const metadata = { title: "Transmit | Karan Kumar Maloo" };

export default function TransmitPage() {
  return (
    <HalftoneSection className="bg-[#0D0D0D]">
      <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500 fill-mode-both">
        <TransmitSection />
      </div>
    </HalftoneSection>
  );
}
