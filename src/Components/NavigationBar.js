import React, { Fragment } from "react"; 

function NavigationBar () {

    return (
        <Fragment>
            <div
                style ={{
                    display:"flex",
                    backgroundColor:"red",
                    color:"blue",
                }}
            >
                <div
                    style ={{
                        justifyContent:"flex-start",
                    }}
                >
                    <button>HOME</button>
                </div>

                <div
                    style ={{
                        display:"flex",
                        justifyContent:"flex-end",
                        flexGrow:"1",
                    }}
                >
                    <button>About Me</button>
                    <button>Projects</button>
                    <button>Resume</button>
                </div>   
            </div>
        </Fragment>
    )
}

export default NavigationBar;