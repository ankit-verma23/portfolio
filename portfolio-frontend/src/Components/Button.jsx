import React from "react";
import { ArrowRight } from "lucide-react";

function Button({ content }) {
  return (
    <div className="font-poppins text-lg font-medium w-fit h-fit">
      <button
        className="font-poppins text-xs px-6 py-2 rounded-full
        flex justify-center items-center gap-1
        border border-white
        bg-white text-black
        
       
        hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]
        hover:-translate-y-0.5
        transition-all duration-300
        cursor-pointer"
      >
        {content}
        <div>
          <ArrowRight size={13} strokeWidth={3}/>
        </div>
      </button>
    </div>
  );
}

export default Button;
