import React, { useEffect, useRef, useState } from 'react';
import { SmoothSectionProps } from '../types/helpers/SmoothSection';

const SmoothSection = ({ enableMotion, id, children }: SmoothSectionProps) => {
    const ref = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!enableMotion) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.2 },
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [enableMotion]);

    return (
        <section
            id={id}
            ref={ref}
            className={`transition-all duration-500 ${
                enableMotion
                    ? isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    : 'opacity-100 translate-y-0'
            }`}
        >
            {children}
        </section>
    );
};

export default SmoothSection;
