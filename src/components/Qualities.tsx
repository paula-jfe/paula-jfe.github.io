import React from 'react';
import QualityCard from './QualityCard';
import game from '../assets/icons/game.svg';
import bug from '../assets/icons/bug.svg';
import bolt from '../assets/icons/bolt.svg';
import code from '../assets/icons/code.svg';

const Qualities: React.FC = () => {
    return (
        <div id="about-qualities" className=" gap-12 min-h-[166px] p-12 padding-x-5p">
            <div className="flex flex-row items-center justify-between md:px-12 gap-4 flex-wrap">
                <QualityCard text="Fast build">
                    <img src={bolt} alt="Bolt icon" style={{ width: '40px', height: '40px' }} />
                </QualityCard>
                <QualityCard text="Bug hunter">
                    <img src={bug} alt="Bug icon" style={{ width: '40px', height: '40px' }} />
                </QualityCard>
                <QualityCard text="Game lover">
                    <img src={game} alt="Game icon" style={{ width: '40px', height: '40px' }} />
                </QualityCard>
                <QualityCard text="Creative coder">
                    <img src={code} alt="Code icon" style={{ width: '40px', height: '40px' }} />
                </QualityCard>
            </div>
        </div>
    );
};

export default Qualities;
