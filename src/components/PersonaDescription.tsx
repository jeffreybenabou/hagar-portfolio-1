import React from "react";
import {TextBox} from "./TextBox";
import {TextBoxWithTitle} from "./TextBoxWithTitle";
import {Arrow} from "./Arrow";

interface PersonaDescriptionProps {
    image: string;
    arrows: string[];
    isWomen?: boolean;
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

// Component for rendering persona info box
const PersonaInfoBox: React.FC<{
    persona: any;
    className: string;
}> = ({persona, className}) => (
    <TextBoxWithTitle
        mainTitle={persona.name}
        titleSubtitlePairs={persona.info}
        className={className}
    />
);

// Component for rendering goals box
const GoalsBox: React.FC<{
    goals: string[];
    className: string;
}> = ({goals, className}) => (
    <TextBox
        title="Goals"
        className={className}
        bulletClassName={"max-w-[290px]"}
        bulletPoints={goals}
    />
);

// Component for rendering pain points box
const PainPointsBox: React.FC<{
    painPoints: string[];
    className: string;
}> = ({painPoints, className}) => (
    <TextBox
        bulletClassName="max-w-[250px]"
        title="Pain Points"
        className={className}
        bulletPoints={painPoints}
    />
);

// Component for side content (men's goals or women's pain points)
const SideGoalsBox: React.FC<{
    goals: string[];
    className: string;
}> = ({goals, className}) => (
    <TextBox
        title="Difficulty"
        className={className} bulletClassName={"max-w-[300px]"}
        bulletPoints={goals}
    />
);

// Component for top arrows with text boxes
const TopArrows: React.FC<{ arrows: string[]; isWomen?: boolean; personaData?: any }> = ({
                                                                                             arrows,
                                                                                             isWomen = false,
                                                                                             personaData
                                                                                         }) => {
    if (!personaData) return null;

    const currentPersonaData = isWomen ? personaData.women : personaData.men;

    return (
        <div className="absolute top-[20px] left-0 right-0 flex justify-between -translate-y-full">
            {arrows.slice(0, 2).map((arrow, index) => (
                <React.Fragment key={index}>
                    <Arrow src={arrow} alt={`Arrow ${index + 1}`}/>
                    <div className="relative">
                        {index === 0 && (
                            <>
                                {isWomen ? (
                                    <PersonaInfoBox
                                        persona={currentPersonaData}
                                        className="absolute right-25 top-10 z-0 -translate-x-20 mr-2"
                                    />
                                ) : (
                                    <GoalsBox
                                        goals={currentPersonaData.goals}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-full mr-2"
                                    />
                                )}
                            </>
                        )}
                        {index === 1 && (
                            <>
                                {!isWomen ? (
                                    <PersonaInfoBox
                                        persona={currentPersonaData}
                                        className="absolute left-[-40px] top-30 -translate-y-1/3 ml-2"
                                    />
                                ) : (
                                    <GoalsBox
                                        goals={currentPersonaData.goals}
                                        className="absolute top-1/2 -translate-y-12 left-[-45px]"
                                    />
                                )}
                            </>
                        )}
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};

// Component for men's left side content
const MenSideContent: React.FC<{ arrow: string; personaData?: any }> = ({arrow, personaData}) => {
    if (!personaData?.men) return null;

    return (
        <>
            <SideGoalsBox
                goals={personaData.men.sideGoals}
                className="absolute left-315 top-1/2 -translate-y-1/2 -translate-x-[380%]"
            />
            <Arrow
                src={arrow}
                alt="Arrow 3"
                className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-[200%]"
            />
        </>
    );
};

// Component for women's right side content
const WomenSideContent: React.FC<{ arrow: string; personaData?: any }> = ({arrow, personaData}) => {
    if (!personaData?.women) return null;

    return (
        <>
            <Arrow
                src={arrow}
                alt="Arrow 3"
                className="absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-[100%]"
            />
            <PainPointsBox
                painPoints={personaData.women.painPoints}
                className="absolute top-1/2 -translate-y-0 translate-x-[135%]"
            />
        </>
    );
};

// Main persona image component
const PersonaImage: React.FC<{
    image: string;
    arrows: string[];
    isWomen?: boolean;
    personaData?: any;
}> = ({image, arrows, isWomen, personaData}) => (
    <div className="relative flex flex-col items-center">
        <TopArrows arrows={arrows} isWomen={isWomen} personaData={personaData}/>
        <img
            src={image}
            alt="Persona"
            className="max-w-full h-auto object-contain"
            onError={(e) => {
                console.error('Image failed to load:', image);
                console.log('Image element:', e.target);
            }}
        />
    </div>
);

export const PersonaDescription: React.FC<PersonaDescriptionProps> = ({
                                                                          image,
                                                                          arrows,
                                                                          isWomen = false,
                                                                          personaData
                                                                      }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full  ">
            <div className="relative flex items-center justify-center w-full">
                {/* Men's side content (left) */}
                {!isWomen && arrows[2] && <MenSideContent arrow={arrows[2]} personaData={personaData}/>}

                {/* Main persona image with top arrows */}
                <PersonaImage image={image} arrows={arrows} isWomen={isWomen} personaData={personaData}/>

                {/* Women's side content (right) */}
                {isWomen && arrows[2] && <WomenSideContent arrow={arrows[2]} personaData={personaData}/>}
            </div>
        </div>
    );
};
