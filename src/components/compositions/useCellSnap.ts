import { useLayoutEffect, type RefObject } from 'react';

/**
 * Rounds `target`'s height up to whole grid cells, so grid rows below it (and in the
 * next grid section) continue on the same rhythm.
 * `content` is measured (plus `target`'s vertical padding); `section` provides the cell
 * size (section width / --grid-cols).
 */
export function useCellSnap(
  section: RefObject<HTMLElement>,
  target: RefObject<HTMLElement>,
  content: RefObject<HTMLElement>,
) {
  useLayoutEffect(() => {
    const sectionEl = section.current;
    const targetEl = target.current;
    const contentEl = content.current;
    if (!sectionEl || !targetEl || !contentEl) return;

    const snap = () => {
      const cols = Number(getComputedStyle(sectionEl).getPropertyValue('--grid-cols')) || 21;
      const cell = sectionEl.clientWidth / cols;
      const { paddingTop, paddingBottom } = getComputedStyle(targetEl);
      const natural = contentEl.offsetHeight + parseFloat(paddingTop) + parseFloat(paddingBottom);
      targetEl.style.minHeight = `${Math.ceil(natural / cell - 0.01) * cell}px`;
    };

    snap();
    // Snapping resizes the section; defer to the next frame so observers never loop.
    let frame = 0;
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(snap);
    });
    observer.observe(sectionEl);
    observer.observe(contentEl);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [section, target, content]);
}
