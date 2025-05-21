export const HomeSection = () => {
    return (
        <section
            id="home"
            className="px-6 py-12 mt-[150px] mx-0 sm:mx-[150px] sm:mr-[150px]"
        >
            <div className="flex flex-col sm:flex-row items-center">
                {/* Text Column */}
                <div className="flex-1 flex flex-col gap-4 text-center sm:text-left">
                    <h2
                        className="text-[20px] font-normal leading-normal text-black flex items-center gap-2"
                        style={{fontFamily: "Inter"}}
                    >
                        Hi<img src="/wave.svg" alt="Wave" className="w-6 h-6"/>,I am
                    </h2>
                    <p
                        className="text-[73px] font-bold leading-normal text-black"
                        style={{fontFamily: "Inter"}}
                    >
                        HAGAR IFRAH
                    </p>
                    <p
                        className="text-[20px] font-normal leading-normal text-black"
                        style={{fontFamily: "Inter"}}
                    >
                        UX/UI designer passionate about transforming<br/>
                        challenges into smart, user-centered solutions<br/>
                        with clean and intuitive interface design.
                    </p>
                    <div className="flex flex-col items-center sm:items-start mt-6">
                        <button
                            onClick={() => {
                                const portfolioSection = document.getElementById("portfolio");
                                if (portfolioSection) {
                                    portfolioSection.scrollIntoView({behavior: "smooth"});
                                }
                            }}
                            className="relative text-white text-center font-inter text-[17px] font-semibold leading-normal py-2 px-4 rounded-full bg-black w-[196px] h-[60px] group mx-auto sm:mx-0 mb-4 sm:mb-0"
                        >
                            <div
                                className="absolute inset-0 border border-black rounded-full -rotate-5 group-hover:rotate-5 transition-transform duration-300"
                            ></div>
                            See portfolio
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className="flex-1 flex flex-col items-center mt-6 sm:mt-0">
                    <div className="w-[270px] flex flex-col items-center">
                        <img
                            src="../public/designer_image@2x.png"
                            alt="Portfolio Illustration"
                            className="w-[270px] h-[270px] object-cover rounded-lg shadow-lg"
                        />

                        {/* Containers Below Image */}
                        <div className="w-full mt-6 flex flex-col gap-4">
                            {/* Available for freelance */}
                            {/* Available for freelance */}
                            <div
                                className="rounded-[55px] bg-white shadow-[2px_2px_36.4px_-10px_rgba(0,0,0,0.07)] flex h-[55px] p-[17px_28px] items-center justify-center gap-[10px]">
                                <div
                                    className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                                    style={{
                                        animation: "blink 1.5s infinite",
                                    }}
                                ></div>

                                <style>
                                    {`
@keyframes blink {
    0%, 100% {
        box-shadow: 0 0 0 0 rgba(0, 255, 0, 0.5);
    }
    50% {
        box-shadow: 0 0 10px 5px rgba(0, 255, 0, 0.3);
    }
}
`}
                                </style>
                                <p className="text-sm text-gray-600">Available for freelance</p>
                            </div>

                            {/* Netivot, Israel */}
                            <div
                                className="rounded-[55px] bg-white shadow-[2px_2px_36.4px_-10px_rgba(0,0,0,0.07)] flex h-[55px] p-[17px_28px] items-center justify-center gap-[10px]">
                                <img src="/flag.svg" alt="Israel Flag" className="w-6 h-4"/>
                                <p className="text-sm text-gray-600">Netivot, Israel</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
