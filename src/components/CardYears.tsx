import React from 'react';

const CardYears = () => {
    return (
        <div className="shadow icon-card bg-biloba_flower-900 rounded-[0.2rem] flex flex-col h-full items-center justify-center px-12 min-h-80">
            <div className="flex flex-col items-center justify-center">
                <div className="">
                    <span className="text-h4 text-biloba_flower-200 pr-4">+</span>
                    <span className="text-[120px] text-center text-roboto font-bold text-biloba_flower-50 card-icon-body">
                        4
                    </span>
                </div>

                <p className="text-h4 text-center font-bold text-biloba_flower-200">exp</p>
            </div>
        </div>
    );
};

export default CardYears;
/* text-[clamp(64px,5vw,80px)] */
