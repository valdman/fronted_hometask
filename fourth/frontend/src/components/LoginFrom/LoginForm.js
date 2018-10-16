import React, { Component, Fragment } from 'react';
import './LoginForm.css';

import {makeLoginRequest} from '../../requests';

class LoginForm extends Component {
   constructor(props) {
      super(props);

      this.state = {
         btnText: "Login",
         inputText: "",
         showForm: true
      }
   }

   onChangeHandler = (event) => {
      const value = event.target.value;

      this.setState(prevState => ({
         btnText: prevState.btnText,
         inputText: value
      }))
   }

   onClickHandler = () => {
      const value = this.state.inputText;

      value === '' ?
         alert("Enter the login") :
         this.sendLoginQuery(value)
   }

   sendLoginQuery = (value) => {
      makeLoginRequest()
         .then(res => res.json())
         .then(resData => resData.status)
         .then(status => {
            switch (status) {
               case "created":
                  alert("You are successfully registered");
                  break;
               case "loginned in":
                  alert("Loginned in");
                  this.setState(() => ({
                     showForm: false
                  }));
                  this.props.login();
                  break;
               default:
                  break;
            }
         })
   }

   render() {
      const { btnText, showForm } = this.state;

      return (
         <Fragment>
            <div className="loginned-in-block" style={{ display: !showForm ? "block" : "none" }}>
               <span>Loginned in</span>
            </div>
            <div className="login-block" style={{ display: showForm ? "flex" : "none" }}>
               <input type="text" placeholder="Enter login" onChange={this.onChangeHandler} />
               <button onClick={this.onClickHandler}>{btnText}</button>
            </div>
         </Fragment>
      )
   }
}

export default LoginForm;