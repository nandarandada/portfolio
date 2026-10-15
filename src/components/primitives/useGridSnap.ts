import { useLayoutEffect, useState, type RefObject } from 'react';

/** Offsets relative to the element's padding edge (where absolutely positioned children start). */
export type SnapBox = { left: number; top: number; width: number; height: number };

/**
 * Measures where an element sits on its section's grid and returns the smallest box made
 * of whole grid cells that contains it (offsets relative to the element itself).
 *
 * Positions are measured with sub-pixel precision (getBoundingClientRect), minus any
 * translation on the element or its ancestors, so reveal transforms never skew the result. `minWidth` turns snapping off on
 * narrower viewports, where that section's grid is hidden.
 */
export function useGridSnap(ref: RefObject<HTMLElement>, enabled: boolean, minWidth = 0): SnapBox | null {
  const [box, setBox] = useState<SnapBox | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;
    const section = el.closest<HTMLElement>('[data-tone]');
    if (!section) return;

    const measure = () => {
      if (window.innerWidth < minWidth) {
        setBox(null);
        return;
      }
      const cols = Number(getComputedStyle(section).getPropertyValue('--grid-cols')) || 21;
      const cell = section.clientWidth / cols;
      const s = section.getBoundingClientRect();
      // Position relative to the section, minus any translation on the node or its ancestors
      // (reveal transforms), with sub-pixel precision.
      const place = (target: HTMLElement) => {
        const r = target.getBoundingClientRect();
        let tx = 0;
        let ty = 0;
        for (let node: HTMLElement | null = target; node && node !== section; node = node.parentElement) {
          const t = getComputedStyle(node).transform;
          if (t && t !== 'none') {
            const m = new DOMMatrixReadOnly(t);
            tx += m.m41;
            ty += m.m42;
          }
        }
        return { x: r.left - s.left - tx, y: r.top - s.top - ty, width: r.width, height: r.height };
      };
      const { x, y, width, height } = place(el);
      const eps = 0.5;
      const gx0 = Math.floor((x + eps) / cell) * cell;
      const gy0 = Math.floor((y + eps) / cell) * cell;
      const gx1 = Math.ceil((x + width - eps) / cell) * cell;
      const gy1 = Math.ceil((y + height - eps) / cell) * cell;
      // Offsets are for an absolutely positioned child, so they are measured from the padding
      // edge of its containing block: the element itself when positioned, otherwise its
      // offsetParent (e.g. a card, when the caption is static so a stretched link covers the card).
      // (A transformed ancestor also becomes the containing block, so check for that too.)
      let cb: HTMLElement | null = el;
      while (cb && cb !== section) {
        const cs = getComputedStyle(cb);
        if (cs.position !== 'static' || cs.transform !== 'none') break;
        cb = cb.parentElement;
      }
      if (!cb) return;
      const origin = cb === el ? { x, y } : place(cb);
      const ox = origin.x + cb.clientLeft;
      const oy = origin.y + cb.clientTop;
      const next = { left: gx0 - ox, top: gy0 - oy, width: gx1 - gx0, height: gy1 - gy0 };
      setBox((prev) =>
        prev &&
        Math.abs(prev.left - next.left) < 0.5 &&
        Math.abs(prev.top - next.top) < 0.5 &&
        Math.abs(prev.width - next.width) < 0.5 &&
        Math.abs(prev.height - next.height) < 0.5
          ? prev
          : next,
      );
    };

    // A short timer rather than requestAnimationFrame: background tabs (and headless
    // captures) pause animation frames, which would leave a stale measurement.
    let frame = 0;
    const schedule = () => {
      window.clearTimeout(frame);
      frame = window.setTimeout(measure, 16);
    };
    measure();
    const observer = new ResizeObserver(schedule);
    observer.observe(section);
    observer.observe(el);
    window.addEventListener('resize', schedule);
    // reveals change transforms (and so containing blocks) without resizing anything
    section.addEventListener('transitionend', schedule);
    document.fonts?.ready.then(schedule);
    return () => {
      window.clearTimeout(frame);
      observer.disconnect();
      window.removeEventListener('resize', schedule);
      section.removeEventListener('transitionend', schedule);
    };
  }, [ref, enabled, minWidth]);

  return enabled ? box : null;
}
