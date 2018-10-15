import React from "react";
import NavButton from "../../components/NavButton/NavButton";

import "./NavContainer.css";

const NavContainer = () => {
    return (
    <div className="NavContainer">
        <NavButton>Home</NavButton>
        <NavButton>About us</NavButton>
        <NavButton>FAQ</NavButton>
    </div>
    );
}

export default NavContainer;