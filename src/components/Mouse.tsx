import React from 'react';

interface MouseProps {
    className?: string;
}

export const Mouse: React.FC<MouseProps> = ({className = ''}) => {
    return (
        <div className={`w-full flex justify-center mt-[70px] mb-[70px] ${className}`}>
            <div className="relative inline-block">
                {/* Mouse Container */}
                <img
                    src="mouse_container.svg"
                    alt="Mouse Container"
                    className="relative z-10 w-[27px] h-[41px]"
                />

                {/* Animated Mouse Button */}
                <div className="absolute top-[10px] right-1/4 transform -translate-x-1/2 z-20">
                    <img
                        src="mouse_button.svg"
                        alt="Mouse Button"
                        className="w-[5px] h-[11px] animate-mouse-scroll"
                    />
                </div>

                {/* CSS Animation */}
                <style>
                    {`
                        @keyframes mouse-scroll {
                            0% {
                                transform: translateX(-50%) translateY(0px);
                                opacity: 1;
                            }
                            12.5% {
                                transform: translateX(-50%) translateY(4px);
                                opacity: 0.8;
                            }
                            25% {
                                transform: translateX(-50%) translateY(8px);
                                opacity: 0.6;
                            }
                            37.5% {
                                transform: translateX(-50%) translateY(12px);
                                opacity: 0.4;
                            }
                            50% {
                                transform: translateX(-50%) translateY(16px);
                                opacity: 0.2;
                            }
                            62.5% {
                                transform: translateX(-50%) translateY(12px);
                                opacity: 0.4;
                            }
                            75% {
                                transform: translateX(-50%) translateY(8px);
                                opacity: 0.6;
                            }
                            87.5% {
                                transform: translateX(-50%) translateY(4px);
                                opacity: 0.8;
                            }
                            100% {
                                transform: translateX(-50%) translateY(0px);
                                opacity: 1;
                            }
                        }
                        
                        .animate-mouse-scroll {
                            animation: mouse-scroll 1.5s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
                        }
                    `}
                </style>
            </div>
        </div>
    );
};
