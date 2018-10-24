import React from 'react';

import LeftButtons from '../../components/Left_buttons/Left_buttons'
import Login from '../../components/Login/Login'

import './Header.css'

const Header = (props) => {

        return (
            <div className="Header">
               <LeftButtons 
               CartClicked={props.CartClicked}
               HomeOrCart={props.HomeOrCart}/>
               
                <Login />
            </div>
        )
}

export default Header;