import { useState, useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export type KaiMood = 'idle' | 'excited' | 'wave' | 'happy' | 'working';

export const useKaiMood = () => {
  const [mood, setMood] = useState<KaiMood>('idle');
  const pathname = usePathname();

  // Mood trigger rules based on path
  useEffect(() => {
    switch (pathname) {
      case '/':
      case '/transmit':
        setMood('wave');
        break;
      case '/trophies':
        setMood('happy');
        break;
      default:
        setMood('idle');
    }

    // Auto revert wave to idle after 3s
    let timeout: NodeJS.Timeout;
    if (pathname === '/' || pathname === '/transmit') {
       timeout = setTimeout(() => {
         setMood('idle');
       }, 3000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    }
  }, [pathname]);

  const triggerMood = useCallback((newMood: KaiMood, durationMs?: number) => {
    setMood(newMood);
    if (durationMs) {
      setTimeout(() => {
        setMood('idle');
      }, durationMs);
    }
  }, []);

  return { mood, triggerMood };
};
