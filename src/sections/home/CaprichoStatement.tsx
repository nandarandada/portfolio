import { StatementSection } from '../../components/compositions/StatementSection';
import { capricho } from '../../content/home';

export function CaprichoStatement() {
  return <StatementSection id="capricho-statement" statements={capricho.statements} />;
}
