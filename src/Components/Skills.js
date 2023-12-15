import React, { Fragment } from "react";
import '../Styles/Styles.css';
import css from '../Images/css-logo.png';
import git from '../Images/git-logo.png';
import html from '../Images/html-logo.png';
import java from '../Images/java-logo.png';
import js from '../Images/js-logo.png';
import react from '../Images/react-logo.png';

function Skills () {

    return (
        <Fragment>
            <div className="Skills-Box">
                <h1 className="Skills-Box-Title">Technologies and Skills</h1>
                <div className="Skills-Box-Carousel">
                    <img src ={html}></img>
                    <img src ={css}></img>
                    <img src ={js}></img>
                    <img src ={react}></img>
                    <img src ={git}></img>
                    <img src ={java}></img>
                </div>
            </div>    
        </Fragment>
    )
}

export default Skills;