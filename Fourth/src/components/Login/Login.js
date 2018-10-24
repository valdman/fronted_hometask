import React,{Component,Fragment} from "react";

import "./Login.css";


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {value : ""}
    };
        onClick = (event) => {
            this.props.logIn(this.state.value)
        }
        onChange = (event) => {
            let value = event.target.value;
            this.setState(prevState => ({value: value}))
        };
    
    render(){
       return this.props.IsLogined ? 
       <div id="loginMessage">{"Logined in"}</div> 
       : 
       <Fragment>
           <input onChange={this.onChange}/>
           <div id="SignUpIn" onClick={this.onClick}>Sign Up/In</div>
        </Fragment>
    }
}

export default Login;