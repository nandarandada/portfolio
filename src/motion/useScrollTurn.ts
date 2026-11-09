import { useEffect, useRef } from 'react';
import { useReducedMotion } from './useInView';

/**
 * Turns an element gently while it passes through the viewport: `--turn` goes from
 * -degrees/2 (entering at the bottom) to +degrees/2 (leaving at the top), so it is upright
 * in the middle of its pass. The element applies it with `transform: rotate(var(--turn))`.
 * Updates once per frame while scrolling; nothing runs when reduced motion is preferred.
 */
export function useScrollTurn<T extends HTMLElement>(degrees: number) {
  const ref = useRef<T>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      el.style.removeProperty('--turn');
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < -vh || rect.top > 2 * vh) return; // far off screen: skip the work
      const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));
      el.style.setProperty('--turn', `${((progress - 0.5) * degrees).toFixed(2)}deg`);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [degrees, reduced]);

  return ref;
}
