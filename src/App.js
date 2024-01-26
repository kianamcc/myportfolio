import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import projectData from "./projectData";
import "./App.css";

const App = () => {
  const arrowHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const projects = projectData.map((project) => {
    return <Projects project={project} key={project.id} />;
  });

  return (
    <div className="App">
      <Navbar />
      <div className="bkg">
        <Header />
        <About />

        <section className="project-main" id="projects">
          <h2 className="section-title" style={{ color: "white" }}>
            Projects
          </h2>
          {projects}
        </section>

        <Contact />
        <Footer arrowHandler={arrowHandler} />
      </div>
    </div>
  );
};

export default App;
