import React, { Component } from 'react';
import './MenuBar.css';

import LoginForm from '../LoginFrom/LoginForm';

class MenuBar extends Component {
   render() {
      const { changePage, login, showCart} = this.props;

      return (
         <div className="menu-bar">
            <div className="container">
               <ul>
                  <li className="menu-btn">
                     Shop
                  </li>
                  <li className="menu-btn"
                     onClick={() => {changePage("home")}}
                  >
                     Home
                  </li>
                  <li className="menu-btn"
                      onClick={() => {changePage("cart")}}
                      style={{display: showCart ? "inline-block" : "none"}}
                  >
                     Cart
                  </li>
               </ul>
               <LoginForm login={login}/>
            </div>
         </div>
      )
   }
}

export default MenuBar;