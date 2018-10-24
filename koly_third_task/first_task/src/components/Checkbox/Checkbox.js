import React, {Component} from "react";


import "./Checkbox.css"


class Chekbox extends Component{
    constructor(props){
        super(props);
        this.state = {done: props.done}
        this.onCheckboxChanged =props.onCheckboxChanged;
    };

    
    
    render(){ 
        
        return <label><input 
        type = "checkbox"
        className="checkbox"
        onChange = {this.onCheckboxChanged} />
        <span class="checkbox-custom"></span>
        <span class="label"></span>
        </label>
    }

}

export default Chekbox;