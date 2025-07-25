import React from "react";
import {TextBox} from "./TextBox";
import {TextBoxWithTitle} from "./TextBoxWithTitle";
import {Arrow} from "./Arrow";

interface PersonaDescriptionProps {
    image: string;
    arrows: string[];
    isWomen?: boolean;
}

// Data for personas
const PERSONA_DATA = {
    women: {
        name: "Yael",
        info: [
            {title: "Age:", subtitle: "28 years old"},
            {title: "Education:", subtitle: "Communication student"},
            {
                title: "Background:",
                subtitle: "Lives in a rented apartment in Tel Aviv. Balances studies, a part-time job at a café, and an active social life. She is familiar with task management apps but struggles to stick with them due to her busy schedule and lack of patience for complex interfaces."
            }
        ],
        goals: [
            "Maintain a clear daily schedule without forgetting academic tasks or work shifts.",
            "Receive smart reminders that fit her dynamic lifestyle.",
            "Enjoy a simple interface that can be customized to her personal needs."
        ],
        painPoints: [
            "Feeling overwhelmed due to task overload.",
            "Lack of synchronization between academic and work tasks.",
            "Impatience with cumbersome interfaces."
        ]
    },
    men: {
        name: "Yossi",
        info: [
            {title: "Age:", subtitle: "38"},
            {title: "Education:", subtitle: "Digital marketing course"},
            {
                title: "Background:",
                subtitle: "A freelance digital marketer, married with two children, living in the Shfela region. Manages projects for multiple clients simultaneously and needs time management tools to maintain a balance between work and family. Prefers simple and efficient solutions."
            }
        ],
        goals: [
            "Clearly prioritize tasks based on urgency and deadlines.",
            "Easily share tasks with clients when needed.",
            "Receive smart reminders for upcoming or urgent tasks."
        ],
        sideGoals: [
            "Task overload leading to forgetting important details.",
            "Struggles to maintain order and prioritize tasks.",
            "Difficulty handling complex interfaces or unclear features."
        ]
    }
};

// Component for rendering persona info box
const PersonaInfoBox: React.FC<{
    persona: typeof PERSONA_DATA.women | typeof PERSONA_DATA.men;
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
const TopArrows: React.FC<{ arrows: string[]; isWomen?: boolean }> = ({arrows, isWomen = false}) => {
    const personaData = isWomen ? PERSONA_DATA.women : PERSONA_DATA.men;

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
                                        persona={personaData}
                                        className="absolute right-25 top-10 z-0 -translate-x-20 mr-2"
                                    />
                                ) : (
                                    <GoalsBox
                                        goals={personaData.goals}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-full mr-2"
                                    />
                                )}
                            </>
                        )}
                        {index === 1 && (
                            <>
                                {!isWomen ? (
                                    <PersonaInfoBox
                                        persona={personaData}
                                        className="absolute left-[-40px] top-30 -translate-y-1/3 ml-2"
                                    />
                                ) : (
                                    <GoalsBox
                                        goals={personaData.goals}
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
const MenSideContent: React.FC<{ arrow: string }> = ({arrow}) => (
    <>
        <SideGoalsBox
            goals={PERSONA_DATA.men.sideGoals}
            className="absolute left-315 top-1/2 -translate-y-1/2 -translate-x-[380%]"
        />
        <Arrow
            src={arrow}
            alt="Arrow 3"
            className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-[200%]"
        />
    </>
);

// Component for women's right side content
const WomenSideContent: React.FC<{ arrow: string }> = ({arrow}) => (
    <>
        <Arrow
            src={arrow}
            alt="Arrow 3"
            className="absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-[100%]"
        />
        <PainPointsBox
            painPoints={PERSONA_DATA.women.painPoints}
            className="absolute top-1/2 -translate-y-0 translate-x-[135%]"
        />
    </>
);

// Main persona image component
const PersonaImage: React.FC<{
    image: string;
    arrows: string[];
    isWomen?: boolean;
}> = ({image, arrows, isWomen}) => (
    <div className="relative flex flex-col items-center">
        <TopArrows arrows={arrows} isWomen={isWomen}/>
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
                                                                          isWomen = false
                                                                      }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full  ">
            <div className="relative flex items-center justify-center w-full">
                {/* Men's side content (left) */}
                {!isWomen && arrows[2] && <MenSideContent arrow={arrows[2]}/>}

                {/* Main persona image with top arrows */}
                <PersonaImage image={image} arrows={arrows} isWomen={isWomen}/>

                {/* Women's side content (right) */}
                {isWomen && arrows[2] && <WomenSideContent arrow={arrows[2]}/>}
            </div>
        </div>
    );
};
