import catfinderimg from "./assets/catfinder.png";
import u4eaimg from "./assets/u4ea.png";
import subscraperimg from "./assets/subscraper.png";

const projectData = [
  {
    id: 0,
    projectName: "U4Ea",
    src: u4eaimg,
    projectDescription:
      "A website made and designed to introduce and promote the mobile application: U4Ea. Provides an interactive interface that introduces users to the healing power of sound through binaural beats.",
    projectTechnologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
    ],
    githubLink: "http://github.com/U4EaData/Landing-Page",
    liveDemoLink: "http://u4ea.onrender.com/",
  },
  {
    id: 1,
    projectName: "CatFinder",
    src: catfinderimg,
    projectDescription:
      "CatFinder is a web application that gives users access to the cats from the PetFinder database in shelters ready for adoption, CatFinder provides an easy user interface for adoption seekers through the use of local storage.",
    projectTechnologies: ["React", "JavaScript", "HTML", "CSS"],
    githubLink: "http://github.com/kianamcc/catfinder",
    liveDemoLink: "http://catfinder-adopt.netlify.app/",
  },
  {
    id: 2,
    projectName: "Subscraper",
    src: subscraperimg,
    projectDescription:
      "Subscraper is a web application that scrapes any subreddit of choice, saving the results as a JSON object and creating a RESTful JSON API with the data.",
    projectTechnologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Express.js",
      "Cheerio.js",
    ],
    githubLink: "http://github.com/kianamcc/subscraper",
    liveDemoLink: "http://subscraper.onrender.com/",
  },
];

export default projectData;
