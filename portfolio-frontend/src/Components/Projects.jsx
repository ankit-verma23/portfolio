import React from "react";
import Card from "./Card";
import Expense from '../assets/Expense-Tracker.png'
import Course from '../assets/Course-Management.png'
import Hospital from '../assets/Hospital-Management.png'
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
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
            start: "top 50%",
            toggleActions: "play none none none",
          },
        },
      );
    }, []);
  return (
    <div className="w-full h-fit px-2 md:p-4 cursor-pointer">
      <div className="flex">
        <div className="flex flex-col gap-2 px-4">
          <p className="text-green-400 font-poppins font-semibold tracking-wide">
            // PROJECTS
          </p>
          <p className="font-poppins text-2xl font-bold tracking-wider">
            My Recent Work
          </p>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex w-full flex-col md:flex-row gap-4 philosophy-section">
            <div className="philosophy-box">
              <Card img={Expense} title="Expense Tracker" description="Full-stack expense management
            application with JWT authentication,
            charts and category management." />
            </div>
            <div className="philosophy-box">
              <Card img={Course} title="Course Management" description="Backend system for managing courses, students and instructors." />
            </div>
            <div className="philosophy-box">
              <Card img={Hospital} title="Hospital Management" description="Designed backend structure for hospital management system with ER diagrams and APIs." />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
