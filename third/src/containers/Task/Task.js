import React from "react";

import TaskCheckbox from "../../components/TaskCheckbox/TaskCheckbox";
import TaskText from "../../components/TaskText/TaskText"

const Task = ({task}) => <div className="Task" key={task}>
    <TaskCheckbox onchange = {ChangeTaskState.bind(this)} key={}>

    </TaskCheckbox>
    <TaskText task={task} >

    </TaskText>
</div>
;

const ChangeTaskState = () => {
    console.log("Clicked");
}
export default Task;