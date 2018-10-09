import React, { Component } from "react";

import "./TaskText.css"

class TaskText extends Component {
    render() {
        return <div className={`TaskText ${this.props.striked ? "striked" : ""}`}>{this.props.task}</div>
    }
}

export default TaskText;