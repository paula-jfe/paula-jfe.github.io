import React from 'react';
import { useParams } from 'react-router';

import CaseStudy from '../components/case-study/CaseStudy';
import { CASE_STUDIES } from '../data/caseStudies';
import NotFound from './NotFound';

/** /work/:slug → the matching case study, or the 404 page for unknown slugs. */
const CaseStudyPage: React.FC = () => {
    const { slug = '' } = useParams();
    const study = CASE_STUDIES[slug];
    return study ? <CaseStudy key={study.slug} {...study} /> : <NotFound />;
};

export default CaseStudyPage;
