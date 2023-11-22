import React, { Fragment } from "react";
import '../Styles/Styles.css';
import placeholderImage from '../Images/placeholderImage.png';


function AboutMe() {

    return(
        <Fragment>
            <div className="Content-Area-2">
                <div className="About-Me-Grid">
                    <img src={placeholderImage}></img>
                    
                    <div className="About-Me-Grid-Text">
                        <p>I graduated from Texas A&M University-Commerce in 2020, majoring in Math, Physics, and Education.</p>
                    </div>
                </div>
                
                <div className="About-Me-Grid">
                    <div className="About-Me-Grid-Text">
                        <p>After graduation, I worked in two coroporate roles, but always found my self leaning in to the more problem solving aspects of those roles. I discovered that I love learning the "how" behind all of things we experience on a daily basis in our modern society.</p>
                    </div>
                    <img src={placeholderImage}></img>
                </div>
                
                <div className="About-Me-Grid">
                    <img src={placeholderImage}></img>
                    <div className="About-Me-Grid-Text">
                        <p>In the Fall of '22, I started learning. I took coursework on LinkedIn Learning, Codecademy, and Udemy over Web Development, Data Structures and Algorithms, Java, React, and HTML/CSS/JS.</p>    
                    </div>
                </div>

                <div className="About-Me-Grid">
                    <div className="About-Me-Grid-Text">
                        <p>After learning the basics, I began to build out a few projects that would help in my life, as well as give me experience developing. Please check out some of these projects in the following section!</p>
                    </div>
                    <img src={placeholderImage}></img>
                </div>
            </div>
        </Fragment>
    )
}

export default AboutMe;