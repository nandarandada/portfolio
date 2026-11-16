import type { CSSProperties } from 'react';
import { Reveal } from '../../motion/Reveal';
import styles from './CaseSitemap.module.css';

export type CaseSitemapSection = {
  title: string;
  pages: string[];
  /** Opens in a new tab, outside the main navigation. */
  external?: boolean;
  /** Who the section is for, in a word or two (optional). */
  note?: string;
};

type CaseSitemapProps = {
  root: string;
  sections: CaseSitemapSection[];
  /** Label for the main-navigation group and the new-tab group. */
  groups: { main: string; external: string };
  caption?: string;
  label: string;
};

/**
 * A sitemap drawn in HTML: the root, then two groups of sections, the main story and the areas
 * that open in a new tab, each with its pages. Real nested lists, so it reads in order without
 * the drawing; the connectors are decoration. On small screens the columns stack.
 */
export function CaseSitemap({ root, sections, groups, caption, label }: CaseSitemapProps) {
  const main = sections.filter((s) => !s.external);
  const external = sections.filter((s) => s.external);

  const column = (section: CaseSitemapSection, i: number) => (
    <Reveal as="li" key={section.title} delay={i * 70} className={styles.section}>
      <p className={styles.sectionTitle}>
        {section.title}
        {section.external && (
          <span className={styles.newTab} aria-label="opens in a new tab">
            ↗
          </span>
        )}
      </p>
      {section.note && <p className={styles.sectionNote}>{section.note}</p>}
      <ul className={styles.pages}>
        {section.pages.map((page) => (
          <li key={page}>{page}</li>
        ))}
      </ul>
    </Reveal>
  );

  return (
    <figure className={styles.sitemap}>
      <nav aria-label={label}>
        <div className={styles.rootRow}>
          <p className={styles.root}>{root}</p>
        </div>
        <div className={styles.groups}>
          <section className={styles.group} aria-label={groups.main}>
            <p className={styles.groupLabel}>{groups.main}</p>
            <ul className={styles.sections} style={{ '--cols': main.length } as CSSProperties}>
              {main.map(column)}
            </ul>
          </section>
          <section className={`${styles.group} ${styles.groupExternal}`} aria-label={groups.external}>
            <p className={styles.groupLabel}>{groups.external}</p>
            <ul className={styles.sections} style={{ '--cols': external.length } as CSSProperties}>
              {external.map((s, i) => column(s, main.length + i))}
            </ul>
          </section>
        </div>
      </nav>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
