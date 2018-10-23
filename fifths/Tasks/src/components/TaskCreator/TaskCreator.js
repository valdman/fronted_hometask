import React, {Component} from "react";

import "./TaskCreator.css";

class TaskCreator extends Component{
    constructor(props){
        super(props);
        this.state = {value : ""};
        this.onChange = (event) => {
            let val = event.target.value;
            this.setState(prevState => ({value : val}))
        }
    }

    render(){
        return <div id="taskCreator">
        <input id="newTask" onChange={this.onChange}/>
        <input type="button" id="createTask" value="Create task" onClick={() => this.props.AddTask(this.state.value)}/>
    </div>
    }
}

export default TaskCreator;