import React, {Component} from "react";

import "./Task.css";
import Chekbox from "../Checkbox/Checkbox";
import Text from "../Text/Text";

class Task extends Component{
    constructor(props){
        super(props);
        this.state ={
            done: false
        };
    }
    onCheckboxChanged = () => {
    this.setState((prevState) => ({ // prevState лежит в state
        done: !prevState.done
    }))
    }
    render(){
        return <div className="Task">
        <Chekbox done={this.state} onCheckboxChanged={this.onCheckboxChanged} />
        <Text text = {this.props.text} done={this.state}/>
        </div>;
    }
}

    export default Task;