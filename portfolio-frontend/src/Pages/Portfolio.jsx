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
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
  useEffect(() => {
    gsap.from(".profile-image", {
      opacity: 0,
      x: 40,
      duration: 1.2,
    });
  }, []);
  useEffect(() => {
    gsap.from(".hero-text", {
      opacity: 0,
      x: -40,
      duration: 1.2,
    });
  }, []);
  useEffect(() => {
    gsap.fromTo(
      ".philosophy-box",
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
          trigger: ".philosophy-section",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);
  return (
    <div className="bg-[#050708] w-full min-h-screen text-white">
      <Navbar />
      <div id="home" className="w-full min-h-screen text-white font-poppins">
        <div className="px-4 py-6 md:px-20 md:py-12">
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 hero-text ">
              <div className="flex items-center gap-2 text-center mb-2">
                <div className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px_1px_rgba(34,197,94,0.8)]"></div>
                <p className="text-gray-300 font-light text-[8px] md:text-[10px] tracking-widest">
                  Available for opportunities
                </p>
              </div>
              <div>
                <h1 className="font-bold font-inter text-6xl md:text-8xl">Hi, I'm</h1>
                <h1 className="font-bold font-inter text-8xl md:text-9xl bg-linear-to-r from-green-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
                  Ankit.
                </h1>
              </div>
              <div className="mb-4">
                <p className="text-2xl font-semibold transform-content mb-3 text-gray-300">
                  Java Full Stack Developer
                </p>
                <p className="font-inter tracking-wide text-sm md:text-base md:tracking-wider text-gray-400">
                  I build scalable backend syatem and modern <br className="hidden md:inline-block" />
                  web application using Java, Spring Boot, and React. <br />
                  Passinate about solving real-world problems <br />
                  through code.
                </p>
              </div>
              <div className="flex gap-4">
                <a href="#projects"><Button content="View Projects" /></a>
                <a href="#contact"><SecondaryButton content="Lets Talk" /></a>
              </div>
              <div className="mt-6 mb-4">
                <ul className="cursor-pointer flex justify-center md:justify-start md:items-center gap-4">
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
            <div className="w-71 profile-image hidden md:w-1/2 h-fit md:flex justify-end">
              <div className="">
                <div className="p-0.5 float-image shadow-[0_0_30px_rgba(0,255,170,0.08)] rounded-2xl cursor-pointer bg-linear-to-r from-green-400 via-blue-500 to-purple-500  ">
                  <div
                    className="
                    h-70 w-70
                    md:h-112.5 md:w-112.5
                    rounded-2xl
                    bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="px-4 md:px-20 w-full h-fit mb-6">
          <div className="px-3 py-4 rounded-xl border border-white/10 flex flex-col gap-4 md:gap-0 md:flex-row justify-evenly">
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
        <div className="px-10 hidden md:inline-block w-full h-fit mb-16">
          <div className="flex flex-col md:flex-row gap-4 justify-evenly bg-[#0F1415] border py-6 border-white/10 rounded-xl">
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
        <div className="philosophy-section px-4 md:px-14 w-full h-fit mb-10">
          <div className="">
            <div className="text-center flex flex-col gap-2 mb-14">
              <p className="font-inter tracking-wide font-semibold text-green-400">
                // MY PHILOSOPHY
              </p>
              <h2 className="font-bold font-inter text-2xl tracking-wider">
                Beyond Just Code
              </h2>
              <p className="text-gray-400 text-justify md:text-center text-sm md:text-base tracking-wide">
                I believe in building solutions that make a difference. Clean
                code, <br className="hidden md:inline-block" />
                scalable architecture and great user experiences.
              </p>
            </div>
            <div className="w-full h-fit flex flex-col md:flex-row gap-4 ">
              <div className="w-full md:w-100 flex gap-4 philosophy-box px-6 p-2 bg-[#0F1415] border py-6 border-white/10 rounded-xl ">
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

              <div className="philosophy-box w-full md:w-100 flex gap-4 px-6 p-2 bg-[#0F1415] border py-6 border-white/10 rounded-xl ">
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

              <div className="philosophy-box w-full md:w-100 flex gap-4 px-6 p-2 bg-[#0F1415] border py-6 border-white/10 rounded-xl ">
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
      <div id="projects" className="w-full h-fit bg-[#050708] px-2 py-4 md:p-4 mt-16">
        <Projects />
      </div>
      <div id="about" className="w-full h-fit bg-[#050708] px-2 py-4 md:p-4 mt-16">
        <About />
      </div>
      <div id="technologies" className="w-full h-fit bg-[#050708] px-2 py-4 md:p-4 mt-16">
        <Technologies />
      </div>
      <div id="contact" className="w-full h-fit bg-[#050708] px-2 py-4 md:p-4 mt-16">
        <Footer />
      </div>
    </div>
  );
}

export default Portfolio;
