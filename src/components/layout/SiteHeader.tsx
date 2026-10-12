import { Link, NavLink } from 'react-router-dom';
import { navigation } from '../../content/site';
import { Container } from '../primitives/Container';
import { Wordmark } from '../primitives/Wordmark';
import styles from './SiteHeader.module.css';

/**
 * Wordmark + primary navigation, overlaid on the top of each page (every page opens
 * on a dark surface). The current page is marked with the red dot from the Figma nav.
 */
export function SiteHeader() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link to="/" className={styles.home} aria-label="Frosa — home">
          <Wordmark className={styles.wordmark} title="Frosa" />
        </Link>
        <nav aria-label="Primary">
          <ul className={styles.nav}>
            {navigation.map((item) => (
              <li key={item.href}>
                <NavLink to={item.href} className={({ isActive }) => [styles.link, isActive && styles.active].filter(Boolean).join(' ')}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
