import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import type { CaseScreenPage } from '../../content/cases/types';
import styles from './CaseScreenNavigator.module.css';

const cx = (...names: Array<string | false | undefined>) => names.filter(Boolean).join(' ');

type Device = 'desktop' | 'mobile';

type CaseScreenNavigatorProps = {
  pages: CaseScreenPage[];
  /** Name of the site, shown in the window bar. */
  site: string;
  /** Accessible name of the whole navigator. */
  label: string;
  /** A line under the screens, e.g. what was added to them for the portfolio. */
  note?: string;
  /** A short tag kept visible on the screen frame (e.g. that its logos are samples). */
  badge?: string;
};

/**
 * The final screens as a small working site: pick a page, or use the links on the screen itself
 * (the site's own menu, cards and buttons), switch between desktop and mobile, and read the
 * notes from the design documentation. Clicking anywhere else briefly shows where the links are,
 * as in a Figma prototype.
 */
export function CaseScreenNavigator({ pages, site, label, note, badge }: CaseScreenNavigatorProps) {
  const [pageId, setPageId] = useState(pages[0].id);
  const [device, setDevice] = useState<Device>('desktop');
  const [hint, setHint] = useState(false);
  const viewport = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLElement>(null);

  // the first time the navigator comes into view, briefly show where the links are
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        window.setTimeout(() => setHint(true), 700);
      },
      { threshold: 0.45 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const byId = useMemo(() => new Map(pages.map((p) => [p.id, p])), [pages]);
  const groups = useMemo(() => [...new Set(pages.map((p) => p.group))], [pages]);
  const page = byId.get(pageId) ?? pages[0];
  const mobile = device === 'mobile';
  const screen = mobile && page.mobile ? page.mobile : page.desktop;

  // a new page opens at its top
  useEffect(() => {
    viewport.current?.scrollTo({ top: 0 });
  }, [pageId, device]);

  useEffect(() => {
    if (!hint) return;
    const t = window.setTimeout(() => setHint(false), 1500);
    return () => window.clearTimeout(t);
  }, [hint]);

  const go = (id: string) => {
    if (byId.has(id)) setPageId(id);
  };

  const switchDevice = (next: Device) => {
    setDevice(next);
    if (next === 'mobile' && !page.mobile) setPageId(pages.find((p) => p.mobile)?.id ?? pages[0].id);
  };

  return (
    <section ref={root} className={styles.navigator} aria-label={label}>
      <div className={styles.toolbar}>
        <div className={styles.groups}>
          {groups.map((group) => (
            <div key={group} className={styles.group}>
              <p className={styles.groupLabel}>{group}</p>
              <ul className={styles.pages}>
                {pages
                  .filter((p) => p.group === group)
                  .map((p) => {
                    const unavailable = mobile && !p.mobile;
                    return (
                      <li key={p.id}>
                        <button
                          type="button"
                          className={cx(styles.pageButton, p.id === page.id && styles.current)}
                          aria-pressed={p.id === page.id}
                          disabled={unavailable}
                          title={unavailable ? 'Mobile design not added yet' : undefined}
                          onClick={() => go(p.id)}
                        >
                          {p.label}
                        </button>
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.deviceBlock}>
        <div className={styles.devices} role="group" aria-label="Screen size">
          {(['desktop', 'mobile'] as Device[]).map((d) => (
            <button key={d} type="button" className={cx(styles.device, device === d && styles.current)} aria-pressed={device === d} onClick={() => switchDevice(d)}>
              {d === 'desktop' ? 'Desktop' : 'Mobile'}
            </button>
          ))}
        </div>
          {mobile && pages.some((p) => !p.mobile) && (
            <p className={styles.legend}>
              <span className={styles.legendSwatch} aria-hidden="true" /> Dimmed pages: mobile design not added yet
            </p>
          )}
        </div>
      </div>

      <div className={cx(styles.stage, mobile && styles.stageMobile)}>
        <div className={styles.windowWrap}>
        <p className={styles.interactive}>
          <span className={styles.pulse} aria-hidden="true" />
          {mobile ? 'Interactive · scroll the screen, or pick a page above' : 'Interactive · click the links on the screen to move around the site'}
        </p>
        <div className={cx(styles.window, mobile && styles.phone)}>
          {!mobile && (
            <div className={styles.bar}>
              <span className={styles.lights} aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className={styles.address} aria-hidden="true">
                {site} <span className={styles.slash}>/</span> {page.label}
              </span>
              {badge && <span className={styles.badge}>{badge}</span>}
            </div>
          )}
          {mobile && badge && <span className={cx(styles.badge, styles.badgeFloating)}>{badge}</span>}
          <div ref={viewport} className={styles.viewport} tabIndex={0} role="region" aria-label={`${page.label}, ${mobile ? 'mobile' : 'desktop'} screen. Scroll to see the whole page.`}>
            <div
              className={cx(styles.screen, hint && styles.hint)}
              style={{ '--ratio': `${screen.width} / ${screen.height}` } as CSSProperties}
              onClick={(e) => {
                if (e.target === e.currentTarget || (e.target as HTMLElement).tagName === 'IMG') setHint(true);
              }}
            >
              <img key={screen.src} className={styles.image} src={screen.src} alt={`${site}, ${page.label} page (${mobile ? 'mobile' : 'desktop'}).`} decoding="async" />
              {!mobile &&
                page.hotspots.map(([x, y, w, h, target], i) => {
                  const to = byId.get(target);
                  if (!to) return null;
                  const style = {
                    left: `${(x / screen.width) * 100}%`,
                    top: `${(y / screen.height) * 100}%`,
                    width: `${(w / screen.width) * 100}%`,
                    height: `${(h / screen.height) * 100}%`,
                  } as CSSProperties;
                  return (
                    <button
                      key={i}
                      type="button"
                      className={styles.hotspot}
                      style={style}
                      aria-label={`Go to ${to.label}`}
                      onClick={() => {
                        go(target);
                        // keep keyboard focus on the screen, which then announces the new page
                        viewport.current?.focus({ preventScroll: true });
                      }}
                    />
                  );
                })}
            </div>
          </div>
        </div>

        </div>

        <aside className={styles.notes} aria-live="polite">
          <p className={styles.notesLabel}>{page.label}</p>
          {page.notes?.length ? (
            <>
              <p className={styles.notesSource}>From the design documentation</p>
              <ul className={styles.notesList}>
                {page.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </>
          ) : (
            <p className={styles.notesSource}>{mobile ? 'Designed at 320 pixels wide.' : 'Designed at 1440 pixels wide.'}</p>
          )}
        </aside>
      </div>
      {note && <p className={styles.disclosure}>{note}</p>}
    </section>
  );
}
