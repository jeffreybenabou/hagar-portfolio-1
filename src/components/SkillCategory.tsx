import React from 'react';
import {SkillTag} from './SkillTag';

interface SkillItem {
    name: string;
    icon?: string;
}

interface SkillCategoryProps {
    title: string;
    skills: (string | SkillItem)[];
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({title, skills}) => {
    const validSkills = skills.filter(skill => {
        if (typeof skill === 'string') {
            return skill.trim().length > 0;
        }
        return skill.name.trim().length > 0;
    });

    if (validSkills.length === 0) return null;

    return (
        <div className="flex flex-col items-start gap-[15px] sm:gap-[21px] flex-1 text-left">
            <h3 className="text-[18px] sm:text-[20px] font-semibold leading-normal text-black">
                {title}
            </h3>
            <div className="flex flex-wrap gap-2 w-full">
                {validSkills.map((skill, index) => {
                    // Handle line breaks (empty strings)
                    if (typeof skill === 'string' && skill.trim() === '') {
                        return <div key={index} className="w-full"/>;
                    }

                    // Handle string skills
                    if (typeof skill === 'string') {
                        return <SkillTag key={index} name={skill}/>;
                    }

                    // Handle object skills with icons
                    return (
                        <SkillTag
                            key={index}
                            name={skill.name}
                            icon={skill.icon}
                        />
                    );
                })}
            </div>
        </div>
    );
};
