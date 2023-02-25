import "./App.css";
import Navbar from "./components/navbar/Navbar";
import MobileNav from "./components/mobilenav/MobileNav";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import projectData from "./projectData";

const App = () => {
  const arrowHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const projects = projectData.map((project) => {
    // console.log(projectData);
    return <Projects project={project} key={project.id} />;
  });

  return (
    <div className="App">
      <Navbar />
      <MobileNav />
      <div className="bkg">
        <Header />
        <About />
        <div className="main-projects-container">
          <h2
            className="section-title projects-section"
            id="projects"
            style={{ color: "white" }}
          >
            Featured Projects
          </h2>
          {projects}
        </div>
        <Contact />
        <Footer arrowHandler={arrowHandler} />
      </div>
    </div>
  );
};

export default App;
