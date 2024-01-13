import React, { Fragment } from "react";
import '../Styles/Styles.css';
import ProjectCard from "./ProjectCard";
import dlp from '../Images/DLP.png'
function Projects () {

    return (
        <Fragment>

            <h1 className="Title-Text">Projects</h1>
            <div className="Projects">
                <ProjectCard picture={dlp} projectName = "Wedding Music Website" projectLink="https://slimportfolio.github.io/DLP/index.html"/>
                <ProjectCard picture={dlp}/>
                <ProjectCard picture={dlp}/>

            </div>
                
        </Fragment>
    )
}


export default Projects;