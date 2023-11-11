import React, { Fragment } from "react"; 
import '../Styles/Styles.css';

function NavigationBar () {

    return (
        <Fragment>
            <div
                style ={{
                    display:"flex",
                    padding:"1%",
                    boxShadow: "0px 1px 7px -1px rgba(0,0,0,0.2)"
                }}
            >
                <div>
                    <button
                        className="Button1"
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
                        className="Button1"
                    >
                        About Me
                    </button>
                    <button
                        className="Button1"
                    >
                        Projects
                    </button>
                    <button
                        className="Button2"
                    >
                        Resume
                    </button>
                </div>   
            </div>
        </Fragment>
    )
}

export default NavigationBar;