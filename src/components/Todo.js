import React from 'react';

export default ({label, done, onCheck, onDelete}) => (
  <div className="todo font-20">
    <span className="pointer" onClick={onCheck}>
      <img className="icon" src={require(`../views/img/${done?'done':'not_done'}.svg`)} />
    </span>
    <span className="todo-label">{label}</span>
    <span className="pointer" onClick={onDelete}>
      <img className="icon" src={require("../views/img/delete.svg")} />
    </span>
  </div>
);