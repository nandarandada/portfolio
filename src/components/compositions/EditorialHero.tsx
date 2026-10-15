import { useRef } from 'react';
import { useCellSnap } from './useCellSnap';
import type { SectionTone } from '../primitives/Section';
import { Section, Surface } from '../primitives/Section';
import { Container } from '../primitives/Container';
import { DisplayHeading, BodyText } from '../primitives/Typography';
import { EditorialGridBackground } from '../primitives/EditorialGridBackground';
import { Reveal } from '../../motion/Reveal';
import styles from './EditorialHero.module.css';

/** Turns *phrase* into an accented span; everything else stays plain text. */
const withAccents = (text: string) =>
  text.split(/(\*[^*]+\*)/).map((part, i) =>
    part.startsWith('*') && part.endsWith('*') ? (
      <span key={i} className={styles.accent}>
        {part.slice(1, -1)}
      </span>
    ) : (
      part
    ),
  );

type EditorialHeroProps = {
  headline: string;
  /**
   * Short supporting statement, set in the bordered grid box on the right. One string per
   * paragraph. Wrap a phrase in *asterisks* to set it in the serif, uppercase.
   */
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
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  // desktop (where the grid shows): height in whole cells, at least ten
  useCellSnap(sectionRef, sectionRef, contentRef, { minCells: 10, minWidth: 1024 });
  return (
    <Section ref={sectionRef} tone={tone} spacing="none" className={styles.hero} aria-labelledby={id}>
      <EditorialGridBackground region={{ left: 13, top: 3, width: 8, height: 'full' }} hideBelow="desktop" />
      <div ref={contentRef}>
      <Container className={styles.inner}>
        <DisplayHeading as="h1" id={id} text={headline} className={styles.headline} />
        <Reveal delay={350} className={styles.statementWrap}>
          <Surface className={styles.statement} snap={1024}>
            <div>
              {(Array.isArray(statement) ? statement : [statement]).map((paragraph) => (
                <BodyText key={paragraph}>{withAccents(paragraph)}</BodyText>
              ))}
            </div>
          </Surface>
        </Reveal>
      </Container>
      </div>
    </Section>
  );
}
