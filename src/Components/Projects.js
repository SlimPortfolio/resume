import React, { Fragment } from "react";
import '../Styles/Styles.css';
import ProjectCard from "./ProjectCard";
import dlp from '../Images/DLP.png'
function Projects () {

    return (
        <Fragment>

            <div>
                <h1>Here is the project section</h1>
                <ProjectCard picture={dlp}/>
                <ProjectCard picture={dlp}/>
                <ProjectCard picture={dlp}/>

            </div>
                
        </Fragment>
    )
}


export default Projects;