import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import resume from "../../assets/KianaMcCulloughResume.pdf";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="header-logo">
          <img className="logo-img" src={logo} alt="" />
        </div>
        <ul className="nav-links">
          <li className="nav-item">
            <Link
              to="header"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={() => console.log("clicked")}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contact
            </Link>
          </li>
          <li>
            <div className="nav-resume">
              <a
                className="resume-link"
                href={resume}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
