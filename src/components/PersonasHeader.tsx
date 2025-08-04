import React from "react";

export const PersonasHeader: React.FC = () => {
    return (
        <div className="flex flex-col items-start w-full mb-50">
            <h2 className="text-black font-inter text-[24px] sm:text-[40px] font-bold leading-normal mb-4">
                Personas
            </h2>
            <p className="text-black font-inter text-[16px] sm:text-[17px] font-normal leading-normal">
                The personas were selected based on the results of the survey I conducted,<br/> which outline the users'
                challenges, goals, and guiding principles.
            </p>
        </div>
    );
};
