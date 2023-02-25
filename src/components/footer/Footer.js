import React from "react";
import "./Footer.css";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineUpCircle } from "react-icons/ai";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="http://github.com/kianamcc" target="_blank" rel="noreferrer">
          <AiFillGithub size={55} className="github-link header-link-item" />
        </a>
        <div className="footnote">Kiana McCullough ©2023</div>
        <div className="arrow-container" onClick={props.arrowHandler}>
          <AiOutlineUpCircle size={40} className="arrow" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
