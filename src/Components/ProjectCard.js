import React, { Fragment } from "react"; 
import '../Styles/Styles.css';

function ProjectCard (props) {

    return (
        <Fragment>
            <div className="Project-Container">
                <div className="Project-Card-Text">
                    <a href={props.projectLink} target="_blank">
                        <button>{props.projectName}</button>
                    </a>    
                </div>
                <div className="Project-Card">
                    <img src={props.picture}></img>
                </div>
            </div>
        </Fragment>
    )
}

export default ProjectCard;