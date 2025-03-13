import React from "react";
import Particle from "../Particle";
import Techstack from "./Techstack";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <div className="bg-gray-900 py-10 text-white">
      <Particle />
      <div className="container mx-auto mx-4 my-5">
          <div className="flex justify-center items-center">
            <iframe
            src="https://drive.google.com/file/d/19noQfnBAwsyXGNqcy8jbwBXKvbZvMncX/preview"
            width="640"
            height="360"
            allow="autoplay"
            className="rounded-lg shadow-lg"
            title="about me"
            ></iframe>
        </div>
      </div>
      <div className="container mx-auto mx-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* About Me Section */}
          <div className="md:w-7/12 text-left">
            <h1 className="uppercase text-4xl font-bold mb-5">
              About <span className="text-blue-500 shimmer">me</span>
            </h1>
            <p className="text-base">
              Results-oriented Front-End Developer with 4 years of experience in designing, developing, 
              and maintaining high-quality web applications. Proven ability to solve complex problems, 
              adapt quickly to new challenges, and collaborate effectively within agile teams. 
              Proficient in various front-end and back-end technologies, committed to delivering 
              exceptional user experiences and exceeding client expectations.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-5/12 flex justify-center">
            <img src={laptopImg} alt="about" className="w-full max-w-sm h-auto object-contain" />
          </div>
        </div>

        {/* Skills Section */}
        <h1 className="uppercase text-4xl font-bold text-center mt-10 mb-5">
          <span className="text-blue-500 shimmer">profesional</span> skillset
        </h1>
        <Techstack />
      </div>
    </div>
  );
}

export default About;
