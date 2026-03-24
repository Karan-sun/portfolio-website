"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'amber';
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const AnimeButton = ({ variant = 'primary', children, className, onClick, ...props }: AnimeButtonProps) => {
  const [isFlashing, setIsFlashing] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsFlashing(true);
    setTimeout(() => setIsFlashing(false), 300);
    if (onClick) onClick(e);
  };

  const variants = {
    primary: "bg-[#E63946] text-white border-2 border-black hover:brightness-110",
    outline: "bg-transparent text-[#F4A261] border-2 border-[#F4A261] hover:bg-[#F4A261]/10",
    amber: "bg-[#F4A261] text-black border-2 border-black hover:brightness-110"
  };

  return (
    <button 
      className={cn(
        "relative font-bangers tracking-wide text-xl px-6 py-2 uppercase transition-all duration-200 overflow-hidden group",
        variants[variant],
        className
      )}
      onClick={handleClick}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Background speed lines effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,#fff_5px,#fff_10px)]" />

      {/* Impact flash */}
      {isFlashing && (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full mix-blend-screen animate-[ping_0.3s_ease-out_forwards] pointer-events-none z-20" />
      )}
    </button>
  );
};
