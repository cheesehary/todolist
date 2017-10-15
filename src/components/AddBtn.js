import React from 'react';

export default ({isFull, onAdd}) => {
  if(isFull) {
    return (
      <div className="todo-label font-20 add">
        <span className="add-btn">You already have enough Todos!</span>
      </div>
    );
  } else {
    return (
      <div className="todo-label font-20 add" onClick={onAdd}>
        <span className="pointer add-btn">Add a new Todo</span>
      </div>
    );
  }
};