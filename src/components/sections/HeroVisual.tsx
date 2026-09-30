import React from 'react';

import illustration from '../../assets/pictures/jessica-illustration.webp';
import portrait from '../../assets/pictures/jessica.webp';
import Icon, { type IconName } from '../ui/Icon';

interface BadgeProps {
    icon: IconName;
    kicker: string;
    label: string;
    className: string;
}

const Badge: React.FC<BadgeProps> = ({ icon, kicker, label, className }) => (
    <div className={`absolute flex items-center gap-3 rounded-md bg-white p-4 shadow-badge ${className}`}>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-yellow text-ink">
            <Icon name={icon} size={22} />
        </span>
        <span className="flex flex-col">
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
    <div className="relative mx-auto h-[426px] w-full max-w-[489px] md:h-[608px]">
        {/* Offset to the right so the floating badge (left: -90px) never clips at the viewport edge. */}
        <div className="absolute left-[calc(50%+24px)] top-0 h-[608px] w-[489px] origin-top -translate-x-1/2 scale-[0.7] md:left-1/2 md:scale-100 xl:left-[calc(50%+56px)]">
            <span
                aria-hidden="true"
                className="absolute left-[-33px] top-2 h-[250px] w-[250px] rounded-full border-4 border-brand/20"
            />
            <span
                aria-hidden="true"
                className="absolute left-[240px] top-[304px] h-[300px] w-[300px] rounded-full border-4 border-accent-yellow/30"
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
                <div className="relative h-full w-full overflow-hidden rounded-xl border-4 border-white bg-line p-1 shadow-float">
                    <img
                        src={portrait}
                        alt="Portrait of Jessica Ladislau smiling, wearing a lilac sweatshirt."
                        width={416}
                        height={506}
                        fetchPriority="high"
                        className="h-[506px] w-[416px] max-w-none animate-hero-first object-cover"
                    />
                    <img
                        src={illustration}
                        alt=""
                        width={386}
                        height={546}
                        className="absolute left-[19px] top-1 h-[546px] w-[386px] max-w-none animate-hero-second opacity-0"
                    />
                </div>

                <Badge
                    icon="code"
                    kicker="software"
                    label="Engineer"
                    className="left-[-90px] top-[130px] animate-hero-badge-first"
                />
                <Badge
                    icon="palette"
                    kicker="UI / UX"
                    label="Designer"
                    className="left-[306px] top-[378px] animate-hero-badge-second opacity-10"
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
