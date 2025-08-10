import React from 'react';

const TextCardExperience = () => {
    return (
        <div className="border-8 border-yellow_orange-50 rounded-[0.2rem] bg-yellow_orange-100/20 hover:bg-yellow_orange-100/80 flex flex-col items-start justify-start p-8 min-h-80">
            <p className="text-light_orchid-600 text-h4">Experience</p>
            <ul className="text-card-body text-justify list-disc pl-5 pt-4 text-sm md:text-base lg:text-lg text-perano-700 font-medium">
                <li>
                    Software Engineer with 4+ years of experience building{' '}
                    <span className="font-extrabold text-biloba_flower-700">
                        scalable, user centered interfaces
                    </span>
                    .
                </li>
                <li>
                    I've worked in global teams delivering micro-frontends, proposing{' '}
                    <span className="font-extrabold text-biloba_flower-700">UX</span> improvements,
                    integrating{' '}
                    <span className="font-extrabold text-biloba_flower-700">
                        complex data flows and API's
                    </span>
                    .
                </li>
                <li>
                    I'm passionate about turning ideas into intuitive and{' '}
                    <span className="font-extrabold text-biloba_flower-700">
                        accessible digital experiences
                    </span>
                    .
                </li>
            </ul>
            <p className="text-justify list-disc text-sm md:text-base lg:text-lg pt-4 text-perano-700 font-medium">
                Legally authorized to work in the U.S. under an{' '}
                <span className="font-extrabold text-biloba_flower-700">L-2s visa</span>, working
                from the Pacific Time Zone.
            </p>
        </div>
    );
};

export default TextCardExperience;
