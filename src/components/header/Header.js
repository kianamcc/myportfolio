import React from "react";
import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="header-container">
        <h1 className="intro">Hi, I'm Kiana McCullough</h1>
        <h3 className="headline">Web Developer & Web Enthusiast</h3>
        <p className="intro-description">
          I like creating things on the web, just like this one right here!
        </p>
        <button className="connect-btn">
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Let's connect
          </Link>
        </button>
        <div className="header-links"></div>
      </div>
    </header>
  );
};

export default Header;
