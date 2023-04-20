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
              Hello, I'm Kiana. Nice to meet you.
            </p>
            <p className="section-paragraph">
              I'm currently a web developer at a startup company, The Verse,
              where I continue to hone my web development skills and work in
              collaboration with like-minded people.
            </p>
            <p className="section-paragraph">
              I obtained my bachelor's degree in Computer Science from the
              University of California, Riverside and acquired many other
              technical skills from online courses on Udemy where I found my
              passion for web development. Everyday I continue to learn and
              improve.
            </p>

            <p className="section-paragraph">
              When I'm not coding, I like to draw digital art, play video games,
              and spend time with my cat, Kohaku.
            </p>
          </div>
          <div className="technology-container">
            <div className="technology-grid-container">
              <div className="technology-item">
                <SiReact className="icon" />
                <p className="technology-text">React</p>
              </div>
              <div className="technology-item">
                <SiJavascript className="icon" />
                <p className="technology-text">JavaScript</p>
              </div>
              <div className="technology-item">
                <SiHtml5 className="icon" />
                <p className="technology-text">HTML</p>
              </div>
              <div className="technology-item">
                <SiCss3 className="icon" />
                <p className="technology-text">CSS</p>
              </div>
              <div className="technology-item">
                <FaNodeJs className="icon" />
                <p className="technology-text">Node.js</p>
              </div>
              <div className="technology-item">
                <SiExpress className="icon" />
                <p className="technology-text">Express.js</p>
              </div>
              <div className="technology-item">
                <SiPostgresql className="icon" />
                <p className="technology-text">PostgreSQL</p>
              </div>
              <div className="technology-item">
                <SiPostgresql className="icon" />
                <p className="technology-text">Python</p>
              </div>
              <div className="technology-item">
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
