import { FaServer } from "react-icons/fa";
import { MdDesktopWindows } from "react-icons/md";
import { FaDatabase } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Technologies() {
  useEffect(() => {
      gsap.fromTo(
        ".technologies-box",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
  
          scrollTrigger: {
            trigger: ".technologies-section-box",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );
    }, []);
  return (
    <div className="w-full h-fit p-4 technologies-section-box">
      <div className="flex">
        <div className="flex flex-col gap-2 px-4">
          <p className="text-green-400 font-poppins font-semibold tracking-wide">
            // SKILLS
          </p>
          <p className="font-poppins text-2xl font-bold tracking-wider">
            Technologies
          </p>
        </div>
      </div>
      <div className="mt-8 flex flex-col md:flex-row justify-between gap-4">
        {/* Backend */}
        <div className="technologies-box w-full min-h-60 flex flex-col cursor-pointer gap-4 px-4 md:px-6 p-2 bg-[#0F1415] border py-6 border-white/10 rounded-xl ">
          <div className="flex gap-6 items-center">
            <div className="w-fit h-fit p-3 bg-purple-500/30 text-purple-500 rounded-lg border border-purple-700/50">
              <FaServer size={20} />
            </div>
            <p className="text-sm font-poppins font-bold tracking-widest">
              Backend
            </p>
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
        {/* Frontend */}
        <div className="technologies-box w-full min-h-60 flex flex-col cursor-pointer gap-4 px-6 p-2 bg-[#0F1415] border py-6 border-white/10 rounded-xl ">
          <div className="flex gap-6 items-center">
            <div className="w-fit h-fit p-3 bg-blue-500/30 text-blue-500 rounded-lg border border-blue-700/50">
              <MdDesktopWindows size={20} />
            </div>
            <p className="text-sm font-poppins font-bold tracking-widest">
              Frontend
            </p>
          </div>
          <div className="flex flex-col mt-2">
            <ul className="list-disc pl-5 font-poppins text-sm text-gray-400 font-medium tracking-wider flex flex-col gap-1">
              <li>React</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>Tailwind CSS</li>
              <li>HTML & CSS</li>
            </ul>
          </div>
        </div>
        {/* Database */}
        <div className="technologies-box w-full min-h-60 flex flex-col cursor-pointer gap-4 px-6 p-2 bg-[#0F1415] border py-6 border-white/10 rounded-xl ">
          <div className="flex gap-6 items-center">
            <div className="w-fit h-fit p-3 bg-green-500/30 text-green-500 rounded-lg border border-green-700/50">
              <FaDatabase size={20} />
            </div>
            <p className="text-sm font-poppins font-bold tracking-widest">
              Database
            </p>
          </div>
          <div className="flex flex-col mt-2">
            <ul className="list-disc pl-5 font-poppins text-sm text-gray-400 font-medium tracking-wider flex flex-col gap-1">
              <li>MySQL</li>
            </ul>
          </div>
        </div>
        {/* Tools */}
        <div className="technologies-box w-full min-h-60 flex flex-col cursor-pointer gap-4 px-6 p-2 bg-[#0F1415] border py-6 border-white/10 rounded-xl ">
          <div className="flex gap-6 items-center">
            <div className="w-fit h-fit p-3 bg-cyan-500/30 text-cyan-500 rounded-lg border border-cyan-700/50">
              <FaTools size={20} />
            </div>
            <p className="text-sm font-poppins font-bold tracking-widest">
              Tools & Others
            </p>
          </div>
          <div className="flex flex-col mt-2">
            <ul className="list-disc pl-5 font-poppins text-sm text-gray-400 font-medium tracking-wider flex flex-col gap-1">
              <li>Git</li>
              <li>GitHub</li>
              <li>PostMan</li>
              <li>VS Code</li>
              <li>Intellij</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
