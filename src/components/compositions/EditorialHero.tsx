import type { SectionTone } from '../primitives/Section';
import { Section, Surface } from '../primitives/Section';
import { Container } from '../primitives/Container';
import { DisplayHeading, BodyText } from '../primitives/Typography';
import { EditorialGridBackground } from '../primitives/EditorialGridBackground';
import { Reveal } from '../../motion/Reveal';
import styles from './EditorialHero.module.css';

type EditorialHeroProps = {
  headline: string;
  /** Short supporting statement, set in the bordered grid box on the right. One string per paragraph. */
  statement: string | string[];
  tone?: Extract<SectionTone, 'dark' | 'ink'>;
  id?: string;
};

/**
 * The Frosa hero (Home, Figma node 124:2): serif headline on the left, a short sans
 * statement in a bordered box that sits on the red grid on the right.
 * The grid occupies columns 14–21 from the third row down; the statement box covers
 * five columns of it, so the text always lands on a clean surface.
 */
export function EditorialHero({ headline, statement, tone = 'dark', id }: EditorialHeroProps) {
  return (
    <Section tone={tone} spacing="none" className={styles.hero} aria-labelledby={id}>
      <EditorialGridBackground region={{ left: 13, top: 3, width: 8, height: 'full' }} hideBelow="desktop" />
      <Container className={styles.inner}>
        <DisplayHeading as="h1" id={id} text={headline} className={styles.headline} />
        <Reveal delay={350} className={styles.statementWrap}>
          <Surface className={styles.statement}>
            <div>
              {(Array.isArray(statement) ? statement : [statement]).map((paragraph) => (
                <BodyText key={paragraph}>{paragraph}</BodyText>
              ))}
            </div>
          </Surface>
        </Reveal>
      </Container>
    </Section>
  );
}
