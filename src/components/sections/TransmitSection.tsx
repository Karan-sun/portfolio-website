"use client";

import React, { useState } from 'react';
import { AnimeButton } from '../ui/AnimeButton';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Github, Linkedin, Mail, Phone, Rocket } from 'lucide-react';
import { MangaPanel } from '../ui/MangaPanel';
import { useKaiMood } from '@/hooks/useKaiMood';

const formSchema = z.object({
  name: z.string().min(2, { message: "IDENTIFY YOURSELF PROPERLY. (Min 2 chars)" }),
  email: z.string().email({ message: "INVALID ORIGIN SIGNAL. (Invalid email)" }),
  subject: z.string().min(2, { message: "SUBJECT CODE REQUIRED." }),
  message: z.string().min(10, { message: "TRANSMISSION TOO SHORT. (Min 10 chars)" }),
});

export const TransmitSection = () => {
  const { triggerMood } = useKaiMood();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setStatus('sending');
    triggerMood('working');

    try {
      const res = await fetch('/api/transmit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        setStatus('success');
        triggerMood('happy', 5000);
      } else {
        setStatus('error');
        triggerMood('idle');
      }
    } catch (e) {
      setStatus('error');
      triggerMood('idle');
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto pt-12 pb-20 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch min-h-[600px]">

        {/* Left Panel: Signal Art & Links */}
        <MangaPanel direction="left" className="bg-[#111827] border-[#F4A261] flex flex-col justify-between relative overflow-hidden group">

          {/* Pulsar Beacon Animation */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="w-24 h-24 rounded-full border-2 border-[#F4A261] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
            <div className="w-48 h-48 rounded-full border border-[#F4A261]/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_0.5s]" />
            <div className="w-96 h-96 rounded-full border border-[#F4A261]/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite_1s]" />
          </div>

          <div className="relative z-10 text-center mb-12">
            <div className="bg-white text-black inline-block px-4 py-2 font-bangers text-xl mb-8 relative border-2 border-black">
              I'LL MAKE SURE MASTER KARAN RECEIVES YOUR MESSAGE.
              <div className="absolute -bottom-3 left-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-white border-r-[10px] border-r-transparent -translate-x-1/2" />
            </div>

            {/* Enlarge Mascot Illustration (Abstract rep) */}
            <div className="w-32 h-32 mx-auto bg-[#0D0D0D] rounded-2xl border-4 border-[#1a1a2e] flex items-center justify-center relative shadow-[0_0_20px_#A8DADC]">
              <div className="w-20 h-8 bg-black rounded flex items-center justify-around px-2">
                <div className="w-4 h-4 rounded-full bg-[#A8DADC] animate-pulse" />
                <div className="w-4 h-4 rounded-full bg-[#A8DADC] animate-pulse" />
              </div>
              <div className="absolute -top-6 w-1 h-6 bg-[#A8DADC]" />
            </div>
          </div>

          <div className="relative z-20 space-y-4">
            <h3 className="font-bangers text-[#F4A261] text-2xl border-b border-[#F4A261]/30 pb-2">FREQUENCY CHANNELS</h3>

            <a href="https://github.com/Karanj542002" target="_blank" rel="noreferrer" className="flex items-center gap-3 font-share text-[#F1FAEE] hover:text-[#E63946] transition-colors bg-black/50 p-3 border border-white/10 group-hover:border-[#E63946]/50">
              <Github className="text-[#E63946]" /> [ SIGNAL: GITHUB ]
            </a>

            <a href="https://linkedin.com/in/karan-kumar-maloo" target="_blank" rel="noreferrer" className="flex items-center gap-3 font-share text-[#F1FAEE] hover:text-[#A8DADC] transition-colors bg-black/50 p-3 border border-white/10 group-hover:border-[#A8DADC]/50">
              <Linkedin className="text-[#A8DADC]" /> [ SIGNAL: LINKEDIN ]
            </a>

            <a href="mailto:Karanj542002@gmail.com" className="flex items-center gap-3 font-share text-[#F1FAEE] hover:text-[#F4A261] transition-colors bg-black/50 p-3 border border-white/10 group-hover:border-[#F4A261]/50">
              <Mail className="text-[#F4A261]" /> [ DIRECT: Karanj542002@gmail.com ]
            </a>

            <a href="tel:7014753889" className="flex items-center gap-3 font-share text-[#F1FAEE] hover:text-[#2ecc71] transition-colors bg-black/50 p-3 border border-white/10 group-hover:border-[#2ecc71]/50">
              <Phone className="text-[#2ecc71]" /> [ VOICE: +91 7014753889 ]
            </a>
          </div>
        </MangaPanel>

        {/* Right Panel: Terminal Form */}
        <MangaPanel direction="right" className="bg-[#050505] border-[#A8DADC] font-share p-8">
          <div className="mb-8 border-b-2 border-green-500/30 pb-4">
            <h2 className="text-green-500 text-xl font-bold flex items-center">
              {'>'} MISSION_BRIEFING_TERMINAL.exe <span className="inline-block w-2 h-5 bg-green-500 ml-2 animate-pulse" />
            </h2>
            <p className="text-green-500/60 text-sm mt-2">SECURE CONNECTION ESTABLISHED.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 flex flex-col">

            <div className="flex flex-col group">
              <label className="text-green-500 text-sm mb-1">{'>'} IDENTIFY YOURSELF:</label>
              <input
                {...register("name")}
                className="bg-transparent border-b border-green-500/50 text-white focus:outline-none focus:border-green-400 p-2 font-share transition-colors"
                placeholder="[ ENTER NAME ]"
                onFocus={() => triggerMood('working')}
              />
              {errors.name && <span className="text-[#E63946] text-xs mt-1 animate-pulse">{errors.name.message}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-green-500 text-sm mb-1">{'>'} ORIGIN SIGNAL:</label>
              <input
                {...register("email")}
                className="bg-transparent border-b border-green-500/50 text-white focus:outline-none focus:border-green-400 p-2 font-share transition-colors"
                placeholder="[ ENTER EMAIL ]"
                onFocus={() => triggerMood('working')}
              />
              {errors.email && <span className="text-[#E63946] text-xs mt-1 animate-pulse">{errors.email.message}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-green-500 text-sm mb-1">{'>'} SUBJECT CODE:</label>
              <input
                {...register("subject")}
                className="bg-transparent border-b border-green-500/50 text-white focus:outline-none focus:border-green-400 p-2 font-share transition-colors"
                placeholder="[ ENTER SUBJECT ]"
                onFocus={() => triggerMood('working')}
              />
              {errors.subject && <span className="text-[#E63946] text-xs mt-1 animate-pulse">{errors.subject.message}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-green-500 text-sm mb-1">{'>'} TRANSMISSION TEXT:</label>
              <textarea
                {...register("message")}
                className="bg-green-950/20 border border-green-500/50 text-white focus:outline-none focus:border-green-400 p-3 font-share transition-colors min-h-[150px] resize-none"
                placeholder="[ ENTER MESSAGE... ]"
                onFocus={() => triggerMood('working')}
              />
              {errors.message && <span className="text-[#E63946] text-xs mt-1 animate-pulse">{errors.message.message}</span>}
            </div>

            <div className="pt-4 flex gap-4 items-center">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-green-600 hover:bg-green-500 text-black font-bangers text-2xl uppercase px-8 py-3 border-2 border-green-400 transition-colors flex items-center gap-2 group disabled:opacity-50"
              >
                TRANSMIT
                {status === 'sending' ? (
                  <span className="w-5 h-5 rounded-full border-2 border-black border-t-transparent animate-spin inline-block" />
                ) : (
                  <Rocket size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                )}
              </button>

              {status === 'success' && <span className="text-green-400 font-bold animate-[pulse_0.5s_3]">TRANSMISSION RECEIVED!</span>}
              {status === 'error' && <span className="text-[#E63946] font-bold animate-[pulse_0.5s_3]">SIGNAL LOST. RETRY.</span>}
            </div>

          </form>

        </MangaPanel>
      </div>
    </div>
  );
};
