import React from "react";
import { Link } from "react-scroll";

import headerImg from "../../assets/avatar.png";
import resumePdf from "../../assets/Kiana_McCullough_Resume.pdf";

import "./Header.css";

const Header = () => {
  return (
    <section className="header" id="Home">
      <div className="header-container">
        <div className="header-left">
          <h1 className="intro">Hi, I'm Kiana McCullough.</h1>
          <p className="intro-description section-paragraph">
            A versatile <span className="text-emphasis">developer</span> and{" "}
            <span className="text-emphasis">designer</span>, blending creativity
            and code to craft captivating and seamless user experiences. 💻✨
          </p>
          <Link
            to="contact"
            className="connect-btn"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <span className="connect-btn-arrow">Let's connect! </span>
          </Link>
          <a
            href={resumePdf}
            className="resume-download-link"
            target="_blank"
            rel="noreferrer"
          >
            Download my resume!
          </a>
        </div>
        <div className="header-right">
          <img src={headerImg} alt="header-img" className="header-img" />
        </div>
      </div>
    </section>
  );
};

export default Header;
