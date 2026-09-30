import React from 'react';

import { FOOTER_LINKS, SOCIAL_LINKS } from '../../data/content';
import SectionLink from './SectionLink';

const linkClasses =
    'rounded-xs px-0.5 text-body font-semibold text-muted transition-colors duration-200 hover:text-brand hover:underline underline-offset-4 focus-ring';

const Footer: React.FC = () => (
    <footer className="bg-surface-alt pb-10 pt-6 md:pb-12">
        <div className="container-content flex flex-col gap-8 md:gap-10">
            <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
                <div className="flex flex-col gap-3">
                    <span className="font-logo text-[40px] font-extrabold leading-none text-brand-logo">
                        JL.
                    </span>
                    <p className="font-display text-heading-5 font-bold leading-tight text-ink">
                        Heart-driven design.
                        <br />
                        <span className="text-brand">Mind-driven code.</span>
                    </p>
                </div>
                <nav aria-label="Footer">
                    <ul className="flex flex-wrap gap-x-6 gap-y-3 md:gap-x-8">
                        {FOOTER_LINKS.map((link) => (
                            <li key={link.id}>
                                <SectionLink sectionId={link.id} className={linkClasses}>
                                    {link.label}
                                </SectionLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="flex flex-col gap-4 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
                <p className="text-body-sm text-muted">
                    © {new Date().getFullYear()} Jessica Ladislau · Crafted with passion and React.
                </p>
                <ul className="flex gap-6">
                    <li>
                        <a
                            href={SOCIAL_LINKS.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${linkClasses} text-body-sm font-bold uppercase tracking-[0.06em]`}
                        >
                            LinkedIn<span className="sr-only"> (opens in a new tab)</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href={SOCIAL_LINKS.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${linkClasses} text-body-sm font-bold uppercase tracking-[0.06em]`}
                        >
                            GitHub<span className="sr-only"> (opens in a new tab)</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href={SOCIAL_LINKS.behance}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${linkClasses} text-body-sm font-bold uppercase tracking-[0.06em]`}
                        >
                            Behance<span className="sr-only"> (opens in a new tab)</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
);

export default Footer;
