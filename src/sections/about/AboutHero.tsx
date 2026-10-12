import { Section } from '../../components/primitives/Section';
import { Container } from '../../components/primitives/Container';
import { DisplayHeading, BodyText } from '../../components/primitives/Typography';
import { EditorialGridBackground } from '../../components/primitives/EditorialGridBackground';
import { Reveal } from '../../motion/Reveal';
import { aboutHero } from '../../content/about';
import styles from './AboutHero.module.css';

/**
 * About opens with the statement first, then the supporting sentence as its answer.
 * Headline in a controlled editorial measure (natural, balanced wrapping — no fixed breaks);
 * the supporting sentence sits directly below in plain sans, on the headline's left edge. A red grid block on the right is the counterweight.
 */
export function AboutHero() {
  return (
    <Section tone="dark" spacing="none" className={styles.hero} aria-labelledby="about-title">
      <EditorialGridBackground region={{ right: 0, top: 4, width: 4, height: 6 }} hideBelow="desktop" />
      <Container className={styles.inner}>
        <DisplayHeading as="h1" id="about-title" text={aboutHero.headline} className={styles.headline} />
        <Reveal delay={500} className={styles.statement}>
          <BodyText className={styles.statementText}>{aboutHero.statement}</BodyText>
        </Reveal>
      </Container>
    </Section>
  );
}
