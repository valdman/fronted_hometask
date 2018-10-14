import React from 'react';

const Text = ({ text, done }) =>
   <span style={{ textDecoration: done ? 'line-through' : '' }}>{text}</span>

export default Text;