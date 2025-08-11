import React from 'react';

const AnimatedButton = ({
    children,
    text,
    onClickFunction = null,
    type,
    disabled,
    className = '',
    ...props
}) => {
    return (
        <button
            onClick={type === 'submit' ? () => {} : onClickFunction}
            type={type === 'submit' ? 'submit' : 'button'}
            disabled={disabled}
            className={`fancy-button ${
                children ? 'with-icon' : ''
            } text-18b text-center p-4 relative flex items-center justify-center overflow-hidden group transition-all duration-300 ease-in-out`}
        >
            {text}
            <span className="icon-container">{children}</span>
        </button>
    );
};

export default AnimatedButton;
