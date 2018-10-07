import React, { Component } from "react";
import "./TaskCheckbox.css"

class TaskCheckbox extends Component {
    constructor(props) {
        super(props);
        //this.onchange = props.onchange;
        //lol = props.onchange;
        this.id = Math.floor(Math.random() * 10000);
    }
    // state = {
    //     checked: false
    // }

    // render() {
    //     return <input type="checkbox"
    //         onChange={this.props.onchange}
    //         className={`TaskCheckbox ${this.props.checked ? "checked" : ""}`}
    //         checked={this.props.checked}
    //     />
    // }

    render() {
        var newClass = this.props.checked ? "checked" : "";
        return <div className="checkboxContainer">
            <input className={`inp-cbx ${newClass}`} id={this.id} type="checkbox" onChange={this.props.onchange}/>
            <label className={`cbx ${newClass}`} for={this.id}><span>
                <svg width="14px" height="14px" viewbox="0 0 14 14">
                    <polyline points="1.5 8 5.5 12 12.5 1.5"></polyline>
                </svg></span></label>
        </div>
    }
}

export default TaskCheckbox;