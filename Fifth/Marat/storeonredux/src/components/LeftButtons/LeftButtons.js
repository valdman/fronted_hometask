import React from 'react';

import './LeftButtons.css'

const LeftButtons = (props) => {
    return(
        <div className="Left_buttons">
            <span className="Left_buttons">RightPlace shop</span>
            <button className="Left_buttons" href="index.html">Home</button>
            <button type="button" className="Left_buttons" onClick={props.CartClicked}>Cart</button>
        </div>
    )
}

export default LeftButtons;