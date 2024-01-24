import React from "react";
import "./About.css";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiPostgresql,
  SiExpress,
} from "react-icons/si";
import { FaNodeJs, FaGitAlt } from "react-icons/fa";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-flex-container">
          <div className="about-text">
            <p className="section-paragraph">
              Hi there! I'm Kiana McCullough, a Web Developer with a focus on
              front-end development based in California.
            </p>
            <p className="section-paragraph">
              I firmly believe that the path to success lies in continual
              learning. I'm dedicated to refining my skills and exploring new
              horizons in both web and software development.
            </p>
            <p className="section-paragraph">
              Beyond coding, I'm an enthusiastic gamer with a passion for
              single-player games such as the Metal Gear Solid series. I'm also
              a little bit of an artist, often found channeling artistic
              expression into digital art with my XP-Pen display tablet and
              Photoshop.
            </p>
          </div>
          <div className="technology-container">
            <div className="technology-grid-container">
              <div className="technology-item">
                <p className="technology-text">React</p>
              </div>
              <div className="technology-item">
                <p className="technology-text">JavaScript</p>
              </div>
              <div className="technology-item">
                <p className="technology-text">TypeScript</p>
              </div>
              <div className="technology-item">
                <p className="technology-text">HTML</p>
              </div>
              <div className="technology-item">
                <p className="technology-text">CSS</p>
              </div>
              <div className="technology-item">
                <p className="technology-text">Node.js</p>
              </div>
              <div className="technology-item">
                <p className="technology-text">Express.js</p>
              </div>
              <div className="technology-item">
                <p className="technology-text">PostgreSQL</p>
              </div>
              <div className="technology-item">
                <p className="technology-text">Python</p>
              </div>
              <div className="technology-item">
                <p className="technology-text">Git</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
