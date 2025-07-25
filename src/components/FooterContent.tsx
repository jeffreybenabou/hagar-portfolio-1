import React from "react";

interface FooterContentProps {
    title: string;
    description: string;
    email: string;
}

export const FooterContent: React.FC<FooterContentProps> = ({title, description, email}) => {
    return (
        <>
            <h2 className="text-white font-inter text-[40px] font-bold leading-normal">
                {title}
            </h2>

            <p className="text-white font-inter text-[17px] font-normal leading-normal">
                {description}
                <br/>
                Feel free to reach out via WhatsApp or email me at{" "}
                <span className="font-bold">{email}</span>
            </p>
        </>
    );
};
