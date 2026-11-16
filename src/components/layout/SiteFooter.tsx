import type { CSSProperties } from 'react';
import { footer } from '../../content/site';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { TextLink } from '../primitives/TextLink';
import { OversizedWordmark } from '../primitives/OversizedWordmark';
import styles from './SiteFooter.module.css';

/**
 * Textured footer with the petal pattern and the oversized wordmark (Figma node 126:1998).
 * `red` everywhere by default; `dark` on case studies (Figma 326:703), where the petals read grey.
 * `color` replaces the dark surface with a case's own colour, its grain multiplied over it.
 */
export function SiteFooter({ tone = 'red', color }: { tone?: 'red' | 'dark'; color?: string }) {
  const style = color
    ? ({ '--surface-bg': `${color} var(--texture-grain) center / var(--texture-size)`, '--surface-blend': 'multiply' } as CSSProperties)
    : undefined;
  return (
    <Section as="footer" tone={tone} spacing="none" style={style} className={`${styles.footer} ${tone === 'dark' ? styles.dark : ''}`}>
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
