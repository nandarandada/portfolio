import { usePageTitle } from '../usePageTitle';
import { Container } from '../../components/primitives/Container';
import { Surface } from '../../components/primitives/Section';
import { KeywordStrip } from '../../components/compositions/KeywordStrip';
import {
  CaseAudiences,
  CaseClosing,
  CaseDecisions,
  CaseGridLines,
  CaseHero,
  CaseIntro,
  CaseNote,
  CaseSection,
  CaseSwatches,
  CaseTheme,
  CaseVoice,
} from '../../components/case/CaseLayout';
import { CaseFigure } from '../../components/case/CaseMedia';
import { CaseHeroArt } from '../../components/case/CaseHeroArt';
import { CaseLogoStages } from '../../components/case/CaseLogoStages';
import { CaseSitemap } from '../../components/case/CaseSitemap';
import { CaseScreenNavigator } from '../../components/case/CaseScreenNavigator';
import { screenPages } from '../../content/cases/arcticArenaScreens';
import {
  arcticArenaTheme,
  challenge,
  experience,
  explore,
  identity,
  logoStages,
  project,
} from '../../content/cases/arcticArena';
import styles from '../../components/case/Case.module.css';

/**
 * Arctic Arena (2021): brand identity and website for a new gaming event in Svalbard.
 * Layout follows the Figma guide (node 326:2): key art and the centred editorial column,
 * a mosaic of the finished site, the challenge on white, a mosaic of the place, the identity
 * on the dark page; then the result first (the digital experience, large final screens), the
 * thinking behind it (the white grid page), and finally the screens to explore (the navigator).
 */
// The layered key art loads as its own chunk, so it never weighs on the rest of the site.
const loadHeroArt = () => import('../../content/cases/art/arctic-arena-hero.svg?raw').then((m) => m.default);

export function ArcticArenaCase() {
  usePageTitle(project.title);

  return (
    <CaseTheme theme={arcticArenaTheme}>
      {/* The project */}
      <CaseHero
        title={project.title}
        meta={project.meta}
        disciplines={project.disciplines}
        body={project.body}
        media={project.hero}
        sky={project.heroSky}
        art={<CaseHeroArt load={loadHeroArt} ratio="1200 / 594" background="#13032A" label={project.hero.alt} />}
      />

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

      {/* The logo, in place, while its brand-guide pages change around it */}
      <CaseSection tone="base" label={logoStages.label} className={styles.logoStagesBand}>
        <CaseLogoStages stages={logoStages.stages} ratio={logoStages.ratio} background={logoStages.background} label={logoStages.label} />
      </CaseSection>

      {/* Building the identity: the brief's words as a running band, then the marks */}
      <CaseSection tone="base" labelledBy="aa-identity" className={styles.identity}>
        <KeywordStrip items={challenge.brief.words} label={challenge.brief.label} motion="loop" duration={40} className={styles.briefStrip} />
        <Container className={styles.stack}>
          <CaseIntro id="aa-identity" label={identity.label} heading={identity.heading} body={identity.body} />

          <div className={styles.logos}>
            <CaseFigure media={identity.concept} />
            <div className={styles.logoPair}>
              <CaseFigure media={identity.emblem} ratio="16 / 10" className={styles.logoBox} />
              <CaseFigure media={identity.lockup} ratio="16 / 10" delay={90} className={`${styles.logoBox} ${styles.logoCover}`} />
            </div>
            <ul className={styles.versions}>
              {identity.versions.map((media, i) => (
                <li key={media.id}>
                  <CaseFigure media={media} ratio="235 / 279" delay={i * 90} />
                </li>
              ))}
            </ul>
          </div>

          {/* colour, the brand in use, and the voice: one narrow column, read top to bottom */}
          <div className={styles.brandColumn}>
            <CaseSwatches label={identity.palette.label} note={identity.palette.note} groups={identity.palette.groups} />
            <CaseFigure media={identity.merch} />
            <CaseVoice label={identity.voice.label} groups={identity.voice.groups} />
          </div>
        </Container>

        {/* the brand texture, edge to edge */}
        <div className={styles.textureBand}>
          <CaseFigure media={identity.texture} />
        </div>
      </CaseSection>

      {/* Explore the website: the screen navigator, the main presentation of the finished site */}
      <CaseSection tone="base" labelledBy="aa-explore">
        <CaseGridLines region={{ left: 0, top: 3, width: 3, height: 8 }} hideBelow="desktop" />
        <Container className={styles.stack}>
          <CaseIntro id="aa-explore" label={explore.label} heading={explore.heading} body={[explore.text]} />
          <CaseScreenNavigator pages={screenPages} site="Arctic Arena" label={explore.navigatorLabel} note={explore.navigatorNote} badge="Fictional sample logos" />
        </Container>
      </CaseSection>

      {/* Behind the experience: the white grid page, the thinking behind the screens */}
      <CaseSection tone="paper" grid labelledBy="aa-experience">
        <Container className={styles.stack}>
          {/* White blocks on the grid snap out to whole cells, so no square is ever cut. */}
          {/* one white sheet: the intro, then the sitemap read top to bottom */}
          <Surface snap className={styles.paperSheet}>
            <CaseIntro id="aa-experience" label={experience.label} heading={experience.heading} body={[experience.intro]} />
            <CaseSitemap
              label={experience.sitemapTree.label}
              root={experience.sitemapTree.root}
              groups={experience.sitemapTree.groups}
              sections={experience.sitemapTree.sections}
              caption={experience.sitemapTree.caption}
            />
          </Surface>
          {/* the three decisions, in the same narrow column as the text */}
          <Surface snap className={`${styles.narrow} ${styles.editorial}`}>
            <CaseDecisions items={experience.decisions} />
          </Surface>
          <Surface snap className={styles.paperBlock}>
            <CaseFigure media={experience.documentation} className={styles.paperFigure} />
          </Surface>
          <Surface snap className={styles.stackTight}>
            <CaseNote label={experience.system.label} text={experience.system.text} className={styles.narrow} />
            <CaseFigure media={experience.system.media} className={styles.paperFigure} />
          </Surface>
        </Container>
      </CaseSection>


      {/* Closing */}
      <CaseSection tone="base" label="Closing">
        <Container>
          <CaseClosing statement={explore.closing} link={explore.next} />
        </Container>
      </CaseSection>
    </CaseTheme>
  );
}
