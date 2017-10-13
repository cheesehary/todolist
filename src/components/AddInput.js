import React from 'react';

export default ({value, onInput, onConfirm, onCancel}) => (
  <div>
    <input type="text" value={value}
           onInput={onInput}
           ref={el => el && el.focus()}
    />
    <span onClick={onConfirm}>Confirm</span>
    <span onClick={onCancel}>Cancel</span>
  </div>
);