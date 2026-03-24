import { useRouter } from 'next/navigation';
import gsap from 'gsap';

export const useInkNavigation = () => {
  const router = useRouter();

  const navigate = (href: string) => {
    const overlay = document.getElementById('ink-transition-overlay');
    if (!overlay) {
      router.push(href);
      return;
    }

    // Ensure it's blocked from clicks
    overlay.style.pointerEvents = 'auto';

    // GSAP animation for ink expansion (we can simulate by scaling up a circle clip-path)
    gsap.fromTo(overlay, 
      {
        clipPath: 'circle(0% at center)',
        opacity: 1
      }, 
      {
        clipPath: 'circle(150% at center)',
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          router.push(href);
          // Wait for page route then fade out
          setTimeout(() => {
            gsap.to(overlay, {
              opacity: 0,
              duration: 0.4,
              onComplete: () => {
                overlay.style.pointerEvents = 'none';
                gsap.set(overlay, { clipPath: 'circle(0% at center)', opacity: 1 });
              }
            });
          }, 400); // adjust timing according to router speed
        }
      }
    );
  };

  return { navigate };
};
