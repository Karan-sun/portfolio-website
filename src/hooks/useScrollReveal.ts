import { useInView } from "framer-motion";
import { useRef } from "react";

export const useScrollReveal = (once = true, margin = "-100px") => {
  const ref = useRef<HTMLDivElement>(null);
  // Type assertion or casting to any because of Framer Motion types version mismatch potential
  const isInView = useInView(ref as any, { once, margin: margin as any });

  return { ref, isInView };
};

export const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    } 
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
