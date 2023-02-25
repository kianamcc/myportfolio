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
              My interest in computer science began my junior year of high
              school when I took my first video game design class. After that, I
              decided that I want to continue my education in computer science
              and did so at the University of California, Riverside where I
              obtained my Bachelor's in computer science.
            </p>
            <p className="section-paragraph">
              When I'm not coding, I like to draw digital art, play video games,
              and spend time with my cat.
            </p>
          </div>
          <div className="technology-container">
            <div className="technology-grid-container">
              <div className="technology-item">
                <SiReact className="icon" />
                <div>React</div>
              </div>
              <div className="technology-item">
                <SiJavascript className="icon" />
                <div>JavaScript</div>
              </div>
              <div className="technology-item">
                <SiHtml5 className="icon" />
                <div>HTML</div>
              </div>
              <div className="technology-item">
                <SiCss3 className="icon" />
                <div>CSS</div>
              </div>
              <div className="technology-item">
                <FaNodeJs className="icon" />
                <div>Node.js</div>
              </div>
              <div className="technology-item">
                <SiExpress className="icon" />
                <div>Express.js</div>
              </div>
              <div className="technology-item">
                <SiPostgresql className="icon" />
                <div>PostgreSQL</div>
              </div>
              <div className="technology-item">
                <FaGitAlt className="icon" />
                <div>Git</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
