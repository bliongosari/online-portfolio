import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="navbar__content">
        <a href="/"> Contact Me </a>
        <a href="/"> Qualifications </a>
        <a href="/"> Projects </a>
        <a href="/"> About Me</a>
      </div>
    </div>
  );
}

export default Navbar;
