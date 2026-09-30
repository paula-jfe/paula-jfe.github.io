import React from 'react';

import { PROCESS_STEPS } from '../../data/content';
import SectionHeader from '../ui/SectionHeader';

const Process: React.FC = () => (
    <section id="process" aria-labelledby="process-title" className="section-y bg-surface-alt">
        <div className="container-content flex flex-col gap-10 md:gap-12 xl:gap-14">
            <SectionHeader
                id="process-title"
                kicker="My process"
                title={[
                    { text: 'How I Turn ' },
                    { text: 'Ideas', highlight: true },
                    { text: ' Into ' },
                    { text: 'Interfaces', highlight: true },
                ]}
                description="A lean, AI-assisted workflow that takes a project from the first question to real results, without losing craft along the way."
            />
            <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                {PROCESS_STEPS.map((step) => (
                    <li
                        key={step.number}
                        className="flex flex-col gap-4 rounded-lg border border-brand/10 bg-white px-5 py-6 shadow-card md:px-6 md:py-7"
                    >
                        <div className="flex items-center gap-3" aria-hidden="true">
                            <span className={`font-display text-heading-3 font-bold ${step.color}`}>
                                {step.number}
                            </span>
                            <span className={`h-[3px] w-6 rounded-full ${step.bar}`} />
                        </div>
                        <h3 className="font-sans text-heading-6 font-bold text-ink">
                            <span className="sr-only">Step {step.number}: </span>
                            {step.title}
                        </h3>
                        <p className="flex-1 text-body-sm leading-[1.55] text-muted xl:text-body-sm">
                            {step.description}
                        </p>
                        <ul className="flex flex-wrap gap-1.5" aria-label={`${step.title} tools`}>
                            {step.tags.map((tag) => (
                                <li
                                    key={tag}
                                    className="rounded-full bg-surface-soft px-2.5 py-1 text-caption font-semibold text-brand"
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>
        </div>
    </section>
);

export default Process;
