import * as React from 'react';
import { BlurredBackground } from './BlurredBackground';

// Types
interface Tool {
    name: string;
    icon?: string;
}

interface SkillsData {
    uxUiDesign: string[];
    tools: Tool[];
}

// Constants
const SKILLS_DATA: SkillsData = {
  uxUiDesign: [
    'User experience (UX)',
    'User interface (UI)',
    'Prototyping',
    '', // Line break
    'Wireframing',
    'Design Systems',
    'User Research',
    '', // Line break
    'UI animations',
    'Information Architecture',
  ],
  tools: [
    { name: 'Figma', icon: './figma.svg' },
    { name: 'Illustrator', icon: './AI.svg' },
    { name: 'Photoshop', icon: './PS.svg' },
    { name: '' }, // Line break
    { name: 'DUDA' },
    { name: 'Wix', icon: './WIX.svg' },
    { name: 'Elementor', icon: './elemntor.svg' },
    { name: 'Ai' },
    { name: '' }, // Line break
    { name: 'XD', icon: './XD.svg' },
    { name: 'WordPress', icon: './WP.svg' },
  ],
};

// Shared styles
const SKILL_TAG_CLASSES = 'flex items-center gap-2 p-[10px] rounded-[10px] border border-[#EBEEF0] bg-[#FFF] text-sm font-medium text-black font-inter text-[15px] sm:text-[17px] font-normal leading-normal';

// Helper Components
const SkillTag: React.FC<{ skill: string }> = ({ skill }) => (
  <span className={SKILL_TAG_CLASSES}>
    {skill}
  </span>
);

const ToolTag: React.FC<{ tool: Tool }> = ({ tool }) => (
  <span className={SKILL_TAG_CLASSES}>
    {tool.icon && (
      <img
        src={tool.icon}
        alt={tool.name}
        className="w-5 h-5 sm:w-6 sm:h-6"
      />
    )}
    {tool.name}
  </span>
);

const LineBreak: React.FC = () => <div className="w-full"/>;

// Skill Category Component
const SkillCategory: React.FC<{
    title: string;
    children: React.ReactNode;
}> = ({ title, children }) => (
  <div className="flex flex-col items-start gap-[15px] sm:gap-[21px] flex-1 text-left">
    <p className="text-[18px] sm:text-[20px] font-semibold leading-normal text-black">
      {title}
    </p>
    <div className="flex flex-wrap gap-2 w-full">
      {children}
    </div>
  </div>
);

// Main Skills Component
export const Skills: React.FC = () => {
  const renderUXUISkills = () => {
    return SKILLS_DATA.uxUiDesign.map((skill, index) => {
      if (skill.length === 0) {
        return <LineBreak key={index}/>;
      }
      return <SkillTag key={index} skill={skill}/>;
    });
  };

  const renderToolSkills = () => {
    return SKILLS_DATA.tools.map((tool, index) => {
      if (tool.name.length === 0) {
        return <LineBreak key={index}/>;
      }
      return <ToolTag key={index} tool={tool}/>;
    });
  };

  return (
    <section
      className="rounded-[40px] bg-[#fbfbfc] flex mx-auto max-w-full h-auto px-[30px] py-[30px] sm:px-[90px] sm:py-[60px] sm:mx-[150px] sm:h-[388px] flex-col items-start gap-[10px]"
      style={{ backdropFilter: 'blur(29.25px)' }}>
      <h2 className="text-black font-inter text-[30px] sm:text-[40px] font-bold leading-normal">
                MY SKILLS
      </h2>
      <div className="flex flex-col sm:flex-row items-start gap-[20px] sm:gap-[77px] w-full">
        <div
          className="flex flex-col sm:flex-row items-start justify-between gap-[20px] sm:gap-[77px] self-stretch flex-1">
          <SkillCategory title="UX&UI DESIGN">
            {renderUXUISkills()}
          </SkillCategory>

          <SkillCategory title="TOOLS">
            {renderToolSkills()}
          </SkillCategory>
        </div>

      </div>
      <BlurredBackground top={'100%'} backgroundType={'teal'}/>
    </section>
  );
};
