import React from "react";

import Task from "../Task/Task"

const ToDoList = ({tasks}) => <div className="ToDoList">
    {tasks.map(task => <Task task={task}></Task>)}
</div>;

export default ToDoList;

function myFunc(tasks)
{
    console.log(tasks);
}