import React from 'react';
import resume from '../assets/Arjun Resume rev 5.0.pdf';
import { GoDownload } from 'react-icons/go';

export const Resume = () => {
  return (
    <div className="flex flex-col items-center bg-gray-900 min-h-screen w-full">
      {/* Responsive PDF Viewer */}
      <div className="w-full flex-grow overflow-hidden relative bg-white">
        <iframe
          src={`${resume}#zoom=page-fit`} // Adjusted zoom to fit page width
          className="w-full h-full min-h-[80vh] md:min-h-[90vh] border-none"
          title="Resume Viewer"
        ></iframe>
      </div>

      {/* Save and Back Buttons */}
      <div className="flex items-center justify-center gap-10 py-5 bg-gray-800 w-full">
        <a
          href={resume}
          download="Arjun Resume"
          className="bg-green-600 cursor-pointer justify-center w-20 h-8 text-sm text-white font-semibold rounded-md hover:scale-105 transition-all flex items-center gap-2 md:text-lg"
        >
          Save
          <GoDownload />
        </a>
        <a
          href="/"
          className="bg-green-600 cursor-pointer w-20 h-8 flex items-center justify-center  text-sm text-white font-semibold rounded-md hover:scale-105 transition-all  gap-2 md:text-lg"
        >
          Back
        </a>
      </div>
    </div>
  );
};
