import React from "react";

import aboutImg from "../../assets/profile.jpg";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="About">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-flex-container">
          <div className="about-left">
            <img src={aboutImg} className="about-img" alt="about-img" />
          </div>
          <div className="about-text">
            <div className="about-text">
              <p className="section-paragraph">
                Hi there! 👋 I'm{" "}
                <span className="text-emphasis">Kiana McCullough</span>, a web
                developer based in California. I graduated with a bachelor's
                degree in Computer Science from University of California,
                Riverside.
              </p>
              <br />
              <p className="section-paragraph">
                I firmly believe that the path to success lies in continual
                learning. 📚 I'm dedicated to refining my skills and exploring
                new horizons in the realm of web development.
              </p>
              <br />
              <p className="section-paragraph">
                When I'm not coding, you can catch me channeling artistic
                expression into digital art 🎨, playing video games (I'm a big
                fan of the Metal Gear Solid Series) 🎮, or hanging out with my
                cat, Kohaku. 🐈‍⬛
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
