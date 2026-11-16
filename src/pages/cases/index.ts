import type { ComponentType } from 'react';
import { ArcticArenaCase } from './ArcticArenaCase';
import { arcticArenaTheme } from '../../content/cases/arcticArena';

/** Designed case studies, by project slug. Projects without an entry keep the placeholder page. */
export const caseStudies: Record<string, ComponentType> = {
  'arctic-arena': ArcticArenaCase,
};

/** Each case's dark page colour, carried into the footer so the page ends on one surface. */
export const caseFooterColors: Record<string, string> = {
  'arctic-arena': arcticArenaTheme.base,
};
