import React from 'react';

interface PortfolioButtonProps {
    onClick: () => void;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    text?: string;
    width?: string;
    height?: string;
    className?: string;
}

export const PortfolioButton: React.FC<PortfolioButtonProps> = ({
                                                                    onClick,
                                                                    backgroundColor = '#000000',
                                                                    textColor = '#FFFFFF',
                                                                    borderColor = '#000000',
                                                                    text = 'See portfolio',
                                                                    width = '196px',
                                                                    height = '60px',
                                                                    className = ''
                                                                }) => {
    return (
        <button
            onClick={onClick}
            className={`relative text-center font-inter text-[17px] font-semibold leading-normal py-2 px-4 rounded-full group mx-auto sm:mx-0 mb-4 sm:mb-0 cursor-pointer ${className}`}
            style={{
                backgroundColor,
                border: `1px solid ${borderColor}`,
                color: textColor,
                width,
                height
            }}
        >
            <div
                className="absolute inset-0 rounded-full -rotate-5 group-hover:rotate-5 transition-transform duration-300"
                style={{
                    border: `1px solid ${borderColor}`
                }}
            />
            {text}
        </button>
    );
};
