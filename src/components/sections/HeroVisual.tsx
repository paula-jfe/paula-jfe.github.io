import React from 'react';

import illustration from '../../assets/pictures/jessica-illustration.webp';
import portrait from '../../assets/pictures/jessica.webp';
import Icon, { type IconName } from '../ui/Icon';

interface BadgeProps {
    icon: IconName;
    kicker: string;
    label: string;
    className: string;
    /** Fades the text to 0 while the card itself stays at 10%, so no low-contrast text is ever shown. */
    textClassName: string;
}

const Badge: React.FC<BadgeProps> = ({ icon, kicker, label, className, textClassName }) => (
    <div aria-hidden="true" className={`absolute flex items-center gap-3 rounded-md bg-white p-4 shadow-badge ${className}`}>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-yellow text-ink">
            <Icon name={icon} size={22} />
        </span>
        <span className={`flex flex-col ${textClassName}`}>
            <span className="text-caption font-bold tracking-[-0.02em] text-muted">{kicker}</span>
            <span className="text-body-lg font-bold uppercase leading-7 text-brand">{label}</span>
        </span>
    </div>
);

/**
 * Asymmetrical portrait composition from the Figma hero (489 × 608 artboard).
 * Like the "Main Visual Element" prototype, it alternates every 3s between the
 * Engineer (photo) and Designer (illustration) variants with a 1s cross-fade.
 * The artboard keeps its desktop geometry and is scaled down on small screens.
 */
const HeroVisual: React.FC = () => (
    /*
     * The composition spans 575px (badges stick out of the 489px artboard: -46px left, +40px right).
     * Mobile: scaled to 0.55 so all of it fits between the grid margins (from 360px viewports).
     * Tablet: centred. Desktop: right-aligned so the Designer badge ends exactly on the grid margin.
     */
    <div className="relative mx-auto h-[335px] w-[317px] md:h-[608px] md:w-full md:max-w-[489px] xl:mr-0">
        <div className="absolute left-[25px] top-0 h-[608px] w-[489px] origin-top-left scale-[0.55] md:left-1/2 md:origin-top md:-translate-x-1/2 md:scale-100 xl:left-auto xl:right-10 xl:translate-x-0">
            <span
                aria-hidden="true"
                className="absolute left-[-33px] top-2 h-[250px] w-[250px] rounded-full border-4 border-brand/20"
            />
            <span
                aria-hidden="true"
                className="absolute left-[213px] top-[304px] h-[300px] w-[300px] rounded-full border-4 border-accent-yellow/30"
            />
            <span
                aria-hidden="true"
                className="absolute right-[9px] top-[22px] h-32 w-32 rounded-full bg-accent-yellow/25 shadow-float backdrop-blur-md"
            />
            <span
                aria-hidden="true"
                className="absolute left-[6px] top-[453px] h-32 w-32 rounded-full bg-brand/20 shadow-float backdrop-blur-md"
            />

            <div className="absolute left-[44px] top-16 h-[480px] w-[400px]">
                <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-xl opacity-20 blur-[20px]"
                    style={{ backgroundImage: 'linear-gradient(50deg, #7F13EC 0%, #FACC15 100%)' }}
                />
                {/* Both images cover the whole card (inside the white border) so the cross-fade never shows gaps. */}
                <div className="relative h-full w-full overflow-hidden rounded-xl border-4 border-white bg-line shadow-float">
                    <img
                        src={portrait}
                        alt="Portrait of Jessica Ladislau smiling, wearing a lilac sweatshirt."
                        width={416}
                        height={506}
                        fetchPriority="high"
                        className="absolute inset-0 h-full w-full animate-hero-first object-cover object-top"
                    />
                    <img
                        src={illustration}
                        alt=""
                        width={386}
                        height={546}
                        className="absolute inset-0 h-full w-full animate-hero-second object-cover object-top opacity-0"
                    />
                </div>

                {/* The badges cross-fade (one is always at 10% opacity), so they are decorative and read once here. */}
                <p className="sr-only">Software engineer and UI/UX designer.</p>
                <Badge
                    icon="code"
                    kicker="software"
                    label="Engineer"
                    className="left-[-90px] top-[130px] animate-hero-badge-first"
                    textClassName="animate-hero-first"
                />
                <Badge
                    icon="palette"
                    kicker="UI / UX"
                    label="Designer"
                    className="left-[306px] top-[378px] animate-hero-badge-second opacity-10"
                    textClassName="animate-hero-second opacity-0"
                />

                <span
                    aria-hidden="true"
                    className="absolute left-[-32px] top-[22px] h-16 w-16 rounded-full bg-brand/45 backdrop-blur-md"
                />
                <span
                    aria-hidden="true"
                    className="absolute left-[367px] top-[272px] h-16 w-16 rounded-full bg-brand/15 backdrop-blur-md"
                />
            </div>
        </div>
    </div>
);

export default HeroVisual;
