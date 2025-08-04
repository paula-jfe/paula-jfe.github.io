import React from 'react';
import whiskDeveloperVideo from '../assets/videos/whisk_developer.mp4';
import Header from '../components/Header';

const Landing = () => {
    return (
        <div className="landing-page">
            <Header />
            <section className="gradient-box">
                <video preload="auto" autoPlay muted loop playsInline className="hero-video">
                    <source src={whiskDeveloperVideo} type="video/mp4" />
                </video>
                <h1>Welcome to the Landing Page</h1>
                <p>This is the starting point of our application.</p>
            </section>
        </div>
    );
};

export default Landing;
