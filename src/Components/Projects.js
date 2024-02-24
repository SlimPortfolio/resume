import React, { Fragment } from "react";
import "../Styles/Styles.css";
import ProjectCard from "./ProjectCard";
import dlp from "../Images/DLP.png";
import pies from "../Images/HowManyPies.png";
import resume from "../Images/ResumeWebsite.png";
function Projects() {
  return (
    <Fragment>
      <h1 className="Title-Text" id="projects">
        Projects
      </h1>
      <div className="Projects">
        <ProjectCard
          picture={dlp}
          projectName="Wedding Music Website"
          projectLink="https://slimportfolio.github.io/DLP/index.html"
          projectDescription="Fullstack web application for prospective clients to learn about wedding music services and submit lead information"
          projectTech="Java MySQL HTML CSS JS"
        />
        <ProjectCard
          picture={pies}
          projectName="How Many Pies"
          projectLink="https://github.com/SlimPortfolio/HowManyPies"
          projectDescription="Java-based project helping a user answer the age-old question of, 'How many pizzas to order for a Group?'"
          projectTech="Java"
        />
        <ProjectCard
          picture={resume}
          projectName="Resume Website"
          projectLink="https://slimportfolio.github.io/resume/"
          projectDescription="Frontend webpage resume, with completely customized React Components."
          projectTech="React CSS JS"
        />
      </div>
    </Fragment>
  );
}

export default Projects;
