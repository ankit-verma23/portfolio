import { Brain } from "lucide-react";
import React from "react";

function AboutBox({ logo, title, content }) {
  return (
    <div className="w-70 flex gap-4 px-6 p-2 bg-[#0F1415] border py-6 border-white/10 rounded-xl ">
      <div className="w-fit h-fit p-4 bg-purple-500/30 text-purple-500 rounded-lg border border-purple-700/50">
        {logo}
      </div>
      <div className="flex flex-col mr-5">
        <p className="font-medium font-poppins text-sm tracking-wide p-2">
          {title}
        </p>
        <p className="font-inter text-xs font-medium tracking-wider text-gray-400">
          {content}
        </p>
      </div>
    </div>
  );
}

export default AboutBox;
