import React from 'react';

import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import AnimatedStacks from '../components/AnimatedStacks';
import PersonalInfo from '../components/PersonalInfo';
import Qualities from '../components/Qualities';
import HowITurn from '../components/HowITurn';

const Landing = () => {
    return (
        <div className="landing-page font-roboto">
            <Header />
            <section id="herobanner" className="gradient-box">
                <HeroBanner />
            </section>
            <section id="about">
                <AnimatedStacks />
                <PersonalInfo />
                <Qualities />
                <HowITurn />
            </section>
            {/* <section id="contact" className="gradient-box"></section> */}
        </div>
    );
};

export default Landing;
