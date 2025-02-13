import React from 'react'
import expresslogo from '../assets/ExpressJS logo.png'
import reactlogo from '../assets/reactlogo2.png'
import jslogo from '../assets/js.logo.jpg'
import mongologo from '../assets/mongo db logo.png'
import htmllogo from '../assets/html logo.png'
import csslogo from '../assets/css logo2.png'
import nodelogo from '../assets/node logo.png'

export const Skills = () => {
  return (
    <>
        <div className='w-full flex flex-col justify-center items-center gap-10'>
          <div className="text-white font-bold text-[20px] sm:text-[30px]  w-full mx-auto bg px-6 sm:px-16">Skills</div>
          <div className="flex-col gap-5 mt-10 flex md:flex-row md:gap-20 ">
            <div className="flex w-full justify-center items-center">
          <img src={expresslogo} alt="Express Logo" data-aos='fade-right' className="h-8 w-24  sm:h-14 sm:w-48  object-fill bg-white hover:scale-110 transition-all" />
            </div>
          <div className="flex w-full justify-around gap-10 md:gap-20">
            <img src={reactlogo} alt="React Logo"  data-aos='fade-down' className="w-10 h-10 sm:w-16 sm:h-16 hover:scale-110 transition-all" />
            <img src={mongologo} alt="MongoDB Logo"  data-aos='fade-left' className="w-10 h-10 sm:w-16 sm:h-16 hover:scale-110 transition-all" />
          </div>
          <div className="flex w-full justify-center items-center">
          <img src={nodelogo} alt=""  data-aos='fade-left' className='w-20 h-20 hover:scale-125 transition-all scale-150 md:ms-0 '/>
          </div>
          </div>
          <div className="flex md:gap-20 gap-10 ">
              <img src={jslogo} alt="" data-aos='fade-right' className="w-10 h-10 sm:w-16 sm:h-16 hover:scale-110 transition-all" />
              <img src={htmllogo} alt=""  data-aos='fade-up' className="w-10 h-10 sm:w-16 sm:h-16 hover:scale-110 transition-all" />
              <img src={csslogo} alt=""   data-aos='fade-left' className="w-10 h-10 sm:w-16 sm:h-16 scale-110 hover:scale-125 transition-all" />
          </div>
        </div>
    </>
  )
}
