import React from "react";
import {connect} from "react-redux";
import {AddTask, DoneTask} from "../../controller/MyActions";
import Task from "../Task/Task";
import "./ToDoList.css";
import TaskCreator from "../TaskCreator/TaskCreator";

const mapStateToProps = (storeState) => ({
    tasks : storeState.tasks 
   })
   
   const mapDispatchToProps = (dispatch) => ({
       AddTask: (...args) => dispatch(AddTask(...args)),
       DoneTask: (...args) => dispatch(DoneTask(...args))
   })

const ToDoList = (props) => <div className="ToDoList"> 
{
    [...props.tasks].map(task => <Task 
        taskInfo = {task} 
        key = {task.id}
        ChangeStateTask={() => {props.DoneTask(task.id)}}/> )
}
<TaskCreator
AddTask={props.AddTask}/>
</div>

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);