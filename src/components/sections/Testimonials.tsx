import React from 'react';

import { TESTIMONIALS } from '../../data/content';
import SectionHeader from '../ui/SectionHeader';

const initials = (role: string) =>
    role
        .split(' ')
        .map((word) => word[0])
        .join('')
        .slice(0, 2);

const Testimonials: React.FC = () => (
    <section id="testimonials" aria-labelledby="testimonials-title" className="section-y bg-surface-page">
        <div className="container-content flex flex-col gap-10 md:gap-12 xl:gap-14">
            <SectionHeader
                id="testimonials-title"
                kicker="Testimonials"
                title={[{ text: 'What people' }, { text: 'say', highlight: true }, { text: 'about me' }]}
                description="Words from engineers, product managers and leaders I have worked with."
            />
            <ul className="grid gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
                {TESTIMONIALS.map((item) => (
                    <li key={item.quote.slice(0, 24)}>
                        <figure className="flex h-full flex-col gap-5 rounded-lg border border-brand/10 bg-white p-6 shadow-card md:p-8">
                            <span
                                aria-hidden="true"
                                className="font-display text-[64px] font-bold leading-[0.6] text-brand/35"
                            >
                                “
                            </span>
                            <blockquote className="flex-1 text-body font-medium leading-[1.6] text-ink">
                                <p>{item.quote}</p>
                            </blockquote>
                            <figcaption className="flex items-center gap-3 border-t border-line pt-5">
                                <span
                                    aria-hidden="true"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-soft text-caption font-bold text-brand"
                                >
                                    {initials(item.role)}
                                </span>
                                <span className="flex flex-col">
                                    <span className="text-body-sm font-bold text-ink">{item.role}</span>
                                    <span className="text-caption text-muted">Former colleague</span>
                                </span>
                            </figcaption>
                        </figure>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

export default Testimonials;
