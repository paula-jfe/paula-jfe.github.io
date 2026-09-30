import React from 'react';

import { ProjectStatus } from '../../data/content';

const styles: Record<ProjectStatus, { wrap: string; dot: string }> = {
    Live: { wrap: 'bg-success-bg text-success', dot: 'bg-success-dot' },
    'In progress': { wrap: 'bg-warning-bg text-warning', dot: 'bg-warning-dot' },
    Concept: { wrap: 'bg-surface-soft text-brand', dot: 'bg-brand-logo' },
};

const StatusBadge: React.FC<{ status: ProjectStatus }> = ({ status }) => (
    <span
        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-caption font-bold uppercase tracking-[0.06em] ${styles[status].wrap}`}
    >
        <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${styles[status].dot}`} />
        {status}
    </span>
);

export default StatusBadge;
