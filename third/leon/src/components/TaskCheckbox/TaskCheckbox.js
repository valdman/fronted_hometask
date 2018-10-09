import React, { Component } from "react";
import "./TaskCheckbox.css"

class TaskCheckbox extends Component {
    render() {
        var newClass = this.props.checked ? "checked" : "";
        return customButton(newClass, this.props.buttonId, this.props.onchange)
    }
}

const customButton = (addClass, buttonId, onchange) => {
    return <div className="checkboxContainer">
        <input className={`inp-cbx ${addClass}`} id={buttonId} type="checkbox" onChange={onchange} />
        <label className={`cbx ${addClass}`} htmlFor={buttonId}>
            <span>
                <svg width="14px" height="14px" viewBox="0 0 14 14">
                    <polyline points="1.5 8 5.5 12 12.5 1.5"></polyline>
                </svg>
            </span>
        </label>
    </div>
}

export default TaskCheckbox;