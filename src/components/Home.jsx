import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import arjunimg from '../assets/Arjun Image2.jpg'
import { GoDownload } from "react-icons/go";
import github from '../assets/GitHub.png'
import { Link } from 'react-router-dom';
import { Education } from './Education';
import { Skills } from './Skills';
import { Project } from './Project';
import maillogo from '../assets/mail logo2.jpeg';
import phonelogo from '../assets/phonelogo.png';
import linkidinlogo from '../assets/linkidin logo.png';
import wplogo from '../assets/whatsappicon.png';
export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <>
    <div className="block">
        <div className=" flex-col-reverse md:flex md:flex-row min-h-[80vh] py-10 justify-center items-center px-10 md:px-20 flex gap-10 w-full ">
            <div  className="content w-full md:w-1/2 flex flex-col gap-5" data-aos="fade-right">
                <div className="flex flex-col">
                <div className="text-white text-[25px] md:text-[40px] font-bold">
                  Hii, I'm Arjun <span className="inline-block animate-wave">👋</span>
                </div>
                <div className="text-green-600 text-[14px] md:text-[20px] font-bold">MERN Stack developer</div>
                </div>
                <div className="text-gray-500 text-sm md:text-[14px]">
                My focus 
                is on creating responsive and user-friendly websites, with a keen eye for enhancing user interaction through visually 
                engaging designs. I am a quick learner, a collaborative team member, and committed to delivering top-notch, client focused web solutions. 
                </div>
                <div className="flex w-full items-center cursor-pointer">
                  <Link to='/resume' className='bg-green-600 h-8 w-28 md:h-10 md:w-52 text-sm justify-around text-white font-semibold rounded-md hover:scale-105 transition-all flex items-center md:justify-around md:text-[20px] md:px-12 md:gap-5'>
                      Resume
                      <GoDownload/>
                  </Link>
                  <div className="rounded-full h-8 w-8 ml-10 sm:ml-20 p-0 cursor-pointer hover:scale-110 transition-all">
                    <a href="https://github.com/Arjunbala308201" target='blank' className='cursor-pointer '>
                      <img src={github} alt="" className='w-full h-full object-cover filter brightness-0 invert'/>
                    </a>
                  </div>
                </div>
            </div>
            <div data-aos="fade-left" className='md:w-1/2 w-full'>
                <div className="pic w-full flex justify-center">
                <div className="rounded-full bg-white h-32 w-32 sm:h-60 sm:w-60 overflow-hidden">
                    <img src={arjunimg} alt="no img" className="object-cover w-full h-full grayscale" />
                </div>

                </div>
            </div>
        </div>
        <div className=""></div>
        <Education/>
        <Skills/>
        <Project/>
        <div className="flex w-full justify-center p-10">
          <div className="text-white"></div>
        <a
                href="mailto:saarjun04@gmail.com"
                className="text-white flex gap-5 items-center px-4 py-2 text-sm hover:scale-125 transition-all"
              >
                <img src={maillogo} className="h-5 w-5 object-cover" alt="Mail logo" />
                
              </a>
                <a
                  href="tel:+918778799891"
                  className="text-white flex  gap-5 items-center px-4 py-2 text-sm hover:scale-125 transition-all"
                >
                  <img src={phonelogo} className="h-5 w-5" alt="Phone logo" />
                  
                </a>
                <a
                  href="https://wa.me/+918778799891"
                  className="text-white flex gap-5 items-center px-4 py-2 text-sm hover:scale-125 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={wplogo} className="h-5 w-5 " alt="WhatsApp logo" />
                  
                </a>
                <a
                  href="https://www.linkedin.com/in/arjun-bala-906721251/"
                  className="text-white flex gap-5 items-center px-4 py-2 text-sm hover:scale-125 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkidinlogo} className='h-5' alt=""  />
  
                </a>

        </div>

        </div>

    </>
  )
}
