import React from 'react';
import { cn } from '@/lib/utils';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative w-full border-t border-white/10 bg-[#0A0A0A] overflow-hidden mt-12 pb-6 pt-12">
      <div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none" />
      
      {/* Top red accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E63946] to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand / Logo Area */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="font-bangers text-3xl tracking-widest text-white mb-2 group cursor-pointer flex items-center gap-2">
            KARAN <span className="text-[#E63946]">MALOO</span>
            <span className="w-2 h-2 rounded-full bg-[#E63946] animate-pulse" />
          </h2>
          <p className="font-share text-[#A8DADC] text-xs uppercase tracking-widest max-w-xs">
            Forging digital experiences with Python blood, chai fuel, and anime spirit.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a href="https://github.com/Karan-sun" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#F1FAEE] hover:bg-[#E63946] hover:border-[#E63946] hover:scale-110 transition-all duration-300 shadow-[0_0_0_#E63946] hover:shadow-[0_0_15px_#E63946]">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/karan-maloo-a492043a0" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#F1FAEE] hover:bg-[#A8DADC] hover:border-[#A8DADC] hover:text-[#0D0D0D] hover:scale-110 transition-all duration-300 shadow-[0_0_0_#A8DADC] hover:shadow-[0_0_15px_#A8DADC]">
            <Linkedin size={18} />
          </a>
          <a href="mailto:Karanj542002@gmail.com" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#F1FAEE] hover:bg-[#F4A261] hover:border-[#F4A261] hover:text-[#0D0D0D] hover:scale-110 transition-all duration-300 shadow-[0_0_0_#F4A261] hover:shadow-[0_0_15px_#F4A261]">
            <Mail size={18} />
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-12 text-center border-t border-white/5 pt-6 relative z-10 w-full">
        <p className="font-share text-[#8892A4] text-xs uppercase tracking-widest flex items-center justify-center gap-2">
          &copy; {new Date().getFullYear()} GRIMOIRE OF KARAN. ALL RIGHTS RESERVED.
        </p>
      </div>

    </footer>
  );
};
