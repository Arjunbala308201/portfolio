import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";
import { Dropdown } from './Dropdown';
import { NavbarComponents } from './NavbarComponents';

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openSidebar,setOpenSidebar] =useState(false)
  const location = useLocation()
  const curentLocation = location.pathname
  const openSideBar=()=>{
    setOpenSidebar(!openSidebar)
  }
  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  };
  return (
    <div className="bg-gray-800 mx-auto h-20 w-full text-gray-500" >
      <div className="flex justify-end px-5 sm:p-0 items-center w-full h-full sm:justify-around" >
        {/* Navigation Links */}
        <div className="flex text-white text-[30px] sm:hidden" onClick={openSideBar}>
        <IoIosMenu />
        </div>
        {openSidebar &&
        <NavbarComponents  openSideBar={openSideBar}/>
      }
        <div className="sm:flex  hidden sm:justify-around h-full w-full"> 
        <a
          className={`hover:text-[18px]  hover:text-white hover:font-semibold transition-all h-full flex items-center w-20 justify-center ${curentLocation==='/' ? 'border-b-2 text-white' : ''}`}
          href="#about"
          onClick={(e) => smoothScroll(e, 'about')}
        >
          About
        </a>
        <a
          className={`hover:text-[18px] hover:text-white hover:font-semibold transition-all h-full flex items-center w-20 justify-center ${curentLocation==='/education'?'border-b-2 text-white':''}`}
          href="#education"
          onClick={(e) => smoothScroll(e, 'education')}
        >
          Education
        </a>
        <a
          className={`hover:text-[18px] hover:text-white hover:font-semibold transition-all h-full flex items-center w-20 justify-center ${curentLocation==='/projects'?'border-b-2 text-white':''}`}
          href="#projects"
          onClick={(e) => smoothScroll(e, 'projects')}
        >
          Projects
        </a>
        <a
          className={`hover:text-[18px] hover:text-white hover:font-semibold transition-all h-full flex items-center w-20 justify-center ${curentLocation==='/skills'?'border-b-2 text-white':''}`}
          href="#skills"
          onClick={(e) => smoothScroll(e, 'skills')}
        >
          Skills
        </a>
        <div className="relative inline-block text-left">
          <div
            onClick={()=>setIsDropdownOpen(!isDropdownOpen)}
            className={`inline-flex justify-between rounded-md h-full items-center border-gray-700 bg-gray-800 px-4 py-2 focus:outline-none border-0 cursor-pointer ${isDropdownOpen?'text-white':'' }`}
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
          {
            isDropdownOpen && 
            <Dropdown/>
          }
        </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
