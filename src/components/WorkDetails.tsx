import React, {useEffect} from "react";
import {WorkInterface} from "./Content";


interface WorkDetailsProps {
    work: WorkInterface;
    onClose: () => void;
}

export const WorkDetails: React.FC<WorkDetailsProps> = ({work, onClose}) => {
    useEffect(() => {
        // Disable scrolling on the body when the component is mounted
        document.body.classList.add("no-scroll");


        // Re-enable scrolling on the body when the component is unmounted
        return () => {
            console.log("Asfasfasfasfasf")
            document.body.classList.remove("no-scroll");
        };
    }, []);

    console.log("workwork", work)
    return (
        <section
            className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-start overflow-y-auto"
            style={{
                top: "0",
                bottom: "0",
            }}
        >
            <button
                onClick={onClose}
                className="sticky top-0 left-0 m-4 text-black font-semibold py-2 px-4 rounded-full border border-black bg-white z-[101]"
            >
                Close
            </button>

            <div className="flex flex-col items-start w-full px-4 sm:px-8 md:px-20 lg:px-80 py-12">

                <div className="flex flex-col items-start gap-5">
                    <p className="text-black font-inter text-[15px] sm:text-[17px] font-normal leading-normal">
                        {work.title}
                    </p>
                    <img src={work.iconPath} alt="Icon"/>
                    <p className="text-black font-inter text-[18px] sm:text-[20px] font-normal leading-normal">
                        {work.description.split('<br/>').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br/>
                            </React.Fragment>
                        ))}
                    </p>
                    <hr/>
                </div>

                <div
                    className="relative w-full aspect-square mt-[100px] sm:mt-[200px] rounded-[20px] sm:rounded-[30px] bg-lightgray bg-cover bg-no-repeat bg-center"
                    style={{
                        backgroundImage: `url(${work.mainImagePath})`,
                    }}>
                    {work.figmaLink && (
                        <div className="absolute bottom-[-30px] left-4 sm:left-8 lg:left-20">
                            <button
                                onClick={() => window.open(work.figmaLink, "_blank")}
                                className="relative text-white text-center font-inter text-[14px] sm:text-[17px] font-semibold leading-normal py-2 px-3 sm:px-4 rounded-full bg-black w-[150px] sm:w-[196px] h-[50px] sm:h-[60px] group"
                            >
                                <div
                                    className="absolute inset-0 border border-black rounded-full -rotate-5 group-hover:rotate-5 transition-transform duration-300"
                                ></div>
                                View Website
                            </button>
                        </div>
                    )}
                </div>

                {/* Title and Subtitle Section */}
                <div className="flex flex-col sm:flex-row items-start justify-between w-full mt-[200px] px-4 sm:px-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:gap-12 w-full">
                        <h2 className="text-black font-inter text-[24px] sm:text-[40px] font-bold leading-[1] mb-4 sm:mb-0 sm:min-w-fit">
                            The Design Process
                        </h2>
                        <p className="text-black font-inter text-[16px] sm:text-[17px] font-normal leading-normal sm:flex-1">
                            The app design process included in-depth research of the target audience to shape an
                            intuitive and user-friendly UX experience, creating wireframes for the app structure, and
                            planning a clear screen flow. Then, we developed a UI with a clean and modern design
                            language. Finally, we conducted usability testing, improvements, and optimization to launch
                            a professional and user-friendly app for task management and collaboration.
                        </p>
                    </div>
                </div>

                {/* Three Sections in Row */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full mt-[70px] px-4 sm:px-0">
                    {/* Section 1 */}
                    <div className="flex-1 rounded-[20px] bg-[rgba(249,250,251,0.66)] p-6"
                         style={{backdropFilter: "blur(29.549999237060547px)"}}>
                        <h3 className="text-black font-inter text-[20px] font-bold leading-normal mb-6">
                            Research & Analysis
                        </h3>
                        <ul className="space-y-2">
                            <li className="text-black font-inter text-[17px] font-normal leading-[25px]">
                                • Conducted user interviews to understand pain points and needs
                            </li>
                            <li className="text-black font-inter text-[17px] font-normal leading-[25px]">
                                • Analyzed competitor apps and market trends
                            </li>
                            <li className="text-black font-inter text-[17px] font-normal leading-[25px]">
                                • Created user personas and journey maps
                            </li>
                        </ul>
                    </div>

                    {/* Section 2 */}
                    <div className="flex-1 rounded-[20px] bg-[rgba(249,250,251,0.66)] p-6"
                         style={{backdropFilter: "blur(29.549999237060547px)"}}>
                        <h3 className="text-black font-inter text-[20px] font-bold leading-normal mb-6">
                            Design & Prototyping
                        </h3>
                        <ul className="space-y-2">
                            <li className="text-black font-inter text-[17px] font-normal leading-[25px]">
                                • Developed wireframes and low-fidelity prototypes
                            </li>
                            <li className="text-black font-inter text-[17px] font-normal leading-[25px]">
                                • Created a comprehensive design system and style guide
                            </li>
                            <li className="text-black font-inter text-[17px] font-normal leading-[25px]">
                                • Built high-fidelity mockups and interactive prototypes
                            </li>
                        </ul>
                    </div>

                    {/* Section 3 */}
                    <div className="flex-1 rounded-[20px] bg-[rgba(249,250,251,0.66)] p-6"
                         style={{backdropFilter: "blur(29.549999237060547px)"}}>
                        <h3 className="text-black font-inter text-[20px] font-bold leading-normal mb-6">
                            Testing & Validation
                        </h3>
                        <ul className="space-y-2">
                            <li className="text-black font-inter text-[17px] font-normal leading-[25px]">
                                • Conducted usability testing with target users
                            </li>
                            <li className="text-black font-inter text-[17px] font-normal leading-[25px]">
                                • Gathered feedback and iterated on design solutions
                            </li>
                            <li className="text-black font-inter text-[17px] font-normal leading-[25px]">
                                • Validated final design with stakeholders and users
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </section>
    );
};
