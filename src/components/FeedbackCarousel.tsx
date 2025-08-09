import React from 'react';
import { useRef, useEffect } from 'react';
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
    const scrollerRef = useRef(null);
    const cardRef = useRef(null);

    // Auto-calculate padding so first/last card peek perfectly
    useEffect(() => {
        const el = scrollerRef.current;
        const card = cardRef.current;
        if (!el || !card) return;

        const setPeek = () => {
            const cardWidth = card.getBoundingClientRect().width;
            const peek = Math.min((window.innerWidth - cardWidth) / 4, cardWidth / 4);
            /* const peek = Math.max((window.innerWidth - cardWidth) / 2, 0); */
            el.style.paddingLeft = `${peek}px`;
            el.style.paddingRight = `${peek}px`;
        };

        setPeek();
        window.addEventListener('resize', setPeek);
        return () => window.removeEventListener('resize', setPeek);
    }, []);

    // Drag-to-scroll
    useEffect(() => {
        const el = scrollerRef.current;
        if (!el) return;
        let isDown = false,
            startX = 0,
            startScroll = 0;

        const down = (e) => {
            isDown = true;
            el.classList.add('cursor-grabbing');
            startX = e.clientX ?? e.touches?.[0]?.clientX;
            startScroll = el.scrollLeft;
            if (e.pointerId) el.setPointerCapture?.(e.pointerId);
        };
        const move = (e) => {
            if (!isDown) return;
            const x = e.clientX ?? e.touches?.[0]?.clientX;
            const walk = x - startX;
            el.scrollLeft = startScroll - walk;
        };
        const up = (e) => {
            isDown = false;
            el.classList.remove('cursor-grabbing');
            if (e.pointerId) el.releasePointerCapture?.(e.pointerId);
        };

        el.addEventListener('pointerdown', down);
        el.addEventListener('pointermove', move);
        window.addEventListener('pointerup', up);
        el.addEventListener('pointercancel', up);

        return () => {
            el.removeEventListener('pointerdown', down);
            el.removeEventListener('pointermove', move);
            window.removeEventListener('pointerup', up);
            el.removeEventListener('pointercancel', up);
        };
    }, []);

    useEffect(() => {
        const el = scrollerRef.current;
        if (!el) return;

        // Ajusta o scrollLeft inicial — por exemplo, 2 cards para a direita
        // Se cada card tem largura 288px + gap (digamos gap 16px), calcula:
        const cardWidth = 288;
        const gap = 16;
        const initialScroll = (cardWidth + gap) * 2; // Avança 2 cards

        el.scrollLeft = initialScroll;
    }, []);

    return (
        <div className="py-12 select-none">
            <p className="text-light_orchid-600 text-center text-h4 pb-24">
                What people say about me
            </p>
            <div
                ref={scrollerRef}
                className="flex items-center gap-4 overflow-x-auto scrollbar-hide cursor-grab touch-pan-y"
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
                                src={feedbackComponent}
                                draggable={false}
                                alt={`Feedback ${index + 1}`}
                                className="w-[288px] h-[224px] md:w-[412px] md:h-[316px] object-cover"
                            />
                        </FeedbackCard>

                        <div className="p-4">
                            <h3 className="text-lg font-bold">Card {index + 1}</h3>
                            <p className="text-gray-500">Description here</p>
                        </div>
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
