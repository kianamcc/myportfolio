import React from "react";
import "./Header.css";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <header className="header" id="Home">
      <section className="header-container">
        <h1 className="intro">Hi, I'm Kiana McCullough</h1>
        <div className="headline">
          <Typewriter
            skipAddStyles={true}
            options={{
              strings: [
                "Web Developer",
                "Frontend Developer",
                "Software Developer",
              ],
              autoStart: true,
              loop: true,
              pauseFor: 1000,
              delay: 80,
            }}
          />
        </div>
        <h4 className="intro-description">
          Welcome to my coding playground! I'm on a mission to blend creativity
          with technology, crafting digital experiences that leave a lasting
          impression.
        </h4>
        <Link
          to="contact"
          className="connect-btn"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Let's connect!
        </Link>
        <div className="header-links"></div>
      </section>
    </header>
  );
};

export default Header;
