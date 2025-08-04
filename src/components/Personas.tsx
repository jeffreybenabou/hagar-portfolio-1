import React from "react";
import {PersonasHeader} from "./PersonasHeader";
import {PersonaDescription} from "./PersonaDescription";

interface PersonasProps {
    personaData?: {
        women: {
            name: string;
            info: Array<{ title: string; subtitle: string }>;
            goals: string[];
            painPoints: string[];
        };
        men: {
            name: string;
            info: Array<{ title: string; subtitle: string }>;
            goals: string[];
            sideGoals: string[];
        };
    };
}

export const Personas: React.FC<PersonasProps> = ({personaData}) => {
    return (
        <div className="flex flex-col items-start w-full mt-[200px] px-4 sm:px-0">
            <PersonasHeader/>
            <div className="flex flex-col gap-8 w-full mt-8">
                <PersonaDescription
                    image="./public/women.svg"
                    arrows={[
                        "./public/women_left_top_arrow.svg",
                        "./public/women_top_right_arrow.svg",
                        "./public/women_bottom_arrow.svg"
                    ]}
                    isWomen={true}
                    personaData={personaData}
                />
                <div className={"mb-30"}/>
                <PersonaDescription
                    image="./public/man.svg"
                    arrows={[
                        "./public/men_top_arrow.svg",
                        "./public/men_middle_arrow.svg",
                        "./public/men_bottom_arrow.svg"
                    ]}
                    isWomen={false}
                    personaData={personaData}
                />
            </div>
        </div>
    );
};
