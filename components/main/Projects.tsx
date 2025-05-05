import React from "react";
import ProjectCard from "../sub/ProjectCard";


const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="w-[100%] h-[100%] flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/2.png"
          title="Modern Next.js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/1.png"
          title="DESIGN & HIGH QUALITY"
          description="A sleek Nike product landing page showcasing modern design, responsive layout, and smooth animations."
        />
        <ProjectCard
          src="/3.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>

    </div>
  );
};

export default Projects;
