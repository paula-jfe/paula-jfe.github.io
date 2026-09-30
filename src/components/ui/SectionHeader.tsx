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
            {/* Parts are joined with a space outside the spans, so every accessible-name algorithm keeps it. */}
            {title.map((part, index) => (
                <React.Fragment key={index}>
                    {index > 0 && ' '}
                    <span className={part.highlight ? 'text-brand' : undefined}>{part.text}</span>
                </React.Fragment>
            ))}
        </h2>
        {description && <p className="max-w-[640px] text-body-lg text-muted">{description}</p>}
    </div>
);

export default SectionHeader;
