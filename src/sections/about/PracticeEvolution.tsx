import { Section } from '../../components/primitives/Section';
import { Container } from '../../components/primitives/Container';
import { BodyText } from '../../components/primitives/Typography';
import { KeywordStrip } from '../../components/compositions/KeywordStrip';
import { Reveal } from '../../motion/Reveal';
import { practiceEvolution } from '../../content/about';
import styles from './AboutSections.module.css';

/** The evolution as a keyword line, then the core idea in the narrow drop-cap column (Figma Frame 512). */
export function PracticeEvolution() {
  return (
    <Section tone="ink" spacing="spacious" aria-label="How the practice evolved">
      <KeywordStrip items={practiceEvolution.evolution} label="Visual design to build, in order" />
      <Container className={styles.centeredColumn}>
        <Reveal className={styles.narrow}>
          {practiceEvolution.body.map((paragraph, i) => (
            <BodyText key={i} measure="narrow" dropCap={i === 0}>
              {paragraph}
            </BodyText>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
