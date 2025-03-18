import { useParams } from "react-router-dom";
import { projectList } from "../../data";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Particles from "react-tsparticles";
import Particle from "../Particle";

function ProjectBlog() {
  const { id } = useParams();
  const project = projectList.find(p => p.url === id);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (project?.articlePath) {
      fetch(project.articlePath)
        .then(response => response.text())
        .then(text => setContent(text))
        .catch(error => console.error("Error loading markdown:", error));
    }
  }, [project]);

  if (!project) {
    return <h1 className="text-center text-red-500">Project Not Found</h1>;
  }

  return (
    <div className="bg-gray-900 w-full h-full py-10">
         <Particle/>
        <div className="container p-5 bg-gray-800 text-white rounded-2xl shadow-lg overflow-hidden relative z-10">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <img src={project.imgPath} alt={project.title} className="w-96 h-60 object-cover rounded-lg mt-4" />
        <p className="text-gray-400 text-lg mt-4">{project.description}</p>

        {/* Render Markdown Content */}
        <div className="prose prose-invert text-gray-300 max-w-3xl mt-6">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>

        {/* Image Gallery */}
        {project.gallery && (
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.gallery.map((img, index) => (
                <img key={index} src={img} alt={`Gallery ${index}`} className="w-full h-40 object-cover rounded-lg" />
            ))}
            </div>
        )}

        {/* Links */}
        <div className="mt-6 flex gap-4">
            <a href={project.ghLink} target="_blank" className="text-blue-400" rel="noreferrer">GitHub</a>
            {project.demoLink && <a href={project.demoLink} target="_blank" className="text-green-400" rel="noreferrer">Demo</a>}
        </div>
        </div>
    </div>
  );
}

export default ProjectBlog;
