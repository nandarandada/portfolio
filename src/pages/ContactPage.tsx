import { usePageTitle } from './usePageTitle';
import { Section, Surface } from '../components/primitives/Section';
import { Container } from '../components/primitives/Container';
import { BodyText, DisplayHeading, SectionLabel } from '../components/primitives/Typography';
import { EditorialGridBackground } from '../components/primitives/EditorialGridBackground';
import { TextLink } from '../components/primitives/TextLink';
import { Reveal } from '../motion/Reveal';
import { contactPage } from '../content/contact';
import { footer } from '../content/site';
import styles from './ContactPage.module.css';

/**
 * Contact: a personal invitation rather than a form. The headline and note on the left,
 * the email set large on a paper panel over the red grid on the right, then what I'm happy
 * to talk about.
 */
export function ContactPage() {
  usePageTitle(contactPage.title);
  const socials = footer.links.filter((link) => !link.href?.startsWith('mailto:'));
  return (
    <Section tone="dark" spacing="none" className={styles.page} aria-labelledby="contact-title">
      <EditorialGridBackground region={{ right: 0, top: 3, width: 9, height: 'full' }} hideBelow="desktop" />
      <Container className={styles.inner}>
        <div className={styles.intro}>
          <DisplayHeading as="h1" id="contact-title" text={contactPage.headline} />
          <Reveal delay={200}>
            <BodyText className={styles.body}>{contactPage.body}</BodyText>
          </Reveal>
        </div>

        <Reveal delay={350} className={styles.cardWrap}>
          <Surface className={styles.card} snap={1024}>
            <p className={styles.email}>
              {/* may break before the @, never inside a word */}
              <TextLink href={`mailto:${contactPage.email}`}>
                {contactPage.email.split('@')[0]}
                <wbr />@{contactPage.email.split('@')[1]}
              </TextLink>
            </p>
            <ul className={styles.socials}>
              {socials.map((link) => (
                <li key={link.label}>{link.href ? <TextLink href={link.href}>{link.label}</TextLink> : link.label}</li>
              ))}
            </ul>
            <p className={styles.location}>{contactPage.location}</p>
          </Surface>
        </Reveal>

        <Reveal delay={150} className={styles.topics}>
          <SectionLabel as="h2" className={styles.topicsLabel}>
            {contactPage.topicsLabel}
          </SectionLabel>
          <ul className={styles.topicList}>
            {contactPage.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
