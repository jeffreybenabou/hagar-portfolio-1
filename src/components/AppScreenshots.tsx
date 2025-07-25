import React from "react";
import {SectionHeader} from "./SectionHeader";
import {ScreenshotCard} from "./ScreenshotCard";

interface AppScreenshotsProps {
    screenshots?: string[];
}

// Default screenshots data
const DEFAULT_SCREENSHOTS = [
    "/work1.png",
    "/work1.png",
    "/work1.png"
];

// Section content data
const SECTION_DATA = {
    title: "App Screenshots",
    description: "Here are the key screens from the application showing the user interface design, user flow, and main functionality that brings the personas' needs to life."
};

export const AppScreenshots: React.FC<AppScreenshotsProps> = ({screenshots = []}) => {
    const screenshotsToShow = screenshots.length > 0 ? screenshots : DEFAULT_SCREENSHOTS;

    return (
        <div className="w-full mt-[200px] px-4 sm:px-0">
            <SectionHeader
                title={SECTION_DATA.title}
                description={SECTION_DATA.description}
            />

            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
                style={{
                    borderRadius: '25px',
                    background: 'lightgray'
                }}
            >
                {screenshotsToShow.map((screenshot, index) => (
                    <ScreenshotCard
                        key={index}
                        screenshot={screenshot}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};
