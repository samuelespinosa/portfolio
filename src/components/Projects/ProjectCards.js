import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCard({ imgPath, title, description, ghLink, demoLink, isBlog }) {
  return (
    <div className="bg-gray-800 text-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-4">
      <img src={imgPath} alt="project" className="w-full h-48 object-cover rounded-lg" />
      <div className="mt-4 text-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-300 text-sm mt-2 text-justify">{description}</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <BsGithub /> {isBlog ? "Blog" : "GitHub"}
          </a>
          {!isBlog && demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <CgWebsite /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
