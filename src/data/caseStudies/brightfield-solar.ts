import desktopHero from '../../assets/case-brightfield/desktop-hero.webp';
import mobileHero from '../../assets/case-brightfield/mobile-hero.webp';
import mobileSimulator from '../../assets/case-brightfield/mobile-simulator.webp';
import simulator from '../../assets/case-brightfield/simulator.webp';
import type { CaseStudyData } from '../../types/caseStudy';

const brightfieldSolar: CaseStudyData = {
    slug: 'brightfield-solar',
    title: 'Brightfield Solar',
    status: 'Live',
    year: '2026',
    summary:
        'A city landing page that turns “how much could I save?” into a qualified lead, in under a minute.',
    facts: [
        { label: 'Role', value: 'Product design & front-end' },
        { label: 'Stack', value: 'Next.js · TypeScript · Vercel' },
        { label: 'Scope', value: '3 breakpoints · 15 screens' },
        { label: 'Context', value: 'Hiring challenge · fictional brand' },
    ],
    liveUrl: 'https://brightfieldsolar.vercel.app/phoenix-az',
    hero: {
        src: desktopHero,
        alt: 'Brightfield Solar desktop hero: “Make the most of Phoenix sunshine” with a night photo of a house with solar panels and stats for installations, local crews and rating.',
        width: 1440,
        height: 739,
    },
    sections: [
        {
            type: 'text',
            kicker: 'The challenge',
            title: 'One question before anything else',
            lead: 'Solar is a big, confusing purchase. Homeowners in Phoenix arrive with one question: how much will I actually save? Most solar sites hide the answer behind a sales call.',
            paragraphs: [
                'The goal was a page that answers that question instantly, builds trust in local installers, and turns a curious visitor into a consultation request, on any device.',
            ],
        },
        {
            type: 'cards',
            kicker: 'What I did',
            title: 'Answer first, then earn trust',
            numbered: true,
            items: [
                {
                    title: 'Savings simulator',
                    text: 'Pick the home closest to yours or drag two sliders. Monthly savings, system size, cost after credit and payback update instantly.',
                },
                {
                    title: 'Trust, locally',
                    text: 'Local crews, ratings and neighbor testimonials answer the real question: who will actually come to my house?',
                },
                {
                    title: 'Every state designed',
                    text: 'Sending, validation errors and success states for the lead form, plus hover and focus for every control.',
                },
            ],
            figure: {
                image: {
                    src: simulator,
                    alt: 'Savings simulator: home profile options, monthly bill and coverage sliders, and a dark estimate card showing $179 estimated monthly savings, 17 panels and a 6.9-year payback.',
                    width: 1440,
                    height: 909,
                },
                caption:
                    'The estimate updates live as users move the sliders, using local utility rates and sun hours.',
            },
        },
        {
            type: 'media',
            kicker: 'Mobile-first',
            title: 'Designed for the thumb',
            paragraphs: [
                'Most homeowners arrive from ads on their phones. On mobile, the simulator becomes a single, thumb-friendly flow and the estimate follows the inputs, so the result is never off-screen.',
                'Every screen was designed for desktop, tablet and mobile before a line of code was written.',
            ],
            images: [
                {
                    src: mobileHero,
                    alt: 'Mobile hero of the Brightfield Solar page with the Get my estimate button.',
                    width: 390,
                    height: 719,
                },
                {
                    src: mobileSimulator,
                    alt: 'Mobile savings simulator with home profile cards and bill slider.',
                    width: 390,
                    height: 719,
                },
            ],
        },
        {
            type: 'cards',
            kicker: 'Built to scale',
            title: 'One city today, any city tomorrow',
            items: [
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
            ],
        },
        {
            type: 'list',
            kicker: 'Next steps',
            title: 'What I’d measure next',
            items: [
                {
                    title: 'Estimate → lead',
                    text: 'How many visitors who see an estimate request a consultation.',
                },
                {
                    title: 'Simulator engagement',
                    text: 'Which home profiles and bill ranges people pick, to tune defaults.',
                },
                { title: 'Performance', text: 'Core Web Vitals and Lighthouse on real mobile devices.' },
            ],
        },
    ],
    next: { label: 'Next project · case study coming soon', title: 'Lean-ing' },
};

export default brightfieldSolar;
