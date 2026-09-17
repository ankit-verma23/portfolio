import React from 'react'
import Tags from './Tags'
import Link from './Link'
import Expense from '../assets/Expense-Tracker.png'
import Course from '../assets/Course-Management.png'
import Hospital from '../assets/Hospital-Management.png'

function Card({img, title, description}) {
  return (
    <div className='w-full h-fit bg-[#0F1415] border py-6 px-4 border-white/10 rounded-xl transition-transform duration-300 hover:-translate-y-2'>
      <div className='h-50 w-full bg-amber-50 overflow-hidden bg-cover rounded-xl'>
        {/* Image */}
        <img src={img} alt="" />
      </div>
      <div className=' flex flex-col gap-2 mt-4'>
        <p className='font-poppins font-medium tracking-wider'>{title}</p>
        <p className='font-poppins text-gray-400 text-sm'>
            {description}
        </p>
      </div>
      <div className=' flex gap-4 mt-4 '>
        {/* tags */}
        <Tags content="React" />
        <Tags content="Spring Boot" />
        <Tags content="MySQL" />
        
      </div>
      <div className='w-full mt-6 h-fit'>
        <Link url="#" content="GitHub" />
      </div>
    </div>
  )
}

export default Card
