import React from "react";

interface ScreenshotCardProps {
    screenshot: string;
}

export const ScreenshotCard: React.FC<ScreenshotCardProps> = ({screenshot}) => {
    return (
        <div className="relative group cursor-pointer">
            <div
                className=" overflow-hidden bg-lightgray shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-[25px]"
            >
                <img
                    src={screenshot}
                    alt="App screenshot"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        console.error('Screenshot failed to load:', screenshot);
                        console.log('Image element:', e.target);
                    }}
                />
            </div>
        </div>
    );
};
