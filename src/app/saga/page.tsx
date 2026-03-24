import React from 'react';
import { SagaSection } from '@/components/sections/SagaSection';
import { HalftoneSection } from '@/components/ui/HalftoneSection';

export const metadata = { title: "Origin Saga | Karan Kumar Maloo" };

export default function SagaPage() {
  return (
    <HalftoneSection className="bg-gradient-to-br from-[#0D0D0D] to-[#111827]">
      <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500 fill-mode-both">
        <SagaSection />
      </div>
    </HalftoneSection>
  );
}
