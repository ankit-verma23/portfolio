import React from 'react'
import Button from './Button';

function Navbar() {
  return (
    <div className='sticky top-0 z-50 bg-[#050708] w-full text-white font-poppins font-medium flex justify-center md:justify-between items-center py-2 px-4 md:py-4 md:px-16 h-fit border-b border-[#1F2937]'>
        <h3 className='font-bold relative z-[999] font-inter cursor-pointer text-white'>
          <span className='text-green-400'>&lt;</span>
          Ankit/
          <span className='text-green-400'>&gt;</span>

        </h3>
        <ul className='text-[12px] md:flex flex-row gap-10 text-center content-center hidden'>
            <li className='relative z-[999] underline-animation cursor-pointer'><a href="#home">Home</a> </li>
            <li className='underline-animation cursor-pointer'><a href="#about">About</a></li>
            <li className='underline-animation cursor-pointer'><a href="#technologies">Skills</a></li>
            <li className='underline-animation cursor-pointer'><a href="#projects">Projects</a></li>
            <li className='underline-animation cursor-pointer'><a href="#contact">Contact</a></li>
        </ul>
        <div className='hidden md:inline-block'>
          <a href="#contact"><Button content="Hire Me"/></a>
        </div>
    </div>
  )
}

export default Navbar;
