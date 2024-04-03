import React from "react";

function BurguerBtn (props) {
    return (
        <div onClick={props.handleClick}className={`icon nav-icon-2 ${props.clicked ? "open" : ""}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
}

export default BurguerBtn;