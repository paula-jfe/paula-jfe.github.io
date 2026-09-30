import React, { useEffect } from 'react';
import { Link } from 'react-router';

import desktopHero from '../assets/case-brightfield/desktop-hero.jpg';
import mobileHero from '../assets/case-brightfield/mobile-hero.jpg';
import mobileSimulator from '../assets/case-brightfield/mobile-simulator.jpg';
import simulator from '../assets/case-brightfield/simulator.jpg';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';
import StatusBadge from '../components/ui/StatusBadge';

export const LIVE_URL = 'https://brightfieldsolar.vercel.app/phoenix-az';

const FACTS = [
    { label: 'Role', value: 'Product design & front-end' },
    { label: 'Stack', value: 'Next.js · TypeScript · Vercel' },
    { label: 'Scope', value: '3 breakpoints · 15 screens' },
    { label: 'Context', value: 'Hiring challenge · fictional brand' },
];

const WHAT_I_DID = [
    {
        n: '01',
        title: 'Savings simulator',
        text: 'Pick the home closest to yours or drag two sliders. Monthly savings, system size, cost after credit and payback update instantly.',
    },
    {
        n: '02',
        title: 'Trust, locally',
        text: 'Local crews, ratings and neighbor testimonials answer the real question: who will actually come to my house?',
    },
    {
        n: '03',
        title: 'Every state designed',
        text: 'Sending, validation errors and success states for the lead form, plus hover and focus for every control.',
    },
];

const SCALE = [
    {
        title: 'City template',
        text: '/phoenix-az is designed as a template: rates, sun hours, crews and testimonials are content, so a new city is a new entry, built for local SEO.',
    },
    {
        title: 'Component library',
        text: 'Buttons, sliders, profile options, FAQ items and the lead form, with all their states, live in one Figma library that maps to code.',
    },
    {
        title: 'Next.js on Vercel',
        text: 'Built with the Next.js App Router and TypeScript, deployed on Vercel for fast first loads.',
    },
];

const MEASURE = [
    ['Estimate → lead', 'How many visitors who see an estimate request a consultation.'],
    ['Simulator engagement', 'Which home profiles and bill ranges people pick, to tune defaults.'],
    ['Performance', 'Core Web Vitals and Lighthouse on real mobile devices.'],
];

const Kicker: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <p className="text-caption font-bold uppercase tracking-[0.08em] text-brand">{children}</p>
);

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex flex-col gap-3 rounded-lg border border-brand/10 bg-white p-6 shadow-card md:p-8">
        {children}
    </li>
);

