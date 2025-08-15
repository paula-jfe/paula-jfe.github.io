import { ReactNode, HTMLAttributes } from 'react';

export interface FeedbackCardProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    position?: string;
    message?: string;
}

export interface HowITurnArrowProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    title?: string;
    text?: string;
    color?: string;
}

export interface QualityCardProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    text?: string;
}
