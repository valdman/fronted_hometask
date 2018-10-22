import React, { Component, Fragment } from 'react';

import './Checkbox.css';

class ToDoList extends Component {
   render() {
      const { clickEvent, id } = this.props;
      return (
         <Fragment>
            <input id={id} onClick={clickEvent} type="checkbox" />
            <label htmlFor={id}></label>
         </Fragment>
      )
   }
}

export default ToDoList;