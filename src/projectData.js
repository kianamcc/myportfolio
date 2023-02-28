import sammy from "./assets/sammy.jpeg";

const projectData = [
  {
    id: 0,
    projectName: "U4Ea",
    src: sammy,
    projectDescription:
      "U4Ea is a website made for the U4Ea mobile application. Made using React and HTML/CSS, it introduces users with information and scientific links to the healing power of sound through binaural beats.",
    projectTechnologies: ["React", "CSS", "Node.js", "Express.js", "MySQL"],
    githubLink: "http://github.com/U4EaData/Landing-Page",
    liveDemoLink: "http://u4ea.onrender.com/",
  },
  {
    id: 1,
    projectName: "CatFinder",
    src: sammy,
    projectDescription:
      "CatFinder is a web application that gives users access to over 1k+ cats in shelters ready for adoption, CatFinder provides an easy user interface for adoption seekers. CatFinder allows users to favorite cats to their local storage so they can view their cats of interest at anytime and update it as well as needed.",
    projectTechnologies: ["React", "CSS"],
    githubLink: "test",
    liveDemoLink: "test2",
  },
  {
    id: 2,
    projectName: "Subscraper",
    src: sammy,
    projectDescription:
      "Subscraper is a web application that scrapes any subreddit of choice, saving the results as a JSON object and creating a RESTful JSON API with the data. It has been deployed using Render.com.",
    projectTechnologies: [
      "React",
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
