import React from 'react';

import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';

const Landing = () => {
    return (
        <div className="landing-page">
            <Header />
            <section id="herobanner" className="gradient-box">
                <HeroBanner />
            </section>
            <section id="about"></section>
            <section id="contact"></section>
        </div>
    );
};

export default Landing;
