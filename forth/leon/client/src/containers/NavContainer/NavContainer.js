import React from "react";
import NavButton from "../../components/NavButton/NavButton";

import "./NavContainer.css";

const NavContainer = () => {
    return (
    <div className="NavContainer">
        <NavButton>But1</NavButton>
        <NavButton>But2</NavButton>
        <NavButton>But3</NavButton>
    </div>
    );
}

export default NavContainer;