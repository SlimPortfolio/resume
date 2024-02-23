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
        />
        <ProjectCard
          picture={pies}
          projectName="How Many Pies"
          projectLink="https://github.com/SlimPortfolio/HowManyPies"
        />
        <ProjectCard
          picture={resume}
          projectName="Resume Website"
          projectLink="https://slimportfolio.github.io/resume/"
        />
      </div>
    </Fragment>
  );
}

export default Projects;
