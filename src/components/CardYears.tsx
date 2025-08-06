import React from 'react';

const CardYears = () => {
    return (
        <div className="shadow icon-card bg-biloba_flower-900 rounded-[0.2rem] flex flex-col items-center justify-top px-12 pt-6 min-h-80">
            <div className="flex flex-col items-center justify-center">
                <div className="">
                    <span className="text-h4 text-biloba_flower-200 pr-4">+</span>
                    <span className="text-[120px] text-center text-roboto font-bold text-biloba_flower-50">
                        4
                    </span>
                </div>

                <p className="text-[clamp(36px,5vw,40px)] text-center text-h1 text-biloba_flower-200">
                    exp
                </p>
            </div>
        </div>
    );
};

export default CardYears;
/* text-[clamp(64px,5vw,80px)] */
