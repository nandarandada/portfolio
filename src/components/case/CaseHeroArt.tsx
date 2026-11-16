import { useEffect, useState, type CSSProperties } from 'react';
import styles from './CaseHeroArt.module.css';

type CaseHeroArtProps = {
  /** Loads the layered SVG markup (a local, trusted asset) as a separate chunk. */
  load: () => Promise<string>;
  /** viewBox ratio, e.g. '1200 / 594'. The frame keeps it while the art loads. */
  ratio: string;
  /** Colour shown until the art has loaded (its own background). */
  background: string;
  label: string;
};

/**
 * Animated key art. The SVG is inlined so its layers can move separately; the motion lives in
 * CaseHeroArt.module.css and reads the classes the SVG was prepared with:
 * `.aa-glow`, `.aa-dot` (with `--i`, its place along the arc), `.aa-star` (`--d`, `--o`),
 * `.aa-mountains`, `.aa-emblem`. With reduced motion, everything is simply shown.
 */
export function CaseHeroArt({ load, ratio, background, label }: CaseHeroArtProps) {
  const [markup, setMarkup] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    load()
      .then((svg) => alive && setMarkup(svg))
      .catch(() => undefined);
    return () => {
      alive = false;
    };
  }, [load]);

  return (
    <div
      className={styles.art}
      style={{ '--ratio': ratio, background } as CSSProperties}
      role={markup ? undefined : 'img'}
      aria-label={markup ? undefined : label}
      // The SVG is a file from this repository, prepared at build time: not user content.
      dangerouslySetInnerHTML={markup ? { __html: markup } : undefined}
    />
  );
}
