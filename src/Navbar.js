import React from "react";
import "./Navbar.css";
import Sidebar from "./Sidebar";

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="navbar__content">
        <a href="#contactMe"> Contact Me </a>
        <a href="#qualifications"> Qualifications </a>
        <a href="#projects"> Projects </a>
        <a href="#aboutMe"> About Me</a>
      </div>
      <Sidebar right></Sidebar>
    </div>
  );
}

export default Navbar;
