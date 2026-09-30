import React from 'react';

import { ABOUT_PARAGRAPHS, SKILLS, SKILL_SCALE_YEARS, STATS } from '../../data/content';
import Icon from '../ui/Icon';

const About: React.FC = () => (
    <section id="about" aria-labelledby="about-title" className="section-y">
        <div className="container-content grid items-center gap-10 xl:grid-cols-2 xl:gap-12">
            <div className="flex flex-col gap-8">
                <h2 id="about-title" className="sr-only">
                    About me
                </h2>
                <div className="flex flex-col gap-4">
                    {ABOUT_PARAGRAPHS.map((paragraph) => (
                        <p key={paragraph.slice(0, 20)} className="text-body-lg text-muted">
                            {paragraph}
                        </p>
                    ))}
                </div>
                <dl className="grid gap-4 sm:grid-cols-2">
                    {STATS.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex flex-col-reverse gap-1 rounded-lg border border-line bg-white p-5 shadow-card"
                        >
                            <dt className="flex items-center gap-2 text-body-sm text-muted">
                                <Icon
                                    name={stat.tone === 'brand' ? 'rocket' : 'calendar'}
                                    size={14}
                                    className="text-placeholder"
                                />
                                {stat.label}
                            </dt>
                            <dd
                                className={`font-sans text-heading-4 font-bold ${
                                    stat.tone === 'brand' ? 'text-brand' : 'text-warning'
                                }`}
                            >
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>

            <div className="flex flex-col gap-8 rounded-lg border border-line bg-white p-5 shadow-[0_24px_48px_-12px_rgba(77,26,128,0.18)] md:p-8">
                <h3 className="flex items-center gap-2 font-sans text-heading-6 font-bold text-ink">
                    <Icon name="chart" size={22} className="text-brand" />
                    Technical Proficiency
                </h3>
                <ul className="flex flex-col gap-8">
                    {SKILLS.map((skill) => (
                        <li key={skill.name} className="flex flex-col gap-2">
                            <div className="flex items-baseline justify-between gap-4">
                                <span className="text-body-sm font-bold uppercase tracking-[0.02em] text-ink">
                                    {skill.name}
                                </span>
                                <span className="shrink-0 text-caption font-medium text-muted">
                                    {skill.label}
                                </span>
                            </div>
                            <div
                                role="img"
                                aria-label={`${skill.name}: ${skill.label} of professional use`}
                                className="h-3 w-full overflow-hidden rounded-full bg-surface-soft"
                            >
                                <div
                                    className="relative h-full rounded-full bg-gradient-to-r from-brand to-[#9D4EEE]"
                                    style={{ width: `${(skill.years / SKILL_SCALE_YEARS) * 100}%` }}
                                >
                                    <span className="absolute right-0 top-0 h-full w-2 rounded-r-full bg-accent-yellow" />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <p className="rounded-sm border border-brand/10 bg-brand/5 p-4 text-caption text-muted">
                    * Bar length reflects years of hands-on, professional use.
                </p>
            </div>
        </div>
    </section>
);

export default About;
