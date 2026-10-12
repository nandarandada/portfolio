import { Section } from '../primitives/Section';
import { Container } from '../primitives/Container';
import { EditorialGridBackground } from '../primitives/EditorialGridBackground';
import { Reveal } from '../../motion/Reveal';
import styles from './TimelineSection.module.css';

export type Milestone = {
  year: string;
  title: string;
  text: string;
  /** Organisation or context, set in italics. Optional. */
  org?: string;
};

type TimelineSectionProps = {
  id: string;
  /** Accessible name; the Figma timeline has no visible heading. */
  label: string;
  items: Milestone[];
};

/**
 * Vertical timeline on red (Figma: About, Frame 523). A darker band runs the full height
 * of the section; each year is set vertically inside it, one digit per line.
 */
export function TimelineSection({ id, label, items }: TimelineSectionProps) {
  return (
    <Section tone="red" spacing="none" id={id} aria-label={label} className={styles.section}>
      <div className={styles.band} aria-hidden="true" />
      <EditorialGridBackground region={{ right: 0, top: 13, width: 6, height: 5 }} hideBelow="desktop" fade="right" />
      <Container>
        <ol className={styles.list}>
          {items.map((item) => (
            <Reveal as="li" key={`${item.year}-${item.title}`} className={styles.item}>
              <p className={styles.year}>
                <span className="visually-hidden">{item.year}</span>
                <span className={styles.digits} aria-hidden="true">
                  {item.year.split('').map((digit, i) => (
                    <span key={i}>{digit}</span>
                  ))}
                </span>
              </p>
              <div className={styles.content}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.text}>{item.text}</p>
                {item.org && <p className={styles.org}>{item.org}</p>}
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
