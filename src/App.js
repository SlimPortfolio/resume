import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import Intro from "./Components/Intro";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import ProjectCard from "./Components/ProjectCard";
import Projects from "./Components/Projects";
import { Fragment, useEffect, useRef, useState } from "react";

function App() {
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();

  useEffect(() => {
    const aboutObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        entry.target.classList.toggle("show", entry.isIntersecting);
        if (entry.isIntersecting) {
          entry.target.classList.remove("hidden");
          aboutObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.25 }
    );

    const skillsObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        entry.target.classList.toggle("show", entry.isIntersecting);
        if (entry.isIntersecting) {
          entry.target.classList.remove("hidden");
          aboutObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.25 }
    );

    const projectsObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        entry.target.classList.toggle("show", entry.isIntersecting);
        if (entry.isIntersecting) {
          entry.target.classList.remove("hidden");
          aboutObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.25 }
    );

    aboutObserver.observe(aboutRef.current);
    skillsObserver.observe(skillsRef.current);
    projectsObserver.observe(projectsRef.current);
  }, []);

  return (
    <div className="" id="home">
      <header className="">
        <Fragment>
          <NavigationBar />
          <Intro />
          <div className="hidden" ref={aboutRef} id="about-me">
            <AboutMe />
          </div>
          <div className="hidden" ref={skillsRef}>
            <Skills />
          </div>
          <div className="hidden" id="projects" ref={projectsRef}>
            <Projects />
          </div>
        </Fragment>
      </header>
    </div>
  );
}

export default App;
