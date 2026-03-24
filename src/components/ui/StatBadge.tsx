import React from 'react';
import { cn } from '@/lib/utils';

export const StatBadge = ({ 
  label, 
  value, 
  color = "bg-[#111827]", 
  textColor = "text-[#A8DADC]" 
}: { 
  label: string, 
  value: string | number, 
  color?: string,
  textColor?: string
}) => {
  return (
    <div className={cn("border-2 border-black flex flex-col items-center justify-center p-2 min-w-[80px]", color)}>
      <span className="text-xs font-share text-[#8892A4] tracking-widest uppercase">{label}</span>
      <span className={cn("font-bangers text-xl tracking-wider", textColor)}>{value}</span>
    </div>
  );
};
