import React from 'react';
import QualityCard from './QualityCard';
import game from '../assets/icons/game.svg';
import bug from '../assets/icons/bug.svg';
import bolt from '../assets/icons/bolt.svg';
import code from '../assets/icons/code.svg';
import graph_pink from '../assets/pictures/graph_pink.svg';
import graph_purple from '../assets/pictures/graph_purple.svg';
import wave from '../assets/pictures/wave.svg';
import HowITurnArrow from './HowITurnArrow';

const HowITurn = () => {
    return (
        <div className="relative gap-12 min-h-[166px] padding-x-5p py-12">
            <div className="absolute top-1/2 left-0 w-full h-full -z-10">
                <svg
                    className="w-full h-auto block"
                    width="1440"
                    height="82"
                    viewBox="0 0 1440 82"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M-220 14.7006C-13.5502 -20.8015 306.839 68.3681 513.811 77.4494C720.784 86.5307 1013.47 -20.141 1173.93 9.08622C1334.38 38.3134 1413.31 87.8532 1660 60.4412"
                        stroke="#FEF9EE"
                        strokeWidth="10"
                        vectorEffect="non-scaling-stroke"
                    />
                </svg>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="text-light_orchid-600 text-center text-h4 pb-12">
                    How I turn ideas into interfaces
                </p>
                <div className="flex flex-row items-center justify-between w-full gap-4 flex-wrap pt-12">
                    <HowITurnArrow
                        color="light_orchid"
                        title="1. Task"
                        text="I read the requirements to understand the context and impact"
                    >
                        <img
                            src={graph_pink}
                            alt="Game icon"
                            className="w-full max-w-[220px] min-w-[160px] h-auto"
                        />
                    </HowITurnArrow>
                    <HowITurnArrow
                        color="biloba_flower"
                        title="2. Questions"
                        text="I clarify user flow, dependencies, and scenarios with PM"
                    >
                        <img
                            src={graph_purple}
                            alt="Game icon"
                            className="w-full max-w-[220px] min-w-[160px] h-auto"
                        />
                    </HowITurnArrow>
                    <HowITurnArrow
                        color="light_orchid"
                        title="3. Feature"
                        text="I sketch the visual behavior and develop the necessary features"
                    >
                        <img
                            src={graph_pink}
                            alt="Game icon"
                            className="w-full max-w-[220px] min-w-[160px] h-auto"
                        />
                    </HowITurnArrow>
                    <HowITurnArrow
                        color="biloba_flower"
                        title="4. Tests"
                        text="I validate UX, feature behavior, unit tests and ask for feedback"
                    >
                        <img
                            src={graph_purple}
                            alt="Game icon"
                            className="w-full max-w-[220px] min-w-[160px] h-auto"
                        />
                    </HowITurnArrow>
                    <HowITurnArrow
                        color="light_orchid"
                        title="5. Launch"
                        text="I deploy the changes and update the documentation"
                    >
                        <img
                            src={graph_pink}
                            alt="Game icon"
                            className="w-full max-w-[220px] min-w-[160px] h-auto"
                        />
                    </HowITurnArrow>
                </div>
            </div>
        </div>
    );
};

export default HowITurn;
