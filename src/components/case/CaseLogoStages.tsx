import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { useReducedMotion } from '../../motion/useInView';
import styles from './CaseLogoStages.module.css';

export type CaseLogoStage = {
  id: string;
  /** Short name shown in the step list, e.g. 'Construction'. */
  label: string;
  src: string;
  alt: string;
  /**
   * Where the image sits in the shared frame, in % of the frame, so the logo lands in the same
   * place in every stage: left, top and width (height follows the image).
   */
  place: { left: number; top: number; width: number };
};

type CaseLogoStagesProps = {
  stages: CaseLogoStage[];
  /** Shared frame ratio, e.g. '842 / 595'. */
  ratio: string;
  /** Frame background behind images that don't fill it. */
  background: string;
  /** Seconds each stage stays before the next one. */
  hold?: number;
  label: string;
};

/**
 * The logo in one place while its brand-guide pages change around it: one stage fades into
 * the next, slowly. It plays only while in view and pauses on hover or focus; the step list lets
 * visitors jump to a stage. With reduced motion it never advances on its own.
 */
export function CaseLogoStages({ stages, ratio, background, hold = 3.2, label }: CaseLogoStagesProps) {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.35 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduced || !inView || paused) return;
    const t = window.setTimeout(() => setActive((i) => (i + 1) % stages.length), hold * 1000);
    return () => window.clearTimeout(t);
  }, [active, inView, paused, reduced, hold, stages.length]);

  return (
    <section
      ref={ref}
      className={styles.stages}
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className={styles.frame} style={{ '--ratio': ratio, background } as CSSProperties}>
        {stages.map((stage, i) => (
          <img
            key={stage.id}
            className={styles.layer}
            data-active={i === active}
            src={stage.src}
            alt={i === active ? stage.alt : ''}
            aria-hidden={i !== active}
            loading="lazy"
            decoding="async"
            style={{ left: `${stage.place.left}%`, top: `${stage.place.top}%`, width: `${stage.place.width}%` }}
          />
        ))}
      </div>
      <ol className={styles.steps}>
        {stages.map((stage, i) => (
          <li key={stage.id}>
            <button
              type="button"
              className={styles.step}
              aria-current={i === active ? 'step' : undefined}
              data-active={i === active}
              data-running={i === active && !reduced && inView && !paused}
              style={{ '--hold': `${hold}s` } as CSSProperties}
              onClick={() => setActive(i)}
            >
              <span className={styles.stepNumber}>{String(i + 1).padStart(2, '0')}</span>
              <span>{stage.label}</span>
              <span className={styles.progress} aria-hidden="true" />
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}
