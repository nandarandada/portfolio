import { usePageTitle } from '../usePageTitle';
import { Container } from '../../components/primitives/Container';
import { Surface } from '../../components/primitives/Section';
import { BodyText, DisplayHeading, EditorialHeading } from '../../components/primitives/Typography';
import { TextLink } from '../../components/primitives/TextLink';
import { Reveal } from '../../motion/Reveal';
import { CaseIntro, CaseSection, CaseSwatches, CaseTheme } from '../../components/case/CaseLayout';
import { CaseFigure, CaseScrollScreen } from '../../components/case/CaseMedia';
import { CaseSitemap } from '../../components/case/CaseSitemap';
import {
  delivery,
  greatPetCareTheme,
  handover,
  project,
  rebrand,
  start,
  structure,
  testing,
  versionOne,
  type AppComparison,
} from '../../content/cases/greatPetCare';
import caseStyles from '../../components/case/Case.module.css';
import styles from './GreatPetCareCase.module.css';

const cx = (...names: Array<string | false | undefined>) => names.filter(Boolean).join(' ');

/**
 * Great Pet Care Account (2022): the pet-care account, redesigned mobile first. The story runs
 * in the order of the original work — the inherited app, a new brand, a simpler structure,
 * version one, user testing, handover — with the real screens from before and after. Built on
 * the shared case system; the phone compositions live in this case's stylesheet.
 */
