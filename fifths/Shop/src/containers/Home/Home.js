import React,{Fragment} from "react";

import TopBar from "../TopBar/TopBar";
import Items from "../Items/Items";

const Home = (props) => <Fragment>
    <TopBar 
    ChangeWindow={props.ChangeWindow}/>
    <Items/>
    </Fragment>

export default Home;