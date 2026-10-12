import { Section } from '../components/primitives/Section';
import { Container } from '../components/primitives/Container';
import { DisplayHeading, BodyText } from '../components/primitives/Typography';
import { TextLink } from '../components/primitives/TextLink';
import { usePageTitle } from './usePageTitle';
import styles from './PlaceholderPage.module.css';

/** Route-level stand-in for pages that are not implemented yet. */
export function PlaceholderPage({ title, note }: { title: string; note?: string }) {
  usePageTitle(title);
  return (
    <Section tone="dark" spacing="none" className={styles.page} aria-labelledby="page-title">
      <Container className={styles.inner}>
        <DisplayHeading as="h1" id="page-title">
          {title}
        </DisplayHeading>
        <BodyText className={styles.note}>
          {note ?? 'This page is in progress.'} <TextLink href="/about">Read about Frosa</TextLink>
        </BodyText>
      </Container>
    </Section>
  );
}
