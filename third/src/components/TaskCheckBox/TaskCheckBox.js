import React, {Component} from "react";
import "./TaskCheckbox.css"

class TaskCheckbox extends Component
{
    constructor(props)
    {
        super(props);
        this.state = false;
        onchange = props.onchange;
    }

    render()
    {
        return <input type="checkbox" className="TaskCheckbox" />
    }
}

export default TaskCheckbox;