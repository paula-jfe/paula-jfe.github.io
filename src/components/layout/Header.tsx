import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router';

import { NAV_LINKS } from '../../data/content';
import { useActiveSection } from '../../hooks/useActiveSection';
import { buttonClasses } from '../ui/Button';
import Icon from '../ui/Icon';
import SectionLink from './SectionLink';

const sectionIds = NAV_LINKS.map((link) => link.id);

const navLinkClasses = (active: boolean) =>
    `group relative flex flex-col items-center gap-1.5 rounded-xs px-1 py-1 font-sans text-body font-semibold transition-colors duration-200 focus-ring ${
        active ? 'text-brand' : 'text-muted hover:text-ink'
    }`;

const Header: React.FC = () => {
    const { pathname } = useLocation();
    const onHome = pathname === '/';
    const active = useActiveSection(sectionIds, onHome);
    const [open, setOpen] = useState(false);
    const menuButton = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!open) return;
        const onKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false);
                menuButton.current?.focus();
            }
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [open]);

    useEffect(() => setOpen(false), [pathname]);

    return (
        <header className="fixed inset-x-0 top-0 z-40 border-b border-surface-page/60 bg-surface-page/85 backdrop-blur-md">
            <nav
                aria-label="Main"
                className="container-content flex h-[var(--header-height)] items-center justify-between"
            >
                <Link
                    to="/"
                    className="rounded-xs font-logo text-2xl font-extrabold leading-none text-brand-logo focus-ring"
                    aria-label="Jessica Ladislau, home"
                    onClick={() => onHome && window.scrollTo({ top: 0 })}
                >
                    JL.
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    <ul className="flex items-center gap-8">
                        {NAV_LINKS.map((link) => {
                            const isActive = onHome && active === link.id;
                            return (
                                <li key={link.id}>
                                    <SectionLink
                                        sectionId={link.id}
                                        className={navLinkClasses(isActive)}
                                        aria-current={isActive ? 'location' : undefined}
                                    >
                                        {link.label}
                                        <span
                                            aria-hidden="true"
                                            className={`h-0.5 w-4 rounded-full bg-brand transition-opacity duration-200 ${
                                                isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'
                                            }`}
                                        />
                                    </SectionLink>
                                </li>
                            );
                        })}
                    </ul>
                    <SectionLink sectionId="contact" className={buttonClasses('primary')}>
                        Get in touch
                    </SectionLink>
                </div>

                <button
                    ref={menuButton}
                    type="button"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/[0.08] text-ink transition-colors hover:bg-brand/15 focus-ring md:hidden"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    onClick={() => setOpen((value) => !value)}
                >
                    <Icon name={open ? 'close' : 'menu'} size={22} />
                </button>
            </nav>

            <div
                id="mobile-menu"
                hidden={!open}
                className="border-t border-line bg-surface-page px-5 pb-6 pt-2 shadow-card md:hidden"
            >
                <ul className="flex flex-col">
                    {NAV_LINKS.map((link) => (
                        <li key={link.id}>
                            <SectionLink
                                sectionId={link.id}
                                onClick={() => setOpen(false)}
                                className="flex h-14 items-center border-b border-line font-display text-heading-5 font-bold text-ink transition-colors hover:text-brand focus-ring"
                            >
                                {link.label}
                            </SectionLink>
                        </li>
                    ))}
                </ul>
                <SectionLink
                    sectionId="contact"
                    onClick={() => setOpen(false)}
                    className={`${buttonClasses('primary', true)} mt-6`}
                >
                    Get in touch
                </SectionLink>
            </div>
        </header>
    );
};

export default Header;
