/**
 * Case-study data model, shared by every project page.
 * A case is plain data: copy, media and a palette. Layout components read it, so swapping
 * a placeholder for a real asset never touches layout code.
 */
import type { MediaAsset } from '../../components/primitives/Media';

/**
 * One image or video slot in a case study.
 * - With `src`: the asset renders, with its optional caption.
 * - Without `src`: an editorial placeholder shows the ID, title, recommendation, ratio and tip.
 *   The guidance disappears automatically once `src` is added.
 */
export type CaseMedia = MediaAsset & {
  /** Unique media ID, e.g. 'AA-03'. Used in the placeholder and in asset requests. */
  id: string;
  /** Short descriptive title, e.g. 'Logo exploration'. */
  title: string;
  /** Visible caption under the asset (only when the asset exists). */
  caption?: string;
  /** What image to add (placeholder only). */
  recommendation?: string;
  /** Art-direction tip (placeholder only). */
  tip?: string;
  /** Preferred file format, e.g. 'WebM or MP4, with a static fallback' (placeholder only). */
  format?: string;
  /** Shown on a light background (logos made for paper). */
  onLight?: boolean;
  /** Vector artwork shown contained inside its frame, with padding, instead of cropped. */
  artwork?: boolean;
  /** Artwork with soft edges, painted on the section color: no frame tint behind it. */
  blend?: boolean;
};

/** The project's own palette. Only the case page uses it; the rest of Frosa keeps its identity. */
export type CaseTheme = {
  /** Page background (darkest). */
  base: string;
  /** Raised surface for alternate chapters. */
  surface: string;
  /** Accent for numbers, rules and emphasis. */
  accent: string;
  /** Text on the accent color. */
  onAccent: string;
  /** Grid lines drawn in the margins. */
  line: string;
  /** Backdrop behind the project's own artwork (logos, icons): centre and edge of a soft glow. */
  art: string;
  artDeep: string;
};

export type CaseMetaItem = { label: string; value: string };

export type CaseSwatch = { name: string; hex: string; rgb?: string; cmyk?: string; note?: string };

/** A named group of swatches, e.g. 'Primary' and 'Secondary' in a brand guide. */
export type CaseSwatchGroup = { label: string; swatches: CaseSwatch[] };

export type CaseDecision = { title: string; text: string };

/** One edge-to-edge row of a mosaic: widths are shares of the row, the height is shared. */
export type CaseMosaicRow = {
  height: number;
  items: { media: CaseMedia; width: number }[];
};

/** One exported screen of a project's site. */
export type CaseScreen = { src: string; width: number; height: number };

/**
 * One page of the screen navigator: desktop (and mobile when exported), the site's own links
 * as hotspots [x, y, width, height, target page id] in Figma frame pixels, and notes from the
 * design documentation.
 */
export type CaseScreenPage = {
  id: string;
  label: string;
  group: string;
  desktop: CaseScreen;
  mobile?: CaseScreen;
  hotspots: Array<[number, number, number, number, string]>;
  notes?: string[];
};

/** A brand-voice group (e.g. Functional, Emotional) and its traits, each with an optional example. */
export type CaseVoiceGroup = { title: string; traits: { name: string; text: string; example?: string }[] };
