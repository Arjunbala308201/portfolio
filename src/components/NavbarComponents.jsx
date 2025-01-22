import React, { useState } from 'react';
import { Dropdown } from './Dropdown';
import { FaArrowLeft } from "react-icons/fa";

export const NavbarComponents = ({ openSideBar, smoothScroll }) => {
    const [Contactme, setOpencontactMe] = useState(false);

    const openContactMe = () => {
        setOpencontactMe(!Contactme);
    };

    return (
        <>
            <div
                className="fixed h-full top-0 right-0 z-10 mt-0 rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 w-2/5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                data-aos="fade-left"
            >
                <div
                    className="flex w-full pt-10 hover:text-white transition-all ps-2"
                    onClick={openSideBar}
                >
                    <FaArrowLeft />
                </div>
                <div className="py-10">
                    <a
                        href="#about"
                        onClick={(e) => smoothScroll(e, 'about')}
                        className="text-white flex gap-5 items-center px-4 py-2 text-sm hover:bg-gray-700"
                    >
                        Home
                    </a>
                    <a
                        href="#education"
                        onClick={(e) => smoothScroll(e, 'education')}
                        className="text-white flex gap-5 items-center px-4 py-2 text-sm hover:bg-gray-700"
                    >
                        Education
                    </a>
                    <a
                        href="#projects"
                        onClick={(e) => smoothScroll(e, 'projects')}
                        className="text-white flex gap-5 items-center px-4 py-2 text-sm hover:bg-gray-700"
                    >
                        Projects
                    </a>
                    <a
                        href="#skills"
                        onClick={(e) => smoothScroll(e, 'skills')}
                        className="text-white flex gap-5 items-center px-4 py-2 text-sm hover:bg-gray-700"
                    >
                        Skills
                    </a>
                    <div
                        className="text-white flex gap-5 items-center px-4 py-2 text-sm hover:bg-gray-700"
                        onClick={openContactMe}
                    >
                        Contact Me
                    </div>
                    {Contactme && <Dropdown width={'fit-content'} />}
                </div>
            </div>
        </>
    );
};
