import { useEffect } from 'react';
import { BrowserRouter, matchPath, Route, Routes, useLocation } from 'react-router-dom';
import { SiteHeader } from './components/layout/SiteHeader';
import { SiteFooter } from './components/layout/SiteFooter';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { NotFoundPage, ProjectPage } from './pages/routes';
import { caseStudies } from './pages/cases';
import { ContactPage } from './pages/ContactPage';
import { DesignSystemPage } from './pages/DesignSystemPage';
import styles from './App.module.css';

/**
 * Page transitions: the main region is keyed by path, so each route mounts fresh and
 * plays a short fade-and-rise. It never blocks navigation or delays the next page.
 */
function Shell() {
  const { pathname, hash } = useLocation();
  // Case studies end on the black footer (Figma 326:703); every other page keeps the red one.
  const slug = matchPath('/work/:slug', pathname)?.params.slug;
  const onCase = slug !== undefined && slug in caseStudies;

  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" key={pathname} className={styles.page}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {import.meta.env.DEV && <Route path="/design-system" element={<DesignSystemPage />} />}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <SiteFooter tone={onCase ? 'dark' : 'red'} />
    </>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
