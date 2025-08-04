import React from "react";
import {ColorBox} from "./ColorBox";

interface ColorPalettesProps {
    colors?: string[];
    explanation?: string;
}

export const ColorPalettes: React.FC<ColorPalettesProps> = ({colors = [], explanation}) => {
    // Split colors into different sections
    const topColor = colors[0];
    const sideColors = colors.slice(1, 3); // Next 2 colors for sides
    const bottomColors = colors.slice(3); // Remaining colors for bottom

    return (
        <div className="w-full mt-[200px] px-4 sm:px-0">
            <div className="flex flex-col gap-6">
                <h2 className="text-black font-inter text-[24px] sm:text-[40px] font-bold leading-normal">
                    Color Palette
                </h2>

                {/* Top color */}
                {topColor && (
                    <div className="flex justify-center">
                        <ColorBox color={topColor} index={0}/>
                    </div>
                )}

                {/* Side colors */}
                {sideColors.length > 0 && (
                    <div className="flex justify-between">
                        {sideColors.map((color, index) => (
                            <ColorBox key={index} color={color} index={index + 1}/>
                        ))}
                    </div>
                )}

                {/* Explanation in the middle */}
                {explanation && (
                    <div className="flex justify-center">
                        <p className="text-black font-inter text-[16px] sm:text-[17px] font-normal leading-normal max-w-140 text-center">
                            {explanation}
                        </p>
                    </div>
                )}

                {/* Bottom colors */}
                {bottomColors.length > 0 && (
                    <div className="flex justify-evenly items-start">
                        {/* Left side - all colors except the last one in two lines */}
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-4">
                                {bottomColors.slice(0, -1).slice(0, Math.ceil((bottomColors.length - 1) / 2)).map((color, index) => (
                                    <ColorBox key={index + 3} color={color} index={index + 3}/>
                                ))}
                            </div>
                            {bottomColors.slice(0, -1).length > Math.ceil((bottomColors.length - 1) / 2) && (
                                <div className="flex gap-4 ml-16">
                                    {bottomColors.slice(0, -1).slice(Math.ceil((bottomColors.length - 1) / 2)).map((color, index) => (
                                        <ColorBox key={index + 3 + Math.ceil((bottomColors.length - 1) / 2)}
                                                  color={color}
                                                  index={index + 3 + Math.ceil((bottomColors.length - 1) / 2)}/>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Right side - last color */}
                        {bottomColors.length > 0 && (
                            <ColorBox color={bottomColors[bottomColors.length - 1]} index={colors.length - 1}/>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
