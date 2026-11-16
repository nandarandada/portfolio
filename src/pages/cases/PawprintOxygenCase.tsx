import type { ReactNode } from 'react';
import { usePageTitle } from '../usePageTitle';
import { Container } from '../../components/primitives/Container';
import { Surface } from '../../components/primitives/Section';
import { BodyText, DisplayHeading, EditorialHeading } from '../../components/primitives/Typography';
import { TextLink } from '../../components/primitives/TextLink';
import { Reveal } from '../../motion/Reveal';
import {
  CaseGridLines,
  CaseIntro,
  CaseSection,
  CaseSwatches,
  CaseTheme,
} from '../../components/case/CaseLayout';
import { CaseFigure, CaseScrollScreen } from '../../components/case/CaseMedia';
import { CaseSitemap } from '../../components/case/CaseSitemap';
import type { CaseMedia } from '../../content/cases/types';
import {
  challenge,
  delivery,
  experience,
  pawprintTheme,
  project,
  strategy,
  styleDetails,
  testing,
  type CaseComparison,
} from '../../content/cases/pawprintOxygen';
import caseStyles from '../../components/case/Case.module.css';
import styles from './PawprintOxygenCase.module.css';

const cx = (...names: Array<string | false | undefined>) => names.filter(Boolean).join(' ');

/**
 * Pawprint Oxygen (2021–2022): an e-commerce experience for pet owners and veterinarians,
 * designed at Oowlish. Built on the shared case system (Arctic Arena is the reference); the
 * compositions below (hero screens, decision rows, tested pairs, gallery) are specific to this
 * case and live in its own stylesheet.
 */
