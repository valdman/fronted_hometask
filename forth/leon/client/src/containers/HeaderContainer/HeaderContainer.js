import React from "react";
import NavContainer from "../NavContainer/NavContainer";
import LoginForm from "../../components/LoginForm/LoginForm";


import "./HeaderContainer.css";

const HeaderContainer = (props) => {
    return (
        <div className="HeaderContainer">
            <NavContainer></NavContainer>
            <LoginForm></LoginForm>
        </div>
    );
}

export default HeaderContainer;