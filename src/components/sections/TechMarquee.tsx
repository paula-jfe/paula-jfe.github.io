import React from 'react';

import { TECH_STACK } from '../../data/content';

const Item: React.FC<{ name: string; icon: string }> = ({ name, icon }) => (
    <li className="flex shrink-0 items-center gap-3 px-6">
        <img src={icon} alt="" width={24} height={24} className="h-6 w-6 object-contain" />
        <span className="font-display text-body-sm font-bold uppercase tracking-[0.12em] text-muted">
            {name}
        </span>
    </li>
);

const TechMarquee: React.FC = () => (
    <section aria-label="Tech stack" className="group overflow-hidden border-b border-line py-7">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            <ul className="flex">
                {TECH_STACK.map((tech) => (
                    <Item key={tech.name} {...tech} />
                ))}
            </ul>
            <ul className="flex" aria-hidden="true">
                {TECH_STACK.map((tech) => (
                    <Item key={tech.name} {...tech} />
                ))}
            </ul>
        </div>
    </section>
);

export default TechMarquee;
