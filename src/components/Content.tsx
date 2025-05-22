import {useState} from "react";
import {WorkDetails} from "./WorkDetails";

export interface WorkInterface {
    title: string,
    iconPath: string,
    description: string,
    mainImagePath: string,
    figmaLink: string,
    designProcess: string,
    personas: { name: string, age: string, education: string }
}

export interface ImageInterface {
    src: string,
    tags: string[],
    name: string,
    workItem: WorkInterface
}

export const Content = () => {


    const [images] = useState<ImageInterface[]>([
        {
            src: "./work1.png",
            tags: ["UI Design", "Web"],
            name: "Project One",
            workItem: {
                title: "Mobile Design",
                iconPath: "./effitask.svg",
                description: `EffiTask is a smart task management app that lets you create, share,<br/>and manage tasks effortlessly. It features customizable categories,<br/>built-in chat, task sharing with friends, image and description<br/>attachments, participant management, and deadline scheduling—all<br/>in one place for an efficient and seamless experience.`,
                mainImagePath: "./work1.png",
                figmaLink: "https://figma.com/project-one",
                designProcess: "Design process details for Project One",
                personas: {name: "John Doe", age: "28", education: "Bachelor's in Design"}
            }
        },
        {
            src: "./public/work1.png",
            tags: ["UX", "Mobile"],
            name: "Project Two",
            workItem: {
                title: "Mobile Design",
                iconPath: "/path/to/icon2.png",
                description: "Description for Project Two",
                mainImagePath: "./public/mainImage2.png",
                figmaLink: "https://figma.com/project-two",
                designProcess: "Design process details for Project Two",
                personas: {name: "Jane Smith", age: "32", education: "Master's in UX Design"}
            }
        },
        {
            src: "/path/to/image3.jpg",
            tags: ["Branding", "Logo"],
            name: "Project Three",
            workItem: {
                title: "Branding",
                iconPath: "./effitask.svg",
                description: "Description for Project Three",
                mainImagePath: "/path/to/mainImage3.jpg",
                figmaLink: "https://figma.com/project-three",
                designProcess: "Design process details for Project Three",
                personas: {name: "Alice Johnson", age: "25", education: "Diploma in Graphic Design"}
            }
        },
    ]);

    const [selectedWork, setSelectedWork] = useState<ImageInterface>(null);

    return (
        <>
            {selectedWork && (
                <WorkDetails work={selectedWork.workItem} onClose={() => setSelectedWork(null)}/>
            )}
            <section
                id="portfolio"
                className="w-full sm:px-[150px] px-6 py-12 mt-[150px]"
            >
                <h2 className="text-3xl sm:text-4xl font-bold mb-[65px] text-left">MY WORK</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedWork(image)}
                            className="cursor-pointer"
                        >
                            <div
                                className="w-full h-auto transition-all duration-[10ms] ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] rounded-[30px] overflow-hidden bg-gray-300 aspect-[3/2]"
                            >
                                <img
                                    src={image.src}
                                    alt={image.name}
                                    className="w-full h-full object-cover transition-transform duration-[100ms] ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] hover:scale-105"
                                />
                            </div>
                            <div className="mt-2 text-[17px] font-normal text-black leading-normal font-inter">
                                {image.tags.join(" ∙ ")}
                            </div>
                            <div
                                className="mt-2 text-[32px] font-bold text-black leading-normal font-inter relative group hover:scale-105 transition-transform duration-300 inline-block">
                                {image.name}
                                <div
                                    className="absolute bottom-0 left-0 h-[2px] bg-black w-0 transition-all duration-300 ease-out group-hover:w-full"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};
