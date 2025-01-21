import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { RxTriangleRight } from "react-icons/rx";

export const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <>
        <div className="w-full bg-gray-900 flex h-full flex-col gap-10 px-6 sm:px-16 ">
            <br />
            <div>
            <p className='text-[30px] sm:text-[35px] text-white font-bold'>My Education</p>
            <br />
            <div className="w-full  block items-center justify-center gap-10 md:flex">
                <div data-aos='fade-right' className='md:w-1/3 w-full'>
                    <div className="group hover:bg-gradient-to-r from-green-600 to-green-950 transition-all duration-300 text-white rounded-md p-5 hover:scale-105">
                    <p className='group-hover:text-white font-medium text-[20px] transition-all text-green-600'>2019-2022</p>
                    <p className='font-bold text-[25px]'>Bachelor of Arts</p>
                    <p className='text-[15px]'>Nagercoil, Tamilnadu</p>
                    </div>
                </div>
                <div data-aos='fade-up'className='md:w-1/3 w-full'>
                    <div className="group hover:bg-gradient-to-r from-green-600 to-green-950 transition-all duration-300 text-white rounded-md p-5 hover:scale-105">
                    <p className='group-hover:text-white font-medium text-[20px] transition-all text-green-600'>2017-2019</p>
                    <p className='font-bold text-[25px]'>Hsc</p>
                    <p className='text-[15px]'>Nagercoil, Tamilnadu</p>
                    </div>
                </div>
                <div data-aos='fade-left' className='md:w-1/3 w-full'>
                <div className="group hover:bg-gradient-to-r from-green-600 to-green-950 transition-all duration-300 text-white rounded-md p-5 hover:scale-105">
                    <p className='group-hover:text-white font-medium text-[20px] transition-all text-green-600'>2016-2017</p>
                    <p className='font-bold text-[25px]'>SSLC</p>
                    <p className='text-[15px]'>Nagercoil, Tamilnadu</p>
                </div>
                </div>
            </div>
            </div>
            <div>
            <p className='text-[30px] sm:text-[35px] text-white font-bold'>Certifications</p>
            <br />
              <ol className='text-white'>
                <li className='flex items-center'>
                   <span className='text-green-600 text-[20px]'><RxTriangleRight /></span>
                    &nbsp;<div className="flex items-center h-full">Frontend Developer Internship </div> 
                    &nbsp; &nbsp; <a href="" className='text-xs text-blue-500 flex items-end h-full'>View</a>
                </li>
                <li className='flex items-center'>
                  <span className='text-green-600 text-[20px]'><RxTriangleRight /></span>
                  &nbsp; <div className="flex items-center h-full">Completion of Frontend Development</div>
                  &nbsp; &nbsp; <a href="" className='text-xs text-blue-500 flex items-end '>View</a>
                </li>
              </ol>
              </div>
        </div>
    </>
  )
}
