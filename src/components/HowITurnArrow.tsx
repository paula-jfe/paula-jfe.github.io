import React from 'react';

const HowITurnArrow = ({ children, title, text, color, ...props }) => {
    return (
        <div className="">
            <div className="w-[160px] sm:w-[160px] md:w-[190px] lg:w-[220px] h-auto mx-auto">
                <p className="text-center pr-7 pb-2 text-20b sm:text-20b md:text-h6 text-perano-700">
                    {title}
                </p>
                <div className="relative">
                    <div>{children}</div>
                    <p
                        className={`text-xs md:text-sm lg:text-base absolute top-1/2 left-1/2 -translate-x-[61%] -translate-y-1/2 text-${color}-50 text-sm font-semibold text-center pointer-events-none`}
                    >
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HowITurnArrow;
