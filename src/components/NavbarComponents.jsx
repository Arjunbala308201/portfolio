import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from './Dropdown'
import { FaArrowLeft } from "react-icons/fa";

export const NavbarComponents = ({openSideBar}) => {
    const [Contactme, setOpencontactMe] = useState(false)

    const openContactMe = ()=>{
        setOpencontactMe(!Contactme)
    }
  return (
    <>
                  
            
              <div
              className="absolute h-full min:h-screen top-[-40px] right-0 z-10 mt-10 rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 w-2/5 "
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              data-aos='fade-left'
            >
                <div className="flex w-full pt-10 hover:text-white transition-all ps-2"
                onClick={openSideBar}>
                <FaArrowLeft />
                </div>
            <div className="py-10">
              
                <Link to='/' className='text-white flex gap-5 items-center px-4 py-2 text-sm hover:bg-gray-700' >Home</Link>
                <Link to='/education' className='text-white flex gap-5 items-center px-4 py-2 text-sm hover:bg-gray-700' >Education</Link>
                <Link to='/projects' className='text-white flex gap-5 items-center px-4 py-2 text-sm hover:bg-gray-700' >Projects</Link>
                <Link to='/skills' className='text-white flex gap-5 items-center px-4 py-2 text-sm hover:bg-gray-700' >Skills</Link>
                <div className="text-white flex gap-5 items-center px-4 py-2  text-sm hover:bg-gray-700" onClick={openContactMe}>Contact Me</div>
                {
                     Contactme && <Dropdown width ={'fit-content'}/>
                }
              </div>
            </div>
    </>
  )
}
