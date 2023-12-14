import catfinderimg from "./assets/catfinder.png";
import u4eaimg from "./assets/u4ea.png";
import janeimg from "./assets/jane.png";

const projectData = [
  {
    id: 0,
    projectName: "Jane Component Library",
    src: janeimg,
    projectDescription:
      "A React-based reusable component library integrated with Storybook to maintain design consistency across our company website. By leveraging robust third-party libraries, we implemented these components to streamline the development process while ensuring a cohesive and standardized design throughout the website.",
    projectTechnologies: [
      "React",
      "TypeScript",
      "Material UI",
      "Radix UI",
      "Storybook",
      "Styled Components",
      "AWS Amplify",
    ],
    liveDemoLink:
      "https://component-library.janedev.com/?path=/docs/components-badge--docs",
  },
  {
    id: 2,
    projectName: "CatFinder",
    src: catfinderimg,
    projectDescription:
      "CatFinder is a web application that gives users access to the cats from the PetFinder database in shelters ready for adoption, CatFinder provides an easy user interface for adoption seekers through the use of local storage.",
    projectTechnologies: ["React", "JavaScript", "HTML", "CSS"],
    githubLink: "http://github.com/kianamcc/catfinder",
    liveDemoLink: "http://catfinder-adopt.netlify.app/",
  },
  {
    id: 1,
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
];

export default projectData;
