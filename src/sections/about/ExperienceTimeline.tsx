import { TimelineSection } from '../../components/compositions/TimelineSection';
import { experienceTimeline } from '../../content/about';

export function ExperienceTimeline() {
  return <TimelineSection id="experience" label={experienceTimeline.label} items={experienceTimeline.milestones} />;
}
