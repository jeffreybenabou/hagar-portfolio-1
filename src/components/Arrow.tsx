import React from "react";

interface ArrowProps {
    src: string;
    alt: string;
    className?: string;
}

export const Arrow: React.FC<ArrowProps> = ({src, alt, className = ""}) => {
    return (
        <img
            src={src}
            alt={alt}
            className={`max-w-full h-auto object-contain z-1000 ${className}`}
            onError={(e) => {
                console.error('Arrow failed to load:', src);
                console.log('Arrow element:', e.target);
            }}
        />
    );
};
