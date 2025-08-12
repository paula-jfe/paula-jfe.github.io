import React from 'react';

import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import AnimatedStacks from '../components/AnimatedStacks';
import PersonalInfo from '../components/PersonalInfo';
import Qualities from '../components/Qualities';
import HowITurn from '../components/HowITurn';
import FeedbackCarousel from '../components/FeedbackCarousel';
import Contact from '../components/Contact';

const Landing = () => {
    return (
        <div id="home-page" className="landing-page font-roboto">
            <Header />
            <section id="herobanner" className="gradient-box h-[780px]">
                <HeroBanner />
            </section>
            <section id="about" className="about">
                <AnimatedStacks />
                <PersonalInfo />
                <Qualities />
                <HowITurn />
                <FeedbackCarousel />
            </section>
            <section id="contact" className="gradient-box h-auto">
                <Contact />
            </section>
        </div>
    );
};

export default Landing;
