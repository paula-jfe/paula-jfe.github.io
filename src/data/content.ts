import brightfieldCover from '../assets/projects/brightfield.webp';
import jhrCover from '../assets/projects/jhr-automacom.webp';
import leaningCover from '../assets/projects/lean-ing.webp';
import webelugaCover from '../assets/projects/webeluga.webp';
import css from '../assets/icons/css3.svg';
import dotnet from '../assets/icons/dotnetcore.svg';
import elastic from '../assets/icons/elastic.svg';
import figma from '../assets/icons/figma.svg';
import git from '../assets/icons/git.svg';
import html from '../assets/icons/html5.svg';
import javascript from '../assets/icons/javascript.svg';
import jest from '../assets/icons/jest.svg';
import node from '../assets/icons/node.svg';
import npm from '../assets/icons/npm.svg';
import python from '../assets/icons/python.svg';
import react from '../assets/icons/react.svg';
import redux from '../assets/icons/redux.svg';
import sql from '../assets/icons/sql.svg';
import typescript from '../assets/icons/typescript.svg';

export const EMAIL = 'paula.jfe@gmail.com';

export const SOCIAL_LINKS = {
    linkedin: 'https://www.linkedin.com/in/jessica-ladislau',
    github: 'https://github.com/paula-jfe',
    behance: 'https://www.behance.net/jladislau',
} as const;

export const NAV_LINKS = [
    { label: 'About', id: 'about' },
    { label: 'Work', id: 'work' },
    { label: 'Process', id: 'process' },
] as const;

export const FOOTER_LINKS = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Work', id: 'work' },
    { label: 'Process', id: 'process' },
    { label: 'Contact', id: 'contact' },
] as const;

export const TECH_STACK = [
    { name: 'CSS 3', icon: css },
    { name: '.NET Core', icon: dotnet },
    { name: 'Elasticsearch', icon: elastic },
    { name: 'Figma', icon: figma },
    { name: 'Git', icon: git },
    { name: 'HTML 5', icon: html },
    { name: 'JavaScript', icon: javascript },
    { name: 'Jest', icon: jest },
    { name: 'Node.js', icon: node },
    { name: 'npm', icon: npm },
    { name: 'Python', icon: python },
    { name: 'React', icon: react },
    { name: 'Redux', icon: redux },
    { name: 'SQL', icon: sql },
    { name: 'TypeScript', icon: typescript },
];

export type Accent = 'purple' | 'yellow' | 'blue';

export const EXPERIENCE_HIGHLIGHTS: {
    title: string;
    description: string;
    accent: Accent;
    icon: 'terminal' | 'brush' | 'shield';
}[] = [
    {
        title: 'Frontend Engineering',
        description:
            '3.5 years at Dell Technologies building React micro-frontends and design-system components, with 96% test coverage.',
        accent: 'purple',
        icon: 'terminal',
    },
    {
        title: 'Design × AI Agents',
        description:
            'From Figma to production with AI agents like Claude Code: I direct the agent, then refine layout, typography and motion until it’s right.',
        accent: 'yellow',
        icon: 'brush',
    },
    {
        title: 'Code Review & Security',
        description:
            'Resolved security vulnerabilities at Dell and certified in Web Application Security. Unit and e2e tests in CI/CD, with TDD at 96% coverage.',
        accent: 'blue',
        icon: 'shield',
    },
];

export const ABOUT_PARAGRAPHS = [
    'I’m a Design Engineer: I design in Figma and build in React, Next.js & TypeScript, so what ships is exactly what was designed, and it performs. My background in industrial engineering gave me a love for systems, data and continuous improvement.',
    'Today I work with AI agents every day. They speed up the build; I bring the judgment, reviewing their code for performance, WCAG 2.2 AA accessibility and security, with unit and e2e tests running in CI/CD. I’m also building projects instrumented with Google Analytics, so every launch is measured.',
];

export const STATS = [
    { value: '96%', label: 'Test coverage at Dell', tone: 'brand' },
    { value: 'EN · PT', label: 'Full professional English', tone: 'yellow' },
] as const;

/** Years of hands-on professional use. The bar scale tops out at 6 years. */
export const SKILLS = [
    { name: 'UI/UX Design & Prototyping', years: 2, label: '2 yrs' },
    { name: 'React, Next.js & TypeScript', years: 5.5, label: '5+ yrs' },
    { name: 'Design Systems & Components', years: 5, label: '5 yrs' },
    { name: 'Testing & Code Review', years: 5, label: '5 yrs' },
];
export const SKILL_SCALE_YEARS = 6;

