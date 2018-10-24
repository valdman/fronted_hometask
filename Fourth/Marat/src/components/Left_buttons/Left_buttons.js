import React from 'react';

import './Left_buttons.css'

const Left_buttons = (props) => {

    return(
        <div className="Left_buttons">
            <span className="Left_buttons">RightPlace shop</span>
            <a className="Left_buttons" href="index.html">Home</a>
            <a className="Left_buttons" href="#" onClick={props.CartClicked}>Cart</a>
        </div>
    )
}

export default Left_buttons;