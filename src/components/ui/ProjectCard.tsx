import React from 'react';
import { Link } from 'react-router';

import type { Project } from '../../data/content';
import Icon from './Icon';
import StatusBadge from './StatusBadge';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const { title, status, category, description, cover, coverAlt, caseStudy } = project;
    const interactive = Boolean(caseStudy);

    return (
        <article
            className={`group relative flex h-full flex-col overflow-hidden rounded-lg border bg-white shadow-card transition-[box-shadow,border-color] duration-200 ease-out ${
                interactive
                    ? 'border-brand/10 hover:border-brand/35 hover:shadow-card-hover focus-within:shadow-[0_12px_32px_0_rgba(77,26,128,0.06),0_0_0_4px_rgba(127,19,236,0.35)]'
                    : 'border-brand/10'
            }`}
        >
            <div className="aspect-[16/10] w-full overflow-hidden border-b border-line bg-line">
                <img
                    src={cover}
                    alt={coverAlt}
                    loading="lazy"
                    decoding="async"
                    width={1440}
                    height={900}
                    className="h-full w-full object-cover object-top"
                />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6 md:p-7">
                <div className="flex flex-wrap items-center gap-3">
                    <StatusBadge status={status} />
                    <span className="text-caption font-semibold text-muted">{category}</span>
                </div>
                <h3 className="font-sans text-heading-5 font-bold tracking-[-0.01em] text-ink transition-colors duration-200 group-hover:text-brand">
                    {interactive ? (
                        <Link
                            to={caseStudy as string}
                            className="outline-hidden after:absolute after:inset-0 after:content-['']"
                        >
                            {title}
                        </Link>
                    ) : (
                        title
                    )}
                </h3>
                <p className="flex-1 text-body text-muted">{description}</p>
                <p
                    className={`mt-2 inline-flex items-center gap-1.5 text-body-sm font-bold ${
                        interactive ? 'text-brand' : 'text-muted'
                    }`}
                    aria-hidden={interactive ? true : undefined}
                >
                    {interactive ? 'View case study' : 'Case study coming soon'}
                    {interactive && (
                        <Icon
                            name="arrowRight"
                            size={16}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                    )}
                </p>
            </div>
        </article>
    );
};

export default ProjectCard;
