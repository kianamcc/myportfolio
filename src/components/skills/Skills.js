import React from "react";

import { SiTypescript, SiJavascript, SiPostgresql } from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";

import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills" id="Skills">
      <div className="skills-container">
        <h2 className="section-title">My Toolkit</h2>
        <p className="skills-description section-paragraph">
          Here are some technologies I work with!
        </p>
        <div className="skills-grid-container">
          <div className="skill-item">
            <SiJavascript className="skill-icon" />
            <p className="skill-text">JavaScript</p>
          </div>
          <div className="skill-item">
            <SiTypescript className="skill-icon" />
            <p className="skill-text">TypeScript</p>
          </div>
          <div className="skill-item">
            <FaHtml5 className="skill-icon" />
            <p className="skill-text">HTML</p>
          </div>
          <div className="skill-item">
            <FaCss3Alt className="skill-icon" />
            <p className="skill-text">CSS</p>
          </div>
          <div className="skill-item">
            <FaReact className="skill-icon" />
            <p className="skill-text">React.js</p>
          </div>

          <div className="skill-item">
            <IoLogoNodejs className="skill-icon" />
            <p className="skill-text">Node.js</p>
          </div>

          <div className="skill-item">
            <SiPostgresql className="skill-icon" />
            <p className="skill-text">PostgreSQL</p>
          </div>

          <div className="skill-item">
            <FaGitAlt className="skill-icon" />
            <p className="skill-text">Git</p>
          </div>
          <div className="skill-item">
            <FaGithub className="skill-icon" />
            <p className="skill-text">GitHub</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
