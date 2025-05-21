export const Skills = () => {
    const skills = {
        uxUiDesign: ["User experience (UX)", "User interface (UI)", "Prototyping", "", "Wireframing", "Design Systems", "User Research", "", "UI animations", "Information Architecture"],
        tools: [
            {name: "Figma", icon: "./public/figma.svg"},
            {name: "Illustrator", icon: "./public/AI.svg"},
            {name: "Photoshop", icon: "./public/PS.svg"},
            {name: ''},
            {name: "DUDA",},
            {name: "Wix", icon: "./public/WIX.svg"},
            {name: "Elementor", icon: "./public/elemntor.svg"},
            {name: "Ai"},
            {name: ''},
            {name: "XD", icon: "./public/XD.svg"},
            {name: "WordPress", icon: "./public/WP.svg"},
        ],
    };

    return (
        <section
            className="rounded-[40px] bg-[rgba(249,250,251,0.66)] flex mx-[150px] h-[388px] p-[53px_89px] flex-col items-start gap-[10px]"
            style={{
                backdropFilter: "blur(29.25px)",
            }}
        >
            <h2 className="text-black font-inter text-[40px] font-bold leading-normal">
                MY SKILLS
            </h2>
            <div className="flex flex-row items-start gap-[77px] w-full">
                {skills.uxUiDesign.length > 0 && ( // Render only if there are valid tags
                    <div className="flex items-start justify-between gap-[77px] self-stretch flex-1">
                        <div className="flex flex-col items-start gap-[21px] flex-1 text-left">
                            <p className="text-[20px] font-semibold leading-normal text-black">UX&UI DESIGN</p>
                            <div className="flex flex-wrap gap-2 w-full">
                                {skills.uxUiDesign.map((tag, index) => {
                                    return (
                                        tag.toString().length === 0 ?
                                            <div key={index} className=" w-full">
                                            </div> :
                                            <span
                                                key={index}
                                                className="flex items-center gap-2 p-[10px] rounded-[10px] border border-[#EBEEF0] bg-[#FFF] text-sm font-medium text-black font-inter text-[17px] font-normal leading-normal">
                                            {tag}</span>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-[21px] flex-1 text-left">
                            <p className="text-[20px] font-semibold leading-normal text-black">TOOLS</p>
                            <div className="flex flex-wrap gap-2">
                                {skills.tools.map((tag, index) => (
                                    tag.name.length === 0 ?
                                        <div key={index} className="w-full">

                                        </div> :
                                        <span
                                            key={index}
                                            className="flex items-center gap-2 p-[10px] rounded-[10px] border border-[#EBEEF0] bg-[#FFF] text-sm font-medium text-black font-inter text-[17px] font-normal leading-normal"
                                        >
            {tag.icon && <img src={tag.icon} alt={tag.name} className="w-6 h-6"/>}
                                            {tag.name}
        </span>


                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
