import React, { Component } from "react";

import TaskCheckbox from "../TaskCheckbox/TaskCheckbox";
import TaskText from "../TaskText/TaskText"

import "./Task.css";

class Task extends Component {
    constructor(props) {
        super(props);
        this.task = props.task
        // this.state = {
        //     done: false
        // };

    };

    state = {
        done: false
    }

    ChangeTaskState = () => {
        this.setState(
            { done: this.state.done ? false : true }
        );
        //{ done: this.state.done ? false : true }
    };

    render() {
        return <div className={`Task ${this.state.done ? "done" : ""} `}>
            <TaskCheckbox onchange={this.ChangeTaskState.bind(this)} checked={this.state.done} key={"TaskCheckbox" + this.task}>
            </TaskCheckbox>
            <TaskText task={this.task} striked={this.state.done} key={"TaskText" + this.task}>
            </TaskText>
        </div>
    };
}

export default Task;