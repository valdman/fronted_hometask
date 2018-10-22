import React, { Component } from 'react';
import './MenuBar.css';

import {connect} from 'react-redux';
import {changePage} from '../../redux/actions/changePage';

import LoginForm from '../LoginFrom/LoginForm';

const mapDispatchToProps = dispatch => {
   return {
      changePage: (page) => dispatch(changePage(page))
   }
}

const mapStateToProps = state => {
   return {
      showCart: state.loginned,
      cartAmount: state.cart.length
   }
}

class MenuBar extends Component {
   render() {
      const { showCart, cartAmount, changePage} = this.props;

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
                     Cart ({cartAmount})
                  </li>
               </ul>
               <LoginForm />
            </div>
         </div>
      )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);