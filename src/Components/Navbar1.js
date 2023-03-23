import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  const [isPage, setIsPage] = useState("hero");



  return (
    <div className="main">
      <div className="nav1">
        <div className="div1"
         onClick={() => {
            setIsPage("hero");
          }}
          style={isPage === "hero" ? { color: "black" } : null}
          >
          <a href="#">AP</a>
        </div>
      </div>
      <div className="nav2">
        <div className="div2"
        onClick={() => {
            setIsPage("hero");
          }}
          style={isPage === "hero" ? { color: "black" } : null}>
          <a href="#">Home</a>
        </div>
        <div className="div2"
         onClick={() => {
            setIsPage("about");
          }}
          style={isPage === "about" ? { color: "black" } : null}>
          <a href="#about-me">AboutMe</a>
        </div>
        <div className="div2"
        onClick={() => {
            setIsPage("skill");
          }}
          style={isPage === "skill" ? { color: "black" } : null}
        >
          <a href="#skills">Skills</a>
        </div>
        <div
          className="div2"
          onClick={() => {
            setIsPage("project");
          }}
          style={isPage === "project" ? { color: "black" } : null}
        >
          <a href="#projects">Projects</a>
        </div>
        <div className="div2"
        onClick={() => {
            setIsPage("Contact");
          }}
          style={isPage === "Contact" ? { color: "black" } : null}>
          <a href="#contact">Contact</a>
        </div>
        <div className="resume">
          <a
            // to="/files/ARUNAGOUD_PATIL_RESUME(1).pdf"
            href="https://drive.google.com/file/d/1iiruycfToucbj3U0IOgvgFlWhfrU1HcM/view?usp=sharing"
             target="_blank"
            
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