export function GreatPetCareCase() {
  usePageTitle(project.title);

  return (
    <CaseTheme theme={greatPetCareTheme}>
      <div className={styles.page}>
        {/* 01 — The project: three released screens, then the editorial column */}
        <CaseSection tone="base" labelledBy="case-title" className={caseStyles.hero}>
          <div className={styles.stage}>
            <div className={styles.heroPhones}>
              {project.hero.map((media, i) => (
                <CaseFigure
                  key={media.id}
                  media={media}
                  reveal={false}
                  priority={i === 1}
                  hideCaption
                  className={cx(styles.phone, styles.heroPhone)}
                />
              ))}
            </div>
          </div>
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
                <ul className={styles.liveLinks}>
                  {project.links.map((link) => (
                    <li key={link.href}>
                      <TextLink href={link.href} className={styles.liveLink}>
                        {link.label} <span aria-hidden="true">↗</span>
                        <span className={styles.srOnly}> (opens in a new tab)</span>
                      </TextLink>
                    </li>
                  ))}
                </ul>
                <span className={styles.liveNote}>{project.linksNote}</span>
              </Reveal>
            </div>
            {/* the lead uses the same column as every intro: heading, then the narrow body */}
            <div className={cx(caseStyles.column, styles.lead)}>
              <EditorialHeading text={project.headline} className={styles.headline} />
              <Reveal className={caseStyles.columnBody}>
                <BodyText dropCap>{project.body}</BodyText>
              </Reveal>
            </div>
          </Container>
        </CaseSection>

        {/* 02 — The starting point: the Pawprint app as it was, and who the account is for */}
        <CaseSection tone="paper" labelledBy="ga-start">
          <Container className={caseStyles.stack}>
            <CaseIntro id="ga-start" label={start.label} heading={start.heading} body={start.body} />
            <div className={styles.row}>
              {start.screens.map((media, i) => (
                <CaseFigure key={media.id} media={media} delay={i * 100} className={styles.phone} />
              ))}
            </div>
            <ul className={styles.audiences} aria-label="Who it is for">
              {start.audiences.map((audience, i) => (
                <Reveal as="li" key={audience.name} delay={i * 100} className={styles.audience}>
                  <p className={styles.audienceName}>{audience.name}</p>
                  <p className={styles.audienceText}>{audience.text}</p>
                  <blockquote className={styles.story}>
                    <p>“{audience.story}”</p>
                  </blockquote>
                </Reveal>
              ))}
            </ul>
          </Container>
        </CaseSection>

        {/* 03 — A new brand: one screen through the whole project */}
        <CaseSection tone="base" labelledBy="ga-brand">
          <Container className={caseStyles.stack}>
            <CaseIntro id="ga-brand" label={rebrand.label} heading={rebrand.heading} body={rebrand.body} />
            <ol className={styles.evolution} aria-label="The dashboard through the project">
              {rebrand.evolution.map((stage, i) => (
                <li key={stage.media.id} className={styles.stage3}>
                  <p className={styles.stepLabel}>
                    <span className={styles.stepNumber} aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {stage.step}
                  </p>
                  <CaseFigure media={stage.media} delay={i * 120} className={styles.phone} />
                </li>
              ))}
            </ol>
            <div className={styles.palette}>
              <CaseSwatches label={rebrand.palette.label} note={rebrand.palette.note} groups={rebrand.palette.groups} />
            </div>
          </Container>
        </CaseSection>

        {/* 04 — A simpler structure: the vision vs version one, the sitemap, then the main pages */}
        <CaseSection tone="paper" grid labelledBy="ga-structure">
          <Container className={caseStyles.stack}>
            <Surface snap className={styles.block}>
              <CaseIntro id="ga-structure" label={structure.label} heading={structure.heading} body={structure.body} />
              <div className={styles.plan}>
                <section className={cx(styles.planItem, styles.planVision)} aria-labelledby="ga-plan-vision">
                  <p className={styles.planTag}>{structure.plan.vision.tag}</p>
                  <h3 id="ga-plan-vision" className={styles.planStep}>
                    <span className={styles.stepNumber} aria-hidden="true">
                      01
                    </span>
                    {structure.plan.vision.step}
                  </h3>
                  <p className={styles.planText}>{structure.plan.vision.text}</p>
                  <div className={styles.planPhones}>
                    {structure.plan.vision.screens.map((media) => (
                      <CaseFigure key={media.id} media={media} ratio="720 / 1300" className={styles.phone} />
                    ))}
                  </div>
                </section>
                <section className={styles.planItem} aria-labelledby="ga-plan-version">
                  <p className={cx(styles.planTag, styles.planTagStrong)}>{structure.plan.version.tag}</p>
                  <h3 id="ga-plan-version" className={styles.planStep}>
                    <span className={styles.stepNumber} aria-hidden="true">
                      02
                    </span>
                    {structure.plan.version.step}
                  </h3>
                  <p className={styles.planText}>{structure.plan.version.text}</p>
                  <ul className={styles.planFeatures}>
                    {structure.plan.version.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </section>
              </div>
            </Surface>
            <Surface snap className={styles.block}>
              <CaseSitemap
                label={structure.sitemap.label}
                root={structure.sitemap.root}
                groups={structure.sitemap.groups}
                sections={structure.sitemap.sections}
                caption={structure.sitemap.caption}
              />
            </Surface>
            <Surface snap className={styles.block}>
              <p className={styles.pagesIntro}>{structure.pagesIntro}</p>
            </Surface>
            {structure.comparisons.map((comparison, i) => (
              <Comparison key={comparison.title} comparison={comparison} index={i} />
            ))}
          </Container>
        </CaseSection>

        {/* 05 — Version one, mobile first: grouped by task, mobile as the protagonist */}
        <CaseSection tone="base" labelledBy="ga-version">
          <Container className={caseStyles.stack}>
            <CaseIntro id="ga-version" label={versionOne.label} heading={versionOne.heading} body={versionOne.body} />
            {versionOne.groups.map((group, i) => (
              <section
                key={group.title}
                className={cx(styles.taskGroup, i % 2 === 1 && styles.taskGroupFlipped)}
                aria-labelledby={`ga-group-${i}`}
              >
                <Reveal className={styles.flowText}>
                  <h3 id={`ga-group-${i}`} className={styles.flowTitle}>
                    {group.title}
                  </h3>
                  <p>{group.text}</p>
                </Reveal>
                {group.scroll ? (
                  <div className={cx(styles.taskPhones, styles.taskPhonesSingle)}>
                    <div className={styles.phoneScroll}>
                      <CaseScrollScreen media={group.scroll} ratio="692 / 1500" />
                    </div>
                  </div>
                ) : (
                  <div className={styles.taskPhones}>
                    {group.screens?.map((media, j) => (
                      <CaseFigure
                        key={media.id}
                        media={media}
                        ratio={j === 1 ? '692 / 1500' : undefined}
                        delay={j * 120}
                        className={styles.phone}
                      />
                    ))}
                  </div>
                )}
              </section>
            ))}
          </Container>
        </CaseSection>

        {/* 06 — User testing: method, tasks, what people wrote, then the screens before and after */}
        <CaseSection tone="paper" grid labelledBy="ga-testing">
          <Container className={caseStyles.stack}>
            <Surface snap className={styles.block}>
              <CaseIntro id="ga-testing" label={testing.label} heading={testing.heading} body={testing.body} />
              <ol className={styles.tasks} aria-label="The five tasks">
                {testing.tasks.map((task, i) => (
                  <Reveal as="li" key={task} delay={i * 60} className={styles.task}>
                    <span className={styles.stepNumber} aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {task}
                  </Reveal>
                ))}
              </ol>
            </Surface>
            <Surface snap className={styles.block}>
              <div className={styles.evidence}>
                <CaseFigure media={testing.prototype} className={styles.prototype} />
                <section className={styles.quotes} aria-labelledby="ga-quotes">
                  <h3 id="ga-quotes" className={styles.quotesLabel}>
                    {testing.quotes.label}
                  </h3>
                  <ul>
                    {testing.quotes.items.map((quote) => (
                      <li key={quote.text} className={cx(styles.quote, quote.tone === 'issue' && styles.quoteIssue)}>
                        <span className={styles.quoteTone}>{quote.tone === 'issue' ? 'Issue' : 'Praise'}</span>
                        <blockquote>
                          <p>“{quote.text}”</p>
                        </blockquote>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </Surface>
            <Surface snap className={styles.block}>
              <p className={styles.pagesIntro}>{testing.afterIntro}</p>
            </Surface>
            {testing.comparisons.map((comparison, i) => (
              <Surface key={comparison.title} snap className={styles.comparison}>
                <TestPair comparison={comparison} index={i} />
              </Surface>
            ))}
          </Container>
        </CaseSection>

        {/* 07 — Handover: desktop as supporting evidence, two app flows, notes for development */}
        <CaseSection tone="base" labelledBy="ga-handover">
          <Container className={caseStyles.stack}>
            <CaseIntro id="ga-handover" label={handover.label} heading={handover.heading} body={handover.body} />
            <section className={styles.desktopBlock} aria-labelledby="ga-desktop">
              <h3 id="ga-desktop" className={styles.notesLabel}>
                {handover.desktopLabel}
              </h3>
              <div className={styles.desktop}>
                {handover.desktop.map((media, i) => (
                  <CaseFigure key={media.id} media={media} delay={i * 100} className={styles.screen} />
                ))}
              </div>
            </section>
            <div className={styles.handover}>
              <section className={styles.handoverFlows} aria-labelledby="ga-flows">
                <h3 id="ga-flows" className={styles.notesLabel}>
                  {handover.flowsLabel}
                </h3>
                <div className={styles.flowPhones}>
                  {handover.flows.map((media, i) => (
                    <CaseFigure key={media.id} media={media} delay={i * 120} className={styles.phone} />
                  ))}
                </div>
              </section>
              <section className={styles.notes} aria-labelledby="ga-notes">
                <h3 id="ga-notes" className={styles.notesLabel}>
                  Notes for development
                </h3>
                <ul className={styles.noteList}>
                  {handover.notes.map((note, i) => (
                    <Reveal as="li" key={note.title} delay={i * 80} className={styles.note}>
                      <p className={styles.noteTitle}>{note.title}</p>
                      <p>{note.text}</p>
                    </Reveal>
                  ))}
                </ul>
              </section>
            </div>
          </Container>
        </CaseSection>

        {/* 08 — Delivery: what was designed, and the credit */}
        <CaseSection tone="paper" labelledBy="ga-delivery">
          <Container>
            <div className={styles.delivery}>
              <CaseFigure media={delivery.icon} className={styles.icon} />
              <CaseIntro id="ga-delivery" label={delivery.label} heading={delivery.heading} body={delivery.body}>
                <TextLink href={delivery.next.href} className={styles.backLink}>
                  {delivery.next.label} <span aria-hidden="true">→</span>
                </TextLink>
              </CaseIntro>
            </div>
          </Container>
        </CaseSection>
      </div>
    </CaseTheme>
  );
}

/** One main page: before and after, the decision in a line, and the documented changes. */
function Comparison({ comparison, index }: { comparison: AppComparison; index: number }) {
  const id = `ga-page-${index}`;
  return (
    <Surface snap className={styles.comparison}>
      <section aria-labelledby={id} className={styles.comparisonInner}>
        <div className={styles.pairPhones}>
          <div className={styles.side}>
            <p className={styles.sideLabel}>Before</p>
            <CaseFigure media={comparison.before} className={styles.phone} />
          </div>
          <div className={styles.side}>
            <p className={cx(styles.sideLabel, styles.afterLabel)}>After</p>
            <CaseFigure media={comparison.after} delay={120} className={styles.phone} />
          </div>
        </div>
        <Reveal className={styles.changes}>
          <h3 id={id} className={styles.comparisonTitle}>
            {comparison.title}
          </h3>
          {comparison.decision && <p className={styles.decision}>{comparison.decision}</p>}
          <ul>
            {comparison.changes.map((change) => (
              <li key={change}>{change}</li>
            ))}
          </ul>
        </Reveal>
      </section>
    </Surface>
  );
}

/** Before and after the test: two long screens panned together; what was evaluated, the feedback, what changed. */
function TestPair({ comparison, index }: { comparison: AppComparison; index: number }) {
  const id = `ga-test-${index}`;
  return (
    <section aria-labelledby={id} className={styles.comparisonInner}>
      <div className={styles.pairPhones}>
        <div className={styles.side}>
          <p className={styles.sideLabel}>Before the test</p>
          <div className={styles.phoneScroll}>
            <CaseScrollScreen media={comparison.before} ratio="720 / 1560" />
          </div>
        </div>
        <div className={styles.side}>
          <p className={cx(styles.sideLabel, styles.afterLabel)}>After the test</p>
          <div className={styles.phoneScroll}>
            <CaseScrollScreen media={comparison.after} ratio="720 / 1560" />
          </div>
        </div>
      </div>
      <Reveal className={styles.changes}>
        <h3 id={id} className={styles.comparisonTitle}>
          {comparison.title}
        </h3>
        <dl className={styles.testFacts}>
          <div>
            <dt>Evaluated</dt>
            <dd>{comparison.evaluated}</dd>
          </div>
          <div>
            <dt>Feedback</dt>
            <dd>{comparison.feedback}</dd>
          </div>
        </dl>
        <p className={styles.changedLabel}>What changed</p>
        <ul>
          {comparison.changes.map((change) => (
            <li key={change}>{change}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