export function PawprintOxygenCase() {
  usePageTitle(project.title);

  return (
    <CaseTheme theme={pawprintTheme}>
      <div className={styles.page}>
        {/* 01 — The project: the real home page, desktop and phone, then the editorial column */}
        <CaseSection tone="base" labelledBy="case-title" className={caseStyles.hero}>
          <div className={styles.stage}>
            <div className={styles.heroScreens}>
              <CaseFigure media={project.heroDesktop} reveal={false} priority hideCaption className={styles.browser} />
              <CaseFigure media={project.heroMobile} reveal={false} priority hideCaption className={cx(styles.device, styles.heroPhone)} />
            </div>
          </div>
          <CaseGridLines region={{ left: 0, top: 26, width: 3, height: 12 }} hideBelow="desktop" />
          <Container>
            <div className={cx(caseStyles.column, caseStyles.columnWide, caseStyles.heroColumn)}>
              <DisplayHeading as="h1" id="case-title" text={project.title} className={caseStyles.heroTitle} />
              <Reveal as="dl" delay={200} className={caseStyles.meta}>
                {project.meta.map((item) => (
                  <div key={item.label} className={caseStyles.metaItem}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </Reveal>
              <Reveal delay={300}>
                <ul className={caseStyles.disciplines} aria-label="Disciplines">
                  {project.disciplines.map((discipline) => (
                    <li key={discipline}>{discipline}</li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={400} className={styles.live}>
                <TextLink href={project.live.href} className={styles.liveLink}>
                  {project.live.label} <span aria-hidden="true">↗</span>
                  <span className={styles.srOnly}> (opens in a new tab)</span>
                </TextLink>
                <span className={styles.liveNote}>{project.live.note}</span>
              </Reveal>
              <div className={styles.heroLead}>
                <EditorialHeading text={project.headline} className={styles.headline} />
                <Reveal className={caseStyles.columnBody}>
                  <BodyText dropCap>{project.body}</BodyText>
                </Reveal>
              </div>
            </div>
          </Container>
        </CaseSection>

        {/* 02 — The challenge: two audiences, each shown by its own way into the site */}
        <CaseSection tone="paper" labelledBy="po-challenge">
          <CaseGridLines region={{ left: 0, top: 0, width: 4, height: 10 }} strength="faint" hideBelow="desktop" />
          <CaseGridLines region={{ right: 0, top: 4, width: 3, height: 8 }} hideBelow="desktop" />
          <Container className={caseStyles.stack}>
            <CaseIntro id="po-challenge" label={challenge.label} heading={challenge.heading} body={challenge.body} />
            <div className={styles.audiences}>
              {challenge.audiences.map((audience, i) => (
                <article key={audience.name} className={styles.audience} aria-labelledby={`po-audience-${i}`}>
                  <CaseFigure media={audience.media} delay={i * 120} className={styles.screen} />
                  <Reveal className={styles.audienceText}>
                    <h3 id={`po-audience-${i}`} className={styles.audienceName}>
                      {audience.name}
                    </h3>
                    <p>{audience.text}</p>
                    <blockquote className={styles.story}>
                      <p>“{audience.story}”</p>
                    </blockquote>
                  </Reveal>
                </article>
              ))}
            </div>
          </Container>
        </CaseSection>

        {/* 03 — The strategy: three decisions, each beside the material that supports it */}
        <CaseSection tone="base" labelledBy="po-strategy">
          <Container className={cx(caseStyles.stack, styles.tight)}>
            <CaseIntro id="po-strategy" label={strategy.label} heading={strategy.heading} body={strategy.body} />
            <ol className={styles.decisionRows}>
              <DecisionRow index={0}>
                <CaseFigure media={strategy.template} className={cx(styles.screen, styles.templateFigure)} />
              </DecisionRow>
              <DecisionRow index={1}>
                <div className={styles.sheet}>
                  <CaseSitemap
                    label={strategy.sitemap.label}
                    root={strategy.sitemap.root}
                    groups={strategy.sitemap.groups}
                    sections={strategy.sitemap.sections}
                    caption={strategy.sitemap.caption}
                  />
                </div>
              </DecisionRow>
              <DecisionRow index={2}>
                <CaseFigure media={strategy.steps} className={styles.screen} />
              </DecisionRow>
            </ol>
            <div className={styles.journey}>
              <CaseFigure media={strategy.journey} />
              <p className={styles.aside}>{strategy.journeyNote}</p>
            </div>
          </Container>
        </CaseSection>

        {/* 04 — Testing the details: two tested pairs, the preferred option marked */}
        <CaseSection tone="paper" grid labelledBy="po-testing">
          <Container className={caseStyles.stack}>
            <Surface snap className={styles.block}>
              <CaseIntro id="po-testing" label={testing.label} heading={testing.heading} body={testing.body} />
            </Surface>
            {testing.comparisons.map((comparison, i) => (
              <Comparison key={comparison.title} comparison={comparison} index={i} />
            ))}
          </Container>
        </CaseSection>

        {/* 05 — The final experience: the purchase first, large and legible, then the rest of the site */}
        <CaseSection tone="base" labelledBy="po-experience">
          <CaseGridLines region={{ left: 0, top: 3, width: 3, height: 5 }} hideBelow="desktop" />
          <Container className={caseStyles.stack}>
            <CaseIntro id="po-experience" label={experience.label} heading={experience.heading} body={experience.body} />

            {/* the product page, where options and information come together */}
            <div className={styles.galleryWide}>
              <CaseFigure media={experience.product} className={styles.screen} />
            </div>

            {/* buying: one row of kits, large enough to read */}
            <div className={styles.galleryWide}>
              <CaseFigure media={experience.kits} className={styles.screen} />
            </div>

            <div className={cx(styles.pair, styles.pairReverse)}>
              <CaseFigure media={experience.storeMobile} className={cx(styles.device, styles.pairPhone)} />
              <CaseFigure media={experience.store} delay={120} className={cx(styles.screen, styles.pairMain)} />
            </div>

            <div className={styles.galleryWide}>
              <CaseScrollScreen media={experience.home} ratio="16 / 10" />
            </div>

            <div className={styles.pair}>
              <CaseFigure media={experience.vets} className={cx(styles.screen, styles.pairMain)} />
              <CaseFigure media={experience.vetsMobile} delay={120} className={cx(styles.device, styles.pairPhone)} />
            </div>

            {/* the colour and type behind these screens */}
            <section className={styles.styleGuide} aria-label={styleDetails.label}>
              <CaseSwatches label={styleDetails.palette.label} note={styleDetails.palette.note} groups={styleDetails.palette.groups} />
              <CaseFigure media={styleDetails.styleGuide} />
            </section>
          </Container>
        </CaseSection>

        {/* 06 — Delivery: one conclusion, with the credit and the first-release context */}
        <CaseSection tone="paper" grid labelledBy="po-delivery">
          <Container>
            <Surface snap className={styles.block}>
              <CaseIntro id="po-delivery" label={delivery.label} heading={delivery.heading} body={delivery.body}>
                <TextLink href={delivery.next.href} className={styles.backLink}>
                  {delivery.next.label} <span aria-hidden="true">→</span>
                </TextLink>
              </CaseIntro>
            </Surface>
          </Container>
        </CaseSection>
      </div>
    </CaseTheme>
  );
}

/** One strategic decision: number, title and text beside its supporting visual; rows alternate. */
function DecisionRow({ index, children }: { index: number; children: ReactNode }) {
  const decision = strategy.decisions[index];
  return (
    <li className={cx(styles.decisionRow, index % 2 === 1 && styles.flipped)}>
      <Reveal className={styles.decisionText}>
        <span className={styles.decisionNumber} aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className={styles.decisionTitle}>{decision.title}</h3>
        <p>{decision.text}</p>
      </Reveal>
      <div className={styles.decisionVisual}>{children}</div>
    </li>
  );
}

/** A tested pair: the question, both options (the preferred one marked), and the finding. */
function Comparison({ comparison, index }: { comparison: CaseComparison; index: number }) {
  const id = `po-test-${index}`;
  return (
    <Surface snap className={styles.comparison}>
      <section aria-labelledby={id}>
        <header className={styles.comparisonHead}>
          <h3 id={id} className={styles.comparisonTitle}>
            {comparison.title}
          </h3>
          <p>{comparison.question}</p>
        </header>
        <div className={styles.options}>
          {comparison.options.map((media, i) => (
            <Option key={media.id} media={media} preferred={i === 1} number={i + 1} />
          ))}
        </div>
        <Reveal as="p" className={styles.finding}>
          <span className={styles.findingMark} aria-hidden="true" />
          {comparison.finding}
        </Reveal>
      </section>
    </Surface>
  );
}

function Option({ media, preferred, number }: { media: CaseMedia; preferred: boolean; number: number }) {
  return (
    <div className={cx(styles.option, preferred && styles.preferred)}>
      <p className={styles.optionLabel}>
        Option {number}
        {preferred && <span className={styles.preferredTag}>Preferred</span>}
      </p>
      <CaseFigure media={media} delay={preferred ? 120 : 0} className={styles.screen} />
    </div>
  );
}
