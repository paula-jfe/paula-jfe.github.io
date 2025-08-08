import React, { useRef } from 'react';
import feedbackComponent from '../assets/pictures/feedback_component.svg';
import FeedbackCard from './FeedbackCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Feedback = () => {
    const scrollContainerRef = useRef(null);
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        isDragging = true;
        startX = e.pageX - scrollContainerRef.current.offsetLeft;
        scrollLeft = scrollContainerRef.current.scrollLeft;
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        isDragging = false;
    };

    const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        isDragging = false;
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (isDragging) {
            const x = e.pageX - scrollContainerRef.current.offsetLeft;
            const walk = (x - startX) * 1.5;
            scrollContainerRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    return (
        <div className="h-auto w-full py-12">
            <p className="text-light_orchid-600 text-center text-h4 pb-12">
                What people say about me
            </p>
            <div
                className="w-full scroll-container cursor-grab active:cursor-grabbing scroll-smooth"
                draggable="false"
                ref={scrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <div className="w-full scroll-alignment-wrapper">
                    <div className="w-full scroll-content">
                        <ArrowForwardIosIcon className="" />
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
                        <ArrowBackIosIcon className="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
