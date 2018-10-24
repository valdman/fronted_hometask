import React from "react";


import "./Input.css";
let changeHandler;


const Input = (props) =>{
    changeHandler = props.func;    
    return <input value ={props.value} onChange={(e) => onChange(e)}/>
    } 

const onChange = (e) => {
   
    changeHandler(e.target.value);
}
export default Input;