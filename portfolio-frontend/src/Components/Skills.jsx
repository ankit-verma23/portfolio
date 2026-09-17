import { Server } from "lucide-react";
import React from "react";
import { FaServer } from "react-icons/fa";

function Skills() {
  return (
    <div className="w-70 min-h-60 flex flex-col gap-4 px-6 p-2 bg-[#0F1415] border py-6 border-white/10 rounded-xl ">
      <div className="flex gap-6 items-center">
        <div className="w-fit h-fit text-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
          <FaServer size={30} />
        </div>
        <p className="text-sm font-poppins font-bold tracking-widest">Backend</p>
      </div>
      <div className="flex flex-col mt-2">
        <ul className="list-disc pl-5 font-poppins text-sm text-gray-400 font-medium tracking-wider flex flex-col gap-1">
            <li>Java</li>
            <li>Spring Boot</li>
            <li>Spring Security</li>
            <li>JPA / Hibernate</li>
            <li>REST API</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
