import React from 'react';

export default ({isFull, onAdd}) => {
  if(isFull) {
    return (
      <span className="add-btn">You already have enough Todos!</span> 
    );
  } else {
    return (
      <span className="pointer add-btn" onClick={onAdd}>Add a new Todo</span>
    );
  }
};