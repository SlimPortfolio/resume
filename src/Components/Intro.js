import React, { Fragment } from "react";
import profilePicture from "../Images/profilePicture.jpg";
import "../Styles/Styles.css";
import ScrollComponent from "./ScrollComponent";
function Intro() {
  return (
    <Fragment>
      <div className="Content-Area-1">
        <div className="Intro-Content">
          <p>Hello I'm</p>
          <h1>Steven Lim</h1>
          <p className="Description-Text">
            I'm a Fullstack Software Engineer who loves collaborating with
            people and finding creative solutions to complex problems. Keep
            scrolling to learn more about me!
          </p>
          <button>
            <ScrollComponent route="about-me" text="More About Me" />
          </button>
          <button>
            <ScrollComponent route="projects" text="Projects" />
          </button>
        </div>
        <div className="Intro-Image">
          <img src={profilePicture}></img>
        </div>
      </div>
    </Fragment>
  );
}

export default Intro;
