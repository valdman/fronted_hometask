import React, { Component } from "react";

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
    const myHeaders = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    const myInit = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({ login: this.state.value }),
    };

    fetchServer("/login", myInit)
      .then(res => res.json())
      .then(res => {
        //showHint(res.status)
        console.log(res);
        document.cookie = `token=${res.token};expires=${60 * 10}`;
      })
      .catch((err) => console.log(err));
  }

  handleChange(event) {
    this.setState({value: event.target.value})
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

// const logUser = () => {

//   const myHeaders = new Headers({
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//   });

//   const myInit = {
//       method: 'POST',
//       headers: myHeaders,
//       body: JSON.stringify({ login: loginInput.value }),
//   };

//   fetchServer("/login", myInit)
//       .then(res => res.json())
//       .then(res => {
//           showHint(res.status)
//           document.cookie = `token=${res.token};expires=${60 * 10}`;
//       })
//       .catch((err) => conole.log(err));
// };

const fetchServer = (path, params) => {
  return fetch("http://localhost:3001" + path, params);
}