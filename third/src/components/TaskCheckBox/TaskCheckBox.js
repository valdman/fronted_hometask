import React, {Component} from "react";
import "./TaskCheckbox.css"

class TaskCheckbox extends Component
{
    constructor(props)
    {
        super(props);
        //this.onchange = props.onchange;
        onchange = props.onchange;
    }

    // state = {
    //     checked: false
    // }

    render()
    {
        return <input type="checkbox" className={`TaskCheckbox ${this.props.checked ? "checked": ""}`} />
    }
}

export default TaskCheckbox;