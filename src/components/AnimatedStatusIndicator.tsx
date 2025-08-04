import React from 'react';

export const AnimatedStatusIndicator: React.FC = () => {
    return (
        <>
            <div
                className="w-3 h-3 bg-green-500 rounded-full"
                style={{
                    animation: "blink 1.5s infinite",
                }}
            />
            <style>
                {`
                    @keyframes blink {
                        0%, 100% {
                            box-shadow: 0 0 0 0 rgba(0, 255, 0, 0.5);
                        }
                        50% {
                            box-shadow: 0 0 10px 5px rgba(0, 255, 0, 0.3);
                        }
                    }
                `}
            </style>
        </>
    );
};
