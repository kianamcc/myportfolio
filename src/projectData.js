import catfinderimg from "./assets/catfinder.png";
import janeimg from "./assets/jane.png";
import dreamscapeimg from "./assets/dreamscape.png";

const projectData = [
  {
    id: 0,
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
    projectName: "Dreamscape",
    src: dreamscapeimg,
    projectDescription:
      "Dreamscape is a full-stack application designed with an easy-to-use interface and a secure user authentication system. It empowers users to immerse themselves in a world of dream journaling and self-discovery, providing a platform for personal reflection and growth.",
    projectTechnologies: [
      "React",
      "TypeScript",
      "SCSS",
      "Node",
      "Express",
      "MongoDB",
      "Jest",
      "React Testing Library",
    ],
    githubLink: "http://github.com/kianamcc/dreamscape",
  },
  {
    id: 2,
    projectName: "React Component Library",
    src: janeimg,
    projectDescription:
      "A React-based reusable component library integrated with Storybook.",
    projectTechnologies: [
      "React",
      "TypeScript",
      "Material UI",
      "Radix UI",
      "Storybook",
      "Styled Components",
      "AWS Amplify",
    ],
  },
];

export default projectData;
