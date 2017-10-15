import React from 'react';

export default ({value, onInput, onConfirm, onCancel, isErr}) => (
  <div className={`todo-label font-20 add ${isErr && 'todo-label_err'}`}>
    <input className="add-input" type="text" value={value}
           onInput={onInput}
           ref={el => el && el.focus()}
    />
    <span className="icon add-pop" onClick={onConfirm}><img className="icon" src={require("../views/img/confirm.svg")} /></span>
    <span className="icon add-pop" onClick={onCancel}><img className="icon" src={require("../views/img/cancel.svg")} /></span>
  </div>
);