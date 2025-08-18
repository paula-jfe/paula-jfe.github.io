import React from 'react';
import whiskDeveloperVideo from '../assets/videos/whisk_developer.mp4';
import AnimatedButton from './AnimatedButton';
import DownloadIcon from '@mui/icons-material/Download';
import Resume from '../assets/resume/CV_Jessica_TR.02v.pdf';

const HeroBanner: React.FC = () => {
    const downloadFile = (): void => {
        const link: HTMLAnchorElement = document.createElement('a');
        link.href = Resume;
        link.download = 'Jessica-Ladislau-Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div
            id="herobanner-video-section"
            className="gradient-box flex flex-col items-center justify-end h-[780px] padding-x-5p gap-8 pb-8"
        >
            <video
                preload="auto"
                autoPlay
                muted
                loop
                className="opacity-50 absolute top-0 left-0 w-full h-full object-cover select-none pointer-events-none -z-10"
            >
                <source src={whiskDeveloperVideo} type="video/mp4" />
            </video>
            <div className="hero-content">
                <h1 className="text-center text-display text-light_orchid-50">Jessica Ladislau</h1>
            </div>
            <div className="hero-content">
                <p className="text-center text-h5 text-light_orchid-200">Software Engineer</p>
            </div>
            <AnimatedButton
                onClickFunction={downloadFile}
                text="Download resume"
                disabled={false}
                type="button"
            >
                {
                    <DownloadIcon
                        fontSize="inherit"
                        className="absolute top-1/2 -translate-y-1/2 opacity-0 transition-all duration-600 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 text-light_orchid-50 ml-2"
                        style={{ width: '25px', height: '25px' }}
                    />
                }
            </AnimatedButton>
        </div>
    );
};

export default HeroBanner;
