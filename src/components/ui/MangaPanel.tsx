import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface MangaPanelProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  inView?: boolean;
}

export const MangaPanel = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  inView = true,
  ...props
}: MangaPanelProps) => {
  const directionOffset = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
  };

  const initial = { opacity: 0, ...directionOffset[direction] };

  return (
    <motion.div
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn("manga-panel p-6 shadow-xl", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};
