import React from 'react';

interface TitleSubtitlePair {
    title: string;
    subtitle: string;
}

interface TextBoxWithTitleProps {
    mainTitle: string;
    titleSubtitlePairs: TitleSubtitlePair[];
    className?: string;
}

export const TextBoxWithTitle: React.FC<TextBoxWithTitleProps> = ({ mainTitle, titleSubtitlePairs, className = '' }) => {
  return (
    <div
      className={`rounded-[15px] bg-[rgba(249,250,251,0.66)] px-6 py-4 w-[435px] ${className} z-0`}
      style={{ backdropFilter: 'blur(29.200000762939453px)' }}
    >
      <div className="text-[#F95D8C] font-inter text-[30px] font-bold leading-normal mb-3 whitespace-nowrap z-0">
        {mainTitle}
      </div>
      <div className="flex flex-col gap-2">
        {titleSubtitlePairs.map((pair, index) => (
          <div key={index} className="text-black font-inter text-[14px] leading-[20px]">
            <span className="font-bold whitespace-nowrap">
              {pair.title}:
            </span>{' '}
            <span className="font-normal">
              {pair.subtitle}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
