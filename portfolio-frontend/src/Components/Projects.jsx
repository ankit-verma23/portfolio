import React from "react";
import Card from "./Card";
import Expense from '../assets/Expense-Tracker.png'
import Course from '../assets/Course-Management.png'
import Hospital from '../assets/Hospital-Management.png'

function Projects() {
  return (
    <div className="w-full h-fit p-4 cursor-pointer">
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
        <div className="flex gap-4">
            <Card img={Expense} title="Expense Tracker" description="Full-stack expense management
            application with JWT authentication,
            charts and category management." />
            <Card img={Course} title="Course Management" description="Backend system for managing courses, students and instructors." />
            <Card img={Hospital} title="Hospital Management" description="Designed backend structure for hospital management system with ER diagrams and APIs." />
        </div>
      </div>
    </div>
  );
}

export default Projects;
