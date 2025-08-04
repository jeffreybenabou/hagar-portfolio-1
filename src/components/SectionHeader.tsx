import React from "react";

interface SectionHeaderProps {
    title: string;
    description: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({title, description}) => {
    return (
        <div className="flex flex-col items-start justify-between w-full mb-16">
            <div className="flex flex-col w-full">
                <h2 className="text-black font-inter text-[24px] sm:text-[40px] font-bold leading-[1] mb-4">
                    {title}
                </h2>
                <p className="text-black font-inter text-[16px] sm:text-[17px] font-normal leading-normal">
                    {description}
                </p>
            </div>
        </div>
    );
};
