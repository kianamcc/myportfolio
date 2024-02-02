import React from "react";
import {
  AiFillGithub,
  AiOutlineUpCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { IoMail } from "react-icons/io5";

import "./Footer.css";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/kiana-mccullough/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin
              size={55}
              className="github-link header-link-item"
            />
          </a>
          <a href="http://github.com/kianamcc" target="_blank" rel="noreferrer">
            <AiFillGithub size={55} className="github-link header-link-item" />
          </a>
        </div>
        <div className="footnote">
          Designed and developed by Kiana McCullough 2024
        </div>
        <div className="arrow-container" onClick={props.arrowHandler}>
          <AiOutlineUpCircle size={50} className="arrow" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
