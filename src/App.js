import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import Board from './components/GameOfLife/Board'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import ProjectBlog from "./components/Projects/ProjectBlog";

function App() {
  const [load, upadateLoad] = useState(true);
  const [navHeight, setNavHeight] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
 
  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar setNavHeight={setNavHeight}/>
        <ScrollToTop />
     
        <Routes>
          <Route path="/" element={<Home navHeight={navHeight}/>} />
          <Route path="/project" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectBlog />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
