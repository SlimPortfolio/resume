import React, { Fragment } from "react";
import "../Styles/Styles.css";

function ProjectCard(props) {
  return (
    <Fragment>
      <div className="Project-Container">
        <a href={props.projectLink} target="_blank">
          <div className="Project-Card-Text">
            <div className="Project-Card-Text-Section-1">
              <p>{props.projectName}</p>
            </div>
            <div className="Project-Card-Text-Section-2">
              <span className="description">{props.projectDescription}</span>
              <span className="tech">{props.projectTech}</span>
            </div>
          </div>
        </a>
        <div className="Project-Card">
          <img src={props.picture}></img>
        </div>
      </div>
    </Fragment>
  );
}

export default ProjectCard;
