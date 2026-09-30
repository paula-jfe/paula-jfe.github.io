import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import CaseBrightfield from './pages/CaseBrightfield';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

/** Scrolls to the hash target after navigation, or to the top on route changes. */
export const ScrollManager: React.FC = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const target = document.getElementById(hash.slice(1));
            if (target) {
                target.scrollIntoView();
                return;
            }
        }
        window.scrollTo(0, 0);
    }, [pathname, hash]);

    return null;
};

const App: React.FC = () => (
    <>
        <a
            href="#main"
            className="sr-only z-50 rounded-full bg-brand px-5 py-3 font-bold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
            Skip to content
        </a>
        <ScrollManager />
        <Header />
        <main id="main" tabIndex={-1} className="focus:outline-hidden">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work/brightfield-solar" element={<CaseBrightfield />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
        <Footer />
    </>
);

export default App;
