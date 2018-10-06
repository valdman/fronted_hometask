import React, {Component} from "react";

import "./TaskText.css"

class TaskText extends Component
{
    constructor(props)
    {
        super(props);
        this.text = props.task;
        console.log(props);
    }

    render()
    {
        return <div className="TaskText">{this.text}</div>
    }

    
}

export default TaskText;