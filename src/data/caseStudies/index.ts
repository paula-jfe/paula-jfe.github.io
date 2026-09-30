import type { CaseStudyData } from '../../types/caseStudy';
import brightfieldSolar from './brightfield-solar';

/**
 * Every case study, keyed by slug. To add one: create src/data/caseStudies/<slug>.ts
 * exporting a CaseStudyData, then list it here. The page appears at /work/<slug>
 * and webpack builds its static entry from the file name.
 */
export const CASE_STUDIES: Record<string, CaseStudyData> = Object.fromEntries(
    [brightfieldSolar].map((study) => [study.slug, study]),
);
