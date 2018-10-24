import React from "react";

import TopButtons from "../TopButtons/TopButtons";
import Login from "../../components/Login/Login";
import "./TopBar.css";

const TopBar = (props) => <div className="TopBar">
    <div className="leftItemsOnTopBar">
        <div id="ShopName">{"Dark Shop"}</div>
        <TopButtons ChangeWindow={props.ChangeWindow}/>
    </div>
    <div className="rightItemsOnTopBar">
        <Login />
    </div>
</div>

export default TopBar;