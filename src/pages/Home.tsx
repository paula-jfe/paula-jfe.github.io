import React, { useEffect } from 'react';

import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Experience from '../components/sections/Experience';
import Hero from '../components/sections/Hero';
import Process from '../components/sections/Process';
import SelectedWorks from '../components/sections/SelectedWorks';
import TechMarquee from '../components/sections/TechMarquee';
import Testimonials from '../components/sections/Testimonials';

const Home: React.FC = () => {
    useEffect(() => {
        document.title = 'Jessica Ladislau · Design Engineer';
    }, []);

    return (
        <>
            <Hero />
            <TechMarquee />
            <Experience />
            <About />
            <SelectedWorks />
            <Process />
            <Testimonials />
            <Contact />
        </>
    );
};

export default Home;
