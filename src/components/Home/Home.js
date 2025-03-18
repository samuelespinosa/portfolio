import React, { useEffect } from "react";
//import homeLogo from "../../Assets/home-main2.png";
import Particle from "../Particle";
import logoReact from "../../Assets/icons8-react-400.png";
import {AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Board from "../GameOfLife/Board";


function Home({navHeight}) {

  return (
    <div id="home" className="bg-gray-900">
      <section id="banner" className="bg-white relative overflow-hidden">
          <Board/>
          <div 
            className="bg-white flex flex-col justify-center align-items-center"
            style={{ height: `calc(100vh - ${navHeight}px)` }}
            
            >
              <h1 className="heading text-4xl relative z-20 ml-10 mb-10 text-gray-900 font-bold text-center">
                 HI, I'M SAMUEL ESPINOSA
                <span className="text-blue-500 d-block pt-12 highlight"> MERN Stack Developer</span>
              </h1>
          </div>
      </section>
      <div className="container mx-auto mx-4 mt-5 text-white">
        <Particle/>
        <div className="flex flex-wrap items-center">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-center items-center">
              <img
                src={logoReact}
                alt="home pic"
                className="max-w-md h-auto object-contain"
              />
            </div>
            <div className="flex items-end justify-center bg-gray">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-5">
                  LET ME <span className="text-blue-500 shimmer">INTRODUCE</span> MYSELF
                </h1>
                <p className="text-base home-about-body">
                  I find satisfaction in expressing myself through my work and actions. I enjoy tackling challenges that help me grow and add value, especially on meaningful projects.
                </p>
                <p className="text-base home-about-body">
                  My expertise lies in <b className="text-blue-500 shimmer">front-end development</b>, where I create interactive and efficient web applications using modern technologies.
                </p>
                <p className="text-base home-about-body">
                  I have experience with <b className="text-blue-500 shimmer">JavaScript, React.js, and Material UI</b>, and I take pride in writing clean, maintainable, and scalable code.
                </p>
                <p className="text-base home-about-body">
                  I'm also comfortable with backend development using <b className="text-blue-500 shimmer">Node.js and Express.js</b>.
                </p>
                <p className="text-base home-about-body">
                  I believe in continuous learning and leveraging <b className="text-blue-500 shimmer">creativity, perseverance, and efficiency</b> to deliver high-quality solutions.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="home-about-social text-center mt-20">
          <h1 className="text-3xl font-bold mb-3">FIND ME ON</h1>
          <p className="text-lg mb-5">
            Feel free to <span className="text-blue-500 shimmer">connect</span> with me
          </p>
          <ul className="flex space-x-4 justify-center">
            <li className="social-icons">
              <a
                href="https://github.com/samuelespinosa"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-gray-600 hover:text-purple-500"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/samuel-espinosa-botero-685428234/"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-gray-600 hover:text-purple-500"
              >
                <FaLinkedinIn />
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    
    </div>
  );
}

export default Home;
