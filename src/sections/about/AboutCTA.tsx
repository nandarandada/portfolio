import { StatementSection } from '../../components/compositions/StatementSection';
import { aboutCTA } from '../../content/about';

export function AboutCTA() {
  return <StatementSection id="contact-cta" statements={aboutCTA.statements} action={aboutCTA.action} />;
}
