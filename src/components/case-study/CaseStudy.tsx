import React, { useEffect } from 'react';
import { Link } from 'react-router';

import type { CaseItem, CaseSection, CaseStudyData } from '../../types/caseStudy';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import StatusBadge from '../ui/StatusBadge';
import { textLinkClasses } from '../ui/textLink';

const Kicker: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <p className="text-caption font-bold uppercase tracking-[0.08em] text-brand">{children}</p>
);

const SectionTitle: React.FC<{ id: string; children: React.ReactNode }> = ({ id, children }) => (
    <h2 id={id} className="text-heading-2 font-bold tracking-[-0.02em] text-ink">
        {children}
    </h2>
);

const Card: React.FC<{ item: CaseItem; number?: string }> = ({ item, number }) => (
    <li className="flex flex-col gap-3 rounded-lg border border-brand/10 bg-white p-6 shadow-card md:p-8">
        {number && (
            <span aria-hidden="true" className="font-display text-heading-4 font-bold text-brand">
                {number}
            </span>
        )}
        <h3 className="font-sans text-heading-6 font-bold text-ink">{item.title}</h3>
        <p className="text-body text-muted">{item.text}</p>
    </li>
);

const SectionBody: React.FC<{ section: CaseSection; titleId: string }> = ({ section, titleId }) => {
    switch (section.type) {
        case 'text':
            return (
                <div className="container-content grid gap-8 xl:grid-cols-[420px_1fr] xl:gap-24">
                    <div className="flex flex-col gap-3">
                        <Kicker>{section.kicker}</Kicker>
                        <SectionTitle id={titleId}>{section.title}</SectionTitle>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="text-heading-6 font-normal leading-[1.6] text-ink">{section.lead}</p>
                        {section.paragraphs?.map((text) => (
                            <p key={text} className="text-body-lg text-muted">
                                {text}
                            </p>
                        ))}
                    </div>
                </div>
            );
        case 'cards':
            return (
                <div className="container-content flex flex-col gap-10 md:gap-12">
                    <div className="flex flex-col gap-3">
                        <Kicker>{section.kicker}</Kicker>
                        <SectionTitle id={titleId}>{section.title}</SectionTitle>
                    </div>
                    <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
                        {section.items.map((item, index) => (
                            <Card
                                key={item.title}
                                item={item}
                                number={section.numbered ? String(index + 1).padStart(2, '0') : undefined}
                            />
                        ))}
                    </ul>
                    {section.figure && (
                        <figure className="flex flex-col gap-4">
                            <img
                                src={section.figure.image.src}
                                alt={section.figure.image.alt}
                                width={section.figure.image.width}
                                height={section.figure.image.height}
                                loading="lazy"
                                className="w-full rounded-lg border border-line shadow-card"
                            />
                            {section.figure.caption && (
                                <figcaption className="text-body-sm text-muted">{section.figure.caption}</figcaption>
                            )}
                        </figure>
                    )}
                </div>
            );
        case 'media':
            return (
                <div className="container-content grid items-center gap-10 xl:grid-cols-2 xl:gap-20">
                    <div className="flex flex-col gap-5">
                        <Kicker>{section.kicker}</Kicker>
                        <SectionTitle id={titleId}>{section.title}</SectionTitle>
                        {section.paragraphs.map((text) => (
                            <p key={text} className="text-body-lg text-muted">
                                {text}
                            </p>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                        {section.images.map((image) => (
                            <img
                                key={image.alt}
                                src={image.src}
                                alt={image.alt}
                                width={image.width}
                                height={image.height}
                                loading="lazy"
                                className="aspect-[300/553] w-full rounded-xl border-4 border-white object-cover object-top shadow-float"
                            />
                        ))}
                    </div>
                </div>
            );
        case 'list':
            return (
                <div className="container-content grid gap-8 xl:grid-cols-[420px_1fr] xl:gap-24">
                    <div className="flex flex-col gap-3">
                        <Kicker>{section.kicker}</Kicker>
                        <SectionTitle id={titleId}>{section.title}</SectionTitle>
                    </div>
                    <dl className="flex flex-col">
                        {section.items.map((item) => (
                            <div
                                key={item.title}
                                className="flex flex-col gap-1 border-b border-line py-5 md:flex-row md:gap-6"
                            >
                                <dt className="shrink-0 text-body-lg font-bold text-ink md:w-56">{item.title}</dt>
                                <dd className="text-body-lg text-muted">{item.text}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            );
    }
};

/**
 * Reusable case study page. Everything comes from props (see CaseStudyData):
 * add a data file in src/data/caseStudies/ and the page exists at /work/<slug>.
 */
const CaseStudy: React.FC<CaseStudyData> = ({
    slug,
    title,
    status,
    year,
    summary,
    facts,
    liveUrl,
    hero,
    sections,
    next,
}) => {
    useEffect(() => {
        document.title = `${title} case study · Jessica Ladislau`;
    }, [title]);

    return (
        <article aria-labelledby="case-title">
            <header className="container-content flex flex-col gap-6 pb-12 pt-[calc(var(--header-height)+40px)] md:pb-16 md:pt-[calc(var(--header-height)+64px)] xl:pt-[calc(var(--header-height)+96px)]">
                <Link
                    to={{ pathname: '/', hash: '#work' }}
                    className={`inline-flex w-fit items-center gap-2 text-body font-semibold ${textLinkClasses()}`}
                >
                    <Icon name="arrowLeft" size={18} />
                    All projects
                </Link>
                <div className="flex flex-wrap items-center gap-3">
                    <StatusBadge status={status} />
                    <span className="text-caption font-bold uppercase tracking-[0.08em] text-muted">
                        Case study · {year}
                    </span>
                </div>
                <h1 id="case-title" className="text-display-lg font-bold tracking-[-0.03em] text-ink">
                    {title}
                </h1>
                <p className="max-w-[860px] text-heading-5 font-medium leading-[1.45] text-muted">{summary}</p>
                <dl className="grid gap-4 pt-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
                    {facts.map((fact) => (
                        <div key={fact.label} className="flex flex-col gap-2 border-t border-line pt-4">
                            <dt className="text-caption font-bold uppercase tracking-[0.08em] text-muted">
                                {fact.label}
                            </dt>
                            <dd className="text-body font-semibold text-ink">{fact.value}</dd>
                        </div>
                    ))}
                </dl>
                {liveUrl && (
                    <div>
                        <Button
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="secondary"
                            icon="arrowUpRight"
                        >
                            Visit live site<span className="sr-only"> (opens in a new tab)</span>
                        </Button>
                    </div>
                )}
            </header>

            <div className="container-content pb-16 md:pb-20 xl:pb-28">
                <img
                    src={hero.src}
                    alt={hero.alt}
                    width={hero.width}
                    height={hero.height}
                    className="w-full rounded-lg shadow-[0_32px_64px_0_rgba(77,26,128,0.12)]"
                />
            </div>

            {sections.map((section, index) => {
                const titleId = `${slug}-section-${index + 1}`;
                return (
                    <section
                        key={titleId}
                        aria-labelledby={titleId}
                        className={`section-y ${index % 2 === 0 ? 'bg-surface-alt' : ''}`}
                    >
                        <SectionBody section={section} titleId={titleId} />
                    </section>
                );
            })}

            <section aria-label="More projects" className="section-y">
                <div className="container-content flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                    {next && (
                        <div className="flex flex-col gap-2">
                            <p className="text-caption font-bold uppercase tracking-[0.08em] text-muted">
                                {next.label}
                            </p>
                            <p className="font-display text-heading-2 font-bold tracking-[-0.02em] text-ink">
                                {next.title}
                            </p>
                        </div>
                    )}
                    <Button to="/" onClick={() => window.scrollTo({ top: 0 })}>
                        Back to all projects
                    </Button>
                </div>
            </section>
        </article>
    );
};

export default CaseStudy;
