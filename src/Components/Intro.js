import React, { Fragment } from "react";

function Intro () {

    return (
        <Fragment>

            <div
                style={{
                    marginLeft: "25%",
                    marginRight: "25%",
                    display: "flex",
                    // backgroundColor:"green"
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
                        backgroundColor: "blue",
                        width: "40%",
                    }}
                >
                    <h1>IMAGE PLACEHOLDER</h1>
                </div>
                
            </div>
                
        </Fragment>
    )
}


export default Intro;