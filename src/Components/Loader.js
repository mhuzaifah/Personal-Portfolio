import React from "react";

function Loader() {
    return (
        <div className="spinner-overlay">
            <div className="loaderContainer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Loader;
