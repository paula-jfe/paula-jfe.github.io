import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import AnimatedStacks from '../components/AnimatedStacks';
import PersonalInfo from '../components/PersonalInfo';
import Qualities from '../components/Qualities';
import HowITurn from '../components/HowITurn';
import FeedbackCarousel from '../components/FeedbackCarousel';
import Contact from '../components/Contact';
import SmoothSection from '../helpers/SmoothSection';
import { HomeProps } from '../types/HomePageIndex';

const Home: React.FC<HomeProps> = ({ motion = true }) => {
    return (
        <div id="homepage" className="landing-page font-roboto">
            <Header />
            <SmoothSection enableMotion={motion} id="herobanner">
                <HeroBanner />
            </SmoothSection>
            <div id="about" className="about">
                <SmoothSection enableMotion={motion} id="about-animated-stacks">
                    <AnimatedStacks />
                </SmoothSection>
                <SmoothSection enableMotion={motion} id="about-personal-info">
                    <PersonalInfo />
                </SmoothSection>
                <SmoothSection enableMotion={motion} id="about-qualities">
                    <Qualities />
                </SmoothSection>
                <SmoothSection enableMotion={motion} id="about-how-i-turn">
                    <HowITurn />
                </SmoothSection>
                <SmoothSection enableMotion={motion} id="about-feedback-carousel">
                    <FeedbackCarousel />
                </SmoothSection>
            </div>
            <SmoothSection enableMotion={motion} id="contact">
                <Contact />
            </SmoothSection>
        </div>
    );
};

export default Home;
