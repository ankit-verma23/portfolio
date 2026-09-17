import React from 'react'

function Tags({content}) {
  return (
    <div className='px-3 py-1 rounded-full bg-[#0A1A1A] border border-[#0EA5A4] text-[#5EEAD4] text-xs shadow-[0_0_10px_rgba(14,165,164,0.3)] cursor-pointer
    transition-transform
    duration-300
    hover:-translate-y-1'
    >
        <p>{content}</p>
    </div>
  )
}

export default Tags
