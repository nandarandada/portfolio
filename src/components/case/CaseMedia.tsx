import { useEffect, useRef, type CSSProperties } from 'react';
import { ImageReveal } from '../../motion/ImageReveal';
import { useReducedMotion } from '../../motion/useInView';
import type { CaseMedia } from '../../content/cases/types';
import styles from './Case.module.css';

const cx = (...names: Array<string | false | undefined>) => names.filter(Boolean).join(' ');

/** '16 / 9' → '16:9' (readable ratio for the placeholder guidance). */
const readableRatio = (ratio: string) => ratio.replace(/\s*\/\s*/, ':');

/**
 * Editorial placeholder for a missing asset: ID, title, what to add, ratio and an
 * art-direction tip, framed in the project's palette. It is only rendered while the media
 * has no `src`, so the guidance disappears as soon as the asset is added.
 */
export function CasePlaceholder({ media, ratio }: { media: CaseMedia; ratio?: string }) {
  const kind = media.type === 'video' ? 'Video' : 'Image';
  return (
    <div className={styles.placeholder} data-id={media.id} style={{ '--ratio': ratio ?? media.aspectRatio } as CSSProperties}>
      <div className={styles.placeholderInner}>
        <p className={styles.placeholderId}>
          <span>{media.id}</span> <span aria-hidden="true">—</span> {media.title}
        </p>
        {media.recommendation && <p className={styles.placeholderText}>{media.recommendation}</p>}
        <p className={styles.placeholderMeta}>
          <span>
            {kind} · Recommended {readableRatio(media.aspectRatio)}
          </span>
          {media.format && <span>{media.format}</span>}
          {media.tip && <span className={styles.placeholderTip}>{media.tip}</span>}
        </p>
      </div>
    </div>
  );
}

/**
 * Muted, looping screen recording. It plays only while visible, and never on its own when
 * reduced motion is preferred (the viewer gets the poster and the native controls instead).
 */
function CaseVideo({ media }: { media: CaseMedia }) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const video = ref.current;
    if (!video || reduced) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => undefined);
        else video.pause();
      },
      { threshold: 0.3 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [reduced]);

  return (
    <video
      ref={ref}
      className={styles.asset}
      src={media.src}
      poster={media.poster}
      muted
      loop
      playsInline
      preload={reduced ? 'none' : 'metadata'}
      controls={reduced}
      aria-label={media.alt}
    />
  );
}

type CaseFigureProps = {
  media: CaseMedia;
  /** Crop to a different ratio than the asset's own (layout slot). */
  ratio?: string;
  /** Hide the caption even when the media has one. */
  hideCaption?: boolean;
  /** Reveal delay in ms. */
  delay?: number;
  className?: string;
};

/**
 * One media slot: the asset (image, artwork or video) with its caption, or the editorial
 * placeholder when the asset is still missing. Opens with the Frosa image reveal.
 */
export function CaseFigure({ media, ratio, hideCaption = false, delay = 0, className }: CaseFigureProps) {
  const style = {
    '--ratio': ratio ?? media.aspectRatio,
    '--fit': media.objectFit ?? 'cover',
    '--position': media.objectPosition ?? 'center',
  } as CSSProperties;

  if (!media.src) {
    return (
      <figure className={cx(styles.figure, className)} data-media-id={media.id}>
        <CasePlaceholder media={media} ratio={ratio} />
      </figure>
    );
  }

  return (
    <figure className={cx(styles.figure, className)} data-media-id={media.id}>
      <ImageReveal delay={delay}>
        <div className={cx(styles.frame, media.artwork && styles.artwork, media.onLight && styles.onLight, media.blend && styles.blend)} style={style}>
          {media.type === 'video' ? (
            <CaseVideo media={media} />
          ) : (
            <img className={styles.asset} src={media.src} alt={media.alt ?? ''} loading="lazy" decoding="async" />
          )}
        </div>
      </ImageReveal>
      {media.caption && !hideCaption && <figcaption className={styles.caption}>{media.caption}</figcaption>}
    </figure>
  );
}

/**
 * A tall full-page screenshot inside a fixed frame, panned from top to bottom as the frame
 * crosses the viewport. With reduced motion the frame is a plain scrollable region instead.
 */
export function CaseScrollScreen({ media, ratio = '3 / 4' }: { media: CaseMedia; ratio?: string }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const frame = frameRef.current;
    const img = imgRef.current;
    if (!frame || !img) return;
    if (reduced) {
      img.style.transform = '';
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = frame.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < -vh || rect.top > 2 * vh) return;
      // 0 when the frame's top reaches 85% of the viewport, 1 when its bottom reaches 15%
      const start = vh * 0.85;
      const end = vh * 0.15 - rect.height;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      const travel = Math.max(0, img.offsetHeight - frame.clientHeight);
      img.style.transform = `translate3d(0, ${(-travel * progress).toFixed(1)}px, 0)`;
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    img.addEventListener('load', schedule);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(raf);
      img.removeEventListener('load', schedule);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [reduced]);

  return (
    <figure className={styles.figure} data-media-id={media.id}>
      <ImageReveal>
        <div
          ref={frameRef}
          className={cx(styles.frame, styles.scrollScreen, reduced && styles.scrollable)}
          style={{ '--ratio': ratio } as CSSProperties}
          tabIndex={reduced ? 0 : undefined}
          role={reduced ? 'region' : undefined}
          aria-label={reduced ? media.title : undefined}
        >
          <img ref={imgRef} className={styles.scrollImage} src={media.src} alt={media.alt ?? ''} loading="lazy" decoding="async" />
        </div>
      </ImageReveal>
      {media.caption && <figcaption className={styles.caption}>{media.caption}</figcaption>}
    </figure>
  );
}
