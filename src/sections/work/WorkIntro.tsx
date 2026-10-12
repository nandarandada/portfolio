import { Section } from '../../components/primitives/Section';
import { Container } from '../../components/primitives/Container';
import { DisplayHeading, BodyText } from '../../components/primitives/Typography';
import { EditorialGridBackground } from '../../components/primitives/EditorialGridBackground';
import { Reveal } from '../../motion/Reveal';
import { workPage } from '../../content/work';
import styles from './WorkIntro.module.css';

/**
 * Work opens briefly and hands over to the projects. Distinct from Home and About:
 * the headline sits low on the left, the supporting line aligns to its last line on the
 * right, and one full-width row of the red grid runs along the bottom edge like a ruler
 * leading into the collection.
 */
export function WorkIntro() {
  return (
    <Section tone="dark" spacing="none" className={styles.intro} aria-labelledby="work-title">
      <EditorialGridBackground region={{ left: 0, bottom: 0, width: 'full', height: 1 }} />
      <Container className={styles.inner}>
        <DisplayHeading as="h1" id="work-title" text={workPage.intro.headline} className={styles.headline} />
        <Reveal delay={350} className={styles.statement}>
          <BodyText>{workPage.intro.statement}</BodyText>
        </Reveal>
      </Container>
    </Section>
  );
}
