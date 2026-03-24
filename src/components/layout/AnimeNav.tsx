"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/lib/constants';
import { useInkNavigation } from '@/hooks/useInkNavigation';
import { cn } from '@/lib/utils';
import { Menu, X, Swords, Shield, ScrollText, BookOpen, Award, Library, Satellite } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const iconMap: Record<string, any> = {
  'swords': Swords,
  'shield': Shield,
  'scroll': ScrollText,
  'book-open': BookOpen,
  'award': Award,
  'library': Library,
  'satellite': Satellite,
};

export const AnimeNav = () => {
  const pathname = usePathname();
  const { navigate } = useInkNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (pathname === href) return;
    setMobileMenuOpen(false);
    navigate(href);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-40 bg-[#111827] border-b-2 border-[#E63946] shadow-md shadow-[#E63946]/20 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <Link href="/" onClick={(e) => handleNavClick(e, '/')} className="group flex items-center shrink-0">
             <span className="font-bangers text-[#E63946] text-3xl tracking-wider select-none transform transition-transform group-hover:scale-110 drop-shadow-[0_0_8px_rgba(230,57,70,0.6)]">
               KM
             </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_ITEMS.map((item) => {
              const Icon = iconMap[item.icon];
              const isActive = pathname === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "flex items-center gap-2 font-bangers text-lg tracking-wide transition-all duration-200 hover:scale-110 hover:text-[#F4A261]",
                    isActive ? "text-[#E63946] border-b-2 border-[#E63946] drop-shadow-[0_0_5px_rgba(230,57,70,0.8)]" : "text-[#F1FAEE]"
                  )}
                >
                  <Icon size={18} className={isActive ? "text-[#E63946]" : "text-gray-400"} />
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white hover:text-[#E63946] transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-[#0D0D0D] halftone-bg border-l-8 border-[#E63946] flex flex-col justify-center items-center pointer-events-auto"
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-[#E63946] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={40} />
            </button>

            <div className="flex flex-col space-y-6 text-center">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={cn(
                      "font-bangers text-4xl tracking-widest uppercase transition-colors",
                      isActive ? "text-[#E63946] drop-shadow-[0_0_10px_rgba(230,57,70,0.8)]" : "text-white hover:text-[#F4A261]"
                    )}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
