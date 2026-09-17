import Navbar from "../Components/Navbar";
import Button from "../Components/Button";
import SecondaryButton from "../Components/SecondaryButton";
import image from "../assets/image.jpg";
import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import {
  Binary,
  Brain,
  ClipboardCheck,
  ExternalLink,
  SquareCheckBig,
  TextAlignJustify,
  UserRoundGroup,
} from "lucide-react";
import { FaJava, FaReact, FaJs, FaGitAlt } from "react-icons/fa";

import { SiSpringboot, SiMysql, SiTailwindcss } from "react-icons/si";
import Projects from "../Components/Projects";
import About from "../Components/About";
import Technologies from "../Components/Technologies";
import Footer from "../Components/Footer";

function Portfolio() {
  return (
    <div className="bg-[#050708] w-full min-h-screen text-white">
      <Navbar />
      <div id="home" className="w-full min-h-screen text-white font-poppins">
        <div className="px-20 py-12">
          <div className="w-full flex ">
            <div className="w-1/2">
              <div className="flex items-center gap-2 text-center mb-2">
                <div className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px_1px_rgba(34,197,94,0.8)]"></div>
                <p className="text-gray-300 font-light text-[10px] tracking-widest">
                  Available for opportunities
                </p>
              </div>
              <div>
                <h1 className="font-bold font-inter text-8xl">Hi, I'm</h1>
                <h1 className="font-bold font-inter text-9xl bg-linear-to-r from-green-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
                  Ankit.
                </h1>
              </div>
              <div className="mb-4">
                <p className="text-2xl font-semibold transform-content mb-3 text-gray-300">
                  Java Full Stack Developer
                </p>
                <p className="font-inter tracking-wider text-gray-400">
                  I build scalable backend syatem and modern <br />
                  web application using Java, Spring Boot, and React. <br />
                  Passinate about solving real-world problems <br />
                  through code.
                </p>
              </div>
              <div className="flex gap-4">
                <Button content="View Projects" />
                <SecondaryButton content="Lets Talk" />
              </div>
              <div className="mt-6">
                <ul className="cursor-pointer flex items-center gap-4">
                  <li className="p-1 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,255,0.35)] border border-white rounded-full">
                    <a href="https://github.com/ankit-verma23">
                      <FaGithub />
                    </a>
                  </li>
                  <li className="p-1 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,255,0.35)] border border-white rounded-full">
                    <a href="https://www.linkedin.com/in/ankit-verma23/">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="p-1 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,255,0.35)] border border-white rounded-full">
                    <a href="https://leetcode.com/u/isthis_ankit/">
                      <SiLeetcode />
                    </a>
                  </li>
                  <li className="p-1 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,255,0.35)] border border-white rounded-full">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=ankitverma09696@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoMailOutline />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-1/2 h-fit flex justify-end ">
              <div className="p-0.5 shadow-[0_0_30px_rgba(0,255,170,0.08)] rounded-2xl cursor-pointer bg-linear-to-r from-green-400 via-blue-500 to-purple-500  transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <div
                  className="
                    h-112.5 w-112.5
                    rounded-2xl
                    bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="px-20 w-full h-fit mb-6">
          <div className="px-3 py-4 rounded-xl border border-white/10 flex justify-evenly">
            <div className="flex gap-4">
              <div className="bg-gray-600/50 text-white p-2 w-fit rounded-lg">
                <ClipboardCheck size={20} />
              </div>
              <div className="">
                <p className="font-medium text-sm">250+</p>
                <p className="text-gray-400 text-xs">DSA Problems</p>
              </div>
            </div>

            <div className="flex gap-4 ">
              <div className="bg-gray-600/50 text-white p-2 w-fit rounded-lg">
                <SquareCheckBig size={20} />
              </div>
              <div className="">
                <p className="font-medium text-sm">3+</p>
                <p className="text-gray-400 text-xs">Project Completed</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-gray-600/50 text-white p-2 w-fit rounded-lg">
                <TextAlignJustify size={20} />
              </div>
              <div>
                <p className="font-medium text-sm">10+</p>
                <p className="text-gray-400 text-xs">Technologies</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-gray-600/50 text-white p-2 w-fit rounded-lg">
                <ExternalLink size={20} />
              </div>
              <div>
                <p className="font-medium text-sm">Open</p>
                <p className="text-gray-400 text-xs">To Opportunities</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-10 w-full h-fit mb-16">
          <div className="flex gap-4 justify-evenly bg-[#0F1415] border py-6 border-white/10 rounded-xl">
            <div className="flex gap-2 items-center">
              <div>
                <FaJava size={36} />
              </div>
              <p className="font-poppins text-xs">Java</p>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <SiSpringboot size={36} />
              </div>
              <p className="font-poppins text-xs">Spring Boot</p>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <FaReact size={36} />
              </div>
              <p className="font-poppins text-xs">React</p>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <SiMysql size={36} />
              </div>
              <p className="font-poppins text-xs">MySQL</p>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <SiTailwindcss size={36} />
              </div>
              <p className="font-poppins text-xs">Tailwind CSS</p>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <FaJs size={36} />
              </div>
              <p className="font-poppins text-xs">JavaScript</p>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <FaGitAlt size={36} />
              </div>
              <p className="font-poppins text-xs">Git</p>
            </div>
          </div>
        </div>
        <div className="px-14 w-full h-fit mb-10">
          <div>
            <div className="text-center flex flex-col gap-2 mb-14">
              <p className="font-inter tracking-wide font-semibold text-green-400">
                // MY PHILOSOPHY
              </p>
              <h2 className="font-bold font-inter text-2xl tracking-wider">
                Beyond Just Code
              </h2>
              <p className="text-gray-400 tracking-wide">
                I believe in building solutions that make a difference. Clean
                code, <br />
                scalable architecture and great user experiences.
              </p>
            </div>
            <div className="w-full h-fit flex gap-4 ">
              <div className="w-100 flex gap-4 px-6 p-2 bg-[#0F1415] border py-6 border-white/10 rounded-xl ">
                <div className="w-fit h-fit p-4 bg-purple-500/30 text-purple-500 rounded-lg border border-purple-700/50">
                  <Brain size={20} />
                </div>
                <div className="flex flex-col mr-5">
                  <p className="font-medium font-poppins text-sm tracking-wide p-2">
                    Problem Solver
                  </p>
                  <p className="font-inter text-xs font-medium tracking-wider text-gray-400">
                    I enjoy breaking down complex problems <br />
                    and finding simple, efficient solutions.
                  </p>
                </div>
              </div>

              <div className="w-100 flex gap-4 px-6 p-2 bg-[#0F1415] border py-6 border-white/10 rounded-xl ">
                <div className="w-fit h-fit p-4 bg-green-500/30 text-green-500 rounded-lg border border-green-700/50">
                  <Binary size={20} />
                </div>
                <div className="flex flex-col mr-5">
                  <p className="font-medium font-poppins text-sm tracking-wide p-2">
                    Continuous Learner
                  </p>
                  <p className="font-inter text-xs font-medium tracking-wider text-gray-400">
                    Always exploring new technologies <br />
                    and improving my skills.
                  </p>
                </div>
              </div>

              <div className="w-100 flex gap-4 px-6 p-2 bg-[#0F1415] border py-6 border-white/10 rounded-xl ">
                <div className="w-fit h-fit p-4 bg-blue-500/30 text-blue-500 rounded-lg border border-blue-700/50">
                  <UserRoundGroup size={20} />
                </div>
                <div className="flex flex-col mr-5">
                  <p className="font-medium font-poppins text-sm tracking-wide p-2">
                    Team Player
                  </p>
                  <p className="font-inter text-xs font-medium tracking-wider text-gray-400">
                    I love collaborating with others <br />
                    and building great things together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className="w-full h-fit bg-[#050708] p-4 mt-16">
        <Projects />
      </div>
      <div id="about" className="w-full h-fit bg-[#050708] p-4 mt-16">
        <About />
      </div>
      <div id="technologies" className="w-full h-fit bg-[#050708] p-4 mt-16">
        <Technologies />
      </div>
      <div id="contact" className="w-full h-fit bg-[#050708] p-4 mt-16">
        <Footer />
      </div>
    </div>
  );
}

export default Portfolio;
