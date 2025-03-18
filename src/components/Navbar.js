import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
//import logo from "../Assets/logo.png";
import {AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { navLinks } from '../data.js';
function NavBar({ setNavHeight }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

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

  useEffect(() => {
    const updateHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.getBoundingClientRect().height);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [setNavHeight]);



  return (
    <nav ref={navRef} className={`sticky top-0 left-0 w-full z-50 bg-gray-900 shadow-md transition-all duration-300
      ${menuOpen ? "h-screen" : "h-auto"}`}>

      <div className="container mx-auto flex justify-between py-4 px-6 md:py-4 md:px-6">
        <div className="flex flex-row justify-between w-full">
          <div className="flex w-full justify-between items-center">
            <Link to="/">
              <img src={''} alt="brand" className="h-10" />
            </Link>
            <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
              {menuOpen ? <AiOutlineClose className="w-10 h-7" /> : <AiOutlineMenu className="w-10 h-7" />}
            </button>
          </div> 
          <div className={`absolute top-16 left-0 w-full bg-gray-900 transition-all duration-300 
            ${menuOpen ? "w-full flex flex-column px-5 gap-y-5 my-10 text-xl" : "hidden md:flex md:relative md:top-0 md:flex-row md:py-0 md:gap-6 justify-center"}`}>
              {navLinks.map((item,index)=>
              <Link 
                to={item.path}  onClick={()=> menuOpen && toggleMenu()} 
                className="text-white flex items-center gap-2 hover:text-gray-300 no-underline uppercase"
                key={index}  
              >
                {item.icon} {item.name}
              </Link>
              )}
          </div>
      </div>
      </div>
    </nav>
  );
}


export default NavBar;
