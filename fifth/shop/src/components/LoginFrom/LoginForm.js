import React, { Component, Fragment } from 'react';
import './LoginForm.css';

import { connect } from 'react-redux';
import { login } from '../../redux/actions/login';
import { loadCart } from '../../redux/actions/loadCart';

import { makeLoginRequest, makeCartRequest } from '../../requests';

const mapDispatchToProps = dispatch => {
   return {
      login: () => dispatch(login()),
      loadCart: (data) => dispatch(loadCart(data))
   }
}

const mapStateToProps = state => {
   return {
      show: !state.loginned
   }
}

class LoginForm extends Component {
   constructor(props) {
      super(props);

      this.state = {
         value: ""
      }
   }

   onChangeHandler = (event) => {
      const value = event.target.value;

      this.setState(() => ({
         value: value
      }))
   }

   onClickHandler = () => {
      const { value } = this.state;

      value === '' ?
         alert("Enter the login") :
         this.login(value)
   }

   login = (value) => {
      makeLoginRequest(value)
         .then(res => res.json())
         .then(data => data.status)
         .then(status => {
            switch (status) {
               case "created":
                  alert("You are successfully registered");
                  break;
               case "loginned in":
                  this.props.login();
                  this.loadCart();
                  break;
               default:
                  break;
            }
         })
   }

   loadCart = () => {
      makeCartRequest()
         .then(res => res.json())
         .then(data => {
            this.props.loadCart(data)
         })
         .catch(err => null);
   }

   render() {
      const { show } = this.props;

      return (
         <Fragment>
            <div className="loginned-in-block" style={{ display: !show ? "block" : "none" }}>
               <span>Loginned in</span>
            </div>
            <div className="login-block" style={{ display: show ? "flex" : "none" }}>
               <input type="text" placeholder="Enter login" onChange={this.onChangeHandler} />
               <button onClick={this.onClickHandler}>Login</button>
            </div>
         </Fragment>
      )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);