import { Section } from '../../../components/primitives/Section';
import { Container } from '../../../components/primitives/Container';
import { BodyText, EditorialHeading, ItemTitle } from '../../../components/primitives/Typography';
import { Reveal } from '../../../motion/Reveal';
import { careerTimeline } from '../../../content/about';
import styles from './CareerTimelineSection.module.css';

/**
 * Career timeline in the Figma About composition (Frame 523): a 306px column centred on the
 * red page, a darker band down its left edge with each year set vertically inside it, one
 * digit per line, and the milestone beside it.
 * Motion: the band is static; each milestone fades up as it arrives.
 */
export function CareerTimelineSection() {
  const milestones = careerTimeline.stages.flatMap((stage) => stage.milestones);
  return (
    <Section tone="red" spacing="none" className={styles.section} aria-labelledby="career-heading">
      <Container className={styles.head}>
        <EditorialHeading id="career-heading" text={careerTimeline.heading} />
        <BodyText className={styles.intro}>{careerTimeline.intro}</BodyText>
      </Container>
      <div className={styles.timeline}>
        <div className={styles.band} aria-hidden="true" />
        <Container>
          <ol className={styles.list} aria-label={careerTimeline.label}>
            {milestones.map((m) => (
              <Reveal as="li" key={`${m.year}-${m.title}`} className={styles.item}>
                <p className={styles.year}>
                  <span className="visually-hidden">{m.year}</span>
                  <span className={styles.digits} aria-hidden="true">
                    {m.year.split('').map((digit, i) => (
                      <span key={i}>{digit}</span>
                    ))}
                  </span>
                </p>
                <div className={styles.content}>
                  <ItemTitle>{m.title}</ItemTitle>
                  <p className={styles.text}>{m.text}</p>
                  {m.org && <p className={styles.org}>{m.org}</p>}
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </div>
    </Section>
  );
}
