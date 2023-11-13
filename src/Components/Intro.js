import React, { Fragment } from "react";
import profilePicture from '../Images/profilePicture.jpg';
function Intro () {

    return (
        <Fragment>

            <div
                style={{
                    marginLeft: "25%",
                    marginRight: "25%",
                    marginTop: "3%",
                    display: "flex",
                }}
            >
                <div
                    style={{
                        // backgroundColor: "red",
                        width: "60%",
                        marginRight: "30px",
                        fontFamily: "",
                    }}
                >
                    <p
                        style={{
                            fontFamily: "",
                            fontSize: "18px",
                            fontWeight: "",
                            color: "#2271b1",
                            marginBottom:"4px",
                        }}
                    >
                            Hello I'm
                    </p>
                    <span
                        style={{
                            fontFamily: "open-sans, sans-serif",
                            fontSize: "60px",
                            fontWeight: "bold",
                        }}
                    >
                        Steven Lim
                    </span>
                    <p
                        style={{
                            fontFamily: "",
                            fontSize: "",
                            fontWeight: "",
                            color: "#373d3f",
                        }}
                    >I'm a Fullstack Software Engineer who loves collaborating with people and finding creative solutions to complex problems.
                    </p>
                    <button 
                        style={{
                            backgroundColor: "#2271b1",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            margin: "5px",
                            padding: "10px"
                        }}
                    >
                        More About Me
                    </button>
                    <button
                        style={{
                            backgroundColor: "#2271b1",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            margin: "5px",
                            padding: "10px"
                        }}
                    >
                        Projects
                    </button>
                </div>
                <div
                    style={{
                        width: "40%",
                    }}
                >
                    <img 
                        src={profilePicture}
                        style={{
                            marginTop:"50px",
                            width:"90%",
                            borderRadius:"0% 100% 100% 100%",
                            boxShadow: "0px 5px 7px -1px rgba(0,0,0,0.2)"
                        }} 
                    ></img>
                </div>
                
            </div>
                
        </Fragment>
    )
}


export default Intro;