import React from 'react';

import LeftButtons from '../../components/LeftButtons/LeftButtons'
import Login from '../../components/Login/Login'

import './Header.css'

const Header = ({onCartClicked, onSomethingChanged}) => 
    <div className="Header">
        <LeftButtons 
            CartClicked={onCartClicked}
        />
        <Login onSomethingChanged={onSomethingChanged}/>
    </div>;

export default Header;