export type ProjectStatus = 'Live' | 'In progress' | 'Concept';

export interface Project {
    slug: string;
    title: string;
    status: ProjectStatus;
    category: string;
    description: string;
    cover: string;
    coverAlt: string;
    caseStudy?: string;
}

export const PROJECTS: Project[] = [
    {
        slug: 'brightfield-solar',
        title: 'Brightfield Solar',
        status: 'Live',
        category: 'Web App · Next.js',
        description:
            'A city landing page for a solar installer: instant savings simulator, local crews and a lead form, designed and built mobile-first.',
        cover: brightfieldCover,
        coverAlt: 'Brightfield Solar home page: “Make the most of Phoenix sunshine” next to a house with solar panels at night.',
        caseStudy: '/work/brightfield-solar',
    },
    {
        slug: 'lean-ing',
        title: 'Lean-ing',
        status: 'In progress',
        category: 'Website · Brand · Social',
        description:
            'Redesign for a Lean training company: editorial website, component library and a 30-post Instagram system with AI imagery.',
        cover: leaningCover,
        coverAlt: 'Lean-ing home page: “Lean thinking for teams that deliver” with two professionals and a Lean terms ticker.',
    },
    {
        slug: 'webeluga',
        title: 'Webeluga',
        status: 'In progress',
        category: 'Brand · Website · AI',
        description:
            'Brand and bilingual website (EN/PT) for an AI & marketing agency, from naming and brand manual to responsive UI.',
        cover: webelugaCover,
        coverAlt: 'Webeluga home page: “Automate your business and scale with AI” over a teal gradient.',
    },
    {
        slug: 'jhr-automacom',
        title: 'JHR Automacom',
        status: 'In progress',
        category: 'Website · Industrial',
        description:
            'Website for an industrial automation and safety training company: courses, consulting and compliance content.',
        cover: jhrCover,
        coverAlt: 'JHR Automacom home page: “Engineering safety and automation excellence for regulated industries” on a dark grid.',
    },
];

export const PROCESS_STEPS = [
    {
        number: '01',
        title: 'Discover',
        description:
            'Understand the business, the audience and what success looks like before anything else.',
        tags: ['Research', 'Goals'],
        color: 'text-brand',
        bar: 'bg-brand/35',
    },
    {
        number: '02',
        title: 'Define',
        description:
            'Map user flows, content and information architecture before the first pixel.',
        tags: ['User flows', 'Wireframes'],
        color: 'text-accent-magenta',
        bar: 'bg-accent-magenta/35',
    },
    {
        number: '03',
        title: 'Design',
        description: 'Craft the visual language and a reusable component system in Figma.',
        tags: ['Figma', 'Design system'],
        color: 'text-accent-blue-text',
        bar: 'bg-accent-blue/35',
    },
    {
        number: '04',
        title: 'Build',
        description:
            'Design straight in code with React, Next.js & TypeScript, directing AI agents to ship faster.',
        tags: ['React', 'Next.js', 'AI agents', 'Unit & e2e tests'],
        color: 'text-accent-orange-text',
        bar: 'bg-accent-orange/35',
    },
    {
        number: '05',
        title: 'Review & Ship',
        description:
            'Review what the AI wrote for performance, accessibility and security, ship through CI/CD and measure with analytics.',
        tags: ['Code review', 'Security', 'WCAG 2.2 AA', 'CI/CD', 'Google Analytics'],
        color: 'text-brand',
        bar: 'bg-brand/35',
    },
];

export const TESTIMONIALS = [
    {
        quote: "In many cases it takes wireframe designers many iterations to 'nail' the concept, but Jessica hits the target on almost every first try.",
        role: 'IT Product Manager',
    },
    {
        quote: 'Her skills and dedication are remarkable, and we can always depend on her to tackle any task with precision and efficiency.',
        role: 'Principal SWE',
    },
    {
        quote: 'Her meticulous attention to detail and unwavering dedication have been instrumental in ensuring the success of this critical deliverable.',
        role: 'Cross Product Leader',
    },
    {
        quote: 'She is able to quickly create UI pages and write complex code with ease. Having her on the team has been a great help to reach our timelines.',
        role: 'Principal SWE',
    },
    {
        quote: 'She helps ensure that we are on track using the latest and greatest in technology, security, and design implementation.',
        role: 'Senior Manager',
    },
    {
        quote: 'She is always willing to go the extra mile, spending effort to support us, she ensures that we are getting all the details required to continue our work.',
        role: 'Principal SWE',
    },
];
