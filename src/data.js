import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineFileText } from "react-icons/ai";
import elfLogin from "./Assets/Projects/elfLogin.png";
import elfChat from "./Assets/Projects/elfChat.png";
import elfSignUp from "./Assets/Projects/elfSingUp.png";

export const navLinks = [
  { name: "Home", path: "/", icon: <AiOutlineHome /> },
  { name: "About", path: "/about", icon: <AiOutlineUser /> },
  { name: "Projects", path: "/project", icon: <AiOutlineProject /> },
  { name: "Resume", path: "/resume", icon: <AiOutlineFileText /> },
];


export const projectList = [
    {
        url: "elvish-dictionary",
        imgPath: elfLogin,
        title: "Elvish Dictionary",
        description: "A dictionary for translating words from Elvish (The Lord of the Rings).",
        articlePath: "/content/elvish-chat.md",
        ghLink: "https://github.com/samuelespinosa/chatElfo",
        gallery: [elfChat,elfLogin,elfSignUp],
    },
   
];