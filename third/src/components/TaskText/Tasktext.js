import React, { Component } from "react";

import "./TaskText.css"

class TaskText extends Component {
    constructor(props) {
        super(props);
        this.text = props.task;
    }

    // state = {
    //     striked: false
    // };

    render() {
        return <div className={`TaskText ${this.props.striked ? "striked" : ""}`}>{this.text}</div>
    }


}

export default TaskText;