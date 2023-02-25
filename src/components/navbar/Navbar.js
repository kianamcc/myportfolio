import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="header-logo">Kiana</div>
        <ul className="nav-links">
          <li className="nav-item">
            <Link
              to="header"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="projects" spy={true} smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" spy={true} smooth={true} duration={500}>
              Contact
            </Link>
          </li>
          <li className="nav-resume">Resume</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
