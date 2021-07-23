import { slide as Menu } from "react-burger-menu";
import React from "react";
import "./Sidebar.css";

class Sidebar extends React.Component {
  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu right>
        <a className="menu-item" href="#">
          Home
        </a>
        <a className="menu-item" href="#aboutMe">
          About Me
        </a>
        <a className="menu-item" href="#aboutMe">
          Qualifications
        </a>
        <a className="menu-item" href="#projects">
          Projects
        </a>
        <a className="menu-item" href="#contactMe">
          Contact Me
        </a>
      </Menu>
    );
  }
}

export default Sidebar;
