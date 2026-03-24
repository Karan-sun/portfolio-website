import React from 'react';
import { cn } from '@/lib/utils';

export const GlitchText = ({ text, className, as: Component = "span" }: { text: string, className?: string, as?: any }) => {
  return (
    <Component className={cn("relative inline-block hover-glitch transition-transform cursor-crosshair", className)}>
      {text}
      <span 
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 mix-blend-screen text-transparent bg-clip-text"
        aria-hidden="true"
      >
        {text}
      </span>
    </Component>
  );
};
