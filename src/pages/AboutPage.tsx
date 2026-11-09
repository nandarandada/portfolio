import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { usePageTitle } from './usePageTitle';
import { ChapterTabs, ChapterPanel } from '../components/compositions/ChapterTabs';
import { aboutTabs, nextChapter, previousChapter, workImages, type AboutTabId } from '../content/about';
import { AboutHero } from '../sections/about/AboutHero';
import { AboutIntroduction } from '../sections/about/AboutIntroduction';
import { PracticeEvolution } from '../sections/about/PracticeEvolution';
import { CareerTimelineSection } from '../sections/about/me/CareerTimelineSection';
import { ExperienceWorldMapSection } from '../sections/about/ExperienceWorldMapSection';
import { ToolsTimelineSection } from '../sections/about/work/ToolsTimelineSection';
import { ProcessSection } from '../sections/about/work/ProcessSection';
import { CollaborationSection } from '../sections/about/work/CollaborationSection';
import { CraftSection } from '../sections/about/work/CraftSection';
import { ChapterNext } from '../sections/about/ChapterNext';
import { FullWidthMediaSection } from '../components/compositions/FullWidthMediaSection';

const ID = 'about';
const isTab = (value: string | null): value is AboutTabId => aboutTabs.tabs.some((tab) => tab.id === value);

/**
 * About, in two chapters behind tabs. The selected chapter is in the URL (?tab=work), so
 * each chapter can be linked to directly; "About me" is the default.
 */
export function AboutPage() {
  const [params, setParams] = useSearchParams();
  const requested = params.get('tab');
  const selected: AboutTabId = isTab(requested) ? requested : 'me';
  usePageTitle(selected === 'work' ? 'About my work' : 'About');

  const select = (id: string, focusPanel = false) => {
    if (!isTab(id)) return;
    setParams(id === 'me' ? {} : { tab: id }, { replace: true, preventScrollReset: true });
    if (focusPanel) {
      requestAnimationFrame(() => {
        const tabs = document.getElementById(`${ID}-tab-${id}`);
        tabs?.scrollIntoView({ block: 'start' });
        tabs?.focus({ preventScroll: true });
      });
    }
  };

  // Arriving with ?tab=work: bring the chapters into view.
  useEffect(() => {
    // after the app's scroll-to-top on navigation
    if (requested !== 'work') return;
    const t = window.setTimeout(() => document.getElementById(`${ID}-tab-work`)?.scrollIntoView({ block: 'start' }), 50);
    return () => window.clearTimeout(t);
    // only on first render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AboutHero />
      <ChapterTabs label={aboutTabs.label} tabs={aboutTabs.tabs} selected={selected} onSelect={select} idPrefix={ID} />

      <ChapterPanel id="me" idPrefix={ID} selected={selected === 'me'}>
        <AboutIntroduction />
        <PracticeEvolution />
        <ExperienceWorldMapSection />
        <CareerTimelineSection />
        <ChapterNext
          eyebrow={nextChapter.eyebrow}
          headline={nextChapter.headline}
          body={nextChapter.body}
          label={nextChapter.action}
          onClick={() => select('work', true)}
        />
      </ChapterPanel>

      <ChapterPanel id="work" idPrefix={ID} selected={selected === 'work'}>
        <ProcessSection />
        <FullWidthMediaSection media={workImages.process} label="Work in progress" />
        <ToolsTimelineSection />
        <FullWidthMediaSection media={workImages.detail} label="Detail" />
        <CraftSection />
        <CollaborationSection />
        <ChapterNext
          id="chapter-previous"
          eyebrow={previousChapter.eyebrow}
          headline={previousChapter.headline}
          body={previousChapter.body}
          label={previousChapter.action}
          onClick={() => select('me', true)}
        />
      </ChapterPanel>

    </>
  );
}
