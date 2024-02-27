import React from "react";
import "./Projects.css";
import { AiFillGithub } from "react-icons/ai";
import { IoMdOpen } from "react-icons/io";

import { Fade } from "react-awesome-reveal";

const Projects = (props) => {
  const projectTechologiesDisplay = props.project.projectTechnologies.map(
    (technology) => {
      return (
        <div className="technology-item" key={technology}>
          {technology}
        </div>
      );
    }
  );
  return (
    <section className="projects" id="Projects">
      <Fade duration={2000}>
        <div className="projects-container">
          <div className="projects-flex-container">
            <div className="projects-container-left">
              <h3 className="project-title">{props.project.projectName}</h3>
              <p className="project-description section-paragraph">
                {props.project.projectDescription}
              </p>

              <div className="project-technologies">
                {projectTechologiesDisplay}
              </div>
              <div className="project-links">
                {props.project.githubLink && (
                  <a
                    href={props.project.githubLink}
                    className="githubLink"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub size={40} className="project-github" />
                  </a>
                )}
                {props.project.liveDemoLink && (
                  <a
                    href={props.project.liveDemoLink}
                    className="githubLink"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IoMdOpen size={40} className="project-code" />
                  </a>
                )}
              </div>
            </div>
            <div className="projects-container-right">
              <div className="project-img-container">
                <img
                  className="project-img"
                  src={props.project.src}
                  alt={props.project.src}
                />
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Projects;
