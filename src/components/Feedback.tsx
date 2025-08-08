import React, { useRef, useEffect, useState } from 'react';
import feedbackComponent from '../assets/pictures/feedback_component.svg';
import FeedbackCard from './FeedbackCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Feedback = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
        if (!scrollContainerRef.current) return;

        startX.current = e.clientX - scrollContainerRef.current.offsetLeft;
        scrollLeft.current = scrollContainerRef.current.scrollLeft;
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();

        if (!isDragging || !scrollContainerRef.current) return;

        const x = e.clientX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.5;
        scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
    };

    return (
        <div className="h-[640px] py-24">
            <p className="text-light_orchid-600 text-center text-h4 pb-24">
                What people say about me
            </p>
            <div
                className="scroll-container cursor-grab active:cursor-grabbing scroll-smooth"
                draggable="false"
                ref={scrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <div className="scroll-alignment-wrapper">
                    <div className="scroll-content">
                        <ArrowForwardIosIcon sx={{ color: '#b940a7', fontSize: 20 }} />
                        <FeedbackCard position="IT Product Manager">
                            <img
                                src={feedbackComponent}
                                draggable={false}
                                alt="Game icon"
                                className="select-none pointer-events-none w-[412px] h-[320px]"
                            />
                        </FeedbackCard>
                        <FeedbackCard position="Principal SWE">
                            <img
                                src={feedbackComponent}
                                draggable={false}
                                alt="Game icon"
                                className="select-none pointer-events-none w-[412px] h-[320px]"
                            />
                        </FeedbackCard>
                        <FeedbackCard position="Principal SWE">
                            <img
                                src={feedbackComponent}
                                draggable={false}
                                alt="Game icon"
                                className="select-none pointer-events-none w-[412px] h-[320px]"
                            />
                        </FeedbackCard>
                        <FeedbackCard position="Cross Product Leader">
                            <img
                                src={feedbackComponent}
                                draggable={false}
                                alt="Game icon"
                                className="select-none pointer-events-none w-[412px] h-[320px]"
                            />
                        </FeedbackCard>
                        <FeedbackCard position="Cross Product Leader">
                            <img
                                src={feedbackComponent}
                                draggable={false}
                                alt="Game icon"
                                className="select-none pointer-events-none w-[412px] h-[320px]"
                            />
                        </FeedbackCard>
                        <FeedbackCard position="Principal SWE">
                            <img
                                src={feedbackComponent}
                                draggable={false}
                                alt="Game icon"
                                className="select-none pointer-events-none w-[412px] h-[320px]"
                            />
                        </FeedbackCard>
                        <ArrowBackIosIcon sx={{ color: '#b940a7', fontSize: 20 }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
