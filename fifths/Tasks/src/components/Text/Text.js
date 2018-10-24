import React from "react";

import "./Text.css";

const Text = (props) =>  <span style = {{textDecoration: props.done ? "line-through":"none"}} className="text" > {props.text} </span>; 

export default Text;