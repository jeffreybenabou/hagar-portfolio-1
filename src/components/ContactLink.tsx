import React from "react";

interface ContactLinkProps {
    href: string;
    icon: string;
    alt: string;
    isExternal?: boolean;
}

export const ContactLink: React.FC<ContactLinkProps> = ({href, icon, alt, isExternal = false}) => {
    const commonProps = {
        href,
        className: "flex items-center justify-center"
    };

    const externalProps = isExternal ? {
        target: "_blank",
        rel: "noopener noreferrer"
    } : {};

    return (
        <a {...commonProps} {...externalProps}>
            <img src={icon} alt={alt} className="w-6 h-6"/>
        </a>
    );
};
