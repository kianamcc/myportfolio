import { React, useState } from "react";
import "./MobileNav.css";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-scroll";

const MobileNav = () => {
  const [open, setOpen] = useState(true);
  const navLinks = (
    <ul className="mobile-nav-links">
      <li className="mobile-nav-item">
        <Link
          to="header"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => setOpen((prev) => !prev)}
        >
          Home
        </Link>
      </li>
      <li className="mobile-nav-item">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => setOpen((prev) => !prev)}
        >
          About
        </Link>
      </li>
      <li className="mobile-nav-item">
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => setOpen((prev) => !prev)}
        >
          Projects
        </Link>
      </li>
      <li className="mobile-nav-item">
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => setOpen((prev) => !prev)}
        >
          Contact
        </Link>
      </li>
      <li className="mobile-nav-resume">Resume</li>
    </ul>
  );
  return (
    <nav className="mobile-nav">
      <div className="mobile-nav-container">
        {open ? (
          <AiOutlineMenu
            className="menu-icon"
            size={40}
            onClick={() => setOpen((prev) => !prev)}
          />
        ) : (
          <div className="menu-open">
            {navLinks}
            <AiOutlineCloseCircle
              size={40}
              className="menu-icon"
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default MobileNav;
