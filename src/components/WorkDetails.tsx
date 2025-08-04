import React, {useEffect} from "react";
import {WorkInterface} from "./Content";
import {Personas} from "./Personas";
import {AppScreenshots} from "./AppScreenshots";
import {ColorPalettes} from "./ColorPalettes";
import {Footer} from "../Footer";
import {PortfolioButton} from "./PortfolioButton";


interface WorkDetailsProps {
    work: WorkInterface;
    onClose: () => void;
}

// Data for design process sections
const DESIGN_PROCESS_SECTIONS = [
    {
        title: "Research & UX Development",
        items: [
            "User and target audience research",
            "Defining the user experience concept",
            "Wireframe creation"
        ]
    },
    {
        title: "UI Design",
        items: [
            "Visual design language",
            "Screen and icon design"
        ]
    },
    {
        title: "Testing & Improvements",
        items: [
            "Usability testing",
            "Optimization",
            "Feedback and review"
        ]
    }
];

// Component for the close button
const CloseButton: React.FC<{ onClose: () => void }> = ({onClose}) => (
    <button
        onClick={onClose}
        className="sticky top-0 left-0 m-4 text-black font-semibold py-2 px-4 rounded-full border border-black bg-white z-[101]"
    >
        Close
    </button>
);

// Component for work header information
const WorkHeader: React.FC<{ work: WorkInterface }> = ({work}) => (
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
);

// Component for the main work image with button
const WorkMainImage: React.FC<{ work: WorkInterface }> = ({work}) => (
    <div
        className="relative w-full aspect-square mt-[100px] sm:mt-[200px] rounded-[20px] sm:rounded-[30px] bg-lightgray bg-cover bg-no-repeat bg-center"
        style={{
            backgroundImage: `url(${work.mainImagePath})`,
        }}
    >
        {work.figmaLink && (
            <div className="absolute bottom-[-30px] left-4 sm:left-8 lg:left-20">
                <PortfolioButton
                    onClick={() => window.open(work.figmaLink, "_blank")}
                    backgroundColor="#000000"
                    text="See in Figma"
                    width="150px"
                    height="50px"
                    className="sm:w-[196px] sm:h-[60px] text-[14px] sm:text-[17px]"
                />
            </div>
        )}
    </div>
);

// Component for design process section header
const DesignProcessHeader: React.FC<{ work: WorkInterface }> = ({work}) => (
    <div className="flex flex-col sm:flex-row items-start justify-between w-full mt-[200px] px-4 sm:px-0">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-12 w-full">
            <h2 className="text-black font-inter text-[24px] sm:text-[40px] font-bold leading-[1] mb-4 sm:mb-0 sm:min-w-fit">
                The Design Process
            </h2>
            <p className="text-black font-inter text-[16px] sm:text-[17px] font-normal leading-normal sm:flex-1 max-w-140">
                {work.designProcessDescription.split('<br/>').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        {index < work.designProcessDescription.split('<br/>').length - 1 && <br/>}
                    </React.Fragment>
                ))}
            </p>
        </div>
    </div>
);

// Component for individual design process section
const DesignProcessSection: React.FC<{
    title: string;
    items: string[];
}> = ({title, items}) => (
    <div
        className="flex-1 rounded-[20px] bg-[rgba(249,250,251,0.66)] p-6"
        style={{backdropFilter: "blur(29.549999237060547px)"}}
    >
        <h3 className="text-black font-inter text-[20px] font-bold leading-normal mb-6">
            {title}
        </h3>
        <ul className="space-y-2">
            {items.map((item, index) => (
                <li
                    key={index}
                    className="text-black font-inter text-[17px] font-normal leading-[25px]"
                >
                    • {item}
                </li>
            ))}
        </ul>
    </div>
);

// Component for all design process sections
const DesignProcessSections: React.FC = () => (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full mt-[70px] px-4 sm:px-0">
        {DESIGN_PROCESS_SECTIONS.map((section, index) => (
            <DesignProcessSection
                key={index}
                title={section.title}
                items={section.items}
            />
        ))}
    </div>
);

// Main content component
const WorkContent: React.FC<{ work: WorkInterface }> = ({work}) => (
    <>
        <div className="flex flex-col items-start w-full px-4 sm:px-8 md:px-20 lg:px-30 py-12">
            <WorkHeader work={work}/>
            <WorkMainImage work={work}/>
            <DesignProcessHeader work={work}/>
            <DesignProcessSections/>
            <Personas personaData={work.personaData}/>
            <AppScreenshots screenshot={work.screenshot}/>
            <ColorPalettes
                explanation={work.colorPalette?.explanation}
                colors={work.colorPalette?.colors}/>
            <AppScreenshots screenshot={work.realScreenShot}/>

        </div>

    </>

);

export const WorkDetails: React.FC<WorkDetailsProps> = ({work, onClose}) => {
    useEffect(() => {
        // Disable scrolling on the body when the component is mounted
        document.body.classList.add("no-scroll");


        // Re-enable scrolling on the body when the component is unmounted
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, []);

    return (
        <div className="fixed bg-white z-[100] flex flex-col flex-1 justify-start overflow-y-auto"
             style={{
                 top: "0",
                 bottom: "0",
             }}>
            <CloseButton onClose={onClose}/>
            <WorkContent work={work}/>
            <Footer/>

        </div>

    );
};
