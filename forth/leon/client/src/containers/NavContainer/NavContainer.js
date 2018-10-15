import React from "react";
import NavButton from "../../components/NavButton/NavButton";

import "./NavContainer.css";

const NavContainer = () => {
    return (
    <div className="NavContainer">
        <NavButton></NavButton>
        <NavButton></NavButton>
        <NavButton></NavButton>
    </div>
    );
}

export default NavContainer;