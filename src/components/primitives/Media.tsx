import type { CSSProperties } from 'react';
import styles from './Media.module.css';

/**
 * Describes an image or video slot. Content files hold these objects, so swapping a
 * placeholder for a real asset is a data change: add `src` (and `alt`), nothing else.
 */
export type MediaAsset = {
  type?: 'image' | 'video';
  /** Path under /public, e.g. '/media/about/portrait.jpg'. Omit while the asset is missing. */
  src?: string;
  /** Required for meaningful images. Use '' for purely decorative media. */
  alt?: string;
  /** Width / height, e.g. '1280 / 565'. Taken from the Figma frame so the layout never shifts. */
  aspectRatio: string;
  objectFit?: CSSProperties['objectFit'];
  objectPosition?: CSSProperties['objectPosition'];
  /** Video poster image. */
  poster?: string;
  /** Short note shown inside the empty placeholder, e.g. 'Portrait'. Never shown once `src` exists. */
  placeholder?: string;
};

/**
 * Renders the asset when `src` is present, otherwise a neutral placeholder of the
 * exact same size. The gray placeholder is a stand-in only, not part of the identity.
 */
export function MediaPlaceholder({ media, className }: { media: MediaAsset; className?: string }) {
  const { type = 'image', src, alt = '', aspectRatio, objectFit = 'cover', objectPosition = 'center', poster, placeholder } = media;
  const style = { aspectRatio, '--fit': objectFit, '--position': objectPosition } as CSSProperties;

  if (!src) {
    return (
      <div className={[styles.frame, styles.empty, className].filter(Boolean).join(' ')} style={style} role="img" aria-label={placeholder ? `Placeholder: ${placeholder}` : 'Image placeholder'}>
        {placeholder && <span className={styles.note}>{placeholder}</span>}
      </div>
    );
  }

  return (
    <div className={[styles.frame, className].filter(Boolean).join(' ')} style={style}>
      {type === 'video' ? (
        <video className={styles.asset} src={src} poster={poster} autoPlay muted loop playsInline aria-label={alt || undefined} />
      ) : (
        <img className={styles.asset} src={src} alt={alt} loading="lazy" decoding="async" />
      )}
    </div>
  );
}
