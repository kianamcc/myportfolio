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
              Hello! I'm Kiana, a Web Developer based in California.
            </p>
            <p className="section-paragraph">
              I consider myself a mixture of university-taught and self-taught.
              I obtained my bachelor's degree in Computer Science from the
              University of California, Riverside and acquired technical skills
              from online courses on Udemy where I found my passion for web
              development. Everyday I continue to learn and improve.
            </p>
            <p className="section-paragraph">
              I am currently a web developer intern at The Verse where I
              continue to hone my web development skills and where I am
              connected with other like-minded people.
            </p>
            <p className="section-paragraph">
              When I'm not coding, I like to draw digital art, play video games,
              and spend time with my cat, Kohaku.
            </p>
          </div>
          <div className="technology-container">
            <div className="technology-grid-container">
              <div className="technology-item-about">
                <SiReact className="icon" />
                <p className="technology-text">React</p>
              </div>
              <div className="technology-item-about">
                <SiJavascript className="icon" />
                <p className="technology-text">JavaScript</p>
              </div>
              <div className="technology-item-about">
                <SiHtml5 className="icon" />
                <p className="technology-text">HTML</p>
              </div>
              <div className="technology-item-about">
                <SiCss3 className="icon" />
                <p className="technology-text">CSS</p>
              </div>
              <div className="technology-item-about">
                <FaNodeJs className="icon" />
                <p className="technology-text">Node.js</p>
              </div>
              <div className="technology-item-about">
                <SiExpress className="icon" />
                <p className="technology-text">Express.js</p>
              </div>
              <div className="technology-item-about">
                <SiPostgresql className="icon" />
                <p className="technology-text">PostgreSQL</p>
              </div>
              <div className="technology-item-about">
                <SiPostgresql className="icon" />
                <p className="technology-text">Python</p>
              </div>
              <div className="technology-item-about">
                <FaGitAlt className="icon" />
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
