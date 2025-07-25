import React from "react";

interface SectionHeaderProps {
    title: string;
    description: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({title, description}) => {
    return (
        <div className="flex flex-col sm:flex-row items-start justify-between w-full mb-16">
            <div className="flex flex-col sm:flex-row sm:items-start sm:gap-12 w-full">
                <h2 className="text-black font-inter text-[24px] sm:text-[40px] font-bold leading-[1] mb-4 sm:mb-0 sm:min-w-fit">
                    {title}
                </h2>
                <p className="text-black font-inter text-[16px] sm:text-[17px] font-normal leading-normal sm:flex-1">
                    {description}
                </p>
            </div>
        </div>
    );
};
