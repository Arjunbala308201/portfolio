import React from 'react';
import resume from '../assets/Arjun Resume rev 5.0.pdf';
import { Link } from 'react-router-dom';
import { GoDownload } from 'react-icons/go';
export const Resume = () => {
  return (
    <div className="w-screen min-h-screen overflow-hidden">
      <iframe
        src={`${resume}#zoom=100`} // Adding zoom parameter to the PDF URL
        className="w-full h-[100vh] border-none"
        title="PDF Viewer"
      ></iframe>
      <br />
        <div className="flex w-full items-center justify-center">
            <a href={resume} download='Arjun Resume' className='bg-green-600 cursor-pointer h-8 w-28 md:h-10 md:w-52 text-sm justify-around text-white font-semibold rounded-md hover:scale-105 transition-all flex items-center md:justify-around md:text-[20px] md:px-12 md:gap-5'>
                Save
                <GoDownload/>
            </a>
        </div>
    </div>
  );
};
