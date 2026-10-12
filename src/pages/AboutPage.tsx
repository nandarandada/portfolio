import { usePageTitle } from './usePageTitle';
import { AboutHero } from '../sections/about/AboutHero';
import { AboutIntroduction } from '../sections/about/AboutIntroduction';
import { ExperienceWorldMapSection } from '../sections/about/ExperienceWorldMapSection';
import { PracticeEvolution } from '../sections/about/PracticeEvolution';
import { NewWayOfWorking } from '../sections/about/NewWayOfWorking';
import { QualityPrinciples } from '../sections/about/QualityPrinciples';
import { TasteAndJudgment } from '../sections/about/TasteAndJudgment';
import { ExperienceTimeline } from '../sections/about/ExperienceTimeline';
import { FutureDirection } from '../sections/about/FutureDirection';
import { AboutCTA } from '../sections/about/AboutCTA';

/** Section order is the page's narrative: past → present → future. Reorder freely. */
export function AboutPage() {
  usePageTitle('About');
  return (
    <>
      <AboutHero />
      <AboutIntroduction />
      <ExperienceWorldMapSection />
      <PracticeEvolution />
      <NewWayOfWorking />
      <QualityPrinciples />
      <TasteAndJudgment />
      <ExperienceTimeline />
      <FutureDirection />
      <AboutCTA />
    </>
  );
}
