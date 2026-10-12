import { useMemo, type CSSProperties } from 'react';
import type { DotRuns } from '../../content/worldMap';
import { useInView } from '../../motion/useInView';
import styles from './AnimatedWorldMap.module.css';

export type DotMapArtwork = {
  width: number;
  height: number;
  pitchX: number;
  pitchY: number;
  originX: number;
  originY: number;
  radius: number;
  base: DotRuns;
  regions: Array<{ id: string; dots: DotRuns }>;
};

type AnimatedWorldMapProps = {
  artwork: DotMapArtwork;
  /** Accessible description of what the map shows. */
  label: string;
};

/* Timing (ms). Base map fades in, then each red region turns from white to red,
   dot by dot from its center outward, one region after another. ≈ 2.4s in total. */
const BASE_FADE = 900;
const REGION_START = 550;
const REGION_STAGGER = 280;
const REGION_SPREAD = 450;

const dotPath = (cx: number, cy: number, r: number) =>
  `M${(cx - r).toFixed(2)} ${cy.toFixed(2)}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;

const centers = (artwork: DotMapArtwork, runs: DotRuns) =>
  runs.flatMap(([row, segments]) =>
    segments.flatMap(([from, to]) =>
      Array.from({ length: to - from + 1 }, (_, i) => ({
        x: artwork.originX + (from + i) * artwork.pitchX,
        y: artwork.originY + row * artwork.pitchY,
      })),
    ),
  );

/**
 * The dotted world map with its red highlights.
 * Artwork (dot positions, regions) is data; this component only draws and animates it.
 * - Base and red dots share one SVG coordinate system, so they can never drift apart.
 * - Plays once, when the map is meaningfully in view; the final state is the static design.
 * - Reduced motion: the completed map, without transitions.
 */
export function AnimatedWorldMap({ artwork, label }: AnimatedWorldMapProps) {
  const [ref, inView] = useInView<SVGSVGElement>({ threshold: 0.3, rootMargin: '0px' });

  const basePath = useMemo(
    () => centers(artwork, artwork.base).map((d) => dotPath(d.x, d.y, artwork.radius)).join(''),
    [artwork],
  );

  const regions = useMemo(
    () =>
      artwork.regions.map((region, index) => {
        const dots = centers(artwork, region.dots);
        const cx = dots.reduce((sum, d) => sum + d.x, 0) / dots.length;
        const cy = dots.reduce((sum, d) => sum + d.y, 0) / dots.length;
        const reach = Math.max(...dots.map((d) => Math.hypot(d.x - cx, d.y - cy))) || 1;
        return {
          id: region.id,
          dots: dots.map((d) => ({
            ...d,
            delay: REGION_START + index * REGION_STAGGER + (Math.hypot(d.x - cx, d.y - cy) / reach) * REGION_SPREAD,
          })),
        };
      }),
    [artwork],
  );

  return (
    <svg
      ref={ref}
      className={styles.map}
      viewBox={`0 0 ${artwork.width} ${artwork.height}`}
      role="img"
      aria-label={label}
      data-inview={inView}
      style={{ '--base-fade': `${BASE_FADE}ms` } as CSSProperties}
    >
      <g className={styles.base}>
        <path d={basePath} className={styles.dots} />
        {regions.map((region) => (
          <g key={region.id} data-region={region.id}>
            {region.dots.map((d, i) => (
              <circle
                key={i}
                cx={d.x.toFixed(2)}
                cy={d.y.toFixed(2)}
                r={artwork.radius}
                className={styles.highlight}
                style={{ '--delay': `${Math.round(d.delay)}ms` } as CSSProperties}
              />
            ))}
          </g>
        ))}
      </g>
    </svg>
  );
}
