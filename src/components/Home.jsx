import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Education } from './Education';
import { Skills } from './Skills';
import { Project } from './Project';
import maillogo from '../assets/mail logo2.jpeg';
import phonelogo from '../assets/phonelogo.png';
import linkidinlogo from '../assets/linkidin logo.png';
import wplogo from '../assets/whatsappicon.png';
import { About } from './About';
export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <>
    <div className="flex flex-col">
      <div className="mt-20" id='about'>
        <About/>
      </div>
        <div className="pt-28" id='education'>
        <Education />
        </div>
        <div className="pt-28 min-h-[70vh]" id='projects'>
        <Project/>
        </div>
        <div className="pt-28" id='skills'>
        <Skills/>
        </div>
        <div className="flex w-full justify-center p-10 pt-28">
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
