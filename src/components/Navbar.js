import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import { AiOutlineHome, AiOutlineUser, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);


  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-md transition-all duration-300
      ${menuOpen ? "h-screen" : "h-auto"}`}>

      <div className="container mx-auto flex justify-between py-4 px-6 md:py-4 md:px-6">
        <div className="flex flex-row justify-between w-full">
          <div className="flex w-full justify-between items-center">
            <Link to="/">
              <img src={logo} alt="brand" className="h-10" />
            </Link>
            <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
              {menuOpen ? <AiOutlineClose className="w-10 h-7" /> : <AiOutlineMenu className="w-10 h-7" />}
            </button>
          </div> 
          <div className={`absolute top-16 left-0 w-full bg-gray-900 transition-all duration-300 
            ${menuOpen ? "w-full flex flex-column px-5 gap-y-5 my-10 text-xl" : "hidden md:flex md:relative md:top-0 md:flex-row md:py-0 md:gap-6 justify-center"}`}>
            <Link to="/"  onClick={()=> menuOpen && toggleMenu()} className="text-white flex items-center gap-2 hover:text-gray-300">
              <AiOutlineHome /> Home
            </Link>
            <Link to="/about" onClick={()=> menuOpen && toggleMenu()} className="text-white flex items-center gap-2 hover:text-gray-300">
              <AiOutlineUser /> About
            </Link>
            <Link to="/resume" onClick={()=> menuOpen && toggleMenu()} className="text-white flex items-center gap-2 hover:text-gray-300">
              <AiOutlineUser /> Resume
            </Link>
          </div>
      </div>
      </div>
    </nav>
  );
}


export default NavBar;
