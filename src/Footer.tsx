import React from "react";
import {FooterContent} from "./components/FooterContent";
import {ContactLinks} from "./components/ContactLinks";

// Footer content data
const FOOTER_DATA = {
    title: "Let's work together",
    description: "If you have a project or a job opportunity in mind, I'd love to hear from you.",
    email: "hagar.ifrah94@gmail.com"
};

// Contact links data
const CONTACT_LINKS = [
    {
        href: "https://api.whatsapp.com/send?phone=972523080322",
        icon: "whatsapp.svg",
        alt: "WhatsApp",
        isExternal: true
    },
    {
        href: "mailto:hagar.ifrah94@gmail.com",
        icon: "message.svg",
        alt: "Email",
        isExternal: false
    }
];

export const Footer = () => {
    return (
        <section id="contact">
            <footer
                className="w-full bg-[#212121] flex flex-col justify-center items-center gap-[33px] p-6 sm:p-[64px_366px] min-h-[354px] text-center">
                <FooterContent
                    title={FOOTER_DATA.title}
                    description={FOOTER_DATA.description}
                    email={FOOTER_DATA.email}
                />

                <ContactLinks links={CONTACT_LINKS}/>
            </footer>
        </section>
    );
};
