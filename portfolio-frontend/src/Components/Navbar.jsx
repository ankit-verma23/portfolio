import React from 'react'
import Button from './Button';

function Navbar() {
  return (
    <div className='sticky top-0 z-50 bg-[#050708] w-full text-white font-poppins font-medium flex justify-between items-center py-4 px-16 h-fit border-b border-[#1F2937]'>
        <h3 className='font-bold relative z-[999] font-inter cursor-pointer text-white'>
          <span className='text-green-400'>&lt;</span>
          Ankit/
          <span className='text-green-400'>&gt;</span>

        </h3>
        <ul className='text-[12px] flex gap-10 text-center content-center'>
            <li className='relative z-[999] underline-animation cursor-pointer'>Home </li>
            <li className='underline-animation cursor-pointer'>About</li>
            <li className='underline-animation cursor-pointer'>Skills</li>
            <li className='underline-animation cursor-pointer'>Projects</li>
            <li className='underline-animation cursor-pointer'>Contact</li>
        </ul>
        <Button content="Hire Me"/>
    </div>
  )
}

export default Navbar;
