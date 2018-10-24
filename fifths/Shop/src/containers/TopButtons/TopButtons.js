import React,{Fragment} from "react";

import "./TopButtons.css"

const TopButtons = (props) => {
    const onClick= (window) => {
        props.ChangeWindow(window);
    }
    return <Fragment>
        <div className="TopButton" onClick={() => onClick("Home")}>{"Home"}</div>
        <div className="TopButton" onClick={() => onClick("Cart")}>{"Cart"}</div>
    </Fragment>
} 



export default TopButtons;