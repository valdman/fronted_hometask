import React, {Component} from "react";

import "./Task.css";
import Chekbox from "../Checkbox/Checkbox";
import Text from "../Text/Text";

class Task extends Component{
    
    render(){
        return <div className="Task">
        <Chekbox 
            ChangeStateTask={this.props.ChangeStateTask}/>
        <Text 
            text = {this.props.taskInfo.descr} 
            done={this.props.taskInfo.done}/>
        </div>;
    }
}

    export default Task;