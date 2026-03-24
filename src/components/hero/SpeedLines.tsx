import React from 'react';
import { cn } from '@/lib/utils';

export const SpeedLines = ({ className }: { className?: string }) => {
  const lineCount = 60;
  
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0", className)}>
      <div className="absolute inset-0 w-[200vw] h-[200vh] -left-[50vw] -top-[50vh] animate-[spin_20s_linear_infinite]">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <radialGradient id="centerFade" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="40%" stopColor="white" stopOpacity="0.06" />
              <stop offset="100%" stopColor="white" stopOpacity="0.06" />
            </radialGradient>
          </defs>
          <g stroke="url(#centerFade)" strokeWidth="0.5">
            {Array.from({ length: lineCount }).map((_, i) => {
              const angle = (i * 360) / lineCount;
              return (
                <line 
                  key={i}
                  x1="50" y1="50" 
                  x2={50 + 50 * Math.cos(angle * Math.PI / 180)} 
                  y2={50 + 50 * Math.sin(angle * Math.PI / 180)} 
                  strokeDasharray={`${Math.random() * 5 + 2} ${Math.random() * 10 + 2}`}
                />
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
};
