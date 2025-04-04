import React from "react";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import {projectList} from "../../data";

function Projects() {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white py-10 px-4 flex flex-col items-center">
      <Particle />
      
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-white uppercase">
          <span className="text-blue-500 shimmer">some</span> of my projects
        </h1>
      </div>
      <div> 
        I'm working on my projects descriptions
      </div>
      {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            imgPath={project.imgPath}
            isBlog={false}
            title={project.title}
            url={project.url}
            description={project.description}
            ghLink={project.ghLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>*/}
    </div>
  );
}

export default Projects;
