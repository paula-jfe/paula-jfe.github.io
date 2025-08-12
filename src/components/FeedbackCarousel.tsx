import React from 'react';
import { useRef, useEffect, useState } from 'react';
import FeedbackCard from './FeedbackCard';
import feedbackComponent from '../assets/pictures/feedback_component.svg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const feedbackArray = [
    {
        position: 'Principal SWE',
        message:
            'She is able to quickly create UI pages and write complex code with ease. Having her on the team has been a great help to reach our timelines.',
    },
    {
        position: 'IT Product Manager',
        message:
            "In many cases it takes wireframe designers many iterations to 'nail' the concept, but Jessica hits the target on almost every first try.",
    },
    {
        position: 'Principal SWE',
        message:
            'Her skills and dedication are remarkable, and we can always depend on her to tackle any task with precision and efficiency.',
    },
    {
        position: 'Cross Product Leader',
        message:
            'Her meticulous attention to detail and unwavering dedication have been instrumental in ensuring the success of this critical deliverable.',
    },
    {
        position: 'Senior Manager',
        message:
            'She helps ensure that we are on track using the latest and greatest in technology, security, and design implementation.',
    },
    {
        position: 'Principal SWE',
        message:
            'She is always willing to go the extra mile, spending effort to support us, she ensures that we are getting all the details required to continue our work.',
    },
];

const FeedbackCarousel = () => {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    const [isDragging, setIsDragging] = useState(false);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);

    useEffect(() => {
        const element = scrollerRef.current;
        const card = cardRef.current;
        if (!element || !card) return;

        const setPeek = () => {
            const cardWidth = card.getBoundingClientRect().width;
            const peek = Math.min((window.innerWidth - cardWidth) / 4, cardWidth / 4);
            element.style.paddingLeft = `${peek}px`;
            element.style.paddingRight = `${peek}px`;
        };

        setPeek();
        window.addEventListener('resize', setPeek);
        return () => window.removeEventListener('resize', setPeek);
    }, []);

    useEffect(() => {
        const element = scrollerRef.current;
        if (!element) return;

        // Adjust the initial scrollLeft
        // If each card is 288px wide + gap:
        const cardWidth = 288;
        const gap = 16;
        const initialScroll = (cardWidth + gap) * 2; // Advance two cards

        element.scrollLeft = initialScroll;
    }, []);

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>): void => {
        const element = scrollerRef.current;
        if (!element) return;

        setIsDragging(true);
        element.classList.add('cursor-grabbing');

        startXRef.current = e.clientX;
        scrollLeftRef.current = element.scrollLeft;

        element.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>): void => {
        if (!isDragging) return;
        const element = scrollerRef.current;
        if (!element) return;

        const walk = e.clientX - startXRef.current;
        element.scrollLeft = scrollLeftRef.current - walk;
    };

    const handlePointerUpOrCancel = (e: React.PointerEvent<HTMLDivElement>): void => {
        const element = scrollerRef.current;
        if (!element) return;

        setIsDragging(false);
        element.classList.remove('cursor-grabbing');
        element.releasePointerCapture(e.pointerId);
    };

    return (
        <div id="about-feedback-carousel" className="py-12 select-none">
            <p className="text-light_orchid-600 text-center text-h4 pb-24">
                What people say about me
            </p>
            <div
                ref={scrollerRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUpOrCancel}
                onPointerCancel={handlePointerUpOrCancel}
                onPointerLeave={handlePointerUpOrCancel}
                className="flex items-center overflow-x-auto scrollfeed-hide snap-x snap-mandatory snap-center md:snap-none scrollfeed-webkit-overflow-scrolling-touch cursor-grab gap-4 scrollfeed-no-select focus:outline-none focus:ring-2 focus:ring-biloba_flower-900 focus:rounded-[0.2rem]"
            >
                <ArrowForwardIosIcon
                    className="animate-bounce"
                    sx={{ color: '#b940a7', fontSize: '3rem' }}
                />
                {feedbackArray.map((feedback, index) => (
                    <div
                        key={index}
                        ref={index === 0 ? cardRef : null}
                        className="flex-shrink-0 snap-center"
                    >
                        <FeedbackCard position={feedback.position} message={feedback.message}>
                            <img
                                key={index}
                                src={feedbackComponent}
                                draggable={false}
                                alt={`Feedback ${index + 1}`}
                                className="w-[288px] h-[224px] md:w-[412px] md:h-[316px] object-cover"
                            />
                        </FeedbackCard>
                    </div>
                ))}
                <ArrowBackIosIcon
                    className="animate-bounce"
                    sx={{ color: '#b940a7', fontSize: '3rem' }}
                />
            </div>
        </div>
    );
};

export default FeedbackCarousel;
