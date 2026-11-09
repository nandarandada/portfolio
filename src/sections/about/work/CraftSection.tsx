import { Section } from '../../../components/primitives/Section';
import { Container } from '../../../components/primitives/Container';
import { EditorialHeading } from '../../../components/primitives/Typography';
import { Reveal } from '../../../motion/Reveal';
import { useInView } from '../../../motion/useInView';
import { craft } from '../../../content/about';
import styles from './CraftSection.module.css';

/**
 * Craft makes the difference: the chapter's editorial moment, on the red textured surface.
 * One centered composition: the heading, a narrow serif text column beneath it (left-aligned
 * for reading), then a fine line down to the italic capricho statement. The line draws once
 * in view and the statement fades in as it lands.
 */
export function CraftSection() {
  // The fine line draws down from the text, then the capricho line appears beneath it
  const [closingRef, closingInView] = useInView<HTMLDivElement>({ threshold: 0.5 });
  return (
    <Section tone="red" spacing="spacious" aria-labelledby="craft-heading">
      <Container className={styles.inner}>
        <div className={styles.statement}>
          <EditorialHeading id="craft-heading" text={craft.headline} className={styles.heading} />
          <Reveal className={styles.text}>
            {craft.body.map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
        <div ref={closingRef} className={styles.closing} data-inview={closingInView}>
          <span className={styles.rule} aria-hidden="true" />
          <p className={styles.capricho}>{craft.capricho}</p>
        </div>
      </Container>
    </Section>
  );
}
