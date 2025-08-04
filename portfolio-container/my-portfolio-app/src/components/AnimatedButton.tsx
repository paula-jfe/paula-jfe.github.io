import React from 'react';

const AnimatedButton = ({ children, text, className = '', ...props }) => {
    return (
        <button
            type="button"
            className="fancy-button text-18b text-center p-4 relative flex items-center justify-center overflow-hidden group transition-all duration-300 ease-in-out"
        >
            {text}
            <span className="icon-container">{children}</span>
        </button>
    );
};

export default AnimatedButton;
