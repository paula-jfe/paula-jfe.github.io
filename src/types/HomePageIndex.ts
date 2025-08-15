import { ReactNode, MouseEventHandler, ButtonHTMLAttributes } from 'react';

export interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    text?: string;
    onClickFunction?: MouseEventHandler<HTMLButtonElement>;
}
