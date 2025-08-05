import React from 'react';
import whiskDeveloperVideo from '../assets/videos/whisk_developer.mp4';
import AnimatedButton from './AnimatedButton';
import DownloadIcon from '@mui/icons-material/Download';
import Resume from '../assets/resume/CV_Jessica_TR.02v.pdf';

const HeroBanner = () => {
    const downloadArquivo = () => {
        const link = document.createElement('a');
        link.href = Resume;
        link.download = 'Jessica-Ladislau-Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex flex-col items-center justify-end h-[780px] padding-x-5p gap-8 pb-8">
            <video preload="auto" autoPlay muted loop className="hero-video">
                <source src={whiskDeveloperVideo} type="video/mp4" />
            </video>
            <div className="hero-content">
                <h1 className="text-center text-display text-light_orchid-50">Jessica Ladislau</h1>
            </div>
            <div className="hero-content">
                <p className="text-center text-h5 text-light_orchid-200">Software Engineer</p>
            </div>
            <AnimatedButton onClickFunction={downloadArquivo} text="Download Resume">
                {
                    <DownloadIcon
                        fontSize="inherit"
                        className="absolute top-1/2 -translate-y-1/2 opacity-0 transition-all duration-600 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 text-light_orchid-50 ml-2"
                        style={{ width: '30px', height: '30px' }}
                    />
                }
            </AnimatedButton>
        </div>
    );
};

export default HeroBanner;
