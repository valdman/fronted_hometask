import React from "react";


import "./ToDoList.css"
import Task from "../Task/Task"
const ToDoList = ({tasks}) => <div className="ToDoList"> {tasks.map(taskText => <Task key = {taskText.slice(0,10)} text={taskText}/>)}
</div>

export default ToDoList;