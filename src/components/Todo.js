import React from 'react';

export default ({label, done, onCheck, onDelete}) => (
  <div>
    <span onClick={onCheck}>{done?'Finished':'Not Done Yet'}</span>
    &nbsp;&nbsp;&nbsp;
    {label}
    &nbsp;&nbsp;&nbsp;
    <span onClick={onDelete}>Delete</span>
  </div>
);