import React, { Fragment } from "react";
import "../Styles/Styles.css";
import ScrollComponent from "./ScrollComponent";
import resume from "../Documents/resume.pdf";

function NavigationBar() {
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          padding: "1%",
          boxShadow: "0px 1px 7px -1px rgba(0,0,0,0.2)",
          position: "sticky",
          width: "100%",
          top: "0",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div>
          <button className="Button1">
            <ScrollComponent route="home" text="Home" />
          </button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            flexGrow: "1",
          }}
        >
          <button className="Button1">
            <ScrollComponent route="about-me" text="About Me" />
          </button>
          <button className="Button1">
            <ScrollComponent route="projects" text="Projects" />
          </button>
          <button className="Button2">
            <a
              href={resume}
              style={{
                textDecoration: "none",
                color: "white",
              }}
              target="_blank"
            >
              Resume
            </a>
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default NavigationBar;
