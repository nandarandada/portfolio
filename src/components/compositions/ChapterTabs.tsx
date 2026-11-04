import { useRef, type KeyboardEvent, type ReactNode } from 'react';
import { Section } from '../primitives/Section';
import { Container } from '../primitives/Container';
import styles from './ChapterTabs.module.css';

type Tab = { id: string; label: string };

type ChapterTabsProps = {
  /** Accessible name of the tab list. */
  label: string;
  tabs: readonly Tab[];
  selected: string;
  onSelect: (id: string) => void;
  /** Prefix for tab and panel ids, e.g. "about" → about-tab-me / about-panel-me. */
  idPrefix: string;
};

/**
 * Two (or more) chapters of one page, as editorial serif tabs on the dark surface.
 * WAI-ARIA tabs pattern: arrow keys move between tabs (automatic activation), Home/End jump
 * to the first/last tab, only the selected tab is in the tab order.
 */
export function ChapterTabs({ label, tabs, selected, onSelect, idPrefix }: ChapterTabsProps) {
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = tabs.length - 1;
    const next =
      event.key === 'ArrowRight' ? (index === last ? 0 : index + 1)
      : event.key === 'ArrowLeft' ? (index === 0 ? last : index - 1)
      : event.key === 'Home' ? 0
      : event.key === 'End' ? last
      : null;
    if (next === null) return;
    event.preventDefault();
    onSelect(tabs[next].id);
    refs.current[next]?.focus();
  };

  return (
    <Section tone="dark" spacing="none" className={styles.bar} aria-label={label}>
      <Container>
        <div role="tablist" aria-label={label} className={styles.list}>
          {tabs.map((tab, i) => {
            const active = tab.id === selected;
            return (
              <button
                key={tab.id}
                ref={(node) => {
                  refs.current[i] = node;
                }}
                type="button"
                role="tab"
                id={`${idPrefix}-tab-${tab.id}`}
                aria-selected={active}
                aria-controls={`${idPrefix}-panel-${tab.id}`}
                tabIndex={active ? 0 : -1}
                className={styles.tab}
                onClick={() => onSelect(tab.id)}
                onKeyDown={(event) => onKeyDown(event, i)}
              >
                <span className={styles.number} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {tab.label}
              </button>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

/** The panel for one chapter. Hidden panels stay out of the page and the accessibility tree. */
export function ChapterPanel({ id, idPrefix, selected, children }: { id: string; idPrefix: string; selected: boolean; children: ReactNode }) {
  return (
    <div role="tabpanel" id={`${idPrefix}-panel-${id}`} aria-labelledby={`${idPrefix}-tab-${id}`} hidden={!selected} tabIndex={-1} className={styles.panel}>
      {selected && children}
    </div>
  );
}
