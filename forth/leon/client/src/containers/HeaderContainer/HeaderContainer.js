import React from "react";
import NavContainer from "../NavContainer/NavContainer";
import LoginForm from "../../components/LoginForm/LoginForm";
import Cart from "../../components/Cart/Cart";



import "./HeaderContainer.css";

const HeaderContainer = () => {
    return (
        <div className="HeaderContainer">
            <NavContainer></NavContainer>
            <Cart></Cart>
            <LoginForm></LoginForm>
        </div>
    );
}

export default HeaderContainer;