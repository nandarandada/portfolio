import { useLayoutEffect, useRef, useState } from 'react';
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
/**
 * Below 1024px the hero stacks, so the grid can't sit beside the headline. Instead it fills
 * the hero from one row above the statement box (but always below the headline) down to the
 * bottom, in whole rows, and the box snaps onto it — the same frame-on-grid composition.
 */
function useSmallGridTop(section: React.RefObject<HTMLElement>, statement: React.RefObject<HTMLElement>) {
  const [top, setTop] = useState<number | null>(null);
  useLayoutEffect(() => {
    const sec = section.current;
    const box = statement.current;
    if (!sec || !box) return;
    let frame = 0;
    const measure = () => {
      if (window.innerWidth >= 1024) return setTop(null);
      const cols = Number(getComputedStyle(sec).getPropertyValue('--grid-cols')) || 8;
      const cell = sec.clientWidth / cols;
      if (!(cell > 0)) return;
      // offsetTop chain (ignores the reveal's translate)
      let y = 0;
      for (let n: HTMLElement | null = box; n && n !== sec; n = n.offsetParent as HTMLElement | null) y += n.offsetTop;
      // never above the headline's last line: grid lines must not cross text
      const head = sec.querySelector('h1');
      let hb = 0;
      for (let n: HTMLElement | null = head as HTMLElement | null; n && n !== sec; n = n.offsetParent as HTMLElement | null) hb += n.offsetTop;
      hb += (head as HTMLElement | null)?.offsetHeight ?? 0;
      setTop(Math.max(Math.ceil(hb / cell + 0.15), Math.floor(y / cell) - 1));
    };
    measure();
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    });
    ro.observe(sec);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
    };
  }, [section, statement]);
  return top;
}

export function EditorialHero({ headline, statement, tone = 'dark', id }: EditorialHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statementRef = useRef<HTMLDivElement>(null);
  // height in whole cells (at least ten), so the grid always ends on a complete row
  useCellSnap(sectionRef, sectionRef, contentRef, { minCells: 10 });
  const smallTop = useSmallGridTop(sectionRef, statementRef);
  return (
    <Section ref={sectionRef} tone={tone} spacing="none" className={styles.hero} aria-labelledby={id}>
      <EditorialGridBackground region={{ left: 13, top: 3, width: 8, height: 'full' }} hideBelow="desktop" drawIn />
      {smallTop !== null && (
        <EditorialGridBackground region={{ left: 0, top: smallTop, width: 'full', height: 'full' }} drawIn className={styles.smallGrid} />
      )}
      <div ref={contentRef}>
      <Container className={styles.inner}>
        <DisplayHeading as="h1" id={id} text={headline} className={styles.headline} />
        <Reveal delay={350} className={styles.statementWrap}>
          <div ref={statementRef}>
          <Surface className={styles.statement} snap>
            <div>
              {(Array.isArray(statement) ? statement : [statement]).map((paragraph) => (
                <BodyText key={paragraph}>{withAccents(paragraph)}</BodyText>
              ))}
            </div>
          </Surface>
          </div>
        </Reveal>
      </Container>
      </div>
    </Section>
  );
}
