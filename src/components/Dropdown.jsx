import React from 'react'
import maillogo from '../assets/mail logo2.jpeg';
import phonelogo from '../assets/phonelogo.png';
import linkidinlogo from '../assets/linkidin logo.png';
import wplogo from '../assets/whatsappicon.png';

export const Dropdown = ({isDropdownOpen,width}) => {
    console.log(width);
  return (
    <>
        
        <div
              className="absolute right-0 z-10 w-fit origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            //   data-aos='fade-down'
            >
              <div className="py-1">
              <a
                href="mailto:saarjun04@gmail.com"
                className="text-white flex gap-5 items-center px-4 py-2 text-sm hover:bg-gray-700"
              >
                <img src={maillogo} className="h-5 w-5 object-cover" alt="Mail logo" />
                Mail
              </a>
                <a
                  href="tel:+918778799891"
                  className="text-white flex  gap-5 items-center px-4 py-2 text-sm hover:bg-gray-700"
                >
                  <img src={phonelogo} className="h-5 w-5" alt="Phone logo" />
                  Phone
                </a>
                <a
                  href="https://wa.me/+918778799891"
                  className="text-white flex gap-5 items-center px-4 py-2 text-sm hover:bg-gray-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={wplogo} className="h-5 w-5 " alt="WhatsApp logo" />
                  WhatsApp
                </a>
                <a
                  href="https://www.linkedin.com/in/arjun-bala-906721251/"
                  className="text-white flex gap-5 items-center px-4 py-2 text-sm hover:bg-gray-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkidinlogo} className='h-5' alt=""  />
                  LinkedIn
                </a>

              </div>
            </div>
    </>
  )
}
