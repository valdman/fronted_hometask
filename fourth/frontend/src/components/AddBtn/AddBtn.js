import React, { Component } from 'react';

import './AddBtn.css'

class AddBtn extends Component {
   constructor(props) {
      super(props);

      this.state = {
         disabled: false
      }
   }

   disable = () => {
      this.setState(() => ({
         disabled: true
      })) 
   }

   render() {
      const {onClick, id} = this.props;
      const {disabled} = this.state;

      return (
         <button className="add-btn" onClick={() => {
            if (!disabled) {
               this.disable();
               onClick(id);
            }
         }} 
         style={{backgroundColor: !disabled ? "#3498db" : "#CCC"}}>
            {disabled ? "Added" : "Add in cart"}
         </button>
      )
   }
}

export default AddBtn;