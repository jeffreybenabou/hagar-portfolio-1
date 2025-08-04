import React from 'react';

interface SkillTagProps {
    name: string;
    icon?: string;
}

export const SkillTag: React.FC<SkillTagProps> = ({name, icon}) => {
    return (
        <span
            className="flex items-center gap-2 p-[10px] rounded-[10px] border border-[#EBEEF0] bg-white text-black font-inter text-[15px] sm:text-[17px] font-normal leading-normal">
            {icon && (
                <img
                    src={icon}
                    alt={`${name} icon`}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                />
            )}
            {name}
        </span>
    );
};
