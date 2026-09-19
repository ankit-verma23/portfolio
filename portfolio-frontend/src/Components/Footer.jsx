import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaRegCopyright } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  useEffect(() => {
    gsap.fromTo(
      ".footer-box",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer-section",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);
  return (
    <div>
      <div className="w-full h-fit px-2 py-4 md:p-4 flex justify-between gap-4 footer-section">
        {/* Overall Design */}
        <div>
          <div className="flex">
            <div className="flex flex-col gap-2 px-4">
              <p className="text-green-400 font-poppins font-semibold tracking-wide">
                // CONTACT
              </p>
              <p className="font-poppins text-2xl font-bold tracking-wider">
                Let's Connect
              </p>
            </div>
          </div>
          <div className="px-4 mt-6">
            <div>
              <p className="font-poppins md:whitespace-nowrap font-medium tracking-wider text-sm text-gray-400">
                Have a project in mind or just want to say hi? <br />
                I'd love to hear from you!
              </p>
            </div>
            <div className="mt-4 flex flex-col md:flex-row gap-4">
              {/* Email */}
              <div className="footer-box w-full md:w-60 h-fit px-6 py-4 cursor-pointer flex items-center gap-3 bg-[#0F1415] border border-white/10 rounded-xl ">
                {/* logo */}
                <div className="text-cyan-500 ">
                  <MdEmail size={30} />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[12px] font-poppins font-medium tracking-widest leading-none">
                    Email
                  </p>
                  <a
                    className="text-[8px] block font-poppins font-normal tracking-widest leading-none"
                    href="#"
                  >
                    ankitverma09696@gmail.com
                  </a>
                </div>
              </div>
              {/* LinkedIn */}
              <div className="footer-box w-full md:w-60 h-fit px-6 py-4 cursor-pointer flex items-center gap-3 bg-[#0F1415] border border-white/10 rounded-xl ">
                {/* logo */}
                <div className="text-blue-500 ">
                  <FaLinkedin size={30} />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[12px] font-poppins font-medium tracking-widest leading-none">
                    LinkedIn
                  </p>
                  <a
                    className="text-[10px] block font-poppins font-normal tracking-widest leading-none"
                    href="https://www.linkedin.com/in/ankit-verma23/"
                  >
                    Connect With Me
                  </a>
                </div>
              </div>
              {/* Github */}
              <div className="footer-box w-full md:w-60 h-fit cursor-pointer px-6 py-4 flex items-center gap-3 bg-[#0F1415] border border-white/10 rounded-xl ">
                {/* logo */}
                <div className="text-white ">
                  <FaGithub size={30} />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[12px] font-poppins font-medium tracking-widest leading-none">
                    GutHub
                  </p>
                  <a
                    className="text-[8px] block font-poppins font-normal tracking-widest whitespace-nowrap leading-none"
                    href="https://github.com/ankit-verma23"
                  >
                    github.com/ankit-verma23
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Terminal Card */}
        <div className="w-full hidden md:hidden lg:inline-block h-fit cursor-pointer ml-4 transition-all duration-300 hover:scale-105 hover:-translate-y-2">
          <div className="w-full max-w-md bg-[#0B0F10] border border-white/10 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,255,170,0.08)]">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>

              <span className="ml-auto text-xs text-gray-500 font-mono">
                terminal
              </span>
            </div>

            {/* Terminal Body */}
            <div className="p-5 font-mono text-xs leading-6">
              <p>
                <span className="text-green-400">$</span>{" "}
                <span className="text-gray-300">whoami</span>
              </p>

              <p className="text-gray-400">&gt; Ankit Verma</p>

              <p className="mt-2">
                <span className="text-green-400">$</span>{" "}
                <span className="text-gray-300">role</span>
              </p>

              <p className="text-gray-400">&gt; Java Full Stack Developer</p>

              <p className="mt-2">
                <span className="text-green-400">$</span>{" "}
                <span className="text-gray-300">status</span>
              </p>

              <p className="text-green-400">
                &gt; Available for opportunities_
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="bg-[#050708] w-full mt-16 text-white font-poppins gap-2 md:gap-0 font-medium flex flex-col lg:flex-row justify-between items-center py-4 px-16 h-fit border-t border-[#1F2937]">
        <h3 className="font-bold cursor-pointer font-inter text-white">
          <span className="text-green-400">&lt;</span>
          Ankit/
          <span className="text-green-400">&gt;</span>
        </h3>
        <ul className="cursor-pointer hidden md:flex items-center gap-6  ">
          <li className="transition-all duration-300 hover:-translate-y-0.5 ">
            <a href="https://github.com/ankit-verma23">
              <FaGithub size={25} />
            </a>
          </li>
          <li className="transition-all duration-300 hover:-translate-y-0.5 ">
            <a href="https://www.linkedin.com/in/ankit-verma23/">
              <FaLinkedin size={25} />
            </a>
          </li>
          <li className="transition-all duration-300 hover:-translate-y-0.5 ">
            <a href="https://leetcode.com/u/isthis_ankit/">
              <SiLeetcode size={25} />
            </a>
          </li>
          <li className="transition-all duration-300 hover:-translate-y-0.5 ">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ankitverma09696@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail size={25} />
            </a>
          </li>
        </ul>
        <div className="flex gap-1 items-center">
          <div className="text-gray-400"><FaRegCopyright size={10} /></div>
          <p className="font-poppins whitespace-nowrap font-medium tracking-wider text-[10px] text-gray-400">
          2026 Ankit Verma, All rights reserved.
        </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
