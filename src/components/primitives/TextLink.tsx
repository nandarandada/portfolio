import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './TextLink.module.css';

type TextLinkProps = {
  /** Internal routes start with `/`; anything else (mailto:, https:) renders a plain anchor. */
  href: string;
  className?: string;
  children: ReactNode;
};

/** Text link with the restrained Frosa underline: drawn in from the left on hover and focus. */
export function TextLink({ href, className, children }: TextLinkProps) {
  const cls = [styles.link, className].filter(Boolean).join(' ');
  if (href.startsWith('/')) {
    return (
      <Link to={href} className={cls}>
        {children}
      </Link>
    );
  }
  const external = href.startsWith('http');
  return (
    <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
      {children}
    </a>
  );
}
