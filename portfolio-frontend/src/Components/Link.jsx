import { MoveUpRight } from "lucide-react";
import React from "react";

function Link({url, content}) {
  return (
    <div className="w-fit h-fit flex gap-1 items-center mt-1 cursor-pointer transition-colors duration-300 hover:text-white/50">
      <div>
        <a  href={url}
            className="font-inter tracking-wide text-sm"
        >
            {content}
        </a>
      </div>
      <div>
        <MoveUpRight size={18} />
      </div>
    </div>
  );
}

export default Link;