const CaseBrightfield: React.FC = () => {
    useEffect(() => {
        document.title = 'Brightfield Solar case study · Jessica Ladislau';
    }, []);

    return (
        <article aria-labelledby="case-title">
            <header className="container-content flex flex-col gap-6 pb-12 pt-[calc(var(--header-height)+40px)] md:pb-16 md:pt-[calc(var(--header-height)+64px)] xl:pt-[calc(var(--header-height)+96px)]">
                <Link
                    to={{ pathname: '/', hash: '#work' }}
                    className="inline-flex w-fit items-center gap-2 rounded-xs text-body font-semibold text-muted transition-colors hover:text-ink focus-ring"
                >
                    <Icon name="arrowLeft" size={18} />
                    All projects
                </Link>
                <div className="flex flex-wrap items-center gap-3">
                    <StatusBadge status="Live" />
                    <span className="text-caption font-bold uppercase tracking-[0.08em] text-muted">
                        Case study · 2026
                    </span>
                </div>
                <h1 id="case-title" className="text-display-lg font-bold tracking-[-0.03em] text-ink">
                    Brightfield Solar
                </h1>
                <p className="max-w-[860px] text-heading-5 font-medium leading-[1.45] text-muted">
                    A city landing page that turns “how much could I save?” into a qualified lead,
                    in under a minute.
                </p>
                <dl className="grid gap-4 pt-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
                    {FACTS.map((fact) => (
                        <div key={fact.label} className="flex flex-col gap-2 border-t border-line pt-4">
                            <dt className="text-caption font-bold uppercase tracking-[0.08em] text-muted">
                                {fact.label}
                            </dt>
                            <dd className="text-body font-semibold text-ink">{fact.value}</dd>
                        </div>
                    ))}
                </dl>
                <div>
                    <Button
                        href={LIVE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="secondary"
                        icon="arrowUpRight"
                    >
                        Visit live site<span className="sr-only"> (opens in a new tab)</span>
                    </Button>
                </div>
            </header>

            <div className="container-content pb-16 md:pb-20 xl:pb-28">
                <img
                    src={desktopHero}
                    alt="Brightfield Solar desktop hero: “Make the most of Phoenix sunshine” with a night photo of a house with solar panels and stats for installations, local crews and rating."
                    width={1440}
                    height={739}
                    className="w-full rounded-lg shadow-[0_32px_64px_0_rgba(77,26,128,0.12)]"
                />
            </div>

            <section aria-labelledby="challenge-title" className="section-y bg-surface-alt">
                <div className="container-content grid gap-8 xl:grid-cols-[420px_1fr] xl:gap-24">
                    <div className="flex flex-col gap-3">
                        <Kicker>The challenge</Kicker>
                        <h2 id="challenge-title" className="text-heading-2 font-bold tracking-[-0.02em] text-ink">
                            One question before anything else
                        </h2>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="text-heading-6 font-normal leading-[1.6] text-ink">
                            Solar is a big, confusing purchase. Homeowners in Phoenix arrive with one
                            question: how much will I actually save? Most solar sites hide the answer
                            behind a sales call.
                        </p>
                        <p className="text-body-lg text-muted">
                            The goal was a page that answers that question instantly, builds trust in
                            local installers, and turns a curious visitor into a consultation request,
                            on any device.
                        </p>
                    </div>
                </div>
            </section>

            <section aria-labelledby="did-title" className="section-y">
                <div className="container-content flex flex-col gap-10 md:gap-12">
                    <div className="flex flex-col gap-3">
                        <Kicker>What I did</Kicker>
                        <h2 id="did-title" className="text-heading-2 font-bold tracking-[-0.02em] text-ink">
                            Answer first, then earn trust
                        </h2>
                    </div>
                    <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
                        {WHAT_I_DID.map((item) => (
                            <Card key={item.n}>
                                <span aria-hidden="true" className="font-display text-heading-4 font-bold text-brand">
                                    {item.n}
                                </span>
                                <h3 className="font-sans text-heading-6 font-bold text-ink">{item.title}</h3>
                                <p className="text-body text-muted">{item.text}</p>
                            </Card>
                        ))}
                    </ul>
                    <figure className="flex flex-col gap-4">
                        <img
                            src={simulator}
                            alt="Savings simulator: home profile options, monthly bill and coverage sliders, and a dark estimate card showing $179 estimated monthly savings, 17 panels and a 6.9-year payback."
                            width={1440}
                            height={909}
                            loading="lazy"
                            className="w-full rounded-lg border border-line shadow-card"
                        />
                        <figcaption className="text-body-sm text-muted">
                            The estimate updates live as users move the sliders, using local utility
                            rates and sun hours.
                        </figcaption>
                    </figure>
                </div>
            </section>

            <section aria-labelledby="mobile-title" className="section-y bg-surface-alt">
                <div className="container-content grid items-center gap-10 xl:grid-cols-2 xl:gap-20">
                    <div className="flex flex-col gap-5">
                        <Kicker>Mobile-first</Kicker>
                        <h2 id="mobile-title" className="text-heading-2 font-bold tracking-[-0.02em] text-ink">
                            Designed for the thumb
                        </h2>
                        <p className="text-body-lg text-muted">
                            Most homeowners arrive from ads on their phones. On mobile, the simulator
                            becomes a single, thumb-friendly flow and the estimate follows the inputs,
                            so the result is never off-screen.
                        </p>
                        <p className="text-body-lg text-muted">
                            Every screen was designed for desktop, tablet and mobile before a line of
                            code was written.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                        {[
                            {
                                src: mobileHero,
                                alt: 'Mobile hero of the Brightfield Solar page with the Get my estimate button.',
                            },
                            {
                                src: mobileSimulator,
                                alt: 'Mobile savings simulator with home profile cards and bill slider.',
                            },
                        ].map((image) => (
                            <img
                                key={image.alt}
                                src={image.src}
                                alt={image.alt}
                                width={390}
                                height={719}
                                loading="lazy"
                                className="aspect-[300/553] w-full rounded-xl border-4 border-white object-cover object-top shadow-float"
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section aria-labelledby="scale-title" className="section-y">
                <div className="container-content flex flex-col gap-10 md:gap-12">
                    <div className="flex flex-col gap-3">
                        <Kicker>Built to scale</Kicker>
                        <h2 id="scale-title" className="text-heading-2 font-bold tracking-[-0.02em] text-ink">
                            One city today, any city tomorrow
                        </h2>
                    </div>
                    <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
                        {SCALE.map((item) => (
                            <Card key={item.title}>
                                <h3 className="font-sans text-heading-6 font-bold text-ink">{item.title}</h3>
                                <p className="text-body text-muted">{item.text}</p>
                            </Card>
                        ))}
                    </ul>
                </div>
            </section>

            <section aria-labelledby="measure-title" className="section-y bg-surface-alt">
                <div className="container-content grid gap-8 xl:grid-cols-[420px_1fr] xl:gap-24">
                    <div className="flex flex-col gap-3">
                        <Kicker>Next steps</Kicker>
                        <h2 id="measure-title" className="text-heading-2 font-bold tracking-[-0.02em] text-ink">
                            What I’d measure next
                        </h2>
                    </div>
                    <dl className="flex flex-col">
                        {MEASURE.map(([term, detail]) => (
                            <div
                                key={term}
                                className="flex flex-col gap-1 border-b border-line py-5 md:flex-row md:gap-6"
                            >
                                <dt className="shrink-0 text-body-lg font-bold text-ink md:w-56">{term}</dt>
                                <dd className="text-body-lg text-muted">{detail}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            <section aria-label="More projects" className="section-y">
                <div className="container-content flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                    <div className="flex flex-col gap-2">
                        <p className="text-caption font-bold uppercase tracking-[0.08em] text-muted">
                            Next project · case study coming soon
                        </p>
                        <p className="font-display text-heading-2 font-bold tracking-[-0.02em] text-ink">
                            Lean-ing
                        </p>
                    </div>
                    <Button to="/" onClick={() => window.scrollTo({ top: 0 })}>
                        Back to all projects
                    </Button>
                </div>
            </section>
        </article>
    );
};

export default CaseBrightfield;
