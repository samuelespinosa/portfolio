import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 pb-12">
        {[
          CgCPlusPlus,
          DiJavascript1,
          TbBrandGolang,
          DiNodejs,
          DiReact,
          DiMongodb,
          SiNextdotjs,
          DiGit,
          SiFirebase,
          SiPostgresql,
          DiPython,
          DiJava,
        ].map((Icon, index) => (
          <div key={index} className={`flex justify-center items-center text-6xl text-blue-200 hover:text-blue-500 transition`}>
            <Icon />
          </div>
        ))}
      </div>
  );
}

export default Techstack;
