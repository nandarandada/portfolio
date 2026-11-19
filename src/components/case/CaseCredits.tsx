import type { CSSProperties } from 'react';
import { Reveal } from '../../motion/Reveal';
import { TextLink } from '../primitives/TextLink';
import type { CaseMetaItem } from '../../content/cases/types';
import styles from './CaseCredits.module.css';

const cx = (...names: Array<string | false | undefined>) => names.filter(Boolean).join(' ');

export type CaseCreditLogo = {
  /** The organisation's name: the logo's accessible label. */
  name: string;
  /** An authentic logo file (SVG preferred). */
  src: string;
  /** The logo's width / height, e.g. '328 / 66'. */
  ratio: string;
  /** Full-colour logo that needs a light chip behind it. */
  onLight?: boolean;
  /** One-colour logo, drawn in the text colour (the file is used as a mask). */
  mono?: boolean;
};

/**
 * The closing credit of a case: who the work was for and with, the role and the year, an honest
 * one-line statement, and — only when authentic files exist — the organisations' logos.
 * Understated on purpose: the logos are small and sit after the work, never as a banner.
 */
export function CaseCredits({
  id,
  label,
  items,
  statement,
  logos = [],
  link,
  next,
}: {
  id: string;
  label: string;
  items: CaseMetaItem[];
  statement: string;
  logos?: CaseCreditLogo[];
  link?: { label: string; href: string; note?: string };
  next?: { label: string; href: string };
}) {
  return (
    <div className={styles.credits}>
      <p id={id} className={styles.label}>
        {label}
      </p>
      <Reveal as="dl" className={styles.items}>
        {items.map((item) => (
          <div key={item.label} className={styles.item}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </Reveal>
      {logos.length > 0 && (
        <ul className={styles.logos} aria-label="Organisations">
          {logos.map((logo) => (
            <li key={logo.name} className={cx(styles.logo, logo.onLight && styles.chip)}>
              {logo.mono ? (
                <span
                  role="img"
                  aria-label={logo.name}
                  className={styles.mono}
                  style={{ '--logo': `url("${logo.src}")`, aspectRatio: logo.ratio } as CSSProperties}
                />
              ) : (
                <img src={logo.src} alt={logo.name} style={{ aspectRatio: logo.ratio }} loading="lazy" decoding="async" />
              )}
            </li>
          ))}
        </ul>
      )}
      <Reveal className={styles.statement}>
        <p>{statement}</p>
      </Reveal>
      {(link || next) && (
        <div className={styles.links}>
          {link && (
            <p className={styles.live}>
              <TextLink href={link.href} className={styles.link}>
                {link.label} <span aria-hidden="true">↗</span>
                <span className={styles.srOnly}> (opens in a new tab)</span>
              </TextLink>
              {link.note && <span className={styles.note}>{link.note}</span>}
            </p>
          )}
          {next && (
            <TextLink href={next.href} className={styles.link}>
              {next.label} <span aria-hidden="true">→</span>
            </TextLink>
          )}
        </div>
      )}
    </div>
  );
}
