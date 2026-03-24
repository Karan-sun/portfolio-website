import React from 'react';
import { cn } from '@/lib/utils';

export const HalftoneSection = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <section className={cn("relative w-full overflow-hidden min-h-screen py-20 px-4 md:px-8 bg-[#0D0D0D]", className)}>
      <div className="absolute inset-0 halftone-bg z-0 pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
};
