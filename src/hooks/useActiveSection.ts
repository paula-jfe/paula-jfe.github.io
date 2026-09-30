import { useEffect, useState } from 'react';

/** Returns the id of the section currently in view (used for aria-current in the nav). */
export function useActiveSection(ids: readonly string[], enabled = true): string | null {
    const [active, setActive] = useState<string | null>(null);

    useEffect(() => {
        if (!enabled || typeof IntersectionObserver === 'undefined') return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                if (visible[0]) setActive(visible[0].target.id);
            },
            { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5] },
        );

        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [ids, enabled]);

    return active;
}
