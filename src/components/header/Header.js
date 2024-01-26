import React from "react";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

import "./Header.css";

const Header = () => {
  return (
    <header className="header" id="Home">
      <section className="header-container">
        <h1 className="intro">Hi, I'm Kiana McCullough</h1>
        <div className="headline">
          <Typewriter
            skipAddStyles={true}
            options={{
              strings: ["Web Developer", "Frontend Developer"],
              autoStart: true,
              loop: true,
              pauseFor: 1000,
              delay: 80,
            }}
          />
        </div>
        <h4 className="intro-description">
          I like creating things on the web, just like this website right here!
        </h4>
        <Link
          to="contact"
          className="connect-btn"
          spy={true}
          smooth={true}
          offset={-58}
          duration={500}
        >
          Let's connect
        </Link>
        <div className="header-links"></div>
      </section>
    </header>
  );
};

export default Header;
