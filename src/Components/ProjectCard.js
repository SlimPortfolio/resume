import React, { Fragment } from "react"; 
import '../Styles/Styles.css';

function ProjectCard (props) {

    return (
        <Fragment>
            <div className="Project-Card">
                <img src={props.picture}></img>
            </div>
        </Fragment>
    )
}

export default ProjectCard;