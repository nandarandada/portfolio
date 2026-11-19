import {
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from 'react';
import { usePageTitle } from '../usePageTitle';
import { Container } from '../../components/primitives/Container';
import { BodyText, DisplayHeading, EditorialHeading } from '../../components/primitives/Typography';
import { TextLink } from '../../components/primitives/TextLink';
import { Reveal } from '../../motion/Reveal';
import { useInView, useReducedMotion } from '../../motion/useInView';
import { CaseSection, CaseTheme } from '../../components/case/CaseLayout';
import { CaseCredits } from '../../components/case/CaseCredits';
import {
  credits,
  screensNote,
  details,
  explorations,
  final,
  greatPetLivingTheme,
  layers,
  livingFonts,
  loupe,
  project,
  speckle,
  start,
  system,
  type Detail,
  type Exploration,
  type Shot as ShotMedia,
} from '../../content/cases/greatPetLiving';
import caseStyles from '../../components/case/Case.module.css';
import styles from './GreatPetLivingCase.module.css';

const cx = (...names: Array<string | false | undefined>) => names.filter(Boolean).join(' ');

/**
 * Great Pet Living (2022): a content site finds its own look. One narrow column, text aligned
 * left, the screens large: the template it started from, three tries with the team's feedback,
 * enlarged details of the approved interface, its style guide set in its own fonts, and the
 * pages beyond the hero. Living's cream, speckled paper appears behind its own work; Frosa's
 * header, footer and type stay as on every case.
 */
export function GreatPetLivingCase() {
  usePageTitle(project.title);

  // the hero's cream paper reaches the top of the page: the header switches to ink while it is here
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.headerTone = 'ink';
    return () => {
      delete root.dataset.headerTone;
    };
  }, []);

  // Living's own typefaces, for the style guide (this page only)
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = livingFonts;
    document.head.appendChild(link);
    return () => link.remove();
  }, []);

  return (
    <CaseTheme theme={greatPetLivingTheme}>
      <div className={styles.page} style={{ '--speckle': `url("${speckle}")` } as CSSProperties}>
        {/* 01 — The project: the approved home page, desktop and mobile, on Living's paper */}
        <CaseSection tone="base" labelledBy="case-title" className={caseStyles.hero}>
          <div className={styles.stage}>
            <div className={styles.heroComposition}>
              <Shot media={project.desktop} priority className={cx(styles.screen, styles.heroDesktop)} />
              <Shot media={project.mobile} priority className={cx(styles.phone, styles.heroMobile)} />
            </div>
          </div>
          <Container>
            {/* the title block in the same centred hero column as the other cases */}
            <div className={cx(caseStyles.column, caseStyles.columnWide, caseStyles.heroColumn, styles.heroText)}>
              <DisplayHeading as="h1" id="case-title" text={project.title} className={caseStyles.heroTitle} />
              <Reveal as="dl" delay={200} className={caseStyles.meta}>
                {project.meta.map((item) => (
                  <div key={item.label} className={caseStyles.metaItem}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </Reveal>
              <Reveal delay={300}>
                <ul className={caseStyles.disciplines} aria-label="Disciplines">
                  {project.disciplines.map((discipline) => (
                    <li key={discipline}>{discipline}</li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={400} className={styles.live}>
                <TextLink href={project.link.href} className={styles.liveLink}>
                  {project.link.label} <span aria-hidden="true">↗</span>
                  <span className={styles.srOnly}> (opens in a new tab)</span>
                </TextLink>
                <span className={styles.caption}>{project.linkNote}</span>
              </Reveal>
            </div>
            <div className={cx(styles.text, styles.lead)}>
              <EditorialHeading text={project.headline} className={styles.headline} />
              <Reveal className={styles.measure}>
                <BodyText dropCap>{project.body}</BodyText>
              </Reveal>
            </div>
          </Container>
        </CaseSection>

        {/* 02 — The starting point: the question, the goals, then the template, scrolling */}
        <CaseSection tone="paper" labelledBy="gl-start">
          <Container className={styles.stack}>
            <div className={cx(styles.text, styles.split)}>
              <Intro id="gl-start" label={start.label} heading={start.heading} body={start.body} />
              <Reveal as="dl" delay={150} className={styles.goals}>
                {start.goals.map((goal) => (
                  <div key={goal.title} className={styles.goal}>
                    <dt>{goal.title}</dt>
                    <dd>{goal.text}</dd>
                  </div>
                ))}
              </Reveal>
            </div>
            <figure className={cx(styles.col, styles.figure)}>
              <div className={styles.pair}>
                <ScrollShot media={start.desktop} ratio="1600 / 1100" className={styles.screen} />
                <ScrollShot media={start.mobile} ratio="720 / 1560" className={styles.phone} />
              </div>
              <figcaption className={styles.caption}>{start.caption}</figcaption>
            </figure>
          </Container>
        </CaseSection>

        {/* 03 — Finding the visual language: the versions, each with its whole home page and references */}
        <CaseSection tone="paper" labelledBy="gl-tries" className={styles.paperTexture}>
          <Container className={styles.stack}>
            <div className={styles.text}>
              <Intro id="gl-tries" label={explorations.label} heading={explorations.heading} body={explorations.body} />
            </div>
            <ExplorationSwitcher steps={explorations.steps} />
          </Container>
        </CaseSection>

        {/* 04 — Design details: enlarged crops of the approved design, then the style guide */}
        <CaseSection tone="base" labelledBy="gl-details">
          <Container className={styles.stack}>
            <div className={styles.text}>
              <Intro id="gl-details" label={details.label} heading={details.heading} body={details.body} />
            </div>
            <DetailExplorer items={details.items} />
            <StyleGuide />
          </Container>
        </CaseSection>

        {/* 05 — The final experience: the home page beyond the hero, and the article up close */}
        <CaseSection tone="paper" labelledBy="gl-final" className={styles.paperTexture}>
          <Container className={styles.stack}>
            <div className={styles.text}>
              <Intro id="gl-final" label={final.label} heading={final.heading} body={final.body} />
            </div>

            <section className={cx(styles.col, styles.finalPage)} aria-labelledby="gl-home">
              <div className={cx(styles.text, styles.finalHead)}>
                <h3 id="gl-home" className={styles.title}>
                  {final.home.title}
                </h3>
                <p className={styles.caption}>{final.home.caption}</p>
              </div>
              <div className={styles.pair}>
                <ScrollShot media={final.home.desktop} ratio="1600 / 1100" className={styles.screen} />
                <ScrollShot media={final.home.mobile} ratio="400 / 866" className={styles.phone} />
              </div>
            </section>

            <section className={cx(styles.col, styles.finalPage)} aria-labelledby="gl-article">
              <div className={cx(styles.text, styles.finalHead)}>
                <h3 id="gl-article" className={styles.title}>
                  {final.article.title}
                </h3>
                <p className={styles.caption}>{final.article.caption}</p>
              </div>
              <div className={styles.pair}>
                <ScrollShot media={final.article.desktop} ratio="1600 / 1100" className={styles.screen} />
                <ScrollShot media={final.article.mobile} ratio="540 / 1170" className={styles.phone} />
              </div>
              <div className={styles.articleCrops}>
                {final.article.crops.map((media, i) => (
                  <figure key={media.id} className={cx(styles.figure, styles[`crop${i}`])}>
                    <Shot media={media} className={styles.screen} />
                    <figcaption className={styles.caption}>{media.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </section>

            {/* how the screens on this page differ from the design file, after the work itself */}
            <aside className={cx(styles.text, styles.note)} aria-label={screensNote.label}>
              <p className={styles.label}>{screensNote.label}</p>
              <p>{screensNote.text}</p>
            </aside>
          </Container>
        </CaseSection>

        {/* 06 — Credits */}
        <CaseSection tone="base" labelledBy="gl-credits">
          <Container>
            <div className={cx(styles.col, styles.credits)}>
              <CaseCredits
                id="gl-credits"
                label={credits.label}
                items={credits.items}
                statement={credits.statement}
                logos={credits.logos}
                link={{ ...project.link, note: project.linkNote }}
                next={credits.next}
              />
            </div>
          </Container>
        </CaseSection>
      </div>
    </CaseTheme>
  );
}

/** A chapter opening in the page's single column: label, heading, then the body, all aligned left. */
function Intro({ id, label, heading, body, children }: { id: string; label: string; heading: string; body: string[]; children?: ReactNode }) {
  return (
    <header className={styles.intro}>
      <p className={styles.sectionLabel}>{label}</p>
      <EditorialHeading id={id} text={heading} className={styles.introHeading} />
      <Reveal className={styles.measure}>
        {body.map((paragraph, i) => (
          <BodyText key={paragraph} dropCap={i === 0}>
            {paragraph}
          </BodyText>
        ))}
        {children}
      </Reveal>
    </header>
  );
}

/**
 * An authentic screen or crop. Its space is reserved from its intrinsic size, but nothing is
 * drawn — no frame, no shadow — until the image has loaded; then it fades in.
 */
function Shot({ media, className, priority = false }: { media: ShotMedia; className?: string; priority?: boolean }) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const img = ref.current;
    if (img?.complete && img.naturalWidth) setLoaded(true);
  }, []);
  return (
    <img
      ref={ref}
      className={cx(styles.shot, loaded && styles.loaded, className)}
      src={media.src}
      alt={media.alt ?? ''}
      width={media.width}
      height={media.height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      {...(priority ? { fetchpriority: 'high' } : {})}
      onLoad={() => setLoaded(true)}
    />
  );
}

/**
 * A long screen in a fixed frame that the visitor can scroll. While it is on screen it scrolls
 * itself slowly; it stops as soon as the visitor points at it, touches it or focuses it, and
 * starts again from where they left it once they move away. At the end it pauses and returns to
 * the top. With reduced motion it never moves on its own.
 */
function ScrollShot({ media, ratio, className, auto = true }: { media: ShotMedia; ratio: string; className?: string; auto?: boolean }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const reduced = useReducedMotion();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth) setLoaded(true);
  }, []);

  useEffect(() => {
    const el = frameRef.current;
    if (!el || reduced || !auto || !loaded) return;
    let raf = 0;
    let last = 0;
    let pos = el.scrollTop;
    let held = false;
    let waitUntil = performance.now() + 900;
    let rewind = false;
    let resumeTimer = 0;

    const tick = (t: number) => {
      raf = requestAnimationFrame(tick);
      const dt = last ? Math.min(0.05, (t - last) / 1000) : 0;
      last = t;
      if (held || t < waitUntil) return;
      if (rewind) {
        rewind = false;
        pos = 0;
        el.scrollTo({ top: 0, behavior: 'smooth' });
        waitUntil = t + 1400;
        return;
      }
      const max = el.scrollHeight - el.clientHeight;
      if (max <= 0) return;
      pos = Math.min(max, pos + el.clientWidth * 0.08 * dt);
      el.scrollTop = pos;
      if (pos >= max - 0.5) {
        rewind = true;
        waitUntil = t + 1800;
      }
    };
    const run = () => {
      if (!raf) {
        last = 0;
        raf = requestAnimationFrame(tick);
      }
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };
    const hold = () => {
      held = true;
      rewind = false;
      window.clearTimeout(resumeTimer);
    };
    const release = (delay: number) => {
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => {
        pos = el.scrollTop;
        held = false;
        waitUntil = performance.now() + 500;
      }, delay);
    };
    const onEnter = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') hold();
    };
    const onLeave = (e: PointerEvent) => {
      if (e.pointerType === 'mouse' && !el.contains(document.activeElement)) release(400);
    };
    const onTouchEnd = () => release(2500);
    const onFocusOut = () => release(400);

    const observer = new IntersectionObserver(([entry]) => (entry.isIntersecting ? run() : stop()), { threshold: 0.25 });
    observer.observe(el);
    el.addEventListener('pointerenter', onEnter);
    el.addEventListener('pointerleave', onLeave);
    el.addEventListener('wheel', hold, { passive: true });
    el.addEventListener('touchstart', hold, { passive: true });
    el.addEventListener('touchend', onTouchEnd);
    el.addEventListener('focusin', hold);
    el.addEventListener('focusout', onFocusOut);
    return () => {
      stop();
      observer.disconnect();
      window.clearTimeout(resumeTimer);
      el.removeEventListener('pointerenter', onEnter);
      el.removeEventListener('pointerleave', onLeave);
      el.removeEventListener('wheel', hold);
      el.removeEventListener('touchstart', hold);
      el.removeEventListener('touchend', onTouchEnd);
      el.removeEventListener('focusin', hold);
      el.removeEventListener('focusout', onFocusOut);
    };
  }, [reduced, auto, loaded]);

  const img = (
    <img
      ref={imgRef}
      className={styles.scrollImage}
      src={media.src}
      alt={media.alt ?? ''}
      width={media.width}
      height={media.height}
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
    />
  );

  return (
    <div
      ref={frameRef}
      className={cx(styles.scrollFrame, loaded && styles.loaded, className)}
      style={{ '--ratio': ratio } as CSSProperties}
      tabIndex={0}
      role="region"
      aria-label={`${media.title}, scrollable`}
    >
      {media.smallSrc ? (
        <picture>
          <source media="(max-width: 899px)" srcSet={media.smallSrc} />
          {img}
        </picture>
      ) : (
        img
      )}
    </div>
  );
}

/** Arrow keys, Home and End move between tabs, as in the WAI-ARIA tabs pattern. */
function useTabs(count: number) {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const onKeyDown = (event: KeyboardEvent) => {
    const keys: Record<string, number> = { ArrowRight: active + 1, ArrowLeft: active - 1, Home: 0, End: count - 1 };
    if (!(event.key in keys)) return;
    event.preventDefault();
    const next = (keys[event.key] + count) % count;
    setActive(next);
    refs.current[next]?.focus();
  };
  return { active, setActive, refs, onKeyDown };
}

function Tabs({
  label,
  names,
  active,
  setActive,
  refs,
  onKeyDown,
  base,
  numbered = false,
  dark = false,
}: ReturnType<typeof useTabs> & { label: string; names: string[]; base: string; numbered?: boolean; dark?: boolean }) {
  return (
    <div role="tablist" aria-label={label} className={cx(styles.tabs, dark && styles.tabsDark)} onKeyDown={onKeyDown}>
      {names.map((name, i) => (
        <button
          key={name}
          ref={(el) => {
            refs.current[i] = el;
          }}
          type="button"
          role="tab"
          id={`${base}-tab-${i}`}
          aria-selected={i === active}
          aria-controls={`${base}-panel`}
          tabIndex={i === active ? 0 : -1}
          className={styles.tab}
          onClick={() => setActive(i)}
        >
          {numbered && (
            <span className={styles.tabNumber} aria-hidden="true">
              {String(i).padStart(2, '0')}
            </span>
          )}
          {name}
        </button>
      ))}
    </div>
  );
}

/**
 * The versions: tabs, then the selected version's whole home page — scrolling — with its card
 * (what it explored, the feedback, what followed) and its references beside it.
 */
function ExplorationSwitcher({ steps }: { steps: Exploration[] }) {
  const tabs = useTabs(steps.length);
  const { active } = tabs;
  const base = useId();
  const step = steps[active];
  const labels = explorations.summaryLabels;
  const rowRef = useRef<HTMLUListElement>(null);
  const [rowScrolls, setRowScrolls] = useState(false);

  // fade the reference row's right edge while there is more to scroll to
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    const update = () => {
      row.dataset.more = String(row.scrollLeft + row.clientWidth < row.scrollWidth - 4);
      setRowScrolls(row.scrollWidth > row.clientWidth + 4);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(row);
    row.addEventListener('scroll', update, { passive: true });
    return () => {
      observer.disconnect();
      row.removeEventListener('scroll', update);
    };
  }, [active]);

  return (
    <div className={cx(styles.col, styles.switcher)}>
      <div className={styles.text}>
        <Tabs {...tabs} base={base} label="Versions of the home page" names={steps.map((s) => s.tab)} numbered />
      </div>

      <div role="tabpanel" id={`${base}-panel`} aria-labelledby={`${base}-tab-${active}`} className={styles.switcherBody}>
        <div className={styles.switcherPanel}>
          <ScrollShot key={step.key} media={step.page} ratio="1600 / 1150" className={styles.screen} />
          <div className={styles.side} key={`side-${step.key}`}>
            <article className={cx(styles.summaryItem, styles.summaryActive)}>
              <p className={styles.summaryTitle}>
                <span className={styles.tabNumber} aria-hidden="true">
                  {String(active).padStart(2, '0')}
                </span>
                {step.tab}
              </p>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardText}>{step.text}</p>
              <dl className={styles.summaryFacts}>
                <div>
                  <dt>{labels.explored}</dt>
                  <dd>{step.summary.explored}</dd>
                </div>
                <div>
                  <dt>{labels.response}</dt>
                  <dd>{step.summary.response}</dd>
                </div>
                <div>
                  <dt>{labels.next}</dt>
                  <dd>{step.summary.next}</dd>
                </div>
              </dl>
            </article>
          </div>
        </div>

        {/* the version's references: one horizontal row under the screen and the card */}
        {step.references && (
          <div className={styles.references} key={`refs-${step.key}`}>
            <div className={styles.referencesHead}>
              <p className={styles.label}>{step.references.label}</p>
              <p className={styles.caption}>{explorations.referencesNote}</p>
            </div>
            <ul
              ref={rowRef}
              className={styles.referenceRow}
              tabIndex={rowScrolls ? 0 : undefined}
              aria-label={rowScrolls ? `${step.references.label}, scrolls sideways` : step.references.label}
            >
              {step.references.items.map((media) => (
                <li key={media.id} style={{ '--w': media.width, '--h': media.height } as CSSProperties}>
                  {media.height > media.width * 1.4 ? (
                    <ScrollShot media={media} ratio="3 / 2" auto={false} className={cx(styles.reference, styles.referenceTall)} />
                  ) : (
                    <a href={media.src} target="_blank" rel="noreferrer" className={styles.referenceLink}>
                      <Shot media={media} className={styles.reference} />
                      <span className={styles.srOnly}> (opens full size in a new tab)</span>
                    </a>
                  )}
                  {media.caption && <span className={styles.caption}>{media.caption}</span>}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Typography, cards, categories and texture: each tab shows different, enlarged evidence from
 * the approved interface, with the template's equivalent smaller beneath it.
 */
function DetailExplorer({ items }: { items: Detail[] }) {
  const tabs = useTabs(items.length);
  const { active } = tabs;
  const base = useId();
  const item = items[active];

  return (
    <div className={cx(styles.col, styles.details)}>
      <div className={cx(styles.text, styles.detailHead)}>
        <Tabs {...tabs} base={base} label="Design details" names={items.map((d) => d.tab)} dark />
        <p className={styles.measure}>{item.text}</p>
      </div>
      <div role="tabpanel" id={`${base}-panel`} aria-labelledby={`${base}-tab-${active}`} className={styles.detailPanel}>
        <div className={cx(styles.evidence, styles[`evidence-${item.key}`])} key={item.key}>
          {item.key === 'texture' ? (
            <>
              <Loupe />
              <LayerStack />
            </>
          ) : (
            item.evidence.map((media) => (
              <figure key={media.id} className={styles.figure}>
                <Shot media={media} className={styles.detailShot} />
                <figcaption className={styles.caption}>{media.caption}</figcaption>
              </figure>
            ))
          )}
        </div>
        {item.before && (
          <figure className={styles.before} key={`before-${item.key}`}>
            <figcaption className={styles.label}>{details.beforeLabel}</figcaption>
            <Shot media={item.before} className={styles.detailShot} />
          </figure>
        )}
      </div>
    </div>
  );
}

/**
 * A magnifier over the approved home page: the page at reading size, and inside the lens the
 * same area rendered from the design file at a larger scale, so the flecks read clearly.
 * Follows the mouse, can be dragged by touch, and moves with the arrow keys.
 */
function Loupe() {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [pos, setPos] = useState({ x: 0.13, y: 0.33 });
  const zoom = 3;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setSize({ w: entry.contentRect.width, h: entry.contentRect.height }));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const clamp = (v: number) => Math.min(1, Math.max(0, v));
  const moveTo = (e: ReactPointerEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    setPos({ x: clamp((e.clientX - rect.left) / rect.width), y: clamp((e.clientY - rect.top) / rect.height) });
  };
  const onKeyDown = (e: KeyboardEvent) => {
    const step = 0.04;
    const d: Record<string, [number, number]> = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] };
    if (!(e.key in d)) return;
    e.preventDefault();
    setPos((p) => ({ x: clamp(p.x + d[e.key][0]), y: clamp(p.y + d[e.key][1]) }));
  };

  const lens = Math.min(240, size.w * 0.4);
  const lensStyle = {
    width: lens,
    height: lens,
    left: pos.x * size.w - lens / 2,
    top: pos.y * size.h - lens / 2,
    backgroundImage: `url("${loupe.hi}")`,
    backgroundSize: `${size.w * zoom}px ${size.h * zoom}px`,
    backgroundPosition: `${-(pos.x * size.w * zoom - lens / 2)}px ${-(pos.y * size.h * zoom - lens / 2)}px`,
  } as CSSProperties;

  return (
    <figure className={cx(styles.figure, styles.loupeFigure)}>
      <div
        ref={ref}
        className={styles.loupe}
        tabIndex={0}
        role="img"
        aria-label={`${loupe.base.alt} ${loupe.label}`}
        onPointerMove={(e) => {
          if (e.pointerType === 'mouse' || e.buttons) moveTo(e);
        }}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          moveTo(e);
        }}
        onKeyDown={onKeyDown}
      >
        <Shot media={loupe.base} className={styles.loupeBase} />
        {size.w > 0 && <div className={styles.lens} style={lensStyle} aria-hidden="true" />}
      </div>
      <figcaption className={styles.caption}>{loupe.caption}</figcaption>
    </figure>
  );
}

/**
 * The design file's "Background details" panel as a compact exploded view: the white card
 * below, the transparent speckle layer above it. The layers part once the view is on screen;
 * the button puts them together and pulls them apart. With reduced motion they simply switch.
 */
function LayerStack() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.4 });
  const [together, setTogether] = useState(false);
  const apart = inView && !together;

  return (
    <figure className={styles.figure}>
      <div ref={ref} className={cx(styles.scene, apart && styles.sceneApart)}>
        <div className={styles.plane} role="img" aria-label={layers.label}>
          <div className={styles.layerCard} />
          <div className={styles.layerTexture} />
        </div>
        <button type="button" className={styles.layersToggle} onClick={() => setTogether((v) => !v)}>
          {apart ? layers.apart : layers.together}
        </button>
      </div>
      <figcaption className={styles.caption}>{layers.caption}</figcaption>
    </figure>
  );
}

