import React from "react";
import "./Footer.css";
import { AiFillGithub, AiOutlineUpCircle } from "react-icons/ai";
import { IoMail } from "react-icons/io5";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="http://github.com/kianamcc" target="_blank" rel="noreferrer">
            <AiFillGithub size={55} className="github-link header-link-item" />
          </a>
          <a href="mailto:kianamccu@gmail.com" target="_blank" rel="noreferrer">
            <IoMail size={55} className="github-link header-link-item" />
          </a>
        </div>
        <div className="footnote">Created by Kiana McCullough ©2024</div>
        <div className="arrow-container" onClick={props.arrowHandler}>
          <AiOutlineUpCircle size={50} className="arrow" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
