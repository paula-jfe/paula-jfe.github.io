import React from 'react';
import figmaWhite from '../assets/pictures/figma_white.svg';

const CardFigma = () => {
    return (
        <div className="cursor-pointer shadow icon-card bg-light_orchid-600 rounded-[0.2rem] flex flex-col h-full items-center justify-center px-12 min-h-80">
            <a
                href="https://www.figma.com/design/TysBazDugziDHHCXPzMU3q/Portfolio2?node-id=30-29&t=nzNgaIIewwHJBV6x-1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
            >
                <div className="mx-auto">
                    <p className="text-h4 text-center text-roboto font-bold text-biloba_flower-50">
                        Curious?
                    </p>
                    <p className="text-sm md:text-base lg:text-lg text-18b text-center text-roboto font-bold text-biloba_flower-200">
                        Dive into the prototype
                    </p>
                </div>
                <div className="pt-8 flex justify-center">
                    <img
                        key="30"
                        src={figmaWhite}
                        alt="Figma clickable Icon"
                        style={{ height: '70px' }}
                    />
                </div>
            </a>
        </div>
    );
};

export default CardFigma;
