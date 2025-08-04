import {BlurredBackground} from './BlurredBackground';
import {ProfileImage} from './ProfileImage';
import {PortfolioButton} from './PortfolioButton';

export const HomeSection = () => {
    const handleScrollToPortfolio = () => {
        const portfolioSection = document.getElementById("portfolio");
        if (portfolioSection) {
            portfolioSection.scrollIntoView({behavior: "smooth"});
        }
    };

    return (
        <section
            id="home"
            className="relative px-6 py-12 mt-[130px] mx-0 sm:mx-[150px] sm:mr-[150px]"
        >
            {/* Background Effect */}
            <BlurredBackground/>

            <div className="flex flex-col sm:flex-row items-center">
                {/* Text Column */}
                <div className="flex-1 flex flex-col gap-4 text-center sm:text-left">
                    <h2 className="text-[20px] font-normal leading-normal text-black flex items-center gap-2 font-inter">
                        Hi<img src="wave.svg" alt="Wave" className="w-6 h-6"/>, I am
                    </h2>

                    <h1 className="text-[73px] font-bold leading-normal text-black font-inter">
                        HAGAR IFRAH
                    </h1>

                    <p className="text-[20px] font-normal leading-normal text-black font-inter">
                        UX/UI designer passionate about transforming<br/>
                        challenges into smart, user-centered solutions<br/>
                        with clean and intuitive interface design.
                    </p>

                    <div className="flex flex-col items-center sm:items-start mt-6">
                        <PortfolioButton
                            onClick={handleScrollToPortfolio}
                            backgroundColor="#000000"

                        />
                    </div>
                </div>

                {/* Image Column */}
                <div className="flex-1 flex flex-col items-center mt-6 sm:mt-0">
                    <ProfileImage
                        imageSrc="designer_image@2x.png"
                        imageAlt="Portfolio Illustration"
                    />
                </div>
            </div>
        </section>
    );
};
