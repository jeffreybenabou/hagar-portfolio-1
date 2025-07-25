import React from "react";
import {ContactLink} from "./ContactLink";

interface ContactLinksProps {
    links: Array<{
        href: string;
        icon: string;
        alt: string;
        isExternal?: boolean;
    }>;
}

export const ContactLinks: React.FC<ContactLinksProps> = ({links}) => {
    return (
        <div className="flex flex-row gap-4">
            {links.map((link, index) => (
                <ContactLink
                    key={index}
                    href={link.href}
                    icon={link.icon}
                    alt={link.alt}
                    isExternal={link.isExternal}
                />
            ))}
        </div>
    );
};
