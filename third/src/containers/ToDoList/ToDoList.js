import React from "react";
import Task from "../Task/Task";

import "./ToDoList.css";

const ToDoList = ({tasks}) => <div className="ToDoList">
    {tasks.map(task => <Task task={task} key={task}></Task>)}
</div>;

export default ToDoList;