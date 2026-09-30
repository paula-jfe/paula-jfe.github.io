import type { ProjectStatus } from '../data/content';

export interface CaseImage {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export interface CaseItem {
    title: string;
    text: string;
}

/** Heading block shared by every section: a small kicker above an h2. */
interface SectionBase {
    kicker: string;
    title: string;
}

/** Two columns: heading on the left, a lead paragraph and supporting text on the right. */
export interface CaseTextSection extends SectionBase {
    type: 'text';
    lead: string;
    paragraphs?: string[];
}

/** A row of cards (numbered 01, 02… when `numbered`), optionally followed by a captioned image. */
export interface CaseCardsSection extends SectionBase {
    type: 'cards';
    numbered?: boolean;
    items: CaseItem[];
    figure?: { image: CaseImage; caption?: string };
}

/** Text next to phone-sized screenshots (e.g. mobile screens). */
export interface CaseMediaSection extends SectionBase {
    type: 'media';
    paragraphs: string[];
    images: CaseImage[];
}

/** Heading on the left, a definition list (term → detail) on the right. */
export interface CaseListSection extends SectionBase {
    type: 'list';
    items: CaseItem[];
}

export type CaseSection = CaseTextSection | CaseCardsSection | CaseMediaSection | CaseListSection;

export interface CaseStudyData {
    /** URL segment: the page lives at /work/<slug>. Must match the data file name. */
    slug: string;
    title: string;
    status: ProjectStatus;
    year: string;
    summary: string;
    facts: { label: string; value: string }[];
    liveUrl?: string;
    hero: CaseImage;
    /** Rendered in order; backgrounds alternate automatically. */
    sections: CaseSection[];
    next?: { label: string; title: string };
}
