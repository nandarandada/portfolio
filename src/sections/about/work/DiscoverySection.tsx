import { Section } from '../../../components/primitives/Section';
import { Container } from '../../../components/primitives/Container';
import { BodyText, EditorialHeading } from '../../../components/primitives/Typography';
import { Reveal } from '../../../motion/Reveal';
import { discovery } from '../../../content/about';
import styles from './DiscoverySection.module.css';

/**
 * Discovery before automation: Understand → Explore → Test → Review → Scale, with "Scale"
 * marked "when appropriate" and a return path from Review back to Understand.
 */
export function DiscoverySection() {
  const last = discovery.steps.length - 1;
  return (
    <Section tone="ink" spacing="spacious" aria-labelledby="discovery-heading">
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <EditorialHeading id="discovery-heading" text={discovery.headline} />
          <Reveal className={styles.body}>
            {discovery.body.map((paragraph) => (
              <BodyText key={paragraph}>{paragraph}</BodyText>
            ))}
          </Reveal>
        </div>
        <Reveal delay={150}>
          <ol className={styles.steps} aria-label="An order I keep in mind">
            {discovery.steps.map((step, i) => (
              <li key={step} className={i === last ? styles.scale : styles.step}>
                <span className={styles.label}>{step}</span>
                {i === last && <span className={styles.when}>{discovery.scaleNote}</span>}
              </li>
            ))}
          </ol>
          <p className={styles.loop}>
            <span aria-hidden="true" className={styles.loopArrow} />
            {discovery.loopNote}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
