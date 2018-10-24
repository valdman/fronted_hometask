import React,{Fragment} from "react";

import TopBar from "../TopBar/TopBar";
import Items from "../Items/Items";

const Home = (props) => <Fragment>
    <TopBar 
    ChangeWindow={props.ChangeWindow}
    logIn = {props.logIn}
    IsLogined = {props.IsLogined}
    />
    <Items 
    items={props.items}
    BuyItem = {props.BuyItem}
    />
    </Fragment>

export default Home;