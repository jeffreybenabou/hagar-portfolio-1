import {useEffect, useRef, useState} from "react";

// Types
interface NavItem {
    id: string;
    label: string;
}

interface IndicatorStyle {
    left: number;
    width: number;
    backgroundColor: string;
}

// Constants
const NAV_ITEMS: NavItem[] = [
    {id: "home", label: "HOME"},
    {id: "portfolio", label: "PORTFOLIO"},
    {id: "contact", label: "CONTACT"},
];

const COLOR_MAPPING: Record<string, string> = {
    home: "#FF6FB5",
    portfolio: "#9747FF",
    contact: "#55D8C1",
};

const INDICATOR_CONFIG = {
    width: 8,
    height: 8,
    offset: 4,
};

export const Header = () => {
    // State
    const [selected, setSelected] = useState("home");
    const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle>({
        left: 0,
        width: 0,
        backgroundColor: COLOR_MAPPING.home
    });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Refs
    const selectedRef = useRef(selected);
    const navRef = useRef<HTMLElement>(null);

    // Update ref when selected changes
    selectedRef.current = selected;

    // Indicator positioning logic
    const updateIndicator = () => {
        const selectedElement = document.querySelector(`a[data-id="${selectedRef.current}"]`);

        if (selectedElement && navRef.current) {
            const rect = selectedElement.getBoundingClientRect();
            const navRect = navRef.current.getBoundingClientRect();

            setIndicatorStyle({
                left: rect.left - navRect.left + rect.width / 2 - INDICATOR_CONFIG.offset,
                width: INDICATOR_CONFIG.width,
                backgroundColor: COLOR_MAPPING[selectedRef.current] || COLOR_MAPPING.home
            });
        }
    };

    // Mobile menu toggle
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    // Navigation click handler
    const handleNavClick = (itemId: string) => {
        setSelected(itemId);
        setIsMobileMenuOpen(false);
    };

    // Effects
    useEffect(() => {
        updateIndicator();
    }, [selected]);

    useEffect(() => {
        const handleResize = () => updateIndicator();
        const resizeObserver = new ResizeObserver(updateIndicator);

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
                        setSelected(entry.target.id);
                    }
                });
            },
            {threshold: 0.1}
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    // Component styles
    const headerStyles = {
        background: "#fbfbfc",
        backdropFilter: "blur(42.35px)",
    };

    const navItemStyles = {
        fontFamily: "Inter",
        fontSize: "17px",
        lineHeight: "normal",
        padding: "1rem",
    };

    const indicatorStyles = {
        left: `${indicatorStyle.left}px`,
        width: `${indicatorStyle.width}px`,
        height: `${INDICATOR_CONFIG.height}px`,
        backgroundColor: indicatorStyle.backgroundColor,
    };

    return (
        <div className={"sticky w-full top-0 z-50"}>
            <header
                className="w-full py-4 px-20 flex justify-between items-center sticky top-0 z-50"
                style={headerStyles}
            >
                {/* Logo */}
                <img
                    src="logo.svg"
                    alt="Portfolio Logo"
                    className="w-[88px] h-[18px]"
                />

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-black"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 5.75h16.5M3.75 12h16.5M3.75 18.25h16.5"
                        />
                    </svg>
                </button>

                {/* Navigation */}
                <nav
                    ref={navRef}
                    className={`${
                        isMobileMenuOpen
                            ? "absolute top-full left-0 w-full bg-white shadow-lg"
                            : "hidden"
                    } md:relative md:flex md:gap-[34px] sm:gap-[68px]`}
                >
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.id}
                            data-id={item.id}
                            href={`#${item.id}`}
                            onClick={() => handleNavClick(item.id)}
                            className={`block md:inline-block relative ${
                                selected === item.id
                                    ? "text-black font-semibold"
                                    : "text-black font-normal"
                            } hover:text-opacity-70 transition-colors duration-200`}
                            style={navItemStyles}
                        >
                            {item.label}
                        </a>
                    ))}

                    {/* Active Indicator */}
                    <div
                        className="hidden md:block absolute top-9 mt-1 rounded-full transition-all duration-300"
                        style={indicatorStyles}
                    />
                </nav>

                {/* CTA Button */}
                <button
                    className="hidden md:block text-white text-center font-inter text-[17px] font-semibold leading-normal py-3 px-10 rounded-full bg-[#212121] hover:bg-opacity-90 transition-all duration-200">
                    Let's chat
                </button>
            </header>

            {/* Red row at the bottom */}

        </div>
    );
};
