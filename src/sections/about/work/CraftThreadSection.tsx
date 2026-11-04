import type { CSSProperties } from 'react';
import { Section } from '../../../components/primitives/Section';
import { Container } from '../../../components/primitives/Container';
import { BodyText, DisplayHeading } from '../../../components/primitives/Typography';
import { useInView } from '../../../motion/useInView';
import { craftThread } from '../../../content/about';
import styles from './CraftThreadSection.module.css';

/**
 * Craft as a continuous thread: one red line runs the full width of the dark section and
 * every point where craft shows up hangs from it, alternating above and below. The thread
 * draws across once in view; with reduced motion it is simply there.
 */
export function CraftThreadSection() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.25 });
  return (
    <Section tone="dark" spacing="spacious" aria-labelledby="craft-thread-heading">
      <Container>
        <div className={styles.head}>
          <DisplayHeading as="h2" id="craft-thread-heading" text={craftThread.headline} />
          <BodyText className={styles.body}>{craftThread.body}</BodyText>
        </div>
      </Container>
      <div ref={ref} className={styles.thread} data-inview={inView}>
        <ol className={styles.points}>
          {craftThread.points.map((point, i) => (
            <li key={point} className={styles.point} style={{ '--i': i } as CSSProperties}>
              <span className={styles.knot} aria-hidden="true" />
              <span className={styles.label}>{point}</span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
