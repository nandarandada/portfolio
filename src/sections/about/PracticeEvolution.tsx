import { Section } from '../../components/primitives/Section';
import { Container } from '../../components/primitives/Container';
import { BodyText, EditorialHeading } from '../../components/primitives/Typography';
import { KeywordStrip } from '../../components/compositions/KeywordStrip';
import { Reveal } from '../../motion/Reveal';
import { fromPhotoshop, practiceEvolution } from '../../content/about';
import styles from './AboutSections.module.css';

/** The evolution as a looping keyword line, then "From Photoshop to product strategy" (Figma Frame 512 language). */
export function PracticeEvolution() {
  return (
    <Section tone="ink" spacing="spacious" aria-labelledby="photoshop-heading">
      <KeywordStrip items={practiceEvolution.evolution} label="From visual design to building, in order" motion="loop" />
      <Container className={styles.centeredColumn}>
        <div className={styles.photoshop}>
          <EditorialHeading id="photoshop-heading" text={fromPhotoshop.headline} />
          <Reveal className={styles.narrow}>
            {fromPhotoshop.body.map((paragraph, i) => (
              <BodyText key={i} measure="narrow" dropCap={i === 0}>
                {paragraph}
              </BodyText>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
