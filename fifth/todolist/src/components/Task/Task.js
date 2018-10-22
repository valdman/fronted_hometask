import React, { Component } from 'react';

import {connect} from 'react-redux';
import {toggleTask} from '../../js/actions/toggleTask';

import Text from '../Text/Text';
import Checkbox from '../Checkbox/Checkbox';

import './Task.css';

const mapDispatchToProps = dispatch => {
  return {
    toggleTask: id => dispatch(toggleTask(id))
  }
}

class Task extends Component {
   toggle = () => {
      this.props.toggleTask(this.props.id)
   }

   render() {
      const {text, done, id} = this.props;
      return (
         <div className="task">
            <Checkbox clickEvent={this.toggle} id={id}/>
            <Text text={text} done={done}/>
         </div>
      )
   }
}

export default connect(null, mapDispatchToProps)(Task);