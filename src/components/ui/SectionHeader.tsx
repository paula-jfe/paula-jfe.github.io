import React from 'react';

interface SectionHeaderProps {
    id: string;
    kicker: string;
    /** Title split into parts; `highlight: true` renders the part in the brand color. */
    title: { text: string; highlight?: boolean }[];
    description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ id, kicker, title, description }) => (
    <div className="flex max-w-3xl flex-col items-start gap-4">
        <span className="rounded-full bg-accent-yellow px-3 py-1 text-caption font-bold uppercase tracking-[0.04em] text-ink">
            {kicker}
        </span>
        <h2 id={id} className="text-heading-1 font-bold tracking-[-0.02em] text-ink">
            {title.map((part, index) => (
                <span key={index} className={part.highlight ? 'text-brand' : undefined}>
                    {part.text}
                </span>
            ))}
        </h2>
        {description && <p className="max-w-[640px] text-body-lg text-muted">{description}</p>}
    </div>
);

export default SectionHeader;
