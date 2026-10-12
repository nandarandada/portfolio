import { usePageTitle } from './usePageTitle';
import { HomeHero } from '../sections/home/HomeHero';
import { HomeManifesto } from '../sections/home/HomeManifesto';
import { ExpertiseStrip } from '../sections/home/ExpertiseStrip';
import { SelectedWork } from '../sections/home/SelectedWork';
import { CaprichoStatement } from '../sections/home/CaprichoStatement';
import { PracticeOverview } from '../sections/home/PracticeOverview';
import { PreviousCollaborations } from '../sections/home/PreviousCollaborations';

/** Home introduces the practice, its philosophy and the work. The shared footer follows in the app shell. */
export function HomePage() {
  usePageTitle();
  return (
    <>
      <HomeHero />
      <HomeManifesto />
      <ExpertiseStrip />
      <SelectedWork />
      <CaprichoStatement />
      <PracticeOverview />
      <PreviousCollaborations />
    </>
  );
}
