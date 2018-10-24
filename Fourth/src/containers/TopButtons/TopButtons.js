import React,{Fragment} from "react";

import "./TopButtons.css"

const TopButtons = (props) => {
    const onClick= (event) => {
        props.ChangeWindow(event.target.innerText);
    }
    return <Fragment>
        <div className="TopButton" onClick={onClick}>{"Home"}</div>
        <div className="TopButton" onClick={onClick}>{"Cart"}</div>
    </Fragment>
} 



export default TopButtons;