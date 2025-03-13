import React, { useState, useEffect } from "react";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-900 text-white py-10">
      <Particle />
      
      <div className="flex justify-center mb-6">
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition"
        >
          <AiOutlineDownload className="text-xl" />
          Download CV
        </a>
      </div>
      
      <div className="flex justify-center w-full">
        <Document file={pdf} className="flex justify-center">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </div>
      
      <div className="flex justify-center mt-6">
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition"
        >
          <AiOutlineDownload className="text-xl" />
          Download CV
        </a>
      </div>
    </div>
  );
}

export default ResumeNew;