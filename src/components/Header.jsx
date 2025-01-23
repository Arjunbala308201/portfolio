import React, { useState, useEffect } from 'react';
import { IoIosMenu } from "react-icons/io";
import { Dropdown } from './Dropdown';
import { SideBar } from './SideBar';

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [activeSection, setActiveSection] = useState('about'); // Track active section

  const sections = ['about', 'education', 'projects', 'skills'];

  const openSideBar = () => {
    setOpenSidebar(!openSidebar);
  };

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Update active section
        }
      });
    };

    const observerOptions = {
      root: null,
      threshold: 0.6, // Trigger when 60% of the section is visible
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
    
  });

  return (
    <div className="bg-gray-800 mx-auto h-20 w-full text-gray-500 z-1000">
      <div className="flex justify-end px-5 sm:p-0 items-center w-full h-full sm:justify-around">
        {/* Navigation Links */}
        <div className="flex text-white text-[30px] sm:hidden" onClick={openSideBar}>
          <IoIosMenu />
        </div>
        <div className="">
          {openSidebar && (
            <SideBar smoothScroll={smoothScroll} openSideBar={openSideBar} />
          )}
        </div>
        <div className="sm:flex hidden sm:justify-around h-full w-full">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => smoothScroll(e, section)}
              className={`hover:text-[18px] hover:text-white hover:font-semibold transition-all h-full flex items-center w-20 justify-center ${
                activeSection === section ? 'border-b-2 text-white' : ''
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <div className="relative inline-block text-left">
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`inline-flex justify-between rounded-md h-full items-center border-gray-700 bg-gray-800 px-4 py-2 focus:outline-none border-0 cursor-pointer ${
                isDropdownOpen ? 'text-white' : ''
              }`}
            >
              Contact Me
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {isDropdownOpen && <Dropdown />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
