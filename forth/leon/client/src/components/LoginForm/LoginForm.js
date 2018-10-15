import React, { Component } from "react";
import loginUser from "../../fetchUtils/loginUser";

import "./LoginForm.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      login: "",
      value: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    loginUser(this.state.value);
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} action="" >
        <label>Login:
          <input type="text" value={this.state.value} onChange={this.handleChange}></input>
        </label>
        <input type="submit" value="submit"></input>
      </form>
    );
  }
}

export default LoginForm;

