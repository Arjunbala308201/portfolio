import React, { useEffect } from "react";
import arjunimg from "../assets/Arjun Image2.jpg";
import { GoDownload } from "react-icons/go";
import github from "../assets/GitHub.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import '../App.css'
export const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 5000, // Try increasing the value
      easing: "ease-in-out",
      // delay: 100,
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  
    return () => {
      AOS.refreshHard();
    };
  }, []);
  

  return (
    <>
      <div className="flex-col-reverse md:flex md:flex-row py-10 justify-center items-center px-10 md:px-20 flex gap-10 w-full min-h-screen">
        <div
          className=" slide-left content w-full md:w-1/2 flex flex-col gap-5"
          // data-aos="fade-right"
        >
          <div className="flex flex-col">
            <div className="text-white text-[25px] md:text-[40px] font-bold">
              Hii, I'm Arjun <span className="inline-block animate-wave">👋</span>
            </div>
            <div className="text-green-600 text-[14px] md:text-[20px] font-bold">
              MERN Stack Developer
            </div>
          </div>
          <div className="text-gray-500 text-sm md:text-[14px]">
            My focus is on creating responsive and user-friendly websites, with
            a keen eye for enhancing user interaction through visually engaging
            designs. I am a quick learner, a collaborative team member, and
            committed to delivering top-notch, client-focused web solutions.
          </div>
          <div className="flex w-full items-center cursor-pointer">
            <Link
              to="/resume"
              className="bg-green-600 h-8 w-28 md:h-10 md:w-52 text-sm justify-around text-white font-semibold rounded-md hover:scale-105 transition-all flex items-center md:justify-around md:text-[20px] md:px-12 md:gap-5"
            >
              Resume
              <GoDownload />
            </Link>
            <div className="rounded-full h-8 w-8 ml-10 sm:ml-20 p-0 cursor-pointer hover:scale-110 transition-all">
              <a
                href="https://github.com/Arjunbala308201"
                target="blank"
                className="cursor-pointer"
              >
                <img
                  src={github}
                  alt=""
                  className="w-full h-full object-cover filter brightness-0 invert"
                />
              </a>
            </div>
          </div>
        </div>
        <div 
        // data-aos="fade-left" 
        className="slide-right md:w-1/2 w-full">
          <div className="pic w-full flex justify-center">
            <div className="rounded-full bg-white h-32 w-32 sm:h-60 sm:w-60 overflow-hidden">
              <img
                src={arjunimg}
                alt="no img"
                className="object-cover w-full h-full grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
