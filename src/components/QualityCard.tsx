import React from 'react';
import { QualityCardProps } from '../types/sections/About';

const QualityCard: React.FC<QualityCardProps> = ({ children, text, className = '', ...props }) => {
    return (
        <div
            id="about-quality-card"
            className="text-biloba_flower-900 hover:text-perano-700 transition-colors duration-300"
        >
            <div
                className={
                    className +
                    ' hover:scale-105 transition-transform min-h-120 flex flex-col min-w-[134px] flex-1 items-center justify-center'
                }
            >
                <div>{children}</div>
                <p className="text-center pt-2 text-20b">{text}</p>
            </div>
        </div>
    );
};

export default QualityCard;
