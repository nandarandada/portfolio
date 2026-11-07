import { Section } from '../../components/primitives/Section';
import { AnimatedWorldMap } from '../../components/compositions/AnimatedWorldMap';
import { experienceWorldMap } from '../../content/about';
import { worldMap } from '../../content/worldMap';
import styles from './AboutSections.module.css';

/**
 * The full-width dotted world map on ink, directly under "From Photoshop to product strategy"
 * (same surface, so the two read as one section). No visible heading; the map describes itself.
 */
export function ExperienceWorldMapSection() {
  return (
    <Section tone="ink" spacing="none" className={styles.mapSection} aria-label={experienceWorldMap.label}>
      <AnimatedWorldMap artwork={worldMap} label={experienceWorldMap.mapLabel} />
    </Section>
  );
}
