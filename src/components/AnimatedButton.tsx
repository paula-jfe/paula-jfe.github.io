import React from 'react';
import { AnimatedButtonProps } from '../types/HomePageIndex';

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
    children,
    text,
    onClickFunction,
    type,
    disabled,
    className = '',
    ...props
}) => {
    return (
        <button
            id="animated-button"
            data-testid={`animated-${text}-button`}
            onClick={type === 'submit' ? () => {} : onClickFunction}
            type={type === 'submit' ? 'submit' : 'button'}
            disabled={disabled}
            className={`fancy-button ${
                children ? 'with-icon' : ''
            } text-18b text-center p-4 relative flex items-center justify-center overflow-hidden group transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-biloba_flower-900 focus-visible:rounded-[0.2rem]`}
        >
            {text}
            <span className="icon-container">{children}</span>
        </button>
    );
};

export default AnimatedButton;
