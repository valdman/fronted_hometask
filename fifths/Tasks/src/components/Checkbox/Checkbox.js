import React, {Component} from "react";

import "./Checkbox.css"

class Chekbox extends Component{

    render(){ 
        
        return <label><input 
        type = "checkbox"
        className="checkbox"
        onChange = {this.props.ChangeStateTask} />
        <span className="checkbox-custom"></span>
        <span className="label"></span>
        </label>
    }

}

export default Chekbox;