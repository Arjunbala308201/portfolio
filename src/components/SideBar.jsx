import React, { useState } from 'react';
import { Dropdown } from './Dropdown';
import { FaArrowLeft } from "react-icons/fa";

export const SideBar = ({ openSideBar, smoothScroll }) => {
    const [Contactme, setOpencontactMe] = useState(false);

    const openContactMe = () => {
        setOpencontactMe(!Contactme);
    };

    return (
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-50"
                onClick={openSideBar} // Closes sidebar when clicking outside
                >
                <div
                    className="fixed h-full top-0 right-0 mt-0 bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 w-2/5 transition-opacity"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    data-aos="fade-left"
                    onClick={(e) => e.stopPropagation()} // Prevent clicks inside the sidebar from closing it
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
            </div>
        </>
    );
};
