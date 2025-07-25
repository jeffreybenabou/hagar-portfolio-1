import React from "react";

interface TextBoxProps {
    children?: React.ReactNode;
    bulletPoints?: string[];
    title?: string;
    className?: string;
    bulletClassName?: string;
}

export const TextBox: React.FC<TextBoxProps> = ({
                                                    children,
                                                    bulletPoints,
                                                    title,
                                                    className = "",
                                                    bulletClassName = ""
                                                }) => {
    return (
        <div
            className={`rounded-[15px] bg-[rgba(249,250,251,0.66)] px-3 py-2 w-auto max-w-[304px] ${className}`}
            style={{backdropFilter: "blur(29.200000762939453px)"}}
        >
            {title && (
                <h3 className="text-black font-inter text-[20px] font-bold leading-normal mb-2">
                    {title}
                </h3>
            )}
            {bulletPoints ? (
                <ul className="space-y-1">
                    {bulletPoints.map((point, index) => (
                        <li key={index} className={`w-max flex items-start gap-2 ${bulletClassName}`}>
                            <span
                                className="text-black font-inter text-[14px] font-normal leading-[20px] mt-0.5">•</span>
                            <span className="text-black font-inter text-[14px] font-normal leading-[20px] max-w-100">
                                {point}
                            </span>
                        </li>
                    ))}
                </ul>
            ) : (
                children
            )}
        </div>
    );
};
