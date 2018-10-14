import React, { Component } from 'react';
import './MenuBar.css';

import LoginForm from '../LoginFrom/LoginForm';

class MenuBar extends Component {
   render() {
      const {showCart, showHome, cart, login, loginned} = this.props;

      return (
         <div className="menu-bar">
            <div className="container">
               <ul>
                  <li className="menu-btn">
                     Shop
                  </li>
                  <li className="menu-btn"
                     onClick={() => {showHome()}}
                  >
                     Home
                  </li>
                  <li className="menu-btn"
                      onClick={() => {showCart()}}
                      style={{display: loginned ? "inline-block" : "none"}}
                  >
                     Cart ({cart})
                  </li>
               </ul>
               <LoginForm login={login}/>
            </div>
         </div>
      )
   }
}

export default MenuBar;