import React from 'react';

import { SOCIAL_LINKS } from '../../data/content';
import Button from '../ui/Button';
import { BehanceIcon, GitHubIcon, LinkedInIcon } from '../ui/Icon';
import HeroVisual from './HeroVisual';
import { textLinkClasses } from '../ui/textLink';

const socialClasses = `inline-flex items-center gap-2 px-1 py-1 text-body-sm font-bold uppercase tracking-[0.08em] ${textLinkClasses()}`;

const Hero: React.FC = () => (
    <section
        id="top"
        aria-labelledby="hero-title"
        className="relative overflow-x-clip pt-[calc(var(--header-height)+16px)] md:pt-[calc(var(--header-height)+24px)] xl:pt-[calc(var(--header-height)+32px)]"
    >
        <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-16 -z-10 h-[435px] w-[500px] opacity-60 blur-[80px]"
            style={{ backgroundImage: 'linear-gradient(135deg, rgba(127,19,236,0.18), rgba(255,215,0,0.12))' }}
        />
        <span
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-[425px] -z-10 h-[435px] w-[500px] opacity-60 blur-[80px]"
            style={{ backgroundImage: 'linear-gradient(135deg, rgba(185,64,167,0.14), rgba(119,151,221,0.14))' }}
        />

        <div className="container-content grid items-center gap-10 md:gap-14 xl:grid-cols-[minmax(0,727px)_minmax(0,1fr)] xl:gap-0">
            <div className="flex flex-col items-start gap-8">
                <div className="flex flex-col items-start gap-4">
                    <p className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-caption font-bold uppercase tracking-[0.06em] text-brand">
                        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent-yellow" />
                        Open to new roles &amp; projects
                    </p>
                    <h1
                        id="hero-title"
                        className="relative z-10 text-display-xl font-bold tracking-[-0.02em] text-ink"
                    >
                        Crafting Digital <br className="hidden md:inline" />
                        Experiences That <span className="text-brand">Pop</span>
                        <span className="text-accent-orange">.</span>
                    </h1>
                    <p className="max-w-[560px] text-heading-6 font-medium leading-[1.5] text-muted">
                        Design Engineer who uses AI agents to ship beautiful, fast interfaces, and
                        reviews every line they write: performance, WCAG 2.2 AA and security
                        included.
                    </p>
                </div>
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
                    <Button href="#work" fullWidth className="sm:w-auto">
                        View my work
                    </Button>
                    <Button href="#contact" variant="secondary" icon="arrowRight" fullWidth className="sm:w-auto">
                        Get in touch
                    </Button>
                </div>
                <p className="text-body-sm font-semibold text-muted">
                    Previously Software Engineer at Dell Technologies
                </p>
            </div>
            <HeroVisual />
        </div>

        <div className="mt-8 border-t border-line md:mt-10">
            <ul className="container-content flex flex-wrap items-center justify-center gap-6 py-6 md:gap-8">
                <li>
                    <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={socialClasses}
                    >
                        <LinkedInIcon size={16} />
                        LinkedIn
                        <span className="sr-only">(opens in a new tab)</span>
                    </a>
                </li>
                <li>
                    <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={socialClasses}
                    >
                        <GitHubIcon size={16} />
                        GitHub
                        <span className="sr-only">(opens in a new tab)</span>
                    </a>
                </li>
                <li>
                    <a
                        href={SOCIAL_LINKS.behance}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={socialClasses}
                    >
                        <BehanceIcon size={16} />
                        Behance
                        <span className="sr-only">(opens in a new tab)</span>
                    </a>
                </li>
            </ul>
        </div>
    </section>
);

export default Hero;
