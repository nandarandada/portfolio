import { usePageTitle } from '../usePageTitle';
import { Container } from '../../components/primitives/Container';
import { KeywordStrip } from '../../components/compositions/KeywordStrip';
import {
  CaseAudiences,
  CaseCell,
  CaseClosing,
  CaseDecisions,
  CaseGrid,
  CaseGridLines,
  CaseHero,
  CaseIntro,
  CaseMosaic,
  CaseNote,
  CaseSection,
  CaseSwatches,
  CaseTheme,
} from '../../components/case/CaseLayout';
import { CaseFigure, CaseScrollScreen } from '../../components/case/CaseMedia';
import {
  arcticArenaTheme,
  challenge,
  experience,
  finalExperience,
  identity,
  placeMosaic,
  project,
  screensMosaic,
} from '../../content/cases/arcticArena';
import styles from '../../components/case/Case.module.css';

/**
 * Arctic Arena (2021): brand identity and website for a new gaming event in Svalbard.
 * Layout follows the Figma guide (node 326:2): key art and the centred editorial column,
 * a mosaic of the finished site, the challenge on white, a mosaic of the place, the identity
 * on indigo; then the experience (the white grid page) and the final screens.
 */
export function ArcticArenaCase() {
  usePageTitle(project.title);

  return (
    <CaseTheme theme={arcticArenaTheme}>
      {/* The project */}
      <CaseHero title={project.title} meta={project.meta} disciplines={project.disciplines} body={project.body} media={project.hero} />

      <CaseMosaic label={screensMosaic.label} rows={screensMosaic.rows} />

      {/* The challenge: the white editorial page, purple grid in the margins */}
      <CaseSection tone="paper" labelledBy="aa-challenge">
        <CaseGridLines region={{ left: 0, top: 0, width: 4, height: 12 }} hideBelow="desktop" />
        <CaseGridLines region={{ left: 0, top: 12, width: 4, height: 7 }} strength="faint" hideBelow="desktop" />
        <CaseGridLines region={{ right: 0, top: 2, width: 5, height: 17 }} strength="faint" hideBelow="desktop" />
        <CaseGridLines region={{ right: 0, top: 5, width: 2, height: 9 }} hideBelow="desktop" />
        <Container>
          <CaseIntro id="aa-challenge" label={challenge.label} heading={challenge.heading} body={challenge.body}>
            <CaseAudiences items={challenge.audiences} />
          </CaseIntro>
        </Container>
      </CaseSection>

      <CaseMosaic label={placeMosaic.label} rows={placeMosaic.rows} />

      {/* Building the identity: the brief's words as a running band, then the marks */}
      <CaseSection tone="base" labelledBy="aa-identity" className={styles.identity}>
        <KeywordStrip items={challenge.brief.words} label={challenge.brief.label} motion="loop" duration={40} className={styles.briefStrip} />
        <Container className={styles.stack}>
          <CaseIntro id="aa-identity" label={identity.label} heading={identity.heading} body={identity.body} />

          <div className={styles.logos}>
            <CaseFigure media={identity.emblem} ratio="1008 / 440" className={styles.logoBox} />
            <CaseFigure media={identity.lockup} ratio="1008 / 440" className={`${styles.logoBox} ${styles.logoCover}`} />
            <ul className={styles.versions}>
              {identity.versions.map((media, i) => (
                <li key={media.id}>
                  <CaseFigure media={media} ratio="235 / 279" delay={i * 90} />
                </li>
              ))}
            </ul>
          </div>

          <CaseGrid>
            <CaseCell col={1} span={5} tablet={12} align="center">
              <CaseSwatches label={identity.palette.label} note={identity.palette.note} swatches={identity.palette.swatches} />
            </CaseCell>
            <CaseCell col={7} span={6} tablet={12}>
              <CaseFigure media={identity.typography} />
            </CaseCell>
          </CaseGrid>

          <CaseGrid>
            <CaseCell col={1} span={7} tablet={12}>
              <CaseFigure media={identity.exploration} />
            </CaseCell>
            <CaseCell col={9} span={4} tablet={6} drop={2}>
              <CaseFigure media={identity.merch} />
            </CaseCell>
          </CaseGrid>
        </Container>
      </CaseSection>

      {/* Designing the experience: the white grid page */}
      <CaseSection tone="paper" grid labelledBy="aa-experience">
        <Container className={styles.stack}>
          <CaseIntro id="aa-experience" label={experience.label} heading={experience.heading} body={[experience.intro]} panel />
          <CaseFigure media={experience.sitemap} className={styles.paperFigure} />
          <CaseGrid>
            <CaseCell col={1} span={5} tablet={12}>
              <div className={styles.paperPanel}>
                <CaseDecisions items={experience.decisions} />
              </div>
            </CaseCell>
            <CaseCell col={7} span={6} tablet={12} className={styles.sticky} align="start">
              <CaseFigure media={experience.documentation} className={styles.paperFigure} />
            </CaseCell>
          </CaseGrid>
          <CaseGrid>
            <CaseCell col={1} span={5} tablet={6} drop={2}>
              <CaseFigure media={experience.earlyUx} />
            </CaseCell>
            <CaseCell col={7} span={6} tablet={12}>
              <div className={styles.stackTight}>
                <CaseNote label={experience.system.label} text={experience.system.text} className={styles.paperPanel} />
                <CaseFigure media={experience.system.media} className={styles.paperFigure} />
              </div>
            </CaseCell>
          </CaseGrid>
          <div className={styles.stackTight}>
            <CaseNote label={experience.mobile.label} text={experience.mobile.text} className={styles.paperPanel} />
            <ul className={styles.phones}>
              {experience.mobile.screens.map((media, i) => (
                <li key={media.id}>
                  <CaseFigure media={media} delay={i * 90} />
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </CaseSection>

      {/* The final experience: the full home page, the shop, and the closing */}
      <CaseSection tone="base" labelledBy="aa-final">
        <CaseGridLines region={{ left: 0, top: 3, width: 3, height: 8 }} hideBelow="desktop" />
        <Container className={styles.stack}>
          <CaseIntro id="aa-final" label={finalExperience.label} heading={finalExperience.heading} />
          <CaseGrid>
            <CaseCell col={1} span={5} tablet={6}>
              <CaseScrollScreen media={finalExperience.homeScroll} ratio="3 / 4.4" />
            </CaseCell>
            <CaseCell col={7} span={6} tablet={12} drop={3}>
              <div className={styles.stack}>
                <CaseFigure media={finalExperience.commerce[0]} />
                <CaseFigure media={finalExperience.commerce[1]} />
              </div>
            </CaseCell>
          </CaseGrid>
          <CaseGrid>
            <CaseCell col={5} span={4} tablet={6}>
              <CaseFigure media={finalExperience.motion} />
            </CaseCell>
          </CaseGrid>
          <CaseClosing statement={finalExperience.closing} link={finalExperience.next} />
        </Container>
      </CaseSection>
    </CaseTheme>
  );
}
