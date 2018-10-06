import React, { Component } from "react";

import TaskCheckbox from "../../components/TaskCheckbox/TaskCheckbox";
import TaskText from "../../components/TaskText/TaskText"

// const Task = ({task}) => <div className="Task">
//     <TaskCheckbox onchange = {ChangeTaskState.bind(this)}>

//     </TaskCheckbox>
//     <TaskText task={task} >

//     </TaskText>
// </div>
// ;

class Task extends Component {
    constructor(props) {
        super(props);
        this.task = props.task
    };

    state = {
        done: false
    };

    ChangeTaskState = () => {
        this.setState({ done: this.state.done ? false : true });
    };

    render() {
        return <div className="Task">
            <TaskCheckbox onchange={this.ChangeTaskState.bind(this)} checked={this.state.done}>

            </TaskCheckbox>
            <TaskText task={this.task} striked={this.state.done}>

            </TaskText>
        </div>
    };
}

export default Task;