import React, { Component } from "react";

import TaskCheckbox from "../TaskCheckbox/TaskCheckbox";
import TaskText from "../TaskText/TaskText"

import "./Task.css";

class Task extends Component {

    state = {
        done: false
    }

    handleTaskChange = () => {
        this.setState(
            { done: this.state.done ? false : true }
        );
    };

    render() {
        return <div className={`Task ${this.state.done ? "done" : ""} `}>
            <TaskCheckbox
                onchange={this.handleTaskChange.bind(this)}
                checked={this.state.done} 
                key={"TaskCheckbox" + this.task}
                buttonId={`Button${this.props.index}`}>
            </TaskCheckbox>
            <TaskText
                task={this.props.task}
                striked={this.state.done}
                key={"TaskText" + this.task}>
            </TaskText>
        </div>
    };
}

export default Task;