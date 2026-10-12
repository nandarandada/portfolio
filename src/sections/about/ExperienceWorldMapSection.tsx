import { Section } from '../../components/primitives/Section';
import { Container } from '../../components/primitives/Container';
import { SectionLabel } from '../../components/primitives/Typography';
import { AnimatedWorldMap } from '../../components/compositions/AnimatedWorldMap';
import { Reveal } from '../../motion/Reveal';
import { experienceWorldMap } from '../../content/about';
import { worldMap } from '../../content/worldMap';
import styles from './AboutSections.module.css';

/** Ink section with the tracked two-line heading and the full-width dotted world map (Figma: About, Frame 512). */
export function ExperienceWorldMapSection() {
  return (
    <Section tone="ink" spacing="none" className={styles.mapSection} aria-labelledby="world-map-heading">
      <Container>
        <Reveal>
          <SectionLabel as="h2" id="world-map-heading" className={styles.mapHeading}>
            {experienceWorldMap.heading.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </SectionLabel>
        </Reveal>
      </Container>
      <div className={styles.map}>
        <AnimatedWorldMap artwork={worldMap} label={experienceWorldMap.mapLabel} />
      </div>
    </Section>
  );
}
