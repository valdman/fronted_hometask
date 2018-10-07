import React, {Component} from "react";

import "./Text.css";

class Text extends Component{
    constructor(props){
        super(props);
        this.state = this.props.done;
        this.text = this.props.text;
    }
    
    render(){
        const {done} = this.props.done;
        return <span style = {{textDecoration: done ? "line-through":"none"}} className="text" > {this.text} </span>;
    }
}
export default Text;