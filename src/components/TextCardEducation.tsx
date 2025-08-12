import React from 'react';

const TextCardEducation = () => {
    return (
        <div
            id="about-education-card"
            className="border-8 border-yellow_orange-50 rounded-[0.2rem] bg-yellow_orange-100/20 hover:bg-yellow_orange-100/80 flex flex-col items-start justify-start p-8 min-h-80"
        >
            <p className="text-light_orchid-600 text-h4">Education</p>
            <ul className="text-card-body text-justify list-disc pl-5 pt-4 text-sm md:text-base lg:text-lg text-perano-700 font-medium">
                <li>
                    Master's in{' '}
                    <span className="font-extrabold text-biloba_flower-700">
                        Technological Innovation
                    </span>{' '}
                    with a focus on data analysis and classification (
                    <span className="font-extrabold text-biloba_flower-700">PCA</span>) was my first
                    contact with machine learning concepts.
                </li>
                <li>
                    <span className="font-extrabold text-biloba_flower-700">
                        Electrical Engineering
                    </span>{' '}
                    studies sharpened my systems thinking.
                </li>
                <li>
                    Certification in{' '}
                    <span className="font-extrabold text-biloba_flower-700">
                        full-stack web development
                    </span>{' '}
                    started my passion to deliver user centered solutions.
                </li>
            </ul>
            <p className="text-justify list-disc text-sm md:text-base lg:text-lg pt-4 text-perano-700 font-medium">
                My academic path blends tech with{' '}
                <span className="font-extrabold text-biloba_flower-700">
                    user focused problem solving
                </span>
                .
            </p>
        </div>
    );
};

export default TextCardEducation;
