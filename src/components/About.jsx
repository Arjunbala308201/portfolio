import React, { useEffect } from "react";
import arjunimg from "../assets/Arjun Image2.jpg";
import { GoDownload } from "react-icons/go";
import github from "../assets/GitHub.png";
import { Link } from "react-router-dom";

import "aos/dist/aos.css";
import '../App.css'
export const About = () => {
  const text1 = "Arjun Bala";  // 11 characters (including space)
  const text2 = "MERN Stack Developer & Freelancer"; // Longer text
  return (
    <>
      <div className="flex-col-reverse md:flex w-[80%] mx-auto md:flex-row py-10 justify-center items-center  flex ">
        <div
          className=" slide-left content w-full md:w-1/2 flex flex-col gap-5"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
        <div className="flex flex-col items-start">
          {/* First Typewriter Effect - Name */}
          <div className="flex items-center text-white text-[15px] md:text-[25px]">
            <span className="h-[50px] flex items-end">
              Hii, I'm 
            </span>
            <span 
              className="typewriter text-green-600 text-[25px] md:text-[40px] font-bold ml-2 mt-[20px]"
              style={{ "--text-length": "12ch" ,"animation-delay": ".7s"}} // Adjust width dynamically
            >
              Arjun Bala
            </span>
          </div>

  {/* Second Typewriter Effect - Title with 2s delay */}
  <div 
    className="typewriter text-green-600 text-[14px] md:text-[20px] font-bold"
    style={{ "--text-length": "25ch", "animation-delay": "2.5s" }} // Delayed start
  >
    MERN <span className="text-white font-normal">Stack Developer</span>
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
        data-aos="fade-left" 
        data-aos-duration="1200"
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
