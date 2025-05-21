import {useEffect, useRef, useState} from "react";

export const Header = () => {
    const [selected, setSelected] = useState("home");
    const selectedRef = useRef(selected);
    selectedRef.current = selected;
    const [indicatorStyle, setIndicatorStyle] = useState({left: 0, width: 0, backgroundColor: 'red'});
    const navRef = useRef(null);

    const navItems = [
        {id: "home", label: "Home"},
        {id: "portfolio", label: "Portfolio"},
        {id: "contact", label: "Contact"},
    ];

    const updateIndicator = () => {
        const selectedElement = document.querySelector(`a[data-id="${selectedRef.current}"]`);
        const colorMapping = {
            home: "#FF6FB5",
            portfolio: "#9747FF",
            contact: "#55D8C1",
        };
        if (selectedElement && navRef.current) {
            const rect = selectedElement.getBoundingClientRect();
            const navRect = navRef.current.getBoundingClientRect();
            setIndicatorStyle({
                left: rect.left - navRect.left + rect.width / 2 - 4, // Center the indicator
                width: 8, // Fixed width for the round indicator
                backgroundColor: colorMapping[selectedRef.current]
            });
        }
    };

    useEffect(() => {
        updateIndicator(); // Update indicator on initial render and when `selected` changes
    }, [selected, selectedRef.current]);

    useEffect(() => {
        const handleResize = () => updateIndicator();
        const resizeObserver = new ResizeObserver(() => updateIndicator());

        if (navRef.current) {
            resizeObserver.observe(navRef.current);
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            resizeObserver.disconnect();
        };
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setSelected(entry.target.id); // Update the selected state based on the section in view
                    }
                });
            },
            {threshold: 0.1} // Lower threshold for better detection
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    console.log("selectedRef.current", selectedRef.current)

    return (
        <header
            className="w-full py-4 px-6 flex justify-between items-center sticky top-0 z-50"
            style={{
                background: "rgba(255, 255, 255, 0.66)",
                backdropFilter: "blur(42.35px)",
            }}
        >
            <img src="logo.svg" alt="Logo" style={{width: "88px", height: "18px"}}/>

            <nav ref={navRef} className="relative flex gap-[34px] sm:gap-[68px]">
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        data-id={item.id}
                        href={`#${item.id}`}
                        onClick={() => setSelected(item.id)}
                        className={`relative ${
                            selected === item.id
                                ? "text-black font-semibold"
                                : "text-black font-normal"
                        }`}
                        style={{
                            fontFamily: "Inter",
                            fontSize: "17px",
                            lineHeight: "normal",
                        }}
                    >
                        {item.label}
                    </a>
                ))}
                <div
                    className="absolute top-full mt-1 bg-black rounded-full transition-all duration-300"
                    style={{
                        left: `${indicatorStyle.left}px`,
                        width: `${indicatorStyle.width}px`,
                        height: "8px",
                        backgroundColor: indicatorStyle.backgroundColor,
                    }}
                />
            </nav>

            <button
                className="text-white text-center font-inter text-[17px] font-semibold leading-normal py-2 px-4 rounded-full bg-[#212121] hover:bg-opacity-90"
            >
                Let's chat
            </button>
        </header>
    );
};
