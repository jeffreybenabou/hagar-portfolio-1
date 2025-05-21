export const Footer = () => {
    return (
        <section id={"contact"}
        >
            <footer
                id="contact"
                className="w-full bg-[#212121] flex flex-col justify-center items-center gap-[33px] p-6 sm:p-[64px_366px] min-h-[354px] text-center"
            >
                <h2
                    className="text-white font-inter text-[40px] font-bold leading-normal"
                >
                    Let’s work together
                </h2>

                <p
                    className="text-white font-inter text-[17px] font-normal leading-normal"
                >
                    If you have a project or a job opportunity in mind, I’d love to hear from you.
                    <br/>
                    Feel free to reach out via WhatsApp or email me at <span
                    className="font-bold">hagar.ifrah94@gmail.com</span>
                </p>


                <div className="flex flex-row gap-4">
                    {/* WhatsApp Icon */}
                    <a
                        href="https://api.whatsapp.com/send?phone=972523080322"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                    >
                        <img src="/whatsapp.svg" alt="WhatsApp" className="w-6 h-6"/>
                    </a>

                    {/* Email Icon */}
                    <a
                        href="mailto:hagar.ifrah94@gmail.com"
                        className="flex items-center justify-center"
                    >
                        <img src="/message.svg" alt="Email" className="w-6 h-6"/>
                    </a>
                </div>
            </footer>
        </section>

    );
};
