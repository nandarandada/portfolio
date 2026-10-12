import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ElementType } from 'react';
import { useInView, useReducedMotion } from './useInView';
import styles from './motion.module.css';

type TextRevealProps = {
  as?: ElementType;
  /** Plain text. A newline forces a line break (and starts a new masked line). */
  text: string;
  className?: string;
  id?: string;
  delay?: number;
};

/**
 * Masked, line-based reveal for large statements.
 * Lines are measured from the real layout, so they follow the font, the width
 * and the breakpoint; they are re-measured when the element's width changes.
 * Screen readers get the whole sentence through aria-label.
 * Use it for headlines and statements, not for long body copy.
 */
export function TextReveal({ as: Tag = 'p', text, className, id, delay = 0 }: TextRevealProps) {
  const [ref, inView] = useInView<HTMLElement>();
  const reduced = useReducedMotion();
  const [lines, setLines] = useState<string[] | null>(null);
  const width = useRef(0);

  // A new text means new lines.
  useEffect(() => setLines(null), [text]);

  // While `lines` is null the words are rendered individually; group them by row.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || reduced || lines !== null) return;
    const result: string[] = [];
    let top = -Infinity;
    let forceBreak = true;
    el.querySelectorAll<HTMLSpanElement>('[data-word]').forEach((span) => {
      const word = span.dataset.word ?? '';
      if (forceBreak || span.offsetTop > top + 2) {
        result.push(word);
        top = span.offsetTop;
      } else {
        result[result.length - 1] += ` ${word}`;
      }
      forceBreak = span.dataset.last === 'true';
    });
    setLines(result);
  }, [lines, reduced, ref]);

  // Re-measure when the available width changes (breakpoints, rotation, resizing).
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    const observer = new ResizeObserver(([entry]) => {
      const next = Math.round(entry.contentRect.width);
      if (width.current && next !== width.current) setLines(null);
      width.current = next;
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced, ref]);

  if (reduced) {
    return (
      <Tag id={id} className={className}>
        {text.split('\n').map((segment, i) => (
          <span key={i} style={{ display: 'block' }}>
            {segment}
          </span>
        ))}
      </Tag>
    );
  }

  const segments = text.split('\n').map((segment) => segment.split(/\s+/).filter(Boolean));

  return (
    <Tag
      ref={ref}
      id={id}
      className={className}
      aria-label={text.replace(/\n/g, ' ')}
      data-inview={inView && lines !== null}
      style={{ '--delay': `${delay}ms` } as CSSProperties}
    >
      {lines
        ? lines.map((line, i) => (
            <span key={`${i}-${line}`} className={styles.line} aria-hidden="true">
              <span className={styles.lineInner} style={{ '--i': i } as CSSProperties}>
                {line}
              </span>
            </span>
          ))
        : segments.map((segment, s) => (
            <span key={s} aria-hidden="true" className={styles.measure} style={{ display: 'block' }}>
              {segment.map((word, w) => (
                <span key={w} data-word={word} data-last={w === segment.length - 1 ? 'true' : undefined}>
                  {word}
                  {w < segment.length - 1 ? ' ' : ''}
                </span>
              ))}
            </span>
          ))}
    </Tag>
  );
}
