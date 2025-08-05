import React from 'react';

import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import AnimatedStacks from '../components/AnimatedStacks';

const Landing = () => {
    return (
        <div className="landing-page">
            <Header />
            <section id="herobanner" className="gradient-box">
                <HeroBanner />
            </section>
            <section id="about">
                <AnimatedStacks />
            </section>
            <section id="contact"></section>
        </div>
    );
};

export default Landing;
