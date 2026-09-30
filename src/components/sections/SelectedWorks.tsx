import React from 'react';

import { PROJECTS } from '../../data/content';
import ProjectCard from '../ui/ProjectCard';
import SectionHeader from '../ui/SectionHeader';

const SelectedWorks: React.FC = () => (
    <section id="work" aria-labelledby="work-title" className="section-y bg-surface-page">
        <div className="container-content flex flex-col gap-10 md:gap-12 xl:gap-14">
            <SectionHeader
                id="work-title"
                kicker="Selected works"
                title={[{ text: 'Things I’ve designed' }, { text: '& built', highlight: true }]}
                description="Websites, brands and products I designed and built end to end, from the first sketch to production code."
            />
            <ul className="grid gap-4 md:grid-cols-2 md:gap-6">
                {PROJECTS.map((project) => (
                    <li key={project.slug}>
                        <ProjectCard project={project} />
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

export default SelectedWorks;
