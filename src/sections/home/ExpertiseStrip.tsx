import { Section } from '../../components/primitives/Section';
import { KeywordStrip } from '../../components/compositions/KeywordStrip';
import { expertise } from '../../content/home';
import styles from './HomeSections.module.css';

/** The ink band of tracked uppercase disciplines (Figma: Home, above the project grid). */
export function ExpertiseStrip() {
  return (
    <Section tone="ink" spacing="none" className={styles.strip} aria-label="Expertise">
      <KeywordStrip items={expertise} label="Expertise" />
    </Section>
  );
}
