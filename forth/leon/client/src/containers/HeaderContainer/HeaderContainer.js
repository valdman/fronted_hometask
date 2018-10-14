import React from "react";
import NavContainer from "../NavContainer/NavContainer";
import LoginForm from "../../components/LoginForm/LoginForm";
import Cart from "../../components/Cart/Cart";

const HeaderContainer = () => {
    return (
        <div>
            <NavContainer></NavContainer>
            <Cart></Cart>
            <LoginForm></LoginForm>
        </div>
    );
}

export default HeaderContainer;