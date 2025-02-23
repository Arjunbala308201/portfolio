import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Education } from './Education';
import { Skills } from './Skills';
import { Project } from './Project';
import { About } from './About';
import { Contactme } from './Contactme';
export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <>
    <div className="flex flex-col">
        <div className=" sm:min-h-screen flex flexcol items-center sm:py-0" id='about'>
          <About/>
        </div>
        <div className=" flex flexcol items-center sm:py-0" id='education'>
        <Education />
        </div>
        <div className="sm:min-h-screen flex flexcol  sm:py-0 " id='projects'>
        <Project/>
        </div>
        <div className=" flex flexcol items-center justify-center sm:py-0" id='skills'>
        <Skills/>
        </div>
        <Contactme/>
    </div>

    </>
  )
}
