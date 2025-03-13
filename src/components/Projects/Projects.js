import React from "react";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

const projects = [
  {
    imgPath: chatify,
    title: "Chatify",
    description:
      "Personal Chat Room or Workspace built with React.js, Material-UI, and Firebase. Supports real-time messaging, image sharing, and reactions on messages.",
    ghLink: "https://github.com/soumyajit4419/Chatify",
    demoLink: "https://chatify-49.web.app/",
  },
  {
    imgPath: bitsOfCode,
    title: "Bits-0f-C0de",
    description:
      "A personal blog built with Next.js and Tailwind CSS, using Markdown for content. Features dark mode and easy blog writing.",
    ghLink: "https://github.com/soumyajit4419/Bits-0f-C0de",
    demoLink: "https://blogs.soumya-jit.tech/",
  },
  {
    imgPath: editor,
    title: "Editor.io",
    description:
      "Online code and Markdown editor with HTML, CSS, and JS preview. Supports auto-save and Local Storage.",
    ghLink: "https://github.com/soumyajit4419/Editor.io",
    demoLink: "https://editor.soumya-jit.tech/",
  },
  {
    imgPath: leaf,
    title: "Plant AI",
    description:
      "CNN-based image classifier trained on a plant disease dataset. Achieved 98% accuracy using ResNet34.",
    ghLink: "https://github.com/soumyajit4419/Plant_AI",
    demoLink: "https://plant49-ai.herokuapp.com/",
  },
  {
    imgPath: suicide,
    title: "AI For Social Good",
    description:
      "Uses NLP for detecting suicide-related posts and ideation in cyberspace to aid in prevention.",
    ghLink: "https://github.com/soumyajit4419/AI_For_Social_Good",
  },
  {
    imgPath: emotion,
    title: "Face Recognition & Emotion Detection",
    description:
      "Trained a CNN classifier on the FER-2013 dataset using Keras and TensorFlow. Achieved 60.1% accuracy. Integrated with OpenCV for real-time emotion detection.",
    ghLink: "https://github.com/soumyajit4419/Face_And_Emotion_Detection",
  },
];

function Projects() {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white py-10 px-4 flex flex-col items-center">
      <Particle />
      
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-white uppercase">
          <span className="text-blue-500 shimmer">some</span> of my projects
        </h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imgPath={project.imgPath}
            isBlog={false}
            title={project.title}
            description={project.description}
            ghLink={project.ghLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
