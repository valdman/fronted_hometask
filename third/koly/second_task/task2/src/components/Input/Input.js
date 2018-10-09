import React from "react";

let changeHandler;

const Input = (props) =>{
    changeHandler = props.func;    
    return <input onChange={(e) => onChange(e)}/>
    } 

const onChange = (e) => {
   
    changeHandler(e.target.value);
}
export default Input;