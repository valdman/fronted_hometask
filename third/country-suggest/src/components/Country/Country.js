import React from 'react';

import './Country.css';

const Country = ({ img, text, onClick }) =>
   <li className="country" onClick={() => { onClick(text) }}>
      <img src={img} alt="img" />
      <span>{text}</span>
   </li>

export default Country;
