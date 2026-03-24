"use client";

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useSakura } from '@/hooks/useSakura';

export const SakuraCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const pathname = usePathname();
  const isSakuraPage = pathname === '/' || pathname === '/transmit';
  
  const canvasRef = useSakura(isSakuraPage);

  // Springs for smoother movement
  const springX = useSpring(-100, { stiffness: 200, damping: 20 });
  const springY = useSpring(-100, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX - 10); // offset to center slightly
      springY.set(e.clientY - 10);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [springX, springY]);

  // Hide default cursor completely, but only if custom cursor is active
  useEffect(() => {
    document.body.style.cursor = 'none';
    const iterables = document.querySelectorAll('a, button, input, textarea');
    iterables.forEach(el => {
      (el as HTMLElement).style.cursor = 'none';
    });
    
    return () => {
      document.body.style.cursor = 'auto';
      iterables.forEach(el => {
        (el as HTMLElement).style.cursor = 'pointer'; // roughly reset
      });
    };
  }, []);

  return (
    <>
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 pointer-events-none z-[40]"
        style={{ display: isSakuraPage ? 'block' : 'none' }}
      />
      
      {/* Custom Global Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-[#E63946] pointer-events-none z-[99999]"
        style={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      >
        {!isSakuraPage && (
          <motion.div
            className="absolute -inset-2 rounded-full border border-[rgba(230,57,70,0.4)] animate-ping"
          />
        )}
      </motion.div>

      {/* Trailing petal focus for Sakura pages */}
      {isSakuraPage && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[99998]"
          style={{
             x: springX,
             y: springY,
          }}
        >
          {/* SVG Petal */}
          <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M 15 0 C 25 5 30 15 15 30 C 0 15 5 5 15 0" fill="#FFB7C5" fillOpacity="0.8" />
          </svg>
        </motion.div>
      )}
    </>
  );
};
