import React from 'react';

export type BackgroundType = 'pink' | 'teal';

const BACKGROUND_COLORS: Record<BackgroundType, string> = {
    pink: 'rgba(255, 111, 181, 0.17)',
    teal: 'rgba(85, 216, 193, 0.14)'
};

interface BlurredBackgroundProps {
    backgroundType?: BackgroundType;
    width?: number;
    height?: number;
    borderRadius?: number;
    blur?: number;
    top?: string;
    left?: string;
    transform?: string;
    zIndex?: number;
    className?: string;
}

export const BlurredBackground: React.FC<BlurredBackgroundProps> = ({
                                                                        backgroundType = 'pink',
                                                                        width = 448,
                                                                        height = 448,
                                                                        borderRadius = 448,
                                                                        blur = 62.900001525878906,
                                                                        top = '50%',
                                                                        left = '0%',
                                                                        transform = 'translate(-50%, -50%)',
                                                                        zIndex = -1,
                                                                        className = 'absolute pointer-events-none'
                                                                    }) => {
    return (
        <div
            className={className}
            style={{
                width: `${width}px`,
                height: `${height}px`,
                borderRadius: `${borderRadius}px`,
                background: BACKGROUND_COLORS[backgroundType],
                filter: `blur(${blur}px)`,
                flexShrink: 0,
                top,
                left,
                transform,
                zIndex,
            }}
        />
    );
};
