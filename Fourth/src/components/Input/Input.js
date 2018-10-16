import React,{Component} from "react";


class Input extends Component{
    constructor(props){
        super(props);
        this.state = {value: ""};
        this.onChange = (event) => {
            let value =event.target.value;
            this.setState(prevState => ({value: value}))
        }
    }
    render(){
       return <input  id={this.props.id} onChange={this.onChange}/>
    }
}

export default Input;