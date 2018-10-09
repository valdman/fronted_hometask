import React from "react";
import Task from "../../components/Task/Task";

import "./ToDoList.css";

const ToDoList = ({tasks}) => <div className="ToDoList">
    {tasks.map((task, i) => <Task task={task} key={"Task" + i} index={i}></Task>)}
</div>;

export default ToDoList;