import { Brain, GamepadDirectional, Goal, Users } from "lucide-react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
   useEffect(() => {
      gsap.fromTo(
        ".about-section-box",
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
            trigger: ".about-section-box",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    }, []);
  return (
    <div className="w-full h-fit px-2 py-4 md:p-4">
      <div className="flex">
        <div className="flex flex-col gap-2 px-4">
          <p className="text-green-400 font-poppins font-semibold tracking-wide">
            // ABOUT
          </p>
          <p className="font-poppins text-2xl font-bold tracking-wider">
            Who Am I?
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-col md:flex-row items-center gap-10 about-section-box">
        <div className="flex gap-4 w-full md:w-1/2 px-2 font-inter font-medium text-gray-400 tracking-wide text-[14px]">
          <div>
            <p className="text-left">
              I'm a BCA student and aspiring Java Full Stack Developer who
              enjoys building practical, scalable web applications and solving
              challenging problems. I primarily work with Java, Spring Boot,
              React, MySQL, and REST APIs, while continuously expanding my
              knowledge of modern web technologies. <br /> <br />I have a strong
              interest in software engineering and backend development, and I
              enjoy turning ideas into functional applications. Alongside
              development, I regularly practice Data Structures & Algorithms to
              improve my problem-solving and logical thinking. <br /> <br />
              Currently, I'm focused on strengthening my skills in Spring Boot,
              React, TypeScript, databases, security, and production-level
              application development, with the goal of becoming a well-rounded
              software engineer.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-fit">
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4">
            <div>
              <div className="about-section-box w-full md:w-70 h-full flex gap-4 cursor-pointer px-6 p-2 bg-[#0F1415] border py-6 border-white/10 rounded-xl ">
                <div className="w-fit h-fit p-4 bg-purple-500/30 text-purple-500 rounded-lg border border-purple-700/50">
                  <Brain size={20} />
                </div>
                <div className="flex flex-col mr-5">
                  <p className="font-medium font-poppins text-sm tracking-wide p-2">
                    Education
                  </p>
                  <p className="font-inter text-xs font-medium tracking-wider text-gray-400">
                    BCA (3rd Year) <br />
                    Aspiring for MCA.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="about-section-box w-full md:w-70 h-full flex gap-4 cursor-pointer px-6 p-2 bg-[#0F1415] border py-6 border-white/10 rounded-xl ">
                <div className="w-fit h-fit p-4 bg-green-500/30 text-green-500 rounded-lg border border-green-700/50">
                  <Goal size={20} />
                </div>
                <div className="flex flex-col mr-5">
                  <p className="font-medium font-poppins text-sm tracking-wide p-2">
                    Goal
                  </p>
                  <p className="font-inter text-xs whitespace-nowrap font-medium tracking-wider text-gray-400">
                    Software Engineer <br />
                    Product Based Company
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="about-section-box w-full md:w-70 h-full cursor-pointer flex gap-4 px-6 p-2 bg-[#0F1415] border py-6 border-white/10 rounded-xl ">
                <div className="w-fit h-fit p-4 bg-cyan-500/30 text-cyan-500 rounded-lg border border-cyan-700/50">
                  <GamepadDirectional size={20} />
                </div>
                <div className="flex flex-col mr-5">
                  <p className="font-medium font-poppins text-sm tracking-wide p-2">
                    Interests
                  </p>
                  <p className="font-inter text-xs whitespace-nowrap font-medium tracking-wider text-gray-400">
                    Full Stack Development <br />
                    Problem Solving.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="about-section-box w-full md:w-70 h-full flex gap-4 cursor-pointer px-6 p-2 bg-[#0F1415] border py-6 border-white/10 rounded-xl ">
                <div className="w-fit h-fit p-4 bg-blue-500/30 text-blue-500 rounded-lg border border-blue-700/50">
                  <Users size={20} />
                </div>
                <div className="flex flex-col mr-5">
                  <p className="font-medium font-poppins text-sm tracking-wide p-2">
                    Open To
                  </p>
                  <p className="font-inter text-xs whitespace-nowrap font-medium tracking-wider text-gray-400">
                    Internships <br />
                    Collaborations <br />
                    Exciting Opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
