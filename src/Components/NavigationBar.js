import React, { Fragment } from "react"; 

function NavigationBar () {

    return (
        <Fragment>
            <div
                style ={{
                    display:"flex",
                    margin:"1%",
                    // background:"blue",
                }}
            >
                <div
                    style ={{
                        justifyContent:"flex-start",
                    }}
                >
                    <button
                        style ={{
                            border: "none",
                            backgroundColor: "white",
                            fontFamily: "open-sans, sans-serif",
                            fontWeight: "bold",
                            margin: "10%",
                            padding: "10%",
                        }}
                    >
                        Home
                    </button>
                </div>

                <div
                    style ={{
                        display:"flex",
                        justifyContent:"flex-end",
                        flexGrow:"1",
                    }}
                >
                    <button
                        style ={{
                            border: "none",
                            backgroundColor: "white",
                            fontFamily: "open-sans, sans-serif",
                            fontWeight: "bold",
                        }}
                    >
                        About Me
                    </button>
                    <button
                        style ={{
                            border: "none",
                            backgroundColor: "white",
                            fontFamily: "open-sans, sans-serif",
                            fontWeight: "bold",
                        }}
                    >
                        Projects
                    </button>
                    <button
                        style ={{
                            border: "none",
                            borderRadius:"10%",
                            backgroundColor: "blue",
                            fontFamily: "open-sans, sans-serif",
                            fontWeight: "bold",
                            color:"white",
                        }}
                    >
                        Resume
                    </button>
                </div>   
            </div>
        </Fragment>
    )
}

export default NavigationBar;