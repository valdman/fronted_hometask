import React from "react";
import NavButton from "../../components/NavButton/NavButton";

import "./NavContainer.css";

const NavContainer = () => {
    return (
    <div className="NavContainer">
        <NavButton link={"somelink1"}>Home</NavButton>
        <NavButton link={"somelink2"}>About us</NavButton>
        <NavButton link={"somelink3"}>FAQ</NavButton>
    </div>
    );
}

export default NavContainer;