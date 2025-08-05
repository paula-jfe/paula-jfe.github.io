import React from 'react';

const PersonalInfo = () => {
    return (
        <div className="personal-info padding-x-5p pb-12">
            <div className="grid grid-cols-12 gap-8 mx-auto">
                <div className="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 bg-blue-200 h-20">
                    A
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-8 bg-blue-300 h-20">
                    B
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-8 bg-blue-400 h-20">
                    C
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 bg-blue-200 h-20">
                    D
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