/** Type and colour lead, set live in Living's fonts; buttons and inputs follow as supporting evidence. */
function StyleGuide() {
  return (
    <section className={cx(styles.col, styles.system)} aria-labelledby="gl-system">
      <div className={cx(styles.text, styles.systemHead)}>
        <h3 id="gl-system" className={styles.systemLabel}>
          {system.label}
        </h3>
        <p className={styles.measure}>{system.intro}</p>
      </div>

      {/* type: the three families beside the scale, in one sheet */}
      <div className={cx(styles.sheetLive, styles.typeSheet)}>
        <ul className={styles.faces} aria-label="Typefaces">
          {system.faces.map((face) => (
            <li key={face.name} className={styles.face} style={{ fontFamily: face.family, fontWeight: face.weight }}>
              <span className={styles.faceGlyphs} aria-hidden="true">
                Aa
              </span>
              <span className={styles.faceName}>{face.name}</span>
              <span className={styles.faceRole}>{face.role}</span>
            </li>
          ))}
        </ul>
        <div className={styles.typeScale}>
          <ul className={styles.scale} aria-label="Heading sizes">
            {system.headings.map((h) => (
              <li key={h.label}>
                <span
                  className={cx(styles.scaleSample, h.green && styles.scaleGreen)}
                  style={{ fontFamily: h.family, fontWeight: h.weight, fontSize: `clamp(${Math.round(Math.max(16, h.size * 0.6))}px, ${(h.size / 14).toFixed(2)}vw, ${h.size}px)` }}
                >
                  {h.label}
                </span>
                <span className={styles.scaleNote}>{h.note}</span>
              </li>
            ))}
          </ul>
          <ul className={cx(styles.scale, styles.scaleBodies)} aria-label="Body sizes">
            {system.body.map((b) => (
              <li key={b.label}>
                <span className={styles.scaleBody} style={{ fontSize: b.size }}>
                  {system.bodySample}
                </span>
                <span className={styles.scaleNote}>
                  {b.label} · {b.size} px · Nunito Sans
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* colour: one continuous band, the identity colours widest, names beneath */}
      <ul className={styles.palette} aria-label="Colour palette">
        {system.palette.map((swatch, i) => (
          <li key={swatch.hex} tabIndex={0} className={cx(styles.swatch, i < 2 && styles.swatchKey)}>
            <span className={cx(styles.swatchColour, swatch.light && styles.swatchLight)} style={{ background: swatch.hex }} />
            <span className={styles.chipName}>{swatch.name}</span>
            <span className={styles.chipHex}>{swatch.hex}</span>
          </li>
        ))}
      </ul>

      <LiveComponents />
    </section>
  );
}

/**
 * The style guide's button and input, rebuilt in Living's fonts and colours from the handover
 * file's states so they can be tried: hover the button, focus the field, type an address and
 * press the button. A disabled button sits beside them. Nothing is sent anywhere.
 */
function LiveComponents() {
  const { live } = system;
  const id = useId();
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);
  const valid = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  return (
    <div className={styles.components}>
      <p className={cx(styles.label, styles.componentsLabel)}>{system.componentsLabel}</p>
      <form
        className={styles.sheetLive}
        aria-label={system.componentsLabel}
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          const ok = valid(value);
          setError(!ok);
          setDone(ok);
        }}
      >
        <div className={styles.liveRow}>
          <div className={styles.liveField}>
            <label htmlFor={`${id}-email`} className={styles.liveLabel}>
              {live.inputLabel}
            </label>
            <input
              id={`${id}-email`}
              type="email"
              className={cx(styles.liveInput, error && styles.liveInputError)}
              placeholder={live.inputPlaceholder}
              value={value}
              aria-invalid={error}
              aria-describedby={error || done ? `${id}-status` : undefined}
              autoComplete="off"
              onChange={(e) => {
                setValue(e.target.value);
                setDone(false);
                if (error && valid(e.target.value)) setError(false);
              }}
            />
            <p id={`${id}-status`} className={cx(styles.liveError, done && styles.liveValid)} aria-live="polite">
              {error ? live.error : done ? live.valid : ''}
            </p>
          </div>
          <button type="submit" className={styles.liveButton}>
            {live.button}
          </button>
          <button type="button" className={styles.liveButton} disabled>
            {live.button}
          </button>
        </div>
      </form>
      <p className={styles.caption}>{live.note}</p>
    </div>
  );
}
