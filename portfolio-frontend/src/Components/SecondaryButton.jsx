import React from "react";
import { ArrowRight, MessageSquare } from "lucide-react";

function SecondaryButton({ content }) {
  return (
    <div className="font-poppins text-lg font-medium w-fit h-fit">
      <button
        className="font-poppins text-xs px-8 py-2 rounded-full
        flex justify-center items-center gap-1 border border-white
         text-white
        hover:bg-white
        hover:text-black
        hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]
        hover:-translate-y-0.5
        transition-all duration-300
        cursor-pointer"
      >
        <div>
          <MessageSquare size={13} strokeWidth={3} />
        </div>
        {content}
      </button>
    </div>
  );
}

export default SecondaryButton;
