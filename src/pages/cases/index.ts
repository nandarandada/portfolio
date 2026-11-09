import type { ComponentType } from 'react';
import { ArcticArenaCase } from './ArcticArenaCase';

/** Designed case studies, by project slug. Projects without an entry keep the placeholder page. */
export const caseStudies: Record<string, ComponentType> = {
  'arctic-arena': ArcticArenaCase,
};
