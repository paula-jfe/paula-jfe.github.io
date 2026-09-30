import React, { useEffect } from 'react';

import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
    useEffect(() => {
        document.title = 'Page not found · Jessica Ladislau';
    }, []);

    return (
        <section className="container-content flex min-h-[70vh] flex-col items-start justify-center gap-6 pt-[var(--header-height)]">
            <p className="rounded-full bg-accent-yellow px-3 py-1 text-caption font-bold uppercase text-ink">
                404
            </p>
            <h1 className="text-heading-1 font-bold text-ink">This page doesn’t exist.</h1>
            <p className="text-body-lg text-muted">The link may be broken or the page may have moved.</p>
            <Button to="/" icon="arrowRight">
                Back to the portfolio
            </Button>
        </section>
    );
};

export default NotFound;
