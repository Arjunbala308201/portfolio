import React from 'react'
import ecomvdo from '../assets/ecom vdo.mp4'
import {Link} from "react-router-dom" 
import taskmanagerimg1 from '../assets/tm1 (1).png'
import taskmanagerimg2 from '../assets/tm1 (2).png'
export const Project = () => {
return (
    <>
            <div className="flex flex-col w-full px-6 sm:px-16 py-10">
                    <div className="text-white text-[20px] w-full sm:text-[30px] font-bold">Projects</div>
                    <br />
                    <div className="text-white">
                            <div className="text-[18px] sm:text-[25px] font-bold text-green-600 ">E-Commerce web-app (Flipkart Clone) &nbsp;&nbsp; 
                                    <a className='hover:text-green-600 text-white font-semibold text-xs ' href="https://e-commerce-1-xee4.onrender.com/">Visit Project</a>
                            </div>
                            <br />
                            <div className="text-sm sm:text-[15px]">
                            Developed a feature-rich e-commerce platform replicating core functionalities of Flipkart, such as user authentication, dynamic product management, and secure checkout. This full-stack project offers category-based filtering, sorting, and search optimization, providing a seamless and scalable shopping experience.
                            </div>
                            <br />
                            <div className="flex w-full justify-center">
                            <div className="w-full mt-[50px] sm:mt-[10px] md:w-2/3 h-[150px] sm:h-[300px] overflow-hidden relative rounded-md group flex justify-center items-center">
                            <video
                                    src={ecomvdo}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute w-full h-auto object-cover top-[-15%] group-hover:scale-110 transition-all duration-300 group-hover:opacity-30"
                            />

                    <div className="absolute hidden group-hover:flex md:top-10 lg:top-20 transition-opacity duration-300 text-center text-white px-2 py-1  flex-col gap-3 justify-center items-center">
                            <p className="font-bold text-xl">FlipKart Clone</p>
                            <p className='text-xs sm:text-sm'>Developed a fully functional e-commerce platform in MERN.</p>
                            
                            <Link
                            to="https://e-commerce-1-xee4.onrender.com/"
                           className="bg-green-600  text-sm justify-around text-white font-semibold rounded-md hover:scale-105 transition-all flex items-center md:justify-around md:text-[15px] md:px-3 py-2 md:gap-5 px-2"
                            >
                            Visit Project
                            </Link>
                    </div>
                            </div>
                    </div>
                            <br />
                            <div className="techniques">
                            <div className="text-[16px] sm:text-xl font-bold text-green-600 py-2">Techniques Used :</div>
                            <div className="font-normal">
                                    <ul className='list-disc ps-[20px] text-sm sm:text-[15px]'>
                                            <li>Frontend: React.js (with Redux Toolkit & Redux Persist)</li>
                                            <li>Backend: Node.js, Express.js</li>
                                            <li>Database: MongoDB (with Mongoose)</li>
                                            <li>State Management: Redux Toolkit.</li>
                                            <li>MongoDB Query Optimization – Backend efficiently handles search queries using Mongoose's $regex for pattern matching.</li>
                                    </ul>
                            </div>
                            </div>
                            <br />
                    </div>


                    <br /><br />
                    <div className="text-white">
                            <div className="text-[18px] sm:text-[25px] font-bold text-green-600 ">Task Manager  &nbsp;&nbsp;
                            <a className='hover:text-green-600 text-white font-semibold text-xs ' href="https://task-manager-4-react.onrender.com/">Visit Project</a>
                            </div>
                            <br />
                            <div className="text-[15px]">
                            The Task Manager App is a MERN stack-based web application designed to help users efficiently manage their daily tasks. It allows users to create, update, and track their tasks with features like categorization, status updates, and due dates.
                            </div>
                            <br />
                            <div className="sm:flex w-full gap-5 ">
                            <div className="overflow-hidden  sm:w-1/2 rounded-md group flex flex-col relative justify-center items-center">
                                    <img 
                                            src={taskmanagerimg1} 
                                            alt="" 
                                            className="group-hover:scale-110 transition-all group-hover:opacity-30 w-full h-full object-cover"
                                    />
                                    
                                    {/* Ensure the text appears in the center when hovered */}
                                    <div className=" hidden text-white group-hover:flex transition-opacity duration-300 absolute  flex-col justify-center items-center gap-3">
                                    <p className="text-center  ">
                                            Stay Organised, Stay Productive - simplify your Tasks
                                    </p>
                                    <Link
                                    to="https://task-manager-4-react.onrender.com/"
                                    className="bg-green-600 px-2 text-sm justify-around text-white font-semibold rounded-md hover:scale-105 transition-all flex items-center md:justify-around md:text-[15px] md:px-3 py-2 md:gap-5 "
                                    >
                                    Visit Project
                                    </Link>
                                    </div>
                            </div>
                                <br />
                            <div className="overflow-hidden sm:w-1/2 rounded-md group flex flex-col relative justify-center items-center">
                                    <img 
                                            src={taskmanagerimg2} 
                                            alt="" 
                                            className="group-hover:scale-110 transition-all group-hover:opacity-30 w-full h-full object-cover"
                                    />
                                    
                                    {/* Ensure the text appears in the center when hovered */}
                                    <div className=" hidden text-white group-hover:flex transition-opacity duration-300 absolute  flex-col justify-center items-center gap-3">
                                    <p className="text-center  ">
                                            Stay Organised, Stay Productive - simplify your Tasks
                                    </p>
                                    <Link
                                    to="https://task-manager-4-react.onrender.com/"
                                    className="bg-green-600 px-2 text-sm justify-around text-white font-semibold rounded-md hover:scale-105 transition-all flex items-center md:justify-around md:text-[15px] md:px-3 py-2 md:gap-5 "
                                    >
                                    Visit Project
                                    </Link>
                                    </div>
                            </div>
                            </div>

                            <br />
                            <div className="techniques">
                            <div className="text-[16px] sm:text-xl font-semibold text-green-600 py-2">Techniques Used :</div>
                            <div className="font-normal">
                                    <ul className='list-disc ps-[20px]'>
                                            <li>Frontend: React.js (with Redux Toolkit & Redux Persist)</li>
                                            <li>Backend: Node.js, Express.js</li>
                                            <li>Database: MongoDB (with Mongoose)</li>
                                            <li>State Management: Redux Toolkit.</li>
                                            <li>MongoDB Query Optimization – Backend efficiently handles search queries using Mongoose's $regex for pattern matching.</li>
                                            <li>Hosting – Used Render for Hosting Backend and frontend, Hosted Database with MongoDB-Atlas.</li>
                                    </ul>
                            </div>
                            </div>
                            <br />
                    </div>
            </div>
    </>    
)
}
