import type { ComponentType } from 'react';
import { ArcticArenaCase } from './ArcticArenaCase';
import { arcticArenaTheme } from '../../content/cases/arcticArena';
import { PawprintOxygenCase } from './PawprintOxygenCase';
import { pawprintTheme } from '../../content/cases/pawprintOxygen';

/** Designed case studies, by project slug. Projects without an entry keep the placeholder page. */
export const caseStudies: Record<string, ComponentType> = {
  'arctic-arena': ArcticArenaCase,
  'pawprint-oxygen': PawprintOxygenCase,
};

/** Each case's dark page colour, carried into the footer so the page ends on one surface. */
export const caseFooterColors: Record<string, string> = {
  'arctic-arena': arcticArenaTheme.base,
  'pawprint-oxygen': pawprintTheme.base,
};
