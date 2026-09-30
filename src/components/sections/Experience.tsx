import React from 'react';

import { Accent, EXPERIENCE_HIGHLIGHTS } from '../../data/content';
import Icon from '../ui/Icon';

const accentStyles: Record<Accent, { border: string; icon: string }> = {
    purple: { border: 'border-l-brand-logo', icon: 'text-brand-logo' },
    yellow: { border: 'border-l-accent-yellow', icon: 'text-[#E0B800]' },
    blue: { border: 'border-l-accent-blue', icon: 'text-accent-blue' },
};

const Experience: React.FC = () => (
    <section id="experience" aria-labelledby="experience-title" className="section-y bg-surface-alt">
        <div className="container-content grid items-center gap-10 xl:grid-cols-2 xl:gap-12">
            <div className="flex items-end" aria-hidden="true">
                <span className="text-outline font-logo text-[128px] font-extrabold leading-[0.9] md:text-[192px]">
                    +5
                </span>
                <span className="-ml-6 mb-3 font-display text-heading-3 font-bold leading-none text-brand-logo md:-ml-10 md:mb-6">
                    Years
                    <br />
                    of Exp
                </span>
            </div>

            <div className="flex flex-col gap-8">
                <h2
                    id="experience-title"
                    className="font-display text-heading-3 font-light italic tracking-[-0.01em] text-ink"
                >
                    <span className="sr-only">5+ years of experience. </span>
                    Engineer’s depth. Designer’s eye.
                </h2>
                <ul className="flex flex-col gap-6">
                    {EXPERIENCE_HIGHLIGHTS.map((item) => (
                        <li
                            key={item.title}
                            className={`flex gap-6 rounded-lg border-l-4 bg-white p-5 shadow-card md:py-6 md:pl-6 md:pr-9 ${accentStyles[item.accent].border}`}
                        >
                            <Icon
                                name={item.icon}
                                size={26}
                                className={`mt-0.5 shrink-0 ${accentStyles[item.accent].icon}`}
                            />
                            <div className="flex flex-col gap-1">
                                <h3 className="font-sans text-heading-6 font-bold text-ink">
                                    {item.title}
                                </h3>
                                <p className="text-body text-muted">{item.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
);

export default Experience;
