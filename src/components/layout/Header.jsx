import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-scroll';
import classNames from "classnames";

const DESKTOP_HEADER_HEIGHT = 60; // Adjust this value if needed

const sections = [
    { id: "home", name: "Home" },
    { id: "about-me", name: "About Me" },
    { id: "experience", name: "Experience" },
    { id: "projects", name: "Projects" },
];

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const headerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
        };


        const handleScroll = () => {
            const scrollTop = window.scrollY + window.innerHeight / 3;
            const active = sections.find(
                (section) => {
                    const element = document.getElementById(section.id);
                    return element && scrollTop >= element.offsetTop &&
                        scrollTop < element.offsetTop + element.offsetHeight;
                }
            );
            setActiveSection(active?.id);
            setScrolled(window.scrollY > 0);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const headerClasses = classNames(
        "fixed top-0 right-0 left-0 w-full uppercase z-50 transition-all duration-300 ease",
        {
            "bg-white shadow-lg": scrolled,
            "bg-transparent": !scrolled,
        }
    );

    const navClasses = classNames(
        "flex items-center justify-between max-w-screen-xl mx-auto transition-all duration-300 ease px-4",
        {
            "py-2 text-black": scrolled,
            "py-4 text-white": !scrolled,
        }
    );

    const getOffset = () => {
        if (!isMobile) {
            return headerRef.current ? -headerRef.current.offsetHeight : 0;
        } else {
            return -DESKTOP_HEADER_HEIGHT;
        }
    };

    return (
        <header ref={headerRef} className={headerClasses}>
            <nav className={navClasses}>
                <div className="flex items-center justify-between w-full">
                    <div>
                        <div className="text-lg font-bold">Alex Chui</div>
                        <div className="text-xs">Senior Application Developer</div>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex gap-4">
                            {sections.map((section) => (
                                <li
                                    key={section.id}
                                    className={`ml-4 cursor-pointer ${activeSection !== section.id
                                        ? "hover:text-rose-500"
                                        : "text-rose-500"
                                        }`}
                                >
                                    <Link
                                        to={section.id}
                                        smooth={true}
                                        duration={600}
                                        offset={getOffset()}
                                    >
                                        {section.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="relative flex items-center justify-center w-6 h-6 text-2xl"
                        >
                            <span
                                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out ${menuOpen ? "opacity-0" : "opacity-100"
                                    }`}
                            >
                                ☰
                            </span>
                            <span
                                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out ${menuOpen ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                ✕
                            </span>
                        </button>
                    </div>
                </div>
            </nav>
            <div
                className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-64" : "max-h-0"
                    }`}
            >
                <ul className="flex flex-col items-center py-4">
                    {sections.map((section) => (
                        <li
                            key={section.id}
                            className={`py-2 cursor-pointer ${activeSection !== section.id
                                ? "hover:text-rose-500"
                                : "text-rose-500"
                                }`}
                        >
                            <Link
                                to={section.id}
                                smooth={true}
                                duration={600}
                                offset={getOffset()}
                                onClick={() => setMenuOpen(false)}
                            >
                                {section.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default Header;