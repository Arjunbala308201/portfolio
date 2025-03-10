import React from 'react'
import maillogo from '../assets/maillogonew.jpg'
import phonelogo from '../assets/phonelogo.png';
import linkidinlogo from '../assets/linkidin logo.png';
import wplogo from '../assets/whatsappicon.png';
export const Contactme = () => {
  return (
    <>
        <div className="w-full justify-center px-6 pt-20 sm:ps-16" data-aos="fade-down">
          <div className="text-white text-[20px] sm:text-[30px] font-bold">Reach Out Me</div>
          <div className="flex mt-5 sm:gap-10 justify-center">
          <a
                href="mailto:saarjun04@gmail.com"
                className="text-white flex gap-5 items-center px-4 py-2 text-sm hover:scale-125 transition-all"
              >
                <img src={maillogo} className="h-6 object-contain" alt="Mail logo" />
              </a>
                <a
                  href="tel:+918778799891"
                  className="text-white flex  gap-5 items-center px-4 py-2 text-sm hover:scale-125 transition-all"
                >
                  <img src={phonelogo} className="h-6 w-6" alt="Phone logo" />
                </a>
                <a
                  href="https://wa.me/+918778799891"
                  className="text-white flex gap-5 items-center px-4 py-2 text-sm hover:scale-125 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={wplogo} className="h-6 w-6 " alt="WhatsApp logo" />
                  
                </a>
                <a
                  href="https://www.linkedin.com/in/arjun-bala-906721251/"
                  className="text-white flex gap-5 items-center px-4 py-2 text-sm hover:scale-125 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkidinlogo} className='h-6' alt=""  /> 
                </a>
          </div>
        </div>
    </>
  )
}
