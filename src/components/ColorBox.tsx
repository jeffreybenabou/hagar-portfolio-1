import React from "react";

interface ColorBoxProps {
    color: string;
    className?: string;
    index?: number;
}

export const ColorBox: React.FC<ColorBoxProps> = ({color, className = "", index = 0}) => {
    const isTextOnLeft = index % 2 === 1;

    return (
        <div className={`flex items-end ${className}`}>
            {/* Conditionally render text on left if index % 2 === 1 */}
            {isTextOnLeft && (
                <span
                    className="text-black font-inter text-[16px] font-medium leading-normal px-3 h-[31px] flex items-center rounded-[30px] border-[0.5px] border-[#EBEEF0] bg-white -mr-5 z-10 mb-3">
                    {color.toUpperCase()}
                </span>
            )}

            {/* Color display box */}
            <div
                className="w-[78.083px] h-[78.083px] rounded-[15px] bg-[#E1E1E1]"
                style={{
                    backgroundColor: color,
                    boxShadow: '-4px 6px 16.6px -4px rgba(0, 0, 0, 0.08)'
                }}
            />

            {/* Conditionally render text on right if index % 2 === 0 */}
            {!isTextOnLeft && (
                <span
                    className="text-black font-inter text-[16px] font-medium leading-normal px-3 h-[31px] flex items-center rounded-[30px] border-[0.5px] border-[#EBEEF0] bg-white -ml-5 z-10 mb-3">
                    {color.toUpperCase()}
                </span>
            )}
        </div>
    );
};
