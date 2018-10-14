import React from 'react';

const Checkbox = ({ changeState }) =>
   <input type="checkbox" onChange={() => { changeState() }} />

export default Checkbox;