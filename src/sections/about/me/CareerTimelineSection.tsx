import { Section } from '../../../components/primitives/Section';
import { Container } from '../../../components/primitives/Container';
import { BodyText, EditorialHeading, ItemTitle } from '../../../components/primitives/Typography';
import { useInView } from '../../../motion/useInView';
import { careerTimeline } from '../../../content/about';
import styles from './CareerTimelineSection.module.css';

/**
 * Career timeline on red: five stages on one fine horizontal line, each with its dated
 * milestones underneath. A second, quieter line runs above the whole length: visual craft,
 * carried through every stage. The lines draw in once when the timeline comes into view.
 * Below 1024px the line turns vertical.
 */
export function CareerTimelineSection() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  return (
    <Section tone="red" spacing="regular" aria-labelledby="career-heading">
      <Container>
        <div className={styles.head}>
          <EditorialHeading id="career-heading" text={careerTimeline.heading} />
          <BodyText className={styles.intro}>{careerTimeline.intro}</BodyText>
        </div>
        <div ref={ref} className={styles.timeline} data-inview={inView}>
          <p className={styles.thread}>
            <span className={styles.threadLabel}>{careerTimeline.craftThread}</span>
          </p>
          <ol className={styles.stages} aria-label={careerTimeline.label}>
            {careerTimeline.stages.map((stage, i) => (
              <li key={stage.title} className={styles.stage} style={{ ['--i' as string]: i }}>
                <span className={styles.dot} aria-hidden="true" />
                <p className={styles.number} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <ItemTitle className={styles.title}>{stage.title}</ItemTitle>
                <ul className={styles.milestones}>
                  {stage.milestones.map((m) => (
                    <li key={m.year}>
                      <span className={styles.year}>{m.year}</span>
                      <span className={styles.mTitle}>{m.title}</span>
                      <span className={styles.mText}>{m.text}</span>
                      {m.org && <span className={styles.org}>{m.org}</span>}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
