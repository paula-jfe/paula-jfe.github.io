import React from 'react';

const FeedbackCard = ({ children, position, message, ...props }) => {
    return (
        <div className="scroll-item sm:px-2 md:px-12 inline-block">
            <div className="relative">
                <div>{children}</div>
                <p
                    className={`w-[66%] text-xs md:text-sm lg:text-base absolute top-1/2 left-1/2 -translate-x-[33%] -translate-y-[90%] text-center pointer-events-none text-biloba_flower-900`}
                >
                    {message}
                </p>
                <p
                    className={`w-full text-xs md:text-sm lg:text-base absolute bottom-0 left-0 -translate-x-[-25%] -translate-y-[135%] font-bold text-start pointer-events-none text-biloba_flower-50`}
                >
                    {position}
                </p>
            </div>
        </div>
    );
};

export default FeedbackCard;
