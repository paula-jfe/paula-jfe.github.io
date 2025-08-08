import React from 'react';

const FeedbackCard = ({ children, position, ...props }) => {
    return (
        <div className="scroll-item px-12 inline-block">
            <div className="">
                <p className="text-center text-20b sm:text-20b md:text-h6 text-perano-700">{}</p>
                <div className="relative">
                    <div>{children}</div>
                    <p
                        className={`text-xs md:text-sm lg:text-base absolute top-1/2 left-1/2 -translate-x-[61%] -translate-y-1/2 font-semibold text-center pointer-events-none`}
                    >
                        {}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;
