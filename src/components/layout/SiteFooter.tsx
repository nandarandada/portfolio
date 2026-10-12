import { footer } from '../../content/site';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { TextLink } from '../primitives/TextLink';
import { OversizedWordmark } from '../primitives/OversizedWordmark';
import styles from './SiteFooter.module.css';

/** Red textured footer with the petal pattern and the oversized wordmark (Figma node 126:1998). */
export function SiteFooter() {
  return (
    <Section as="footer" tone="red" spacing="none" className={styles.footer}>
      <img className={styles.petals} src="/brand/petal-pattern.svg" alt="" aria-hidden="true" />
      <Container className={styles.top}>
        <p className={styles.signature}>{footer.signature}</p>
        <ul className={styles.links}>
          {footer.links.map((link) => (
            <li key={link.label}>{link.href ? <TextLink href={link.href}>{link.label}</TextLink> : <span>{link.label}</span>}</li>
          ))}
        </ul>
        <p className={styles.description}>{footer.description}</p>
      </Container>
      <div className={styles.wordmarkSpace}>
        <OversizedWordmark cropBottom parallax />
      </div>
    </Section>
  );
}
