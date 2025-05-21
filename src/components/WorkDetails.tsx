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

    return (
        <section
            className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-start overflow-y-auto"
            style={{
                top: "0", // Start from the top of the viewport
                bottom: "0", // Extend to the bottom of the viewport
            }}
        >
            <button
                onClick={onClose}
                className="sticky top-0 left-0 m-4 text-black font-semibold py-2 px-4 rounded-full border border-black bg-white z-[101]"
            >
                Close
            </button>

            <div className="flex flex-col items-start w-full px-80 md:px-50 sm:px-2 py-12">
                <h1 className="text-2xl font-bold mb-4">{work.title}</h1>
                <p className="text-gray-700 mb-6">{work.description}</p>

                <div className="flex flex-col items-start gap-5">
                    <p className="text-black font-inter text-[17px] font-normal leading-normal">
                        Mobile app
                    </p>
                    <img src={work.iconPath} alt="Icon"/>
                    <p className="text-black font-inter text-[20px] font-normal leading-normal">
                        EffiTask is a smart task management app that lets you create, share,
                        <br/>and manage tasks effortlessly. It features customizable categories, <br/>
                        built-in chat, task sharing with friends, image and description<br/>
                        attachments, participant management, and deadline scheduling—all <br/>
                        in one place for an efficient and seamless experience.
                    </p>
                    <hr/>
                </div>
            </div>

        </section>
    );
};
