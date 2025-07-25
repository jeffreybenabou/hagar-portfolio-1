import React from "react";

interface ScreenshotCardProps {
    screenshot: string;
    index: number;
}

export const ScreenshotCard: React.FC<ScreenshotCardProps> = ({screenshot, index}) => {
    return (
        <div className="relative group cursor-pointer">
            <div
                className="aspect-[9/16] overflow-hidden bg-lightgray shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{
                    borderRadius: '25px',
                    background: `url(${screenshot}) lightgray 50% / cover no-repeat`
                }}
            >
            </div>

            {/* Screenshot overlay with number */}
            <div
                className="absolute top-4 left-4 bg-black bg-opacity-70 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                {index + 1}
            </div>
        </div>
    );
};
