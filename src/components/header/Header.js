import React from "react";
import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="header" id="header">
      <section className="header-container">
        <h1 className="intro">Hi, I'm Kiana McCullough</h1>
        <h3 className="headline">Web Developer & Web Enthusiast</h3>
        <h4 className="intro-description">
          I like creating things on the web, just like this website right here!
        </h4>
        <button className="connect-btn">
          <Link
            to="contact"
            className="connect"
            spy={true}
            smooth={true}
            duration={500}
          >
            Let's connect
          </Link>
        </button>
        <div className="header-links"></div>
      </section>
    </header>
  );
};

export default Header;
