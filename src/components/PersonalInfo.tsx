import React from 'react';
import CardYears from './CardYears';
import CardFigma from './CardFigma';
import TextCardExperience from './TextCardExperience';
import TextCardEducation from './TextCardEducation';

const PersonalInfo = () => {
    return (
        <div className="personal-info padding-x-5p">
            <div className="grid grid-cols-12 gap-8 mx-auto">
                <div className="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-3 min-h-80">
                    <CardYears />
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-9 min-h-80">
                    <TextCardExperience />
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-9 min-h-80">
                    <TextCardEducation />
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-3 min-h-80">
                    <CardFigma />
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
