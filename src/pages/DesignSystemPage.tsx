import { usePageTitle } from './usePageTitle';
import { Section } from '../components/primitives/Section';
import { Container } from '../components/primitives/Container';
import { DisplayHeading, EditorialHeading, BodyText, ItemTitle, MetaText, SectionLabel } from '../components/primitives/Typography';
import { TextLink } from '../components/primitives/TextLink';
import { MediaPlaceholder } from '../components/primitives/Media';
import { GridSection } from '../components/compositions/GridSection';
import { CardCaption } from '../components/compositions/CardCaption';
import { KeywordStrip } from '../components/compositions/KeywordStrip';
import styles from './DesignSystemPage.module.css';

const colors = [
  { name: 'Red', token: '--color-red', value: '#9E1C1C' },
  { name: 'Red deep', token: '--color-red-deep', value: '#840909' },
  { name: 'Ink', token: '--color-ink', value: '#1F1F1F' },
  { name: 'White', token: '--color-white', value: '#FFFFFF' },
  { name: 'Paper grid', token: '--color-grid-light', value: '#F2E8E8' },
  { name: 'Placeholder', token: '--color-placeholder', value: '#E6E6E6' },
];

const spacing = ['--space-2xs', '--space-xs', '--space-sm', '--space-md', '--space-lg', '--space-xl'];

/**
 * Frosa design system reference (development only: /design-system).
 * Every specimen is the real component, so this page stays in sync with the site.
 */
export function DesignSystemPage() {
  usePageTitle('Design system');
  return (
    <>
      <Section tone="dark" spacing="none" className={styles.intro} aria-labelledby="ds-title">
        <Container>
          <DisplayHeading as="h1" id="ds-title">
            Design system
          </DisplayHeading>
          <BodyText className={styles.lead}>Tokens and components shared by every Frosa page.</BodyText>
        </Container>
      </Section>

      <Section tone="light" aria-label="Colour">
        <Container>
          <SectionLabel as="h2" className={styles.h}>Colour</SectionLabel>
          <ul className={styles.swatches}>
            {colors.map((c) => (
              <li key={c.token}>
                <span className={styles.swatch} style={{ background: `var(${c.token})` }} />
                <ItemTitle as="p">{c.name}</ItemTitle>
                <MetaText>
                  {c.value} · {c.token}
                </MetaText>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="light" aria-label="Typography">
        <Container className={styles.stack}>
          <SectionLabel as="h2" className={styles.h}>Typography</SectionLabel>
          <Specimen name="DisplayHeading" note="Libre Baskerville Bold · 60px · hero headlines, manifestos">
            <DisplayHeading as="p">Thoughtful design</DisplayHeading>
          </Specimen>
          <Specimen name="EditorialHeading" note="Libre Baskerville Bold · 40px · section headings, statements">
            <EditorialHeading as="p">From thinking to making.</EditorialHeading>
          </Specimen>
          <Specimen name="BodyText" note="General Sans · 20px / 1.65 · dropCap for editorial columns">
            <BodyText dropCap measure="narrow">
              Great design lives in the details — and the decisions behind them.
            </BodyText>
          </Specimen>
          <Specimen name="ItemTitle + MetaText" note="General Sans Semibold 20px + small muted line · cards, principles, timeline">
            <div className={styles.pair}>
              <ItemTitle as="p">Project name</ItemTitle>
              <MetaText>Product Case Study · User Experience</MetaText>
            </div>
          </Specimen>
          <Specimen name="SectionLabel" note="General Sans Bold · uppercase · tracked 20%">
            <SectionLabel>Product strategy</SectionLabel>
          </Specimen>
          <Specimen name="TextLink" note="Underline drawn in from the left on hover and focus (also the navigation)">
            <p className={styles.linkSample}>
              <TextLink href="/work">
                Explore all work <span aria-hidden="true">→</span>
              </TextLink>
            </p>
          </Specimen>
        </Container>
      </Section>

      <Section tone="light" aria-label="Spacing">
        <Container>
          <SectionLabel as="h2" className={styles.h}>Spacing</SectionLabel>
          <ul className={styles.spacing}>
            {spacing.map((token) => (
              <li key={token}>
                <span className={styles.bar} style={{ width: `var(${token})` }} />
                <MetaText>{token}</MetaText>
              </li>
            ))}
          </ul>
          <BodyText className={styles.note}>
            Grid: 21 columns at desktop (14 tablet, 8 phone); one cell = section width ÷ columns. Panels on the grid
            (Surface snap) always cover whole cells, and text sits 16px inside their edges.
          </BodyText>
        </Container>
      </Section>

      <GridSection label="Card on the grid" rowsAbove={2} rowsBelow={2}>
        <div className={styles.card}>
          <MediaPlaceholder media={{ aspectRatio: '16 / 10', placeholder: 'Project image' }} className={styles.cardMedia} />
          <CardCaption title="Project name" href="/work" meta="User Experience" />
        </div>
      </GridSection>

      <Section tone="ink" spacing="none" className={styles.strip} aria-label="Keyword strip">
        <KeywordStrip items={['Product Strategy', 'Experience Design', 'AI-Assisted Building']} label="Keyword strip example" motion="loop" />
      </Section>
    </>
  );
}

function Specimen({ name, note, children }: { name: string; note: string; children: React.ReactNode }) {
  return (
    <div className={styles.specimen}>
      <div className={styles.meta}>
        <ItemTitle as="h3">{name}</ItemTitle>
        <MetaText>{note}</MetaText>
      </div>
      <div>{children}</div>
    </div>
  );
}
