import React, { Component } from 'react';

import './Login.css'


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: "",
            placeholder: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = (event) => {
        const value = event.target.value;

        this.setState( () => ({
            inputText: value
        }));
    }

    handleClick = () => {
        const value = this.state.inputText;

        value === '' ? alert('Enter your login first') : this.LogUser(value)
    }

    LogUser = (value) => {

        fetch("http://localhost:3001/login", {
            method: "POST",
            credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }),
            body: JSON.stringify({
                "login": value
            }),
        })
        .then(res => res.json())
        .then(res => alert(`You've been ${res.status}`))
    }

    render() {
        return (
            <div className="Login">
                <input type="text" className="Input" placeholder="Login here.." onChange={this.handleChange} />
                <button className="Button" onClick={this.handleClick}>Login/Sign up</button>
            </div>
        )
    }
}

export default Login;